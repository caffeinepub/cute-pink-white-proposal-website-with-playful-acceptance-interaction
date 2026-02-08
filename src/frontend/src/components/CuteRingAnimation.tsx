import React from 'react';
import { assetUrl } from '@/utils/assetUrl';

export function CuteRingAnimation() {
  return (
    <div className="relative inline-block pointer-events-none">
      <img
        src={assetUrl('assets/generated/cute-ring.dim_512x512.png')}
        alt="Ring"
        className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 object-contain animate-ring-spin"
        onError={(e) => {
          // Gracefully hide if image fails to load
          e.currentTarget.style.display = 'none';
        }}
      />
      <div className="absolute inset-0 animate-ring-sparkle">
        <div className="absolute top-0 right-0 w-3 h-3 bg-yellow-300 rounded-full blur-sm"></div>
        <div className="absolute bottom-2 left-2 w-2 h-2 bg-yellow-200 rounded-full blur-sm"></div>
        <div className="absolute top-1/2 left-0 w-2.5 h-2.5 bg-yellow-400 rounded-full blur-sm"></div>
      </div>
    </div>
  );
}
