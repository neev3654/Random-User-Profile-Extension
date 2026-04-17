"use client";

import { motion } from "framer-motion";
import { Download, Wrench, Settings, PlayCircle } from "lucide-react";

export const InstallSteps = () => {
  const steps = [
    {
      icon: <Download size={24} />,
      title: "Download ZIP",
      desc: "Download the codebase from the GitHub repository and extract it.",
    },
    {
      icon: <Settings size={24} />,
      title: "Open Extensions Page",
      desc: "Navigate to chrome://extensions in your Chrome-based browser.",
    },
    {
      icon: <Wrench size={24} />,
      title: "Enable Developer Mode",
      desc: "Toggle the 'Developer mode' switch located in the top right corner.",
    },
    {
      icon: <PlayCircle size={24} />,
      title: "Load Unpacked",
      desc: "Click 'Load unpacked' and select the unzipped extension directory.",
    },
  ];

  return (
    <section id="install" className="py-24 bg-slate-950 border-t border-slate-800">
      <div className="container mx-auto px-4 md:px-6 max-w-4xl">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">How to Install</h2>
          <p className="text-slate-400 text-lg">
            Ready to get started? Follow these simple steps to install the extension manually.
          </p>
        </div>

        <div className="relative">
          {/* Vertical line connecting steps */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-slate-800 hidden sm:block"></div>

          <div className="space-y-12">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`flex flex-col sm:flex-row gap-6 relative ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Step Content */}
                <div className="flex-1 sm:text-right md:w-1/2 p-6 bg-slate-900 border border-slate-800 rounded-2xl shadow-xl z-10 hover:border-blue-500/50 transition-colors group">
                   <div className={`md:hidden w-12 h-12 bg-slate-800 rounded-full flex items-center justify-center text-blue-400 mb-4 border border-slate-700 shadow-lg`}>
                    {step.icon}
                  </div>
                  <h3 className="text-xl font-bold text-slate-100 mb-2">
                    <span className="text-blue-500 mr-2 md:hidden">{index + 1}.</span>
                    {step.title}
                  </h3>
                  <p className="text-slate-400 leading-relaxed">{step.desc}</p>
                </div>

                {/* Center Circle */}
                <div className="absolute top-1/2 -mt-6 left-2 sm:left-auto md:left-1/2 md:-ml-6 w-12 h-12 bg-slate-900 rounded-full hidden sm:flex items-center justify-center text-blue-400 border-4 border-slate-950 shadow-lg z-20">
                  {step.icon}
                </div>

                {/* Empty Side for alternating layout */}
                <div className="flex-1 hidden md:block"></div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mt-20 text-center">
             <a
            href="https://github.com/neev3654/Random-User-Profile-Extension/archive/refs/heads/main.zip"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-semibold transition-colors shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:shadow-[0_0_30px_rgba(37,99,235,0.5)]"
          >
            Download Extension ZIP <Download size={20} />
          </a>
        </div>
      </div>
    </section>
  );
};
