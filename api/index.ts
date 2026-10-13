import express from 'express';
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
    const match = trimmed.match(/```(?:json)?\s*([\s\S]*?)\s*```/);
    if (match && match[1]) {
      return JSON.parse(match[1].trim());
    }
    const firstBrace = trimmed.indexOf('{');
    const lastBrace = trimmed.lastIndexOf('}');
    if (firstBrace !== -1 && lastBrace !== -1 && lastBrace > firstBrace) {
      return JSON.parse(trimmed.slice(firstBrace, lastBrace + 1));
    }
    throw new Error('Não foi possível extrair um objeto JSON válido da resposta do modelo.');
  }
}

const app = express();

// Support base64 image uploads up to 25MB
app.use(express.json({ limit: '25mb' }));
app.use(express.urlencoded({ extended: true, limit: '25mb' }));

const router = express.Router();

// Health check endpoint
router.get('/health', (req, res) => {
  res.json({
    status: 'ok',
    apiKeyConfigured: isOpenRouterConfigured(),
    provider: 'openrouter',
  });
});

// Plant identification endpoint using OpenRouter Vision
router.post('/identify-plant', async (req, res) => {
  try {
    const { imageBase64, mimeType = 'image/jpeg', userPrompt } = req.body;

    if (!imageBase64) {
      return res.status(400).json({ error: 'Image data is required.' });
    }

    const cleanBase64 = imageBase64.replace(/^data:image\/\w+;base64,/, '');
    const imageUrl = `data:${mimeType};base64,${cleanBase64}`;

    const promptText = `
Você é uma autoridade máxima em taxonomia vegetal, botânica e jardinagem prática.
Examine a foto desta planta minuciosamente.
1. Identifique a planta com máxima precisão (nome popular comum em Português do Brasil, nome científico binomial em latim botânico, família botânica e tipo de planta).
2. Avalie o estado de saúde visual do espécime (coloração da folhagem, turgidez das folhas, sinais de pragas, fungos, desidratação, excesso de água, deficiência nutricional ou saúde excelente).
3. Forneça instruções de cultivo completas, práticas e personalizadas para esta espécie específica.
${userPrompt ? `Observação enviada pelo usuário: "${userPrompt}"` : ''}

IMPORTANTE: Todos os textos explicativos, nomes populares, descrições, diagnósticos, recomendações de rega, luz, substrato, temperatura, adubação, poda, toxicidade e curiosidades DEVEM estar estritamente em Português do Brasil (pt-BR). Mantenha o nome científico no padrão botânico binomial.

Responda ESTRITAMENTE em formato JSON válido respeitando o seguinte schema de propriedades:
{
  "commonName": string,
  "scientificName": string,
  "family": string,
  "confidence": "high" | "medium" | "low",
  "confidenceScore": number (0 a 100),
  "description": string (resumo vívido em 2-3 frases),
  "nativeHabitat": string,
  "plantType": string,
  "difficultyLevel": "Beginner Friendly" | "Moderate" | "Advanced / Demanding",
  "healthAssessment": {
    "status": "Healthy" | "Needs Attention" | "Critical / Diseased",
    "summary": string,
    "diagnoses": [
      {
        "issue": string,
        "severity": "mild" | "moderate" | "severe",
        "suggestion": string
      }
    ]
  },
  "careInstructions": {
    "watering": {
      "frequency": string,
      "summary": string,
      "details": string,
      "signsOfUnderWatering": string,
      "signsOfOverWatering": string
    },
    "light": {
      "requirement": string,
      "summary": string,
      "details": string,
      "directSunTolerance": string
    },
    "soilAndPotting": {
      "mixType": string,
      "drainageNeeds": string,
      "repottingSchedule": string
    },
    "temperatureAndHumidity": {
      "tempRange": string,
      "humidityNeeds": string,
      "coldTolerance": string,
      "humidityTips": string
    },
    "fertilizing": {
      "schedule": string,
      "fertilizerType": string,
      "winterCare": string
    },
    "pruningAndMaintenance": {
      "tips": string[],
      "propagationMethod": string
    },
    "toxicity": {
      "toxicToPets": boolean,
      "petDetails": string,
      "toxicToHumans": boolean
    },
    "seasonalCalendar": {
      "springSummer": string,
      "fallWinter": string
    }
  },
  "funFacts": string[] (2-3 curiosidades)
}
`;

    const messages: OpenRouterMessage[] = [
      {
        role: 'system',
        content:
          'Você é uma cientista botânica e especialista hortícola. Você sempre responde em Português do Brasil (pt-BR), com rigor taxonômico e orientações práticas de jardinagem em JSON válido.',
      },
      {
        role: 'user',
        content: [
          { type: 'text', text: promptText },
          { type: 'image_url', image_url: { url: imageUrl } },
        ],
      },
    ];

    const visionModel = process.env.OPENROUTER_MODEL_VISION || 'google/gemini-2.5-flash';
    const rawText = await callOpenRouter({
      model: visionModel,
      messages,
      responseFormat: { type: 'json_object' },
      temperature: 0.2,
    });

    const parsed = extractAndParseJson(rawText);
    res.json(parsed);
  } catch (error: any) {
    console.error('Error in /api/identify-plant:', error);
    res.status(500).json({
      error: error?.message || 'Falha ao identificar planta via OpenRouter. Por favor, tente novamente.',
    });
  }
});

