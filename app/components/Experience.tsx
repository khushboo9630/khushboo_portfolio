"use client";

import { motion } from "framer-motion";

const timeline = [{ year: "2024", title: "Web Developer Intern", company: "Cubix Infotech", description: "Developed responsive web applications using HTML, CSS, JavaScript, and PHP. Assisted in backend integration, MySQL database management, and improved website responsiveness and UI performance.", }, { year: "2025", title: "Python Intern", company: "Noxalgo", description: "Built dynamic frontend components, implemented API integration, optimized frontend performance, and collaborated on Python-based development and debugging tasks.", }, { year: "2025", title: "BCA Graduate", company: "Bachelor of Computer Applications", description: "Graduated with a strong foundation in programming, software engineering, databases, and modern web technologies.", }, { year: "2026", title: "MCA (Pursuing)", company: "Master of Computer Applications", description: "Currently pursuing MCA with specialization towards Artificial Intelligence, Machine Learning, and advanced software development.", }, { year: "2026", title: "Post LLM Intern", company: "Ethara.AI • Remote", description: "Evaluated and analyzed LLM-generated text and image responses for instruction following, accuracy, and quality assurance. Performed prompt analysis and comparative response evaluation to improve Generative AI output quality.", }, { year: "Future", title: "AI & Machine Learning Engineer", company: "Career Vision", description: "Expanding expertise in Large Language Models (LLMs), AI Agents, RAG Systems, Deep Learning, and MLOps to build next-generation intelligent applications.", },]

export default function Experience() {
    return (
        <section
            id="experience"
            className="py-28 px-6"
        >
            <div className="max-w-6xl mx-auto">

                <div className="text-center mb-20">
                    <h2 className="text-5xl font-bold">
                        My{" "}
                        <span className="bg-gradient-to-r from-[#16C8B2] to-white bg-clip-text text-transparent">
                            Journey
                        </span>
                    </h2>

                    <p className="mt-4 text-gray-400">
                        Education, experience and future goals.
                    </p>
                </div>

                <div className="relative">

                    <div className="absolute left-4 md:left-1/2 top-0 h-full w-[2px] bg-gradient-to-b from-violet-500 to-cyan-400" />

                    {timeline.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 80 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7 }}
                            className={`relative mb-16 flex ${index % 2 === 0
                                    ? "md:justify-start"
                                    : "md:justify-end"
                                }`}
                        >
                            <div className="absolute left-0 md:left-1/2 top-6 h-8 w-8 -translate-x-1/2 rounded-full border-4 border-[#16C8B2]" />

                            <div className="ml-12 md:ml-0 w-full md:w-[45%] rounded-3xl border border-[#16C8B2]/20 bg-[#002B54]/25 backdrop-blur-xl p-6">
                                <span className="text-cyan-400 font-semibold">
                                    {item.year}
                                </span>

                                <h3 className="text-2xl font-bold mt-2">
                                    {item.title}
                                </h3>

                                <p className="text-[#16C8B2] mt-2">
                                    {item.company}
                                </p>

                                <p className="text-gray-400 mt-4 leading-7">
                                    {item.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
}