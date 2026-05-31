"use client";

import Link from "next/link";
import SectionHeading from "../shared/SectionHeading";
import { toppers } from "@/data/toppers";
import TopperCard from "../toppers/TopperCard";
import { FaTrophy } from "react-icons/fa6";
import { useEffect, useRef, useState, useCallback } from "react";

const AUTO_MS  = 3500;
const TRANS_MS = 550;

const base = [...toppers]
  .sort((a, b) => Number(b.year ?? 0) - Number(a.year ?? 0))
  .slice(0, 12);

function usePerSlide(): number {
  const [per, setPer] = useState(4);
  useEffect(() => {
    const update = () => {
      if (window.innerWidth < 480)       setPer(1);
      else if (window.innerWidth < 768)  setPer(2);
      else if (window.innerWidth < 1024) setPer(3);
      else                               setPer(4);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);
  return per;
}

export default function TopperPreview() {
  const perSlide = usePerSlide();
  const pages    = Math.ceil(base.length / perSlide);

  const [trackPage, setTrackPage] = useState(0);
  const [page,      setPage]      = useState(0);
  const [animated,  setAnimated]  = useState(true);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const paused   = useRef(false);

  // Touch swipe state
  const touchStartX = useRef<number | null>(null);
  const touchStartY = useRef<number | null>(null);

  // Reset to page 0 when perSlide changes (e.g. resize)
  useEffect(() => {
    setAnimated(false);
    setTrackPage(0);
    setPage(0);
  }, [perSlide]);

  // Seamless forward loop — snap back after clone
  useEffect(() => {
    if (trackPage === pages) {
      const t = setTimeout(() => {
        setAnimated(false);
        setTrackPage(0);
        setPage(0);
      }, TRANS_MS);
      return () => clearTimeout(t);
    }
  }, [trackPage, pages]);

  useEffect(() => {
    if (!animated) {
      requestAnimationFrame(() => requestAnimationFrame(() => setAnimated(true)));
    }
  }, [animated]);

  const goTo = useCallback((p: number) => {
    setAnimated(true);
    setTrackPage(p);
    setPage(p % pages);
  }, [pages]);

  const next = useCallback(() => goTo(trackPage + 1), [trackPage, goTo]);

  const prev = useCallback(() => {
    if (trackPage === 0) {
      setAnimated(false);
      setTrackPage(pages);
      requestAnimationFrame(() =>
        requestAnimationFrame(() => {
          setAnimated(true);
          setTrackPage(pages - 1);
          setPage(pages - 1);
        })
      );
    } else {
      goTo(trackPage - 1);
    }
  }, [trackPage, pages, goTo]);

  const startAuto = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      if (!paused.current) next();
    }, AUTO_MS);
  }, [next]);

  const stopAuto = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
  }, []);

  useEffect(() => { startAuto(); return stopAuto; }, [startAuto, stopAuto]);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    touchStartY.current = e.touches[0].clientY;
    paused.current = true;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null || touchStartY.current === null) return;
    const dx = e.changedTouches[0].clientX - touchStartX.current;
    const dy = e.changedTouches[0].clientY - touchStartY.current;

    // Only treat as horizontal swipe if mostly horizontal
    if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 40) {
      stopAuto();
      if (dx < 0) next();
      else prev();
      setTimeout(startAuto, 3000);
    }

    paused.current = false;
    touchStartX.current = null;
    touchStartY.current = null;
  };

  return (
    <>
      <style>{`
        .tp-section   { padding: 2.5rem 0; background: #fff; }
        .tp-container { max-width: 1200px; margin: 0 auto; padding: 0 1.25rem; }

        /* ── Header ── */
        .tp-header {
          display: flex; flex-direction: column;
          align-items: center; text-align: center;
          gap: 0.75rem; margin-bottom: 2rem;
        }
        .tp-badge {
          display: inline-flex; align-items: center; gap: 5px;
          background: #fef2f2; color: #6B0119;
          border: 1px solid #fecaca; border-radius: 999px;
          font-size: 0.72rem; font-weight: 600;
          letter-spacing: 0.05em; padding: 4px 14px;
          text-transform: uppercase;
        }

        /* ── Viewport ── */
        .tp-viewport { overflow: hidden; }
        .tp-track    { display: flex; }
        .tp-page     {
          flex-shrink: 0; width: 100%;
          display: grid; gap: 10px;
        }

        /* ── Dots + arrows row ── */
        .tp-nav {
          display: flex; align-items: center; justify-content: center;
          gap: 16px; margin-top: 1.5rem;
        }
        .tp-arrow {
          width: 40px; height: 40px; border-radius: 50%;
          border: 1.5px solid #6B0119; background: transparent;
          color: #6B0119; cursor: pointer; flex-shrink: 0;
          display: flex; align-items: center; justify-content: center;
          font-size: 1rem; transition: background 0.15s, color 0.15s;
          /* accessible tap target */
          touch-action: manipulation;
        }
        .tp-arrow:hover  { background: #6B0119; color: #fff; }
        .tp-arrow:active { background: #6B0119; color: #fff; transform: scale(0.94); }

        .tp-dots { display: flex; gap: 6px; align-items: center; }
        .tp-dot  {
          height: 7px; border: none; border-radius: 999px;
          background: #e5e7eb; cursor: pointer; padding: 0;
          transition: width 0.3s ease, background 0.3s ease;
          touch-action: manipulation;
          /* accessible tap target without affecting visual size */
          position: relative;
        }
        .tp-dot::after {
          content: ''; position: absolute;
          inset: -8px -4px;
        }
        .tp-dot.active { background: #6B0119; width: 22px !important; }

        /* ── CTA ── */
        .tp-action { text-align: center; margin-top: 1.75rem; }
        .tp-btn {
          display: inline-flex; align-items: center; gap: 8px;
          background: #6B0119; color: #fff; text-decoration: none;
          border-radius: 999px; padding: 11px 28px;
          font-size: 0.875rem; font-weight: 600;
          border: 2px solid #6B0119;
          transition: background 0.2s, color 0.2s, transform 0.2s;
          touch-action: manipulation;
        }
        .tp-btn:hover  { background: transparent; color: #6B0119; transform: translateY(-1px); }
        .tp-btn:active { transform: scale(0.97); }

        /* ── Mobile: ≤ 479px — 1 card full width, centered ── */
        @media (max-width: 479px) {
          .tp-section    { padding: 2rem 0; }
          .tp-container  { padding: 0 1rem; }
          .tp-header     { margin-bottom: 1.5rem; }
          .tp-page       { gap: 0; justify-items: center; }

          .tp-nav        { margin-top: 1.25rem; gap: 12px; }
          .tp-arrow      { width: 38px; height: 38px; font-size: 0.9rem; }

          .tp-btn        { padding: 10px 24px; font-size: 0.84rem; }
          .tp-action     { margin-top: 1.5rem; }
        }

        /* ── Tablet: 480–767px ── */
        @media (min-width: 480px) and (max-width: 767px) {
          .tp-container { padding: 0 0.75rem; }
          .tp-page { gap: 8px; }
        }
      `}</style>

      <section
        className="tp-section"
        onMouseEnter={() => { paused.current = true; }}
        onMouseLeave={() => { paused.current = false; }}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <div className="tp-container">

          {/* Header */}
          <div className="tp-header">
            <span className="tp-badge">
              <FaTrophy size={11} /> Excellence &amp; Achievement
            </span>
            <SectionHeading
              title="Top Achievers"
              subtitle="Celebrating the outstanding performances of our students who set new benchmarks of success."
            />
          </div>

          {/* Sliding track */}
          <div className="tp-viewport">
            <div
              className="tp-track"
              style={{
                transform:  `translateX(-${trackPage * 100}%)`,
                transition: animated
                  ? `transform ${TRANS_MS}ms cubic-bezier(0.4, 0, 0.2, 1)`
                  : "none",
              }}
            >
              {/* Real pages */}
              {Array.from({ length: pages }).map((_, pi) => (
                <div
                  key={pi}
                  className="tp-page"
                  style={{ gridTemplateColumns: `repeat(${perSlide}, 1fr)` }}
                >
                  {base
                    .slice(pi * perSlide, pi * perSlide + perSlide)
                    .map((topper, i) => (
                      <TopperCard key={`${topper.id}-${pi}-${i}`} topper={topper} />
                    ))}
                </div>
              ))}
              {/* Clone of page 0 for seamless loop */}
              <div
                className="tp-page"
                style={{ gridTemplateColumns: `repeat(${perSlide}, 1fr)` }}
              >
                {base.slice(0, perSlide).map((topper, i) => (
                  <TopperCard key={`clone-${topper.id}-${i}`} topper={topper} />
                ))}
              </div>
            </div>
          </div>

          {/* Arrows + dots in one row */}
          <div className="tp-nav">
            

            <div className="tp-dots">
              {Array.from({ length: pages }).map((_, i) => (
                <button
                  key={i}
                  className={`tp-dot${i === page ? " active" : ""}`}
                  style={{ width: i === page ? "22px" : "8px" }}
                  onClick={() => { stopAuto(); goTo(i); startAuto(); }}
                  aria-label={`Page ${i + 1}`}
                />
              ))}
            </div>

           
          </div>

          <div className="tp-action">
            <Link href="/toppers" className="tp-btn">
              View All Achievers <span aria-hidden="true">→</span>
            </Link>
          </div>

        </div>
      </section>
    </>
  );
}