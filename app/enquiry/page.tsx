"use client";

import { useState } from "react";

type FormState = {
  name:    string;
  phone:   string;
  grade:   string;
  course:  string;
  message: string;
};

type Status = "idle" | "loading" | "success" | "error";

const COURSES = [
  "JEE Foundation",
  "NEET Foundation",
  "CBSE Excellence",
  "Coding & Robotics",
  "Science Olympiad",
  "Other / Not Sure",
];

const GRADES = [
  "Class 6", "Class 7", "Class 8",
  "Class 9", "Class 10", "Class 11",
  "Class 12", "Dropper / Repeater",
];

export default function EnquiryPage() {
  const [form, setForm] = useState<FormState>({
    name: "", phone: "", grade: "", course: "", message: "",
  });
  const [status, setStatus] = useState<Status>("idle");
  const [touched, setTouched] = useState<Partial<Record<keyof FormState, boolean>>>({});

  const errors: Partial<Record<keyof FormState, string>> = {
    name:    !form.name.trim()                          ? "Name is required"            : undefined,
    phone:   !/^[6-9]\d{9}$/.test(form.phone.trim())   ? "Enter a valid 10-digit number" : undefined,
    grade:   !form.grade                                ? "Please select a class"       : undefined,
    course:  !form.course                               ? "Please select a programme"   : undefined,
  };

  const isValid = !Object.values(errors).some(Boolean);

  function blur(field: keyof FormState) {
    setTouched((t) => ({ ...t, [field]: true }));
  }

  function change(field: keyof FormState, value: string) {
    setForm((f) => ({ ...f, [field]: value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setTouched({ name: true, phone: true, grade: true, course: true });
    if (!isValid) return;

    setStatus("loading");
    await new Promise((r) => setTimeout(r, 1400)); // replace with real API call
    setStatus("success");
  }

  if (status === "success") {
    return (
      <section className="enquiry-section section-padding">
        <div className="container-custom enquiry-max">
          <div className="enquiry-success">
            <div className="enquiry-success-icon" aria-hidden>✓</div>
            <h2 className="enquiry-success-heading">Enquiry Submitted!</h2>
            <p className="enquiry-success-body">
              Thank you, {form.name.split(" ")[0]}. Our team will reach out to you
              on <strong>{form.phone}</strong> within 24 hours.
            </p>
            <button className="enquiry-success-back" onClick={() => {
              setForm({ name: "", phone: "", grade: "", course: "", message: "" });
              setTouched({});
              setStatus("idle");
            }}>
              Submit Another Enquiry
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="enquiry-section section-padding">
      <div className="container-custom">

        {/* ── Page header ───────────────────────── */}
        <div className="enquiry-header">
          <div className="enquiry-header-eyebrow">
            <span className="enquiry-eyebrow-dot" aria-hidden />
            <span>Admissions Open · 2026</span>
          </div>
          <h1 className="enquiry-heading">
            Start Your <span className="enquiry-heading-accent">Journey</span>
          </h1>
          <p className="enquiry-subheading">
            Fill in your details and our academic counsellor will get back
            to you within 24 hours.
          </p>
        </div>

        {/* ── Two-column layout ─────────────────── */}
        <div className="enquiry-layout">

          {/* ── LEFT — info sidebar ── */}
          <aside className="enquiry-sidebar">

            <div className="enquiry-sidebar-card">
              <h2 className="enquiry-sidebar-title">Why Choose Aspire?</h2>

              <ul className="enquiry-reasons">
                {[
                  { icon: "🎯", text: "Personalised learning plans for every student" },
                  { icon: "👨‍🏫", text: "Expert faculty with proven track records"      },
                  { icon: "📊", text: "Regular assessments and detailed progress reports" },
                  { icon: "💻", text: "Coding & Science exposure beyond the syllabus"  },
                  { icon: "🏆", text: "98% success rate across all programmes"          },
                ].map(({ icon, text }) => (
                  <li key={text} className="enquiry-reason">
                    <span className="enquiry-reason-icon" aria-hidden>{icon}</span>
                    <span className="enquiry-reason-text">{text}</span>
                  </li>
                ))}
              </ul>

              <div className="enquiry-sidebar-divider" aria-hidden />

              <div className="enquiry-contact-row">
                <a href="tel:+91XXXXXXXXXX" className="enquiry-contact-item">
                  <div className="enquiry-contact-icon">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
                      stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                      strokeLinejoin="round" aria-hidden>
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.91a16 16 0 0 0 6 6l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.73 16.92z"/>
                    </svg>
                  </div>
                  <div>
                    <p className="enquiry-contact-label">Call us directly</p>
                    <p className="enquiry-contact-value">+91 XXXXX XXXXX</p>
                  </div>
                </a>
              </div>
            </div>

          </aside>

          {/* ── RIGHT — form ── */}
          <div className="enquiry-form-col">
            <form className="enquiry-form" onSubmit={handleSubmit} noValidate>

              {/* Row 1 — name + phone */}
              <div className="enquiry-row">
                <Field
                  label="Student Name"
                  required
                  error={touched.name ? errors.name : undefined}
                >
                  <input
                    type="text"
                    placeholder="e.g. Arjun Kumar"
                    value={form.name}
                    onChange={(e) => change("name", e.target.value)}
                    onBlur={() => blur("name")}
                    className={`enquiry-input${touched.name && errors.name ? " enquiry-input-error" : ""}`}
                    autoComplete="name"
                  />
                </Field>

                <Field
                  label="Phone Number"
                  required
                  error={touched.phone ? errors.phone : undefined}
                >
                  <div className="enquiry-phone-wrap">
                    <span className="enquiry-phone-prefix">+91</span>
                    <input
                      type="tel"
                      placeholder="98XXXXXXXX"
                      value={form.phone}
                      onChange={(e) => change("phone", e.target.value.replace(/\D/g, "").slice(0, 10))}
                      onBlur={() => blur("phone")}
                      className={`enquiry-input enquiry-input-phone${touched.phone && errors.phone ? " enquiry-input-error" : ""}`}
                      autoComplete="tel"
                      inputMode="numeric"
                    />
                  </div>
                </Field>
              </div>

              {/* Row 2 — class + programme */}
              <div className="enquiry-row">
                <Field
                  label="Current Class"
                  required
                  error={touched.grade ? errors.grade : undefined}
                >
                  <select
                    value={form.grade}
                    onChange={(e) => change("grade", e.target.value)}
                    onBlur={() => blur("grade")}
                    className={`enquiry-input enquiry-select${touched.grade && errors.grade ? " enquiry-input-error" : ""}${!form.grade ? " enquiry-select-placeholder" : ""}`}
                  >
                    <option value="" disabled>Select class</option>
                    {GRADES.map((g) => (
                      <option key={g} value={g}>{g}</option>
                    ))}
                  </select>
                </Field>

                <Field
                  label="Interested Programme"
                  required
                  error={touched.course ? errors.course : undefined}
                >
                  <select
                    value={form.course}
                    onChange={(e) => change("course", e.target.value)}
                    onBlur={() => blur("course")}
                    className={`enquiry-input enquiry-select${touched.course && errors.course ? " enquiry-input-error" : ""}${!form.course ? " enquiry-select-placeholder" : ""}`}
                  >
                    <option value="" disabled>Select programme</option>
                    {COURSES.map((c) => (
                      <option key={c} value={c}>{c}</option>
                    ))}
                  </select>
                </Field>
              </div>

              {/* Message */}
              <Field label="Message (optional)">
                <textarea
                  placeholder="Any specific queries, preferred batch timings, or additional info..."
                  rows={4}
                  value={form.message}
                  onChange={(e) => change("message", e.target.value)}
                  className="enquiry-input enquiry-textarea"
                />
              </Field>

              {/* Privacy note */}
              <p className="enquiry-privacy">
                🔒 Your information is private and will only be used to contact you about admissions.
              </p>

              {/* Submit */}
              <button
                type="submit"
                disabled={status === "loading"}
                className={`enquiry-submit${status === "loading" ? " enquiry-submit-loading" : ""}`}
              >
                {status === "loading" ? (
                  <>
                    <span className="enquiry-spinner" aria-hidden />
                    Submitting…
                  </>
                ) : (
                  <>
                    <span>Submit Enquiry</span>
                    <svg width="15" height="15" viewBox="0 0 16 16" fill="none" aria-hidden>
                      <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor"
                        strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </>
                )}
              </button>

            </form>
          </div>

        </div>
      </div>
    </section>
  );
}

/* ── Field wrapper ──────────────────────────────── */
function Field({
  label, required, error, children,
}: {
  label: string;
  required?: boolean;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="enquiry-field">
      <label className="enquiry-label">
        {label}
        {required && <span className="enquiry-required" aria-hidden> *</span>}
      </label>
      {children}
      {error && (
        <p className="enquiry-error" role="alert">
          <svg width="11" height="11" viewBox="0 0 16 16" fill="none" aria-hidden>
            <circle cx="8" cy="8" r="7" stroke="currentColor" strokeWidth="1.5"/>
            <path d="M8 5v4M8 11v.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
          {error}
        </p>
      )}
    </div>
  );
}