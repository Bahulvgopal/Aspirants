import Link from "next/link";
import { courses } from "@/data/courses";
import FadeUp from "../shared/FadeUp";

export default function CoursePreview() {
  return (
    <section className="section-padding" style={{ background: "var(--surface)" }}>
      <div className="container-custom">

        <div className="section-header-block mb-10">
          <p className="aspirant-label">Our Programmes</p>
          <h2 className="aspirant-title">
            Academic<br /><em>Excellence</em>
          </h2>
          <p className="aspirant-subtitle">
            Explore Aspire&apos;s future-ready learning ecosystem — built for the ambitions of tomorrow.
          </p>
          <div className="aspirant-divider" />
        </div>

        <div className="course-mosaic">
          {courses.map((course, index) => (
            <FadeUp key={course.slug} delay={index * 0.06}>
              <div className="c-card">
                <span className="c-num">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="c-title">{course.title}</h3>
                <p className="c-desc">{course.shortDescription}</p>
                <Link href={`/courses/${course.slug}`} className="c-link">
                  Explore
                  <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth={1.8} aria-hidden>
                    <path d="M3 8h10M9 4l4 4-4 4" />
                  </svg>
                </Link>
              </div>
            </FadeUp>
          ))}
        </div>

      </div>
    </section>
  );
}