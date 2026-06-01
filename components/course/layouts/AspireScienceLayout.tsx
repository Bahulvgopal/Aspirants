"use client"
import { FaCheckCircle, FaAtom, FaFlask, FaDna, FaMicroscope } from "react-icons/fa";
import { FaSquareRootVariable } from "react-icons/fa6";
import { GiAtom } from "react-icons/gi";
import { useState } from "react";

const C = {
  dark:    "#071c0e",
  deep:    "#0a2e14",
  mid:     "#145c28",
  light:   "#1e7a38",
  bright:  "#25a349",
  accent:  "#5ddc85",
  pale:    "#f0faf3",
  paler:   "#f8fdf9",
  border:  "#c8e8d2",
  text:    "#1a2e1e",
  muted:   "#4a6b52",
};

const SECTION_IMAGES = {
  physics: "https://images.unsplash.com/photo-1628595351029-c2bf17511435?w=1200&q=80&auto=format&fit=crop",
  chemistry: "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=1200&q=80&auto=format&fit=crop",
  biology: "https://images.unsplash.com/photo-1576086213369-97a306d36557?w=1200&q=80&auto=format&fit=crop",
  mathematics: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=1200&q=80&auto=format&fit=crop",
};

type Subject = {
  id: keyof typeof SECTION_IMAGES;
  title: string;
  tagline: string;
  icon: React.ReactNode;
  description: string;
  features: string[];
};

const subjects: Subject[] = [
  {
    id: "physics",
    title: "Accuratus Physics",
    tagline: "Precision. Measurement. Discovery.",
    icon: <FaAtom size={36} color="#fff" />,
    description:
      "The Physics Lab at ASPIRE supports classroom learning through structured practical sessions, helping students prepare effectively for +2 physics lab examinations and strengthen their conceptual understanding.",
    features: [
      "Dedicated training for +2 physics lab examinations",
      "Chapter-based experiments and practical sessions",
      "Focus on measurements, accuracy, and application",
      "Guided support for record work and viva preparation",
      "Hands-on experience with standard lab apparatus",
      "Safe and well-organized lab environment",
      "Strengthens understanding of core physics concepts",
    ],
  },
  {
    id: "chemistry",
    title: "Accuratus Chemistry",
    tagline: "Experiment. Observe. Understand.",
    icon: <FaFlask size={34} color="#fff" />,
    description:
      "The Chemistry Lab at ASPIRE supports classroom learning through structured practical sessions, helping students prepare effectively for +2 lab examinations and improve conceptual understanding.",
    features: [
      "Dedicated training for +2 chemistry lab examinations",
      "Chapter-based practical sessions and presentations",
      "Hands-on experiments aligned with syllabus",
      "Guided support for record work and viva preparation",
      "Safe and well-organized lab environment",
    ],
  },
  {
    id: "biology",
    title: "Accuratus Biology",
    tagline: "Observe. Classify. Comprehend.",
    icon: <FaDna size={34} color="#fff" />,
    description:
      "Zoology and Botany Labs at ASPIRE provide structured practical training to support +2 biology learning. Students strengthen their understanding of both animal and plant sciences through guided hands-on sessions backed by Accuratus Scientia, Attingal.",
    features: [
      "Dedicated training for +2 zoology and botany examinations",
      "Specimen study, herbarium preparation, and observation",
      "Microscope-based learning and identification skills",
      "Chapter-based practical sessions",
      "Guided support for concept clarity and viva preparation",
      "Focus on problem-solving and logical reasoning",
      "Safe and well-organized lab environment",
      "Backed by Accuratus Scientia, Attingal",
    ],
  },
  {
    id: "mathematics",
    title: "Accuratus Mathematics",
    tagline: "Visualize. Reason. Solve.",
    icon: <FaSquareRootVariable size={34} color="#fff" />,
    description:
      "The Maths Lab at ASPIRE supports mathematics learning through visual and interactive methods, helping students prepare effectively for +2 lab examinations while building strong analytical foundations.",
    features: [
      "Concept visualization using digital tools and graphs",
      "Interactive learning for deeper understanding",
      "Focus on problem-solving and logical reasoning",
      "Chapter-based practice and application sessions",
      "Support for improving speed and accuracy",
      "Guided sessions for step-by-step solution methods",
      "Strengthens analytical and computational skills",
    ],
  },
];

