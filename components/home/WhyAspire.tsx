import SectionHeading from "../shared/SectionHeading";
import FadeUp from "../shared/FadeUp";

const reasons = [
  {
    title: "Structured Learning",
    description:
      "Well-planned academic mentoring focused on conceptual clarity and performance.",
  },
  {
    title: "Science Practical Learning",
    description:
      "Hands-on Chemistry, Physics, Biology and Mathematics support.",
  },
  {
    title: "Future Ready Education",
    description:
      "Coding, analytical thinking and modern skill exposure.",
  },
  {
    title: "Result-Oriented Mentoring",
    description:
      "Regular evaluations, mock exams and progress tracking.",
  },
];

export default function WhyAspire() {
  return (
    <section className="why-aspire section-padding">
      <div className="container-custom">
        <SectionHeading
          title="Why Aspire?"
          subtitle="Helping students become confident, disciplined and future-ready learners."
        />

        <FadeUp>
          <div className="aspire-grid">
            {reasons.map((reason) => (
              <div
                key={reason.title}
                className="aspire-item"
              >
                <h3>{reason.title}</h3>
                <p>{reason.description}</p>
              </div>
            ))}
          </div>
        </FadeUp>
      </div>
    </section>
  );
}