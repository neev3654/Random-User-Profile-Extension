"use client";

import { motion } from "framer-motion";
import { Users, Filter, ArrowDownUp, Heart, Search, HardDrive } from "lucide-react";

export const Features = () => {
  const features = [
    {
      title: "Random Synthetic Data",
      description: "Generates 20 complete, realistic user profiles instantly utilizing the Random User Generator API.",
      icon: <Users className="text-blue-400" size={28} />,
    },
    {
      title: "Advanced Filtering",
      description: "Quickly filter profiles by gender or dynamically populated nationalities.",
      icon: <Filter className="text-purple-400" size={28} />,
    },
    {
      title: "Sort Functionality",
      description: "Organize the generated user cards by Name, Age, or Country with a single click.",
      icon: <ArrowDownUp className="text-pink-400" size={28} />,
    },
    {
      title: "Favorite Profiles",
      description: "Found an interesting profile? Save it to your favorites tab for later use.",
      icon: <Heart className="text-red-400" size={28} />,
    },
    {
      title: "Real-time Search",
      description: "Search specific users by their full name locally instantly across the loaded profiles.",
      icon: <Search className="text-emerald-400" size={28} />,
    },
    {
      title: "Local Storage Backup",
      description: "Favorites are persisted out-of-the-box leveraging your browser's local storage capabilities.",
      icon: <HardDrive className="text-orange-400" size={28} />,
    },
  ];

  return (
    <section id="features" className="py-24 bg-slate-900 border-t border-slate-800">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Powerful Features</h2>
          <p className="text-slate-400 text-lg">
            Everything you need for testing, mockup data, and design placeholding built directly into a sleek extension.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-slate-800/50 border border-slate-700/50 p-8 rounded-2xl hover:bg-slate-800 transition-colors"
            >
              <div className="w-14 h-14 rounded-xl bg-slate-900 flex items-center justify-center mb-6 shadow-inner border border-slate-700">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-slate-100">{feature.title}</h3>
              <p className="text-slate-400 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
