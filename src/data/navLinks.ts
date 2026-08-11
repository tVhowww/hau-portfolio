export interface NavLinkItem {
  to: string;
  label: string;
}

export const navLinks: NavLinkItem[] = [
  { to: "/", label: "Home" },
  { to: "/resume", label: "Resume" },
  { to: "/skills", label: "Skills" },
  { to: "/projects", label: "Projects" },
  { to: "/contact", label: "Contact" },
];
