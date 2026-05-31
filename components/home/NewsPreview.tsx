"use client";

import Link from "next/link";
import { useEffect, useState, useRef, useCallback } from "react";
import SectionHeading from "../shared/SectionHeading";
import { news } from "@/data/news";

export default function NewsPreview() {
  const [items, setItems] = useState(news);
  const [current, setCurrent] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const total = items.length;

  useEffect(() => {
    const interval = setInterval(() => setItems([...news]), 30_000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (!trackRef.current) return;
    const track = trackRef.current;
    const card = track.children[0] as HTMLElement;
    if (!card) return;
    const offset = current * (card.offsetWidth + 0);
    track.style.transform = `translateX(-${offset}px)`;
  }, [current]);

  const goTo = useCallback((idx: number) => {
    setCurrent((idx + total) % total);
  }, [total]);

  const startAuto = useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => setCurrent((p) => (p + 1) % total), 4500);
  }, [total]);

  const stopAuto = useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);
  }, []);

  useEffect(() => {
    startAuto();
    return () => stopAuto();
  }, [startAuto, stopAuto]);

  if (!items.length) return null;

  const activeItem = items[current];

  return (
    <>
      <style>{`
        /* ── Carousel wrapper ── */
        .np-outer {
          position: relative;
          border-radius: 16px;
          overflow: hidden;
          background: #0a0a0a;
          box-shadow: 0 20px 60px rgba(107,1,25,0.18), 0 4px 20px rgba(0,0,0,0.12);
        }

        /* track */
        .np-track {
          display: flex;
          transition: transform 0.75s cubic-bezier(0.4, 0, 0.2, 1);
          will-change: transform;
        }

        /* slide */
        .np-slide {
          flex: 0 0 100%;
          min-width: 0;
          position: relative;
          aspect-ratio: 16 / 7;
          overflow: hidden;
        }
        .np-slide img {
          width: 100%; height: 100%;
          object-fit: cover; display: block;
          transition: transform 6s ease;
        }
        .np-slide--active img {
          transform: scale(1.06);
        }

        /* gradient layers */
        .np-overlay-bottom {
          position: absolute; inset: 0;
          background: linear-gradient(
            to top,
            rgba(0,0,0,0.82) 0%,
            rgba(0,0,0,0.3) 40%,
            transparent 70%
          );
          pointer-events: none;
        }
        .np-overlay-left {
          position: absolute; inset: 0;
          background: linear-gradient(
            to right,
            rgba(107,1,25,0.35) 0%,
            transparent 50%
          );
          pointer-events: none;
        }

        /* caption */
        .np-caption {
          position: absolute;
          bottom: 0; left: 0; right: 0;
          padding: 28px 32px 24px;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
        .np-caption-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: #6B0119;
          color: #fff;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          padding: 4px 12px;
          border-radius: 999px;
          width: fit-content;
        }
        .np-caption-title {
          font-size: clamp(16px, 2.5vw, 22px);
          font-weight: 800;
          color: #fff;
          margin: 0;
          line-height: 1.3;
          letter-spacing: -0.02em;
          max-width: 600px;
          text-shadow: 0 2px 8px rgba(0,0,0,0.4);
        }
        .np-caption-meta {
          display: flex;
          align-items: center;
          gap: 10px;
        }
        .np-caption-date {
          font-size: 12px;
          color: rgba(255,255,255,0.6);
          font-weight: 500;
        }
        .np-caption-dot {
          width: 3px; height: 3px; border-radius: 50%;
          background: rgba(255,255,255,0.35);
        }
        .np-caption-read {
          font-size: 12px; font-weight: 600;
          color: #f9a8b4;
          text-decoration: none;
          display: flex; align-items: center; gap: 4px;
          transition: color 0.15s;
        }
        .np-caption-read:hover { color: #fff; }

        /* arrows */
        .np-arrow {
          position: absolute;
          top: 50%; transform: translateY(-50%);
          width: 40px; height: 40px; border-radius: 50%;
          background: rgba(255,255,255,0.12);
          backdrop-filter: blur(8px);
          border: 1px solid rgba(255,255,255,0.2);
          color: #fff;
          display: flex; align-items: center; justify-content: center;
          cursor: pointer; font-size: 20px; z-index: 20;
          transition: all 0.2s ease;
          line-height: 1;
        }
        .np-arrow:hover {
          background: #6B0119;
          border-color: #6B0119;
          transform: translateY(-50%) scale(1.08);
        }
        .np-arrow--l { left: 16px; }
        .np-arrow--r { right: 16px; }

        /* counter badge top-right */
        .np-counter {
          position: absolute;
          top: 14px; right: 16px;
          background: rgba(0,0,0,0.45);
          backdrop-filter: blur(6px);
          border: 1px solid rgba(255,255,255,0.15);
          border-radius: 999px;
          padding: 3px 12px;
          font-size: 11px; font-weight: 600;
          color: rgba(255,255,255,0.8);
          z-index: 20;
        }

        /* dots */
        .np-dots-row {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 7px;
          margin-top: 14px;
        }
        .np-dot {
          height: 6px; border-radius: 999px;
          border: none; cursor: pointer; padding: 0;
          transition: width 0.4s cubic-bezier(0.4,0,0.2,1), background 0.4s;
        }
        .np-dot--on  { background: #6B0119; width: 24px; }
        .np-dot--off { background: #e5e7eb; width: 6px; }
        .np-dot--off:hover { background: #d1d5db; }

        /* thumbnail strip */
        .np-thumbs {
          display: flex;
          gap: 10px;
          margin-top: 12px;
          justify-content: center;
        }
        .np-thumb {
          flex: 0 0 80px;
          height: 52px;
          border-radius: 8px;
          overflow: hidden;
          cursor: pointer;
          border: 2px solid transparent;
          transition: border-color 0.25s, opacity 0.25s, transform 0.25s;
          opacity: 0.55;
        }
        .np-thumb--active {
          border-color: #6B0119;
          opacity: 1;
          transform: scale(1.05);
        }
        .np-thumb img {
          width: 100%; height: 100%;
          object-fit: cover; display: block;
        }

        /* view all */
        .np-view-all:hover { background: #f9f0f2 !important; }

        @media (max-width: 640px) {
          .np-caption { padding: 18px 16px 16px; }
          .np-arrow { width: 32px; height: 32px; font-size: 16px; }
          .np-thumbs { display: none; }
        }
      `}</style>

      <section className="news-premium-section section-padding">
        <div className="container-custom">
          <SectionHeading
            title="Latest News & Updates"
            subtitle="Stay informed with Aspire's achievements, announcements and academic milestones."
          />

          {/* ── CAROUSEL ── */}
          <div style={{ maxWidth: 860, margin: "0 auto" }}>
            <div
              className="np-outer"
              onMouseEnter={stopAuto}
              onMouseLeave={startAuto}
            >
              {/* track */}
              <div ref={trackRef} className="np-track">
                {items.map((item, i) => (
                  <div
                    key={item.id}
                    className={`np-slide${i === current ? " np-slide--active" : ""}`}
                  >
                    {item.image && <img src={item.image} alt={item.title} />}
                    <div className="np-overlay-bottom" />
                    <div className="np-overlay-left" />

                    <div className="np-caption">
                      {item.category && (
                        <span className="np-caption-badge">
                          <span style={{ width: 5, height: 5, borderRadius: "50%", background: "#fca5a5", display: "inline-block" }} />
                          {item.category}
                        </span>
                      )}
                      <p className="np-caption-title">{item.title}</p>
                      <div className="np-caption-meta">
                        <span className="np-caption-date">{item.date}</span>
                        <span className="np-caption-dot" />
                        <Link href="/news" className="np-caption-read">
                          Read more →
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* arrows */}
              <button className="np-arrow np-arrow--l" onClick={() => { stopAuto(); goTo(current - 1); startAuto(); }} aria-label="Previous">‹</button>
              <button className="np-arrow np-arrow--r" onClick={() => { stopAuto(); goTo(current + 1); startAuto(); }} aria-label="Next">›</button>

              {/* counter */}
              <div className="np-counter">{current + 1} / {total}</div>
            </div>

            {/* dots */}
            <div className="np-dots-row">
              {items.map((_, i) => (
                <button
                  key={i}
                  className={`np-dot ${i === current ? "np-dot--on" : "np-dot--off"}`}
                  onClick={() => { stopAuto(); goTo(i); startAuto(); }}
                  aria-label={`Slide ${i + 1}`}
                />
              ))}
            </div>

            {/* thumbnail strip */}
           
          </div>

          {/* view all */}
          <div style={{ display: "flex", justifyContent: "center", marginTop: "2.5rem" }}>
            <Link
              href="/news"
              className="np-view-all"
              style={{
                display: "inline-flex", alignItems: "center", gap: "8px",
                border: "1.5px solid #6B0119", borderRadius: "8px",
                padding: "10px 28px", fontSize: "14px", fontWeight: 500,
                color: "#6B0119", textDecoration: "none",
                background: "transparent", transition: "background 0.15s",
              }}
            >
              View All News
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}