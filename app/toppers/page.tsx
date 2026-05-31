// ToppersPage.tsx
"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/shared/SectionHeading";
import TopperCard from "@/components/toppers/TopperCard";
import StatCard from "@/components/toppers/StatCard";
import { toppers } from "@/data/toppers";
import Image from "next/image";

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
};

const cardVariant = {
  hidden: { opacity: 0, scale: 0.97, y: 14 },
  show: {
    opacity: 1, scale: 1, y: 0,
    transition: { duration: 0.38, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  },
};

export default function ToppersPage() {
  return (
    <main className="toppers-page">

      {/* ── HERO ── */}
      <section className="hero-section">
        <div className="hero-bg-glow"    aria-hidden />
        <div className="hero-bg-pattern" aria-hidden />

        <div className="page-container hero-inner">
          <div className="hero-eyebrow-wrap">
            <span className="hero-eyebrow-dot" aria-hidden />
            <span className="hero-eyebrow-text">Celebrating Excellence</span>
          </div>

          <h1 className="hero-heading">
            Aspire{" "}
            <span className="hero-heading-accent">Wall&nbsp;of&nbsp;Fame</span>
          </h1>

          <p className="hero-sub">
            Honoring the outstanding achievements of our students who
            transformed dedication into success and dreams into reality.
          </p>
        </div>
      </section>

      {/* ── STATS BAND ── */}
      <section className="stats-section">
        <div className="page-container stats-grid">
          <StatCard value="1200+" label="Total Selections" />
          
          <StatCard value="18"    label="Full A+" />
          <StatCard value="98%"   label="Success Rate"     />
        </div>
      </section>

      {/* ── FEATURED TOPPER ── */}
      <section className="featured-section">
        <div className="page-container">
          <div className="featured-card">
            <div className="featured-strip" aria-hidden />

            <div className="featured-layout">
              <div className="featured-info">
                <span className="tag tag-primary">Year Topper</span>
                <h2 className="featured-name">Aryan Sharma</h2>
                <p className="featured-desc">
                  Secured AIR&nbsp;14 in JEE Advanced 2024 with an exceptional
                  score of 342/360 — a result of three years of focused
                  preparation and expert mentorship at Aspire.
                </p>

                <div className="featured-stats-grid">
                  <FeaturedStat label="School" value="GHSS Elampa"       highlight />
                  <FeaturedStat label="Score"          value="342 / 360"    />
                  <FeaturedStat label="Exam"           value="12 th" />
                  <FeaturedStat label="Batch Year"     value="2024"         />
                </div>

                <div className="featured-actions">
                  <a href="#achievers" className="btn-primary-sm">See All Achievers</a>
                </div>
              </div>

              <div className="featured-visual-wrap">
  <div className="featured-student-image">
    <Image
      src="/toppers/student1.jpg"
      alt="Aryan Sharma"
      fill
      priority
      className="featured-img"
    />
  </div>

  {/* <div className="topper-badge text-white">
  TOPPER
</div> */}

</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── ACHIEVERS GRID ── */}
      <section className="achievers-section" id="achievers">
        <div className="page-container">

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

          {/* Grid — all toppers, no filter */}
          <motion.div
            className="toppers-grid"
            variants={stagger}
            initial="hidden"
            animate="show"
          >
            {toppers.map((topper) => (
              <motion.div
                key={topper.id}
                variants={cardVariant}
              >
                <TopperCard topper={topper} />
              </motion.div>
            ))}
          </motion.div>

        </div>
      </section>

    </main>
  );
}

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