import React from 'react';
import { Tile } from './Tile';

export const LetterH: React.FC = () => {
  // 3 Columns x 5 Rows
  // Left Bar: Col 1, Rows 1-5
  // Right Bar: Col 3, Rows 1-5
  // Cross Bar: Col 2, Row 3

  const tileSize = "w-[80px] h-[80px] sm:w-[90px] sm:h-[90px]";
  const gap = "gap-1";

  // Coordinates for the H shape on a 3x5 grid (col, row)
  const activeSlots = [
    // Left vertical bar
    [0, 0], [0, 1], [0, 2], [0, 3], [0, 4],
    // Right vertical bar
    [2, 0], [2, 1], [2, 2], [2, 3], [2, 4],
    // Middle horizontal bar
    [1, 2]
  ];

  return (
    <div className={`grid grid-cols-3 grid-rows-5 ${gap} p-2`}>
      {Array.from({ length: 15 }).map((_, index) => {
        const col = index % 3;
        const row = Math.floor(index / 3);
        const isActive = activeSlots.some(([c, r]) => c === col && r === row);

        if (!isActive) return <div key={index} className="bg-transparent" />;

        return (
          <Tile 
            key={index} 
            id={`h-${index}`} 
            className={`rounded-sm shadow-sm ${tileSize}`} 
            seed={index + 100} 
          />
        );
      })}
    </div>
  );
};
