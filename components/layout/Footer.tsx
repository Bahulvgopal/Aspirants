import Link from "next/link";
import { contactInfo } from "@/data/contact";
import Image from "next/image";

export default function Footer() {
  return (
    <>
      <style>{`
        .footer-link {
          font-size: 14px;
          color: rgba(255, 255, 255, 0.55);
          text-decoration: none;
          transition: color 0.15s ease;
        }
        .footer-link:hover {
          color: #d11215;
        }
      `}</style>

      <footer
        style={{
          background: "#0a0a0a",
          borderTop: "1px solid #1a1a1a",
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
              <Link
                href="/"
                className="brand"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "flex-start",
                }}
              >
                <Image
                  src="/images/aspt.png"
                  alt="Aspire Tuition Centre"
                  width={70}
                  height={70}
                  priority
                  style={{
                    display: "block",
                    objectFit: "contain",
                    marginRight: "auto",
                  }}
                />
              </Link>

              <p
                style={{
                  fontSize: "13px",
                  color: "rgba(255,255,255,0.45)",
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
                  background: "#d11215",
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
                  fontWeight: 600,
                  color: "rgba(255,255,255,0.3)",
                  textTransform: "uppercase",
                  letterSpacing: "0.15em",
                  margin: "0 0 16px",
                }}
              >
                Quick Links
              </h3>

              <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                {[
                  { href: "/",        label: "Home"    },
                  { href: "/about",   label: "About"   },
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
                  fontWeight: 600,
                  color: "rgba(255,255,255,0.3)",
                  textTransform: "uppercase",
                  letterSpacing: "0.15em",
                  margin: "0 0 16px",
                }}
              >
                Courses
              </h3>

              <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                {[
                  { href: "/courses/next",  label: "Aspire Next"  },
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
                  fontWeight: 600,
                  color: "rgba(255,255,255,0.3)",
                  textTransform: "uppercase",
                  letterSpacing: "0.15em",
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
                        color: "rgba(255,255,255,0.45)",
                        margin: 0,
                        lineHeight: 1.6,
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
              borderTop: "1px solid #1a1a1a",
              padding: "1.25rem 0",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              flexWrap: "wrap",
              gap: "8px",
            }}
          >
            <p
              style={{
                fontSize: "12px",
                color: "rgba(255,255,255,0.25)",
                margin: 0,
              }}
            >
              © {new Date().getFullYear()} Aspire Tuition Centre. All rights reserved.
            </p>
            <div
              style={{
                width: "6px",
                height: "6px",
                borderRadius: "50%",
                background: "#d11215",
                flexShrink: 0,
              }}
            />
          </div>
        </div>
      </footer>
    </>
  );
}