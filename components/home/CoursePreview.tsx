import Link from "next/link";
import { courses } from "@/data/courses";
import FadeUp from "../shared/FadeUp";

const courseIcons = [
  { path: "M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" },
  { path: "M15.75 15.75V18m-7.5-6.75h.008v.008H8.25v-.008Zm0 2.25h.008v.008H8.25V13.5Zm0 2.25h.008v.008H8.25v-.008Zm0 2.25h.008v.008H8.25V18Zm2.498-6.75h.007v.008h-.007v-.008Zm0 2.25h.007v.008h-.007V13.5Zm0 2.25h.007v.008h-.007v-.008Zm0 2.25h.007v.008h-.007V18Zm2.504-6.75h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V13.5Zm0 2.25h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V18Zm2.498-6.75h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V13.5ZM8.25 6h7.5v2.25h-7.5V6ZM12 2.25c-1.892 0-3.758.11-5.593.322C5.307 2.7 4.5 3.614 4.5 4.677V19.5a2.25 2.25 0 0 0 2.25 2.25h10.5a2.25 2.25 0 0 0 2.25-2.25V4.677c0-1.063-.307-1.977-1.157-2.105A48.678 48.678 0 0 0 12 2.25Z" },
  { path: "M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25m18 0A2.25 2.25 0 0 0 18.75 3H5.25A2.25 2.25 0 0 0 3 5.25m18 0V12a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 12V5.25" },
  { path: "M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5" },
  { path: "M10.5 6a7.5 7.5 0 1 0 7.5 7.5h-7.5V6Z M13.5 10.5H21A7.5 7.5 0 0 0 13.5 3v7.5Z" },
  { path: "M9.75 3.104v5.714a2.25 2.25 0 0 1-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 0 1 4.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0 1 12 15a9.065 9.065 0 0 0-6.23-.693L5 14.5m14.8.8 1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0 1 12 21a48.309 48.309 0 0 1-8.135-.687c-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" },
];

const subjectTags = [
  ["Mathematics", "Science", "English"],
  ["Physics", "Chemistry", "Biology"],
  ["Computer Science", "IT Theory"],
  ["Commerce", "Accounts", "Economics"],
  ["Entrance Prep", "Mock Tests"],
  ["All Subjects", "Crash Course"],
];

