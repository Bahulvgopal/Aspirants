"use client";

import Link from "next/link";
import SectionHeading from "../shared/SectionHeading";
import { toppers } from "@/data/toppers";
import TopperCard from "../toppers/TopperCard";
import { useEffect, useRef, useState } from "react";

const latestYear = Math.max(...toppers.map((t) => Number(t.year ?? 0)));
const carouselToppers = toppers
  .filter((t) => Number(t.year ?? 0) === latestYear)
  .slice(0, 5);

export default function TopperPreview() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [current, setCurrent] = useState(0);
  const total = carouselToppers.length;
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const goTo = (index: number) => {
    setCurrent((index + total) % total);
  };

  const startAuto = () => {
    stopAuto();
    intervalRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % total);
    }, 3500);
  };

  const stopAuto = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
  };

  useEffect(() => {
    startAuto();
    return () => stopAuto();
  }, [total]);

  useEffect(() => {
    if (!trackRef.current) return;
    const track = trackRef.current;
    const card = track.children[0] as HTMLElement;
    if (!card) return;
    const gap = 24;
    const offset = current * (card.offsetWidth + gap);
    track.style.transform = `translateX(-${offset}px)`;
  }, [current]);

  return (
    <>
      <style>{`
        .topper-carousel-card {
          flex: 0 0 calc(33.333% - 16px);
          min-width: 0;
        }
        @media (max-width: 768px) {
          .topper-carousel-card {
            flex: 0 0 calc(100% - 0px);
          }
        }
        @media (min-width: 769px) and (max-width: 1024px) {
          .topper-carousel-card {
            flex: 0 0 calc(50% - 12px);
          }
        }
      `}</style>

      <section className="topper-section">
        <div className="container-custom">
          <div className="topper-header">
            <span className="topper-badge">🏆 Excellence & Achievement</span>
            <SectionHeading
              title="Top Achievers"
              subtitle="Celebrating the outstanding performances of our students who set new benchmarks of success."
            />
          </div>

          {/* Carousel */}
          <div
            style={{ position: "relative", overflow: "hidden" }}
            onMouseEnter={stopAuto}
            onMouseLeave={startAuto}
          >
            <div
              ref={trackRef}
              style={{
                display: "flex",
                gap: "24px",
                transition: "transform 0.8s cubic-bezier(0.4, 0, 0.2, 1)",
                willChange: "transform",
              }}
            >
              {carouselToppers.map((topper) => (
                <div
                  key={topper.id}
                  className="topper-carousel-card topper-card-wrapper"
                >
                  <TopperCard topper={topper} />
                </div>
              ))}
            </div>
          </div>

          {/* Dots */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "8px",
              marginTop: "1.25rem",
            }}
          >
            {carouselToppers.map((_, i) => (
              <button
                key={i}
                onClick={() => { stopAuto(); goTo(i); startAuto(); }}
                aria-label={`Go to slide ${i + 1}`}
                style={{
                  width: i === current ? "20px" : "8px",
                  height: "8px",
                  borderRadius: "999px",
                  border: "none",
                  background: i === current ? "#6B0119" : "#e5e7eb",
                  cursor: "pointer",
                  padding: 0,
                  transition: "width 0.4s ease, background 0.4s ease",
                }}
              />
            ))}
          </div>

          {/* View All button */}
          <div className="topper-action">
            <Link href="/toppers" className="topper-btn">
              View All Achievers
              <span>→</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}