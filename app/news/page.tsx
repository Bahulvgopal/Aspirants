// NewsPage.tsx
"use client";

import SectionHeading from "@/components/shared/SectionHeading";
import { newsSorted } from "@/data/news";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
};

function formatDateTime(dateStr: string): { date: string; time: string } {
  const d = new Date(dateStr);
  const isValid = !isNaN(d.getTime());
  if (!isValid) return { date: dateStr, time: "" };
  const date = d.toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" });
  const time = d.toLocaleTimeString("en-IN", { hour: "2-digit", minute: "2-digit", hour12: true });
  return { date, time };
}

export default function NewsPage() {
  return (
    <section className="section-padding">
      <div className="container-custom">

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
        >
          <SectionHeading
            title="Latest News"
            subtitle="Aspire announcements, updates, and highlights."
          />
        </motion.div>

        <motion.div
          className="news-feed"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          variants={stagger}
        >
          {newsSorted.map((item, i) => {
            const { date, time } = formatDateTime(item.date);
            return (
              <motion.article
                key={item.id}
                variants={fadeUp}
                className={`news-card${i === 0 ? " news-card--lead" : ""}`}
              >
                {/* Spine */}
                <div className="news-spine">
                  <div className="news-spine-dot" />
                  <div className="news-spine-line" />
                </div>

                {/* Card */}
                <div className="news-content">
                  <div className="news-inner">

                    {/* LEFT — thumbnail */}
                    {item.image && (
                      <div className="news-thumb-wrap">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="news-thumb"
                        />
                      </div>
                    )}

                    {/* RIGHT — text */}
                    <div className="news-text">
                      {item.category && (
                        <span className="news-category">{item.category}</span>
                      )}

                      <h2 className="news-headline">{item.title}</h2>
                      <p className="news-body">{item.description}</p>

                      {/* footer: source + time */}
                      <div className="news-footer-row">
                        <span className="news-source">
                          <img
                            src="/images/aspt.png"
                            alt="Aspire"
                            className="news-source-icon"
                            onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }}
                          />
                          Aspire
                        </span>
                        <span className="news-divider">|</span>
                        <span className="news-time-row">
                          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
                            <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
                          </svg>
                          {date}{time ? `, ${time}` : ""}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </motion.div>

      </div>

      <style>{`
        /* ── Feed layout ── */
        .news-feed {
          position: relative;
          display: flex;
          flex-direction: column;
          gap: 0;
          margin-top: 0.5rem;
        }

        /* ── Card row ── */
        .news-card {
          display: grid;
          grid-template-columns: 56px 1fr;
          gap: 0 1.5rem;
          padding: 0 0 1.5rem;
          cursor: pointer;
        }
        .news-card:last-child { padding-bottom: 0; }

        /* ── Spine ── */
        .news-spine {
          display: flex; flex-direction: column;
          align-items: center; padding-top: 4px;
        }
        .news-spine-dot {
          width: 11px; height: 11px; border-radius: 50%;
          background: #fff; border: 2px solid #ddd; flex-shrink: 0;
          transition: border-color 0.2s, background 0.2s; z-index: 1;
        }
        .news-card--lead .news-spine-dot {
          border-color: #6B0119; background: #6B0119;
          width: 13px; height: 13px;
        }
        .news-card:hover .news-spine-dot {
          border-color: #6B0119; background: #6B0119;
        }
        .news-spine-line {
          width: 1.5px; flex: 1;
          background: #ebebeb; margin-top: 6px;
        }
        .news-card:last-child .news-spine-line { display: none; }

        /* ── Content box ── */
        .news-content {
          background: #fff;
          border: 1px solid #efefef;
          border-radius: 14px;
          overflow: hidden;
          transition: border-color 0.2s ease, box-shadow 0.2s ease;
        }
        .news-card:hover .news-content {
          border-color: #e0d0d2;
          box-shadow: 0 4px 20px rgba(107,1,25,0.07);
        }
        .news-card--lead .news-content {
          border-color: #e8d5d8;
          border-left: 3px solid #6B0119;
        }

        /* ── Inner flex (image | text) ── */
        .news-inner {
          display: flex;
          gap: 0;
        }

        /* ── Thumbnail ── */
        .news-thumb-wrap {
          flex: 0 0 220px;
          overflow: hidden;
          background: #f3f3f3;
          border-radius: 12px 0 0 12px;
        }
        .news-thumb {
          width: 100%; height: 100%;
          object-fit: cover; display: block;
          transition: transform 0.5s ease;
          min-height: 150px;
        }
        .news-card:hover .news-thumb { transform: scale(1.05); }

        /* ── Text side ── */
        .news-text {
          flex: 1; min-width: 0;
          padding: 1.1rem 1.25rem;
          display: flex; flex-direction: column; gap: 6px;
        }

        /* category tag */
        .news-category {
          display: inline-block;
          background: #6B0119;
          color: #fff;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          padding: 3px 10px;
          border-radius: 6px;
          width: fit-content;
        }

        /* headline */
        .news-headline {
          font-size: 1rem;
          font-weight: 700;
          color: #1a1a1a;
          line-height: 1.35;
          letter-spacing: -0.01em;
          margin: 0;
          transition: color 0.2s;
        }
        .news-card:hover .news-headline { color: #6B0119; }

        /* body */
        .news-body {
          font-size: 13px;
          color: #666;
          line-height: 1.65;
          margin: 0;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        /* footer row */
        .news-footer-row {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-top: auto;
          padding-top: 8px;
          border-top: 1px solid #f3f3f3;
          flex-wrap: wrap;
        }
        .news-source {
          display: flex; align-items: center; gap: 5px;
          font-size: 11px; font-weight: 600; color: #444;
        }
        .news-source-icon {
          width: 18px; height: 18px;
          border-radius: 50%; object-fit: cover;
          border: 1px solid #e5e7eb;
        }
        .news-divider { color: #d1d5db; font-size: 13px; }
        .news-time-row {
          display: flex; align-items: center; gap: 4px;
          font-size: 11px; color: #9ca3af;
        }

        /* ── Responsive ── */
        @media (max-width: 640px) {
          .news-card {
            grid-template-columns: 32px 1fr;
            gap: 0 1rem;
          }
          .news-inner { flex-direction: column; }
          .news-thumb-wrap {
            flex: 0 0 auto;
            height: 160px;
            border-radius: 12px 12px 0 0;
          }
          .news-text { padding: 0.9rem 1rem; }
        }

        @media (min-width: 641px) and (max-width: 900px) {
          .news-thumb-wrap { flex: 0 0 160px; }
        }
      `}</style>
    </section>
  );
}