"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";

import { navbarLinks } from "@/data/navbar";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [courseOpen, setCourseOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/90 backdrop-blur-md">
      <nav className="container-custom flex h-20 items-center justify-between">
        {/* Logo */}

        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#8B1E2D] text-white font-bold">
            A
          </div>

          <div>
            <h1 className="font-bold text-[#8B1E2D] text-lg">
              Aspire Tuition
            </h1>

            <p className="text-xs text-gray-500">
              Learn • Grow • Succeed
            </p>
          </div>
        </Link>

        {/* Desktop Menu */}

        <div className="hidden lg:flex items-center gap-8">
          {navbarLinks.map((item) => {
            if (item.children) {
              return (
                <div key={item.label} className="relative group">
                  <button className="flex items-center gap-1 font-medium text-gray-700 hover:text-[#8B1E2D] transition">
                    {item.label}

                    <ChevronDown size={18} />
                  </button>

                  <div className="absolute top-10 hidden min-w-[260px] overflow-hidden rounded-[28px] border border-gray-200 bg-white shadow-2xl group-hover:block">
                    {item.children.map((course) => (
                      <Link
                        key={course.label}
                        href={course.href}
                        className="block px-6 py-4 text-sm transition hover:bg-red-50 hover:text-[#8B1E2D]"
                      >
                        {course.label}
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
                className={`relative font-medium transition
                ${
                  pathname === item.href
                    ? "text-[#8B1E2D]"
                    : "text-gray-700 hover:text-[#8B1E2D]"
                }`}              >
                {item.label}
              </Link>
            );
          })}

          <Link
            href="/enquiry"
            className="rounded-full bg-[#8B1E2D] px-6 py-3 text-sm font-semibold text-white hover:opacity-90 transition"
          >
            Enquire Now
          </Link>
        </div>

        {/* Mobile Button */}

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden"
        >
          {mobileOpen ? <X size={30} /> : <Menu size={30} />}
        </button>
      </nav>

      {/* Mobile Menu */}

      {mobileOpen && (
        <div className="lg:hidden border-t border-gray-200 bg-white">
          <div className="container-custom flex flex-col py-5">
            {navbarLinks.map((item) => {
              if (item.children) {
                return (
                  <div key={item.label}>
                    <button
                      onClick={() => setCourseOpen(!courseOpen)}
                      className="flex w-full items-center justify-between py-3 font-medium"
                    >
                      {item.label}

                      <ChevronDown size={18} />
                    </button>

                    {courseOpen && (
                      <div className="pl-4">
                        {item.children.map((course) => (
                          <Link
                            key={course.label}
                            href={course.href}
                            className="block py-2 text-sm text-gray-600"
                          >
                            {course.label}
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
                  className="py-3 font-medium"
                >
                  {item.label}
                </Link>
              );
            })}

            <Link
              href="/contact"
              className="mt-4 rounded-full bg-[#8B1E2D] px-5 py-3 text-center text-white"
            >
              Enquire Now
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}