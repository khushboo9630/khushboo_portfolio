"use client";

import {
  FaCode,
  FaLock,
  FaPython,
  FaJs,
  FaReact,
  FaPhp,
  FaGitAlt,
  FaDatabase,
  FaRobot,
  FaSearch,
} from "react-icons/fa";

const skills = [
  // Current Skills

  {
    title: "Python Programming",
    icon: <FaPython size={18} />,
    locked: false,
  },
  {
    title: "JavaScript",
    icon: <FaJs size={18} />,
    locked: false,
  },
  {
    title: "React.js",
    icon: <FaReact size={18} />,
    locked: false,
  },
  {
    title: "Next.js",
    icon: <FaReact size={18} />,
    locked: false,
  },
  {
    title: "HTML & CSS",
    icon: <FaCode size={18} />,
    locked: false,
  },
  {
    title: "Tailwind CSS",
    icon: <FaCode size={18} />,
    locked: false,
  },
  {
    title: "Bootstrap",
    icon: <FaCode size={18} />,
    locked: false,
  },
  {
    title: "PHP Development",
    icon: <FaPhp size={18} />,
    locked: false,
  },
  {
    title: "REST API",
    icon: <FaCode size={18} />,
    locked: false,
  },
  {
    title: "MySQL & SQL",
    icon: <FaDatabase size={18} />,
    locked: false,
  },
  {
    title: "Git & GitHub",
    icon: <FaGitAlt size={18} />,
    locked: false,
  },
  {
    title: "VS Code & Jupyter",
    icon: <FaCode size={18} />,
    locked: false,
  },
  {
    title: "Authentication",
    icon: <FaCode size={18} />,
    locked: false,
  },
  {
    title: "API Integration",
    icon: <FaCode size={18} />,
    locked: false,
  },
  {
    title: "DSA",
    icon: <FaCode size={18} />,
    locked: false,
  },
  {
    title: "SEO Basics",
    icon: <FaSearch size={18} />,
    locked: false,
  },
  {
    title: "Prompt Engineering",
    icon: <FaRobot size={18} />,
    locked: false,
  },
  {
    title: "Basic ML Concepts",
    icon: <FaRobot size={18} />,
    locked: false,
  },

  // Future Learning

  {
    title: "Large Language Models",
    icon: <FaRobot size={18} />,
    locked: true,
  },
  {
    title: "AI Agents",
    icon: <FaRobot size={18} />,
    locked: true,
  },
  {
    title: "RAG Systems",
    icon: <FaRobot size={18} />,
    locked: true,
  },
  {
    title: "LangChain",
    icon: <FaRobot size={18} />,
    locked: true,
  },
  {
    title: "Vector Databases",
    icon: <FaDatabase size={18} />,
    locked: true,
  },
  {
    title: "MLOps",
    icon: <FaRobot size={18} />,
    locked: true,
  },
  {
    title: "Deep Learning",
    icon: <FaRobot size={18} />,
    locked: true,
  },
  {
    title: "Computer Vision",
    icon: <FaRobot size={18} />,
    locked: true,
  },
  {
    title: "Generative AI",
    icon: <FaRobot size={18} />,
    locked: true,
  },
  {
    title: "Cloud Deployment",
    icon: <FaCode size={18} />,
    locked: true,
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="scroll-mt-24 py-28 px-6"
    >
      <div className="max-w-7xl mx-auto">

        {/* Heading */}

        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold">
            My{" "}
            <span className="bg-gradient-to-r from-[#16C8B2] via-[#7FE7D9] to-white bg-clip-text text-transparent">
              Skills
            </span>
          </h2>

          <p className="text-gray-300 mt-4">
            Technologies I work with and what I'm currently learning.
          </p>
        </div>

        {/* Skills Grid */}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">

          {skills.map((skill, index) => (
            <div
              key={index}
              className={`relative overflow-hidden flex items-center gap-3 rounded-xl border p-5 transition-all duration-300

              ${
                skill.locked
                  ? "bg-[#002B54]/15 border-[#16C8B2]/10 opacity-80"
                  : "bg-[#002B54]/25 border-[#16C8B2]/20 hover:border-[#16C8B2]/50 hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(22,200,178,0.15)]"
              }`}
            >
              {skill.icon && (
                <span className="text-[#16C8B2]">
                  {skill.icon}
                </span>
              )}

              <span className="text-sm md:text-base text-gray-100">
                {skill.title}
              </span>

              {/* Lock Overlay */}

              {skill.locked && (
                <div className="absolute inset-0 flex items-center justify-center rounded-xl bg-black/25 backdrop-blur-[1px]">
                  <div className="rounded-full bg-[#2E2E2E]/90 p-2 border border-[#16C8B2]/40">
                    <div className="text-[#16C8B2]">
  <FaLock size={18} />
</div>
                  </div>
                </div>
              )}
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}