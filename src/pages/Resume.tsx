import { useState } from "react";
import { Cake, Mail, MapPin, Phone, User } from "lucide-react";
import { GithubIcon } from "../components/icons/GithubIcon";
import { PageHeader } from "../components/PageHeader";
import { profile, objective, education, experience } from "../data/profile";

/**
 * Resume page - detailed CV: personal info, career objective, and a
 * tabbed timeline switching between Education and Experience
 */
type TabId = "education" | "experience";

const tabs: { id: TabId; label: string }[] = [
  { id: "education", label: "Education" },
  { id: "experience", label: "Experience" },
];

interface TimelineEntry {
  title: string;
  subtitle: string;
  period: string;
  details: string[];
}

const tabData: Record<TabId, TimelineEntry[]> = {
  education: education.map((e) => ({
    title: e.school,
    subtitle: e.degree,
    period: e.period,
    details: e.details,
  })),
  experience: experience.map((e) => ({
    title: e.company,
    subtitle: e.role,
    period: e.period,
    details: e.details,
  })),
};

const Resume = () => {
  const [active, setActive] = useState<TabId>("education");
  const items = tabData[active];

  const info = [
    { icon: Cake, label: "Birthday", value: profile.birthdate },
    { icon: User, label: "Gender", value: profile.gender },
    { icon: MapPin, label: "Address", value: profile.location },
    {
      icon: Mail,
      label: "Email",
      value: profile.email,
      href: `mailto:${profile.email}`,
    },
    {
      icon: Phone,
      label: "Phone",
      value: profile.phone,
      href: `tel:${profile.phone.replace(/\s/g, "")}`,
    },
    {
      icon: GithubIcon,
      label: "GitHub",
      value: profile.github,
      href: profile.githubUrl,
    },
  ];

  return (
    <div className="mx-auto max-w-6xl px-6 py-12">
      <PageHeader
        eyebrow="Resume"
        title="Detailed Resume"
        description="Personal information, career objective, and my education & work history."
      />

      {/* Personal info */}
      <section aria-labelledby="personal-info" className="mb-12">
        <h2
          id="personal-info"
          className="mb-4 text-xl font-semibold text-foreground transition-colors duration-300 dark:text-white"
        >
          Personal Information
        </h2>
        <dl className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {info.map(({ icon: Icon, label, value, href }) => (
            <div
              key={label}
              className="flex items-start gap-3 rounded-xl border border-black/10 bg-white p-4 transition-colors duration-300 dark:border-white/10 dark:bg-gray-800"
            >
              <Icon
                className="mt-0.5 h-4 w-4 shrink-0 text-primary"
                aria-hidden="true"
              />
              <div className="min-w-0">
                <dt className="text-xs uppercase tracking-wider text-gray-500 dark:text-gray-400">
                  {label}
                </dt>
                <dd className="mt-1 truncate text-sm font-medium text-foreground dark:text-gray-100">
                  {href ? (
                    <a
                      href={href}
                      target={href.startsWith("http") ? "_blank" : undefined}
                      rel="noreferrer"
                      className="hover:text-primary"
                    >
                      {value}
                    </a>
                  ) : (
                    value
                  )}
                </dd>
              </div>
            </div>
          ))}
        </dl>
      </section>

      {/* Career objective */}
      <section aria-labelledby="objective" className="mb-12">
        <h2
          id="objective"
          className="mb-4 text-xl font-semibold text-foreground"
        >
          Career Objective
        </h2>
        <ul className="space-y-3 rounded-2xl border border-black/10 bg-white p-6 text-sm leading-relaxed text-gray-600 transition-colors duration-300 dark:border-white/10 dark:bg-gray-800 dark:text-gray-300">
          {objective.map((line) => (
            <li key={line} className="flex gap-3">
              <span
                aria-hidden="true"
                className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary"
              />
              <span>{line}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Education / Experience tabs */}
      <section aria-labelledby="timeline">
        <h2
          id="timeline"
          className="mb-4 text-xl font-semibold text-foreground"
        >
          Timeline
        </h2>

        <div
          role="tablist"
          aria-label="Select content group"
          className="mb-6 flex flex-wrap gap-2"
        >
          {tabs.map((tab) => (
            <button
              key={tab.id}
              type="button"
              role="tab"
              id={`tab-${tab.id}`}
              aria-selected={active === tab.id}
              aria-controls={`panel-${tab.id}`}
              onClick={() => setActive(tab.id)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary cursor-pointer ${
                active === tab.id
                  ? "bg-primary text-white"
                  : "border border-black/10 text-gray-600 hover:text-foreground dark:border-white/10 dark:text-gray-300 dark:hover:text-white"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div
          id={`panel-${active}`}
          role="tabpanel"
          aria-labelledby={`tab-${active}`}
          className="space-y-4"
        >
          {items.map((item) => (
            <article
              key={item.title}
              className="rounded-2xl border border-black/10 border-l-2 border-l-primary bg-white p-5 transition-colors duration-300 dark:border-white/10 dark:border-l-primary dark:bg-gray-800"
            >
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="text-base font-semibold text-foreground dark:text-white">
                  {item.title}
                </h3>
                <span className="text-xs text-gray-500 dark:text-gray-400">{item.period}</span>
              </div>
              <p className="mt-1 text-sm text-primary">{item.subtitle}</p>
              <ul className="mt-3 space-y-1.5 text-sm text-gray-600 dark:text-gray-300">
                {item.details.map((d) => (
                  <li key={d} className="flex gap-2">
                    <span
                      aria-hidden="true"
                      className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary"
                    />
                    <span>{d}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Resume;
