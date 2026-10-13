import { useState, useMemo } from 'react';
import {
  Search,
  X,
  Sun,
  Droplets,
  Clock,
  Sparkles,
  Plus,
  Check,
  BookOpen,
  Flower2,
  Leaf,
  Sprout,
} from 'lucide-react';
import { CatalogPlant, IdentifiedPlant, PlantCategory } from '../types';
import { PLANT_KNOWLEDGE_BASE, catalogPlantToIdentifiedPlant } from '../data/plantKnowledgeBase';

interface PlantCatalogProps {
  onSelectPlant: (plant: IdentifiedPlant) => void;
  onAddToGarden: (plant: IdentifiedPlant) => void;
  isPlantInGarden: (plantId: string, scientificName: string) => boolean;
}

type CategoryFilter = 'all' | PlantCategory;

export function PlantCatalog({
  onSelectPlant,
  onAddToGarden,
  isPlantInGarden,
}: PlantCatalogProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<CategoryFilter>('all');

  // Categories config
  const categories: Array<{ id: CategoryFilter; label: string; icon: typeof Leaf }> = [
    { id: 'all', label: 'Todas', icon: Sprout },
    { id: 'horta', label: 'Horta', icon: Sprout },
    { id: 'ervas', label: 'Ervas', icon: Leaf },
    { id: 'flores', label: 'Flores', icon: Flower2 },
    { id: 'folhagens', label: 'Folhagens', icon: Leaf },
  ];

  // Filtering logic
  const filteredPlants = useMemo(() => {
    return PLANT_KNOWLEDGE_BASE.filter((plant) => {
      // Category match
      const matchesCategory =
        selectedCategory === 'all' || plant.category === selectedCategory;

      // Search match
      const query = searchQuery.trim().toLowerCase();
      if (!query) return matchesCategory;

      const matchesSearch =
        plant.commonName.toLowerCase().includes(query) ||
        plant.scientificName.toLowerCase().includes(query) ||
        plant.description.toLowerCase().includes(query) ||
        plant.kidTip.toLowerCase().includes(query) ||
        plant.family.toLowerCase().includes(query) ||
        plant.categoryLabel.toLowerCase().includes(query);

      return matchesCategory && matchesSearch;
    });
  }, [searchQuery, selectedCategory]);

  const countsByCategory = useMemo(() => {
    const counts: Record<string, number> = { all: PLANT_KNOWLEDGE_BASE.length };
    for (const plant of PLANT_KNOWLEDGE_BASE) {
      counts[plant.category] = (counts[plant.category] || 0) + 1;
    }
    return counts;
  }, []);

  return (
    <div className="space-y-6 sm:space-y-8 animate-in fade-in duration-300">
      {/* Catalog Header */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200/80 shadow-xs relative overflow-hidden">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-medium mb-3">
            <Sprout className="w-3.5 h-3.5 text-emerald-600" />
            <span>Guia Botânico da Família</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold font-serif-heading text-stone-900 tracking-tight">
            Catálogo de Espécies
          </h1>
          <p className="mt-2 text-stone-600 text-sm sm:text-base leading-relaxed">
            17 plantas selecionadas com carinho para cultivar, colher e aprender em família.
            Conheça as necessidades de luz, rega e dicas práticas para cuidar junto com as crianças.
          </p>
        </div>

        {/* Search & Category Filter Bar */}
        <div className="mt-6 space-y-4">
          {/* Search Box */}
          <div className="relative">
            <Search className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Buscar por tomate, manjericão, lavanda, girassol..."
              className="w-full pl-10 pr-10 py-3 rounded-2xl bg-stone-50 border border-stone-200 text-stone-900 text-sm placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-emerald-700/20 focus:border-emerald-700 transition-all"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 p-1 rounded-full text-stone-400 hover:text-stone-700 hover:bg-stone-200 transition-colors cursor-pointer"
                aria-label="Limpar busca"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Category Chips */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 no-scrollbar">
            {categories.map((cat) => {
              const Icon = cat.icon;
              const isSelected = selectedCategory === cat.id;
              const count = countsByCategory[cat.id] || 0;

              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all shrink-0 cursor-pointer ${
                    isSelected
                      ? 'bg-stone-900 text-white shadow-2xs'
                      : 'bg-stone-100/80 text-stone-600 hover:bg-stone-200 hover:text-stone-900'
                  }`}
                >
                  <Icon className={`w-3.5 h-3.5 ${isSelected ? 'text-emerald-400' : 'text-stone-500'}`} />
                  <span>{cat.label}</span>
                  <span
                    className={`ml-0.5 px-1.5 py-0.2 rounded-full text-[10px] font-semibold ${
                      isSelected
                        ? 'bg-stone-800 text-stone-300'
                        : 'bg-stone-200/80 text-stone-600'
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Result Counter */}
      <div className="flex items-center justify-between text-xs text-stone-500 px-1">
        <span>
          Mostrando {filteredPlants.length}{' '}
          {filteredPlants.length === 1 ? 'espécie' : 'espécies'}
          {selectedCategory !== 'all' && ` em ${categories.find(c => c.id === selectedCategory)?.label}`}
        </span>
        {(searchQuery || selectedCategory !== 'all') && (
          <button
            type="button"
            onClick={() => {
              setSearchQuery('');
              setSelectedCategory('all');
            }}
            className="text-emerald-700 hover:underline font-medium cursor-pointer"
          >
            Limpar filtros
          </button>
        )}
      </div>

      {/* Plant Grid */}
      {filteredPlants.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredPlants.map((plant) => (
            <PlantCatalogCard
              key={plant.id}
              plant={plant}
              onSelectPlant={onSelectPlant}
              onAddToGarden={onAddToGarden}
              isInGarden={isPlantInGarden(plant.id, plant.scientificName)}
            />
          ))}
        </div>
      ) : (
        /* Empty State */
        <div className="bg-white rounded-3xl p-12 text-center border border-dashed border-stone-200">
          <div className="w-12 h-12 rounded-2xl bg-stone-100 flex items-center justify-center text-stone-400 mx-auto mb-3">
            <Search className="w-6 h-6" />
          </div>
          <h3 className="font-semibold text-stone-800 font-serif-heading text-lg">
            Nenhuma espécie encontrada
          </h3>
          <p className="text-stone-500 text-xs sm:text-sm mt-1 max-w-sm mx-auto">
            Não encontramos resultados para &ldquo;{searchQuery}&rdquo;. Tente buscar por outros termos como tomate, morango, hortelã ou cactos.
          </p>
          <button
            type="button"
            onClick={() => {
              setSearchQuery('');
              setSelectedCategory('all');
            }}
            className="mt-4 px-4 py-2 rounded-xl bg-stone-900 text-white text-xs font-medium hover:bg-stone-800 transition-colors cursor-pointer"
          >
            Ver todas as espécies
          </button>
        </div>
      )}
    </div>
  );
}

interface PlantCatalogCardProps {
  plant: CatalogPlant;
  onSelectPlant: (plant: IdentifiedPlant) => void;
  onAddToGarden: (plant: IdentifiedPlant) => void;
  isInGarden: boolean;
}

function PlantCatalogCard({
  plant,
  onSelectPlant,
  onAddToGarden,
  isInGarden,
}: PlantCatalogCardProps) {
  const identified = useMemo(() => catalogPlantToIdentifiedPlant(plant), [plant]);

  return (
    <div className="bg-white rounded-3xl border border-stone-200/80 shadow-xs hover:shadow-md transition-all flex flex-col overflow-hidden group">
      {/* Image container */}
      <div className="relative aspect-4/3 w-full bg-stone-100 overflow-hidden">
        <img
          src={plant.imageUrl}
          alt={plant.commonName}
          loading="lazy"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60" />

        {/* Top Badges */}
        <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
          <span className="px-2.5 py-1 rounded-full text-[10px] font-semibold bg-white/90 backdrop-blur-md text-stone-800 shadow-xs">
            {plant.categoryLabel}
          </span>
          <span className="px-2.5 py-1 rounded-full text-[10px] font-medium bg-stone-900/80 backdrop-blur-md text-white shadow-xs">
            {plant.difficultyLevel}
          </span>
        </div>

        {/* Bottom Title on Image for Mobile / High contrast */}
        <div className="absolute bottom-3 left-3 right-3 text-white">
          <h3 className="font-bold text-base sm:text-lg font-serif-heading leading-tight drop-shadow-xs">
            {plant.commonName}
          </h3>
          <p className="text-[11px] text-white/80 italic line-clamp-1 drop-shadow-xs">
            {plant.scientificName}
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between space-y-4">
        {/* Description snippet */}
        <p className="text-xs text-stone-600 line-clamp-2 leading-relaxed">
          {plant.description}
        </p>

        {/* Quick parameters */}
        <div className="grid grid-cols-2 gap-2 text-xs text-stone-600 bg-stone-50 p-2.5 rounded-2xl border border-stone-100">
          <div className="flex items-center gap-1.5">
            <Sun className="w-3.5 h-3.5 text-amber-500 shrink-0" />
            <span className="truncate" title={plant.lightRequirement}>
              {plant.lightRequirement}
            </span>
          </div>
          <div className="flex items-center gap-1.5">
            <Droplets className="w-3.5 h-3.5 text-sky-500 shrink-0" />
            <span className="truncate" title={plant.wateringFrequency}>
              {plant.wateringFrequency}
            </span>
          </div>
        </div>

        {/* Kid Tip highlight */}
        <div className="bg-emerald-50/70 border border-emerald-100 rounded-2xl p-3 text-xs text-emerald-950 flex gap-2 items-start">
          <Sparkles className="w-3.5 h-3.5 text-emerald-700 shrink-0 mt-0.5" />
          <div className="flex-1">
            <span className="font-semibold text-emerald-900 block text-[11px]">
              Dica em família:
            </span>
            <p className="text-emerald-800 text-[11px] leading-snug line-clamp-2 mt-0.5">
              {plant.kidTip}
            </p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="pt-1 flex items-center gap-2">
          <button
            type="button"
            onClick={() => onSelectPlant(identified)}
            className="flex-1 py-2 px-3 rounded-xl bg-stone-900 text-white text-xs font-medium hover:bg-stone-800 transition-colors flex items-center justify-center gap-1.5 cursor-pointer shadow-2xs"
          >
            <BookOpen className="w-3.5 h-3.5" />
            <span>Ver Cuidados</span>
          </button>

          <button
            type="button"
            onClick={() => onAddToGarden(identified)}
            disabled={isInGarden}
            className={`py-2 px-3 rounded-xl text-xs font-medium transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
              isInGarden
                ? 'bg-emerald-50 text-emerald-800 border border-emerald-200/80 cursor-default'
                : 'bg-stone-100 text-stone-700 hover:bg-stone-200 border border-stone-200/60'
            }`}
            title={isInGarden ? 'Já está no seu jardim' : 'Adicionar ao Meu Jardim'}
          >
            {isInGarden ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-700" />
                <span className="hidden sm:inline">No Jardim</span>
              </>
            ) : (
              <>
                <Plus className="w-3.5 h-3.5" />
                <span>+ Jardim</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