export default function CoursePreview() {
  return (
    <section className="section-padding" style={{ background: "#fff" }}>
      <style>{`
        .cp-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.25rem;
          margin-bottom: 4rem;
          align-items: stretch;
        }

        .cp-card {
          background: #fff;
          border: 1.5px solid #f1e8e8;
          border-radius: 16px;
          padding: 1.6rem;
          display: flex;
          flex-direction: column;
          text-decoration: none;
          position: relative;
          overflow: hidden;
          transition: border-color .2s, box-shadow .2s, transform .18s;
          height: 100%;
          box-sizing: border-box;
        }
        .cp-card::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 3px;
          background: #;
          transform: scaleX(0);
          transform-origin: left;
          transition: transform .28s ease;
        }
        .cp-card:hover {
          border-color: #6B0119;
          box-shadow: 0 8px 28px -6px rgba(220,38,38,0.15);
          transform: translateY(-3px);
        }
        .cp-card:hover::before { transform: scaleX(1); }
        .cp-card:hover .cp-enroll {
          background: #6B0119;
          color: #fff;
        }
        .cp-card:hover .cp-enroll svg { stroke: #fff; transform: translateX(2px); }

        .cp-icon-box {
          width: 52px;
          height: 52px;
          border-radius: 14px;
          background: #FEF2F2;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          transition: background .2s;
        }
        .cp-card:hover .cp-icon-box { background: #6B0119; }
        .cp-card:hover .cp-icon-box svg { stroke: #fff; }

        .cp-num-badge {
          font-size: .68rem;
          font-weight: 700;
          letter-spacing: .08em;
          text-transform: uppercase;
          color: #6B0119;
          background: #FEF2F2;
          border-radius: 8px;
          padding: .28rem .6rem;
          line-height: 1;
          border: 1px solid #fecaca;
        }

        .cp-tag {
          font-size: .65rem;
          font-weight: 600;
          letter-spacing: .05em;
          text-transform: uppercase;
          color: #991B1B;
          background: #FEF2F2;
          border: 1px solid #fecaca;
          border-radius: 5px;
          padding: .18rem .55rem;
          white-space: nowrap;
        }

        .cp-enroll {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          font-size: .78rem;
          font-weight: 700;
          letter-spacing: .04em;
          text-transform: uppercase;
          color: #6B0119;
          background: #FEF2F2;
          border-radius: 10px;
          padding: .6rem 1.1rem;
          align-self: flex-start;
          transition: background .2s, color .2s;
        }
        .cp-enroll svg { transition: stroke .2s, transform .2s; }

        .cp-footer-bar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-top: 1rem;
          margin-top: auto;
          border-top: 1px solid #f1e8e8;
        }

        .stats-strip {
          display: flex;
          border: 1.5px solid #fecaca;
          border-radius: 14px;
          overflow: hidden;
          margin-top: 2rem;
        }
        .stats-cell {
          flex: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 1.1rem .5rem;
          background: #fff;
          border-right: 1.5px solid #fecaca;
          gap: .2rem;
        }
        .stats-cell:last-child { border-right: none; }

        @media (max-width: 900px) {
          .cp-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 560px) {
          .cp-grid { grid-template-columns: 1fr; }
          .stats-strip { flex-wrap: wrap; }
          .stats-cell { min-width: 50%; border-bottom: 1.5px solid #fecaca; }
        }
      `}</style>

      <div className="container-custom">

        {/* ── Header ── */}
        <div style={{ marginBottom: "3rem" }}>

          <div style={{ display: "flex", alignItems: "center", gap: "9px", marginBottom: "1.1rem" }}>
            <span style={{
              display: "inline-flex", alignItems: "center", justifyContent: "center",
              width: "26px", height: "26px", borderRadius: "8px",
              background: "#FEF2F2",
            }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#6B0119" strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round">
                <path d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 3.741-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
              </svg>
            </span>
            <span style={{ fontSize: "11px", fontWeight: 700, letterSpacing: ".2em", textTransform: "uppercase", color: "#6B0119" }}>
              Our Courses
            </span>
          </div>

          <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", flexWrap: "wrap", gap: "1.25rem" }}>
            <h2 style={{
              fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)",
              fontWeight: 800,
              color: "#111",
              lineHeight: 1.15,
              letterSpacing: "-.025em",
              margin: 0,
            }}>
              Courses Built for<br />
              <span style={{ color: "#6B0119" }}>Student Success</span>
            </h2>
            <p style={{
              fontSize: ".875rem",
              color: "#6b7280",
              lineHeight: 1.75,
              maxWidth: "40ch",
              margin: 0,
            }}>
              Expert faculty, focused batches, and structured learning — everything a student needs to excel.
            </p>
          </div>

          {/* Stats strip */}
          <div className="stats-strip">
            {[
              ["500+", "Students Enrolled"],
              ["95%",  "Pass Rate"],
              ["12+",  "Expert Tutors"],
              ["8+",   "Years of Trust"],
            ].map(([num, label]) => (
              <div key={label} className="stats-cell">
                <span style={{ fontSize: "1.55rem", fontWeight: 800, color: "#6B0119", lineHeight: 1 }}>{num}</span>
                <span style={{ fontSize: ".67rem", color: "#6b7280", fontWeight: 600, letterSpacing: ".05em", textTransform: "uppercase", textAlign: "center" }}>{label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* ── Cards grid ── */}
        <div className="cp-grid">
          {courses.map((course, index) => {
            const icon = courseIcons[index % courseIcons.length];
            const tags = subjectTags[index % subjectTags.length];

            return (
              <FadeUp key={course.slug} delay={index * 0.05}>
                <Link href={`/courses/${course.slug}`} className="cp-card">

                  {/* Icon + badge */}
                  <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: "1.1rem" }}>
                    <div className="cp-icon-box">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                        stroke="#6B0119" strokeWidth={1.7}
                        strokeLinecap="round" strokeLinejoin="round">
                        <path d={icon.path} />
                      </svg>
                    </div>
                    <span className="cp-num-badge">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 style={{
                    fontSize: "1.05rem",
                    fontWeight: 700,
                    color: "#111",
                    lineHeight: 1.35,
                    margin: "0 0 .45rem",
                    letterSpacing: "-.015em",
                  }}>
                    {course.title}
                  </h3>

                  {/* Description */}
                  <p style={{
                    fontSize: ".82rem",
                    color: "#6b7280",
                    lineHeight: 1.75,
                    margin: "0 0 1rem",
                  }}>
                    {course.subtitle}
                  </p>

                  {/* Tags */}
                  <div style={{ display: "flex", flexWrap: "wrap", gap: ".35rem", marginBottom: "1rem" }}>
                    {tags.map((tag) => (
                      <span key={tag} className="cp-tag">{tag}</span>
                    ))}
                  </div>

                  {/* Spacer */}
                  <div style={{ flexGrow: 1 }} />

                  {/* Footer */}
                  <div className="cp-footer-bar">
                    <span className="cp-enroll">
                      Enroll Now
                      <svg viewBox="0 0 16 16" fill="none" stroke="#6B0119" strokeWidth={2} width={13} height={13} strokeLinecap="round" strokeLinejoin="round">
                        <path d="M3 8h10M9 4l4 4-4 4" />
                      </svg>
                    </span>
                    <span style={{ fontSize: ".72rem", color: "#9ca3af", fontWeight: 500 }}>
                      View Details →
                    </span>
                  </div>

                </Link>
              </FadeUp>
            );
          })}
        </div>

      </div>
    </section>
  );
}