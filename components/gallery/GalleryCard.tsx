// GalleryCard.tsx
import Image from "next/image";

type Props = {
  image: string;
  title: string;
  category?: string;
};

export default function GalleryCard({ image, title, category }: Props) {
  return (
    <>
      <div className="gc-card">
        <div className="gc-img-wrap">
          {image ? (
            <Image
              src={image}
              alt={title}
              fill
              sizes="(max-width: 560px) 100vw, (max-width: 900px) 50vw, 33vw"
              className="gc-img"
            />
          ) : (
            <div className="gc-placeholder" />
          )}

          {/* Subtle gradient — always present, gets deeper on hover */}
          <div className="gc-overlay" />

          {/* Category tag */}
          {category && (
            <span className="gc-tag">{category}</span>
          )}

          {/* Title — sits at bottom, visible always */}
          <div className="gc-info">
            <p className="gc-title">{title}</p>
          </div>
        </div>
      </div>

      <style>{`
        .gc-card {
          border-radius: 12px;
          overflow: hidden;
          background: #f4f0ec;
          position: relative;
        }

        .gc-img-wrap {
          position: relative;
          width: 100%;
          aspect-ratio: 4 / 3;
          overflow: hidden;
        }

        .gc-img {
          object-fit: cover;
          transition: transform 0.5s cubic-bezier(0.22, 1, 0.36, 1);
        }

        .gc-card:hover .gc-img {
          transform: scale(1.04);
        }

        .gc-placeholder {
          width: 100%;
          height: 100%;
          background: #ece8e3;
        }

        /* Gradient overlay — always on, deepens on hover */
        .gc-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            180deg,
            transparent 40%,
            rgba(10, 3, 3, 0.52) 85%,
            rgba(10, 3, 3, 0.72) 100%
          );
          transition: opacity 0.35s ease;
        }

        /* Category tag — top left, crimson pill */
        .gc-tag {
          position: absolute;
          top: 10px;
          left: 10px;
          font-size: 10px;
          font-weight: 600;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: #fff;
          background: #8B1E2D;
          padding: 3px 10px;
          border-radius: 999px;
          pointer-events: none;
        }

        /* Title at bottom */
        .gc-info {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          padding: 0.9rem 1rem;
          pointer-events: none;
        }

        .gc-title {
          font-size: 0.9rem;
          font-weight: 500;
          color: #fff;
          margin: 0;
          line-height: 1.35;
          letter-spacing: 0.01em;
        }

        /* Bottom accent bar on hover */
        .gc-card::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 2px;
          background: #8B1E2D;
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.38s cubic-bezier(0.22, 1, 0.36, 1);
        }

        .gc-card:hover::after {
          transform: scaleX(1);
        }
      `}</style>
    </>
  );
}