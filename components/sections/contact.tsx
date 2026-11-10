import { socialLinks, personalInfo } from "@/lib/data";
import { Mail } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-14">
      <div className="max-w-4xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
          {/* Left - Message & Kicker */}
          <div className="lg:col-span-5">
            <p className="text-xs font-mono tracking-widest text-neutral-400 mb-3">
              Get In Touch
            </p>
            <h2 className="text-3xl md:text-4xl font-bold font-mono tracking-tight text-neutral-900 leading-tight mb-4">
              Let&apos;s build something exceptional together.
            </h2>
            <p className="text-neutral-600 leading-relaxed mb-6 text-sm font-mono">
              I&apos;m currently available for full-time engineering roles, high-impact contract projects, or architectural consulting.
            </p>
            <a
              href={`mailto:${personalInfo.email}`}
              className="inline-block text-sm font-semibold font-mono text-neutral-900 hover:underline"
            >
              {personalInfo.email}
            </a>
          </div>

          {/* Right - Social Link Rows with animated arrow */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div className="divide-y divide-neutral-200 border-y border-neutral-200">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between py-4 text-neutral-700 hover:text-black transition-colors"
                >
                  <span className="text-sm font-medium font-mono">{link.name}</span>
                  {/* Animated arrow turning straight */}
                  <svg
                    className="w-4 h-4 transition-transform duration-300 ease-out transform -rotate-45 group-hover:rotate-0 text-neutral-400 group-hover:text-black group-hover:translate-x-0.5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </a>
              ))}
            </div>

            {/* Email CTA Button Row */}
            <a
              href={`mailto:${personalInfo.email}`}
              className="group flex items-center justify-between mt-6 py-4 px-6 bg-neutral-900 text-white hover:bg-neutral-800 transition-all shadow-sm rounded-none"
            >
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4" />
                <span className="text-sm font-medium font-mono">Send an email directly</span>
              </div>
              <svg
                className="w-4 h-4 transition-transform duration-300 ease-out transform -rotate-45 group-hover:rotate-0 text-white/80 group-hover:text-white group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
