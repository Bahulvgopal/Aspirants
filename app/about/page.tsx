"use client";

import SectionHeading from "@/components/shared/SectionHeading";
import Image from "next/image";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } },
};

const stagger = {
  hidden: {},
  show:   { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
};

const PILLARS = [
  { icon: "🎯", title: "Conceptual Learning",   desc: "Deep understanding over rote memorisation." },
  { icon: "🧭", title: "Structured Mentoring",  desc: "Personalised guidance at every stage."      },
  { icon: "🔬", title: "Science Programmes",    desc: "Hands-on exposure to core sciences."        },
  { icon: "💻", title: "Coding Exposure",       desc: "Future-ready digital and tech literacy."    },
];

export default function AboutPage() {
  return (
    <section className="about-section section-padding">
      <div className="container-custom">

        {/* ── Section heading ───────────────────── */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
        >
          <SectionHeading
            title="About Aspire"
            subtitle="Building future-ready learners through structured academic excellence."
          />
        </motion.div>

        {/* ── Main split ────────────────────────── */}
        <motion.div
          className="about-layout"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={stagger}
        >

          {/* ── Left — text ── */}
          <div className="about-text-col">

            {/* Eyebrow */}
            <motion.div variants={fadeUp} className="about-eyebrow">
              <span className="about-eyebrow-dot" aria-hidden />
              <span>Est. 2020 · Kollam, Kerala</span>
            </motion.div>

            {/* Heading */}
            <motion.h2 variants={fadeUp} className="about-heading">
              Aspire{" "}
              <span className="about-heading-accent">Tuition Centre</span>
            </motion.h2>

            {/* Body paragraphs */}
            <motion.p variants={fadeUp} className="about-body">
              Aspire Tuition Centre focuses on conceptual learning, structured
              mentoring and academic excellence. Through smart learning systems,
              science programmes, coding exposure and personalised guidance, we
              help students become confident, analytical learners.
            </motion.p>

            <motion.p variants={fadeUp} className="about-body">
              Our mission is to create disciplined, future-ready students who
              excel in academics and carry those skills well beyond the classroom.
            </motion.p>

            {/* Pillars grid */}
            <motion.div variants={fadeUp} className="about-pillars">
              {PILLARS.map(({ icon, title, desc }) => (
                <div key={title} className="about-pillar">
                  <span className="about-pillar-icon" aria-hidden>{icon}</span>
                  <div>
                    <p className="about-pillar-title">{title}</p>
                    <p className="about-pillar-desc">{desc}</p>
                  </div>
                </div>
              ))}
            </motion.div>

            {/* CTA row */}
            <motion.div variants={fadeUp} className="about-actions">
              <a href="/enquiry" className="about-btn-primary">
                <span>Enquire Now</span>
                <svg width="15" height="15" viewBox="0 0 16 16" fill="none" aria-hidden>
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.75"
                    strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
              <a href="/courses" className="about-btn-ghost">
                View Courses →
              </a>
            </motion.div>

          </div>

          {/* ── Right — image ── */}
          <motion.div variants={fadeUp} className="about-image-col">

            {/* Decorative frame */}
            <div className="about-img-frame-tl" aria-hidden />
            <div className="about-img-frame-br" aria-hidden />

            {/* Background glow */}
            <div className="about-img-glow" aria-hidden />

            {/* Image */}
            <div className="about-img-wrap">
              <Image
                src="/images/W.jpeg"
                alt="Students at Aspire Tuition Centre"
                width={700}
                height={500}
                className="about-img"
              />

              {/* Floating stat card */}
              <div className="about-float-card">
                <div className="about-float-card-row">
                  <span className="about-float-card-value">98%</span>
                  <span className="about-float-card-badge">Success Rate</span>
                </div>
                <div className="about-float-card-bar-track" aria-hidden>
                  <div className="about-float-card-bar-fill" />
                </div>
                <p className="about-float-card-note">Across all programmes · 2023–24</p>
              </div>
            </div>

            {/* Side stat strip */}
            <div className="about-side-stats">
              {[
                { value: "1000+", label: "Students" },
                { value: "7+",    label: "Programmes" },
              ].map(({ value, label }) => (
                <div key={label} className="about-side-stat">
                  <span className="about-side-stat-value">{value}</span>
                  <span className="about-side-stat-label">{label}</span>
                </div>
              ))}
            </div>

          </motion.div>

        </motion.div>

      </div>
    </section>
  );
}