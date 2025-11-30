
// This file allows you to manually configure the images and links for each tile.

export interface TileConfig {
  image?: string; // URL to the image
  link?: string;  // URL to open when clicked
}

export const DEFAULT_LINK = "https://www.govst.edu/";

// Link for the "AI Persona Directory" button
export const DIRECTORY_LINK = "https://aipersonawebpage.s3.us-east-1.amazonaws.com/index.html"; 

/* 
   ============== ID REFERENCE GUIDE ==============
   The letters are built on grids. Some numbers are "gaps" and won't show up.
   Use the IDs below to target specific visible tiles.

   LETTER H (3 Columns x 5 Rows)
   [h-0]  [gap]  [h-2]
   [h-3]  [gap]  [h-5]
   [h-6]  [h-7]  [h-8]  <-- Middle Bar
   [h-9]  [gap]  [h-11]
   [h-12] [gap]  [h-14]

   LETTER O (Outer Ring - 5x5 Grid)
   All IDs from o-0 to o-24 are generally valid, but corners might be clipped.
   Center Image ID: "o-center-logo"

   LETTER M (5 Columns x 5 Rows)
   [m-0]  [gap]  [gap]  [gap]  [m-4]
   [m-5]  [m-6]  [gap]  [m-8]  [m-9]
   [m-10] [gap]  [m-12] [gap]  [m-14]
   [m-15] [gap]  [gap]  [gap]  [m-19]
   [m-20] [gap]  [gap]  [gap]  [m-24]

   LETTER E (3 Columns x 5 Rows)
   [e-0]  [e-1]  [e-2]
   [e-3]  [gap]  [gap]
   [e-6]  [e-7]  [e-8]
   [e-9]  [gap]  [gap]
   [e-12] [e-13] [e-14]
   ================================================
*/

