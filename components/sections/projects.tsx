"use client";

import { useState } from "react";
import Image from "next/image";
import { projects, type Project } from "@/lib/data";
import { Badge } from "@/components/ui/badge";
import { GithubIcon } from "@/lib/icons";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { ArrowUpRight } from "lucide-react";

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

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
              onClick={() => setSelectedProject(project)}
              className="group border border-neutral-200 p-6 bg-white hover:border-neutral-900 transition-all duration-300 flex flex-col justify-between cursor-pointer"
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

              <div
                className="flex items-center justify-between gap-1"
                onClick={(e) => e.stopPropagation()}
              >
                {project.liveUrl ? (
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
                ) : (
                  <span className="text-xs text-neutral-400">Live Preview</span>
                )}

                {project.codeUrl && (
                  <a
                    href={project.codeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-medium text-neutral-500 hover:text-black transition-colors"
                  >
                    <GithubIcon className="w-3.5 h-3.5" />
                    <span>Source Code</span>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Project Details Dialog */}
        <Dialog
          open={!!selectedProject}
          onOpenChange={(open) => {
            if (!open) setSelectedProject(null);
          }}
        >
          {selectedProject && (
            <DialogContent className="sm:max-w-3xl max-h-[88vh] overflow-y-auto p-6 sm:p-8 font-mono rounded-none">
              <DialogHeader className="mb-4">
                <p className="text-xs text-neutral-400 tracking-widest uppercase">
                  Project Details
                </p>
                <DialogTitle className="text-xl sm:text-2xl font-bold text-neutral-900">
                  {selectedProject.title || selectedProject.name}
                </DialogTitle>
                {selectedProject.tagline && (
                  <DialogDescription className="text-xs text-neutral-500 mt-1 font-mono">
                    {selectedProject.tagline}
                  </DialogDescription>
                )}
              </DialogHeader>

              {/* Section for Images (if there are images for that project) */}
              {selectedProject.images && selectedProject.images.length > 0 && (
                <div className="my-2 space-y-2">
                  <p className="text-xs uppercase text-neutral-400">Images</p>
                  <div className="grid grid-cols-1 gap-3">
                    {selectedProject.images.map((img, i) => (
                      <div
                        key={i}
                        className="relative aspect-[16/9] w-full rounded-none overflow-hidden border border-neutral-200 bg-neutral-950"
                      >
                        <Image
                          src={img}
                          alt={`${selectedProject.name} image ${i + 1}`}
                          fill
                          className="object-cover"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Tools Used */}
              {selectedProject.toolsUsed && selectedProject.toolsUsed.length > 0 && (
                <div className="my-3">
                  <p className="text-xs uppercase text-neutral-400 mb-2">Tools Used</p>
                  <div className="flex flex-wrap gap-1">
                    {selectedProject.toolsUsed.map((tool) => (
                      <Badge
                        key={tool}
                        variant="outline"
                        className="text-[11px] font-mono py-0 px-2 text-neutral-700 border-neutral-200 rounded-none"
                      >
                        {tool}
                      </Badge>
                    ))}
                  </div>
                </div>
              )}

              {/* Detailed Breakdown */}
              <div className="space-y-4 text-xs sm:text-sm text-neutral-700 leading-relaxed border-t border-neutral-200 pt-4">
                {selectedProject.problemStatement && (
                  <div>
                    <h4 className="text-xs uppercase text-neutral-900 font-bold mb-1">
                      Problem Statement
                    </h4>
                    <p className="text-neutral-600 bg-neutral-50 p-3 border border-neutral-200 rounded-none leading-relaxed">
                      {selectedProject.problemStatement}
                    </p>
                  </div>
                )}

                {selectedProject.approach && (
                  <div>
                    <h4 className="text-xs uppercase text-neutral-900 font-bold mb-1">
                      Approach
                    </h4>
                    <p className="text-neutral-600 bg-neutral-50 p-3 border border-neutral-200 rounded-none leading-relaxed">
                      {selectedProject.approach}
                    </p>
                  </div>
                )}

                {selectedProject.solution && (
                  <div>
                    <h4 className="text-xs uppercase text-neutral-900 font-bold mb-1">
                      Solution
                    </h4>
                    <p className="text-neutral-600 bg-neutral-50 p-3 border border-neutral-200 rounded-none leading-relaxed">
                      {selectedProject.solution}
                    </p>
                  </div>
                )}

                {selectedProject.contribution && (
                  <div>
                    <h4 className="text-xs uppercase text-neutral-900 font-bold mb-1">
                      My Contribution
                    </h4>
                    <p className="text-neutral-600 bg-neutral-50 p-3 border border-neutral-200 rounded-none leading-relaxed whitespace-pre-line">
                      {selectedProject.contribution}
                    </p>
                  </div>
                )}
              </div>

              {/* Action Buttons (Live preview & Source code if added) */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 pt-4 mt-4 border-t border-neutral-200">
                <div className="flex flex-wrap items-center gap-3">
                  {selectedProject.liveUrl && (
                    <a
                      href={selectedProject.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-center gap-2 h-9 px-4 bg-neutral-900 text-white text-xs font-mono uppercase hover:bg-neutral-800 transition-colors"
                    >
                      <span>Live Preview</span>
                      <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </a>
                  )}

                  {selectedProject.codeUrl && (
                    <a
                      href={selectedProject.codeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 h-9 px-4 border border-neutral-300 text-neutral-900 text-xs font-mono uppercase hover:bg-neutral-50 transition-colors"
                    >
                      <GithubIcon className="w-3.5 h-3.5" />
                      <span>Source Code</span>
                    </a>
                  )}
                </div>

                <button
                  type="button"
                  onClick={() => setSelectedProject(null)}
                  className="text-xs font-mono uppercase text-neutral-400 hover:text-black py-1 cursor-pointer"
                >
                  Close [ESC]
                </button>
              </div>
            </DialogContent>
          )}
        </Dialog>
      </div>
    </section>
  );
}
