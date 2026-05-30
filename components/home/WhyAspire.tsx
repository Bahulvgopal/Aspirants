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
    <section className="section-padding bg-[#faf8f5]">
      <div className="container-custom">
        <SectionHeading
          title="Why Aspire?"
          subtitle="Helping students become confident, disciplined and future-ready learners."
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {reasons.map((reason, index) => (
            <FadeUp
              key={reason.title}
              delay={index * 0.08}
            >
              <div className="rounded-[32px] border border-gray-200 bg-white p-8 transition hover:-translate-y-2 hover:shadow-xl">
                <h3 className="text-xl font-bold text-[#8B1E2D]">
                  {reason.title}
                </h3>

                <p className="mt-4 text-gray-600 leading-7">
                  {reason.description}
                </p>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}