const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@600;700;800&family=Nunito:wght@400;500;600;700&display=swap');

  * { box-sizing: border-box; margin: 0; padding: 0; }

  .aspire-root {
    font-family: 'Nunito', sans-serif;
    background: #fff;
    min-height: 100vh;
    color: ${C.text};
  }

  /* HERO */
  .hero {
    background: ${C.deep};
    padding: 0;
    position: relative;
    overflow: hidden;
  }
  .hero-bg-pattern {
    position: absolute;
    inset: 0;
    background-image:
      radial-gradient(circle at 20% 50%, rgba(37,163,73,0.15) 0%, transparent 50%),
      radial-gradient(circle at 80% 20%, rgba(93,220,133,0.08) 0%, transparent 40%);
    pointer-events: none;
  }
  .hero-grid-lines {
    position: absolute;
    inset: 0;
    background-image:
      linear-gradient(rgba(93,220,133,0.04) 1px, transparent 1px),
      linear-gradient(90deg, rgba(93,220,133,0.04) 1px, transparent 1px);
    background-size: 48px 48px;
    pointer-events: none;
  }
  .hero-inner {
    position: relative;
    z-index: 2;
    max-width: 1100px;
    margin: 0 auto;
    padding: 72px 32px 64px;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
  @media (max-width: 820px) {
    .hero-inner { padding: 52px 20px 48px; }
  }
  .hero-badge {
    display: inline-flex;
    align-items: center;
    gap: 12px;
    background: rgba(93,220,133,0.1);
    border: 1px solid rgba(93,220,133,0.25);
    border-radius: 100px;
    padding: 10px 18px 10px 10px;
    margin-bottom: 28px;
  }
  .hero-badge-icon {
    width: 44px; height: 44px;
    background: ${C.mid};
    border-radius: 50%;
    display: flex; align-items: center; justify-content: center;
    flex-shrink: 0;
  }
  .hero-badge-text { line-height: 1.2; text-align: left; }
  .hero-badge-text .powered { font-size: 10px; color: rgba(255,255,255,0.45); text-transform: uppercase; letter-spacing: 2.5px; }
  .hero-badge-text .name { font-size: 16px; font-weight: 700; color: #fff; font-family: 'Nunito', sans-serif; }
  .hero-eyebrow {
    display: flex; align-items: center; justify-content: center; gap: 8px;
    margin-bottom: 12px;
  }
  .hero-eyebrow span {
    font-size: 11px; font-weight: 700; color: ${C.accent};
    text-transform: uppercase; letter-spacing: 4px;
    font-family: 'Nunito', sans-serif;
  }
  .hero-eyebrow-dot { width: 6px; height: 6px; border-radius: 50%; background: ${C.accent}; flex-shrink: 0; }
  .hero-title {
    font-family: 'Cormorant Garamond', serif;
    font-size: clamp(56px, 9vw, 96px);
    font-weight: 800;
    color: #fff;
    line-height: 0.9;
    letter-spacing: -2px;
    margin-bottom: 20px;
  }
  .hero-title span { color: ${C.accent}; }
  .hero-subtitle {
    font-size: 15px; color: rgba(255,255,255,0.6);
    line-height: 1.75; max-width: 520px; margin-bottom: 36px;
    font-family: 'Nunito', sans-serif;
  }
  .hero-pills {
    display: flex; flex-wrap: wrap; gap: 8px; justify-content: center;
  }
  .hero-pill {
    display: inline-flex; align-items: center; gap: 7px;
    background: rgba(255,255,255,0.08);
    border: 1px solid rgba(255,255,255,0.15);
    color: rgba(255,255,255,0.85);
    font-size: 13px; font-weight: 600;
    padding: 8px 16px; border-radius: 100px;
    transition: background 0.2s, border-color 0.2s;
    font-family: 'Nunito', sans-serif;
  }
  .hero-pill:hover { background: rgba(255,255,255,0.14); border-color: rgba(93,220,133,0.4); }

  /* SECTION */
  .subject-section {
    position: relative;
  }
  .subject-content {
    max-width: 1100px;
    margin: 0 auto;
    padding: 80px 32px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 80px;
    align-items: start;
  }
  @media (max-width: 820px) {
    .subject-content { grid-template-columns: 1fr; gap: 40px; padding: 56px 20px; }
    .subject-content.reverse { direction: ltr; }
  }
  .subject-content.reverse > *:first-child { order: 2; }
  .subject-content.reverse > *:last-child { order: 1; }
  @media (max-width: 820px) {
    .subject-content.reverse > *:first-child { order: unset; }
    .subject-content.reverse > *:last-child { order: unset; }
  }

  .subject-label-row {
    display: flex; align-items: center; gap: 10px; margin-bottom: 20px;
  }
  .subject-label-dot { width: 32px; height: 3px; background: ${C.bright}; border-radius: 2px; }
  .subject-label-text {
    font-size: 11px; font-weight: 700; color: ${C.bright};
    text-transform: uppercase; letter-spacing: 3.5px;
    font-family: 'Nunito', sans-serif;
  }
  .subject-icon-wrap {
    width: 64px; height: 64px;
    background: ${C.mid};
    border-radius: 18px;
    display: flex; align-items: center; justify-content: center;
    margin-bottom: 16px;
    box-shadow: 0 8px 24px rgba(20,92,40,0.3);
  }
  .subject-title {
    font-family: 'Cormorant Garamond', serif;
    font-size: clamp(28px, 4vw, 42px);
    font-weight: 700;
    color: ${C.deep};
    line-height: 1.1;
    margin-bottom: 8px;
  }
  .subject-tagline {
    font-size: 13px; color: ${C.bright};
    font-weight: 700; letter-spacing: 1px;
    margin-bottom: 20px;
    font-family: 'Nunito', sans-serif;
    text-transform: uppercase;
  }
  .subject-desc {
    font-size: 15px; color: ${C.muted};
    line-height: 1.8;
    border-left: 3px solid ${C.border};
    padding-left: 16px;
    margin-bottom: 32px;
    font-family: 'Nunito', sans-serif;
  }
  .features-label {
    font-size: 10px; font-weight: 700;
    text-transform: uppercase; letter-spacing: 3.5px;
    color: ${C.mid}; margin-bottom: 14px;
    font-family: 'Nunito', sans-serif;
  }
  .features-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 10px;
    list-style: none;
  }
  @media (max-width: 480px) {
    .features-grid { grid-template-columns: 1fr; }
  }
  .feature-item {
    display: flex; align-items: flex-start; gap: 9px;
    font-size: 13.5px; color: #3a5040; line-height: 1.55;
    background: ${C.paler};
    border: 1px solid ${C.border};
    border-radius: 10px;
    padding: 10px 12px;
    font-family: 'Nunito', sans-serif;
  }
  .feature-icon { color: ${C.bright}; margin-top: 2px; flex-shrink: 0; }

  /* IMAGE BLOCK */
  .image-block {
    position: relative;
    border-radius: 24px;
    overflow: hidden;
    aspect-ratio: 4/3;
    box-shadow: 0 24px 60px rgba(10,46,20,0.18);
  }
  .image-block img {
    width: 100%; height: 100%;
    object-fit: cover;
    display: block;
    transition: transform 0.6s ease;
  }
  .image-block:hover img { transform: scale(1.04); }
  .image-overlay {
    position: absolute;
    inset: 0;
    background: linear-gradient(to top, rgba(7,28,14,0.55) 0%, transparent 55%);
  }
  .image-caption {
    position: absolute;
    bottom: 20px; left: 20px; right: 20px;
    display: flex; align-items: center; gap: 10px;
  }
  .image-caption-icon {
    width: 36px; height: 36px;
    background: rgba(255,255,255,0.15);
    backdrop-filter: blur(8px);
    border: 1px solid rgba(255,255,255,0.25);
    border-radius: 10px;
    display: flex; align-items: center; justify-content: center;
    flex-shrink: 0;
  }
  .image-caption-text { font-size: 13px; font-weight: 700; color: #fff; line-height: 1.3; font-family: 'Nunito', sans-serif; }
  .image-caption-sub { font-size: 11px; color: rgba(255,255,255,0.6); margin-top: 1px; font-family: 'Nunito', sans-serif; }
  .image-tag {
    position: absolute;
    top: 16px; right: 16px;
    background: ${C.bright};
    color: #fff;
    font-size: 11px; font-weight: 700;
    letter-spacing: 1.5px; text-transform: uppercase;
    padding: 5px 12px;
    border-radius: 100px;
    font-family: 'Nunito', sans-serif;
  }

  /* SECTION BG ALTERNATING */
  .bg-white { background: #fff; }
  .bg-pale  { background: ${C.pale}; }

  /* DIVIDER */
  .section-divider {
    height: 1px;
    background: ${C.border};
    max-width: 1100px;
    margin: 0 auto;
  }

  /* FOOTER */
  .footer {
    background: ${C.dark};
    padding: 64px 32px;
  }
  .footer-inner {
    max-width: 1100px;
    margin: 0 auto;
  }
  .footer-top {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 24px;
    padding-bottom: 40px;
    border-bottom: 1px solid rgba(255,255,255,0.08);
    margin-bottom: 36px;
  }
  .footer-brand { display: flex; align-items: center; gap: 18px; }
  .footer-logo-circle {
    width: 64px; height: 64px;
    background: ${C.mid};
    border-radius: 50%;
    display: flex; align-items: center; justify-content: center;
    box-shadow: 0 4px 16px rgba(37,163,73,0.3);
    flex-shrink: 0;
  }
  .footer-brand-text .powered { font-size: 10px; color: ${C.accent}; text-transform: uppercase; letter-spacing: 3px; font-weight: 700; font-family: 'Nunito', sans-serif; }
  .footer-brand-text .name { font-family: 'Cormorant Garamond', serif; font-size: 30px; font-weight: 700; color: #fff; line-height: 1; margin: 4px 0; }
  .footer-brand-text .sub { font-size: 10px; color: rgba(255,255,255,0.3); text-transform: uppercase; letter-spacing: 2px; font-family: 'Nunito', sans-serif; }
  .footer-subjects {
    display: flex; flex-wrap: wrap; gap: 8px;
  }
  .footer-subject-pill {
    background: rgba(255,255,255,0.06);
    border: 1px solid rgba(255,255,255,0.1);
    color: rgba(255,255,255,0.6);
    font-size: 12px; font-weight: 600;
    padding: 6px 14px; border-radius: 100px;
    display: flex; align-items: center; gap: 6px;
    font-family: 'Nunito', sans-serif;
  }
  .footer-bottom {
    display: flex; align-items: center; justify-content: space-between;
    flex-wrap: wrap; gap: 16px;
  }
  .footer-bottom-title { font-size: 18px; font-weight: 700; color: #fff; font-family: 'Nunito', sans-serif; }
  .footer-bottom-sub { font-size: 13px; color: rgba(255,255,255,0.35); margin-top: 3px; font-family: 'Nunito', sans-serif; }
  .footer-copy { font-size: 12px; color: rgba(255,255,255,0.2); letter-spacing: 0.5px; font-family: 'Nunito', sans-serif; }
`;



function ImageBlock({ subject }: { subject: Subject }) {
  return (
    <div className="image-block">
      <img
        src={SECTION_IMAGES[subject.id]}
        alt={`${subject.title} lab`}
        loading="lazy"
       onError={(e) => {
  const img = e.currentTarget;
  img.style.display = "none";

  if (img.parentElement) {
    img.parentElement.style.background = C.mid;
  }
}}
      />
      <div className="image-overlay" />
      <div className="image-tag">Lab Session</div>
      <div className="image-caption">
        <div className="image-caption-icon">{subject.icon}</div>
        <div>
          <div className="image-caption-text">{subject.title}</div>
          <div className="image-caption-sub">{subject.tagline}</div>
        </div>
      </div>
    </div>
  );
}

function SubjectSection({
  subject,
  index,
}: {
  subject: Subject;
  index: number;
}) {
  const isReverse = index % 2 !== 0;
  const bg = index % 2 === 0 ? "bg-white" : "bg-pale";

  return (
    <section className={`subject-section ${bg}`}>
      <div className={`subject-content ${isReverse ? "reverse" : ""}`}>
        {/* Text Side */}
        <div>
          <div className="subject-label-row">
            <div className="subject-label-dot" />
            <span className="subject-label-text">Science Lab</span>
          </div>
          <div className="subject-icon-wrap">{subject.icon}</div>
          <h2 className="subject-title">{subject.title}</h2>
          <p className="subject-tagline">{subject.tagline}</p>
          <p className="subject-desc">{subject.description}</p>
          <p className="features-label">Key Features</p>
          <ul className="features-grid">
            {subject.features.map((f, i) => (
              <li key={i} className="feature-item">
                <FaCheckCircle size={13} className="feature-icon" style={{ color: C.bright, marginTop: 2 }} />
                <span>{f}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Image Side */}
        <ImageBlock subject={subject} />
      </div>
    </section>
  );
}

export default function AspireSciencePage() {
  return (
    <>
      <style>{styles}</style>
      <div className="aspire-root ">
        {/* HERO */}
        <header className="hero  ">
          <div className="hero-bg-pattern " />
          <div className="hero-inner">
            <div className="hero-badge ">
              <div className="hero-badge-icon">
                <FaMicroscope size={22} color={C.accent} />
              </div>
              <div className="hero-badge-text">
                <div className="powered">Powered by</div>
                <div className="name">Accuratus Scientia</div>
              </div>
            </div>

            <div className="hero-eyebrow">
              <div className="hero-eyebrow-dot" />
              <span>Science Division</span>
            </div>

            <h1 className="hero-title">
              ASPIRE<br /><span>SCIENCE</span>
            </h1>

            <p className="hero-subtitle">
              World-class practical science education for +2 students — powered by Accuratus Scientia's cutting-edge lab infrastructure and expert mentorship.
            </p>

            <div className="hero-pills">
              {[
                { label: "Physics", icon: <FaAtom size={12} /> },
                { label: "Chemistry", icon: <FaFlask size={12} /> },
                { label: "Biology", icon: <FaDna size={12} /> },
                { label: "Mathematics", icon: <FaSquareRootVariable size={12} /> },
              ].map(s => (
                <span key={s.label} className="hero-pill">
                  {s.icon} {s.label}
                </span>
              ))}
            </div>
          </div>
        </header>

        {/* SUBJECT SECTIONS */}
        {subjects.map((s, i) => (
          <SubjectSection key={s.id} subject={s} index={i} />
        ))}

        {/* FOOTER */}
        <footer className="footer">
          <div className="footer-inner">
            <div className="footer-top">
              <div className="footer-brand">
                <div className="footer-logo-circle">
                  <FaMicroscope size={28} color="#fff" />
                </div>
                <div className="footer-brand-text">
                  <div className="powered">Powered by</div>
                  <div className="name">Accuratus Scientia</div>
                  <div className="sub">Natural Product Research &amp; Development Pvt. Ltd.</div>
                </div>
              </div>
              <div className="footer-subjects">
                {[
                  { label: "Physics", icon: <FaAtom size={11} /> },
                  { label: "Chemistry", icon: <FaFlask size={11} /> },
                  { label: "Biology", icon: <FaDna size={11} /> },
                  { label: "Mathematics", icon: <FaSquareRootVariable size={11} /> },
                ].map(s => (
                  <span key={s.label} className="footer-subject-pill">
                    {s.icon} {s.label}
                  </span>
                ))}
              </div>
            </div>
            <div className="footer-bottom">
              <div>
                <div className="footer-bottom-title">ASPIRE Science Labs</div>
                <div className="footer-bottom-sub">Structured Practical Education · Kerala, India</div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}