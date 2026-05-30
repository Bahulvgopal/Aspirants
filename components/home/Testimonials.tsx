import SectionHeading from "../shared/SectionHeading";
import FadeUp from "../shared/FadeUp";

const testimonials = [
  {
    name: "Parent Review",
    review:
      "Aspire helped improve our child's confidence and academic performance.",
  },
  {
    name: "Student Review",
    review:
      "The classes are engaging, structured and easy to understand.",
  },
  {
    name: "Academic Support",
    review:
      "Excellent mentoring, mock exams and continuous guidance.",
  },
];

export default function Testimonials() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <SectionHeading
          title="What Parents & Students Say"
          subtitle="Real learning experiences from Aspire."
        />

        <div className="grid gap-6 lg:grid-cols-3">
          {testimonials.map((item, index) => (
            <FadeUp
              key={item.name}
              delay={index * 0.1}
            >
              <div className="rounded-[32px] border border-gray-200 p-8 transition hover:shadow-xl">
                <p className="text-gray-700 leading-8">
                  "{item.review}"
                </p>

                <h3 className="mt-6 font-semibold text-[#8B1E2D]">
                  {item.name}
                </h3>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}