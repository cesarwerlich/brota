import { useState } from 'react';
import {
  Droplets,
  Sun,
  Scissors,
  ShieldCheck,
  ShieldAlert,
  ChevronDown,
  MessageSquareQuote,
  BookmarkPlus,
  Check,
  ArrowLeft,
  Sparkles,
  Layers,
  Thermometer,
  Zap,
  HeartHandshake,
  Calendar
} from 'lucide-react';
import { IdentifiedPlant } from '../types';

interface PlantCareViewProps {
  plant: IdentifiedPlant;
  onAskChatbot: (initialPrompt?: string) => void;
  onSaveToGarden: (plant: IdentifiedPlant) => void;
  isSavedInGarden: boolean;
  onWaterPlant: (plantId: string) => void;
  onBackToUpload?: () => void;
  backLabel?: string;
}

export function PlantCareView({
  plant,
  onAskChatbot,
  onSaveToGarden,
  isSavedInGarden,
  onWaterPlant,
  onBackToUpload,
  backLabel,
}: PlantCareViewProps) {
  const [showAllDetails, setShowAllDetails] = useState(false);
  const { careInstructions, healthAssessment } = plant;

  const isHealthy =
    healthAssessment.status.toLowerCase().includes('saudável') ||
    healthAssessment.status.toLowerCase().includes('healthy');

  return (
    <div className="max-w-4xl mx-auto space-y-6 animate-in fade-in duration-300">
      {/* Top back navigation */}
      {onBackToUpload && (
        <div className="flex items-center justify-between">
          <button
            type="button"
            onClick={onBackToUpload}
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-medium text-stone-600 hover:text-stone-900 transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>{backLabel || (plant.id.startsWith('kb-') ? 'Voltar para o catálogo' : 'Identificar outra planta')}</span>
          </button>

          <span className="text-xs text-stone-400">
            {plant.plantType || 'Cultivo'}
          </span>
        </div>
      )}

      {/* Main Specimen Card */}
      <div className="bg-white rounded-3xl border border-stone-200 overflow-hidden shadow-xs">
        <div className="flex flex-col sm:flex-row">
          {/* Photo */}
          <div className="sm:w-2/5 h-64 sm:h-auto min-h-[240px] relative bg-stone-900">
            <img
              src={plant.imageUrl}
              alt={plant.commonName}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Details */}
          <div className="sm:w-3/5 p-6 sm:p-7 flex flex-col justify-between space-y-4">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-800 border border-emerald-200">
                  {isHealthy ? (
                    <>
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                      Planta Saudável
                    </>
                  ) : (
                    <>
                      <ShieldAlert className="w-3.5 h-3.5 text-amber-600" />
                      Requer Atenção
                    </>
                  )}
                </span>
                <span className="text-xs text-stone-400">
                  {plant.difficultyLevel}
                </span>
              </div>

              <h1 className="text-2xl sm:text-3xl font-bold font-serif-heading text-stone-900 leading-tight">
                {plant.commonName}
              </h1>
              <p className="text-xs sm:text-sm text-stone-400 italic mb-3">
                {plant.scientificName} • {plant.family}
              </p>

              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                {plant.description}
              </p>
            </div>

            {/* Quick Actions */}
            <div className="flex flex-wrap items-center gap-2.5 pt-2 border-t border-stone-100">
              <button
                type="button"
                onClick={() => onAskChatbot(`Olá Flora! Como posso cuidar melhor do meu(minha) ${plant.commonName}?`)}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white text-xs sm:text-sm font-semibold transition-colors cursor-pointer shadow-xs"
              >
                <MessageSquareQuote className="w-4 h-4" />
                Conversar com Flora
              </button>

              <button
                type="button"
                onClick={() => onSaveToGarden(plant)}
                className={`inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-medium transition-colors cursor-pointer ${
                  isSavedInGarden
                    ? 'bg-emerald-50 text-emerald-800 border border-emerald-300'
                    : 'bg-stone-100 hover:bg-stone-200 text-stone-800'
                }`}
              >
                {isSavedInGarden ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                    Salva no Jardim
                  </>
                ) : (
                  <>
                    <BookmarkPlus className="w-3.5 h-3.5 text-stone-600" />
                    Salvar no Jardim
                  </>
                )}
              </button>

              <button
                type="button"
                onClick={() => onWaterPlant(plant.id)}
                className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-sky-50 hover:bg-sky-100 text-sky-800 border border-sky-200 text-xs sm:text-sm font-medium transition-colors cursor-pointer"
              >
                <Droplets className="w-3.5 h-3.5 text-sky-600" />
                {plant.lastWatered ? `Regada em ${plant.lastWatered}` : 'Regar Hoje'}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* The 3 Essential Vitals Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Rega */}
        <div className="bg-white rounded-2xl border border-stone-200 p-5 space-y-2">
          <div className="flex items-center gap-2 text-sky-700">
            <Droplets className="w-4 h-4" />
            <h3 className="font-semibold text-stone-900 text-sm font-serif-heading">Rega</h3>
          </div>
          <div className="text-xs font-semibold text-sky-800 bg-sky-50 px-2 py-0.5 rounded-md inline-block">
            {careInstructions.watering.frequency}
          </div>
          <p className="text-xs text-stone-600 leading-relaxed">
            {careInstructions.watering.summary}
          </p>
        </div>

        {/* Luz */}
        <div className="bg-white rounded-2xl border border-stone-200 p-5 space-y-2">
          <div className="flex items-center gap-2 text-amber-600">
            <Sun className="w-4 h-4" />
            <h3 className="font-semibold text-stone-900 text-sm font-serif-heading">Iluminação</h3>
          </div>
          <div className="text-xs font-semibold text-amber-900 bg-amber-50 px-2 py-0.5 rounded-md inline-block">
            {careInstructions.light.requirement}
          </div>
          <p className="text-xs text-stone-600 leading-relaxed">
            {careInstructions.light.summary}
          </p>
        </div>

        {/* Poda / Dica Principal */}
        <div className="bg-white rounded-2xl border border-stone-200 p-5 space-y-2">
          <div className="flex items-center gap-2 text-emerald-700">
            <Scissors className="w-4 h-4" />
            <h3 className="font-semibold text-stone-900 text-sm font-serif-heading">Poda &amp; Dica</h3>
          </div>
          <p className="text-xs text-stone-600 leading-relaxed">
            {careInstructions.pruningAndMaintenance.tips[0] || careInstructions.soilAndPotting.mixType}
          </p>
        </div>
      </div>

      {/* Expandable Botanical Details Toggle */}
      <div className="bg-white rounded-2xl border border-stone-200 overflow-hidden">
        <button
          type="button"
          onClick={() => setShowAllDetails(!showAllDetails)}
          className="w-full px-5 py-4 flex items-center justify-between text-left text-xs sm:text-sm font-semibold text-stone-800 hover:bg-stone-50 transition-colors cursor-pointer"
        >
          <span>{showAllDetails ? 'Ocultar detalhes botânicos' : 'Ver todos os detalhes de cultivo (solo, adubo, clima e segurança)'}</span>
          <ChevronDown
            className={`w-4 h-4 text-stone-500 transition-transform duration-200 ${
              showAllDetails ? 'rotate-180' : ''
            }`}
          />
        </button>

        {showAllDetails && (
          <div className="p-5 sm:p-6 pt-0 border-t border-stone-100 space-y-5 text-xs sm:text-sm animate-in fade-in duration-200">
            {/* Health Diagnoses if present */}
            {healthAssessment.diagnoses && healthAssessment.diagnoses.length > 0 && (
              <div className="p-3.5 rounded-xl bg-amber-50 border border-amber-200 text-amber-950 space-y-1.5">
                <span className="font-semibold block">Diagnóstico de Saúde:</span>
                {healthAssessment.diagnoses.map((d, i) => (
                  <div key={i} className="text-xs text-stone-700">
                    <strong>• {d.issue}:</strong> {d.suggestion}
                  </div>
                ))}
              </div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Solo */}
              <div className="p-4 rounded-xl bg-stone-50 border border-stone-100 space-y-1.5">
                <div className="flex items-center gap-1.5 font-semibold text-stone-900">
                  <Layers className="w-3.5 h-3.5 text-emerald-700" />
                  <span>Substrato e Drenagem</span>
                </div>
                <p className="text-xs text-stone-600 leading-relaxed">
                  {careInstructions.soilAndPotting.mixType}. {careInstructions.soilAndPotting.drainageNeeds}
                </p>
              </div>

              {/* Clima */}
              <div className="p-4 rounded-xl bg-stone-50 border border-stone-100 space-y-1.5">
                <div className="flex items-center gap-1.5 font-semibold text-stone-900">
                  <Thermometer className="w-3.5 h-3.5 text-teal-700" />
                  <span>Temperatura Ideal</span>
                </div>
                <p className="text-xs text-stone-600 leading-relaxed">
                  {careInstructions.temperatureAndHumidity.tempRange}. {careInstructions.temperatureAndHumidity.coldTolerance}
                </p>
              </div>

              {/* Adubo */}
              <div className="p-4 rounded-xl bg-stone-50 border border-stone-100 space-y-1.5">
                <div className="flex items-center gap-1.5 font-semibold text-stone-900">
                  <Zap className="w-3.5 h-3.5 text-purple-700" />
                  <span>Adubação</span>
                </div>
                <p className="text-xs text-stone-600 leading-relaxed">
                  {careInstructions.fertilizing.schedule}: {careInstructions.fertilizing.fertilizerType}
                </p>
              </div>

              {/* Segurança */}
              <div className="p-4 rounded-xl bg-stone-50 border border-stone-100 space-y-1.5">
                <div className="flex items-center gap-1.5 font-semibold text-stone-900">
                  <HeartHandshake className="w-3.5 h-3.5 text-rose-600" />
                  <span>Segurança para Pets &amp; Família</span>
                </div>
                <p className="text-xs text-stone-600 leading-relaxed">
                  {careInstructions.toxicity.petDetails}
                </p>
              </div>
            </div>

            {/* Estações */}
            <div className="p-4 rounded-xl bg-stone-50 border border-stone-100 space-y-1.5">
              <div className="flex items-center gap-1.5 font-semibold text-stone-900">
                <Calendar className="w-3.5 h-3.5 text-orange-600" />
                <span>Calendário por Estação</span>
              </div>
              <p className="text-xs text-stone-600 leading-relaxed">
                <strong>Primavera/Verão:</strong> {careInstructions.seasonalCalendar.springSummer}
              </p>
            </div>

            {/* Curiosidades */}
            {plant.funFacts && plant.funFacts.length > 0 && (
              <div className="p-4 rounded-xl bg-emerald-50/50 border border-emerald-100 space-y-1.5">
                <div className="flex items-center gap-1.5 font-semibold text-emerald-900">
                  <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Curiosidade para contar em família</span>
                </div>
                <p className="text-xs text-stone-700 italic leading-relaxed">
                  "{plant.funFacts[0]}"
                </p>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Suggested Chat Prompt Chips */}
      <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
        <button
          type="button"
          onClick={() => onAskChatbot(`Como saber se minha ${plant.commonName} precisa de água hoje?`)}
          className="px-3.5 py-1.5 rounded-full bg-white hover:bg-emerald-50 border border-stone-200 text-stone-600 hover:text-emerald-900 text-xs transition-colors cursor-pointer"
        >
          💧 Como saber a hora de regar?
        </button>
        <button
          type="button"
          onClick={() => onAskChatbot(`Como fazer mudas da ${plant.commonName}?`)}
          className="px-3.5 py-1.5 rounded-full bg-white hover:bg-emerald-50 border border-stone-200 text-stone-600 hover:text-emerald-900 text-xs transition-colors cursor-pointer"
        >
          ✂️ Como fazer mudas?
        </button>
        <button
          type="button"
          onClick={() => onAskChatbot(`Receita caseira natural contra pragas na ${plant.commonName}`)}
          className="px-3.5 py-1.5 rounded-full bg-white hover:bg-emerald-50 border border-stone-200 text-stone-600 hover:text-emerald-900 text-xs transition-colors cursor-pointer"
        >
          🐛 Receita caseira contra pragas
        </button>
      </div>
    </div>
  );
}
