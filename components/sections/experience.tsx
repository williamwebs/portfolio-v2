import { experience, education } from "@/lib/data";
import { Separator } from "@/components/ui/separator";

export function Experience() {
  return (
    <section id="experience" className="py-14">
      <div className="max-w-4xl">
        <p className="text-xs font-mono tracking-widest text-neutral-400 mb-3">
          Career Timeline
        </p>
        <h2 className="text-3xl md:text-4xl font-bold font-mono tracking-tight text-neutral-900 leading-tight mb-4">
          Where I&apos;ve worked.
        </h2>
        <p className="text-xs md:text-base text-neutral-600 font-mono mb-12 max-w-xl">
          Track record of shipping mission-critical features, optimizing system performance, and scaling web services.
        </p>

        <div className="space-y-0">
          {experience.map((job, index) => (
            <div key={`${job.company}-${job.role}`}>
              {index > 0 && <Separator className="my-8" />}
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-4">
                <div>
                  <h3 className="text-sm md:text-base font-bold font-mono text-neutral-900">{job.role}</h3>
                  <a
                    href={job.companyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-neutral-500 hover:text-black hover:underline transition-colors text-xs font-medium font-mono"
                  >
                    {job.company}
                  </a>
                </div>
                <div className="text-xs font-mono text-neutral-400 sm:text-right">
                  <p>{job.dates}</p>
                  <p>{job.location}</p>
                </div>
              </div>
              <ul className="space-y-2.5 ml-4">
                {job.bullets.map((bullet, i) => (
                  <li key={i} className="text-neutral-600 text-xs md:text-sm leading-relaxed list-disc marker:text-neutral-300 font-mono">
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Education Section */}
        <div className="hidden mt-16 pt-12 border-t border-neutral-200">
          <p className="text-xs font-mono uppercase tracking-widest text-neutral-400 mb-3">
            Education
          </p>
          <div className="space-y-4">
            {education.map((edu) => (
              <div key={edu.school} className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                <div>
                  <h3 className="text-base font-bold text-neutral-900">{edu.degree}</h3>
                  <p className="text-sm text-neutral-500">{edu.school}</p>
                </div>
                <p className="text-xs font-mono text-neutral-400">{edu.dates}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
