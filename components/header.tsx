"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { navLinks, personalInfo, socialLinks } from "@/lib/data";
import { Logo } from "@/components/logo";
import { socialIconMap } from "@/lib/icons";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="md:hidden fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-neutral-200">
      <div className="px-6 h-16 flex items-center justify-between">
        {/* Mobile Logo & Name */}
        <Link
          href="#home"
          className="flex items-center gap-2.5"
          onClick={() => setMobileMenuOpen(false)}
        >
          <Logo className="w-8 h-8" />
          <span className="text-base font-normal font-mono tracking-tight text-neutral-900">
            {personalInfo.name}
          </span>
        </Link>

        {/* Mobile Menu Toggle Button */}
        <button
          className="p-2 text-neutral-900 hover:bg-neutral-100 rounded-lg transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {/* Mobile Slide-down Menu */}
      {mobileMenuOpen && (
        <div className="bg-white border-b border-neutral-200 px-6 py-6 shadow-xl transition-all">
          <nav className="space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="group flex items-center justify-between py-3 text-xs md:text-sm font-medium font-mono text-neutral-700 hover:text-black border-b border-neutral-100"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span>{link.label}</span>
                {/* Arrow animation */}
                <svg
                  className="w-4 h-4 transition-transform duration-300 ease-out transform -rotate-45 group-hover:rotate-0 text-neutral-400 group-hover:text-black"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </a>
            ))}
          </nav>

          {/* Direct CTA */}
          <div className="mt-6 pt-4 border-t border-neutral-100 flex flex-col gap-4">
            <a
              href={`mailto:${personalInfo.email}`}
              className="inline-flex h-11 items-center justify-center bg-neutral-900 px-5 text-sm font-medium font-mono text-white hover:bg-neutral-800 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Get in touch →
            </a>

            {/* Social icons */}
            <div className="flex items-center justify-center gap-1 pt-2">
              {socialLinks.map((link) => {
                const Icon = socialIconMap[link.icon];
                return (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-neutral-500 hover:text-black transition-colors border w-10 h-10 flex items-center justify-center"
                    aria-label={link.name}
                  >
                    {Icon && <Icon className="w-3 h-3" />}
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
