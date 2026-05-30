
import FadeUp from "../shared/FadeUp";

const stats = [
  {
    value: "2020",
    label: "Established",
  },
  {
    value: "1000+",
    label: "Students",
  },
  {
    value: "25+",
    label: "Years Vision",
  },
  {
    value: "100%",
    label: "Future Focused",
  },
];

export default function Stats() {
  return (
    <section className="section-padding">
      <div className="container-custom grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((item, index) => (
          <FadeUp
            key={item.label}
            delay={index * 0.1}
          >
            <div className="rounded-3xl border border-gray-200 bg-white p-10 text-center shadow-sm transition hover:shadow-xl">
              <h3 className="text-4xl font-bold text-[#8B1E2D]">
                {item.value}
              </h3>

              <p className="mt-2 text-gray-600">
                {item.label}
              </p>
            </div>
          </FadeUp>
        ))}
      </div>
    </section>
  );
}

