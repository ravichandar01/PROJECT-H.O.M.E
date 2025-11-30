import React from 'react';
import { LetterH } from './components/LetterH';
import { LetterO } from './components/LetterO';
import { LetterM } from './components/LetterM';
import { LetterE } from './components/LetterE';
import { DIRECTORY_LINK } from './collageConfig';

const Footer = () => {
  return (
    <footer className="mt-8 sm:mt-12 text-center z-10 flex flex-col items-center gap-3 pb-8">
      <div className="text-stone-300 text-sm font-sans tracking-widest opacity-80">
        <p className="font-serif text-stone-200">PROJECT H.O.M.E</p>
        <p className="text-xs mt-2 text-stone-400">Select a tile to start a conversation</p>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="min-h-screen bg-transparent flex flex-col items-center justify-start md:justify-center p-4 overflow-x-hidden overflow-y-auto">
      
      {/* Semantic main container for the collage */}
      {/* On mobile: Vertical stack (flex-col), aligned to start, scrolling enabled */}
      {/* On desktop: Horizontal line (flex-row), centered */}
      <main className="home-collage w-full flex-grow flex items-start justify-center md:items-center py-10 md:py-0">
        
        <div className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-6 lg:gap-10 xl:gap-16 transform scale-[0.8] sm:scale-[0.9] md:scale-[0.8] xl:scale-100 origin-top md:origin-center transition-transform duration-500">
          
          <div className="letter-h flex-shrink-0 transition-transform hover:scale-[1.02] duration-500">
            <LetterH />
          </div>

          <div className="letter-o flex-shrink-0 transition-transform hover:rotate-2 duration-500">
            <LetterO />
          </div>

          <div className="letter-m flex-shrink-0 transition-transform hover:scale-[1.02] duration-500">
            <LetterM />
          </div>

          <div className="letter-e flex-shrink-0 transition-transform hover:scale-[1.02] duration-500">
            <LetterE />
          </div>

        </div>

      </main>

      {/* Directory Navigation Button */}
      <div className="z-20 mb-6 mt-4 md:mt-0">
        <a 
          href={DIRECTORY_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative inline-flex items-center px-8 py-3 overflow-hidden text-sm font-serif font-medium text-stone-300 border border-stone-600 rounded-full hover:text-white hover:border-white transition-all duration-300 focus:outline-none focus:ring"
        >
          <span className="absolute inset-0 transition-transform origin-left scale-x-0 bg-stone-700 group-hover:scale-x-100 duration-300"></span>
          <span className="relative uppercase tracking-[0.2em]">AI Persona Directory</span>
        </a>
      </div>

      <Footer />

    </div>
  );
}