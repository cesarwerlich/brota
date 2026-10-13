import { Sprout, MessageSquareQuote, Flower2, BookOpen, Camera } from 'lucide-react';

interface NavbarProps {
  activeTab: 'identify' | 'catalog' | 'chat' | 'garden';
  setActiveTab: (tab: 'identify' | 'catalog' | 'chat' | 'garden') => void;
  gardenCount: number;
  onResetIdentify?: () => void;
}

export function Navbar({
  activeTab,
  setActiveTab,
  gardenCount,
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

          {/* Clean Nav Tabs */}
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
              <Camera className="w-3.5 h-3.5" />
              <span>Identificar</span>
            </button>

            <button
              id="tab-catalog"
              type="button"
              onClick={() => setActiveTab('catalog')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs sm:text-sm font-medium transition-all cursor-pointer ${
                activeTab === 'catalog'
                  ? 'bg-stone-900 text-white shadow-2xs'
                  : 'text-stone-600 hover:text-stone-900 hover:bg-stone-100'
              }`}
            >
              <BookOpen className="w-3.5 h-3.5" />
              <span>Catálogo</span>
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
              <span>Flora IA</span>
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
        </div>
      </div>
    </header>
  );
}
