import React, { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { NO_BUTTON_MESSAGES } from '@/config/proposalCopy';

interface PlayfulNoButtonProps {
  onAttempt: () => void;
}

export function PlayfulNoButton({ onAttempt }: PlayfulNoButtonProps) {
  const [messageIndex, setMessageIndex] = useState(0);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isMoving, setIsMoving] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const moveButton = () => {
    if (!containerRef.current || !buttonRef.current) return;

    const container = containerRef.current.getBoundingClientRect();
    const button = buttonRef.current.getBoundingClientRect();

    // Calculate safe boundaries
    const maxX = container.width - button.width - 20;
    const maxY = container.height - button.height - 20;

    // Generate random position
    const newX = Math.random() * maxX;
    const newY = Math.random() * maxY;

    setPosition({ x: newX, y: newY });
    setIsMoving(true);
    
    // Cycle through messages
    setMessageIndex((prev) => (prev + 1) % NO_BUTTON_MESSAGES.length);
    
    // Call the attempt callback
    onAttempt();

    setTimeout(() => setIsMoving(false), 300);
  };

  const handleInteraction = (e: React.MouseEvent | React.TouchEvent) => {
    e.preventDefault();
    moveButton();
  };

  // Also move on hover for desktop
  const handleMouseEnter = () => {
    moveButton();
  };

  return (
    <div ref={containerRef} className="relative w-full h-32 sm:h-40">
      <Button
        ref={buttonRef}
        variant="outline"
        size="lg"
        onClick={handleInteraction}
        onMouseEnter={handleMouseEnter}
        onTouchStart={handleInteraction}
        className={`absolute transition-all duration-300 ease-out border-2 hover:bg-muted ${
          isMoving ? 'animate-shake' : ''
        }`}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
        }}
      >
        {NO_BUTTON_MESSAGES[messageIndex]}
      </Button>
    </div>
  );
}
