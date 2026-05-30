
"use client";


import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#faf8f5] py-16 lg:py-28">
      {/* Background blur */}

      <div className="absolute left-[-120px] top-10 h-[350px] w-[350px] rounded-full bg-red-100 blur-[120px]" />

      <div className="absolute bottom-0 right-[-100px] h-[300px] w-[300px] rounded-full bg-orange-100 blur-[120px]" />

      <div className="container-custom relative z-10 grid items-center gap-14 lg:grid-cols-2">
        {/* Left */}

        <div>
          <span className="rounded-full border border-red-200 bg-red-50 px-5 py-2 text-sm font-medium text-[#8B1E2D]">
            Admissions Open • 2026
          </span>

          <h1 className="mt-8 text-4xl font-bold leading-tight text-[#8B1E2D] lg:text-7xl">
            Smart Learning
            <br />
            Elite Coaching
            <br />
            Future Ready
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-gray-700">
            Aspire Tuition Centre helps students
            achieve academic excellence through
            structured mentoring, science learning,
            coding exposure and result-oriented
            education.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/courses/next"
              className="rounded-full bg-[#8B1E2D] px-8 py-4 font-semibold text-white transition hover:scale-105"
            >
              Explore Courses
            </Link>

            <Link
              href="/enquiry"
              className="rounded-full border border-[#8B1E2D] px-8 py-4 font-semibold text-[#8B1E2D] transition hover:bg-red-50"
            >
              Admission Enquiry
            </Link>
          </div>

          <div className="mt-12 flex flex-wrap gap-10">
            <div>
              <h3 className="text-3xl font-bold text-[#8B1E2D]">
                1000+
              </h3>
              <p className="text-gray-600">
                Students
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-[#8B1E2D]">
                2020
              </h3>
              <p className="text-gray-600">
                Established
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-[#8B1E2D]">
                7+
              </h3>
              <p className="text-gray-600">
                Programmes
              </p>
            </div>
          </div>
        </div>

        {/* Right */}

        <div className="relative flex justify-center">
          <div className="absolute h-[500px] w-[500px] rounded-full bg-red-100 blur-[100px]" />

          <motion.div
            animate={{
              y: [0, -10, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
            }}
            className="relative z-10"
          >
            <Image
              src="/images/hero-student.png"
              alt="Aspire Student"
              width={500}
              height={650}
              priority
              className="rounded-[32px] object-cover shadow-2xl"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
