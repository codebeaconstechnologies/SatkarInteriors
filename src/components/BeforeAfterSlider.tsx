import React, { useState, useRef, useCallback, useEffect } from 'react';
import { Sliders, Sparkles, Building, CheckCircle2, ShieldAlert } from 'lucide-react';

interface BeforeAfterSliderProps {
  beforeImage?: string;
  afterImage?: string;
  beforeLabel?: string;
  afterLabel?: string;
  locationLabel?: string;
}

export const BeforeAfterSlider: React.FC<BeforeAfterSliderProps> = ({
  beforeImage = '/src/assets/images/bare_shell_interior_before_1791630087386.jpg',
  afterImage = 'https://lh3.googleusercontent.com/aida-public/AB6AXuBFUD30-JyoGAl9qezzFI-ULeAZ4-tFBTdzVZ0QhCIHOQvF8Zkj2lwlkAYhUQY8uX7fAP9ISCnH-5jnRiMs0zGt6FoBN78sQZUuDDaHmDQ4qe8vv-mpdaKTWLDAu9-dJfcMtiq5aprla5sLOKDhao5NZjxNNDt_E4B8m4ftYWq9h6VxZMHKHrhWqXJVWnvrww6d6pEhUmNQvMFVYnXKI7CLFRGOIJJqoHem6eRa92IgZzhbIrPlcwgS',
  beforeLabel = 'Builder Bare-Shell Handover (Punawale / Hinjewadi)',
  afterLabel = 'Satkar Bespoke Turnkey Execution (45-Day Handover)',
  locationLabel = 'Typical 3 BHK High-Rise Flat Transformation in Western Pune',
}) => {
  const [sliderPosition, setSliderPosition] = useState<number>(50);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const width = rect.width;
    const clampedPercentage = Math.max(0, Math.min(100, (x / width) * 100));
    setSliderPosition(clampedPercentage);
  }, []);

  const handleTouchMove = useCallback((e: TouchEvent) => {
    if (!isDragging) return;
    if (e.touches[0]) {
      handleMove(e.touches[0].clientX);
    }
  }, [isDragging, handleMove]);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  }, [isDragging, handleMove]);

  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
  }, []);

  useEffect(() => {
    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
      window.addEventListener('touchmove', handleTouchMove);
      window.addEventListener('touchend', handleMouseUp);
    }
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleMouseUp);
    };
  }, [isDragging, handleMouseMove, handleMouseUp, handleTouchMove]);

  return (
    <div className="w-full space-y-6">
      {/* Header controls & Quick Presets */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#e3ede6] text-[#2c4737] text-xs font-semibold uppercase tracking-wider">
            <Sliders className="w-3.5 h-3.5" />
            Interactive Civil Comparison
          </span>
          <p className="text-xs text-[#5f6f65] mt-1 font-medium">{locationLabel}</p>
        </div>

        {/* Preset quick buttons */}
        <div className="inline-flex rounded-lg border border-[#cfdacd] p-1 bg-[#f4f7f4] self-start sm:self-auto text-xs">
          <button
            type="button"
            onClick={() => setSliderPosition(10)}
            className={`px-3 py-1.5 rounded-md font-medium transition-colors ${
              sliderPosition < 30
                ? 'bg-[#27382f] text-white shadow-sm'
                : 'text-[#47574d] hover:text-[#18231c]'
            }`}
          >
            Bare Shell
          </button>
          <button
            type="button"
            onClick={() => setSliderPosition(50)}
            className={`px-3 py-1.5 rounded-md font-medium transition-colors ${
              sliderPosition >= 30 && sliderPosition <= 70
                ? 'bg-[#27382f] text-white shadow-sm'
                : 'text-[#47574d] hover:text-[#18231c]'
            }`}
          >
            Split 50:50
          </button>
          <button
            type="button"
            onClick={() => setSliderPosition(90)}
            className={`px-3 py-1.5 rounded-md font-medium transition-colors ${
              sliderPosition > 70
                ? 'bg-[#27382f] text-white shadow-sm'
                : 'text-[#47574d] hover:text-[#18231c]'
            }`}
          >
            Finished Home
          </button>
        </div>
      </div>

      {/* Main Comparison Canvas */}
      <div
        ref={containerRef}
        className="relative w-full aspect-[16/10] sm:aspect-[16/9] max-h-[560px] rounded-2xl overflow-hidden shadow-xl select-none cursor-ew-resize bg-[#212924] border border-[#d5ded6]"
        onMouseDown={(e) => {
          setIsDragging(true);
          handleMove(e.clientX);
        }}
        onTouchStart={(e) => {
          setIsDragging(true);
          if (e.touches[0]) handleMove(e.touches[0].clientX);
        }}
      >
        {/* After Image (Background layer - Full Width) */}
        <img
          src={afterImage}
          alt={afterLabel}
          className="absolute inset-0 w-full h-full object-cover pointer-events-none"
        />

        {/* After Label Badge */}
        <div className="absolute top-4 right-4 z-10 pointer-events-none">
          <div className="px-3.5 py-1.5 rounded-full bg-[#1b261f]/85 backdrop-blur-md text-white text-xs font-semibold tracking-wide flex items-center gap-1.5 border border-[#3b5243]/50 shadow-md">
            <Sparkles className="w-3.5 h-3.5 text-[#86d49f]" />
            <span>{afterLabel}</span>
          </div>
        </div>

        {/* Before Image (Foreground layer - Clipped by Slider position) */}
        <div
          className="absolute inset-y-0 left-0 overflow-hidden pointer-events-none transition-none"
          style={{ width: `${sliderPosition}%` }}
        >
          <img
            src={beforeImage}
            alt={beforeLabel}
            className="absolute inset-y-0 left-0 h-full object-cover pointer-events-none"
            style={{
              width: containerRef.current ? `${containerRef.current.clientWidth}px` : '100vw',
              maxWidth: 'none',
            }}
          />
        </div>

        {/* Before Label Badge */}
        <div className="absolute top-4 left-4 z-10 pointer-events-none">
          <div className="px-3.5 py-1.5 rounded-full bg-[#1a1c1a]/85 backdrop-blur-md text-[#f0e6d6] text-xs font-semibold tracking-wide flex items-center gap-1.5 border border-[#444]/50 shadow-md">
            <Building className="w-3.5 h-3.5 text-[#dca66c]" />
            <span>{beforeLabel}</span>
          </div>
        </div>

        {/* Divider Line */}
        <div
          className="absolute inset-y-0 z-20 pointer-events-none"
          style={{ left: `${sliderPosition}%` }}
        >
          <div className="h-full w-0.5 bg-white shadow-[0_0_10px_rgba(0,0,0,0.5)]"></div>
        </div>

        {/* Circular Drag Handle */}
        <div
          className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 z-30 pointer-events-none"
          style={{ left: `${sliderPosition}%` }}
        >
          <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white text-[#1f2b23] shadow-2xl flex items-center justify-center border-2 border-[#2b3e32] cursor-grab active:cursor-grabbing hover:scale-105 transition-transform">
            <svg
              className="w-5 h-5 text-[#27382f]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2.5}
                d="M8 9l-4 3 4 3m8-6l4 3-4 3"
              />
            </svg>
          </div>
        </div>

        {/* Drag Hint overlay at bottom */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 pointer-events-none">
          <span className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-sm text-[11px] text-white/90 font-medium tracking-wide">
            ◀ Drag slider to compare ▶
          </span>
        </div>
      </div>

      {/* Engineering Transformation Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
        {/* Bare Shell Realities */}
        <div className="p-4 rounded-xl bg-[#faece9]/50 border border-[#edd1cc] space-y-2">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#9c3427]">
            <ShieldAlert className="w-4 h-4 text-[#ba3b2c]" />
            Typical Builder Flat Challenges
          </div>
          <ul className="text-xs text-[#523b37] space-y-1.5 leading-relaxed">
            <li>• Uneven RCC beams slicing awkwardly across living & bedroom ceilings</li>
            <li>• Rigid wall chasings with exposed conduit lines and haphazard plug points</li>
            <li>• Damp-prone kitchen wet zones without proper boiling waterproof backing</li>
          </ul>
        </div>

        {/* Satkar Engineered Solutions */}
        <div className="p-4 rounded-xl bg-[#eaf4ee]/70 border border-[#c6dfce] space-y-2">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#225734]">
            <CheckCircle2 className="w-4 h-4 text-[#2a6d41]" />
            Satkar Civil Engineering Precision
          </div>
          <ul className="text-xs text-[#2b4d37] space-y-1.5 leading-relaxed">
            <li>• Concealed gypsum cove lighting grids aligning laser-straight to furniture</li>
            <li>• 100% Calibrated IS:710 Marine Plywood cores impervious to Pune monsoons</li>
            <li>• Turnkey handover in 45 guaranteed days with itemized zero-surprise BOQ</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
