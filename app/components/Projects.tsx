"use client";

import Image from "next/image";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const projects = [
  {
  title: "AI Resume Analyzer",
  image: "/projects/ai-resume-analyzer.png",
  tech: "Next.js • FastAPI • AI/ML",
  github: "https://github.com/khushboo9630/jarvis-ai-showcase",
  live: "https://jarvis-ai-showcase.vercel.app/",
 },
  {
    title: "Tour Planner",
    image: "/projects/Tourtravel.webp",
    tech: "React • Local Storage",
    github: "#",
    live: "#",
  },

];

export default function Projects() {
  return (
    <section
      id="projects"
      className="scroll-mt-24 py-28 px-6"
    >
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold">
            Featured{" "}
            <span className="bg-gradient-to-r from-[#16C8B2] to-white bg-clip-text text-transparent">
              Projects
            </span>
          </h2>

          <p className="text-gray-400 mt-4">
            Some of my recent work.
          </p>
        </div>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          navigation
          pagination={{ clickable: true }}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          spaceBetween={30}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1200: {
              slidesPerView: 3,
            },
          }}
        >
          {projects.map((project, index) => (
            <SwiperSlide key={index}>
              <div className="overflow-hidden rounded-3xl border border-[#16C8B2]/20 bg-[#002B54]/25 backdrop-blur-xl">

                <div className="relative h-56">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover hover:scale-110 transition duration-500"
                  />
                </div>

                <div className="p-6">
                  <h3 className="text-2xl font-semibold">
                    {project.title}
                  </h3>

                  <p className="text-[#16C8B2] mt-2">
                    {project.tech}
                  </p>

                  <div className="flex gap-4 mt-6">
                    <a
                      href={project.github}
                      target="_blank"
                      className="flex items-center gap-2 px-4 py-2 rounded-xl border border-white/20 hover:bg-white/10 transition"
                    >
                      <FaGithub />
                      Code
                    </a>

                    <a
                      href={project.live}
                      target="_blank"
                      className="flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-[#16C8B2] to-[#002B54]"
                    >
                      <FaExternalLinkAlt />
                      Live
                    </a>
                  </div>
                </div>

              </div>
            </SwiperSlide>
          ))}
        </Swiper>

      </div>
    </section>
  );
}