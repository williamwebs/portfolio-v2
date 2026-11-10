import Link from "next/link";
import { personalInfo, navLinks, socialLinks } from "@/lib/data";
import { Logo } from "@/components/logo";
import { socialIconMap } from "@/lib/icons";

export function Sidebar() {
  return (
    <aside className="hidden md:flex md:w-64 lg:w-72 xl:w-80 fixed left-0 top-0 bottom-0 h-screen bg-white flex-col justify-between p-8 lg:p-10 z-40 select-none overflow-y-auto">
      {/* Top: Brand Logo & Title */}
      <div>
        <Link href="#home" className="inline-flex items-center gap-3.5 group">
          <Logo className="w-10 h-10 group-hover:scale-105 transition-transform duration-200" />
          <div>
            <span className="block text-base font-bold font-mono tracking-tight text-neutral-900 leading-snug">
              {personalInfo.name}
            </span>
            <span className="block text-[8px] font-mono text-neutral-500 uppercase tracking-wider">
              {personalInfo.role}
            </span>
          </div>
        </Link>

        {/* Live Availability Status */}
        <div className="w-fit mt-2 py-1 px-3 flex items-center gap-2.5 text-[10px] text-neutral-500 font-mono rounded-full border">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-neutral-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-neutral-900"></span>
          </span>
          <span>Available for work</span>
        </div>
      </div>

      {/* Middle: Navigation Links with Animated Arrows */}
      <nav className="my-8">
        <p className="text-[11px] font-mono tracking-widest uppercase text-neutral-400 mb-4">
          Navigation
        </p>
        <ul className="space-y-0">
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="group flex items-center justify-between py-2 text-[14px] font-medium font-mono text-neutral-600 hover:text-black transition-colors"
              >
                <span className="transition-transform duration-200 group-hover:translate-x-1">
                  {item.label}
                </span>

                {/* Arrow that starts angled ↗ and turns straight horizontal → on hover */}
                <svg
                  className="w-3 h-3 transition-transform duration-300 ease-out transform -rotate-45 group-hover:rotate-0 text-neutral-400 group-hover:text-black group-hover:translate-x-0.5"
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
            </li>
          ))}
        </ul>
      </nav>

      {/* Bottom: Socials, Quick Info, Copyright */}
      <div className="">
        <div className="flex items-center gap-1 mb-4">
          {socialLinks.map((link) => {
            const Icon = socialIconMap[link.icon];
            return (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-400 hover:text-black transition-colors w-8 h-8 flex items-center justify-center border"
                aria-label={link.name}
              >
                {Icon && <Icon className="w-3 h-3" />}
              </a>
            );
          })}
        </div>

        <p className="text-[11px] text-neutral-400 mt-1 font-mono">
          © 2026 .xyz
        </p>
      </div>
    </aside>
  );
}
