
import React from 'react';
import { COLLAGE_CONFIG, DEFAULT_LINK } from '../collageConfig';

interface TileProps {
  id: string;
  className?: string;
  seed?: number;
  link?: string;
}

export const Tile: React.FC<TileProps> = ({ 
  id, 
  className, 
  seed = Math.random(),
  link: propLink 
}) => {
  // 1. Check if there is a specific config for this ID in collageConfig.ts
  const config = COLLAGE_CONFIG[id];

  // 2. Determine final Image URL
  // Priority: Config Image -> Random Picsum Image
  const imageUrl = config?.image || `https://picsum.photos/seed/${seed}/300/300`;

  // 3. Determine final Link URL
  // Priority: Config Link -> Prop Link -> Default Global Link
  const activeLink = config?.link || propLink || DEFAULT_LINK;

  return (
    <div className={`relative group overflow-hidden ${className}`}>
      <a 
        href={activeLink}
        target="_blank"
        rel="noopener noreferrer"
        className="block w-full h-full relative cursor-pointer"
        title={`Open Chat: ${activeLink}`}
      >
        <img
          src={imageUrl}
          alt={`Collage tile ${id}`}
          className="w-full h-full object-cover block transition-transform duration-700 ease-in-out group-hover:scale-110"
          loading="lazy"
        />
        
        {/* Subtle overlay on hover */}
        <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors duration-300 pointer-events-none" />
      </a>
    </div>
  );
};
