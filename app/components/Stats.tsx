"use client";

import { motion } from "framer-motion";

const stats = [
  {
    number: "5+",
    title: "Projects Completed",
  },
  {
    number: "5+",
    title: "Technologies",
  },
  {
    number: "3",
    title: "Internship",
  },
  {
    number: "100%",
    title: "Learning Mindset",
  },
];

export default function Stats() {
  return (
    <section className="relative z-20 -mt-12 px-6">
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="mx-auto max-w-7xl"
      >
        <div className="grid grid-cols-2 md:grid-cols-4 overflow-hidden rounded-3xl border border-[#16C8B2]/20 bg-[#002B54]/25 backdrop-blur-xl">

          {stats.map((item, index) => (
            <div
              key={index}
              className="relative flex flex-col items-center justify-center py-10"
            >
              {index !== stats.length - 1 && (
                <div className="absolute right-0 top-1/2 hidden h-16 w-px -translate-y-1/2 bg-white/10 md:block" />
              )}

              <h2 className="text-4xl font-bold bg-gradient-to-r from-[#16C8B2] to-white bg-clip-text text-transparent">
                {item.number}
              </h2>

              <p className="mt-2 text-sm text-gray-400">
                {item.title}
              </p>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}