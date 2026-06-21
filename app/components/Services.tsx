"use client";

import { motion } from "framer-motion";
import {
  FaRobot,
  FaCode,
  FaSearch,
  FaPalette,
} from "react-icons/fa";

const services = [
  {
    icon: <FaRobot size={40} />,
    title: "AI Development",
    desc: "Machine Learning models, data analysis, and intelligent solutions.",
  },
  {
    icon: <FaCode size={40} />,
    title: "Web Development",
    desc: "Modern React, Next.js and full-stack web applications.",
  },
  {
    icon: <FaSearch size={40} />,
    title: "SEO Optimization",
    desc: "Technical SEO, performance optimization and visibility growth.",
  },
  {
    icon: <FaPalette size={40} />,
    title: "UI / UX Design",
    desc: "Clean, modern and user-focused interface design.",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-28 px-6">
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold">
            My{" "}
            <span className="bg-gradient-to-r from-[#16C8B2] to-white bg-clip-text text-transparent">
              Services
            </span>
          </h2>

          <p className="mt-4 text-gray-400">
            What I can offer to clients and businesses.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              whileHover={{
                y: -10,
                scale: 1.03,
              }}
              className="rounded-3xl border border-[#16C8B2]/20 bg-[#002B54]/25 backdrop-blur-xl text-center"
            >
              <div className="flex justify-center text-[#16C8B2] mb-6">
                {service.icon}
              </div>

              <h3 className="text-xl font-semibold mb-4">
                {service.title}
              </h3>

              <p className="text-gray-400 text-sm leading-7">
                {service.desc}
              </p>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}