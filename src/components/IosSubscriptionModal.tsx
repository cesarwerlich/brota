import { useState, useEffect } from 'react';
import {
  X,
  Smartphone,
  Apple,
  Share,
  PlusSquare,
  Sparkles,
  Heart,
  CheckCircle2,
  Leaf,
  ShieldCheck,
  BookOpen
} from 'lucide-react';

interface IosSubscriptionModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialTab?: 'install' | 'about';
}

export function IosSubscriptionModal({ isOpen, onClose, initialTab = 'install' }: IosSubscriptionModalProps) {
  const [activeTab, setActiveTab] = useState<'install' | 'about'>(initialTab);

  useEffect(() => {
    if (isOpen && initialTab) {
      setActiveTab(initialTab);
    }
  }, [isOpen, initialTab]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-xl bg-white rounded-3xl shadow-2xl border border-stone-200 overflow-hidden flex flex-col max-h-[90vh]">
        {/* Header Bar */}
        {/* Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 bg-white border-b border-stone-200/80 shrink-0">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-emerald-700 flex items-center justify-center text-white">
              <Leaf className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-semibold text-base font-serif-heading text-stone-900">
                Sobre o Brota
              </h3>
              <p className="text-xs text-stone-500">
                Como usar no celular e a proposta do projeto
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-lg text-stone-400 hover:text-stone-700 hover:bg-stone-100 transition-colors cursor-pointer"
            aria-label="Fechar modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Switcher: Como Instalar vs Sobre o Projeto */}
        <div className="flex border-b border-stone-200 bg-stone-50 text-xs font-semibold shrink-0">
          <button
            type="button"
            onClick={() => setActiveTab('install')}
            className={`flex-1 py-3 px-4 text-center transition-colors cursor-pointer flex items-center justify-center gap-2 ${
              activeTab === 'install'
                ? 'bg-white text-emerald-800 border-b-2 border-emerald-700 shadow-2xs font-bold'
                : 'text-stone-600 hover:text-stone-900'
            }`}
          >
            <Smartphone className="w-3.5 h-3.5" />
            <span>Como Usar no Celular</span>
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('about')}
            className={`flex-1 py-3 px-4 text-center transition-colors cursor-pointer flex items-center justify-center gap-2 ${
              activeTab === 'about'
                ? 'bg-white text-emerald-800 border-b-2 border-emerald-700 shadow-2xs font-bold'
                : 'text-stone-600 hover:text-stone-900'
            }`}
          >
            <Heart className="w-3.5 h-3.5 text-rose-500" />
            <span>Sobre o Brota</span>
          </button>
        </div>

        {/* Modal Body */}
        <div className="overflow-y-auto p-6 space-y-5">
          {activeTab === 'install' ? (
            <div className="space-y-5 text-stone-800">
              <div className="text-center space-y-1.5">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-100 text-emerald-800 border border-emerald-200">
                  <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
                  Funciona direto no navegador • Sem baixar nada pesado
                </span>
                <h4 className="text-xl sm:text-2xl font-bold font-serif-heading text-stone-900">
                  Abra o Brota em tela cheia como um app
                </h4>
                <p className="text-xs sm:text-sm text-stone-600 max-w-md mx-auto">
                  Você pode fixar o Brota na tela inicial do seu celular em menos de 10 segundos. Ele abre rápido, sem barras e com visual nativo.
                </p>
              </div>

              {/* iPhone instructions */}
              <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 space-y-3">
                <div className="flex items-center gap-2 text-stone-900 font-bold text-sm">
                  <Apple className="w-4 h-4 text-stone-900" />
                  <span>No iPhone ou iPad (Safari)</span>
                </div>
                <ol className="space-y-2.5 text-xs sm:text-sm text-stone-700">
                  <li className="flex items-start gap-2.5">
                    <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-800 font-bold flex items-center justify-center shrink-0 text-xs">1</span>
                    <span>Abra este site pelo <strong>Safari</strong> do iPhone.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-800 font-bold flex items-center justify-center shrink-0 text-xs">2</span>
                    <span className="flex items-center gap-1 flex-wrap">
                      Toque no botão de <strong>Compartilhar</strong>
                      <span className="inline-flex items-center px-1.5 py-0.5 rounded bg-stone-200 text-stone-800 text-xs font-mono">
                        <Share className="w-3 h-3 mr-0.5 inline" /> Compartilhar
                      </span>
                      (na barra inferior do Safari).
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-800 font-bold flex items-center justify-center shrink-0 text-xs">3</span>
                    <span className="flex items-center gap-1 flex-wrap">
                      Role para baixo e selecione
                      <span className="inline-flex items-center px-1.5 py-0.5 rounded bg-stone-200 text-stone-800 text-xs font-semibold">
                        <PlusSquare className="w-3 h-3 mr-0.5 inline" /> Adicionar à Tela de Início
                      </span>.
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-800 font-bold flex items-center justify-center shrink-0 text-xs">4</span>
                    <span>Confirme tocando em <strong>Adicionar</strong> no topo direito. Pronto!</span>
                  </li>
                </ol>
              </div>

              {/* Android instructions */}
              <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 space-y-3">
                <div className="flex items-center gap-2 text-stone-900 font-bold text-sm">
                  <Smartphone className="w-4 h-4 text-emerald-700" />
                  <span>No Android (Chrome)</span>
                </div>
                <ol className="space-y-2.5 text-xs sm:text-sm text-stone-700">
                  <li className="flex items-start gap-2.5">
                    <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-800 font-bold flex items-center justify-center shrink-0 text-xs">1</span>
                    <span>Abra o Brota no <strong>Google Chrome</strong>.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-800 font-bold flex items-center justify-center shrink-0 text-xs">2</span>
                    <span>Toque nos <strong>três pontinhos ⋮</strong> no canto superior direito.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-800 font-bold flex items-center justify-center shrink-0 text-xs">3</span>
                    <span>Toque em <strong>"Instalar aplicativo"</strong> ou <strong>"Adicionar à tela inicial"</strong>.</span>
                  </li>
                </ol>
              </div>

              <div className="p-3.5 rounded-xl bg-emerald-50 border border-emerald-200 text-xs text-emerald-950 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0" />
                <span>Suas plantas e o histórico de conversas continuam salvos com segurança no seu aparelho.</span>
              </div>
            </div>
          ) : (
            <div className="space-y-4 text-xs sm:text-sm text-stone-700">
              <div className="p-4 rounded-2xl bg-emerald-50/70 border border-emerald-200 text-emerald-950 space-y-2">
                <div className="flex items-center gap-2 font-bold text-sm">
                  <Leaf className="w-4 h-4 text-emerald-700 shrink-0" />
                  <span>Aprender jardinagem na prática, juntos</span>
                </div>
                <p className="leading-relaxed">
                  O <strong>Brota</strong> nasceu como um projeto pessoal e familiar, criado por Cesar com sua afilhada para aprender e praticar jardinagem na vida real.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 space-y-2">
                <div className="flex items-center gap-2 font-bold text-stone-900">
                  <BookOpen className="w-4 h-4 text-stone-800" />
                  <span>Nossa Filosofia: Mãos na terra primeiro</span>
                </div>
                <p className="text-xs text-stone-600 leading-relaxed">
                  Acreditamos que o aprendizado verdadeiro acontece mexendo na terra, observando o sol, acompanhando a germinação das sementes e regando com carinho. A inteligência artificial entra como uma companhia curiosa para identificar espécies, desmistificar cuidados e diagnosticar problemas nas folhas — nunca para substituir a experiência real.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 space-y-2">
                <div className="flex items-center gap-2 font-bold text-stone-900">
                  <ShieldCheck className="w-4 h-4 text-emerald-700" />
                  <span>Compromisso com a Família e Privacidade</span>
                </div>
                <ul className="list-disc list-inside text-xs text-stone-600 space-y-1">
                  <li><strong>100% Gratuito:</strong> Sem assinaturas, pegadinhas comerciais ou anúncios.</li>
                  <li><strong>Respeito à Privacidade:</strong> Não coletamos nomes reais de crianças, dados pessoais nem alimentamos redes sociais públicas.</li>
                  <li><strong>Linguagem Didática:</strong> Respostas gentis, seguras e educativas feitas para todas as idades.</li>
                </ul>
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-3.5 bg-stone-50 border-t border-stone-200 flex items-center justify-between text-xs text-stone-500 shrink-0">
          <span>Brota • Jardinagem e Aprendizado em Família</span>
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-1.5 rounded-lg bg-stone-200 hover:bg-stone-300 text-stone-800 font-medium transition-colors cursor-pointer"
          >
            Entendido
          </button>
        </div>
      </div>
    </div>
  );
}
