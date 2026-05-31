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
          {newsSorted.map((item, i) => (
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

              {/* Content */}
              <div className="news-content">
                <div className="news-meta">
                  <time className="news-date">{item.date}</time>
                  {/* "Latest" badge only on the most recent item (index 0 after sort) */}
                  {i === 0 && <span className="news-badge">Latest</span>}
                </div>

                <h2 className="news-headline">{item.title}</h2>
                <p className="news-body">{item.description}</p>

                
              </div>
            </motion.article>
          ))}
        </motion.div>

      </div>

      <style>{`
        .news-feed {
          position: relative;
          display: flex;
          flex-direction: column;
          gap: 0;
          margin-top: 0.5rem;
        }

        .news-card {
          display: grid;
          grid-template-columns: 56px 1fr;
          gap: 0 1.5rem;
          padding: 0 0 2.5rem;
          cursor: pointer;
        }

        .news-card:last-child { padding-bottom: 0; }

        .news-spine {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding-top: 4px;
        }

        .news-spine-dot {
          width: 11px;
          height: 11px;
          border-radius: 50%;
          background: #fff;
          border: 2px solid #ddd;
          flex-shrink: 0;
          transition: border-color 0.2s, background 0.2s;
          z-index: 1;
        }

        .news-card--lead .news-spine-dot {
          border-color: #8B1E2D;
          background: #8B1E2D;
          width: 13px;
          height: 13px;
        }

        .news-card:hover .news-spine-dot {
          border-color: #8B1E2D;
          background: #8B1E2D;
        }

        .news-spine-line {
          width: 1.5px;
          flex: 1;
          background: #ebebeb;
          margin-top: 6px;
        }

        .news-card:last-child .news-spine-line { display: none; }

        .news-content {
          background: #fff;
          border: 1px solid #efefef;
          border-radius: 14px;
          padding: 1.4rem 1.6rem;
          transition: border-color 0.2s ease, box-shadow 0.2s ease;
        }

        .news-card:hover .news-content {
          border-color: #e0d0d2;
          box-shadow: 0 4px 20px rgba(139, 30, 45, 0.07);
        }

        .news-card--lead .news-content {
          border-color: #e8d5d8;
          border-left: 3px solid #8B1E2D;
        }

        .news-meta {
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          gap: 8px;
          margin-bottom: 0.65rem;
        }

        .news-date {
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: #aaa;
        }

        .news-badge {
          font-size: 9.5px;
          font-weight: 700;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: #fff;
          background: #8B1E2D;
          padding: 2px 8px;
          border-radius: 999px;
        }

        .news-headline {
          font-size: 1rem;
          font-weight: 700;
          color: #1a1a1a;
          line-height: 1.35;
          letter-spacing: -0.01em;
          margin: 0 0 0.6rem;
          transition: color 0.2s;
        }

        .news-card:hover .news-headline { color: #8B1E2D; }

        .news-body {
          font-size: 13.5px;
          color: #666;
          line-height: 1.7;
          margin: 0 0 1rem;
        }

        .news-link {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          font-size: 11.5px;
          font-weight: 600;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          color: #8B1E2D;
          background: none;
          border: none;
          padding: 0;
          cursor: pointer;
          transition: gap 0.2s ease;
        }

        .news-card:hover .news-link { gap: 9px; }

        @media (max-width: 560px) {
          .news-card {
            grid-template-columns: 32px 1fr;
            gap: 0 1rem;
          }
          .news-content { padding: 1.1rem 1.2rem; }
        }
      `}</style>
    </section>
  );
}