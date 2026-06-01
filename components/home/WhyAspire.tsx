import Link from "next/link";
import Image from "next/image";
import FadeUp from "../shared/FadeUp";

const features = [
  {
    icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
        <rect x="1" y="1" width="34" height="34" rx="8" fill="#fff1f1" stroke="#fdd" strokeWidth="1"/>
        <circle cx="18" cy="13" r="5" stroke="#d11215" strokeWidth="1.8"/>
        <path d="M8 30c0-5.523 4.477-10 10-10s10 4.477 10 10" stroke="#d11215" strokeWidth="1.8" strokeLinecap="round"/>
        <path d="M25 10l2.5 1.5-2.5 1.5" stroke="#d11215" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: "Expert Faculty",
    description: "Experienced & dedicated mentors",
  },
  {
    icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
        <rect x="1" y="1" width="34" height="34" rx="8" fill="#fff1f1" stroke="#fdd" strokeWidth="1"/>
        <rect x="7" y="9" width="22" height="15" rx="2" stroke="#d11215" strokeWidth="1.8"/>
        <path d="M13 28h10M18 24v4" stroke="#d11215" strokeWidth="1.8" strokeLinecap="round"/>
        <path d="M11 14h14M11 18h9" stroke="#d11215" strokeWidth="1.6" strokeLinecap="round"/>
      </svg>
    ),
    title: "Smart Classrooms",
    description: "Technology-driven modern classrooms",
  },
  {
    icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
        <rect x="1" y="1" width="34" height="34" rx="8" fill="#fff1f1" stroke="#fdd" strokeWidth="1"/>
        <path d="M18 6l2.5 5 5.5.8-4 3.9.95 5.5L18 19l-4.95 2.2.95-5.5-4-3.9 5.5-.8L18 6z" stroke="#d11215" strokeWidth="1.8" strokeLinejoin="round"/>
        <path d="M12 26l-3 4M24 26l3 4M18 26v4" stroke="#d11215" strokeWidth="1.6" strokeLinecap="round"/>
      </svg>
    ),
    title: "Career Guidance",
    description: "Personalized counseling for a brighter future",
  },
  {
    icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
        <rect x="1" y="1" width="34" height="34" rx="8" fill="#fff1f1" stroke="#fdd" strokeWidth="1"/>
        <circle cx="18" cy="18" r="10" stroke="#d11215" strokeWidth="1.8"/>
        <path d="M18 11v7l4 2.5" stroke="#d11215" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="18" cy="18" r="1.5" fill="#d11215"/>
      </svg>
    ),
    title: "Competitive Coaching",
    description: "IIT-JEE, NEET, CET & other exams",
  },
  {
    icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
        <rect x="1" y="1" width="34" height="34" rx="8" fill="#fff1f1" stroke="#fdd" strokeWidth="1"/>
        <rect x="7" y="9" width="22" height="16" rx="2" stroke="#d11215" strokeWidth="1.8"/>
        <path d="M13 29h10" stroke="#d11215" strokeWidth="1.8" strokeLinecap="round"/>
        <path d="M14 18l3 3 6-6" stroke="#d11215" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: "Digital Learning",
    description: "Online resources & smart platform",
  },
  {
    icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
        <rect x="1" y="1" width="34" height="34" rx="8" fill="#fff1f1" stroke="#fdd" strokeWidth="1"/>
        <circle cx="15" cy="13" r="4.5" stroke="#d11215" strokeWidth="1.8"/>
        <path d="M6 30c0-4.97 4.03-9 9-9s9 4.03 9 9" stroke="#d11215" strokeWidth="1.8" strokeLinecap="round"/>
        <path d="M26 10h4M28 8v4" stroke="#d11215" strokeWidth="1.8" strokeLinecap="round"/>
      </svg>
    ),
    title: "Individual Support",
    description: "Focused attention on every student",
  },
];

