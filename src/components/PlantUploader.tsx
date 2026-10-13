import React, { useState, useRef } from 'react';
import {
  UploadCloud,
  Camera,
  Image as ImageIcon,
  Sparkles,
  AlertCircle,
  RefreshCw,
  ArrowRight
} from 'lucide-react';
import { IdentifiedPlant } from '../types';
import { SAMPLE_PLANTS } from '../data/samplePlants';
import { optimizePlantImage } from '../utils/imageUtils';

interface PlantUploaderProps {
  onPlantIdentified: (plant: IdentifiedPlant) => void;
  isLoading: boolean;
  setIsLoading: (loading: boolean) => void;
  error: string | null;
  setError: (err: string | null) => void;
}

export function PlantUploader({
  onPlantIdentified,
  isLoading,
  setIsLoading,
  error,
  setError,
}: PlantUploaderProps) {
  const [dragActive, setDragActive] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedMimeType, setSelectedMimeType] = useState<string>('image/jpeg');
  const [userNote, setUserNote] = useState('');
  const fileInputRef = useRef<HTMLInputElement>(null);
  const cameraInputRef = useRef<HTMLInputElement>(null);

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true);
    } else if (e.type === 'dragleave') {
      setDragActive(false);
    }
  };

  const processFile = async (file: File) => {
    if (!file.type.startsWith('image/')) {
      setError('Por favor, envie um arquivo de imagem válido (JPEG, PNG ou WEBP).');
      return;
    }

    setError(null);
    try {
      const { dataUrl, mimeType } = await optimizePlantImage(file);
      setSelectedMimeType(mimeType);
      setSelectedImage(dataUrl);
    } catch {
      setError('Não foi possível processar a foto. Tente novamente.');
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      processFile(e.dataTransfer.files[0]);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (e.target.files && e.target.files[0]) {
      processFile(e.target.files[0]);
    }
  };

  const handleIdentify = async () => {
    if (!selectedImage) {
      setError('Por favor, tire uma foto ou escolha uma imagem primeiro.');
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      const res = await fetch('/api/identify-plant', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          imageBase64: selectedImage,
          mimeType: selectedMimeType,
          userPrompt: userNote.trim() || undefined,
        }),
      });

      if (!res.ok) {
        const errorData = await res.json().catch(() => ({}));
        throw new Error(errorData.error || `Falha na identificação (status ${res.status})`);
      }

      const identifiedData = await res.json();
      const completePlant: IdentifiedPlant = {
        id: 'plant-' + Date.now(),
        identifiedAt: new Date().toISOString(),
        imageUrl: selectedImage,
        ...identifiedData,
        userNotes: userNote.trim() || undefined,
        lastWatered: new Date().toISOString().split('T')[0],
      };

      onPlantIdentified(completePlant);
    } catch (err: any) {
      console.error('Identification error:', err);
      setError(err?.message || 'Não foi possível identificar a planta. Verifique a iluminação e tente novamente.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto py-4 sm:py-8 space-y-8 animate-in fade-in duration-300">
      {/* Serene minimal header */}
      <div className="text-center space-y-2">
        <h1 className="text-2xl sm:text-3xl font-bold font-serif-heading text-stone-900 tracking-tight">
          Que planta vamos cuidar hoje?
        </h1>
        <p className="text-sm text-stone-500 max-w-md mx-auto leading-relaxed">
          Fotografe uma folha ou vaso para identificar a espécie, verificar a saúde e ver os cuidados práticos.
        </p>
      </div>

      {error && (
        <div className="p-3.5 rounded-2xl bg-amber-50 border border-amber-200 text-amber-900 flex items-center gap-2.5 text-xs sm:text-sm">
          <AlertCircle className="w-4 h-4 text-amber-600 shrink-0" />
          <span>{error}</span>
        </div>
      )}

      {/* Upload Drop Canvas */}
      <div
        onDragEnter={handleDrag}
        onDragLeave={handleDrag}
        onDragOver={handleDrag}
        onDrop={handleDrop}
        className={`relative border-2 border-dashed rounded-3xl transition-all duration-200 p-8 sm:p-12 text-center flex flex-col items-center justify-center bg-white ${
          dragActive
            ? 'border-emerald-600 bg-emerald-50/40'
            : selectedImage
            ? 'border-stone-300'
            : 'border-stone-200 hover:border-stone-400'
        }`}
      >
        <input
          ref={fileInputRef}
          type="file"
          accept="image/png, image/jpeg, image/webp, image/heic"
          className="hidden"
          onChange={handleChange}
        />
        <input
          ref={cameraInputRef}
          type="file"
          accept="image/*"
          capture="environment"
          className="hidden"
          onChange={handleChange}
        />

        {selectedImage ? (
          <div className="w-full flex flex-col items-center">
            <div className="relative w-48 h-48 sm:w-56 sm:h-56 rounded-2xl overflow-hidden shadow-sm border border-stone-200 mb-4 bg-stone-900">
              <img
                src={selectedImage}
                alt="Foto selecionada"
                className="w-full h-full object-cover"
              />
              <button
                type="button"
                onClick={() => setSelectedImage(null)}
                className="absolute top-2 right-2 px-2.5 py-1 rounded-lg bg-black/60 hover:bg-black/80 text-white text-xs backdrop-blur-xs transition-colors cursor-pointer"
              >
                Trocar
              </button>
            </div>

            <div className="w-full max-w-sm space-y-3">
              <input
                type="text"
                placeholder="Observação ou dúvida (opcional)"
                value={userNote}
                onChange={(e) => setUserNote(e.target.value)}
                className="w-full px-3.5 py-2 text-xs sm:text-sm rounded-xl border border-stone-200 focus:outline-none focus:ring-1 focus:ring-emerald-600 placeholder:text-stone-400"
              />

              <div className="flex items-center justify-center gap-2">
                <button
                  type="button"
                  onClick={() => {
                    setSelectedImage(null);
                    setUserNote('');
                  }}
                  disabled={isLoading}
                  className="px-4 py-2 rounded-xl text-stone-500 hover:text-stone-800 text-xs font-medium cursor-pointer"
                >
                  Cancelar
                </button>
                <button
                  type="button"
                  onClick={handleIdentify}
                  disabled={isLoading}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white text-xs sm:text-sm font-semibold transition-all disabled:opacity-50 cursor-pointer shadow-xs"
                >
                  {isLoading ? (
                    <>
                      <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                      <span>Identificando...</span>
                    </>
                  ) : (
                    <>
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>Identificar Planta</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-700 flex items-center justify-center mb-4">
              <UploadCloud className="w-6 h-6" />
            </div>

            <p className="text-xs sm:text-sm text-stone-500 mb-6 max-w-xs">
              Arraste a foto da folha aqui ou escolha uma das opções abaixo:
            </p>

            <div className="flex flex-wrap items-center justify-center gap-3">
              <button
                type="button"
                onClick={() => cameraInputRef.current?.click()}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white text-xs sm:text-sm font-semibold transition-colors cursor-pointer shadow-xs"
              >
                <Camera className="w-4 h-4" />
                Tirar Foto
              </button>
              <button
                type="button"
                onClick={() => fileInputRef.current?.click()}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-stone-100 hover:bg-stone-200 text-stone-800 text-xs sm:text-sm font-medium transition-colors cursor-pointer"
              >
                <ImageIcon className="w-4 h-4 text-stone-500" />
                Escolher Arquivo
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Minimalist Sample Chips */}
      <div className="text-center space-y-3 pt-2">
        <span className="text-xs text-stone-400 font-medium tracking-wide">
          Ou explore os cuidados de uma planta conhecida:
        </span>

        <div className="flex flex-wrap items-center justify-center gap-2.5">
          {SAMPLE_PLANTS.map((sample) => (
            <button
              key={sample.id}
              type="button"
              onClick={() => {
                setError(null);
                onPlantIdentified(sample);
              }}
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white hover:bg-emerald-50 border border-stone-200 hover:border-emerald-300 text-stone-700 hover:text-emerald-900 text-xs font-medium transition-all shadow-2xs cursor-pointer group"
            >
              <img
                src={sample.imageUrl}
                alt={sample.commonName}
                className="w-5 h-5 rounded-md object-cover"
              />
              <span>{sample.commonName}</span>
              <ArrowRight className="w-3 h-3 text-stone-400 group-hover:text-emerald-600 transition-transform group-hover:translate-x-0.5" />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
