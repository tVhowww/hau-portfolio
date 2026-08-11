import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { navLinks } from "../data/navLinks";
import { profile } from "../data/profile";
import { Menu, Moon, Sun, X } from "lucide-react";

/**
 * NavBar component - main navigation bar, displayed on all pages
 * - Responsive: horizontal menu on desktop (≥768px), switches to hamburger + dropdown menu on mobile
 * - Automatically highlights the link corresponding to the current route using react-router's NavLink
 * - Mobile menu auto-closes on route change and on Escape key press
 * Usage: place it once in App.tsx, above <Routes>, no props needed
 */

const NavBar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isDark, setIsDark] = useState<boolean>(false);
  const { pathname } = useLocation();
  const [prevPathname, setPrevPathname] = useState(pathname);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  const toggleDarkMode = () => {
    setIsDark((prev) => !prev);
  };

  // Auto-close the mobile menu whenever the route changes
  if (pathname !== prevPathname) {
    setPrevPathname(pathname);
    setIsOpen(false);
  }

  // Allow closing the mobile menu with the Escape key
  useEffect(() => {
    if (!isOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isOpen]);

  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-brand-bg/90 backdrop-blur">
      <div className="mx-auto flex justify-between items-center h-16 max-w-6xl px-6">
        {/* Logo */}
        <NavLink
          to="/"
          className="flex items-center gap-2.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-green"
          aria-label="Go to homepage"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-2xl bg-brand-green text-sm font-bold text-white">
            {profile.name.split(" ").pop()?.[0]}
          </span>
          <span className="font-bold text-brand-dark">{profile.name}</span>
        </NavLink>

        {/* Menu desktop */}
        <nav aria-label="Main navigation" className="hidden md:block">
          <ul className="flex items-center gap-2">
            {navLinks.map((link) => (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  end={link.to === "/"}
                  className={({ isActive }) =>
                    `text-sm font-medium rounded-full px-4 py-2 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-green
                    ${isActive ? "bg-brand-green-light text-brand-green" : "text-gray-600 hover:bg-black/5 hover:text-brand-dark"}`
                  }
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2.5">
          {/* Dark mode toggle */}
          <button
            className="flex h-9 w-9 items-center justify-center rounded-full border border-black/10 text-brand-dark transition-colors hover:bg-black/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-green cursor-pointer"
            aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
            onClick={toggleDarkMode}
          >
            {isDark ? (
              <Sun className="h-4 w-4" aria-hidden="true" />
            ) : (
              <Moon className="h-4 w-4" aria-hidden="true" />
            )}
          </button>

          {/* Hamburger button */}
          <button
            type="button"
            className="md:hidden rounded-full h-9 w-9 flex items-center justify-center border border-black/10 text-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-green cursor-pointer transition-colors hover:bg-black/5"
            aria-expanded={isOpen}
            aria-controls="mobile-nav"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            onClick={toggleMenu}
          >
            {isOpen ? (
              <X className="h-4 w-4" aria-hidden="true" />
            ) : (
              <Menu className="h-4 w-4" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {/* Menu mobile */}
      {isOpen && (
        <div
          id="mobile-nav"
          className="md:hidden border-t border-black/5 bg-white absolute w-full shadow-md"
        >
          <nav aria-label="Mobile navigation" className="px-6 py-4">
            <ul className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <li key={link.to}>
                  <NavLink
                    to={link.to}
                    end={link.to === "/"}
                    className={({ isActive }) =>
                      `block py-2 px-4 text-base font-medium rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-green transition-colors
                      ${isActive ? "bg-brand-green-light text-brand-green" : "text-gray-700 hover:bg-black/5 hover:text-brand-dark"}`
                    }
                  >
                    {link.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
};

export default NavBar;
