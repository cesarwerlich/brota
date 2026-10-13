import React, { useState, useRef, useEffect } from 'react';
import {
  Send,
  Sparkles,
  Bot,
  User,
  Trash2,
  Copy,
  Check,
  RefreshCw,
  Leaf,
  Zap,
  Microscope
} from 'lucide-react';
import Markdown from 'react-markdown';
import { ChatMessage, IdentifiedPlant, TaskMode } from '../types';
import { ConfirmModal } from './ConfirmModal';

interface GardeningChatbotProps {
  messages: ChatMessage[];
  setMessages: React.Dispatch<React.SetStateAction<ChatMessage[]>>;
  activePlant: IdentifiedPlant | null;
  setActivePlant: (plant: IdentifiedPlant | null) => void;
  initialPrompt?: string;
  onClearInitialPrompt?: () => void;
}

export function GardeningChatbot({
  messages,
  setMessages,
  activePlant,
  setActivePlant,
  initialPrompt,
  onClearInitialPrompt,
}: GardeningChatbotProps) {
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [taskMode, setTaskMode] = useState<TaskMode>('general');
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [isConfirmClearOpen, setIsConfirmClearOpen] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading]);

  useEffect(() => {
    if (initialPrompt && initialPrompt.trim()) {
      handleSend(initialPrompt);
      if (onClearInitialPrompt) {
        onClearInitialPrompt();
      }
    }
  }, [initialPrompt]);

  const handleSend = async (messageText?: string) => {
    const textToSend = (messageText || inputValue).trim();
    if (!textToSend || isLoading) return;

    const userMessageId = 'user-' + Date.now();
    const newUserMessage: ChatMessage = {
      id: userMessageId,
      role: 'user',
      content: textToSend,
      timestamp: new Date().toISOString(),
    };

    const updatedHistory = [...messages, newUserMessage];
    setMessages(updatedHistory);
    setInputValue('');
    setIsLoading(true);

    try {
      let currentTaskType: TaskMode = taskMode;
      const lower = textToSend.toLowerCase();
      if (
        taskMode === 'general' &&
        (lower.includes('diagnos') ||
          lower.includes('doenç') ||
          lower.includes('doenc') ||
          lower.includes('fung') ||
          lower.includes('podr') ||
          lower.includes('raiz') ||
          lower.includes('praga') ||
          lower.includes('morren') ||
          lower.includes('salvar'))
      ) {
        currentTaskType = 'complex';
      }

      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          messages: updatedHistory.map((m) => ({
            role: m.role,
            content: m.content,
          })),
          plantContext: activePlant
            ? {
                commonName: activePlant.commonName,
                scientificName: activePlant.scientificName,
                family: activePlant.family,
                healthAssessment: activePlant.healthAssessment,
                careInstructions: activePlant.careInstructions,
              }
            : null,
          taskType: currentTaskType,
        }),
      });

      if (!res.ok) {
        const errData = await res.json().catch(() => ({}));
        throw new Error(errData.error || `Erro de resposta (status ${res.status})`);
      }

      const data = await res.json();
      const botMessage: ChatMessage = {
        id: 'bot-' + Date.now(),
        role: 'model',
        content: data.content,
        timestamp: data.timestamp || new Date().toISOString(),
        modelUsed: data.modelUsed || 'Flora',
      };

      setMessages((prev) => [...prev, botMessage]);
    } catch (err: any) {
      console.error('Chat error:', err);
      const errorMessage: ChatMessage = {
        id: 'err-' + Date.now(),
        role: 'model',
        content: `⚠️ Não foi possível carregar a resposta (${err.message}). Tente reenviar.`,
        timestamp: new Date().toISOString(),
        modelUsed: 'Flora',
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const copyToClipboard = (id: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const sampleQuestions = [
    'Como saber se estou regando meu tomateiro na medida certa?',
    'O que fazer se o manjericão começar a murchar?',
    'Receita caseira natural contra pragas e pulgões',
    'Quais hortaliças são fáceis de plantar com crianças?',
  ];

  return (
    <div id="gardening-chatbot-container" className="bg-white rounded-3xl border border-stone-200 flex flex-col h-[680px] max-h-[80vh] overflow-hidden shadow-xs animate-in fade-in duration-300">
      {/* Minimal Header */}
      <div className="px-5 py-3.5 border-b border-stone-200/70 flex items-center justify-between shrink-0 bg-stone-50/50">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-xl bg-emerald-700 text-white flex items-center justify-center shadow-2xs">
            <Bot className="w-4 h-4" />
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="font-semibold text-sm font-serif-heading text-stone-900">
                Flora
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
            </div>
            <p className="text-[11px] text-stone-400">Guia botânica do Brota</p>
          </div>
        </div>

        {/* Mode pills */}
        <div className="flex items-center gap-1.5">
          <div className="flex items-center bg-stone-100 rounded-lg p-0.5 text-xs text-stone-600">
            <button
              type="button"
              onClick={() => setTaskMode('general')}
              className={`px-2 py-1 rounded-md text-[11px] transition-all cursor-pointer ${
                taskMode === 'general' ? 'bg-white text-stone-900 font-semibold shadow-2xs' : 'hover:text-stone-900'
              }`}
            >
              <Leaf className="w-3 h-3 inline mr-1 text-emerald-600" />
              Geral
            </button>
            <button
              type="button"
              onClick={() => setTaskMode('complex')}
              className={`px-2 py-1 rounded-md text-[11px] transition-all cursor-pointer ${
                taskMode === 'complex' ? 'bg-white text-stone-900 font-semibold shadow-2xs' : 'hover:text-stone-900'
              }`}
            >
              <Microscope className="w-3 h-3 inline mr-1 text-amber-600" />
              Diagnóstico
            </button>
            <button
              type="button"
              onClick={() => setTaskMode('fast')}
              className={`px-2 py-1 rounded-md text-[11px] transition-all cursor-pointer ${
                taskMode === 'fast' ? 'bg-white text-stone-900 font-semibold shadow-2xs' : 'hover:text-stone-900'
              }`}
            >
              <Zap className="w-3 h-3 inline mr-1 text-sky-600" />
              Rápido
            </button>
          </div>

          {messages.length > 0 && (
            <button
              type="button"
              onClick={() => setIsConfirmClearOpen(true)}
              title="Limpar conversa"
              className="p-1.5 rounded-lg text-stone-400 hover:text-stone-700 hover:bg-stone-100 transition-colors cursor-pointer"
            >
              <Trash2 className="w-3.5 h-3.5" />
            </button>
          )}
        </div>
      </div>

      {/* Active Specimen Context Bar */}
      {activePlant && (
        <div className="px-4 py-2 bg-emerald-50/60 border-b border-emerald-100 text-[11px] text-emerald-900 flex items-center justify-between shrink-0">
          <span className="truncate">
            Conversando sobre: <strong>{activePlant.commonName}</strong>
          </span>
          <button
            type="button"
            onClick={() => setActivePlant(null)}
            className="text-emerald-700 hover:text-emerald-950 underline shrink-0 cursor-pointer ml-2"
          >
            remover
          </button>
        </div>
      )}

      {/* Message Thread */}
      <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-4 bg-stone-50/30">
        {messages.length === 0 ? (
          <div className="h-full flex flex-col items-center justify-center text-center max-w-sm mx-auto py-6">
            <h4 className="text-base font-semibold text-stone-900 font-serif-heading mb-1">
              Dúvidas sobre seu cultivo?
            </h4>
            <p className="text-xs text-stone-400 mb-6">
              Pergunte sobre regas, podas, sol ou receitas caseiras.
            </p>

            <div className="w-full space-y-2 text-left">
              {sampleQuestions.map((q, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => handleSend(q)}
                  className="w-full text-left p-2.5 rounded-xl bg-white border border-stone-200 hover:border-emerald-300 text-xs text-stone-700 transition-colors cursor-pointer flex items-center justify-between group"
                >
                  <span className="truncate mr-2">{q}</span>
                  <Sparkles className="w-3 h-3 text-stone-400 group-hover:text-emerald-600 shrink-0" />
                </button>
              ))}
            </div>
          </div>
        ) : (
          messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex items-start gap-2.5 ${
                msg.role === 'user' ? 'justify-end' : 'justify-start'
              }`}
            >
              {msg.role === 'model' && (
                <div className="w-6 h-6 rounded-lg bg-emerald-700 text-white flex items-center justify-center shrink-0 mt-0.5">
                  <Bot className="w-3.5 h-3.5" />
                </div>
              )}

              <div
                className={`max-w-[85%] sm:max-w-[78%] rounded-2xl p-3.5 text-xs sm:text-sm ${
                  msg.role === 'user'
                    ? 'bg-stone-900 text-white'
                    : 'bg-white text-stone-800 border border-stone-200/80 shadow-2xs'
                }`}
              >
                {msg.role === 'model' ? (
                  <div>
                    <div className="prose prose-stone prose-xs sm:prose-sm max-w-none prose-p:my-1.5 prose-ul:my-1.5 prose-li:my-0.5">
                      <Markdown>{msg.content}</Markdown>
                    </div>

                    <div className="mt-2 pt-2 border-t border-stone-100 flex items-center justify-between text-[10px] text-stone-400">
                      <span>{new Date(msg.timestamp).toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' })}</span>
                      <button
                        type="button"
                        onClick={() => copyToClipboard(msg.id, msg.content)}
                        className="p-1 rounded text-stone-400 hover:text-stone-700 transition-colors cursor-pointer"
                        title="Copiar"
                      >
                        {copiedId === msg.id ? (
                          <Check className="w-3 h-3 text-emerald-600" />
                        ) : (
                          <Copy className="w-3 h-3" />
                        )}
                      </button>
                    </div>
                  </div>
                ) : (
                  <div>
                    <p className="whitespace-pre-wrap leading-relaxed">{msg.content}</p>
                    <div className="text-[10px] text-stone-400 text-right mt-1">
                      {new Date(msg.timestamp).toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' })}
                    </div>
                  </div>
                )}
              </div>

              {msg.role === 'user' && (
                <div className="w-6 h-6 rounded-lg bg-stone-700 text-white flex items-center justify-center shrink-0 mt-0.5">
                  <User className="w-3.5 h-3.5" />
                </div>
              )}
            </div>
          ))
        )}

        {isLoading && (
          <div className="flex items-center gap-2 text-xs text-stone-400 p-2">
            <RefreshCw className="w-3.5 h-3.5 animate-spin text-emerald-600" />
            <span>Flora está respondendo...</span>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Input Composer */}
      <div className="p-3 bg-white border-t border-stone-200 shrink-0">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSend();
          }}
          className="flex items-center gap-2"
        >
          <input
            ref={inputRef}
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder={
              activePlant
                ? `Pergunte sobre o(a) ${activePlant.commonName}...`
                : 'Pergunte sobre regas, sol, adubos ou pragas...'
            }
            className="flex-1 px-3.5 py-2.5 text-xs sm:text-sm text-stone-800 rounded-xl border border-stone-200 focus:outline-none focus:ring-1 focus:ring-emerald-600 placeholder:text-stone-400"
          />

          <button
            type="submit"
            disabled={!inputValue.trim() || isLoading}
            className="h-10 px-3.5 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white text-xs sm:text-sm font-medium flex items-center justify-center gap-1.5 disabled:opacity-50 cursor-pointer transition-colors shadow-2xs"
          >
            <Send className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Enviar</span>
          </button>
        </form>
      </div>

      {/* Confirm modal */}
      <ConfirmModal
        isOpen={isConfirmClearOpen}
        title="Limpar Conversa"
        message="Deseja limpar as mensagens desta conversa?"
        confirmText="Limpar"
        cancelText="Cancelar"
        variant="danger"
        onConfirm={() => {
          setMessages([]);
          setIsConfirmClearOpen(false);
        }}
        onCancel={() => setIsConfirmClearOpen(false)}
      />
    </div>
  );
}
