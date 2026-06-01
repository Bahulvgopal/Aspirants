"use client";

import { useEffect, useRef, useState } from "react";
import FadeUp from "../shared/FadeUp";

const stats = [
  { value: "2002", label: "Established" },
  { value: "1000+", label: "Students" },
  { value: "50+", label: "Years Vision" },
  { value: "100%", label: "Future Focused" },
];

function parseValue(raw: string): { number: number; suffix: string } {
  const match = raw.match(/^(\d+)(.*)$/);
  if (!match) return { number: 0, suffix: raw };
  return { number: parseInt(match[1], 10), suffix: match[2] };
}

function AnimatedNumber({ value, inView }: { value: string; inView: boolean }) {
  const { number, suffix } = parseValue(value);
  const [display, setDisplay] = useState(0);
  const rafRef = useRef<number | null>(null);
  const startRef = useRef<number | null>(null);
  const duration = 1800;

  useEffect(() => {
    if (!inView) return;
    startRef.current = null;

    const animate = (timestamp: number) => {
      if (!startRef.current) startRef.current = timestamp;
      const elapsed = timestamp - startRef.current;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(Math.floor(eased * number));
      if (progress < 1) {
        rafRef.current = requestAnimationFrame(animate);
      } else {
        setDisplay(number);
      }
    };

    rafRef.current = requestAnimationFrame(animate);
    return () => { if (rafRef.current) cancelAnimationFrame(rafRef.current); };
  }, [inView, number]);

  return <>{display}{suffix}</>;
}

export default function Stats() {
  const [inView, setInView] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setInView(true); observer.disconnect(); } },
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <style>{`
        .stats-section {
          background: #000;
          padding: 4rem 0;
          position: relative;
          overflow: hidden;
        }

        /* Subtle red glow blobs */
        .stats-section::before {
          content: '';
          position: absolute;
          top: -80px; left: -80px;
          width: 320px; height: 320px;
          background: radial-gradient(circle, rgba(209,18,21,0.12) 0%, transparent 70%);
          pointer-events: none;
        }
        .stats-section::after {
          content: '';
          position: absolute;
          bottom: -80px; right: -80px;
          width: 320px; height: 320px;
          background: radial-gradient(circle, rgba(209,18,21,0.1) 0%, transparent 70%);
          pointer-events: none;
        }

        .stats-container {
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 2rem;
          position: relative;
          z-index: 1;
        }

        .stats-card {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          border: 1px solid rgba(209,18,21,0.25);
          border-radius: 16px;
          overflow: hidden;
          background: rgba(255,255,255,0.02);
          backdrop-filter: blur(4px);
        }

        .stats-item {
          position: relative;
          padding: 2.5rem 2rem;
          text-align: center;
          border-right: 1px solid rgba(209,18,21,0.2);
          transition: background 0.3s;
        }
        .stats-item:last-child { border-right: none; }
        .stats-item:hover { background: rgba(209,18,21,0.06); }

        /* Top accent line on hover */
        .stats-item::before {
          content: '';
          position: absolute;
          top: 0; left: 50%;
          transform: translateX(-50%) scaleX(0);
          width: 60%; height: 2px;
          background: #d11215;
          transition: transform 0.3s ease;
          border-radius: 0 0 2px 2px;
        }
        .stats-item:hover::before { transform: translateX(-50%) scaleX(1); }

        .stats-number {
          font-size: clamp(2.2rem, 3.5vw, 3rem);
          font-weight: 900;
          color: #d11215;
          line-height: 1;
          margin: 0 0 0.5rem;
          letter-spacing: -0.02em;
          font-variant-numeric: tabular-nums;
        }

        .stats-label {
          font-size: 0.75rem;
          font-weight: 600;
          color: rgba(255,255,255,0.45);
          text-transform: uppercase;
          letter-spacing: 0.12em;
          margin: 0;
        }

        /* ── Mobile ── */
        @media (max-width: 767px) {
          .stats-section  { padding: 3rem 0; }
          .stats-container { padding: 0 1rem; }

          .stats-card {
            grid-template-columns: repeat(2, 1fr);
            border-radius: 12px;
          }

          .stats-item {
            padding: 1.75rem 1rem;
            border-right: 1px solid rgba(209,18,21,0.2);
            border-bottom: 1px solid rgba(209,18,21,0.2);
          }
          .stats-item:nth-child(2)  { border-right: none; }
          .stats-item:nth-child(3),
          .stats-item:nth-child(4)  { border-bottom: none; }
          .stats-item:nth-child(4)  { border-right: none; }

          .stats-number { font-size: 2rem; }
          .stats-label  { font-size: 0.68rem; }
        }

        @media (max-width: 380px) {
          .stats-number { font-size: 1.75rem; }
        }
      `}</style>

      <section className="stats-section" ref={sectionRef}>
        <div className="stats-container">
          <div className="stats-card">
            {stats.map((item, index) => (
              <FadeUp key={item.label} delay={index * 0.1}>
                <div className="stats-item">
                  <h3 className="stats-number">
                    <AnimatedNumber value={item.value} inView={inView} />
                  </h3>
                  <p className="stats-label">{item.label}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}