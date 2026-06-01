import Link from "next/link";
import Image from "next/image";
import SectionHeading from "../shared/SectionHeading";
import { gallery } from "@/data/gallery";

export default function MomentsPreview() {
  const featured = gallery[0];
  const sideImages = gallery.slice(1, 5);

  return (
    <section className="moments-section">
      <div className="moments-container">

        {/* ── Heading ── */}
        <div className="moments-heading-wrap">
          <SectionHeading
            title="Aspire Moments"
            subtitle="Memories, activities and learning experiences."
          />
        </div>

        {/* ── Bento grid ── */}
        <div className="moments-bento">

          {/* Cell 1 – Large featured (spans 2 rows on desktop) */}
          <div className="bento-cell bento-featured">
            <Image
              src={featured.image}
              alt={featured.title}
              fill
              className="bento-img"
              sizes="(max-width: 480px) 100vw, (max-width: 768px) 100vw, (max-width: 1200px) 58vw, 55vw"
              priority
            />
            <div className="bento-overlay bento-overlay--featured" />
            <div className="bento-badge">Featured</div>
          </div>

          {/* Cells 2-5 – Side thumbnails */}
          {sideImages.map((item, i) => (
            <div
              key={item.id}
              className={`bento-cell bento-thumb${i >= 2 ? " bento-thumb--hide-sm" : ""}`}
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="bento-img"
                sizes="(max-width: 480px) 50vw, (max-width: 768px) 50vw, 22vw"
              />
              <div className="bento-overlay bento-overlay--thumb" />
            </div>
          ))}
        </div>

        {/* ── CTA ── */}
        <div className="moments-cta">
          <Link href="/gallery" className="moments-btn">
            <span>View Full Gallery</span>
            <svg
              className="moments-btn-icon"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                d="M4 10h12M11 5l5 5-5 5"
                stroke="currentColor"
                strokeWidth="1.75"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
        </div>
      </div>

      <style>{`
        /* ════════════════════════════════════════
           SECTION SHELL
        ════════════════════════════════════════ */
        .moments-section {
          background: #ffffff;
          padding: clamp(3rem, 6vw, 6rem) 0;
          width: 100%;
        }

        .moments-container {
          width: 100%;
          max-width: 1920px;
          margin: 0 auto;
          padding: 0 clamp(1rem, 4vw, 5rem);
          box-sizing: border-box;
        }

        .moments-heading-wrap {
          margin-bottom: clamp(1.5rem, 3vw, 2.5rem);
        }

        /* ════════════════════════════════════════
           BENTO GRID  (desktop default ≥ 1025px)
        ════════════════════════════════════════ */
        .moments-bento {
          display: grid;
          grid-template-columns: 1.65fr 1fr 1fr;
          grid-template-rows: 1fr 1fr;
          gap: clamp(8px, 0.75vw, 14px);
          border-radius: clamp(12px, 1.5vw, 24px);
          overflow: hidden;
          aspect-ratio: 16 / 7;
          width: 100%;
        }

        /* featured spans both rows in column 1 */
        .bento-featured {
          grid-column: 1;
          grid-row: 1 / 3;
        }

        /* 4 thumbs fill columns 2-3 */
        .bento-thumb:nth-child(2) { grid-column: 2; grid-row: 1; }
        .bento-thumb:nth-child(3) { grid-column: 3; grid-row: 1; }
        .bento-thumb:nth-child(4) { grid-column: 2; grid-row: 2; }
        .bento-thumb:nth-child(5) { grid-column: 3; grid-row: 2; }

        /* ════════════════════════════════════════
           CELLS
        ════════════════════════════════════════ */
        .bento-cell {
          position: relative;
          overflow: hidden;
          border-radius: 0;
          cursor: pointer;
        }

        .bento-img {
          object-fit: cover;
          transition: transform 0.55s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }

        .bento-cell:hover .bento-img {
          transform: scale(1.07);
        }

        /* ── Overlays ── */
        .bento-overlay {
          position: absolute;
          inset: 0;
          pointer-events: none;
          transition: opacity 0.35s ease;
        }
        .bento-overlay--featured {
          background: linear-gradient(
            160deg,
            rgba(209, 18, 21, 0) 30%,
            rgba(209, 18, 21, 0.45) 100%
          );
          opacity: 0;
        }
        .bento-overlay--thumb {
          background: rgba(209, 18, 21, 0.3);
          opacity: 0;
        }
        .bento-cell:hover .bento-overlay {
          opacity: 1;
        }

        /* ── Badge on featured ── */
        .bento-badge {
          position: absolute;
          top: clamp(10px, 1.5vw, 20px);
          left: clamp(10px, 1.5vw, 20px);
          background: rgba(209, 18, 21, 0.92);
          color: #fff;
          font-size: clamp(0.65rem, 0.9vw, 0.78rem);
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          padding: 5px 12px;
          border-radius: 999px;
          backdrop-filter: blur(4px);
          pointer-events: none;
          z-index: 2;
        }

        /* ════════════════════════════════════════
           CTA
        ════════════════════════════════════════ */
        .moments-cta {
          display: flex;
          justify-content: center;
          margin-top: clamp(1.5rem, 2.5vw, 2.5rem);
        }

        .moments-btn {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: clamp(10px, 1.2vw, 14px) clamp(24px, 3vw, 44px);
          border: 1.5px solid #d11215;
          border-radius: 999px;
          font-size: clamp(0.8rem, 0.95vw, 0.95rem);
          font-weight: 600;
          color: #d11215;
          text-decoration: none;
          background: transparent;
          letter-spacing: 0.02em;
          transition: background 0.22s ease, color 0.22s ease, transform 0.2s ease,
            box-shadow 0.22s ease;
        }
        .moments-btn-icon {
          width: 18px;
          height: 18px;
          flex-shrink: 0;
          transition: transform 0.22s ease;
        }
        .moments-btn:hover {
          background: #d11215;
          color: #fff;
          transform: translateY(-2px);
          box-shadow: 0 6px 22px rgba(209, 18, 21, 0.28);
        }
        .moments-btn:hover .moments-btn-icon {
          transform: translateX(4px);
        }

        /* ════════════════════════════════════════
           4K / ULTRA-WIDE  ≥ 2560px
        ════════════════════════════════════════ */
        @media (min-width: 2560px) {
          .moments-bento {
            aspect-ratio: 16 / 6.5;
            border-radius: 28px;
          }
          .moments-btn {
            font-size: 1.05rem;
            padding: 16px 52px;
          }
        }

        /* ════════════════════════════════════════
           LARGE TV  ≥ 1920px
        ════════════════════════════════════════ */
        @media (min-width: 1920px) and (max-width: 2559px) {
          .moments-bento {
            aspect-ratio: 16 / 7;
          }
        }

        /* ════════════════════════════════════════
           LARGE DESKTOP  1440px – 1919px
        ════════════════════════════════════════ */
        @media (min-width: 1440px) and (max-width: 1919px) {
          .moments-bento {
            aspect-ratio: 16 / 7.5;
          }
        }

        /* ════════════════════════════════════════
           STANDARD DESKTOP  1025px – 1439px
        ════════════════════════════════════════ */
        @media (min-width: 1025px) and (max-width: 1439px) {
          .moments-bento {
            aspect-ratio: 16 / 8;
            grid-template-columns: 1.5fr 1fr 1fr;
          }
        }

        /* ════════════════════════════════════════
           TABLET LANDSCAPE  769px – 1024px
        ════════════════════════════════════════ */
        @media (min-width: 769px) and (max-width: 1024px) {
          .moments-bento {
            grid-template-columns: 1fr 1fr;
            grid-template-rows: auto;
            aspect-ratio: unset;
            gap: 8px;
          }

          .bento-featured {
            grid-column: 1 / 3;
            grid-row: 1;
            aspect-ratio: 16 / 8;
          }

          .bento-thumb { grid-column: unset !important; grid-row: unset !important; }
          .bento-thumb:nth-child(2),
          .bento-thumb:nth-child(3),
          .bento-thumb:nth-child(4),
          .bento-thumb:nth-child(5) {
            aspect-ratio: 16 / 10;
          }

          .bento-thumb--hide-sm { display: block; }
        }

        /* ════════════════════════════════════════
           TABLET PORTRAIT  481px – 768px
        ════════════════════════════════════════ */
        @media (min-width: 481px) and (max-width: 768px) {
          .moments-bento {
            grid-template-columns: 1fr 1fr;
            grid-template-rows: auto;
            aspect-ratio: unset;
            gap: 7px;
          }

          .bento-featured {
            grid-column: 1 / 3;
            grid-row: 1;
            aspect-ratio: 16 / 9;
          }

          .bento-thumb { grid-column: unset !important; grid-row: unset !important; }
          .bento-thumb:nth-child(2),
          .bento-thumb:nth-child(3),
          .bento-thumb:nth-child(4),
          .bento-thumb:nth-child(5) {
            aspect-ratio: 4 / 3;
          }

          .bento-thumb--hide-sm { display: block; }
        }

        /* ════════════════════════════════════════
           MOBILE  ≤ 480px
        ════════════════════════════════════════ */
        @media (max-width: 480px) {
          .moments-bento {
            grid-template-columns: 1fr 1fr;
            grid-template-rows: auto;
            aspect-ratio: unset;
            gap: 6px;
            border-radius: 12px;
          }

          .bento-featured {
            grid-column: 1 / 3;
            grid-row: 1;
            aspect-ratio: 4 / 3;
          }

          .bento-thumb { grid-column: unset !important; grid-row: unset !important; }
          .bento-thumb:nth-child(2),
          .bento-thumb:nth-child(3) {
            aspect-ratio: 1 / 1;
          }

          /* hide 3rd & 4th thumb on smallest screens */
          .bento-thumb--hide-sm { display: none; }

          .moments-btn {
            width: 100%;
            justify-content: center;
          }
        }

        /* ════════════════════════════════════════
           REDUCE MOTION
        ════════════════════════════════════════ */
        @media (prefers-reduced-motion: reduce) {
          .bento-img,
          .bento-overlay,
          .moments-btn,
          .moments-btn-icon {
            transition: none;
          }
        }
      `}</style>
    </section>
  );
}