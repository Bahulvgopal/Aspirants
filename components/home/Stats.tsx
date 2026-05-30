import FadeUp from "../shared/FadeUp";

const stats = [
  {
    value: "2002",
    label: "Established",
  },
  {
    value: "1000+",
    label: "Students",
  },
  {
    value: "50+",
    label: "Years Vision",
  },
  {
    value: "100%",
    label: "Future Focused",
  },
];

export default function Stats() {
  return (
    <section className="stats-luxury section-padding">
      <div className="container-custom">
        <div className="stats-luxury-card">
          {stats.map((item, index) => (
            <FadeUp
              key={item.label}
              delay={index * 0.1}
            >
              <div className="luxury-stat">
                <h3>{item.value}</h3>
                <p>{item.label}</p>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}