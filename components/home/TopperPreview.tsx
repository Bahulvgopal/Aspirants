import Link from "next/link";
import SectionHeading from "../shared/SectionHeading";
import { toppers } from "@/data/toppers";
import TopperCard from "../toppers/TopperCard";
import FadeUp from "../shared/FadeUp";

export default function TopperPreview() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <SectionHeading
          title="Top Achievers"
          subtitle="Celebrating our students who achieved excellence."
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {toppers
            .slice(0, 3)
            .map((topper, index) => (
              <FadeUp
                key={topper.id}
                delay={index * 0.1}
              >
                <TopperCard topper={topper} />
              </FadeUp>
            ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/toppers"
            className="rounded-full bg-[#8B1E2D] px-7 py-4 text-white"
          >
            View All Toppers
          </Link>
        </div>
      </div>
    </section>
  );
}
