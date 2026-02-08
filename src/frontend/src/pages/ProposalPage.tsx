import React, { useState } from 'react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Heart, Sparkles } from 'lucide-react';
import { HeartConfetti } from '@/components/HeartConfetti';
import { PlayfulNoButton } from '@/components/PlayfulNoButton';
import { CuteRingAnimation } from '@/components/CuteRingAnimation';
import { LoveLetterEnvelopeView } from '@/components/LoveLetterEnvelopeView';
import {
  getProposalQuestion,
  getProposalSubtext,
  getAcceptanceMessage,
} from '@/config/proposalCopy';
import { assetUrl } from '@/utils/assetUrl';

type ProposalState = 'asking' | 'envelope' | 'accepted';

export function ProposalPage() {
  const [state, setState] = useState<ProposalState>('asking');
  const [noAttempts, setNoAttempts] = useState(0);
  const [imageError, setImageError] = useState(false);

  const handleYes = () => {
    setState('envelope');
  };

  const handleEnvelopeOpen = () => {
    setState('accepted');
  };

  const handleNoAttempt = () => {
    setNoAttempts((prev) => prev + 1);
  };

  // Envelope state
  if (state === 'envelope') {
    return (
      <Card className="bg-card/95 backdrop-blur-md shadow-soft-lg border-2 border-primary/30 animate-in fade-in zoom-in duration-500">
        <CardContent className="py-12">
          <LoveLetterEnvelopeView onOpen={handleEnvelopeOpen} />
        </CardContent>
      </Card>
    );
  }

  // Accepted state
  if (state === 'accepted') {
    return (
      <>
        <HeartConfetti />
        <Card className="bg-card/95 backdrop-blur-md shadow-soft-lg border-2 border-primary/30 animate-in fade-in zoom-in duration-500 envelope-open">
          <CardHeader className="text-center space-y-6 pb-4">
            <div className="flex justify-center">
              <div className="relative">
                <img
                  src={assetUrl('assets/generated/cute-mascot.dim_900x900.png')}
                  alt="Celebration"
                  className="w-48 h-48 sm:w-64 sm:h-64 object-contain animate-scale-bounce"
                />
                <Sparkles className="absolute -top-4 -right-4 w-12 h-12 text-love animate-pulse" />
                <Sparkles className="absolute -bottom-4 -left-4 w-10 h-10 text-primary animate-pulse" style={{ animationDelay: '0.5s' }} />
              </div>
            </div>
          </CardHeader>
          <CardContent className="text-center space-y-6 pb-8">
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-primary font-script">
                Yes! 🎉
              </h1>
              <p className="text-xl sm:text-2xl md:text-3xl font-semibold text-foreground">
                {getAcceptanceMessage()}
              </p>
              <p className="text-base sm:text-lg text-muted-foreground max-w-md mx-auto">
                This is the beginning of our beautiful journey together. Thank you for making my dreams come true! 💕
              </p>
            </div>

            <div className="flex justify-center gap-3 pt-4">
              <Heart className="w-8 h-8 text-love fill-love animate-float" />
              <Heart className="w-10 h-10 text-primary fill-primary animate-float-delayed" />
              <Heart className="w-8 h-8 text-love fill-love animate-float" style={{ animationDelay: '0.5s' }} />
            </div>

            {/* Sign-off */}
            <div className="mt-8 pt-6 border-t border-border/50">
              <p className="text-lg sm:text-xl font-script text-primary italic">
                your's truly CHOTU DON🎀
              </p>
            </div>
          </CardContent>
        </Card>
      </>
    );
  }

  // Asking state
  return (
    <Card className="bg-card/95 backdrop-blur-md shadow-soft-lg border-2 border-primary/20 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <CardHeader className="text-center space-y-6 pb-4">
        {/* Photo Section - Updated to use new uploaded image */}
        {!imageError && (
          <div className="flex justify-center mb-4">
            <div className="relative rounded-3xl overflow-hidden shadow-soft-lg border-4 border-primary/20 bg-card max-w-md w-full">
              <img
                src={assetUrl('assets/file_0000000085ec71fa9b0ffc17f2cf245d-1.png')}
                alt="Us together"
                className="w-full h-auto object-cover"
                onError={() => setImageError(true)}
              />
              <div className="absolute top-3 right-3">
                <Heart className="w-8 h-8 text-love fill-love drop-shadow-lg animate-pulse" />
              </div>
            </div>
          </div>
        )}

        {/* Ring Animation */}
        <div className="flex justify-center mb-4">
          <CuteRingAnimation />
        </div>

        <div className="flex justify-center">
          <div className="relative">
            <img
              src={assetUrl('assets/generated/cute-mascot.dim_900x900.png')}
              alt="Cute mascot"
              className="w-40 h-40 sm:w-56 sm:h-56 object-contain animate-float"
            />
            <Heart className="absolute -top-2 -right-2 w-8 h-8 text-love fill-love animate-pulse" />
            <Heart className="absolute -bottom-2 -left-2 w-6 h-6 text-primary fill-primary animate-pulse" style={{ animationDelay: '0.3s' }} />
          </div>
        </div>

        <div className="space-y-3">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-primary leading-tight">
            {getProposalQuestion()}
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-yellow-600 dark:text-yellow-400 font-semibold max-w-2xl mx-auto leading-relaxed">
            {getProposalSubtext()}
          </p>
        </div>
      </CardHeader>

      <CardContent className="space-y-8 pb-8">
        <div className="flex flex-col items-center gap-6">
          {/* Yes Button */}
          <Button
            size="lg"
            onClick={handleYes}
            className="bg-primary hover:bg-primary/90 text-primary-foreground text-xl sm:text-2xl px-12 sm:px-16 py-6 sm:py-8 rounded-3xl shadow-soft hover:shadow-soft-lg transition-all duration-300 hover:scale-105 animate-pulse-glow font-semibold"
          >
            <Heart className="w-6 h-6 sm:w-7 sm:h-7 mr-3 fill-current" />
            Yes! 💕
          </Button>

          {/* Playful No Button */}
          <div className="w-full max-w-md">
            <PlayfulNoButton onAttempt={handleNoAttempt} />
          </div>

          {noAttempts > 3 && (
            <p className="text-sm text-muted-foreground italic animate-in fade-in slide-in-from-bottom-2">
              I can wait all day... 😊💗
            </p>
          )}
        </div>

        {/* Decorative hearts */}
        <div className="flex justify-center gap-4 pt-4 opacity-60">
          <Heart className="w-5 h-5 text-primary fill-primary" />
          <Heart className="w-4 h-4 text-love fill-love" />
          <Heart className="w-6 h-6 text-primary fill-primary" />
          <Heart className="w-4 h-4 text-love fill-love" />
          <Heart className="w-5 h-5 text-primary fill-primary" />
        </div>
      </CardContent>
    </Card>
  );
}
