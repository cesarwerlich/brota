# 🌱 Brota

> Aprender e praticar jardinagem juntos em família, usando IA para apoiar o cultivo, a curiosidade e o cuidado com as plantas.

---

## 🌿 Sobre o Projeto

**Brota** (anteriormente *dr-garden*) é um projeto pessoal e educacional construído por Cesar em conjunto com sua afilhada.

O objetivo central é aprender jardinagem e biologia botânica na prática, promovendo a curiosidade, a observação e a experimentação manual. A inteligência artificial atua como uma companheira que responde dúvidas, ajuda a diagnosticar problemas foliares, sugere rotinas de rega e sol, e acompanha o crescimento das plantas.

### Foco Inicial de Cultivo:
- 🌸 **Flores e plantas ornamentais** (orquídeas, suculentas, samambaias).
- 🌿 **Ervas aromáticas e medicinais** (manjericão, alecrim, hortelã).
- 🍅 **Hortaliças e frutos**, especialmente **tomates** (os favoritos dela!).
- 🌱 Compreensão prática de plantio, rega, iluminação natural, tipos de solo/substrato e colheita.

### Princípio do Produto:
> **A IA apoia a experiência real no mundo físico. Ela nunca substitui o contato com a terra, a observação e a prática.**

---

## 🚀 Como Executar Localmente

### Pré-requisitos
- **Node.js** (v18+) ou **Bun**
- Chave de API do **Google Gemini** ([Google AI Studio](https://aistudio.google.com/))

### 1. Clonar e Instalar Dependências
```bash
git clone https://github.com/cesarwerlich/brota.git
cd brota
./scripts/bootstrap.sh
```
*(ou manualmente com `npm install`)*

### 2. Configurar Variáveis de Ambiente
Copie o arquivo de exemplo e insira sua chave da API Gemini:
```bash
cp .env.example .env
```
Edite `.env`:
```env
GEMINI_API_KEY="sua_chave_do_gemini"
PORT=3000
```

### 3. Iniciar em Desenvolvimento
```bash
npm run dev
```
O servidor iniciará em `http://localhost:3000` com suporte a Vite HMR no frontend e API Express no backend.

### 4. Executar Verificações
```bash
./scripts/check.sh
```
Executa a validação de tipos TypeScript (`tsc --noEmit`) e a compilação de produção (`vite build` + `esbuild`).

---

## 🏗️ Arquitetura

O Brota é intencionalmente enxuto e de fácil manutenção:
- **Frontend**: React 19, Tailwind CSS v4, Lucide React, Framer Motion.
- **Backend**: Express + TypeScript servindo a API botânica e a SPA.
- **IA**: Google GenAI SDK (`@google/genai`) utilizando:
  - `gemini-3.1-pro-preview` para identificação botânica detalhada e diagnóstico visual por imagem.
  - `gemini-3.5-flash` / `gemini-3.1-flash-lite` para o chatbot botânico consultivo ("Flora") e dicas rápidas de cultivo.
- **Armazenamento**: LocalStorage para o "Meu Jardim" e histórico de conversas, garantindo privacidade e custo zero de banco de dados.

---

## 🛡️ Segurança e Privacidade Infantil / Familiar

Por ser um projeto voltado para uso em família com uma criança:
1. **Sem coleta de dados pessoais sensíveis**: não armazenamos nem solicitamos nomes completos, localização exata ou dados escolares.
2. **Privacidade de imagens**: fotos tiradas são enviadas exclusivamente para o modelo botânico para fins de identificação, sem publicação pública.
3. **Linguagem acolhedora e segura**: respostas da assistente são educativas, claras, encorajadoras e apropriadas para todas as idades.
4. **Sem paywalls ou cobranças reais**: o projeto é estritamente pessoal e educacional.

---

## 📜 Licença e Governança

Projeto pessoal mantido por [@cesarwerlich](https://github.com/cesarwerlich).
Consulte `AGENTS.md` e `CONTEXT.md` para instruções de desenvolvimento e regras de agentes.
