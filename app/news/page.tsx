import SectionHeading from "@/components/shared/SectionHeading";
import { news } from "@/data/news";

export default function NewsPage() {
  return (
    <section className="section-padding">
      <div className="container-custom">
        <SectionHeading
          title="Latest News"
          subtitle="Aspire announcements and updates."
        />

        <div className="grid gap-6">
          {news.map((item) => (
            <div
              key={item.id}
              className="rounded-[28px] border border-gray-200 bg-white p-8"
            >
              <p className="text-sm text-gray-500">
                {item.date}
              </p>

              <h2 className="mt-3 text-2xl font-bold text-[#8B1E2D]">
                {item.title}
              </h2>

              <p className="mt-4 text-gray-600">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}