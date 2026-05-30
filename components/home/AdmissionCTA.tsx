import Link from "next/link";

export default function AdmissionCTA() {
  return (
    <section className="admission-luxury section-padding">
      <div className="container-custom">
        <div className="admission-luxury-card">
          <div className="admission-content">
            <span className="admission-label">
              Admissions Open • 2026
            </span>

            <h2>
              Start Your
              <br />
              Learning Journey
            </h2>

            <p>
              Join Aspire Tuition Centre and experience
              structured mentoring, practical learning,
              science-based exploration and future-ready
              education.
            </p>
          </div>

          <div className="admission-action">
            <Link
              href="/enquiry"
              className="admission-button"
            >
              Admission Enquiry
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}