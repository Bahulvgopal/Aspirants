// MomentsPage.tsx
import { gallery } from "@/data/gallery";

export default function MomentsPage() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400&family=DM+Sans:wght@300;400;500&display=swap');

        .moments-root {
          padding: 5rem 1.5rem 4rem;
          font-family: 'DM Sans', sans-serif;
          position: relative;
        }

        .moments-root::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 1px;
          background: linear-gradient(90deg, transparent, #00000020 30%, #00000020 70%, transparent);
        }

        .moments-container {
          max-width: 1160px;
          margin: 0 auto;
        }

        .moments-label {
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: #999;
          margin-bottom: 0.75rem;
        }

        .moments-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(2.4rem, 5vw, 3.5rem);
          font-weight: 300;
          line-height: 1.05;
          margin: 0 0 0.5rem;
          letter-spacing: -0.01em;
          color: #111;
        }

        .moments-title em {
          font-style: italic;
          font-weight: 400;
        }

        .moments-subtitle {
          font-size: 14px;
          font-weight: 300;
          color: #666;
          margin: 0 0 3rem;
          max-width: 380px;
          line-height: 1.7;
        }

        /* Grid */
        .moments-grid {
          display: grid;
          grid-template-columns: repeat(12, 1fr);
          gap: 1px;
          background: #e0e0e0;
          border: 1px solid #e0e0e0;
          border-radius: 12px;
          overflow: hidden;
          animation: momentsGridFade 0.5s 0.28s ease backwards;
        }

        /* Cards */
        .moments-card {
          position: relative;
          overflow: hidden;
          cursor: pointer;
          background: #fff;
          min-height: 180px;
        }

        .moments-card:nth-child(1) { grid-column: span 7; grid-row: span 2; min-height: 360px; }
        .moments-card:nth-child(2) { grid-column: span 5; }
        .moments-card:nth-child(3) { grid-column: span 5; }
        .moments-card:nth-child(4) { grid-column: span 4; min-height: 240px; }
        .moments-card:nth-child(5) { grid-column: span 4; }
        .moments-card:nth-child(6) { grid-column: span 4; }

        .moments-card-bg {
          position: absolute;
          inset: 0;
          transition: transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }

        .moments-card:hover .moments-card-bg {
          transform: scale(1.04);
        }

        .moments-card-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .moments-card-placeholder {
          width: 100%;
          height: 100%;
          background: #ece8e2;
        }

        .moments-card-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, transparent 30%, rgba(0,0,0,0.7) 100%);
          opacity: 0;
          transition: opacity 0.4s ease;
        }

        .moments-card:hover .moments-card-overlay {
          opacity: 1;
        }

        .moments-card-title-static {
          position: absolute;
          bottom: 1rem;
          left: 1.25rem;
          right: 1.25rem;
          font-family: 'Cormorant Garamond', serif;
          font-size: 1rem;
          font-weight: 400;
          color: #555;
          margin: 0;
          transition: opacity 0.3s;
        }

        .moments-card:hover .moments-card-title-static {
          opacity: 0;
        }

        .moments-card-content {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          padding: 1.25rem 1.5rem;
          transform: translateY(6px);
          opacity: 0;
          transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }

        .moments-card:hover .moments-card-content {
          transform: translateY(0);
          opacity: 1;
        }

        .moments-card-tag {
          display: block;
          font-size: 10px;
          font-weight: 500;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.65);
          margin-bottom: 4px;
        }

        .moments-card-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: 1.25rem;
          font-weight: 400;
          color: #fff;
          margin: 0;
          line-height: 1.25;
        }

        /* Footer */
        .moments-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-top: 2rem;
          padding-top: 1.5rem;
          border-top: 0.5px solid #e8e8e8;
          animation: momentsGridFade 0.5s 0.36s ease backwards;
        }

        .moments-count {
          font-size: 11px;
          color: #aaa;
          letter-spacing: 0.05em;
        }

        .moments-view-all {
          font-family: 'DM Sans', sans-serif;
          font-size: 12px;
          font-weight: 500;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: #111;
          border: 0.5px solid #ccc;
          background: transparent;
          padding: 8px 20px;
          border-radius: 100px;
          cursor: pointer;
          transition: background 0.25s ease;
        }

        .moments-view-all:hover {
          background: #f4f4f2;
        }

        /* Animations */
        @keyframes momentsGridFade {
          from { opacity: 0; transform: translateY(16px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        .moments-label    { animation: momentsGridFade 0.5s 0.05s ease backwards; }
        .moments-title    { animation: momentsGridFade 0.5s 0.12s ease backwards; }
        .moments-subtitle { animation: momentsGridFade 0.5s 0.18s ease backwards; }

        /* Responsive */
        @media (max-width: 768px) {
          .moments-card:nth-child(1),
          .moments-card:nth-child(2),
          .moments-card:nth-child(3),
          .moments-card:nth-child(4),
          .moments-card:nth-child(5),
          .moments-card:nth-child(6) {
            grid-column: span 12;
            min-height: 200px;
          }
        }
      `}</style>

      <section className="moments-root">
        <div className="moments-container">
          <p className="moments-label">Student Life</p>
          <h1 className="moments-title">
            Aspire <em>Moments</em>
          </h1>
          <p className="moments-subtitle">
            A glimpse into student life, learning, and achievements.
          </p>

          <div className="moments-grid">
            {gallery.map((item) => (
              <div key={item.id} className="moments-card">
                <div className="moments-card-bg">
                  {item.image ? (
                    <img
                      src={item.image}
                      alt={item.title}
                      className="moments-card-img"
                    />
                  ) : (
                    <div className="moments-card-placeholder" />
                  )}
                </div>
                <div className="moments-card-overlay" />
                <p className="moments-card-title-static">{item.title}</p>
                <div className="moments-card-content">
                  <span className="moments-card-tag">
                    {item.category ?? "Moment"}
                  </span>
                  <p className="moments-card-title">{item.title}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="moments-footer">
            <span className="moments-count">{gallery.length} moments captured</span>
            <button className="moments-view-all">View all →</button>
          </div>
        </div>
      </section>
    </>
  );
}