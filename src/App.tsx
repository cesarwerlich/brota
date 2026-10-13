/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { PlantUploader } from './components/PlantUploader';
import { PlantCareView } from './components/PlantCareView';
import { PlantCatalog } from './components/PlantCatalog';
import { GardeningChatbot } from './components/GardeningChatbot';
import { MyGarden } from './components/MyGarden';
import { IosSubscriptionModal } from './components/IosSubscriptionModal';
import { BottomNav } from './components/BottomNav';
import { IdentifiedPlant, ChatMessage } from './types';
import { SAMPLE_PLANTS } from './data/samplePlants';
import { CheckCircle } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState<'identify' | 'catalog' | 'chat' | 'garden'>('identify');
  // Starts null on initial entry for a super-clean, uncluttered first impression
  const [currentPlant, setCurrentPlant] = useState<IdentifiedPlant | null>(null);
  const [activeChatPlant, setActiveChatPlant] = useState<IdentifiedPlant | null>(SAMPLE_PLANTS[0]);
  const [chatInitialPrompt, setChatInitialPrompt] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [isIosModalOpen, setIsIosModalOpen] = useState<boolean>(false);
  const [modalInitialTab, setModalInitialTab] = useState<'install' | 'about'>('install');
  const [viewSource, setViewSource] = useState<'upload' | 'catalog'>('upload');

  // Persistent garden collection
  const [garden, setGarden] = useState<IdentifiedPlant[]>(() => {
    try {
      const saved = localStorage.getItem('flora_garden');
      if (saved) {
        return JSON.parse(saved);
      }
    } catch (e) {
      console.error('Failed to parse garden storage:', e);
    }
    // Default initial collection with our first sample (Cherry Tomato)
    return [SAMPLE_PLANTS[0]];
  });

  // Persistent chat history
  const [chatMessages, setChatMessages] = useState<ChatMessage[]>(() => {
    try {
      const saved = localStorage.getItem('flora_chat');
      if (saved) {
        return JSON.parse(saved);
      }
    } catch (e) {
      console.error('Failed to parse chat storage:', e);
    }
    return [
      {
        id: 'welcome-bot-msg',
        role: 'model',
        content: `👋 **Olá!** Sou a **Flora**, sua guia botânica no Brota.\n\nCuidar de plantas é um aprendizado diário com as mãos na terra. Pode me perguntar sobre frequência de rega, folhas amareladas, receitas caseiras contra pragas ou como fazer mudas!`,
        timestamp: new Date().toISOString(),
        modelUsed: 'Flora',
      },
    ];
  });

  // Save garden to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('flora_garden', JSON.stringify(garden));
    } catch (e) {
      console.error('Failed to save garden to localStorage:', e);
    }
  }, [garden]);

  // Save chat to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('flora_chat', JSON.stringify(chatMessages));
    } catch (e) {
      console.error('Failed to save chat to localStorage:', e);
    }
  }, [chatMessages]);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 2800);
  };

  const handlePlantIdentified = (plant: IdentifiedPlant) => {
    setViewSource('upload');
    setCurrentPlant(plant);
    setActiveChatPlant(plant);
    showToast(`"${plant.commonName}" carregada!`);
  };

  const handleSelectFromCatalog = (plant: IdentifiedPlant) => {
    setViewSource('catalog');
    setCurrentPlant(plant);
    setActiveChatPlant(plant);
    setActiveTab('identify');
  };

  const handleSaveToGarden = (plant: IdentifiedPlant) => {
    setGarden((prev) => {
      const exists = prev.some(
        (p) => p.id === plant.id || (p.scientificName === plant.scientificName && p.commonName === plant.commonName)
      );
      if (exists) {
        showToast(`"${plant.commonName}" já está no seu jardim.`);
        return prev;
      }
      showToast(`"${plant.commonName}" salva no Meu Jardim!`);
      return [plant, ...prev];
    });
  };

  const handleRemoveFromGarden = (plantId: string) => {
    setGarden((prev) => prev.filter((p) => p.id !== plantId));
    showToast('Planta removida do jardim.');
  };

  const handleWaterPlant = (plantId: string) => {
    const today = new Date().toISOString().split('T')[0];
    setGarden((prev) =>
      prev.map((p) => (p.id === plantId ? { ...p, lastWatered: today } : p))
    );
    if (currentPlant && currentPlant.id === plantId) {
      setCurrentPlant({ ...currentPlant, lastWatered: today });
    }
    showToast('Rega registrada para hoje! 💧');
  };

  const handleAskChatbot = (prompt?: string) => {
    if (currentPlant) {
      setActiveChatPlant(currentPlant);
    }
    if (prompt) {
      setChatInitialPrompt(prompt);
    }
    setActiveTab('chat');
  };

  const handleConsultFromGarden = (plant: IdentifiedPlant) => {
    setActiveChatPlant(plant);
    setActiveTab('chat');
  };

  const handleSelectFromGarden = (plant: IdentifiedPlant) => {
    setViewSource('upload');
    setCurrentPlant(plant);
    setActiveChatPlant(plant);
    setActiveTab('identify');
  };

  const handleAddSamplePlants = (samples: IdentifiedPlant[]) => {
    setGarden(samples);
    showToast('Plantas de exemplo carregadas no jardim.');
  };

  return (
    <div className="min-h-screen bg-stone-50 text-stone-900 flex flex-col font-sans selection:bg-emerald-100 selection:text-emerald-950">
      {/* Top Navigation */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        gardenCount={garden.length}
        onResetIdentify={() => setCurrentPlant(null)}
      />

      {/* Main Container */}
      <main className="flex-1 max-w-5xl w-full mx-auto px-4 sm:px-6 py-6 pb-24 sm:pb-12">
        {/* Toast Notification */}
        {toastMessage && (
          <div className="fixed bottom-6 right-6 z-50 flex items-center gap-2 px-3.5 py-2.5 rounded-xl bg-stone-900 text-white text-xs font-medium shadow-lg animate-in fade-in slide-in-from-bottom-2">
            <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
            <span>{toastMessage}</span>
          </div>
        )}

        {/* Tab 1: Identify & Plant View */}
        {activeTab === 'identify' && (
          <div>
            {currentPlant ? (
              <PlantCareView
                plant={currentPlant}
                onAskChatbot={handleAskChatbot}
                onSaveToGarden={handleSaveToGarden}
                isSavedInGarden={garden.some(
                  (p) => p.id === currentPlant.id || p.scientificName === currentPlant.scientificName
                )}
                onWaterPlant={handleWaterPlant}
                onBackToUpload={() => {
                  if (viewSource === 'catalog') {
                    setCurrentPlant(null);
                    setActiveTab('catalog');
                  } else {
                    setCurrentPlant(null);
                  }
                }}
                backLabel={viewSource === 'catalog' ? 'Voltar para o catálogo' : 'Identificar outra planta'}
              />
            ) : (
              <PlantUploader
                onPlantIdentified={handlePlantIdentified}
                isLoading={isLoading}
                setIsLoading={setIsLoading}
                error={error}
                setError={setError}
              />
            )}
          </div>
        )}

        {/* Tab 2: Plant Catalog */}
        {activeTab === 'catalog' && (
          <PlantCatalog
            onSelectPlant={handleSelectFromCatalog}
            onAddToGarden={handleSaveToGarden}
            isPlantInGarden={(id, scientificName) =>
              garden.some(
                (p) => p.id === id || p.scientificName === scientificName
              )
            }
          />
        )}

        {/* Tab 3: Flora IA Chat */}
        {activeTab === 'chat' && (
          <div className="max-w-3xl mx-auto">
            <GardeningChatbot
              messages={chatMessages}
              setMessages={setChatMessages}
              activePlant={activeChatPlant}
              setActivePlant={setActiveChatPlant}
              initialPrompt={chatInitialPrompt}
              onClearInitialPrompt={() => setChatInitialPrompt('')}
            />
          </div>
        )}

        {/* Tab 4: My Garden */}
        {activeTab === 'garden' && (
          <MyGarden
            garden={garden}
            onSelectPlant={handleSelectFromGarden}
            onRemovePlant={handleRemoveFromGarden}
            onWaterPlant={handleWaterPlant}
            onConsultPlant={handleConsultFromGarden}
            onAddSamplePlants={handleAddSamplePlants}
            onGoToIdentify={() => {
              setCurrentPlant(null);
              setActiveTab('identify');
            }}
          />
        )}
      </main>

      {/* Minimalist Mobile App / About Modal */}
      <IosSubscriptionModal
        isOpen={isIosModalOpen}
        onClose={() => setIsIosModalOpen(false)}
        initialTab={modalInitialTab}
      />

      {/* Minimal Footer */}
      <footer className="py-6 border-t border-stone-200/60 text-xs text-stone-400 hidden sm:block">
        <div className="max-w-5xl mx-auto px-4 flex items-center justify-between">
          <span>Brota • Jardinagem e aprendizado em família</span>
          <div className="flex items-center gap-4">
            <button
              type="button"
              onClick={() => {
                setModalInitialTab('install');
                setIsIosModalOpen(true);
              }}
              className="hover:text-stone-600 transition-colors cursor-pointer"
            >
              No celular (App)
            </button>
            <span className="text-stone-300">•</span>
            <button
              type="button"
              onClick={() => {
                setModalInitialTab('about');
                setIsIosModalOpen(true);
              }}
              className="hover:text-stone-600 transition-colors cursor-pointer"
            >
              Sobre o projeto
            </button>
          </div>
        </div>
      </footer>

      {/* Mobile Bottom Navigation Bar */}
      <BottomNav
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        gardenCount={garden.length}
      />
    </div>
  );
}