// Multi-turn Chatbot endpoint
router.post('/chat', async (req, res) => {
  try {
    const {
      messages,
      plantContext,
      taskType = 'general',
    } = req.body;

    if (!Array.isArray(messages) || messages.length === 0) {
      return res.status(400).json({ error: 'Messages array is required.' });
    }

    let systemInstruction = `Você é Flora, Mestra em Botânica, Horticultora Certificada e Especialista Sênior em Cuidados de Plantas.
Você tem mais de 20 anos de experiência em pesquisa botânica, propagação vegetal e cultivo prático em estufas e jardins residenciais.
Sua missão é orientar pessoas apaixonadas por plantas em todos os níveis — desde quem acabou de comprar sua primeira suculenta até cultivadores experientes.
Forneça sempre conselhos claros, acionáveis, calorosos, encorajadores e rigorosamente fundamentados na ciência botânica.
Responda SEMPRE em Português do Brasil (pt-BR).
Utilize formatação Markdown elegante com marcadores e destaques em negrito para facilitar a leitura.
Nunca cite nomes técnicos de modelos ou provedores de IA; apresente-se sempre como Flora, sua assistente botânica do Brota.`;

    if (plantContext) {
      systemInstruction += `\n\nCONTEXTO DO ESPÉCIME ATIVO NO MOMENTO:
A pessoa está consultando você especificamente sobre esta planta identificada:
- Nome: ${plantContext.commonName || 'Desconhecida'} (${plantContext.scientificName || 'Não informado'})
- Família: ${plantContext.family || 'N/A'}
- Visão geral de cuidados: Rega ${plantContext.careInstructions?.watering?.frequency || 'regular'}, Luz: ${plantContext.careInstructions?.light?.requirement || 'indireta brilhante'}, Temperatura: ${plantContext.careInstructions?.temperatureAndHumidity?.tempRange || 'ambiente'}.
- Estado de Saúde: ${plantContext.healthAssessment?.status || 'Normal'} - ${plantContext.healthAssessment?.summary || ''}
Leve em consideração e cite as características biológicas dessa espécie sempre que pertinente!`;
    }

    const chatMessages: OpenRouterMessage[] = [
      { role: 'system', content: systemInstruction },
      ...messages.map((m: { role: string; content: string }) => ({
        role: (m.role === 'user' ? 'user' : 'assistant') as 'user' | 'assistant',
        content: m.content,
      })),
    ];

    const model =
      process.env.OPENROUTER_MODEL_CHAT ||
      process.env.OPENROUTER_MODEL ||
      'google/gemini-2.5-flash';

    const responseText = await callOpenRouter({
      model,
      messages: chatMessages,
      temperature: 0.7,
    });

    const modeLabels: Record<string, string> = {
      complex: 'Diagnóstico Aprofundado',
      fast: 'Dicas Rápidas',
      general: 'Cuidados Gerais',
    };

    res.json({
      role: 'model',
      content: responseText,
      modelUsed: modeLabels[taskType] || 'Assistente Flora',
      timestamp: new Date().toISOString(),
    });
  } catch (error: any) {
    console.error('Error in /api/chat:', error);
    res.status(500).json({
      error: error?.message || 'A assistente botânica encontrou uma instabilidade. Por favor, tente novamente.',
    });
  }
});

// Fast Quick Tips endpoint
router.post('/quick-tips', async (req, res) => {
  try {
    const { plantName, topic = 'general' } = req.body;
    if (!plantName) {
      return res.status(400).json({ error: 'O nome da planta é obrigatório.' });
    }

    const model =
      process.env.OPENROUTER_MODEL_FAST ||
      process.env.OPENROUTER_MODEL ||
      'google/gemini-2.5-flash';

    const messages: OpenRouterMessage[] = [
      {
        role: 'system',
        content: 'Você é um índice botânico rápido de consulta prática. Responda estritamente em Português do Brasil (pt-BR).',
      },
      {
        role: 'user',
        content: `Forneça 3 dicas práticas imediatas e de alto impacto para a planta ${plantName} sobre o tema ${topic}. Responda em Português do Brasil em tópicos concisos de 1-2 frases cada.`,
      },
    ];

    const tipsText = await callOpenRouter({
      model,
      messages,
      temperature: 0.4,
    });

    res.json({
      tips: tipsText,
      engine: 'Guia Rápido Botânico',
    });
  } catch (error: any) {
    console.error('Error in /api/quick-tips:', error);
    res.status(500).json({ error: error?.message || 'Falha ao buscar dicas rápidas.' });
  }
});

// Mount router on both '/api' and '/'
app.use('/api', router);
app.use('/', router);

export { app };
export default function handler(req: any, res: any) {
  return app(req, res);
}
