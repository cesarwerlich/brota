import { Sprout, MessageSquareQuote, Flower2, BookOpen, Smartphone } from 'lucide-react';

interface NavbarProps {
  activeTab: 'identify' | 'chat' | 'garden';
  setActiveTab: (tab: 'identify' | 'chat' | 'garden') => void;
  gardenCount: number;
  onOpenSubscriptionModal?: () => void;
  onResetIdentify?: () => void;
}

export function Navbar({
  activeTab,
  setActiveTab,
  gardenCount,
  onOpenSubscriptionModal,
  onResetIdentify,
}: NavbarProps) {
  const handleHomeClick = () => {
    setActiveTab('identify');
    if (onResetIdentify) {
      onResetIdentify();
    }
  };

  return (
    <header id="app-navbar" className="sticky top-0 z-30 bg-white/90 backdrop-blur-md border-b border-stone-200/70 text-stone-900 pt-safe transition-colors">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          {/* Brand Logo */}
          <div
            className="flex items-center gap-2.5 cursor-pointer select-none group"
            onClick={handleHomeClick}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                handleHomeClick();
              }
            }}
          >
            <div className="w-8 h-8 rounded-xl bg-emerald-700 flex items-center justify-center text-white shadow-xs group-hover:bg-emerald-800 transition-colors">
              <Sprout className="w-4 h-4" />
            </div>
            <div className="flex items-baseline gap-2">
              <span className="font-semibold text-lg tracking-tight font-serif-heading text-stone-900">
                Brota
              </span>
              <span className="text-[11px] text-stone-400 hidden sm:inline">
                jardinagem em família
              </span>
            </div>
          </div>

          {/* Nav Tabs & Mobile App Guide Button */}
          <div className="flex items-center gap-1 sm:gap-2">
            <nav className="hidden sm:flex items-center gap-1" aria-label="Navegação principal">
              <button
                id="tab-identify"
                type="button"
                onClick={() => {
                  setActiveTab('identify');
                  if (onResetIdentify) onResetIdentify();
                }}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs sm:text-sm font-medium transition-all cursor-pointer ${
                  activeTab === 'identify'
                    ? 'bg-stone-900 text-white shadow-2xs'
                    : 'text-stone-600 hover:text-stone-900 hover:bg-stone-100'
                }`}
              >
                <BookOpen className="w-3.5 h-3.5" />
                <span>Identificar</span>
              </button>

              <button
                id="tab-chat"
                type="button"
                onClick={() => setActiveTab('chat')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs sm:text-sm font-medium transition-all cursor-pointer ${
                  activeTab === 'chat'
                    ? 'bg-stone-900 text-white shadow-2xs'
                    : 'text-stone-600 hover:text-stone-900 hover:bg-stone-100'
                }`}
              >
                <MessageSquareQuote className="w-3.5 h-3.5" />
                <span>Flora</span>
              </button>

              <button
                id="tab-garden"
                type="button"
                onClick={() => setActiveTab('garden')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs sm:text-sm font-medium transition-all cursor-pointer ${
                  activeTab === 'garden'
                    ? 'bg-stone-900 text-white shadow-2xs'
                    : 'text-stone-600 hover:text-stone-900 hover:bg-stone-100'
                }`}
              >
                <Flower2 className="w-3.5 h-3.5" />
                <span>Meu Jardim</span>
                {gardenCount > 0 && (
                  <span className="ml-0.5 px-1.5 py-0.2 rounded-full text-[10px] font-semibold bg-emerald-100 text-emerald-800">
                    {gardenCount}
                  </span>
                )}
              </button>
            </nav>

            {/* Mobile App & Story Trigger */}
            {onOpenSubscriptionModal && (
              <button
                type="button"
                onClick={onOpenSubscriptionModal}
                title="Sobre o Brota e como usar no celular"
                className="p-2 sm:px-3 sm:py-1.5 rounded-xl text-xs font-medium text-stone-600 hover:text-stone-900 hover:bg-stone-100 transition-colors flex items-center gap-1.5 cursor-pointer ml-1"
              >
                <Smartphone className="w-3.5 h-3.5 text-emerald-700" />
                <span className="hidden sm:inline">No Celular</span>
              </button>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
