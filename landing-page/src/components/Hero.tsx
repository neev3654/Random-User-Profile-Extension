"use client";

import { motion } from "framer-motion";
import { ArrowRight, Globe, Code } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden flex flex-col items-center justify-center text-center px-4">
      {/* Background gradients */}
      <div className="absolute top-0 inset-x-0 h-[500px] bg-gradient-to-b from-blue-900/20 to-transparent pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-600/20 blur-[120px] rounded-full pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl z-10"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-sm font-medium mb-8 border border-blue-500/20">
          <Globe size={16} />
          <span>Chrome Extension Manifest V3</span>
        </div>

        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 text-white">
          Generate <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Random Profiles</span> instantly.
        </h1>
        
        <p className="text-xl md:text-2xl text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed">
          The ultimate Random User Profile generator. Browse, filter, sort, and save dummy data directly from your browser toolbar.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#install"
            className="flex items-center gap-2 px-8 py-4 rounded-full bg-white text-slate-900 font-semibold hover:bg-slate-100 transition-colors w-full sm:w-auto justify-center"
          >
             Install Extension <ArrowRight size={20} />
          </a>
          <a
            href="https://github.com/neev3654/Random-User-Profile-Extension"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-8 py-4 rounded-full bg-slate-900 text-slate-300 font-semibold hover:text-white transition-colors w-full sm:w-auto justify-center"
          >
            <Code size={20} /> View Code
          </a>
        </div>
      </motion.div>
    </section>
  );
};
