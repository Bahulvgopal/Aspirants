import Link from "next/link";
import Image from "next/image";
import SectionHeading from "../shared/SectionHeading";
import { gallery } from "@/data/gallery";

export default function MomentsPreview() {
  const featured = gallery[0];
  const sideImages = gallery.slice(1, 5);

  return (
    <section className="moments-luxury section-padding" style={{ background: "#fff" }}>
      <div className="container-custom">
        <SectionHeading
          title="Aspire Moments"
          subtitle="Memories, activities and learning experiences."
        />

        <div className="moments-masonry">
          {/* Large Featured Image */}
          <div className="moment-large">
            <Image
              src={featured.image}
              alt={featured.title}
              fill
              className="moment-image"
              sizes="(max-width: 1024px) 100vw, 60vw"
            />
            {/* red overlay on hover */}
            <div className="moment-large-overlay" />
          </div>

          {/* Side Images */}
          <div className="moments-side">
            {sideImages.map((item, index) => (
              <div
                key={item.id}
                className={`moment-small${index >= 2 ? " moment-small--hide-mobile" : ""}`}
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="moment-image"
                  sizes="(max-width: 640px) 100vw, 25vw"
                />
                <div className="moment-small-overlay" />
              </div>
            ))}
          </div>
        </div>

        <div className="gallery-cta">
          <Link href="/gallery" className="gallery-view-btn">
            View Gallery
          </Link>
        </div>
      </div>

      <style>{`
        /* ── Layout ── */
        .moments-masonry {
          display: grid;
          grid-template-columns: 1.5fr 1fr;
          gap: 10px;
          border-radius: 16px;
          overflow: hidden;
        }

        /* ── Large image ── */
        .moment-large {
          position: relative;
          aspect-ratio: 4 / 3;
          overflow: hidden;
          border-radius: 12px;
          cursor: pointer;
        }
        .moment-large-overlay {
          position: absolute; inset: 0;
          background: linear-gradient(
            135deg,
            rgba(209,18,21,0) 0%,
            rgba(209,18,21,0.35) 100%
          );
          opacity: 0;
          transition: opacity 0.35s ease;
        }
        .moment-large:hover .moment-large-overlay { opacity: 1; }
        .moment-large:hover .moment-image { transform: scale(1.04); }

        /* ── Side grid ── */
        .moments-side {
          display: grid;
          grid-template-columns: 1fr 1fr;
          grid-template-rows: 1fr 1fr;
          gap: 10px;
        }

        /* ── Small images ── */
        .moment-small {
          position: relative;
          aspect-ratio: 1 / 1;
          overflow: hidden;
          border-radius: 10px;
          cursor: pointer;
        }
        .moment-small-overlay {
          position: absolute; inset: 0;
          background: rgba(209,18,21,0.28);
          opacity: 0;
          transition: opacity 0.3s ease;
        }
        .moment-small:hover .moment-small-overlay { opacity: 1; }
        .moment-small:hover .moment-image { transform: scale(1.06); }

        /* ── Shared image transition ── */
        .moment-image {
          object-fit: cover;
          transition: transform 0.5s cubic-bezier(0.4,0,0.2,1);
        }

        /* ── CTA ── */
        .gallery-cta {
          display: flex;
          justify-content: center;
          margin-top: 2rem;
        }
        .gallery-view-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          border: 1.5px solid #d11215;
          border-radius: 999px;
          padding: 11px 32px;
          font-size: 0.875rem;
          font-weight: 600;
          color: #d11215;
          text-decoration: none;
          background: transparent;
          transition: background 0.2s, color 0.2s, transform 0.2s;
        }
        .gallery-view-btn::after { content: " →"; }
        .gallery-view-btn:hover {
          background: #d11215;
          color: #fff;
          transform: translateY(-1px);
        }

        /* ── Mobile ── */
        @media (max-width: 768px) {
          .moment-small--hide-mobile { display: none; }
          .moments-masonry {
            grid-template-columns: 1fr;
          }
          .moments-side {
            grid-template-columns: 1fr 1fr;
            grid-template-rows: auto;
          }
          .moment-large { aspect-ratio: 16 / 9; }
        }

        @media (max-width: 480px) {
          .moments-masonry { gap: 7px; }
          .moments-side    { gap: 7px; }
        }
      `}</style>
    </section>
  );
}