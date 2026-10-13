import React, { useState } from 'react';
import {
  Droplets,
  Flower2,
  Trash2,
  MessageSquareQuote,
  ArrowRight,
  Plus,
  ShieldCheck,
  ShieldAlert
} from 'lucide-react';
import { IdentifiedPlant } from '../types';
import { SAMPLE_PLANTS } from '../data/samplePlants';
import { ConfirmModal } from './ConfirmModal';

interface MyGardenProps {
  garden: IdentifiedPlant[];
  onSelectPlant: (plant: IdentifiedPlant) => void;
  onRemovePlant: (plantId: string) => void;
  onWaterPlant: (plantId: string) => void;
  onConsultPlant: (plant: IdentifiedPlant) => void;
  onAddSamplePlants: (samples: IdentifiedPlant[]) => void;
  onGoToIdentify: () => void;
}

export function MyGarden({
  garden,
  onSelectPlant,
  onRemovePlant,
  onWaterPlant,
  onConsultPlant,
  onAddSamplePlants,
  onGoToIdentify,
}: MyGardenProps) {
  const [plantToDelete, setPlantToDelete] = useState<IdentifiedPlant | null>(null);

  const calculateDaysSinceWatered = (lastWateredDate?: string) => {
    if (!lastWateredDate) return null;
    const last = new Date(lastWateredDate);
    const now = new Date();
    const diffTime = Math.abs(now.getTime() - last.getTime());
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  };

  const formatStatus = (status: string) => {
    const s = status.toLowerCase();
    if (s.includes('healthy') || s.includes('saudável') || s.includes('saudavel')) return 'Saudável';
    if (s.includes('attention') || s.includes('atenção') || s.includes('atencao')) return 'Requer Atenção';
    return 'Atenção';
  };

  return (
    <div className="space-y-6 animate-in fade-in duration-300">
      {/* Minimal Header */}
      <div className="flex items-center justify-between pb-4 border-b border-stone-200/70">
        <div>
          <h2 className="text-xl sm:text-2xl font-bold font-serif-heading text-stone-900">
            Meu Jardim
          </h2>
          <p className="text-xs sm:text-sm text-stone-500">
            {garden.length === 0
              ? 'Nenhuma planta adicionada ainda.'
              : `${garden.length} ${garden.length === 1 ? 'planta cultivada' : 'plantas cultivadas'}`}
          </p>
        </div>

        <button
          type="button"
          onClick={onGoToIdentify}
          className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white text-xs sm:text-sm font-semibold transition-colors cursor-pointer shadow-xs"
        >
          <Plus className="w-4 h-4" />
          <span>Nova Planta</span>
        </button>
      </div>

      {garden.length === 0 ? (
        <div className="bg-white rounded-3xl border border-stone-200 p-8 sm:p-12 text-center max-w-md mx-auto space-y-4">
          <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-700 flex items-center justify-center mx-auto">
            <Flower2 className="w-6 h-6" />
          </div>
          <div className="space-y-1">
            <h3 className="font-semibold text-stone-900 text-base font-serif-heading">
              Seu jardim está começando
            </h3>
            <p className="text-xs sm:text-sm text-stone-500 leading-relaxed">
              Fotografe uma planta ou adicione exemplos para acompanhar as regas e os cuidados.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
            <button
              type="button"
              onClick={onGoToIdentify}
              className="px-4 py-2 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-semibold cursor-pointer"
            >
              Fotografar Planta
            </button>
            <button
              type="button"
              onClick={() => onAddSamplePlants(SAMPLE_PLANTS)}
              className="px-4 py-2 rounded-xl bg-stone-100 hover:bg-stone-200 text-stone-700 text-xs font-medium cursor-pointer"
            >
              Carregar Exemplos
            </button>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {garden.map((plant) => {
            const daysSince = calculateDaysSinceWatered(plant.lastWatered);
            const statusLabel = formatStatus(plant.healthAssessment.status);
            const isHealthy = statusLabel === 'Saudável';

            return (
              <div
                key={plant.id}
                className="bg-white rounded-2xl border border-stone-200 overflow-hidden flex flex-col justify-between hover:border-stone-400 transition-all group"
              >
                <div>
                  {/* Photo Banner */}
                  <div className="relative h-44 bg-stone-900 overflow-hidden">
                    <img
                      src={plant.imageUrl}
                      alt={plant.commonName}
                      className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex flex-col justify-between p-3">
                      <div className="flex items-center justify-between">
                        <span className="px-2 py-0.5 rounded-full text-[10px] font-medium bg-black/40 backdrop-blur-xs text-white">
                          {plant.plantType}
                        </span>
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            setPlantToDelete(plant);
                          }}
                          title="Remover"
                          className="p-1.5 rounded-lg bg-black/30 hover:bg-rose-600 text-white/80 hover:text-white backdrop-blur-xs transition-colors cursor-pointer"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      <div>
                        <h4 className="text-white font-semibold font-serif-heading text-base truncate">
                          {plant.commonName}
                        </h4>
                        <p className="text-stone-300 text-xs italic truncate">
                          {plant.scientificName}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Vitals */}
                  <div className="p-4 space-y-2.5">
                    <div className="flex items-center justify-between text-xs">
                      <span className="flex items-center gap-1 font-medium text-stone-700">
                        {isHealthy ? (
                          <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                        ) : (
                          <ShieldAlert className="w-3.5 h-3.5 text-amber-600" />
                        )}
                        {statusLabel}
                      </span>
                      <span className="text-[11px] text-stone-400">
                        {plant.careInstructions.watering.frequency}
                      </span>
                    </div>

                    {/* Watering state */}
                    <div className="p-2.5 rounded-xl bg-sky-50/70 border border-sky-100 text-xs text-sky-950 flex items-center justify-between">
                      <div className="flex items-center gap-1.5">
                        <Droplets className="w-3.5 h-3.5 text-sky-600 shrink-0" />
                        <span className="font-medium">
                          {daysSince === 0
                            ? 'Regada hoje'
                            : daysSince === 1
                            ? 'Regada ontem'
                            : daysSince !== null
                            ? `Regada há ${daysSince} dias`
                            : 'Sem rega registrada'}
                        </span>
                      </div>

                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          onWaterPlant(plant.id);
                        }}
                        className="px-2 py-0.5 rounded-md bg-sky-600 hover:bg-sky-700 text-white text-[11px] font-medium transition-colors cursor-pointer"
                      >
                        Regar
                      </button>
                    </div>
                  </div>
                </div>

                {/* Footer Buttons */}
                <div className="p-3 pt-0 border-t border-stone-100 flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => onSelectPlant(plant)}
                    className="flex-1 inline-flex items-center justify-center gap-1 py-2 rounded-xl bg-stone-100 hover:bg-stone-200 text-stone-800 text-xs font-medium transition-colors cursor-pointer"
                  >
                    <span>Ver Cuidados</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>

                  <button
                    type="button"
                    onClick={() => onConsultPlant(plant)}
                    title="Conversar com Flora"
                    className="p-2 rounded-xl text-stone-500 hover:text-emerald-700 hover:bg-emerald-50 border border-stone-200 transition-colors cursor-pointer"
                  >
                    <MessageSquareQuote className="w-4 h-4" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* Reusable in-app deletion confirmation modal */}
      <ConfirmModal
        isOpen={plantToDelete !== null}
        title="Remover do Jardim"
        message={`Remover "${plantToDelete?.commonName}" do seu jardim?`}
        confirmText="Sim, Remover"
        cancelText="Cancelar"
        variant="danger"
        onConfirm={() => {
          if (plantToDelete) {
            onRemovePlant(plantToDelete.id);
            setPlantToDelete(null);
          }
        }}
        onCancel={() => setPlantToDelete(null)}
      />
    </div>
  );
}
