"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

/* ── animation variants ──────────────────────────── */
const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show:   { opacity: 1, y: 0 },
};

const stagger = {
  hidden: {},
  show:   { transition: { staggerChildren: 0.11, delayChildren: 0.05 } },
};

const fadeIn = {
  hidden: { opacity: 0 },
  show:   { opacity: 1, transition: { duration: 0.6 } },
};

export default function Hero() {
  return (
    <section className="hero">
      {/* ── background layer ─────────────────────── */}
      <div className="hero-bg" aria-hidden>
        <div className="hero-bg-blob hero-bg-blob-1" />
        <div className="hero-bg-blob hero-bg-blob-2" />
        <div className="hero-bg-grid" />
        {/* vertical rule — editorial accent */}
        <div className="hero-bg-hline" />
      </div>

      <div className="container-custom hero-layout">

        {/* ══════════════════════════════════════════
            LEFT COLUMN
        ══════════════════════════════════════════ */}
        <motion.div
          className="hero-left"
          variants={stagger}
          initial="hidden"
          animate="show"
        >
          {/* Eyebrow */}
          <motion.div variants={fadeUp} className="hero-eyebrow">
            <span className="hero-eyebrow-pulse" aria-hidden />
            <span>Admissions Open</span>
            <span className="hero-eyebrow-divider" aria-hidden>|</span>
            <span>Batch 2026</span>
          </motion.div>

          {/* Headline — staggered word reveal */}
          <motion.h1 variants={fadeUp} className="hero-heading">
            <span className="hero-heading-line hero-heading-line--accent">
              Smart
            </span>
            <span className="hero-heading-line">Learning.</span>
            <span className="hero-heading-line hero-heading-line--offset">
              Elite
            </span>
            <span className="hero-heading-line">Coaching.</span>
            <span className="hero-heading-line hero-heading-line--accent hero-heading-line--offset2">
              Future Ready.
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p variants={fadeUp} className="hero-desc">
            Aspire Tuition Centre helps students achieve academic excellence
            through structured mentoring, science learning, coding exposure
            and result-oriented education.
          </motion.p>

          {/* CTAs */}
          <motion.div variants={fadeUp} className="hero-ctas">
            <Link href="/courses" className="hero-cta-primary">
              <span>Explore Courses</span>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
            <Link href="/enquiry" className="hero-cta-secondary">
              Admission Enquiry
            </Link>
          </motion.div>

        
        </motion.div>

        {/* ══════════════════════════════════════════
            RIGHT COLUMN — image
        ══════════════════════════════════════════ */}
        <motion.div
          className="hero-right"
          variants={fadeIn}
          initial="hidden"
          animate="show"
        >
          {/* Decorative frame lines */}
          <div className="hero-img-frame" aria-hidden>
            <div className="hero-img-frame-tl" />
            <div className="hero-img-frame-br" />
          </div>

          {/* Floating admission badge */}
          <motion.div
            className="hero-float-badge hero-float-badge-top"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.7, duration: 0.5 }}
          >
            <span className="hero-float-badge-icon">🏆</span>
            <div>
              <p className="hero-float-badge-title">100% Success Rate</p>
              <p className="hero-float-badge-sub">Last 3 years combined</p>
            </div>
          </motion.div>

          {/* Main image — floating */}
          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="hero-img-wrap"
          >
            {/* Glow behind image */}
            <div className="hero-img-glow" aria-hidden />

            <Image
              src="/images/W.jpeg"
              alt="Aspire student studying"
              width={480}
              height={600}
              priority
              className="hero-img"
            />
          </motion.div>

          {/* Floating exam tags */}
          <motion.div
            className="hero-float-badge hero-float-badge-bottom"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.9, duration: 0.5 }}
          >
             <p className="hero-float-badge-sub" style={{ marginTop: 6 }}>Exams we prepare for</p>
            <div className="hero-exam-tags">
              {["JEE", "NEET", "CBSE", "KEAM"].map((tag) => (
                <span key={tag} className="hero-exam-tag">{tag}</span>
              ))}
            </div>
           
          </motion.div>

        </motion.div>

      </div>
      
    </section>
  );
}