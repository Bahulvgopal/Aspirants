import Link from "next/link";

export default function AdmissionCTA() {
  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="overflow-hidden rounded-[40px] bg-[#8B1E2D] p-10 text-center text-white lg:p-20">
          <span className="rounded-full bg-white/20 px-5 py-2 text-sm">
            Admissions Open • 2026
          </span>

          <h2 className="mt-8 text-4xl font-bold lg:text-6xl">
            Start Your Learning Journey
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg opacity-90">
            Join Aspire Tuition Centre and experience
            structured mentoring, science learning and
            future-ready education.
          </p>

          <Link
            href="/enquiry"
            className="mt-10 inline-block rounded-full bg-white px-8 py-4 font-semibold text-[#8B1E2D]"
          >
            Admission Enquiry
          </Link>
        </div>
      </div>
    </section>
  );
}