"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  FaGraduationCap,
  FaLaptopCode,
  FaBrain,
  FaLightbulb,
} from "react-icons/fa";

export default function About() {
  return (
    <section
      id="about"
      className="relative py-28 px-6"
    >
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold">
            About{" "}
            <span className="bg-gradient-to-r from-[#16C8B2] to-white bg-clip-text text-transparent">
              Me
            </span>
          </h2>

          <p className="text-gray-400 mt-4">
            Get to know more about me and my journey.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Left Image */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex justify-center"
          >
            <div className="relative">
              <div className="absolute inset-0 rounded-3xl bg-[#16C8B2]/20 blur-3xl" />

              <div className="relative overflow-hidden rounded-3xl border border-[#16C8B2]/20 bg-black/10 backdrop-blur-2xl">
                <Image
                  src="/images/profile.jpg"
                  alt="Khushboo"
                  width={450}
                  height={550}
                  className="rounded-2xl object-cover"
                />
              </div>
            </div>
          </motion.div>

          {/* Right Content */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-4xl font-bold mb-6">
              Hi, I'm Khushboo 👋
            </h3>

            <p className="text-gray-300 leading-8">
              I am a BCA graduate passionate about
              Artificial Intelligence, Machine Learning,
              Full Stack Development, and modern web
              technologies.
            </p>

            <p className="text-gray-400 leading-8 mt-4">
              My goal is to build intelligent applications
              that solve real-world problems while creating
              beautiful and engaging user experiences.
            </p>

            {/* Highlights */}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-10">

  <div className="flex items-center gap-4 rounded-xl border border-[#16C8B2]/20 bg-[#002B54]/25 p-4 transition duration-300 hover:border-[#16C8B2]/50 hover:bg-[#002B54]/40">
    <FaGraduationCap size={28} color="#16C8B2" />
    <span className="text-gray-100">BCA Graduate</span>
  </div>

  <div className="flex items-center gap-4 rounded-xl border border-[#16C8B2]/20 bg-[#002B54]/25 p-4 transition duration-300 hover:border-[#16C8B2]/50 hover:bg-[#002B54]/40">
    <FaBrain size={28} color="#16C8B2" />
    <span className="text-gray-100">AI Enthusiast</span>
  </div>

  <div className="flex items-center gap-4 rounded-xl border border-[#16C8B2]/20 bg-[#002B54]/25 p-4 transition duration-300 hover:border-[#16C8B2]/50 hover:bg-[#002B54]/40">
    <FaLaptopCode size={28} color="#16C8B2" />
    <span className="text-gray-100">Full Stack Developer</span>
  </div>

  <div className="flex items-center gap-4 rounded-xl border border-[#16C8B2]/20 bg-[#002B54]/25 p-4 transition duration-300 hover:border-[#16C8B2]/50 hover:bg-[#002B54]/40">
    <FaLightbulb size={28} color="#16C8B2" />
    <span className="text-gray-100">Problem Solver</span>
  </div>

</div>

            {/* Button */}

           <a
  href="/resume/Khushboo_resume.pdf.pdf"
  download="KhushbooUpadhyay_resume.pdf.pdf"
  className="inline-block mt-10 rounded-xl bg-[#16C8B2] px-8 py-4 font-semibold text-[#2E2E2E] transition duration-300 hover:scale-105 hover:bg-[#1dd8c0] hover:shadow-[0_0_25px_rgba(22,200,178,0.4)]"
>
  Download Resume
</a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}