"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import SectionHeading from "../shared/SectionHeading";
import { news } from "@/data/news";

export default function NewsPreview() {
  const [items, setItems] = useState(news);

  useEffect(() => {
    const interval = setInterval(() => {
      setItems([...news]);
    }, 30_000);
    return () => clearInterval(interval);
  }, []);

  const featured = items[0];
  const sideNews = items.slice(1, 4);

  if (!featured) return null;

  return (
    <>
      <style>{`
        @keyframes np-blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.25; }
        }
        .featured-button:hover {
          background: #4a000f !important;
        }
        .side-link:hover {
          color: #4a000f !important;
        }
        .view-all-news-btn:hover {
          background: #f9f0f2 !important;
        }
        .side-news-card:hover {
          border-color: #6B0119 !important;
        }
      `}</style>

      <section
        className="news-premium-section section-padding"
      >
        <div className="container-custom">
          <SectionHeading
            title="Latest News & Updates"
            subtitle="Stay informed with Aspire's achievements, announcements and academic milestones."
          />

          <div
            className="news-premium-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "1.4fr 1fr",
              gap: "1.25rem",
              marginBottom: "2rem",
            }}
          >
            {/* Featured News */}
            <article
              className="featured-news-card"
              style={{
                background: "#ffffff",
                border: "0.5px solid #e5e7eb",
                borderTop: "3px solid #6B0119",
                borderRadius: "12px",
                padding: "2rem",
                display: "flex",
                flexDirection: "column",
                gap: "14px",
                position: "relative",
                overflow: "hidden",
              }}
            >
              <div
                className="featured-badge"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "6px",
                  background: "#f9f0f2",
                  color: "#6B0119",
                  fontSize: "11px",
                  fontWeight: 500,
                  padding: "4px 10px",
                  borderRadius: "6px",
                  width: "fit-content",
                  textTransform: "uppercase",
                  letterSpacing: "0.04em",
                }}
              >
                <span
                  aria-hidden="true"
                  style={{
                    display: "inline-block",
                    width: "6px",
                    height: "6px",
                    borderRadius: "50%",
                    background: "#6B0119",
                    animation: "np-blink 1.8s ease-in-out infinite",
                  }}
                />
                Featured Update
              </div>

              <span
                className="featured-date"
                style={{
                  fontSize: "12px",
                  color: "#9ca3af",
                }}
              >
                {featured.date}
              </span>

              <h2
                className="featured-title"
                style={{
                  fontSize: "20px",
                  fontWeight: 500,
                  color: "#111827",
                  margin: 0,
                  lineHeight: 1.4,
                }}
              >
                {featured.title}
              </h2>

              <p
                className="featured-description"
                style={{
                  fontSize: "14px",
                  color: "#6b7280",
                  lineHeight: 1.7,
                  margin: 0,
                  flex: 1,
                }}
              >
                {featured.description}
              </p>

             
            </article>

            {/* Side News */}
            <div
              className="side-news-wrapper"
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
              }}
            >
              {sideNews.map((item) => (
                <article
                  key={item.id}
                  className="side-news-card"
                  style={{
                    background: "#ffffff",
                    border: "0.5px solid #e5e7eb",
                    borderLeft: "3px solid #6B0119",
                    borderRadius: "8px",
                    padding: "1.1rem 1.25rem",
                    display: "flex",
                    flexDirection: "column",
                    gap: "8px",
                    transition: "border-color 0.15s",
                  }}
                >
                  <span
                    className="side-date"
                    style={{
                      fontSize: "11px",
                      color: "#9ca3af",
                    }}
                  >
                    {item.date}
                  </span>

                  <h3
                    className="side-title"
                    style={{
                      fontSize: "14px",
                      fontWeight: 500,
                      color: "#111827",
                      margin: 0,
                      lineHeight: 1.45,
                    }}
                  >
                    {item.title}
                  </h3>

                  <p
                    className="side-description"
                    style={{
                      fontSize: "13px",
                      color: "#6b7280",
                      margin: 0,
                      lineHeight: 1.6,
                      display: "-webkit-box",
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: "vertical",
                      overflow: "hidden",
                    }}
                  >
                    {item.description}
                  </p>

                  <Link
                    href="/news"
                    className="side-link"
                    style={{
                      fontSize: "12px",
                      color: "#6B0119",
                      fontWeight: 500,
                      textDecoration: "none",
                      alignSelf: "flex-end",
                      transition: "color 0.15s",
                    }}
                  >
                    Explore →
                  </Link>
                </article>
              ))}
            </div>
          </div>

          {/* Footer — single button */}
          <div
            className="news-footer"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "16px",
              marginTop: "2.5rem",
            }}
          >
            <Link
              href="/news"
              className="view-all-news-btn"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                border: "1.5px solid #6B0119",
                borderRadius: "8px",
                padding: "10px 28px",
                fontSize: "14px",
                fontWeight: 500,
                color: "#6B0119",
                textDecoration: "none",
                background: "transparent",
                transition: "background 0.15s",
              }}
            >
              View All News
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}