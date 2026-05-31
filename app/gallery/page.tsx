// MomentsPage.tsx
"use client";

import { useState, useMemo } from "react";
import { gallery } from "@/data/gallery";
import GalleryCard from "@/components/gallery/GalleryCard";
import { motion, AnimatePresence } from "framer-motion";
import SectionHeading from "@/components/shared/SectionHeading";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07, delayChildren: 0.02 } },
};

const cardVariant = {
  hidden: { opacity: 0, scale: 0.97, y: 16 },
  show: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  },
 exit: {
  opacity: 0,
  scale: 0.95,
  y: -8,
  transition: {
    duration: 0.22,
    ease: [0.42, 0, 1, 1] as [number, number, number, number],
  },
},
};

// Derive unique filter labels from the gallery data, prepend "All"
const FILTERS = [
  "All",
  ...Array.from(new Set(gallery.map((i) => i.category).filter(Boolean))) as string[],
];

export default function MomentsPage() {
  const [active, setActive] = useState("All");

  const filtered = useMemo(
    () => (active === "All" ? gallery : gallery.filter((i) => i.category === active)),
    [active]
  );

  return (
    <section className="moments-section section-padding">
      <div className="container-custom">

        {/* Heading */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
        >
          <SectionHeading
            title="Aspire Moments"
            subtitle="A glimpse into student life, learning milestones, and achievements."
          />
        </motion.div>

        {/* Eyebrow + filters row */}
        <motion.div
          className="moments-meta"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
        >
          <div className="moments-eyebrow">
            <span className="moments-eyebrow-dot" aria-hidden />
            <span>
              {filtered.length} {filtered.length === 1 ? "moment" : "moments"}
              {active !== "All" ? ` in ${active}` : " captured"}
            </span>
          </div>

          <div className="moments-filters" role="group" aria-label="Filter gallery">
            {FILTERS.map((f) => (
              <button
                key={f}
                onClick={() => setActive(f)}
                className={`moments-filter-pill${active === f ? " active" : ""}`}
                aria-pressed={active === f}
              >
                {f}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Grid with AnimatePresence so cards animate out/in on filter change */}
        <motion.div
          className="moments-grid"
          variants={stagger}
          initial="hidden"
          animate="show"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((item) => (
              <motion.div
                key={item.id}
                variants={cardVariant}
                initial="hidden"
                animate="show"
                exit="exit"
                layout
                className="moments-grid-item"
              >
                <GalleryCard
                  image={item.image}
                  title={item.title}
                  category={item.category}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty state */}
        {filtered.length === 0 && (
          <motion.p
            className="moments-empty"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            No moments found for &ldquo;{active}&rdquo;.
          </motion.p>
        )}

        {/* Footer CTA */}
       

      </div>

      <style>{`
        .moments-meta {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 12px;
          margin-bottom: 2rem;
        }

        .moments-eyebrow {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 12px;
          font-weight: 500;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: #999;
          transition: color 0.2s;
        }

        .moments-eyebrow-dot {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: #8B1E2D;
          display: inline-block;
          flex-shrink: 0;
        }

        .moments-filters {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
        }

        .moments-filter-pill {
          font-size: 12px;
          font-weight: 500;
          letter-spacing: 0.04em;
          padding: 6px 14px;
          border-radius: 999px;
          border: 1px solid #ddd;
          background: transparent;
          color: #666;
          cursor: pointer;
          transition: border-color 0.2s ease, color 0.2s ease, background 0.2s ease;
        }

        .moments-filter-pill:hover {
          border-color: #8B1E2D;
          color: #8B1E2D;
        }

        .moments-filter-pill.active {
          background: #8B1E2D;
          border-color: #8B1E2D;
          color: #fff;
        }

        .moments-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 16px;
        }

        /* Wide cards only when showing "All" unfiltered — nth-child still works */
        .moments-grid-item:nth-child(1),
        .moments-grid-item:nth-child(5),
        .moments-grid-item:nth-child(8) {
          grid-column: span 2;
        }

        @media (max-width: 900px) {
          .moments-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .moments-grid-item:nth-child(1),
          .moments-grid-item:nth-child(5),
          .moments-grid-item:nth-child(8) {
            grid-column: span 2;
          }
        }

        @media (max-width: 560px) {
          .moments-grid {
            grid-template-columns: 1fr;
          }
          .moments-grid-item {
            grid-column: span 1 !important;
          }
        }

        .moments-empty {
          text-align: center;
          color: #aaa;
          font-size: 14px;
          padding: 3rem 0;
        }

        .moments-footer {
          display: flex;
          justify-content: center;
          margin-top: 2.5rem;
          padding-top: 2rem;
          border-top: 1px solid #f0f0f0;
        }
      `}</style>
    </section>
  );
}