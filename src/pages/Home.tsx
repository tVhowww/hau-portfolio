import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Download, FolderGit2, MapPin } from "lucide-react";
import { profile } from "../data/profile";

/**
 * Home page - landing / hero section of the portfolio
 * Shows name, role, short intro, CTA buttons, avatar and key stats
 * No props needed, rendered directly by the router at "/"
 */
const Home = () => {
  return (
    <div className="mx-auto max-w-6xl px-6 py-12 lg:py-20">
      <section className="grid items-center gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
        {/* Left column: text content */}
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <p className="inline-flex items-center gap-2 rounded-full border border-secondary bg-secondary px-3 py-1 text-xs font-semibold uppercase tracking-widest text-primary transition-colors duration-300 dark:border-primary/20 dark:bg-primary/20">
            <span
              className="h-1.5 w-1.5 rounded-full bg-primary"
              aria-hidden="true"
            />
            Open to internship opportunities
          </p>

          <h1 className="mt-5 text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl text-foreground transition-colors duration-300 dark:text-white">
            {profile.name}
          </h1>
          <p className="mt-3 bg-linear-to-r from-primary to-emerald-400 bg-clip-text text-xl font-semibold text-transparent sm:text-2xl">
            {profile.title}
          </p>

          <p className="mt-5 max-w-xl text-base text-gray-600 transition-colors duration-300 dark:text-gray-300">
            {profile.tagline}
          </p>
          <p className="mt-2 max-w-xl text-base text-gray-600 transition-colors duration-300 dark:text-gray-300">
            {profile.summary}
          </p>

          <p className="mt-5 inline-flex items-center gap-2 text-sm text-gray-600 transition-colors duration-300 dark:text-gray-300">
            <MapPin className="h-4 w-4 text-primary" aria-hidden="true" />{" "}
            {profile.location}
          </p>

          {/* CTA buttons */}
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to="/resume"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-white transition-transform hover:scale-[1.03] focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            >
              View full resume{" "}
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 rounded-full border border-black/10 px-5 py-3 text-sm font-semibold text-foreground transition-colors hover:border-primary hover:text-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-primary dark:border-white/10 dark:text-gray-300 dark:hover:border-primary dark:hover:text-primary"
            >
              <FolderGit2 className="h-4 w-4" aria-hidden="true" /> View
              projects
            </Link>

            <a
              href={profile.cvUrl}
              download={profile.cvUrl}
              className="inline-flex items-center gap-2 rounded-full border border-black/10 px-5 py-3 text-sm font-semibold text-foreground transition-colors hover:border-primary hover:text-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-primary dark:border-white/10 dark:text-gray-300 dark:hover:border-primary dark:hover:text-primary"
            >
              <Download className="h-4 w-4" aria-hidden="true" /> Download CV
              (PDF)
            </a>
          </div>

          {/* Stat cards */}
          <ul className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-3">
            {profile.stats.map((stat) => (
              <li
                key={stat.label}
                className="rounded-xl border border-black/10 bg-white px-4 py-3 transition-colors duration-300 dark:border-white/10 dark:bg-gray-800"
              >
                <p className="text-xs uppercase tracking-wider text-gray-600 dark:text-gray-300">
                  {stat.label}
                </p>
                <p className="mt-1 text-lg font-semibold text-primary">
                  {stat.value}
                </p>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Right column: avatar with glow + gradient frame */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.55, delay: 0.2 }}
          className="relative mx-auto w-full max-w-sm"
        >
          <div
            aria-hidden="true"
            className="absolute -inset-6 rounded-4xl bg-linear-to-br from-primary/25 to-transparent blur-2xl"
          />
          <img
            src={profile.avatar}
            alt={`Portrait of ${profile.name}`}
            width={800}
            height={1000}
            className="relative w-full rounded-3xl border border-primary/30 object-cover"
          />
        </motion.div>
      </section>
    </div>
  );
};

export default Home;
