import SectionHeading from "@/components/shared/SectionHeading";
import Image from "next/image";

export default function AboutPage() {
  return (
    <section className="section-padding">
      <div className="container-custom">
        <SectionHeading
          title="About Aspire"
          subtitle="Building future-ready learners through structured academic excellence."
        />

        <div className="grid gap-14 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold text-[#8B1E2D]">
              Aspire Tuition Centre
            </h2>

            <p className="mt-6 text-lg leading-8 text-gray-700">
              Aspire Tuition Centre focuses on
              conceptual learning, structured
              mentoring and academic excellence.
              Through smart learning systems,
              science programmes, coding exposure
              and personalised guidance, we help
              students become confident learners.
            </p>

            <p className="mt-6 text-lg leading-8 text-gray-700">
              Our mission is to create disciplined,
              analytical and future-ready students
              who excel in academics and beyond.
            </p>
          </div>

          <div>
            <Image
  src="/images/about.jpg"
  alt="Aspire Tuition Centre"
  width={700}
  height={500}
  className="rounded-[32px] object-cover"
/>
          </div>
        </div>
      </div>
    </section>
  );
}