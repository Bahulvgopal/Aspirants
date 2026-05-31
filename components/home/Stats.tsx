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
      // ease out cubic
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
    <section className="stats-luxury section-padding" ref={sectionRef}>
      <div className="container-custom">
        <div className="stats-luxury-card">
          {stats.map((item, index) => (
            <FadeUp key={item.label} delay={index * 0.1}>
              <div className="luxury-stat">
                <h3>
                  <AnimatedNumber value={item.value} inView={inView} />
                </h3>
                <p>{item.label}</p>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}