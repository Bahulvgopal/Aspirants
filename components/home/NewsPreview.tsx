import Link from "next/link";
import SectionHeading from "../shared/SectionHeading";
import { news } from "@/data/news";

export default function NewsPreview() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <SectionHeading
          title="Latest News"
          subtitle="Stay updated with Aspire announcements."
        />

        <div className="grid gap-6 lg:grid-cols-3">
          {news.map((item) => (
            <div
              key={item.id}
              className="rounded-[28px] border border-gray-200 p-8"
            >
              <p className="text-sm text-gray-500">
                {item.date}
              </p>

              <h3 className="mt-3 text-2xl font-bold text-[#8B1E2D]">
                {item.title}
              </h3>

              <p className="mt-4 text-gray-600">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/news"
            className="rounded-full bg-[#8B1E2D] px-7 py-4 text-white"
          >
            View All News
          </Link>
        </div>
      </div>
    </section>
  );
}