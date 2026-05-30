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
    <header className="nav">
      <nav className="nav-inner">
        {/* BRAND */}
        <Link href="/" className="brand">
          <span className="brand-title">ASPIRE</span>
          <span className="brand-sub">Tuition Centre</span>
        </Link>

        {/* DESKTOP */}
        <div className="nav-links">
          {navbarLinks.map((item) => {
            if (item.children) {
              return (
                <div key={item.label} className="dropdown-wrap">
                  <button className="nav-link">
                    {item.label}
                    <ChevronDown size={14} />
                  </button>

                  <div className="dropdown">
                    {item.children.map((child) => (
                      <Link
                        key={child.label}
                        href={child.href}
                        className="dropdown-item"
                      >
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
                className={`nav-link ${
                  pathname === item.href ? "active" : ""
                }`}
              >
                {item.label}
              </Link>
            );
          })}

          <Link href="/enquiry" className="cta">
            Admissions →
          </Link>
        </div>

        {/* MOBILE */}
        <button
          className="mobile-btn"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X /> : <Menu />}
        </button>
      </nav>

      {/* MOBILE MENU */}
      {mobileOpen && (
        <div className="mobile">
          {navbarLinks.map((item) => {
            if (item.children) {
              const open = openDropdown === item.label;

              return (
                <div key={item.label}>
                  <button
                    className="mobile-item"
                    onClick={() =>
                      setOpenDropdown(open ? "" : item.label)
                    }
                  >
                    {item.label}
                    <ChevronDown
                      className={open ? "rot" : ""}
                      size={16}
                    />
                  </button>

                  {open && (
                    <div className="mobile-sub">
                      {item.children.map((child) => (
                        <Link
                          key={child.label}
                          href={child.href}
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
                className="mobile-item"
              >
                {item.label}
              </Link>
            );
          })}

          <Link href="/enquiry" className="mobile-cta">
            Admissions →
          </Link>
        </div>
      )}
    </header>
  );
}