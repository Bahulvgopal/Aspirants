export const news = [
  {
    id: 1,
    title: "Admissions Open 2026",
    description:
      "Admissions are now open for Aspire Smart, Elite and Science programmes. Secure your seat today.",
    date: "2026-05-01 05:30 pm",
    category: "admissions",
    image: "/news/new3.png",
  },
  {
    id: 2,
    title: "New Science Workshop Introduced",
    description:
      "Hands-on chemistry and physics learning sessions introduced for all +2 students.",
    date: "2026-06-01 05:30 pm",
    category: "workshop",
    image: "/news/new2.png",
  },
  {
    id: 3,
    title: "Mock Examination Batch Begins",
    description:
      "Special revision and mock exams for board students starting this month.",
    date: "2026-06-02 01:30 am",
    category: "exams",
    image: "/news/new1.png",
  },
];

export const newsSorted = [...news].sort(
  (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
);