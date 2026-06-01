"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { navbarLinks } from "@/data/navbar";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState("");
  const [activeDropdown, setActiveDropdown] = useState("");
  const pathname = usePathname();

  return (
    <>
      <style>{`
        .nav {
          position: sticky;
          top: 0;
          z-index: 100;
          background: #fff;
          border-bottom: 1px solid #f0f0f0;
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
          align-items: center;
          text-decoration: none;
          flex-shrink: 0;
        }
        .brand-logo {
          height: 44px;
          width: auto;
          object-fit: contain;
          display: block;
        }
        @media (max-width: 768px) {
          .brand-logo { height: 36px; }
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
          position: relative;
        }
        .nav-link:hover {
          color: #d11215;
          background: #fff0f0;
        }
        .nav-link.active {
          color: #d11215;
          font-weight: 700;
        }
        .nav-link.active::after {
          content: '';
          position: absolute;
          bottom: -1px;
          left: 50%;
          transform: translateX(-50%);
          width: 20px;
          height: 2px;
          background: #d11215;
          border-radius: 2px;
        }

        /* ── Dropdown ── */
        .dropdown-wrap { position: relative; }

        .dropdown {
          position: absolute;
          top: calc(100% + 10px);
          left: 50%;
          transform: translateX(-50%);
          background: #fff;
          border: 1px solid #f0e0e0;
          border-radius: 14px;
          padding: .5rem;
          min-width: 220px;
          box-shadow: 0 16px 40px -8px rgba(209,18,21,0.1);
          z-index: 200;
          animation: dropIn .16s ease;
        }
        @keyframes dropIn {
          from { opacity: 0; transform: translateX(-50%) translateY(-6px); }
          to   { opacity: 1; transform: translateX(-50%) translateY(0); }
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
          border-top: 1px solid #f0e0e0;
          border-left: 1px solid #f0e0e0;
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
          background: #f0e0e0;
          flex-shrink: 0;
          transition: background .15s;
        }
        .dropdown-item:hover {
          background: #fff0f0;
          color: #d11215;
        }
        .dropdown-item:hover::before { background: #d11215; }
        .dropdown-item.active-child  { color: #d11215; font-weight: 600; }
        .dropdown-item.active-child::before { background: #d11215; }

        .nav-overlay {
          position: fixed;
          inset: 0;
          z-index: 99;
        }

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
          background: #d11215;
          border-radius: 10px;
          padding: .55rem 1.1rem;
          text-decoration: none;
          margin-left: .5rem;
          transition: background .18s, box-shadow .18s;
          white-space: nowrap;
        }
        .cta:hover {
          background: #b00e11;
          box-shadow: 0 4px 16px -4px rgba(209,18,21,0.45);
        }

        /* ── Mobile toggle ── */
        .mobile-btn {
          display: none;
          background: none;
          border: none;
          cursor: pointer;
          color: #d11215;
          padding: .35rem;
          border-radius: 8px;
          transition: background .15s;
        }
        .mobile-btn:hover { background: #fff0f0; }

        /* ── Mobile menu ── */
        .mobile {
          border-top: 1px solid #f0f0f0;
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
          border-bottom: 1px solid #f5f5f5;
          text-align: left;
          transition: color .15s;
        }
        .mobile-item:hover { color: #d11215; }
        .mobile-item.active-mobile { color: #d11215; font-weight: 700; }

        .mobile-sub {
          display: flex;
          flex-direction: column;
          padding: .25rem 0 .25rem 1rem;
          border-left: 2px solid #f0e0e0;
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
        .mobile-sub a:hover {
          color: #d11215;
          background: #fff0f0;
        }
        .mobile-sub a.active-child-mobile {
          color: #d11215;
          font-weight: 600;
          background: #fff0f0;
        }

        .mobile-cta {
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: .85rem;
          font-weight: 700;
          letter-spacing: .05em;
          text-transform: uppercase;
          color: #fff;
          background: #d11215;
          border-radius: 12px;
          padding: .85rem 1rem;
          text-decoration: none;
          margin-top: .75rem;
          transition: background .18s;
        }
        .mobile-cta:hover { background: #b00e11; }

        @media (max-width: 768px) {
          .nav-links  { display: none; }
          .mobile-btn { display: flex; }
        }
      `}</style>

      {activeDropdown && (
        <div className="nav-overlay" onClick={() => setActiveDropdown("")} />
      )}

      <header className="nav">
        <nav className="nav-inner">

          {/* Brand */}
          <Link href="/" className="brand">
            <Image
              src="/images/asplogo.png"
              alt="Aspire Tuition Centre"
              width={2000}
              height={50}
              className="brand-logo"
              priority
            />
          </Link>

          {/* Desktop */}
          <div className="nav-links">
            {navbarLinks.map((item) => {
              if (item.children) {
                const isOpen = activeDropdown === item.label;
                const isParentActive = item.children.some((c) => c.href === pathname);

                return (
                  <div key={item.label} className="dropdown-wrap">
                    <button
                      className={`nav-link${isParentActive ? " active" : ""}`}
                      onClick={() => setActiveDropdown(isOpen ? "" : item.label)}
                    >
                      {item.label}
                      <ChevronDown
                        size={13}
                        style={{
                          transform: isOpen ? "rotate(180deg)" : "none",
                          transition: "transform .2s",
                        }}
                      />
                    </button>

                    {isOpen && (
                      <div className="dropdown">
                        {item.children.map((child) => (
                          <Link
                            key={child.label}
                            href={child.href}
                            className={`dropdown-item${pathname === child.href ? " active-child" : ""}`}
                            onClick={() => setActiveDropdown("")}
                          >
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
                  className={`nav-link${pathname === item.href ? " active" : ""}`}
                >
                  {item.label}
                </Link>
              );
            })}
            <Link href="/enquiry" className="cta">Admissions →</Link>
          </div>

          {/* Mobile toggle */}
          <button
            className="mobile-btn"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </nav>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="mobile">
            {navbarLinks.map((item) => {
              if (item.children) {
                const open = openDropdown === item.label;
                const isParentActive = item.children.some((c) => c.href === pathname);

                return (
                  <div key={item.label}>
                    <button
                      className={`mobile-item${isParentActive ? " active-mobile" : ""}`}
                      onClick={() => setOpenDropdown(open ? "" : item.label)}
                    >
                      {item.label}
                      <ChevronDown
                        size={15}
                        style={{
                          transform: open ? "rotate(180deg)" : "none",
                          transition: "transform .2s",
                          color: isParentActive ? "#d11215" : undefined,
                        }}
                      />
                    </button>
                    {open && (
                      <div className="mobile-sub">
                        {item.children.map((child) => (
                          <Link
                            key={child.label}
                            href={child.href}
                            className={pathname === child.href ? "active-child-mobile" : ""}
                            onClick={() => setMobileOpen(false)}
                          >
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
                  className={`mobile-item${pathname === item.href ? " active-mobile" : ""}`}
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </Link>
              );
            })}
            <Link
              href="/enquiry"
              className="mobile-cta"
              onClick={() => setMobileOpen(false)}
            >
              Admissions →
            </Link>
          </div>
        )}
      </header>
    </>
  );
}