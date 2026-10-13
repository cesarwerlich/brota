import dotenv from 'dotenv';

dotenv.config();

export interface OpenRouterContentPartText {
  type: 'text';
  text: string;
}

export interface OpenRouterContentPartImage {
  type: 'image_url';
  image_url: {
    url: string;
  };
}

export type OpenRouterContentPart = OpenRouterContentPartText | OpenRouterContentPartImage;

export interface OpenRouterMessage {
  role: 'system' | 'user' | 'assistant';
  content: string | OpenRouterContentPart[];
}

export interface CallOptions {
  model?: string;
  messages: OpenRouterMessage[];
  responseFormat?: { type: 'json_object' };
  temperature?: number;
  maxTokens?: number;
}

export function getOpenRouterApiKey(): string | undefined {
  return process.env.OPENROUTER_API_KEY || process.env.GEMINI_API_KEY;
}

export function isOpenRouterConfigured(): boolean {
  return !!getOpenRouterApiKey();
}

/**
 * Sends a chat completion request to OpenRouter.
 */
export async function callOpenRouter(options: CallOptions): Promise<string> {
  const apiKey = getOpenRouterApiKey();
  if (!apiKey) {
    throw new Error('Chave OPENROUTER_API_KEY não configurada no servidor.');
  }

  const model = options.model || process.env.OPENROUTER_MODEL || 'google/gemini-2.5-flash';
  const appUrl = process.env.APP_URL || 'https://brota.app';

  const body: Record<string, any> = {
    model,
    messages: options.messages,
    temperature: options.temperature ?? 0.3,
  };

  if (options.responseFormat) {
    body.response_format = options.responseFormat;
  }

  if (options.maxTokens) {
    body.max_tokens = options.maxTokens;
  }

  const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'HTTP-Referer': appUrl,
      'X-Title': 'Brota',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  });

  if (!response.ok) {
    const errorData = (await response.json().catch(() => ({}))) as any;
    const errorMsg =
      errorData?.error?.message ||
      `Erro na chamada da OpenRouter API (status ${response.status}: ${response.statusText})`;
    throw new Error(errorMsg);
  }

  const data = (await response.json()) as any;
  const content = data?.choices?.[0]?.message?.content;

  if (typeof content !== 'string') {
    throw new Error('Resposta vazia ou inválida recebida da OpenRouter.');
  }

  return content;
}

/**
 * Safely extracts and parses JSON even if wrapped in markdown code fences.
 */
export function extractAndParseJson<T = any>(text: string): T {
  const trimmed = text.trim();
  try {
    return JSON.parse(trimmed);
  } catch {
    // Try extracting from markdown fence ```json ... ```
    const match = trimmed.match(/```(?:json)?\s*([\s\S]*?)\s*```/);
    if (match && match[1]) {
      return JSON.parse(match[1].trim());
    }
    // Try finding outermost JSON object braces
    const firstBrace = trimmed.indexOf('{');
    const lastBrace = trimmed.lastIndexOf('}');
    if (firstBrace !== -1 && lastBrace !== -1 && lastBrace > firstBrace) {
      return JSON.parse(trimmed.slice(firstBrace, lastBrace + 1));
    }
    throw new Error('Não foi possível extrair um objeto JSON válido da resposta do modelo.');
  }
}
