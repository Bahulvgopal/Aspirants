export const news = [
  {
    id: 1,
    title: "Admissions Open 2026",
    description:
      "Admissions are now open for Aspire Smart, Elite and Science programmes. Secure your seat today.",
    date: "2026-05-01 05:30 pm",
    category: "admissions",
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&auto=format&fit=crop&q=80",
  },
  {
    id: 2,
    title: "New Science Workshop Introduced",
    description:
      "Hands-on chemistry and physics learning sessions introduced for all +2 students.",
    date: "2026-06-01 05:30 pm",
    category: "workshop",
    image: "https://images.unsplash.com/photo-1532094349884-543559823397?w=800&auto=format&fit=crop&q=80",
  },
  {
    id: 3,
    title: "Mock Examination Batch Begins",
    description:
      "Special revision and mock exams for board students starting this month.",
    date: "2026-06-02 01:30 am",
    category: "exams",
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&auto=format&fit=crop&q=80",
  },
];

export const newsSorted = [...news].sort(
  (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
);