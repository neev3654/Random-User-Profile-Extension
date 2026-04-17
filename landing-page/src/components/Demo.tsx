"use client";

import { motion } from "framer-motion";
import { Play } from "lucide-react";

export const Demo = () => {
  return (
    <section id="demo" className="py-24 bg-slate-950">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">See it in action</h2>
          <p className="text-slate-400 text-lg">
            Watch a quick demonstration of generating, filtering, and favoriting random user profiles in real-time.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-5xl mx-auto"
        >
          <div className="relative aspect-video rounded-2xl overflow-hidden bg-slate-900 border border-slate-800 shadow-2xl group flex items-center justify-center cursor-pointer">
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/20 to-purple-900/20 mix-blend-overlay"></div>
            
            {/* Placeholder Play Button */}
            <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center pl-1 shadow-lg shadow-blue-600/30 group-hover:scale-110 transition-transform z-10">
              <Play className="text-white" size={32} fill="currentColor" />
            </div>

            {/* Simulated UI background */}
            <div className="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900 via-slate-900 to-slate-900"></div>
            
            {/* If you wanted to put a real video here: */}
            {/* <iframe 
              className="absolute inset-0 w-full h-full"
              src="YOUR_DEMO_VIDEO_LINK_HERE" 
              title="Extension Demo" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen>
            </iframe> */}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
