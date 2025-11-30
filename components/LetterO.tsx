import React from 'react';
import { Tile } from './Tile';

export const LetterO: React.FC = () => {
  // A large circle container filled with a grid of images, clipped.
  // Then an inner circle overlay.

  const size = "w-[300px] h-[300px] sm:w-[450px] sm:h-[450px]";
  
  return (
    <div className={`relative ${size} shrink-0 m-2`}>
      {/* Outer Clipped Circle */}
      <div className="w-full h-full rounded-full overflow-hidden shadow-lg border-4 border-white/50 relative z-0">
        <div className="grid grid-cols-5 grid-rows-5 w-full h-full gap-1">
          {Array.from({ length: 25 }).map((_, index) => (
            <Tile 
              key={index} 
              id={`o-${index}`}
              className="w-full h-full" 
              seed={index + 200} 
            />
          ))}
        </div>
      </div>

      {/* Inner Circle Emblem - Uploadable Image Slot */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
                      w-[62%] h-[62%] rounded-full 
                      overflow-hidden
                      border-[6px] border-double border-stone-400 shadow-inner z-10 bg-parchment">
        
        {/* Using a Tile here allows the user to click and upload the specific University logo */}
        <Tile 
          id="o-center-logo" 
          className="w-full h-full bg-parchment"
          seed={9999}
        />
        
      </div>
    </div>
  );
};