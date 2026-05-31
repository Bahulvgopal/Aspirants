// components/toppers/TopperCard.tsx
import Image from "next/image";

type Topper = {
  id: string;
  name: string;
  image: string;
  year: string;
  rank: string;
  score: string;
  exam: string;
  college?: string;
};

export default function TopperCard({ topper }: { topper: Topper }) {
  return (
    <>
      <div className="tc-card text-center ml-[0.5rem]">
        {/* Photo */}
        <div className="tc-photo-wrap">
          <Image
            src={topper.image}
            alt={topper.name}
            fill
            className="tc-photo"
            sizes="(max-width: 640px) 30vw, (max-width: 1024px) 22vw, 200px"
          />
          <div className="tc-photo-overlay" />
        </div>

        {/* Info */}
        <div className="tc-info">
          <p className="tc-name">{topper.name}</p>

          <div className="tc-stats">
            <div className="tc-stat-divider" />
            <div className="tc-stat">
              <span className="tc-stat-value">{topper.score}</span>
              <span className="tc-stat-label">Score</span>
            </div>
            <div className="tc-stat-divider" />
            <div className="tc-stat">
              <span className="tc-stat-value">{topper.year}</span>
              <span className="tc-stat-label">Year</span>
            </div>
          </div>
        </div>

        <div className="tc-hover-bar" aria-hidden />
      </div>

      <style>{`
        .tc-card {
          position: relative;
          background: #fff;
          border: 1px solid #efefef;
          border-radius: 12px;
          overflow: hidden;
          transition: box-shadow 0.25s ease, transform 0.25s ease, border-color 0.25s ease;
          cursor: pointer;
          width: 95%;
          
          
        }

        /* Tablet */
        @media (min-width: 768px) {
          .tc-card {
            width: 70%;
          }
        }

        /* Desktop */
        @media (min-width: 1024px) {
          .tc-card {
            width: 90%;
          }
        }

        .tc-card:hover {
          box-shadow: 0 8px 32px rgba(139,30,45,0.1);
          transform: translateY(-3px);
          border-color: #e8d5d8;
        }

        /* Photo */
        .tc-photo-wrap {
          position: relative;
          
          aspect-ratio:5 / 4.5;
          background: #f4eeee;
          overflow: hidden;
        }

        .tc-photo {
          
          object-position: top center;
          transition: transform 0.45s ease;
        }

        .tc-card:hover .tc-photo { transform: scale(1.04); }

        .tc-photo-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, transparent 50%, rgba(10,3,3,0.35) 100%);
        }

        /* Info */
        .tc-info {
          padding: 0.55rem 0.6rem 0.65rem;
        }

        .tc-name {
          font-size: 0.75rem;
          font-weight: 700;
          color: #1a1a1a;
          margin: 0 0 0.45rem;
          letter-spacing: -0.01em;
          transition: color 0.2s;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
          line-height: 1.3;
        }

        .tc-card:hover .tc-name { color: #8B1E2D; }

        /* Stats */
        .tc-stats {
          display: flex;
          align-items: center;
          gap: 0;
          background: #fdf8f8;
          border: 1px solid #f0e8e9;
          border-radius: 7px;
          padding: 0.35rem 0;
          overflow: hidden;
        }

        .tc-stat {
          flex: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1px;
        }

        .tc-stat-divider {
          width: 1px;
          height: 20px;
          background: #f0e8e9;
          flex-shrink: 0;
        }

        .tc-stat-value {
          font-size: 10px;
          font-weight: 700;
          color: #8B1E2D;
          line-height: 1;
          letter-spacing: -0.01em;
        }

        .tc-stat-label {
          font-size: 7px;
          font-weight: 600;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: #bbb;
        }

        /* Hover bar */
        .tc-hover-bar {
          position: absolute;
          bottom: 0; left: 0;
          width: 100%; height: 2px;
          background: #8B1E2D;
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.35s cubic-bezier(0.22, 1, 0.36, 1);
        }

        .tc-card:hover .tc-hover-bar { transform: scaleX(1); }
      `}</style>
    </>
  );
}