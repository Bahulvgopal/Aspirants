import SectionHeading from "../shared/SectionHeading";
import FadeUp from "../shared/FadeUp";

const testimonials = [
  {
    review:
      "Aspire helped improve our child's confidence and academic performance.",
    author: "Parent Review",
  },
  {
    review:
      "The classes are engaging, structured and easy to understand.",
    author: "Student Review",
  },
  {
    review:
      "Excellent mentoring, mock exams and continuous guidance.",
    author: "Academic Support",
  },
];

export default function Testimonials() {
  return (
    <section className="luxury-testimonials section-padding">
      <div className="container-custom">
        <SectionHeading
          title="What Parents & Students Say"
          subtitle="Experiences from the Aspire learning journey."
        />

        <div className="testimonial-showcase">
          {testimonials.map((item, index) => (
            <FadeUp key={index} delay={index * 0.1}>
              <article className="luxury-testimonial">
                <div className="quote-icon">"</div>

                <p>{item.review}</p>

                <span>{item.author}</span>
              </article>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}