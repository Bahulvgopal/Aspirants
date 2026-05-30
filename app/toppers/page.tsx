import SectionHeading from "@/components/shared/SectionHeading";
import TopperCard from "@/components/toppers/TopperCard";
import { toppers } from "@/data/toppers";

export default function ToppersPage() {
  return (
    <main className="min-h-screen bg-[#fff8f7]">
      {/* Hero Section */}

      <section className="relative overflow-hidden bg-gradient-to-b from-red-50 to-white py-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(139,30,45,0.05),transparent_40%),radial-gradient(circle_at_bottom_left,rgba(139,30,45,0.03),transparent_40%)]" />

        <div className="relative mx-auto max-w-7xl px-4 text-center">
          <span className="inline-flex rounded-full bg-red-100 px-5 py-2 text-sm font-semibold text-[#8B1E2D]">
            Celebrating Excellence
          </span>

          <h1 className="mt-6 text-5xl font-bold tracking-tight text-[#241919] md:text-7xl">
            Aspire Wall of Fame
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-gray-600">
            Honoring the outstanding achievements of our students who
            transformed dedication into success and dreams into reality.
          </p>
        </div>
      </section>

      {/* Stats */}

      <section className="py-16">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 md:grid-cols-2 lg:grid-cols-4">
          <StatCard
            value="1200+"
            label="Selections"
          />

          <StatCard
            value="42"
            label="IIT Admissions"
          />

          <StatCard
            value="18"
            label="AIIMS Admissions"
          />

          <StatCard
            value="98%"
            label="Success Rate"
          />
        </div>
      </section>

      {/* Featured Topper */}

      <section className="pb-10">
        <div className="mx-auto max-w-7xl px-4">
          <div className="rounded-[32px] bg-white p-8 shadow-sm md:p-12">
            <div className="grid items-center gap-10 lg:grid-cols-2">
              <div>
                <span className="rounded-full bg-red-100 px-4 py-2 text-sm font-semibold text-[#8B1E2D]">
                  Featured Achiever
                </span>

                <h2 className="mt-5 text-4xl font-bold text-[#241919]">
                  Aryan Sharma
                </h2>

                <p className="mt-4 text-lg text-gray-600">
                  AIR 14 in JEE Advanced with exceptional academic
                  performance and dedication.
                </p>

                <div className="mt-8 grid grid-cols-2 gap-4">
                  <div className="rounded-2xl bg-red-50 p-5">
                    <p className="text-sm text-gray-500">
                      Rank
                    </p>

                    <h3 className="mt-2 text-2xl font-bold text-[#8B1E2D]">
                      AIR 14
                    </h3>
                  </div>

                  <div className="rounded-2xl bg-red-50 p-5">
                    <p className="text-sm text-gray-500">
                      Score
                    </p>

                    <h3 className="mt-2 text-2xl font-bold text-[#8B1E2D]">
                      342/360
                    </h3>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-center">
                <div className="flex h-80 w-80 items-center justify-center rounded-full bg-gradient-to-br from-[#8B1E2D] to-red-400 text-center text-white shadow-2xl">
                  <div>
                    <h3 className="text-6xl font-bold">
                      AIR 14
                    </h3>

                    <p className="mt-2">
                      JEE Advanced
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Topper Grid */}

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4">
          <SectionHeading
            title="Our Achievers"
            subtitle="Students who made Aspire proud."
          />

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {toppers.map((topper) => (
              <TopperCard
                key={topper.id}
                topper={topper}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}

      <section className="pb-24">
        <div className="mx-auto max-w-7xl px-4">
          <div className="overflow-hidden rounded-[32px] bg-[#8B1E2D] p-10 text-center text-white md:p-16">
            <h2 className="text-4xl font-bold">
              Want to be our next Topper?
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-red-100">
              Join Aspire and begin your journey towards academic
              excellence with expert mentorship and structured learning.
            </p>

            <button className="mt-8 rounded-full bg-white px-8 py-4 font-semibold text-[#8B1E2D] transition hover:scale-105">
              Apply for Admission
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}

function StatCard({
  value,
  label,
}: {
  value: string;
  label: string;
}) {
  return (
    <div className="rounded-3xl bg-white p-8 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      <h3 className="text-4xl font-bold text-[#8B1E2D]">
        {value}
      </h3>

      <p className="mt-2 text-gray-600">
        {label}
      </p>
    </div>
  );
}