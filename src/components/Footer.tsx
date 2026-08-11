import { Mail, Phone } from "lucide-react";
import { profile } from "../data/profile";
import { GithubIcon } from "./icons/GithubIcon";

/**
 * Footer component
 */
export function Footer() {
  return (
    <footer className="border-t border-black/10 bg-white/50">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-8 sm:px-6 md:flex-row md:items-center md:justify-between">
        <p className="text-sm text-gray-500">
          © {new Date().getFullYear()} {profile.name} — Frontend Developer Intern.
        </p>
        <ul className="flex flex-wrap items-center gap-4 text-sm">
          <li>
            <a
              className="inline-flex items-center gap-2 text-gray-500 transition-colors hover:text-brand-green"
              href={`mailto:${profile.email}`}
            >
              <Mail className="h-4 w-4" aria-hidden="true" /> {profile.email}
            </a>
          </li>
          <li>
            <a
              className="inline-flex items-center gap-2 text-gray-500 transition-colors hover:text-brand-green"
              href={`tel:${profile.phone.replace(/\s/g, "")}`}
            >
              <Phone className="h-4 w-4" aria-hidden="true" /> {profile.phone}
            </a>
          </li>
          <li>
            <a
              className="inline-flex items-center gap-2 text-gray-500 transition-colors hover:text-brand-green"
              href={profile.githubUrl}
              target="_blank"
              rel="noreferrer"
            >
              <GithubIcon className="h-4 w-4" aria-hidden="true" /> {profile.github}
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
