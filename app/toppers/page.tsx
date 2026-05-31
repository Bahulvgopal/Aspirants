// ToppersPage.tsx
"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionHeading from "@/components/shared/SectionHeading";
import TopperCard from "@/components/toppers/TopperCard";
import StatCard from "@/components/toppers/StatCard";
import { toppers } from "@/data/toppers";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1, y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  },
};

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
  exit: { opacity: 0, scale: 0.95, y: -8, transition: { duration: 0.2 } },
};

// Derive filter list from actual data
const FILTERS = ["All", ...Array.from(new Set(toppers.map((t) => t.exam)))];

export default function ToppersPage() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filtered = useMemo(
    () => activeFilter === "All" ? toppers : toppers.filter((t) => t.exam === activeFilter),
    [activeFilter]
  );

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
          <StatCard value="42"    label="IIT Admissions"   />
          <StatCard value="18"    label="AIIMS Admissions" />
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
                <span className="tag tag-primary"> Featured Achiever</span>
                <h2 className="featured-name">Aryan Sharma</h2>
                <p className="featured-desc">
                  Secured AIR&nbsp;14 in JEE Advanced 2024 with an exceptional
                  score of 342/360 — a result of three years of focused
                  preparation and expert mentorship at Aspire.
                </p>

                <div className="featured-stats-grid">
                  <FeaturedStat label="All India Rank" value="AIR 14"       highlight />
                  <FeaturedStat label="Score"          value="342 / 360"    />
                  <FeaturedStat label="Exam"           value="JEE Advanced" />
                  <FeaturedStat label="Batch Year"     value="2024"         />
                </div>

                <div className="featured-actions">
                  <a href="#achievers" className="btn-primary-sm">See All Achievers</a>
                  <a href="#"          className="btn-ghost-sm">Read Full Story →</a>
                </div>
              </div>

              <div className="featured-visual-wrap">
                <div className="featured-ring">
                  <div className="featured-badge-card">
                    <p className="fbc-exam">JEE Advanced 2024</p>
                    <p className="fbc-rank">AIR<br />14</p>
                    <div className="fbc-divider" />
                    <p className="fbc-score">342 <span>/360</span></p>
                    <p className="fbc-note">Top 0.01 percentile nationally</p>
                  </div>
                </div>
                <div className="float-badge float-badge-tl"> IIT Bombay</div>
                <div className="float-badge float-badge-br"> State Topper</div>
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

          {/* Filter chips — wired up */}
          <div className="filter-row" role="group" aria-label="Filter by exam">
            {FILTERS.map((f) => (
              <button
                key={f}
                onClick={() => setActiveFilter(f)}
                aria-pressed={activeFilter === f}
                className={`filter-chip${activeFilter === f ? " filter-chip-active" : ""}`}
              >
                {f}
                {/* Show count per filter */}
                <span className="filter-chip-count">
                  {f === "All"
                    ? toppers.length
                    : toppers.filter((t) => t.exam === f).length}
                </span>
              </button>
            ))}
          </div>

          {/* Results count */}
          <motion.p
            key={activeFilter}
            className="filter-result-count"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            Showing {filtered.length} {filtered.length === 1 ? "achiever" : "achievers"}
            {activeFilter !== "All" && ` in ${activeFilter}`}
          </motion.p>

          {/* Grid */}
          <motion.div
            className="toppers-grid"
            variants={stagger}
            initial="hidden"
            animate="show"
          >
            <AnimatePresence mode="popLayout">
              {filtered.map((topper) => (
                <motion.div
                  key={topper.id}
                  variants={cardVariant}
                  initial="hidden"
                  animate="show"
                  exit="exit"
                  layout
                >
                  <TopperCard topper={topper} />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* Empty state */}
          {filtered.length === 0 && (
            <motion.p
              className="filter-empty"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              No achievers found for &ldquo;{activeFilter}&rdquo;.
            </motion.p>
          )}

          
        </div>
      </section>

      {/* ── CTA ── */}
     

      <style>{`
        /* Filter chips */
        .filter-chip {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 12px;
          font-weight: 500;
          letter-spacing: 0.04em;
          padding: 6px 14px;
          border-radius: 999px;
          border: 1px solid #ddd;
          background: transparent;
          color: #666;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .filter-chip:hover {
          border-color: #8B1E2D;
          color: #8B1E2D;
        }

        .filter-chip-active {
          background: #8B1E2D;
          border-color: #8B1E2D;
          color: #fff;
        }

        .filter-chip-count {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-width: 18px;
          height: 18px;
          padding: 0 5px;
          border-radius: 999px;
          font-size: 10px;
          font-weight: 700;
          background: rgba(0,0,0,0.08);
          color: inherit;
          line-height: 1;
        }

        .filter-chip-active .filter-chip-count {
          background: rgba(255,255,255,0.2);
          color: #fff;
        }

        /* Result count */
        .filter-result-count {
          font-size: 12px;
          color: #aaa;
          font-weight: 400;
          letter-spacing: 0.04em;
          margin: 0.75rem 0 1.5rem;
        }

        /* Empty state */
        .filter-empty {
          text-align: center;
          color: #bbb;
          font-size: 14px;
          padding: 3rem 0;
        }
      `}</style>
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