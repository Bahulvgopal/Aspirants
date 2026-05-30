import Link from "next/link";
import SectionHeading from "../shared/SectionHeading";
import { toppers } from "@/data/toppers";
import TopperCard from "../toppers/TopperCard";
import FadeUp from "../shared/FadeUp";

export default function TopperPreview() {
  return (
    <section className="topper-section">
      <div className="container-custom">
        <div className="topper-header">
          <span className="topper-badge">
            🏆 Excellence & Achievement
          </span>

          <SectionHeading
            title="Top Achievers"
            subtitle="Celebrating the outstanding performances of our students who set new benchmarks of success."
          />
        </div>

        <div className="topper-grid">
          {toppers.slice(0, 3).map((topper, index) => (
            <FadeUp
              key={topper.id}
              delay={index * 0.15}
            >
              <div className="topper-card-wrapper">
                <TopperCard topper={topper} />
              </div>
            </FadeUp>
          ))}
        </div>

        <div className="topper-action">
          <Link href="/toppers" className="topper-btn">
            View All Achievers
            <span>→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}