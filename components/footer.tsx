import { personalInfo, socialLinks } from "@/lib/data";
import { socialIconMap } from "@/lib/icons";

export function Footer() {
  return (
    <footer className="border-t border-neutral-200 bg-white py-12">
      <div className="max-w-4xl flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-xs font-mono text-neutral-500">
          © 2026 {personalInfo.name}
        </p>
        {/* <p className="text-xs font-mono text-neutral-500">
          © 2026 {personalInfo.name} • Designed &amp; Engineered with Next.js &amp; Tailwind CSS
        </p> */}

        <div className="flex items-center gap-1">
          {socialLinks.map((link) => {
            const Icon = socialIconMap[link.icon];
            return (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-400 hover:text-black transition-colors border w-8 h-8 flex items-center justify-center"
                aria-label={link.name}
              >
                {Icon && <Icon className="w-3 h-3" />}
              </a>
            );
          })}
        </div>
      </div>
    </footer>
  );
}
