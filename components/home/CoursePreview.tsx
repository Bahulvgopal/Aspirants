
import Link from "next/link";
import SectionHeading from "../shared/SectionHeading";
import { courses } from "@/data/courses";
import FadeUp from "../shared/FadeUp";

export default function CoursePreview() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <SectionHeading
          title="Our Programmes"
          subtitle="Explore Aspire’s academic and future-ready learning ecosystem."
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {courses.map((course, index) => (
            <FadeUp
              key={course.slug}
              delay={index * 0.08}
            >
              <div className="rounded-3xl border border-gray-200 bg-[#faf8f5] p-8 transition hover:-translate-y-2 hover:shadow-xl">
                <h3 className="text-2xl font-bold text-[#8B1E2D]">
                  {course.title}
                </h3>

                <p className="mt-4 text-gray-600">
                  {course.shortDescription}
                </p>

                <Link
                  href={`/courses/${course.slug}`}
                  className="mt-6 inline-block font-semibold text-[#8B1E2D]"
                >
                  Learn More →
                </Link>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}

