import { personalInfo, socialLinks } from "@/lib/data";
import { ArrowRight, ArrowDown } from "lucide-react";
import { socialIconMap } from "@/lib/icons";

export function Hero() {
  return (
    <section id="home" className="pt-24 pb-16 md:pt-16 md:pb-24 lg:pt-10">
      <div className="max-w-4xl lg:pt-10">
        {/* Editorial Eyebrow / Kicker */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-neutral-200 bg-neutral-50 text-xs font-mono text-neutral-600 mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-black"></span>
          <span>Product . Engineering . Building</span>
        </div>

        {/* High-impact Bold Headline modeled after Freshly Commerce */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-mono tracking-tight text-neutral-900 leading-[1.08] mb-8">
          I build digital products that solve real problems.
        </h1>

        {/* Subtitle / Intro */}
        <p className="text-xs lg:text-base text-neutral-600 leading-relaxed mb-8 md:mb-10 font-normal font-mono">
          {personalInfo.tagline}
        </p>

        {/* CTA Buttons */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-1">
            <a
              href={`mailto:${personalInfo.email}`}
              className="group inline-flex items-center justify-center gap-2.5 h-12 px-7 bg-neutral-900 text-white text-xs font-medium font-mono hover:bg-neutral-800 transition-all shadow-sm"
            >
              <span>Let&apos;s Talk</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#projects"
              className="group inline-flex items-center justify-center gap-2.5 h-12 px-7 border border-neutral-300 text-neutral-900 text-xs font-medium font-mono hover:bg-neutral-50 hover:border-neutral-900 transition-all"
            >
              <span>View Projects</span>
              <ArrowDown className="w-4 h-4 transition-transform group-hover:translate-y-0.5" />
            </a>
          </div>

          {/* Social Links Row */}
          <div className="flex items-center md:gap-5 justify-center md:justify-end">
            <span className="text-xs font-mono uppercase tracking-wider text-neutral-400">
              Connect:
            </span>
            <div className="flex items-center gap-1">

            {socialLinks.map((link) => {
              const Icon = socialIconMap[link.icon];
              return (
                <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-neutral-900 transition-colors border w-14 h-10 flex items-center justify-center bg-neutral-900 hover:bg-neutral-100"
                aria-label={link.name}
                >
                  {Icon && <Icon className="w-4 h-4" />}
                </a>
              );
            })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
