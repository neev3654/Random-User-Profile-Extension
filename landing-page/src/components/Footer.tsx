"use client";

import { Code } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-slate-950 py-12 border-t border-slate-900 border-opacity-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          
          <div className="flex flex-col items-center md:items-start">
            <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500 mb-2">
              Random User Profile
            </span>
            <p className="text-slate-500 text-sm text-center md:text-left max-w-sm">
              The simplest way to generate, view, and organize dummy user data right from your browser context entirely locally.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-6">
            <a
              href="https://github.com/neev3654/Random-User-Profile-Extension"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 text-slate-400 hover:text-white transition-colors"
            >
              <Code size={20} className="group-hover:scale-110 transition-transform" />
              <span className="text-sm font-medium">Source Code</span>
            </a>
            
             <a
              href="#"
              className="text-slate-400 hover:text-white text-sm font-medium transition-colors"
            >
              Back to Top
            </a>
          </div>

        </div>
        
        <div className="mt-12 pt-8 border-t border-slate-900 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-sm">
            &copy; {new Date().getFullYear()} Random User Profile Extension. All rights reserved.
          </p>
          <p className="text-slate-600 text-sm">
            Designed for Developers.
          </p>
        </div>
      </div>
    </footer>
  );
};
