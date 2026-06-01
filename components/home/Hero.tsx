"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

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
    <>
      <style>{`
        .hero {
          position: relative;
          background: #fff;
          overflow: hidden;
        }

        /* ── Background decorations ── */
        .hero-bg-blob {
          position: absolute;
          border-radius: 50%;
          filter: blur(80px);
          pointer-events: none;
          z-index: 0;
        }
        .hero-bg-blob-1 {
          width: 500px; height: 500px;
          background: rgba(209,18,21,0.06);
          top: -100px; right: -100px;
        }
        .hero-bg-blob-2 {
          width: 350px; height: 350px;
          background: rgba(209,18,21,0.04);
          bottom: 0; left: -80px;
        }
        .hero-bg-grid {
          position: absolute; inset: 0;
          background-image:
            linear-gradient(rgba(0,0,0,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,0,0,0.04) 1px, transparent 1px);
          background-size: 48px 48px;
          pointer-events: none; z-index: 0;
        }
        .hero-bg-hline {
          position: absolute;
          left: 50%; top: 0; bottom: 0;
          width: 1px;
          background: rgba(0,0,0,0.04);
          pointer-events: none; z-index: 0;
        }

        /* ── Layout ── */
        .container-custom { max-width: 1280px; margin: 0 auto; padding: 0 2rem; }
        .hero-layout {
          position: relative; z-index: 1;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2rem;
          align-items: center;
          padding-top: 5rem;
          padding-bottom: 2rem;
          min-height: 560px;
        }

        /* ── Left ── */
        .hero-left { padding-bottom: 3rem; }

        .hero-eyebrow {
          display: inline-flex; align-items: center; gap: 8px;
          font-size: 0.72rem; font-weight: 600;
          letter-spacing: 0.12em; text-transform: uppercase;
          color: #d11215; margin-bottom: 1.25rem;
        }
        .hero-eyebrow-pulse {
          width: 7px; height: 7px; border-radius: 50%;
          background: #d11215;
          animation: pulse-dot 2s ease-in-out infinite;
          flex-shrink: 0;
        }
        @keyframes pulse-dot {
          0%,100% { box-shadow: 0 0 0 0 rgba(209,18,21,0.5); }
          50%      { box-shadow: 0 0 0 6px rgba(209,18,21,0); }
        }
        .hero-eyebrow-divider { color: rgba(0,0,0,0.25); }

        .hero-heading {
          font-size: clamp(2.6rem, 5vw, 4.4rem);
          font-weight: 900;
          line-height: 1.0;
          color: #111;
          margin: 0 0 1.25rem;
          letter-spacing: -0.02em;
        }
        .hero-heading-line        { display: block; }
        .hero-heading-line--accent { color: #d11215; }
        .hero-heading-line--offset  { padding-left: 1.5rem; }
        .hero-heading-line--offset2 { padding-left: 3rem; }

        .hero-desc {
          font-size: clamp(0.88rem, 1.4vw, 1rem);
          color: rgba(0,0,0,0.52);
          line-height: 1.7;
          max-width: 440px;
          margin: 0 0 2rem;
        }

        /* ── CTAs ── */
        .hero-ctas { display: flex; gap: 14px; align-items: center; flex-wrap: wrap; }

        .hero-cta-primary {
          display: inline-flex; align-items: center; gap: 8px;
          background: #d11215; color: #fff;
          font-size: 0.88rem; font-weight: 600;
          padding: 12px 26px; border-radius: 6px;
          text-decoration: none; border: 2px solid #d11215;
          transition: background 0.2s, color 0.2s, transform 0.2s;
        }
        .hero-cta-primary:hover { background: transparent; color: #d11215; transform: translateY(-2px); }

        .hero-cta-secondary {
          display: inline-flex; align-items: center; gap: 6px;
          background: transparent; color: #111;
          font-size: 0.88rem; font-weight: 500;
          padding: 12px 26px; border-radius: 6px;
          text-decoration: none; border: 2px solid rgba(0,0,0,0.18);
          transition: border-color 0.2s, background 0.2s;
        }
        .hero-cta-secondary:hover { border-color: #111; background: rgba(0,0,0,0.04); }

        /* ── Right ── */
        .hero-right {
          position: relative;
          display: flex; justify-content: center; align-items: flex-end;
          overflow: visible;
        }

        /* Frame lines */
        .hero-img-frame { position: absolute; inset: 0; pointer-events: none; }
        .hero-img-frame-tl {
          position: absolute; top: 12px; left: 12px;
          width: 48px; height: 48px;
          border-top: 2px solid rgba(209,18,21,0.35);
          border-left: 2px solid rgba(209,18,21,0.35);
          border-radius: 2px;
        }
        .hero-img-frame-br {
          position: absolute; bottom: 12px; right: 12px;
          width: 48px; height: 48px;
          border-bottom: 2px solid rgba(209,18,21,0.35);
          border-right: 2px solid rgba(209,18,21,0.35);
          border-radius: 2px;
        }

        /* Floating badges */
        .hero-float-badge {
          position: absolute; z-index: 4;
          background: #fff;
          border: 1px solid rgba(0,0,0,0.08);
          border-radius: 12px;
          padding: 10px 14px;
          box-shadow: 0 6px 24px rgba(0,0,0,0.1);
          display: flex; align-items: center; gap: 10px;
        }
        .hero-float-badge-top    { top: 10%; right: -6%; }
        .hero-float-badge-bottom { bottom: 18%; left: -8%; }

        .hero-float-badge-icon { font-size: 1.4rem; flex-shrink: 0; }
        .hero-float-badge-title {
          font-size: 0.8rem; font-weight: 700; color: #111; margin: 0;
        }
        .hero-float-badge-sub {
          font-size: 0.65rem; color: rgba(0,0,0,0.45);
          margin: 2px 0 0; white-space: nowrap;
        }

        .hero-exam-tags { display: flex; gap: 5px; flex-wrap: wrap; margin-top: 6px; }
        .hero-exam-tag {
          background: #d11215; color: #fff;
          font-size: 0.65rem; font-weight: 700;
          padding: 2px 8px; border-radius: 4px;
          letter-spacing: 0.04em;
        }

        /* Image */
        .hero-img-wrap { position: relative; z-index: 2; width: min(380px, 90%); }
        .hero-img-glow {
          position: absolute;
          bottom: -20px; left: 50%;
          transform: translateX(-50%);
          width: 70%; height: 60px;
          background: rgba(209,18,21,0.15);
          filter: blur(24px);
          border-radius: 50%;
          z-index: -1;
        }
        .hero-img {
          width: 100%; height: auto; display: block;
          object-fit: cover; object-position: top center;
          filter: drop-shadow(0 20px 40px rgba(0,0,0,0.15));
        }

        /* ── Mobile ── */
        @media (max-width: 767px) {
          .hero-layout {
            grid-template-columns: 1fr;
            padding-top: 2.5rem;
            min-height: unset;
            gap: 2rem;
          }
          .hero-right { order: -1; }
          .hero-left  { order: 1; padding-bottom: 1.5rem; text-align: center; }
          .hero-eyebrow { justify-content: center; }
          .hero-desc    { max-width: 100%; margin-left: auto; margin-right: auto; }
          .hero-ctas    { justify-content: center; }
          .hero-heading-line--offset,
          .hero-heading-line--offset2 { padding-left: 0; }

          .hero-right {
            margin: 0 auto;
            width: calc(100% - 80px);
            max-width: 300px;
          }
          .hero-float-badge-top    { top: 5%;    right: -38px; }
          .hero-float-badge-bottom { bottom: 15%; left: -38px; }
          .hero-float-badge { padding: 7px 10px; gap: 7px; border-radius: 9px; }
          .hero-float-badge-icon { font-size: 1.1rem; }
          .hero-float-badge-title { font-size: 0.72rem; }
          .hero-float-badge-sub   { font-size: 0.58rem; }
          .hero-exam-tag { font-size: 0.58rem; padding: 2px 6px; }
        }

        @media (max-width: 380px) {
          .hero-right { width: calc(100% - 60px); max-width: 240px; }
          .hero-float-badge-top    { right: -28px; }
          .hero-float-badge-bottom { left: -28px; }
        }
      `}</style>

      <section className="hero -mt-[5rem]">
        <div className="hero-bg" aria-hidden>
          <div className="hero-bg-blob hero-bg-blob-1" />
          <div className="hero-bg-blob hero-bg-blob-2" />
          <div className="hero-bg-grid" />
          <div className="hero-bg-hline" />
        </div>

        <div className="container-custom hero-layout">

          {/* ── LEFT ── */}
          <motion.div className="hero-left" variants={stagger} initial="hidden" animate="show">

            <motion.div variants={fadeUp} className="hero-eyebrow">
              <span className="hero-eyebrow-pulse" aria-hidden />
              <span>Admissions Open</span>
              <span className="hero-eyebrow-divider" aria-hidden>|</span>
              <span>Batch 2026</span>
            </motion.div>

            <motion.h1 variants={fadeUp} className="hero-heading">
              <span className="hero-heading-line hero-heading-line--accent">Smart</span>
              <span className="hero-heading-line">Learning.</span>
              <span className="hero-heading-line hero-heading-line--offset">Elite</span>
              <span className="hero-heading-line">Coaching.</span>
              <span className="hero-heading-line hero-heading-line--accent hero-heading-line--offset2">Future Ready.</span>
            </motion.h1>

            <motion.p variants={fadeUp} className="hero-desc">
              Aspire Tuition Centre helps students achieve academic excellence
              through structured mentoring, science learning, coding exposure
              and result-oriented education.
            </motion.p>

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

          {/* ── RIGHT ── */}
          <motion.div className="hero-right" variants={fadeIn} initial="hidden" animate="show">

            <div className="hero-img-frame" aria-hidden>
              <div className="hero-img-frame-tl" />
              <div className="hero-img-frame-br" />
            </div>

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

            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="hero-img-wrap"
            >
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

            <motion.div
              className="hero-float-badge hero-float-badge-bottom"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.9, duration: 0.5 }}
            >
              <div>
                <p className="hero-float-badge-sub" style={{ marginTop: 0 }}>Exams we prepare for</p>
                <div className="hero-exam-tags">
                  {["JEE", "NEET", "CBSE", "KEAM"].map((tag) => (
                    <span key={tag} className="hero-exam-tag">{tag}</span>
                  ))}
                </div>
              </div>
            </motion.div>

          </motion.div>

        </div>
      </section>
    </>
  );
}