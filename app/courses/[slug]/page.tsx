import { notFound } from "next/navigation";
import { courses } from "@/data/courses";

type Props = {
  params: Promise<{ slug: string }>;
};

export default async function CoursePage({ params }: Props) {
  const { slug } = await params;
  const course = courses.find((item) => item.slug === slug);

  if (!course) notFound();

  return (
    <main className="course-page">

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          HERO BANNER
      ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="course-hero">
        <div className="course-hero-bg"    aria-hidden />
        <div className="course-hero-grid"  aria-hidden />

        <div className="container-custom course-hero-inner">

          {/* Breadcrumb */}
          <nav className="course-breadcrumb" aria-label="Breadcrumb">
            <a href="/courses" className="course-breadcrumb-link">Programmes</a>
            <span className="course-breadcrumb-sep" aria-hidden>/</span>
            <span className="course-breadcrumb-current">{course.title}</span>
          </nav>

          <div className="course-hero-layout">
            {/* Left */}
            <div className="course-hero-text">
              <span className="course-hero-tag">Aspire Programme</span>

              <h1 className="course-hero-heading">{course.title}</h1>

              <p className="course-hero-desc">{course.heroDescription}</p>

              <div className="course-hero-meta">
                {course.duration && (
                  <div className="course-meta-pill">
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none"
                      stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                      strokeLinejoin="round" aria-hidden>
                      <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
                    </svg>
                    {course.duration}
                  </div>
                )}
                {course.level && (
                  <div className="course-meta-pill">
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none"
                      stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                      strokeLinejoin="round" aria-hidden>
                      <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
                    </svg>
                    {course.level}
                  </div>
                )}
                {course.mode && (
                  <div className="course-meta-pill">
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none"
                      stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                      strokeLinejoin="round" aria-hidden>
                      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
                    </svg>
                    {course.mode}
                  </div>
                )}
              </div>

              <div className="course-hero-actions">
                <a href="/enquiry" className="course-btn-primary">
                  <span>Enquire Now</span>
                  <svg width="15" height="15" viewBox="0 0 16 16" fill="none" aria-hidden>
                    <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor"
                      strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
                <a href="/courses" className="course-btn-ghost">← All Programmes</a>
              </div>
            </div>

            {/* Right — stat card */}
            <div className="course-hero-card">
              <div className="course-stat-card">
                <div className="course-stat-card-header">
                  <span className="course-stat-card-title">{course.title}</span>
                  <span className="course-stat-card-badge">Enrolling Now</span>
                </div>

                <div className="course-stat-card-divider" aria-hidden />

                <div className="course-stat-grid">
                  {[
                    { label: "Duration",   value: course.duration ?? "Flexible" },
                    { label: "Level",      value: course.level    ?? "All Levels" },
                    { label: "Mode",       value: course.mode     ?? "Offline" },
                    { label: "Programmes", value: `${course.features?.length ?? "—"} modules` },
                  ].map(({ label, value }) => (
                    <div key={label} className="course-stat-item">
                      <span className="course-stat-label">{label}</span>
                      <span className="course-stat-value">{value}</span>
                    </div>
                  ))}
                </div>

                <div className="course-stat-card-divider" aria-hidden />

                <a href="/enquiry" className="course-stat-cta">
                  Apply for This Programme
                  <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden>
                    <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor"
                      strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          FEATURES / MODULES
      ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="course-features-section section-padding">
        <div className="container-custom">

          {/* Section label */}
          <div className="course-section-label">
            <div className="course-section-label-line" aria-hidden />
            <span>What You&apos;ll Cover</span>
            <div className="course-section-label-line" aria-hidden />
          </div>

          <h2 className="course-section-heading">Programme Highlights</h2>
          <p className="course-section-sub">
            A structured curriculum designed around real exam patterns and conceptual depth.
          </p>

          {/* Features grid */}
          <div className="course-features-grid">
            {course.features.map((feature, index) => (
              <div key={feature} className="course-feature-card">
                <div className="course-feature-index" aria-hidden>
                  {String(index + 1).padStart(2, "0")}
                </div>
                <div className="course-feature-body">
                  <h3 className="course-feature-title">{feature}</h3>
                </div>
                <div className="course-feature-icon" aria-hidden>
                  <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                    <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor"
                      strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          BOTTOM CTA STRIP
      ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="course-bottom-cta">
        <div className="container-custom course-bottom-cta-inner">
          <div>
            <p className="course-bottom-cta-label">Ready to get started?</p>
            <h3 className="course-bottom-cta-heading">
              Enrol in {course.title} today
            </h3>
          </div>
          <div className="course-bottom-cta-actions">
            <a href="/enquiry"       className="course-btn-primary">Enquire Now →</a>
            <a href="/contact"       className="course-btn-outline">Contact Us</a>
          </div>
        </div>
      </section>

    </main>
  );
}