export const COLLAGE_CONFIG: Record<string, TileConfig> = {
  
  // --- Letter O Center ---
  "o-center-logo": {
    image: "https://aipersonawebpage.s3.us-east-1.amazonaws.com/logo2.png",
    link: "https://www.govst.edu/"
  },

  // --- Letter H ---
  "h-0": { 
     // Top Left
     image: "https://aipersonawebpage.s3.us-east-1.amazonaws.com/profile5.jpg",
     link: "https://www.stack-ai.com/chat/691cb73211c3aa554024159f-1DyY3PdpDFCWMxeaWjU3Tt"
  },
  "h-1": { 
     // Top Right 
     image: "https://aipersonawebpage.s3.us-east-1.amazonaws.com/jaguar.png",
  },
  "h-2": { 
     // Top Right 
     image: "https://aipersonawebpage.s3.us-east-1.amazonaws.com/profile1.jpg",
     link: "https://www.stack-ai.com/chat/691c8ff53b466689b3abe55f-1YjYetSs5t8UgGT3gc1bnq"
  },
  "h-4": { 
     // Top Right 
     image: "https://aipersonawebpage.s3.us-east-1.amazonaws.com/jaguar.png",
  },
  "h-5": { 
     // Top Right 
     image: "https://aipersonawebpage.s3.us-east-1.amazonaws.com/jaguar.png",
  },
   "h-6": { 
     // Left Mid
     image: "https://aipersonawebpage.s3.us-east-1.amazonaws.com/profile2.jpg",
     link: "https://www.stack-ai.com/chat/691c9be787ab9a6a8d454419-1YjYetSs5t8UgGT3gc1bnq"
  }, 
  "h-7": { 
     // Top Right 
     image: "https://aipersonawebpage.s3.us-east-1.amazonaws.com/jaguar.png",
  },
   "h-8": { 
     // Right Mid
     image: "https://aipersonawebpage.s3.us-east-1.amazonaws.com/profile3.jpg",
     link: "https://www.stack-ai.com/chat/691caa8343551e3ef78cdca4-5bJg51XsEJqvlZsYTZ8Flo"
  },
  "h-9": { 
     // Top Right 
     image: "https://aipersonawebpage.s3.us-east-1.amazonaws.com/jaguar.png",
  },
  "h-10": { 
     // Top Right 
     image: "https://aipersonawebpage.s3.us-east-1.amazonaws.com/jaguar.png",
  },
  "h-11": { 
     // Top Right 
     image: "https://aipersonawebpage.s3.us-east-1.amazonaws.com/jaguar.png",
  },
   "h-12": { 
     // Left Bottom
     image: "https://aipersonawebpage.s3.us-east-1.amazonaws.com/profile4.png",
     link: "https://www.stack-ai.com/chat/691caf8ba35118445e6e5825-5bJg51XsEJqvlZsYTZ8Flo"
  },
  "h-13": { 
     // Top Right 
     image: "https://aipersonawebpage.s3.us-east-1.amazonaws.com/jaguar.png",
  },
   "h-14": { 
     // Right Bottom
     image: "https://aipersonawebpage.s3.us-east-1.amazonaws.com/profile6.png",
     link: "https://www.stack-ai.com/chat/690c47dae0f96f9226d988f4-0OGJdp2Tl9G10srZsC9omH"
  },
    // --- Letter O ---
  "o-0": { 
     // Top Right 
     image: "https://aipersonawebpage.s3.us-east-1.amazonaws.com/jaguar.png",
  },
  "o-1": { 
     // Top Right 
     image: "https://aipersonawebpage.s3.us-east-1.amazonaws.com/jaguar.png",
  },
  "o-2": { 
     // Top Right 
     image: "https://aipersonawebpage.s3.us-east-1.amazonaws.com/jaguar.png",
  },
  "o-3": { 
     // Top Right 
     image: "https://aipersonawebpage.s3.us-east-1.amazonaws.com/jaguar.png",
  },
  "o-4": { 
     // Top Right 
     image: "https://aipersonawebpage.s3.us-east-1.amazonaws.com/jaguar.png",
  },
  "o-5": { 
     // Top Right 
     image: "https://aipersonawebpage.s3.us-east-1.amazonaws.com/jaguar.png",
  },
  "o-6": { 
     // Top Right 
     image: "https://aipersonawebpage.s3.us-east-1.amazonaws.com/jaguar.png",
  },
  "o-7": { 
     // Top Right 
     image: "https://aipersonawebpage.s3.us-east-1.amazonaws.com/jaguar.png",
  },
  "o-8": { 
     // Top Right 
     image: "https://aipersonawebpage.s3.us-east-1.amazonaws.com/jaguar.png",
  },
  "o-9": { 
     // Top Right 
     image: "https://aipersonawebpage.s3.us-east-1.amazonaws.com/jaguar.png",
  },
  "o-10": { 
     // Top Right 
     image: "https://aipersonawebpage.s3.us-east-1.amazonaws.com/jaguar.png",
  },
  "o-11": { 
     // Top Right 
     image: "https://aipersonawebpage.s3.us-east-1.amazonaws.com/jaguar.png",
  },
  "o-12": { 
     // Top Right 
     image: "https://aipersonawebpage.s3.us-east-1.amazonaws.com/jaguar.png",
  },
  "o-13": { 
     // Top Right 
     image: "https://aipersonawebpage.s3.us-east-1.amazonaws.com/jaguar.png",
  },
  "o-14": { 
     // Top Right 
     image: "https://aipersonawebpage.s3.us-east-1.amazonaws.com/jaguar.png",
  },
  "o-15": { 
     // Top Right 
     image: "https://aipersonawebpage.s3.us-east-1.amazonaws.com/jaguar.png",
  },
  "o-16": { 
     // Top Right 
     image: "https://aipersonawebpage.s3.us-east-1.amazonaws.com/jaguar.png",
  },
  "o-17": { 
     // Top Right 
     image: "https://aipersonawebpage.s3.us-east-1.amazonaws.com/jaguar.png",
  },
  "o-18": { 
     // Top Right 
     image: "https://aipersonawebpage.s3.us-east-1.amazonaws.com/jaguar.png",
  },
  "o-19": { 
     // Top Right 
     image: "https://aipersonawebpage.s3.us-east-1.amazonaws.com/jaguar.png",
  },
  "o-20": { 
     // Top Right 
     image: "https://aipersonawebpage.s3.us-east-1.amazonaws.com/jaguar.png",
  },
  "o-21": { 
     // Top Right 
     image: "https://aipersonawebpage.s3.us-east-1.amazonaws.com/jaguar.png",
  },
  "o-22": { 
     // Top Right 
     image: "https://aipersonawebpage.s3.us-east-1.amazonaws.com/jaguar.png",
  },
  "o-23": { 
     // Top Right 
     image: "https://aipersonawebpage.s3.us-east-1.amazonaws.com/jaguar.png",
  },
  "o-24": { 
     // Top Right 
     image: "https://aipersonawebpage.s3.us-east-1.amazonaws.com/jaguar.png",
  },
    // --- Letter M ---
  "m-0": { 
     // Top Right 
     image: "https://aipersonawebpage.s3.us-east-1.amazonaws.com/jaguar.png",
  },
  "m-1": { 
     // Top Right 
     image: "https://aipersonawebpage.s3.us-east-1.amazonaws.com/jaguar.png",
  },
  "m-2": { 
     // Top Right 
     image: "https://aipersonawebpage.s3.us-east-1.amazonaws.com/jaguar.png",
  },
  "m-3": { 
     // Top Right 
     image: "https://aipersonawebpage.s3.us-east-1.amazonaws.com/jaguar.png",
  },
  "m-4": { 
     // Top Right 
     image: "https://aipersonawebpage.s3.us-east-1.amazonaws.com/jaguar.png",
  },
  "m-5": { 
     // Top Right 
     image: "https://aipersonawebpage.s3.us-east-1.amazonaws.com/jaguar.png",
  },
  "m-6": { 
     // Top Right 
     image: "https://aipersonawebpage.s3.us-east-1.amazonaws.com/jaguar.png",
  },
  "m-7": { 
     // Top Right 
     image: "https://aipersonawebpage.s3.us-east-1.amazonaws.com/jaguar.png",
  },
  "m-8": { 
     // Top Right 
     image: "https://aipersonawebpage.s3.us-east-1.amazonaws.com/jaguar.png",
  },
  "m-9": { 
     // Top Right 
     image: "https://aipersonawebpage.s3.us-east-1.amazonaws.com/jaguar.png",
  },
  "m-10": { 
     // Top Right 
     image: "https://aipersonawebpage.s3.us-east-1.amazonaws.com/jaguar.png",
  },
  "m-11": { 
     // Top Right 
     image: "https://aipersonawebpage.s3.us-east-1.amazonaws.com/jaguar.png",
  },
  "m-12": { 
     // Top Right 
     image: "https://aipersonawebpage.s3.us-east-1.amazonaws.com/jaguar.png",
  },
  "m-13": { 
     // Top Right 
     image: "https://aipersonawebpage.s3.us-east-1.amazonaws.com/jaguar.png",
  },
  "m-14": { 
     // Top Right 
     image: "https://aipersonawebpage.s3.us-east-1.amazonaws.com/jaguar.png",
  },
  "m-15": { 
     // Top Right 
     image: "https://aipersonawebpage.s3.us-east-1.amazonaws.com/jaguar.png",
  },
  "m-16": { 
     // Top Right 
     image: "https://aipersonawebpage.s3.us-east-1.amazonaws.com/jaguar.png",
  },
  "m-17": { 
     // Top Right 
     image: "https://aipersonawebpage.s3.us-east-1.amazonaws.com/jaguar.png",
  },
  "m-18": { 
     // Top Right 
     image: "https://aipersonawebpage.s3.us-east-1.amazonaws.com/jaguar.png",
  },
  "m-19": { 
     // Top Right 
     image: "https://aipersonawebpage.s3.us-east-1.amazonaws.com/jaguar.png",
  },
  "m-20": { 
     // Top Right 
     image: "https://aipersonawebpage.s3.us-east-1.amazonaws.com/jaguar.png",
  },
  "m-21": { 
     // Top Right 
     image: "https://aipersonawebpage.s3.us-east-1.amazonaws.com/jaguar.png",
  },
  "m-22": { 
     // Top Right 
     image: "https://aipersonawebpage.s3.us-east-1.amazonaws.com/jaguar.png",
  },
  "m-23": { 
     // Top Right 
     image: "https://aipersonawebpage.s3.us-east-1.amazonaws.com/jaguar.png",
  },
  "m-24": { 
     // Top Right 
     image: "https://aipersonawebpage.s3.us-east-1.amazonaws.com/jaguar.png",
  },
    // --- Letter E ---
  "e-0": { 
     // Top Right 
     image: "https://aipersonawebpage.s3.us-east-1.amazonaws.com/jaguar.png",
  },
  "e-1": { 
     // Top Right 
     image: "https://aipersonawebpage.s3.us-east-1.amazonaws.com/jaguar.png",
  },
  "e-2": { 
     // Top Right 
     image: "https://aipersonawebpage.s3.us-east-1.amazonaws.com/jaguar.png",
  },
  "e-3": { 
     // Top Right 
     image: "https://aipersonawebpage.s3.us-east-1.amazonaws.com/jaguar.png",
  },
  "e-4": { 
     // Top Right 
     image: "https://aipersonawebpage.s3.us-east-1.amazonaws.com/jaguar.png",
  },
  "e-5": { 
     // Top Right 
     image: "https://aipersonawebpage.s3.us-east-1.amazonaws.com/jaguar.png",
  },
  "e-6": { 
     // Top Right 
     image: "https://aipersonawebpage.s3.us-east-1.amazonaws.com/jaguar.png",
  },
  "e-7": { 
     // Top Right 
     image: "https://aipersonawebpage.s3.us-east-1.amazonaws.com/jaguar.png",
  },
  "e-8": { 
     // Top Right 
     image: "https://aipersonawebpage.s3.us-east-1.amazonaws.com/jaguar.png",
  },
  "e-9": { 
     // Top Right 
     image: "https://aipersonawebpage.s3.us-east-1.amazonaws.com/jaguar.png",
  },
  "e-10": { 
     // Top Right 
     image: "https://aipersonawebpage.s3.us-east-1.amazonaws.com/jaguar.png",
  },
  "e-11": { 
     // Top Right 
     image: "https://aipersonawebpage.s3.us-east-1.amazonaws.com/jaguar.png",
  },
  "e-12": { 
     // Top Right 
     image: "https://aipersonawebpage.s3.us-east-1.amazonaws.com/jaguar.png",
  },
  "e-13": { 
     // Top Right 
     image: "https://aipersonawebpage.s3.us-east-1.amazonaws.com/jaguar.png",
  },
  "e-14": { 
     // Top Right 
     image: "https://aipersonawebpage.s3.us-east-1.amazonaws.com/jaguar.png",
  },
  // Add more below using the ID Guide above
  // "m-0": { image: "...", link: "..." },
};
