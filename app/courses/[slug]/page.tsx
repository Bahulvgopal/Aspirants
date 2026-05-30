import { notFound } from "next/navigation";
import { courses } from "@/data/courses";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function CoursePage({
  params,
}: Props) {
  const { slug } = await params;

  const course = courses.find(
    (item) => item.slug === slug
  );

  if (!course) {
    notFound();
  }

  return (
    <section className="section-padding">
      <div className="container-custom">
        <span className="rounded-full bg-red-100 px-5 py-2 text-sm text-[#8B1E2D]">
          Aspire Programme
        </span>

        <h1 className="mt-6 text-5xl font-bold text-[#8B1E2D]">
          {course.title}
        </h1>

        <p className="mt-6 max-w-3xl text-lg text-gray-700">
          {course.heroDescription}
        </p>

        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {course.features.map((feature) => (
            <div
              key={feature}
              className="rounded-3xl border border-gray-200 bg-white p-8"
            >
              <h3 className="font-semibold text-[#8B1E2D]">
                {feature}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}