import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import { AnimatePresence } from "framer-motion";
import { PageHeader } from "../components/PageHeader";
import { ProjectCard } from "../components/ProjectCard";
import { allTags, projects } from "../data/projects";

/**
 * Projects page – search by name/description and filter by technology tag
 * Rendered at "/projects" by the React Router DOM route in App.tsx
 */
const Projects = () => {
  const [query, setQuery] = useState("");
  const [tag, setTag] = useState<string | null>(null);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return projects.filter((p) => {
      const matchQuery =
        !q ||
        p.name.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q);
      const matchTag = !tag || p.tags.includes(tag);
      return matchQuery && matchTag;
    });
  }, [query, tag]);

  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
      <PageHeader
        eyebrow="Projects"
        title="Featured projects"
        description="Search by name or filter by technology to quickly find projects you're interested in."
      />

      {/* Filter controls */}
      <section aria-label="Project filter" className="mb-8 space-y-4">
        {/* Search input */}
        <div className="relative max-w-md">
          <label htmlFor="project-search" className="sr-only">
            Search by project name
          </label>
          <Search
            className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400"
            aria-hidden="true"
          />
          <input
            id="project-search"
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search project..."
            className="w-full rounded-full border border-black/10 bg-white py-2.5 pl-10 pr-4 text-sm text-brand-dark outline-none transition-colors focus:border-brand-green"
          />
        </div>

        {/* Tag filter pills */}
        <ul className="flex flex-wrap gap-2">
          <li>
            <button
              type="button"
              onClick={() => setTag(null)}
              aria-pressed={tag === null}
              className={`rounded-full px-3 py-1.5 text-xs font-medium transition-colors cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-green ${tag === null
                ? "bg-brand-green text-white"
                : "border border-black/10 text-gray-500 hover:text-brand-dark"
                }`}
            >
              All
            </button>
          </li>
          {allTags.map((t) => (
            <li key={t}>
              <button
                type="button"
                onClick={() => setTag(tag === t ? null : t)}
                aria-pressed={tag === t}
                className={`rounded-full px-3 py-1.5 text-xs font-medium transition-colors cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-green ${tag === t
                  ? "bg-brand-green text-white"
                  : "border border-black/10 text-gray-500 hover:text-brand-dark"
                  }`}
              >
                {t}
              </button>
            </li>
          ))}
        </ul>
      </section>

      {/* Cards grid */}
      {filtered.length === 0 ? (
        <p className="rounded-2xl border border-black/10 bg-white p-8 text-center text-sm text-gray-500">
          No projects found. Try another keyword or technology.
        </p>
      ) : (
        <div className="grid gap-6 md:grid-cols-2">
          <AnimatePresence mode="popLayout">
            {filtered.map((p, i) => (
              <ProjectCard key={p.id} project={p} index={i} />
            ))}
          </AnimatePresence>
        </div>
      )}
    </div>
  );
};

export default Projects;
