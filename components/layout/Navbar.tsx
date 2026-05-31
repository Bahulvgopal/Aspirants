"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { navbarLinks } from "@/data/navbar";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState("");
  const pathname = usePathname();

  return (
    <>
      <style>{`
        .nav {
          position: sticky;
          top: 0;
          z-index: 100;
          background: #fff;
          border-bottom: 1px solid #f0e0e3;
        }

        .nav-inner {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 1.5rem;
          height: 64px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 2rem;
        }

        /* ── Brand ── */
        .brand {
          display: flex;
          flex-direction: column;
          line-height: 1;
          text-decoration: none;
          gap: 2px;
          flex-shrink: 0;
        }
        .brand-title {
          font-size: 1.15rem;
          font-weight: 900;
          letter-spacing: .18em;
          color: #6B0119;
          text-transform: uppercase;
        }
        .brand-sub {
          font-size: .58rem;
          font-weight: 600;
          letter-spacing: .22em;
          text-transform: uppercase;
          color: #a3424f;
        }

        /* ── Desktop links ── */
        .nav-links {
          display: flex;
          align-items: center;
          gap: .25rem;
          margin-left: auto;
        }

        .nav-link {
          display: inline-flex;
          align-items: center;
          gap: 4px;
          font-size: .83rem;
          font-weight: 500;
          color: #3a3a3a;
          text-decoration: none;
          padding: .45rem .75rem;
          border-radius: 8px;
          border: none;
          background: none;
          cursor: pointer;
          transition: color .15s, background .15s;
          white-space: nowrap;
        }
        .nav-link:hover { color: #6B0119; background: #fdf0f2; }
        .nav-link.active { color: #6B0119; font-weight: 700; }

        /* ── Dropdown ── */
        .dropdown-wrap {
          position: relative;
        }
        .dropdown-wrap:hover .dropdown { opacity: 1; pointer-events: auto; transform: translateY(0); }
        .dropdown-wrap:hover > .nav-link { color: #6B0119; background: #fdf0f2; }

        .dropdown {
          position: absolute;
          top: calc(100% + 8px);
          left: 50%;
          transform: translateX(-50%) translateY(-6px);
          background: #fff;
          border: 1px solid #f0e0e3;
          border-radius: 14px;
          padding: .5rem;
          min-width: 210px;
          box-shadow: 0 12px 36px -8px rgba(107,1,25,0.12);
          opacity: 0;
          pointer-events: none;
          transition: opacity .18s, transform .18s;
          z-index: 200;
        }
        .dropdown::before {
          content: '';
          position: absolute;
          top: -5px;
          left: 50%;
          transform: translateX(-50%) rotate(45deg);
          width: 9px;
          height: 9px;
          background: #fff;
          border-top: 1px solid #f0e0e3;
          border-left: 1px solid #f0e0e3;
        }

        .dropdown-item {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: .82rem;
          font-weight: 500;
          color: #3a3a3a;
          text-decoration: none;
          padding: .6rem .9rem;
          border-radius: 9px;
          transition: background .15s, color .15s;
        }
        .dropdown-item::before {
          content: '';
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background: #f0e0e3;
          flex-shrink: 0;
          transition: background .15s;
        }
        .dropdown-item:hover { background: #fdf0f2; color: #6B0119; }
        .dropdown-item:hover::before { background: #6B0119; }

        /* ── CTA ── */
        .cta {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: .8rem;
          font-weight: 700;
          letter-spacing: .04em;
          text-transform: uppercase;
          color: #fff;
          background: #6B0119;
          border-radius: 10px;
          padding: .55rem 1.1rem;
          text-decoration: none;
          margin-left: .5rem;
          transition: background .18s, box-shadow .18s;
          white-space: nowrap;
        }
        .cta:hover {
          background: #530114;
          box-shadow: 0 4px 16px -4px rgba(107,1,25,0.35);
        }

        /* ── Mobile toggle ── */
        .mobile-btn {
          display: none;
          background: none;
          border: none;
          cursor: pointer;
          color: #6B0119;
          padding: .35rem;
          border-radius: 8px;
          transition: background .15s;
        }
        .mobile-btn:hover { background: #fdf0f2; }

        /* ── Mobile menu ── */
        .mobile {
          border-top: 1px solid #f0e0e3;
          padding: .75rem 1.25rem 1.25rem;
          display: flex;
          flex-direction: column;
          gap: .15rem;
          background: #fff;
        }

        .mobile-item {
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 100%;
          font-size: .9rem;
          font-weight: 500;
          color: #3a3a3a;
          text-decoration: none;
          background: none;
          border: none;
          cursor: pointer;
          padding: .75rem .5rem;
          border-bottom: 1px solid #fdf0f2;
          text-align: left;
          transition: color .15s;
        }
        .mobile-item:hover { color: #6B0119; }

        .mobile-sub {
          display: flex;
          flex-direction: column;
          padding: .25rem 0 .25rem 1rem;
          border-left: 2px solid #f0e0e3;
          margin: .15rem 0 .15rem .5rem;
          gap: .1rem;
        }
        .mobile-sub a {
          font-size: .84rem;
          font-weight: 500;
          color: #6b7280;
          text-decoration: none;
          padding: .5rem .75rem;
          border-radius: 8px;
          transition: color .15s, background .15s;
        }
        .mobile-sub a:hover { color: #6B0119; background: #fdf0f2; }

        .mobile-cta {
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: .85rem;
          font-weight: 700;
          letter-spacing: .05em;
          text-transform: uppercase;
          color: #fff;
          background: #6B0119;
          border-radius: 12px;
          padding: .85rem 1rem;
          text-decoration: none;
          margin-top: .75rem;
          transition: background .18s;
        }
        .mobile-cta:hover { background: #530114; }

        .rot { transform: rotate(180deg); transition: transform .2s; }

        @media (max-width: 768px) {
          .nav-links { display: none; }
          .mobile-btn { display: flex; }
        }
      `}</style>

      <header className="nav">
        <nav className="nav-inner">

          {/* Brand */}
          <Link href="/" className="brand">
            <span className="brand-title">Aspire</span>
            <span className="brand-sub">Tuition Centre</span>
          </Link>

          {/* Desktop */}
          <div className="nav-links">
            {navbarLinks.map((item) => {
              if (item.children) {
                return (
                  <div key={item.label} className="dropdown-wrap">
                    <button className="nav-link">
                      {item.label}
                      <ChevronDown size={13} />
                    </button>
                    <div className="dropdown">
                      {item.children.map((child) => (
                        <Link key={child.label} href={child.href} className="dropdown-item">
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                );
              }
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`nav-link${pathname === item.href ? " active" : ""}`}
                >
                  {item.label}
                </Link>
              );
            })}
            <Link href="/enquiry" className="cta">Admissions →</Link>
          </div>

          {/* Mobile toggle */}
          <button className="mobile-btn" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Toggle menu">
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </nav>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="mobile">
            {navbarLinks.map((item) => {
              if (item.children) {
                const open = openDropdown === item.label;
                return (
                  <div key={item.label}>
                    <button
                      className="mobile-item"
                      onClick={() => setOpenDropdown(open ? "" : item.label)}
                    >
                      {item.label}
                      <ChevronDown size={15} style={{ transform: open ? "rotate(180deg)" : "none", transition: "transform .2s" }} />
                    </button>
                    {open && (
                      <div className="mobile-sub">
                        {item.children.map((child) => (
                          <Link key={child.label} href={child.href} onClick={() => setMobileOpen(false)}>
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className="mobile-item"
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </Link>
              );
            })}
            <Link href="/enquiry" className="mobile-cta" onClick={() => setMobileOpen(false)}>
              Admissions →
            </Link>
          </div>
        )}
      </header>
    </>
  );
}