export default function WhyAspire() {
  return (
    <>
      <style>{`
        .wa-section {
          width: 100%;
          background: #fff;
          padding: 5rem 0;
          position: relative;
          overflow: hidden;
        }

        /* Faint red blobs */
        .wa-section::before {
          content: '';
          position: absolute;
          top: -100px; right: -100px;
          width: 360px; height: 360px;
          background: radial-gradient(circle, rgba(209,18,21,0.05) 0%, transparent 70%);
          pointer-events: none;
        }
        .wa-section::after {
          content: '';
          position: absolute;
          bottom: -80px; left: -80px;
          width: 300px; height: 300px;
          background: radial-gradient(circle, rgba(209,18,21,0.04) 0%, transparent 70%);
          pointer-events: none;
        }

        .wa-container {
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 2rem;
          position: relative;
          z-index: 1;
        }

        /* ── Centered heading ── */
        .wa-header {
          text-align: center;
          margin-bottom: 3rem;
        }
        .wa-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          font-size: 0.65rem;
          font-weight: 700;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: #d11215;
          margin-bottom: 0.75rem;
        }
        .wa-eyebrow-dot {
          width: 6px; height: 6px;
          border-radius: 50%;
          background: #d11215;
          animation: wa-pulse 2s ease-in-out infinite;
          flex-shrink: 0;
        }
        @keyframes wa-pulse {
          0%,100% { box-shadow: 0 0 0 0 rgba(209,18,21,0.5); }
          50%      { box-shadow: 0 0 0 6px rgba(209,18,21,0); }
        }
        .wa-heading {
          font-size: clamp(1.9rem, 3.5vw, 2.8rem);
          font-weight: 900;
          color: #111;
          line-height: 1.1;
          margin: 0 0 0.7rem;
          letter-spacing: -0.02em;
        }
        .wa-heading span { color: #d11215; }
        .wa-subtext {
          font-size: 0.9rem;
          color: rgba(0,0,0,0.48);
          max-width: 500px;
          margin: 0 auto;
          line-height: 1.65;
        }

        /* ── Main layout ── */
        .wa-inner {
          display: grid;
          grid-template-columns: 300px 1fr;
          border: 1px solid #eee;
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 4px 40px rgba(0,0,0,0.06);
        }

        /* Left image panel */
        .wa-left {
          position: relative;
          background: #111;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          padding: 2rem 1.75rem;
          min-height: 420px;
        }
        .wa-left-img {
          position: absolute !important;
          inset: 0 !important;
          object-fit: cover;
          object-position: center;
          opacity: 0.4;
        }
        .wa-left-grad {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            180deg,
            rgba(0,0,0,0.1) 0%,
            rgba(0,0,0,0.55) 45%,
            rgba(0,0,0,0.95) 100%
          );
          z-index: 1;
        }
        .wa-left-body {
          position: relative;
          z-index: 2;
        }
        .wa-left-label {
          font-size: 0.6rem;
          font-weight: 700;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: #d11215;
          margin: 0 0 0.4rem;
        }
        .wa-left-title {
          font-size: 1.55rem;
          font-weight: 800;
          color: #fff;
          line-height: 1.15;
          margin: 0 0 0.75rem;
          letter-spacing: -0.02em;
        }
        .wa-left-desc {
          font-size: 0.75rem;
          color: rgba(255,255,255,0.52);
          line-height: 1.65;
          margin: 0 0 1.4rem;
        }
        .wa-btn {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          background: #d11215;
          color: #fff;
          font-size: 0.76rem;
          font-weight: 600;
          padding: 9px 18px;
          border-radius: 6px;
          text-decoration: none;
          border: 2px solid #d11215;
          transition: background 0.18s, color 0.18s;
          width: fit-content;
        }
        .wa-btn:hover { background: transparent; color: #d11215; }

        /* Right cards grid */
        .wa-right {
          background: #fafafa;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1px;
          background-color: #e8e8e8;
        }
        .wa-card {
          background: #fff;
          padding: 1.6rem 1.4rem;
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          position: relative;
          overflow: hidden;
          transition: background 0.2s, box-shadow 0.2s;
        }
        .wa-card::before {
          content: '';
          position: absolute;
          top: 0; left: 0;
          width: 100%; height: 2px;
          background: #d11215;
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.3s ease;
        }
        .wa-card:hover { background: #fef5f5; }
        .wa-card:hover::before { transform: scaleX(1); }

        .wa-card-icon { flex-shrink: 0; }
        .wa-card-title {
          font-size: 0.88rem;
          font-weight: 700;
          color: #111;
          margin: 0;
          letter-spacing: -0.01em;
        }
        .wa-card-desc {
          font-size: 0.74rem;
          color: rgba(0,0,0,0.45);
          line-height: 1.55;
          margin: 0;
        }

        /* ── Mobile ── */
        @media (max-width: 767px) {
          .wa-section   { padding: 3.5rem 0; }
          .wa-container { padding: 0 1rem; }
          .wa-header    { margin-bottom: 2rem; }
          .wa-heading   { font-size: 1.75rem; }

          .wa-inner {
            grid-template-columns: 1fr;
            border-radius: 12px;
          }
          .wa-left  { min-height: 260px; padding: 1.75rem 1.5rem; }
          .wa-left-title { font-size: 1.3rem; }

          .wa-right {
            grid-template-columns: repeat(2, 1fr);
          }
          .wa-card { padding: 1.2rem 1rem; }
          .wa-card-title { font-size: 0.82rem; }
          .wa-card-desc  { font-size: 0.7rem; }
        }

        @media (max-width: 400px) {
          .wa-right { grid-template-columns: 1fr; }
        }
      `}</style>

      <section className="wa-section">
        <div className="wa-container">

          {/* Centered header */}
          <FadeUp>
            <div className="wa-header">
              <div className="wa-eyebrow">
                <span className="wa-eyebrow-dot" aria-hidden />
                About Us
              </div>
              <h2 className="wa-heading">
                Why Choose <span>Aspire?</span>
              </h2>
              <p className="wa-subtext">
                Helping students become confident, disciplined and future-ready
                learners through excellence in education.
              </p>
            </div>
          </FadeUp>

          {/* Body */}
          <FadeUp delay={0.1}>
            <div className="wa-inner">

              {/* Left image panel */}
              <div className="wa-left">
                <Image
                  src="/images/W.jpeg"
                  alt="Aspire campus"
                  fill
                  className="wa-left-img"
                  sizes="300px"
                />
                <div className="wa-left-grad" aria-hidden />
                <div className="wa-left-body">
                  <p className="wa-left-label">Our Institute</p>
                  <h3 className="wa-left-title">Excellence Since 2002</h3>
                  <p className="wa-left-desc">
                    We provide the perfect blend of technology, infrastructure,
                    and experienced faculty to help students achieve
                    extraordinary success.
                  </p>
                  <Link href="/about" className="wa-btn">
                    Learn More About Us
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <path d="M2 6h8M7 3l3 3-3 3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </Link>
                </div>
              </div>

              {/* Cards */}
              <div className="wa-right">
                {features.map((f) => (
                  <div key={f.title} className="wa-card">
                    <div className="wa-card-icon">{f.icon}</div>
                    <p className="wa-card-title">{f.title}</p>
                    <p className="wa-card-desc">{f.description}</p>
                  </div>
                ))}
              </div>

            </div>
          </FadeUp>

        </div>
      </section>
    </>
  );
}