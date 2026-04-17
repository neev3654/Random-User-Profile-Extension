"use client";

import { motion } from "framer-motion";

export const Screenshots = () => {
  const screenshots = [
    { title: "Main Dashboard", desc: "View random users instantly." },
    { title: "Filtering & Sorting", desc: "Quickly drill down to specifics." },
    { title: "Favorites Tab", desc: "Keep track of profiles you like." },
    { title: "Detailed Modals", desc: "Access deep contact data." },
  ];

  return (
    <section id="screenshots" className="py-24 bg-slate-900 border-t border-slate-800">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Beautiful Interface</h2>
          <p className="text-slate-400 text-lg">
            A premium glassmorphic UI built to be fast, responsive, and visually stunning.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {screenshots.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative rounded-2xl overflow-hidden bg-slate-800 aspect-[4/3] border border-slate-700/50"
            >
              {/* Placeholder for screenshot image */}
              <div className="absolute inset-0 bg-gradient-to-br from-slate-800 to-slate-900 flex flex-col items-center justify-center p-8 text-center transition-transform duration-500 group-hover:scale-105">
                <div className="w-20 h-20 mb-4 rounded-xl bg-slate-700/50 border border-slate-600 flex items-center justify-center opacity-50">
                  <div className="w-10 h-10 border-2 border-slate-500 rounded border-dashed"></div>
                </div>
                <h3 className="text-xl font-semibold text-slate-300">{item.title}</h3>
                <p className="text-sm text-slate-500 mt-2">{item.desc}</p>
                <div className="absolute inset-0 bg-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
