import React from 'react';

interface LoveLetterEnvelopeViewProps {
  onOpen: () => void;
}

export function LoveLetterEnvelopeView({ onOpen }: LoveLetterEnvelopeViewProps) {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] animate-in fade-in zoom-in duration-500">
      <button
        onClick={onOpen}
        className="group relative focus:outline-none focus-visible:ring-4 focus-visible:ring-primary/50 rounded-3xl transition-all duration-300 hover:scale-105 active:scale-95"
        aria-label="Tap to open love letter"
      >
        {/* Envelope Image */}
        <div className="relative">
          <img
            src="/assets/generated/love-envelope.dim_768x768.png"
            alt="Love letter envelope"
            className="w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 object-contain animate-float drop-shadow-2xl"
          />
          
          {/* Sparkle effects around envelope */}
          <div className="absolute -top-4 -right-4 w-8 h-8 text-love animate-ring-sparkle">
            ✨
          </div>
          <div className="absolute -bottom-4 -left-4 w-8 h-8 text-primary animate-ring-sparkle" style={{ animationDelay: '0.5s' }}>
            ✨
          </div>
          <div className="absolute top-1/2 -left-8 w-6 h-6 text-love animate-ring-sparkle" style={{ animationDelay: '1s' }}>
            💫
          </div>
          <div className="absolute top-1/2 -right-8 w-6 h-6 text-primary animate-ring-sparkle" style={{ animationDelay: '1.5s' }}>
            💫
          </div>
        </div>

        {/* Tap to Open Text */}
        <div className="mt-8 text-center">
          <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary font-script animate-pulse-glow">
            Tap to Open💌
          </p>
          <p className="mt-3 text-sm sm:text-base text-muted-foreground italic">
            Click anywhere to reveal your message
          </p>
        </div>

        {/* Hover effect indicator */}
        <div className="absolute inset-0 rounded-3xl bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
      </button>
    </div>
  );
}
