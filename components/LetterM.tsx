import React from 'react';
import { Tile } from './Tile';

export const LetterM: React.FC = () => {
  // 5 Columns x 5 Rows
  // Left Bar: Col 0, Rows 0-4
  // Right Bar: Col 4, Rows 0-4
  // Diagonals: Col 1 Row 1, Col 2 Row 2, Col 3 Row 1

  const tileSize = "w-[80px] h-[80px] sm:w-[90px] sm:h-[90px]";
  const gap = "gap-1";

  // Coordinates (col, row) on a 5x5 grid
  const activeSlots = [
    // Left vertical bar
    [0, 0], [0, 1], [0, 2], [0, 3], [0, 4],
    // Right vertical bar
    [4, 0], [4, 1], [4, 2], [4, 3], [4, 4],
    // Diagonals (approximating the V shape in the middle)
    [1, 1], 
    [2, 2], 
    [3, 1]
  ];

  return (
    <div className={`grid grid-cols-5 grid-rows-5 ${gap} p-2`}>
      {Array.from({ length: 25 }).map((_, index) => {
        const col = index % 5;
        const row = Math.floor(index / 5);
        const isActive = activeSlots.some(([c, r]) => c === col && r === row);

        if (!isActive) return <div key={index} className="bg-transparent" />;

        return (
          <Tile 
            key={index} 
            id={`m-${index}`} 
            className={`rounded-sm shadow-sm ${tileSize}`} 
            seed={index + 300} 
          />
        );
      })}
    </div>
  );
};