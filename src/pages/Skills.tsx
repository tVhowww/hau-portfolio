import { Languages } from "lucide-react";
import { PageHeader } from "../components/PageHeader";
import { SkillBar } from "../components/SkillBar";
import { languages, skillGroups, softSkills } from "../data/skills";

/**
 * Skills page - technical skills grouped by category with animated
 * progress bars, plus soft skills and language proficiency
 */
const Skills = () => {
  return (
    <div className="mx-auto max-w-6xl px-6 py-12">
      <PageHeader
        eyebrow="Skills"
        title="Skills & Competencies"
        description="Proficiency levels are self-assessed based on real project usage."
      />

      <section aria-labelledby="technical" className="mb-12">
        <h2
          id="technical"
          className="mb-5 text-xl font-semibold text-brand-dark"
        >
          Technical Skills
        </h2>
        <div className="grid gap-5 md:grid-cols-2">
          {skillGroups.map((group) => (
            <article
              key={group.category}
              className="rounded-2xl border border-black/10 bg-white p-6"
            >
              <h3 className="mb-5 text-sm font-semibold uppercase tracking-widest text-brand-green">
                {group.category}
              </h3>
              <ul className="space-y-4">
                {group.skills.map((skill, i) => (
                  <SkillBar key={skill.name} skill={skill} index={i} />
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section aria-labelledby="soft" className="mb-12">
        <h2 id="soft" className="mb-5 text-xl font-semibold text-brand-dark">
          Soft Skills
        </h2>
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {softSkills.map((s) => (
            <li
              key={s.name}
              className="rounded-2xl border border-black/10 bg-white p-5"
            >
              <h3 className="text-base font-semibold text-brand-dark">
                {s.name}
              </h3>
              <p className="mt-1.5 text-sm text-gray-600">{s.desc}</p>
            </li>
          ))}
        </ul>
      </section>

      <section aria-labelledby="languages">
        <h2
          id="languages"
          className="mb-5 text-xl font-semibold text-brand-dark"
        >
          Languages
        </h2>
        <ul className="grid gap-4 sm:grid-cols-2">
          {languages.map((l) => (
            <li
              key={l.name}
              className="flex items-start gap-3 rounded-2xl border border-black/10 bg-white p-5"
            >
              <Languages
                className="mt-0.5 h-4 w-4 shrink-0 text-brand-green"
                aria-hidden="true"
              />
              <div>
                <h3 className="text-base font-semibold text-brand-dark">
                  {l.name}
                </h3>
                <p className="mt-1 text-sm text-gray-600">{l.level}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default Skills;
