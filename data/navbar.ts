export const navbarLinks = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "About",
    href: "/about",
  },
  // {
  //   label: "Moments",
  //   href: "/moments",
  // },
  {
    label: "Toppers",
    href: "/toppers",
  },
  {
    label: "Courses",
    href: "#",
    children: [
      {
        label: "Aspire Next",
        href: "/courses/next",
      },
      {
        label: "Aspire Elite",
        href: "/courses/elite",
      },
      {
        label: "Aspire Smart",
        href: "/courses/smart",
      },
      {
        label: "Aspire Codex",
        href: "/courses/codex",
      },
      {
        label: "Aspire Science",
        href: "#",
        children: [
          {
            label: "Chemistry",
            href: "/courses/science/chemistry",
          },
          {
            label: "Physics",
            href: "/courses/science/physics",
          },
          {
            label: "Biology",
            href: "/courses/science/biology",
          },
          {
            label: "Mathematics",
            href: "/courses/science/mathematics",
          },
        ],
      },
      {
        label: "Value Space",
        href: "/courses/value-space",
      },
      {
        label: "Shutter Studio",
        href: "/courses/shutter-studio",
      },
    ],
  },
  {
    label: "News",
    href: "/news",
  },
  {
    label: "Gallery",
    href: "/gallery",
  },
  {
    label: "Contact",
    href: "/contact",
  },
];