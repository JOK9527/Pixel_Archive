export type NavItem = {
  label: string;
  href: string;
};

export const navigation: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/projects/" },
  { label: "Notes", href: "/notes/" },
  { label: "Archive", href: "/archive/" },
  { label: "Lab", href: "/lab/" },
  { label: "About", href: "/about/" },
];
