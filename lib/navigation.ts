export type NavItem = {
  label: string;
  path?: string;
  children?: NavItem[];
};

export type NavGroup = {
    title: string;
    items: NavItem[];
};

export const NAVIGATION: NavGroup[] = [
  {
    title: "MAIN",
    items: [
      { label: "HOME", path: "/" },
      {
        label: "WHAT WE DO",
        children: [
          {
            label: "SERVICES",
            path: "/what-we-do/our-services",
          },
          {
            label: "TECHNOLOGY EXPERTISE",
            path: "/what-we-do/technology-expertise",
          },
        ],
      },
      { label: "HOW WE WORK", path: "/how-we-work" },
    ],
  },
  {
    title: "RESOURCES",
    items: [{ label: "BLOG", path: "/resources/blog" }],
  },
  {
    title: "COMPANY",
    items: [
      { label: "ABOUT US", path: "/company/about-us" },
      { label: "CAREERS", path: "/company/careers" },
      { label: "CONTACT US", path: "/company/contact-us" },
    ],
  },
];