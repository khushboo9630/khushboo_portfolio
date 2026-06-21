"use client";

import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="scroll-mt-24 py-28 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="uppercase tracking-[6px] text-[#16C8B2] text-sm">
            Contact
          </p>

          <h2 className="text-5xl font-bold mt-2">
            Get{" "}
            <span className="bg-gradient-to-r from-[#16C8B2] via-[#7FE7D9] to-white bg-clip-text text-transparent">
              In Touch
            </span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-8">
          <div className="rounded-3xl border border-[#16C8B2]/20 bg-[#002B54]/20 backdrop-blur-xl p-8">
            <h3 className="text-2xl font-bold mb-6">
              HOW CAN WE HELP YOU?
            </h3>

            <p className="text-gray-300 leading-8">
              I'm always excited to discuss AI, Machine Learning,
              Full Stack Development, internships, freelance work,
              and innovative projects. Feel free to reach out!
            </p>

            <div className="mt-8 space-y-5">
              <a
                href="mailto:upadhyaykhushboo63@gmail.com"
                className="flex items-center gap-4 transition duration-300 hover:text-[#16C8B2]"
              >
                <FaEnvelope size={24} />
                <span>upadhyaykhushboo63@gmail.com</span>
              </a>

              <a
                href="https://github.com/khushboo9630"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 transition duration-300 hover:text-[#16C8B2]"
              >
                <FaGithub size={24} />
                <span>github.com/khushboo9630</span>
              </a>

              <a
                href="https://www.linkedin.com/in/khushbooupadhyay96"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 transition duration-300 hover:text-[#16C8B2]"
              >
                <FaLinkedin size={24} />
                <span>linkedin.com/in/khushbooupadhyay96</span>
              </a>
            </div>

            <div className="mt-10">
              <h4 className="font-semibold mb-4">Social Media</h4>

              <div className="flex gap-4">
                <a
                  href="https://github.com/khushboo9630"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-11 w-11 rounded-lg bg-[#002B54]/50 border border-[#16C8B2]/20 flex items-center justify-center transition duration-300 hover:bg-[#16C8B2] hover:text-black"
                >
                  <FaGithub size={20} />
                </a>

                <a
                  href="https://www.linkedin.com/in/khushbooupadhyay96"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-11 w-11 rounded-lg bg-[#002B54]/50 border border-[#16C8B2]/20 flex items-center justify-center transition duration-300 hover:bg-[#16C8B2] hover:text-black"
                >
                  <FaLinkedin size={20} />
                </a>

                <a
                  href="mailto:upadhyaykhushboo63@gmail.com"
                  className="h-11 w-11 rounded-lg bg-[#002B54]/50 border border-[#16C8B2]/20 flex items-center justify-center transition duration-300 hover:bg-[#16C8B2] hover:text-black"
                >
                  <FaEnvelope size={20} />
                </a>
              </div>
            </div>
          </div>

          <form
            action="https://api.web3forms.com/submit"
            method="POST"
            className="rounded-3xl border border-[#16C8B2]/20 bg-[#002B54]/20 backdrop-blur-xl p-8"
          >
            <input
              type="hidden"
              name="access_key"
              value="40aa4878-547c-4e8c-be64-ba2c15604b67"
            />

            <input
              type="hidden"
              name="subject"
              value="New Portfolio Contact Message 🚀"
            />

            <input
              type="hidden"
              name="from_name"
              value="Khushboo Portfolio"
            />

            <div className="grid md:grid-cols-2 gap-5 mb-5">
              <input
                type="text"
                name="First Name"
                required
                placeholder="First Name"
                className="rounded-lg border border-[#16C8B2]/20 bg-black/20 p-4 outline-none focus:border-[#16C8B2]"
              />

              <input
                type="text"
                name="Last Name"
                required
                placeholder="Last Name"
                className="rounded-lg border border-[#16C8B2]/20 bg-black/20 p-4 outline-none focus:border-[#16C8B2]"
              />
            </div>

            <input
              type="email"
              name="Email"
              required
              placeholder="Email Address"
              className="w-full mb-5 rounded-lg border border-[#16C8B2]/20 bg-black/20 p-4 outline-none focus:border-[#16C8B2]"
            />

            <textarea
              rows={6}
              name="Message"
              required
              placeholder="Comments / Questions"
              className="w-full mb-6 rounded-lg border border-[#16C8B2]/20 bg-black/20 p-4 outline-none resize-none focus:border-[#16C8B2]"
            />

            <button
              type="submit"
              className="rounded-lg border border-[#16C8B2] bg-gradient-to-r from-[#16C8B2] to-[#002B54] px-10 py-4 font-semibold text-white transition duration-300 hover:scale-105 hover:shadow-[0_0_25px_rgba(22,200,178,0.3)]"
            >
              SEND MESSAGE
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}