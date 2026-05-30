import SectionHeading from "@/components/shared/SectionHeading";
import TopperCard from "@/components/toppers/TopperCard";
import StatCard from "@/components/toppers/StatCard";
import { toppers } from "@/data/toppers";

export default function ToppersPage() {
  return (
    <main className="toppers-page">

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          HERO
      ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="hero-section">
        <div className="hero-bg-glow"     aria-hidden />
        <div className="hero-bg-pattern"  aria-hidden />

        <div className="page-container hero-inner">
          {/* Eyebrow */}
          <div className="hero-eyebrow-wrap">
            <span className="hero-eyebrow-dot" aria-hidden />
            <span className="hero-eyebrow-text">Celebrating Excellence</span>
          </div>

          {/* Heading */}
          <h1 className="hero-heading">
            Aspire{" "}
            <span className="hero-heading-accent">Wall&nbsp;of&nbsp;Fame</span>
          </h1>

          {/* Sub */}
          <p className="hero-sub">
            Honoring the outstanding achievements of our students who
            transformed dedication into success and dreams into reality.
          </p>

          {/* Scroll cue */}
          <div className="hero-scroll-cue" aria-hidden>
            <span className="hero-scroll-dot" />
          </div>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          STATS BAND
      ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="stats-section">
        <div className="page-container stats-grid">
          <StatCard value="1200+" label="Total Selections"  icon="🎯" />
          <StatCard value="42"    label="IIT Admissions"    icon="🏛️" />
          <StatCard value="18"    label="AIIMS Admissions"  icon="⚕️" />
          <StatCard value="98%"   label="Success Rate"      icon="📈" />
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          FEATURED TOPPER
      ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="featured-section">
        <div className="page-container">
          <div className="featured-card">

            {/* Decorative side strip */}
            <div className="featured-strip" aria-hidden />

            <div className="featured-layout">

              {/* ── Left: info ── */}
              <div className="featured-info">
                <span className="tag tag-primary">⭐ Featured Achiever</span>

                <h2 className="featured-name">Aryan Sharma</h2>

                <p className="featured-desc">
                  Secured AIR&nbsp;14 in JEE Advanced 2024 with an exceptional
                  score of 342/360 — a result of three years of focused
                  preparation and expert mentorship at Aspire.
                </p>

                {/* Stat grid */}
                <div className="featured-stats-grid">
                  <FeaturedStat label="All India Rank" value="AIR 14"      highlight />
                  <FeaturedStat label="Score"          value="342 / 360"   />
                  <FeaturedStat label="Exam"           value="JEE Advanced"/>
                  <FeaturedStat label="Batch Year"     value="2024"        />
                </div>

                {/* CTA inline */}
                <div className="featured-actions">
                  <a href="#achievers" className="btn-primary-sm">
                    See All Achievers
                  </a>
                  <a href="#" className="btn-ghost-sm">
                    Read Full Story →
                  </a>
                </div>
              </div>

              {/* ── Right: visual ── */}
              <div className="featured-visual-wrap">
                {/* Outer ring */}
                <div className="featured-ring">
                  {/* Card */}
                  <div className="featured-badge-card">
                    <p className="fbc-exam">JEE Advanced 2024</p>
                    <p className="fbc-rank">AIR<br />14</p>
                    <div className="fbc-divider" />
                    <p className="fbc-score">342 <span>/360</span></p>
                    <p className="fbc-note">Top 0.01 percentile nationally</p>
                  </div>
                </div>

                {/* Floating badges */}
                <div className="float-badge float-badge-tl">
                  <span>🏆</span> IIT Bombay
                </div>
                <div className="float-badge float-badge-br">
                  <span>⭐</span> State Topper
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          TOPPERS GRID
      ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="achievers-section" id="achievers">
        <div className="page-container">

          {/* Section header with decorative line */}
          <div className="section-header">
            <div className="section-header-line" aria-hidden />
            <div className="section-header-content">
              <SectionHeading
                title="Our Achievers"
                subtitle="Students who made Aspire proud."
              />
            </div>
            <div className="section-header-line" aria-hidden />
          </div>

          {/* Filter chips */}
          <div className="filter-row" role="list" aria-label="Filter by exam">
            {["All", "JEE Advanced", "JEE Mains", "NEET", "AIIMS"].map((f) => (
              <button key={f} className={`filter-chip${f === "All" ? " filter-chip-active" : ""}`}>
                {f}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="toppers-grid">
            {toppers.map((topper) => (
              <TopperCard key={topper.id} topper={topper} />
            ))}
          </div>

          {/* Load more */}
          <div className="load-more-wrap">
            <button className="btn-outline">Load More Achievers</button>
          </div>

        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          CTA
      ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="cta-section">
        <div className="page-container">
          <div className="cta-card">
            <div className="cta-bg-glow"    aria-hidden />
            <div className="cta-bg-circles" aria-hidden />

            <div className="cta-inner">
              <span className="tag tag-light">Start Your Journey</span>

              <h2 className="cta-heading">
                Your name could be<br className="hidden sm:block" /> on this wall.
              </h2>

              <p className="cta-sub">
                Join Aspire and begin your journey towards academic excellence
                with expert mentorship and structured learning.
              </p>

              <div className="cta-actions">
                <button className="cta-btn-main">Apply for Admission</button>
                <button className="cta-btn-outline">Download Brochure</button>
              </div>

              {/* Trust bar */}
              <div className="cta-trust">
                <span>✓ Free counselling</span>
                <span>✓ Scholarship available</span>
                <span>✓ Flexible batches</span>
              </div>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}

/* ── FeaturedStat ─────────────────────────────────── */
function FeaturedStat({
  label,
  value,
  highlight = false,
}: {
  label: string;
  value: string;
  highlight?: boolean;
}) {
  return (
    <div className={`fstat-pill${highlight ? " fstat-pill-highlight" : ""}`}>
      <p className="fstat-label">{label}</p>
      <p className="fstat-value">{value}</p>
    </div>
  );
}