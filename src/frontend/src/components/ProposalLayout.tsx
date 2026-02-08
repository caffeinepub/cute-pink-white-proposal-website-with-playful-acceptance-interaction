import React from 'react';
import { BackgroundMusicControls } from './BackgroundMusicControls';

interface ProposalLayoutProps {
  children: React.ReactNode;
}

export function ProposalLayout({ children }: ProposalLayoutProps) {
  return (
    <div className="min-h-screen hearts-bg flex flex-col">
      {/* Overlay for better text readability */}
      <div className="fixed inset-0 bg-background/40 backdrop-blur-sm -z-10" />
      
      {/* Main content */}
      <main className="flex-1 flex items-center justify-center p-4 sm:p-6 md:p-8">
        <div className="w-full max-w-4xl">
          {children}
        </div>
      </main>

      {/* Background Music Controls */}
      <BackgroundMusicControls />

      {/* Footer */}
      <footer className="py-6 text-center text-sm text-muted-foreground">
        <p>
          © 2026. Built with <span className="text-love inline-block animate-pulse">♥</span> using{' '}
          <a 
            href="https://caffeine.ai" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-primary transition-colors underline"
          >
            caffeine.ai
          </a>
        </p>
      </footer>
    </div>
  );
}
