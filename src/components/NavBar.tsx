import { useState } from "react";
import { NavLink } from "react-router-dom";
import { navLinks } from "../data/navLinks";

/**
 * NavBar component - main navigation bar, displayed on all pages.
 * - Responsive: horizontal menu on desktop (≥768px), switches to hamburger + dropdown menu on mobile.
 * - Automatically highlights the link corresponding to the current route using react-router's NavLink.
 * Usage: place it once in App.tsx, above <Routes>, no props needed.
 */

const NavBar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isDark, setIsDark] = useState<boolean>(false);

  const fullName = "NGUYEN TRUNG HAU";

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  const toggleDarkMode = () => {
    setIsDark((prev) => !prev);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-brand-bg/90 backdrop-blur">
      <div className="mx-auto flex justify-between items-center h-16 max-w-6xl px-6">
        {/* Logo */}
        <NavLink
          to="/"
          className="flex items-center gap-2.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-green"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-2xl bg-brand-green text-sm font-bold text-white">
            {fullName.split(" ").pop()?.[0]}
          </span>
          <span className="font-bold text-brand-dark">{fullName}</span>
        </NavLink>

        {/* Menu desktop */}
        <nav className="hidden md:flex items-center gap-2">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === "/"}
              className={({ isActive }) =>
                `text-sm font-medium rounded-full px-4 py-2 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-green
                ${isActive ? "bg-brand-green-light text-brand-green" : "text-gray-600 hover:bg-black/5 hover:text-brand-dark"}`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-2.5">
          {/* Dark mode toggle */}
          <button
            className="flex h-9 w-9 items-center justify-center rounded-full border border-black/10  text-brand-dark transition-colors hover:bg-black/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-green cursor-pointer"
            aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
            onClick={toggleDarkMode}
          >
            {isDark ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 24 24"
              >
                <g
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                >
                  <circle cx="12" cy="12" r="4" />
                  <path d="M12 2v2m0 16v2M4.93 4.93l1.41 1.41m11.32 11.32l1.41 1.41M2 12h2m16 0h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
                </g>
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 24 24"
              >
                <path
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401"
                />
              </svg>
            )}
          </button>

          {/* Hamburger button */}
          <button
            className="md:hidden rounded-full h-9 w-9 flex items-center justify-center border border-black/10 text-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-green cursor-pointer transition-colors hover:bg-black/5"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            onClick={toggleMenu}
          >
            {isOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 24 24"
              >
                <path
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M18 6L6 18M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 24 24"
              >
                <path
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 5h16M4 12h16M4 19h16"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Menu mobile */}
      {isOpen && (
        <nav className="md:hidden flex flex-col gap-1 border-t border-black/5 bg-white px-6 py-4 absolute w-full shadow-md">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === "/"}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `py-2 px-4 text-base font-medium rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-green transition-colors
                ${isActive ? "bg-brand-green-light text-brand-green" : "text-gray-700 hover:bg-black/5 hover:text-brand-dark"}`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>
      )}
    </header>
  );
};

export default NavBar;
