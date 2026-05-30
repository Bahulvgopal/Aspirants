import Link from "next/link";
import { contactInfo } from "@/data/contact";

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white">
      <div className="container-custom py-14">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}

          <div>
            <h2 className="text-2xl font-bold text-[#8B1E2D]">
              Aspire Tuition
            </h2>

            <p className="mt-4 text-gray-600">
              Smart learning, academic excellence
              and future-ready education.
            </p>
          </div>

          {/* Links */}

          <div>
            <h3 className="font-semibold text-[#8B1E2D]">
              Quick Links
            </h3>

            <div className="mt-4 flex flex-col gap-3">
              <Link href="/">Home</Link>
              <Link href="/about">About</Link>
              <Link href="/gallery">
                Gallery
              </Link>
              <Link href="/contact">
                Contact
              </Link>
            </div>
          </div>

          {/* Courses */}

          <div>
            <h3 className="font-semibold text-[#8B1E2D]">
              Courses
            </h3>

            <div className="mt-4 flex flex-col gap-3">
              <Link href="/courses/next">
                Aspire Next
              </Link>

              <Link href="/courses/elite">
                Aspire Elite
              </Link>

              <Link href="/courses/smart">
                Aspire Smart
              </Link>
            </div>
          </div>

          {/* Contact */}

          <div>
            <h3 className="font-semibold text-[#8B1E2D]">
              Contact
            </h3>

            <div className="mt-4 space-y-3 text-gray-600">
              <p>{contactInfo.phone}</p>
              <p>{contactInfo.email}</p>
              <p>{contactInfo.address}</p>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-200 pt-6 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Aspire
          Tuition Centre. All rights reserved.
        </div>
      </div>
    </footer>
  );
}