export const news = [
  {
    id: 1,
    title: "Admissions Open 2026",
    description:
      "Admissions are now open for Aspire Smart, Elite and Science programmes.",
    date: "1 May 2026",
  },
  {
    id: 2,
    title: "New Science Workshop",
    description:
      "Hands-on chemistry and physics learning sessions introduced.",
    date: "1 June 2026",
  },
  {
    id: 3,
    title: "Mock Examination Batch",
    description:
      "Special revision and mock exams for board students.",
    date: "2 June 2026",
  },
];

// Parse "Month YYYY" strings into a sortable Date
function parseMonthYear(str: string): Date {
  return new Date(`01 ${str}`);
}

// Sorted descending — most recent first
export const newsSorted = [...news].sort(
  (a, b) => parseMonthYear(b.date).getTime() - parseMonthYear(a.date).getTime()
);