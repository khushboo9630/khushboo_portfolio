"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FaReact, FaPython, FaGithub, FaLinkedin } from "react-icons/fa";
import { SiMysql, SiTensorflow } from "react-icons/si";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden">
     {/* Hero Glow */}
<div className="absolute inset-0 overflow-hidden pointer-events-none">

  <div className="absolute top-1/2 left-1/2 h-[800px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#16C8B2]/15 blur-[220px]" />

  <div className="absolute -left-24 top-0 h-[450px] w-[450px] rounded-full bg-[#16C8B2]/10 blur-[180px] animate-pulse" />

  <div className="absolute -right-24 bottom-0 h-[450px] w-[450px] rounded-full bg-[#002B54]/20 blur-[180px] animate-pulse" />

</div>

      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-between gap-16 px-6 pt-28 lg:flex-row">
        
        {/* Left Side */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1"
        >
          <span className="rounded-full border border-[rgb(22,200,178)] px-4 py-2 text-sm text-violet-300">
            AI & FULL STACK DEVELOPER
          </span>

          <h1 className="mt-6 text-5xl font-bold leading-tight text-white md:text-7xl">
            Hello, I'm
            <br />
           <span className="bg-gradient-to-r from-[#16C8B2] via-[#5FD9CC] to-white bg-clip-text text-transparent">
  Khushboo
</span>
<br />
<span className="bg-gradient-to-r from-[#16C8B2] via-[#5FD9CC] to-white bg-clip-text text-transparent">
  Upadhyay
</span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-gray-300">
            AI & Machine Learning Enthusiast | Full Stack Developer |
            SEO Strategist | Prompt Engineer
          </p>

          <p className="mt-4 max-w-xl text-gray-400">
            Building intelligent web applications, modern user experiences,
            and AI-powered solutions that solve real-world problems.
          </p>

          {/* Buttons */}
          <div className="mt-10 flex flex-wrap gap-4">

  {/* View Projects */}

  <a
    href="#projects"
    className="rounded-xl bg-[#16C8B2] px-8 py-4 font-semibold text-[#2E2E2E] transition duration-300 hover:scale-105 hover:bg-[#1dd8c0] hover:shadow-[0_0_25px_rgba(22,200,178,0.35)]"
  >
    View Projects
  </a>

  {/* Download Resume */}

  <a
    href="/resume/Khushboo_resume.pdf.pdf"
    download="Khushboo_resume.pdf.pdf"
    className="rounded-xl border border-[#16C8B2] px-8 py-4 font-semibold text-white transition duration-300 hover:scale-105 hover:bg-[#16C8B2]/10 hover:shadow-[0_0_25px_rgba(22,200,178,0.25)]"
  >
    Download Resume
  </a>

</div>

          {/* Social Icons */}
          <div className="mt-8 flex gap-5">
            <a
              href="#"
              className="rounded-full border border-white/20 p-3 text-xl transition hover:border-[#16C8B2] hover:text-[#16C8B2]"
            >
              <FaGithub />
            </a>

            <a
              href="#"
              className="rounded-full border border-white/20 p-3 text-xl transition hover:border-[#16C8B2] hover:text-[#16C8B2]"
            >
              <FaLinkedin />
            </a>
          </div>
        </motion.div>

        {/* Right Side */}
        <motion.div
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="flex flex-1 justify-center"
        >
          <div className="relative">
            {/* Glow */}
  <div className="absolute inset-0 rounded-full bg-[#16C8B2]/20 blur-[100px] animate-pulse"></div>
  
            {/* Outer Ring */}
            <div className="absolute inset-0 rounded-full border-4 border-[#16C8B2]/40" />

            {/* Profile Wrapper */}
            <div className="relative h-[320px] w-[320px] overflow-hidden rounded-full border-4 border-[#16C8B2] md:h-[450px] md:w-[450px]">
              <Image
                src="/images/profile.jpg"
                alt="Khushboo"
                fill
                priority
                className="object-cover"
              />
            </div>

            {/* Floating Icons */}

            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ repeat: Infinity, duration: 3 }}
              className="absolute left-5 top-8 rounded-2xl bg-[#0f172a] p-4 shadow-lg"
            >
              <FaReact size={32} />
            </motion.div>

            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ repeat: Infinity, duration: 4 }}
              className="absolute right-0 top-20 rounded-2xl bg-[#0f172a] p-4 shadow-lg"
            >
              <FaPython size={32} />
            </motion.div>

            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ repeat: Infinity, duration: 3.5 }}
              className="absolute bottom-12 left-0 rounded-2xl bg-[#0f172a] p-4 shadow-lg"
            >
              <SiTensorflow size={32} />
            </motion.div>

            <motion.div
              animate={{ y: [0, -18, 0] }}
              transition={{ repeat: Infinity, duration: 4.5 }}
              className="absolute bottom-6 right-8 rounded-2xl bg-[#0f172a] p-4 shadow-lg"
            >
              <SiMysql size={32} />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}