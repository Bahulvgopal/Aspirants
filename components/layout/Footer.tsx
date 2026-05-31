import Link from "next/link";
import { contactInfo } from "@/data/contact";

export default function Footer() {
  return (
    <>
      <style>{`
        .footer-link {
          font-size: 14px;
          color: rgba(255, 255, 255, 0.65);
          text-decoration: none;
          transition: color 0.15s ease;
        }
        .footer-link:hover {
          color: #ffffff;
        }
      `}</style>

      <footer
        style={{
          background: "#6B0119",
          fontFamily: "inherit",
        }}
      >
        <div
          className="container-custom"
          style={{ padding: "4rem 1.5rem 0" }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
              gap: "3rem",
            }}
          >
            {/* Brand */}
            <div>
              <h2
                style={{
                  fontSize: "22px",
                  fontWeight: 500,
                  color: "#ffffff",
                  margin: "0 0 4px",
                  letterSpacing: "-0.01em",
                }}
              >
                Aspire{" "}
                <span style={{ color: "rgba(255,255,255,0.7)" }}>Tuition</span>
              </h2>

              <p
                style={{
                  fontSize: "13px",
                  color: "rgba(255,255,255,0.6)",
                  margin: "12px 0 0",
                  lineHeight: 1.7,
                  maxWidth: "200px",
                }}
              >
                Smart learning, academic excellence and future-ready education.
              </p>

              <div
                style={{
                  width: "32px",
                  height: "2px",
                  background: "rgba(255,255,255,0.4)",
                  borderRadius: "2px",
                  marginTop: "20px",
                }}
              />
            </div>

            {/* Quick Links */}
            <div>
              <h3
                style={{
                  fontSize: "11px",
                  fontWeight: 500,
                  color: "rgba(255,255,255,0.45)",
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                  margin: "0 0 16px",
                }}
              >
                Quick Links
              </h3>

              <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                {[
                  { href: "/", label: "Home" },
                  { href: "/about", label: "About" },
                  { href: "/gallery", label: "Gallery" },
                  { href: "/contact", label: "Contact" },
                ].map(({ href, label }) => (
                  <Link key={href} href={href} className="footer-link">
                    {label}
                  </Link>
                ))}
              </div>
            </div>

            {/* Courses */}
            <div>
              <h3
                style={{
                  fontSize: "11px",
                  fontWeight: 500,
                  color: "rgba(255,255,255,0.45)",
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                  margin: "0 0 16px",
                }}
              >
                Courses
              </h3>

              <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                {[
                  { href: "/courses/next", label: "Aspire Next" },
                  { href: "/courses/elite", label: "Aspire Elite" },
                  { href: "/courses/smart", label: "Aspire Smart" },
                ].map(({ href, label }) => (
                  <Link key={href} href={href} className="footer-link">
                    {label}
                  </Link>
                ))}
              </div>
            </div>

            {/* Contact */}
            <div>
              <h3
                style={{
                  fontSize: "11px",
                  fontWeight: 500,
                  color: "rgba(255,255,255,0.45)",
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                  margin: "0 0 16px",
                }}
              >
                Contact
              </h3>

              <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                {[contactInfo.phone, contactInfo.email, contactInfo.address].map(
                  (info) => (
                    <p
                      key={info}
                      style={{
                        fontSize: "14px",
                        color: "rgba(255,255,255,0.65)",
                        margin: 0,
                        lineHeight: 1.5,
                      }}
                    >
                      {info}
                    </p>
                  )
                )}
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div
            style={{
              marginTop: "3rem",
              borderTop: "0.5px solid rgba(255,255,255,0.15)",
              padding: "1.25rem 0",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <p
              style={{
                fontSize: "12px",
                color: "rgba(255,255,255,0.4)",
                margin: 0,
                textAlign: "center",
              }}
            >
              © {new Date().getFullYear()} Aspire Tuition Centre. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}