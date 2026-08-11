import { motion } from "framer-motion";
import { ExternalLink, CalendarDays } from "lucide-react";
import { GithubIcon } from "./icons/GithubIcon";
import type { Project } from "../data/projects";

/**
 * ProjectCard - animated card for a single project.
 * Uses framer-motion for staggered entrance (driven by `index` prop)
 */
interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{ duration: 0.35, delay: index * 0.07, ease: [0.22, 1, 0.36, 1] }}
      className="flex flex-col rounded-2xl border border-black/10 border-l-2 border-l-brand-green bg-white p-6 shadow-sm"
    >
      {/* Header */}
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0">
          <h2 className="text-lg font-semibold text-brand-dark">{project.name}</h2>
          <p className="mt-0.5 flex items-center gap-1.5 text-xs text-gray-500">
            <CalendarDays className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
            {project.period}
          </p>
        </div>

        {/* Action links */}
        <div className="flex shrink-0 gap-2">
          {project.repoUrl && (
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noreferrer"
              aria-label={`GitHub repo for ${project.name}`}
              className="flex h-8 w-8 items-center justify-center rounded-full border border-black/10 text-gray-500 transition-colors hover:border-brand-green hover:text-brand-green"
            >
              <GithubIcon className="h-4 w-4" aria-hidden="true" />
            </a>
          )}
          {project.demoUrl ? (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noreferrer"
              aria-label={`Live demo for ${project.name}`}
              className="flex h-8 w-8 items-center justify-center rounded-full border border-black/10 text-gray-500 transition-colors hover:border-brand-green hover:text-brand-green"
            >
              <ExternalLink className="h-4 w-4" aria-hidden="true" />
            </a>
          ) : (
            <span
              title="No live demo"
              aria-label="No live demo"
              className="flex h-8 w-8 items-center justify-center rounded-full border border-black/10 text-gray-300 cursor-not-allowed"
            >
              <ExternalLink className="h-4 w-4" aria-hidden="true" />
            </span>
          )}
        </div>
      </div>

      {/* Description */}
      <p className="mt-3 text-sm leading-relaxed text-gray-600">{project.description}</p>

      {/* Highlights */}
      <ul className="mt-4 space-y-1.5 text-sm text-gray-600">
        {project.highlights.map((h) => (
          <li key={h} className="flex gap-2">
            <span
              aria-hidden="true"
              className="mt-2 h-1 w-1 shrink-0 rounded-full bg-brand-green"
            />
            <span>{h}</span>
          </li>
        ))}
      </ul>

      {/* Tags */}
      <ul className="mt-5 flex flex-wrap gap-1.5" aria-label="Used technologies">
        {project.tags.map((tag) => (
          <li
            key={tag}
            className="rounded-full border border-brand-green/30 bg-brand-green-light px-2.5 py-0.5 text-xs font-medium text-brand-green"
          >
            {tag}
          </li>
        ))}
      </ul>
    </motion.article>
  );
}
