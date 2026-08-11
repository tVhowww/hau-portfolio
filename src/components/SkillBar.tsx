import { motion } from "framer-motion";
import type { Skill } from "../data/skills";

/**
 * SkillBar - one row in a skill list: name, percentage label, and an
 * animated progress bar that fills in when scrolled into view
 * Used inside the Technical Skills grid on the Skills page
 */
export function SkillBar({ skill, index }: { skill: Skill; index: number }) {
  return (
    <li>
      <div className="mb-2 flex items-center justify-between gap-3">
        <span className="min-w-0 truncate text-sm font-medium text-brand-dark">
          {skill.name}
        </span>
        <span className="shrink-0 text-xs text-gray-500">{skill.level}%</span>
      </div>
      <div
        className="h-2 w-full overflow-hidden rounded-full bg-gray-200"
        role="progressbar"
        aria-label={skill.name}
        aria-valuenow={skill.level}
        aria-valuemin={0}
        aria-valuemax={100}
      >
        <motion.div
          className="h-full rounded-full bg-linear-to-r from-brand-green to-emerald-400"
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{
            duration: 0.8,
            delay: index * 0.05,
            ease: [0.22, 1, 0.36, 1],
          }}
        />
      </div>
    </li>
  );
}
