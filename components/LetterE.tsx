import React from 'react';
import { Tile } from './Tile';

export const LetterE: React.FC = () => {
  // 3 Columns x 5 Rows
  // Left Bar: Col 0, Rows 0-4
  // Top Bar: Col 1-2, Row 0
  // Mid Bar: Col 1-2, Row 2
  // Bot Bar: Col 1-2, Row 4

  const tileSize = "w-[80px] h-[80px] sm:w-[90px] sm:h-[90px]";
  const gap = "gap-1";

  // Coordinates (col, row)
  const activeSlots = [
    // Left Bar
    [0, 0], [0, 1], [0, 2], [0, 3], [0, 4],
    // Horizontal Bars
    [1, 0], [2, 0], // Top
    [1, 2], [2, 2], // Middle
    [1, 4], [2, 4], // Bottom
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
            id={`e-${index}`}
            className={`rounded-sm shadow-sm ${tileSize}`} 
            seed={index + 400} 
          />
        );
      })}
    </div>
  );
};