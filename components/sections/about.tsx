import Image from "next/image";
import { personalInfo } from "@/lib/data";
import { ArrowRight, ArrowUpRight } from "lucide-react";

export function About() {
  return (
    <section id="about" className="py-20 md:py-28 border-t border-neutral-200">
      <div className="max-w-4xl">
        {/* Racheal James style trust banner */}
        {/* <div className="flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-neutral-500 mb-3">
          <span className="w-1.5 h-1.5 rounded-full bg-neutral-900"></span>
          <span>Trusted by 30+ global teams &amp; startups</span>
        </div> */}

        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-neutral-900 leading-tight mb-8">
          Web, app &amp; engineering architecture for funded startups &amp; companies.
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start mb-12">
          {/* Bio Text */}
          <div className="lg:col-span-7 space-y-5 text-neutral-600 leading-relaxed text-base">
            <p className="text-lg text-neutral-900 font-medium leading-relaxed">
              Hi, I&apos;m William — a Software Engineer with 3+ years of experience crafting full-stack applications. Currently building high-performance web products, scalable APIs, and intuitive user experiences.
            </p>
            <p>
              I specialize in React, Next.js, TypeScript, and Node.js. My work centers on delivering scalable, high-performing software that drives measurable business outcomes and real user impact.
            </p>
            <p>
              Whether partnering with seed-stage startups to launch MVPs or modernizing architecture for established companies, I prioritize clean code, test coverage, and bulletproof reliability.
            </p>

            {/* CTA action buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <a
                href={`mailto:${personalInfo.email}`}
                className="group inline-flex items-center gap-2 h-11 px-5 rounded-lg bg-neutral-900 text-white text-sm font-medium hover:bg-neutral-800 transition-colors"
              >
                <span>Let&apos;s Talk</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="#projects"
                className="group inline-flex items-center gap-2 h-11 px-5 rounded-lg border border-neutral-300 text-neutral-900 text-sm font-medium hover:bg-neutral-50 transition-colors"
              >
                <span>View Portfolio</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>
          </div>

          {/* Profile Photo Placeholder */}
          <div className="lg:col-span-5">
            <div className="relative aspect-square w-full max-w-sm rounded-2xl overflow-hidden border border-neutral-200 bg-neutral-100 shadow-sm group">
              <Image
                src={personalInfo.profileImage}
                alt={personalInfo.name}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 360px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent flex items-end p-5">
                <span className="text-xs font-mono text-white/90">
                  {personalInfo.name} • {personalInfo.role}
                </span>
              </div>
            </div>
            <p className="text-[11px] text-neutral-400 font-mono mt-2 text-center">
              Replace photo at <code className="text-neutral-600">public/profile.jpg</code> (400×400px)
            </p>
          </div>
        </div>

        {/* Impact Numbers */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 pt-8 border-t border-neutral-200">
          <div>
            <div className="text-3xl font-extrabold text-neutral-900 tracking-tight">3+</div>
            <div className="text-xs font-mono uppercase tracking-wider text-neutral-500 mt-1">
              Years of Experience
            </div>
          </div>
          <div>
            <div className="text-3xl font-extrabold text-neutral-900 tracking-tight">20+</div>
            <div className="text-xs font-mono uppercase tracking-wider text-neutral-500 mt-1">
              Projects Completed
            </div>
          </div>
          <div>
            <div className="text-3xl font-extrabold text-neutral-900 tracking-tight">99.9%</div>
            <div className="text-xs font-mono uppercase tracking-wider text-neutral-500 mt-1">
              Uptime &amp; Delivery
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
