import { skills } from "@/lib/data";
import { Badge } from "@/components/ui/badge";

export function Skills() {
  return (
    <section id="skills" className="py-14">
      <div className="max-w-4xl">
        <p className="text-xs font-mono tracking-widest text-neutral-400 mb-3">
          Toolbox &amp; Stacks
        </p>
        <h2 className="text-3xl md:text-4xl font-bold font-mono tracking-tight text-neutral-900 leading-tight mb-4">
          Technologies I work with.
        </h2>
        <p className="text-xs md:text-base text-neutral-600 font-mono mb-10 max-w-xl">
          Core technologies, libraries, and cloud platforms I leverage to architect end-to-end applications.
        </p>

        <div className="flex flex-wrap gap-1">
          {skills.map((skill) => (
            <Badge
              key={skill}
              variant="outline"
              className="px-3.5 py-1 h-auto text-xs sm:text-sm font-mono border-neutral-200 bg-white text-neutral-800 hover:bg-neutral-900 hover:text-white hover:border-neutral-900 transition-all cursor-default select-none rounded-none"
            >
              {skill}
            </Badge>
          ))}
        </div>
      </div>
    </section>
  );
}
