import type { ReactNode } from "react";

/**
 * PageHeader - reusable section header used at the top of every inner page
 * (Resume, Skills, Projects, Contact): a small eyebrow badge, a large title,
 * and an optional description (plain text or JSX)
 *
 * Usage: <PageHeader eyebrow="Resume" title="Detailed Resume" description="..." />
 */
export function PageHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: ReactNode;
}) {
  return (
    <header className="mb-10 max-w-2xl">
      <p className="mb-3 inline-flex items-center rounded-full border border-secondary bg-secondary px-3 py-1 text-xs font-semibold uppercase tracking-widest text-primary transition-colors duration-300 dark:border-primary/20 dark:bg-primary/20">
        {eyebrow}
      </p>
      <h1 className="text-3xl font-bold text-foreground transition-colors duration-300 dark:text-white sm:text-4xl">
        {title}
      </h1>
      {description && <p className="mt-3 text-gray-600 transition-colors duration-300 dark:text-gray-300">{description}</p>}
    </header>
  );
}
