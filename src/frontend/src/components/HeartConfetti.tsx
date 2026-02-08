import React, { useEffect, useState } from 'react';
import { Heart } from 'lucide-react';

interface ConfettiPiece {
  id: number;
  left: number;
  delay: number;
  duration: number;
  size: number;
  color: string;
}

export function HeartConfetti() {
  const [confetti, setConfetti] = useState<ConfettiPiece[]>([]);

  useEffect(() => {
    // Generate confetti pieces
    const pieces: ConfettiPiece[] = [];
    const colors = [
      'oklch(0.65 0.18 350)', // primary pink
      'oklch(0.55 0.22 15)',  // love red
      'oklch(0.88 0.05 10)',  // accent peachy
      'oklch(0.75 0.15 340)', // lighter pink
    ];

    for (let i = 0; i < 50; i++) {
      pieces.push({
        id: i,
        left: Math.random() * 100,
        delay: Math.random() * 2,
        duration: 3 + Math.random() * 2,
        size: 20 + Math.random() * 20,
        color: colors[Math.floor(Math.random() * colors.length)]
      });
    }

    setConfetti(pieces);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
      {confetti.map((piece) => (
        <div
          key={piece.id}
          className="confetti-piece absolute"
          style={{
            left: `${piece.left}%`,
            animationDelay: `${piece.delay}s`,
            animationDuration: `${piece.duration}s`,
          }}
        >
          <Heart
            size={piece.size}
            fill={piece.color}
            color={piece.color}
            className="drop-shadow-lg"
          />
        </div>
      ))}
    </div>
  );
}
