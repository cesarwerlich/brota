import test from 'node:test';
import assert from 'node:assert/strict';
import { sanitizeText, createRateLimiter, extractAndParseJson, app } from '../api/index.ts';

test('sanitizeText trims, strips control characters, and enforces length caps', () => {
  assert.equal(sanitizeText(null, 100), '');
  assert.equal(sanitizeText(12345, 100), '');
  assert.equal(sanitizeText('   hello world   ', 100), 'hello world');

  // Control characters stripped
  const malicious = 'clean\u0000text\u0007with\u001Fcontrol';
  assert.equal(sanitizeText(malicious, 100), 'cleantextwithcontrol');

  // Length capping
  const longInput = 'A'.repeat(500);
  assert.equal(sanitizeText(longInput, 50).length, 50);
  assert.equal(sanitizeText(longInput, 300).length, 300);
});

test('extractAndParseJson correctly extracts JSON from various LLM response formats', () => {
  // Raw JSON
  const raw = '{"commonName": "Tomate", "confidenceScore": 95}';
  assert.deepEqual(extractAndParseJson(raw), { commonName: 'Tomate', confidenceScore: 95 });

  // Fenced JSON
  const fenced = 'Aqui está a resposta:\n```json\n{"commonName": "Manjericão"}\n```\nEspero ter ajudado!';
  assert.deepEqual(extractAndParseJson(fenced), { commonName: 'Manjericão' });

  // Embedded JSON without code fence
  const embedded = 'Resultado botânico: {"commonName": "Alecrim"} confira as dicas.';
  assert.deepEqual(extractAndParseJson(embedded), { commonName: 'Alecrim' });

  // Invalid JSON throws error
  assert.throws(() => extractAndParseJson('Não há json nenhum aqui'), /Não foi possível extrair/);
});

test('createRateLimiter allows requests up to max and blocks with 429 when exceeded', () => {
  const limiter = createRateLimiter({
    windowMs: 1000,
    max: 3,
    message: 'Rate limit test exceeded',
  });

  const responses = [];
  const makeMockReqRes = (ip) => {
    const headers = {};
    const res = {
      statusCode: 200,
      setHeader(name, val) {
        headers[name] = val;
      },
      status(code) {
        this.statusCode = code;
        return this;
      },
      json(data) {
        this.body = data;
        return this;
      },
    };
    const req = {
      headers: { 'x-forwarded-for': ip },
      socket: { remoteAddress: ip },
    };
    return { req, res, headers };
  };

  // Request 1: allowed
  let nextCalled1 = false;
  const pair1 = makeMockReqRes('1.2.3.4');
  limiter(pair1.req, pair1.res, () => { nextCalled1 = true; });
  assert.equal(nextCalled1, true);
  assert.equal(pair1.headers['X-RateLimit-Remaining'], 2);

  // Request 2: allowed
  let nextCalled2 = false;
  const pair2 = makeMockReqRes('1.2.3.4');
  limiter(pair2.req, pair2.res, () => { nextCalled2 = true; });
  assert.equal(nextCalled2, true);
  assert.equal(pair2.headers['X-RateLimit-Remaining'], 1);

  // Request 3: allowed
  let nextCalled3 = false;
  const pair3 = makeMockReqRes('1.2.3.4');
  limiter(pair3.req, pair3.res, () => { nextCalled3 = true; });
  assert.equal(nextCalled3, true);
  assert.equal(pair3.headers['X-RateLimit-Remaining'], 0);

  // Request 4: blocked (429)
  let nextCalled4 = false;
  const pair4 = makeMockReqRes('1.2.3.4');
  limiter(pair4.req, pair4.res, () => { nextCalled4 = true; });
  assert.equal(nextCalled4, false);
  assert.equal(pair4.res.statusCode, 429);
  assert.equal(pair4.res.body.error, 'Rate limit test exceeded');
  assert.equal(typeof pair4.headers['Retry-After'], 'number');

  // Different IP is NOT blocked
  let nextCalledOther = false;
  const pairOther = makeMockReqRes('5.6.7.8');
  limiter(pairOther.req, pairOther.res, () => { nextCalledOther = true; });
  assert.equal(nextCalledOther, true);
  assert.equal(pairOther.headers['X-RateLimit-Remaining'], 2);
});
