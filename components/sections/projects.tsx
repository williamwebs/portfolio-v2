import { projects } from "@/lib/data";
import { Badge } from "@/components/ui/badge";
import { GithubIcon } from "@/lib/icons";

export function Projects() {
  return (
    <section id="projects" className="py-14">
      <div className="max-w-4xl">
        <p className="text-xs font-mono tracking-widest text-neutral-400 mb-3">
          Selected Works
        </p>
        <h2 className="text-3xl md:text-4xl font-bold font-mono tracking-tight text-neutral-900 leading-tight mb-4">
          Featured engineering projects.
        </h2>
        <p className="text-xs md:text-base text-neutral-600 font-mono mb-12 max-w-xl">
          A showcase of fullstack web applications, developer tooling, and distributed systems built for scale.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-1 font-mono">
          {projects.map((project) => (
            <div
              key={project.name}
              className="group border border-neutral-200 p-6 bg-white hover:border-neutral-900 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-start justify-between gap-4 mb-3">
                  <h3 className="text-base font-bold tracking-tight text-neutral-900">
                    {project.name}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-1 mb-4">
                  {project.techStack.map((tech) => (
                    <Badge
                      key={tech}
                      variant="outline"
                      className="text-[11px] font-mono py-0 px-2 text-neutral-700 border-neutral-200 rounded-none"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>

                <p className="text-neutral-600 text-xs md:text-sm leading-relaxed mb-4">
                  {project.description}
                </p>
              </div>

              <div className="flex items-center justify-between gap-1">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/link inline-flex items-center gap-1.5 text-xs font-semibold text-neutral-900 hover:text-black transition-colors"
                >
                  <span>Live Preview</span>
                  {/* Animated arrow that rotates on hover */}
                  <svg
                    className="w-4 h-4 transition-transform duration-300 ease-out transform -rotate-45 group-hover/link:rotate-0 group-hover/link:translate-x-0.5"
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

                <a
                  href={project.codeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-medium text-neutral-500 hover:text-black transition-colors"
                >
                  <GithubIcon className="w-3.5 h-3.5" />
                  <span>Source Code</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
