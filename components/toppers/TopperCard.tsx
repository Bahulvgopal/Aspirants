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
      <div className="tc-card">
        

        {/* Photo */}
        <div className="tc-photo-wrap">
          <Image
            src={topper.image}
            alt={topper.name}
            fill
            className="tc-photo"
            sizes="200px"
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

        {/* Bottom crimson bar on hover */}
        <div className="tc-hover-bar" aria-hidden />
      </div>

      <style>{`
        .tc-card {
          position: relative;
          background: #fff;
          border: 1px solid #efefef;
          border-radius: 16px;
          overflow: hidden;
          transition: box-shadow 0.25s ease, transform 0.25s ease, border-color 0.25s ease;
          cursor: pointer;
        }

        .tc-card:hover {
          box-shadow: 0 8px 32px rgba(139,30,45,0.1);
          transform: translateY(-3px);
          border-color: #e8d5d8;
        }

        /* Exam badge */
        .tc-exam-badge {
          position: absolute;
          top: 10px;
          left: 10px;
          z-index: 2;
          font-size: 9.5px;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: #fff;
          background: #8B1E2D;
          padding: 3px 9px;
          border-radius: 999px;
        }

        /* Photo */
        .tc-photo-wrap {
          position: relative;
          width: 100%;
          aspect-ratio: 4 / 3;
          background: #f4eeee;
          overflow: hidden;
        }

        .tc-photo {
          object-fit: cover;
          object-position: top;
          transition: transform 0.45s ease;
        }

        .tc-card:hover .tc-photo {
          transform: scale(1.04);
        }

        .tc-photo-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, transparent 50%, rgba(10,3,3,0.35) 100%);
        }

        /* Info section */
        .tc-info {
          padding: 1rem 1.1rem 1.1rem;
        }

        .tc-name {
          font-size: 0.98rem;
          font-weight: 700;
          color: #1a1a1a;
          margin: 0 0 2px;
          letter-spacing: -0.01em;
          transition: color 0.2s;
        }

        .tc-card:hover .tc-name {
          color: #8B1E2D;
        }

        .tc-college {
          font-size: 11.5px;
          color: #999;
          font-weight: 400;
          margin: 0 0 0.85rem;
        }

        /* Stats row */
        .tc-stats {
          display: flex;
          align-items: center;
          gap: 0;
          background: #fdf8f8;
          border: 1px solid #f0e8e9;
          border-radius: 10px;
          padding: 0.55rem 0;
          overflow: hidden;
        }

        .tc-stat {
          flex: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 2px;
        }

        .tc-stat-divider {
          width: 1px;
          height: 28px;
          background: #f0e8e9;
          flex-shrink: 0;
        }

        .tc-stat-value {
          font-size: 13px;
          font-weight: 700;
          color: #8B1E2D;
          line-height: 1;
          letter-spacing: -0.01em;
        }

        .tc-stat-label {
          font-size: 9px;
          font-weight: 600;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: #bbb;
        }

        /* Bottom hover bar */
        .tc-hover-bar {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 2.5px;
          background: #8B1E2D;
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.35s cubic-bezier(0.22, 1, 0.36, 1);
        }

        .tc-card:hover .tc-hover-bar {
          transform: scaleX(1);
        }
      `}</style>
    </>
  );
}