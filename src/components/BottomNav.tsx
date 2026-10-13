import { BookOpen, MessageSquareQuote, Flower2 } from 'lucide-react';

interface BottomNavProps {
  activeTab: 'identify' | 'chat' | 'garden';
  setActiveTab: (tab: 'identify' | 'chat' | 'garden') => void;
  gardenCount: number;
}

export function BottomNav({ activeTab, setActiveTab, gardenCount }: BottomNavProps) {
  return (
    <nav
      id="mobile-bottom-nav"
      aria-label="Navegação inferior móvel"
      className="fixed bottom-0 left-0 right-0 z-40 sm:hidden bg-white/95 backdrop-blur-md border-t border-stone-200 text-stone-600 pb-safe shadow-sm"
    >
      <div className="flex items-center justify-around h-15 px-2">
        {/* Identificar Tab */}
        <button
          type="button"
          onClick={() => setActiveTab('identify')}
          className={`flex flex-col items-center justify-center flex-1 py-1 px-2 rounded-xl transition-all cursor-pointer ${
            activeTab === 'identify'
              ? 'text-emerald-800 font-semibold'
              : 'text-stone-400 hover:text-stone-700'
          }`}
        >
          <BookOpen className="w-4 h-4 mb-0.5" />
          <span className="text-[10px] tracking-tight">Identificar</span>
        </button>

        {/* Chat Tab */}
        <button
          type="button"
          onClick={() => setActiveTab('chat')}
          className={`flex flex-col items-center justify-center flex-1 py-1 px-2 rounded-xl transition-all cursor-pointer ${
            activeTab === 'chat'
              ? 'text-emerald-800 font-semibold'
              : 'text-stone-400 hover:text-stone-700'
          }`}
        >
          <MessageSquareQuote className="w-4 h-4 mb-0.5" />
          <span className="text-[10px] tracking-tight">Flora</span>
        </button>

        {/* Jardim Tab */}
        <button
          type="button"
          onClick={() => setActiveTab('garden')}
          className={`flex flex-col items-center justify-center flex-1 py-1 px-2 rounded-xl transition-all cursor-pointer relative ${
            activeTab === 'garden'
              ? 'text-emerald-800 font-semibold'
              : 'text-stone-400 hover:text-stone-700'
          }`}
        >
          <div className="relative">
            <Flower2 className="w-4 h-4 mb-0.5" />
            {gardenCount > 0 && (
              <span className="absolute -top-1 -right-2 px-1 py-0.1 rounded-full text-[9px] font-bold bg-emerald-600 text-white leading-none">
                {gardenCount}
              </span>
            )}
          </div>
          <span className="text-[10px] tracking-tight">Meu Jardim</span>
        </button>
      </div>
    </nav>
  );
}
