"use client";

import { useState } from "react";
import {
  FiUser, FiPhone, FiBookOpen, FiAward,
  FiMessageSquare, FiLock, FiArrowRight,
  FiLoader, FiCheckCircle, FiTarget,
  FiUsers, FiBarChart2, FiCode, FiStar,
  FiPhoneCall,
} from "react-icons/fi";

type FormState = {
  name: string; phone: string; grade: string; course: string; message: string;
};
type Status = "idle" | "loading" | "success" | "error";

const COURSES = [
  "JEE Foundation", "NEET Foundation", "CBSE Excellence",
  "Coding & Robotics", "Science Olympiad", "Other / Not Sure",
];
const GRADES = [
  "Class 6", "Class 7", "Class 8", "Class 9",
  "Class 10", "Class 11", "Class 12", "Dropper / Repeater",
];

const REASONS = [
  { icon: FiTarget,   text: "Personalised learning plans for every student" },
  { icon: FiUsers,    text: "Expert faculty with proven track records"       },
  { icon: FiBarChart2,text: "Regular assessments and detailed progress reports" },
  { icon: FiCode,     text: "Coding & Science exposure beyond the syllabus"  },
  { icon: FiStar,     text: "98% success rate across all programmes"          },
];

export default function EnquiryPage() {
  const [form, setForm] = useState<FormState>({ name: "", phone: "", grade: "", course: "", message: "" });
  const [status, setStatus] = useState<Status>("idle");
  const [touched, setTouched] = useState<Partial<Record<keyof FormState, boolean>>>({});

  const errors: Partial<Record<keyof FormState, string>> = {
    name:   !form.name.trim()                        ? "Name is required"             : undefined,
    phone:  !/^[6-9]\d{9}$/.test(form.phone.trim()) ? "Enter a valid 10-digit number" : undefined,
    grade:  !form.grade                              ? "Please select a class"         : undefined,
    course: !form.course                             ? "Please select a programme"     : undefined,
  };
  const isValid = !Object.values(errors).some(Boolean);

  const blur   = (f: keyof FormState) => setTouched((t) => ({ ...t, [f]: true }));
  const change = (f: keyof FormState, v: string) => setForm((p) => ({ ...p, [f]: v }));

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setTouched({ name: true, phone: true, grade: true, course: true });
    if (!isValid) return;
    setStatus("loading");
    await new Promise((r) => setTimeout(r, 1400));
    setStatus("success");
  }

  if (status === "success") {
    return (
      <>
        <EqStyles />
        <section className="eq-section">
          <div className="eq-container">
            <div className="eq-success">
              <div className="eq-success-ring">
                <FiCheckCircle size={36} color="#6B0119" />
              </div>
              <h2 className="eq-success-heading">Enquiry Submitted!</h2>
              <p className="eq-success-body">
                Thank you, <strong>{form.name.split(" ")[0]}</strong>. Our team will reach out to you on{" "}
                <strong>{form.phone}</strong> within 24 hours.
              </p>
              <button className="eq-back-btn" onClick={() => {
                setForm({ name: "", phone: "", grade: "", course: "", message: "" });
                setTouched({});
                setStatus("idle");
              }}>
                Submit Another Enquiry
              </button>
            </div>
          </div>
        </section>
      </>
    );
  }

  return (
    <>
      <EqStyles />
      <section className="eq-section">
        <div className="eq-container">

          {/* Header */}
          <div className="eq-header">
            <div className="eq-eyebrow">
              <span className="eq-eyebrow-dot" aria-hidden />
              <span>Admissions Open · 2026</span>
            </div>
            <h1 className="eq-heading">
              Start Your <em className="eq-accent">Journey</em>
            </h1>
            <p className="eq-subheading">
              Fill in your details and our academic counsellor will get back to you within 24 hours.
            </p>
          </div>

          {/* Layout */}
          <div className="eq-layout">

            {/* Sidebar */}
            <aside className="eq-sidebar">
              <div className="eq-sidebar-card">
                <h2 className="eq-sidebar-title">Why Choose Aspire?</h2>
                <ul className="eq-reasons">
                  {REASONS.map(({ icon: Icon, text }) => (
                    <li key={text} className="eq-reason">
                      <span className="eq-reason-icon"><Icon size={15} /></span>
                      <span className="eq-reason-text">{text}</span>
                    </li>
                  ))}
                </ul>
                <div className="eq-divider" aria-hidden />
                <a href="tel:+91XXXXXXXXXX" className="eq-contact">
                  <span className="eq-contact-icon"><FiPhoneCall size={16} /></span>
                  <div>
                    <p className="eq-contact-label">Call us directly</p>
                    <p className="eq-contact-value">+91 XXXXX XXXXX</p>
                  </div>
                </a>
              </div>
            </aside>

            {/* Form */}
            <div className="eq-form-col">
              <form className="eq-form" onSubmit={handleSubmit} noValidate>

                <div className="eq-row">
                  <Field label="Student Name" required error={touched.name ? errors.name : undefined}>
                    <div className="eq-input-wrap">
                      <FiUser className="eq-input-icon" size={15} />
                      <input
                        type="text" placeholder="e.g. Arjun Kumar"
                        value={form.name}
                        onChange={(e) => change("name", e.target.value)}
                        onBlur={() => blur("name")}
                        className={`eq-input eq-input-icon-pad${touched.name && errors.name ? " eq-input-err" : ""}`}
                        autoComplete="name"
                      />
                    </div>
                  </Field>

                  <Field label="Phone Number" required error={touched.phone ? errors.phone : undefined}>
                    <div className="eq-input-wrap">
                      <FiPhone className="eq-input-icon" size={15} />
                      <span className="eq-prefix">+91</span>
                      <input
                        type="tel" placeholder="98XXXXXXXX"
                        value={form.phone}
                        onChange={(e) => change("phone", e.target.value.replace(/\D/g, "").slice(0, 10))}
                        onBlur={() => blur("phone")}
                        className={`eq-input eq-input-phone${touched.phone && errors.phone ? " eq-input-err" : ""}`}
                        autoComplete="tel" inputMode="numeric"
                      />
                    </div>
                  </Field>
                </div>

                <div className="eq-row">
                  <Field label="Current Class" required error={touched.grade ? errors.grade : undefined}>
                    <div className="eq-input-wrap">
                      <FiBookOpen className="eq-input-icon" size={15} />
                      <select
                        value={form.grade}
                        onChange={(e) => change("grade", e.target.value)}
                        onBlur={() => blur("grade")}
                        className={`eq-input eq-input-icon-pad eq-select${!form.grade ? " eq-select-ph" : ""}${touched.grade && errors.grade ? " eq-input-err" : ""}`}
                      >
                        <option value="" disabled>Select class</option>
                        {GRADES.map((g) => <option key={g} value={g}>{g}</option>)}
                      </select>
                    </div>
                  </Field>

                  <Field label="Interested Programme" required error={touched.course ? errors.course : undefined}>
                    <div className="eq-input-wrap">
                      <FiAward className="eq-input-icon" size={15} />
                      <select
                        value={form.course}
                        onChange={(e) => change("course", e.target.value)}
                        onBlur={() => blur("course")}
                        className={`eq-input eq-input-icon-pad eq-select${!form.course ? " eq-select-ph" : ""}${touched.course && errors.course ? " eq-input-err" : ""}`}
                      >
                        <option value="" disabled>Select programme</option>
                        {COURSES.map((c) => <option key={c} value={c}>{c}</option>)}
                      </select>
                    </div>
                  </Field>
                </div>

                <Field label="Message (optional)">
                  <div className="eq-input-wrap eq-textarea-wrap">
                    <FiMessageSquare className="eq-input-icon eq-textarea-icon" size={15} />
                    <textarea
                      placeholder="Any specific queries, preferred batch timings, or additional info..."
                      rows={4} value={form.message}
                      onChange={(e) => change("message", e.target.value)}
                      className="eq-input eq-input-icon-pad eq-textarea"
                    />
                  </div>
                </Field>

                <p className="eq-privacy">
                  <FiLock size={12} style={{ flexShrink: 0, marginTop: 1 }} />
                  Your information is private and will only be used to contact you about admissions.
                </p>

                <button type="submit" disabled={status === "loading"} className="eq-submit">
                  {status === "loading" ? (
                    <>
                      <FiLoader size={16} className="eq-spin" />
                      Submitting…
                    </>
                  ) : (
                    <>
                      Submit Enquiry
                      <FiArrowRight size={16} />
                    </>
                  )}
                </button>

              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function Field({ label, required, error, children }: {
  label: string; required?: boolean; error?: string; children: React.ReactNode;
}) {
  return (
    <div className="eq-field">
      <label className="eq-label">
        {label}
        {required && <span className="eq-req" aria-hidden> *</span>}
      </label>
      {children}
      {error && (
        <p className="eq-error" role="alert">
          <span className="eq-error-dot" aria-hidden />
          {error}
        </p>
      )}
    </div>
  );
}

function EqStyles() {
  return (
    <style>{`
      .eq-section {
        padding: 4rem 0 5rem;
        font-family: inherit;
        background: #fff;
      }
      .eq-container {
        max-width: 1100px;
        margin: 0 auto;
        padding: 0 1.5rem;
      }

      /* Header */
      .eq-header {
        text-align: center;
        margin-bottom: 3rem;
      }
      .eq-eyebrow {
        display: inline-flex;
        align-items: center;
        gap: 8px;
        font-size: 11px;
        font-weight: 600;
        letter-spacing: 0.1em;
        text-transform: uppercase;
        color: #6B0119;
        margin-bottom: 14px;
      }
      .eq-eyebrow-dot {
        width: 6px; height: 6px;
        border-radius: 50%;
        background: #6B0119;
        display: inline-block;
        animation: eq-pulse 2s ease-in-out infinite;
      }
      @keyframes eq-pulse {
        0%,100% { opacity: 1; transform: scale(1); }
        50% { opacity: 0.4; transform: scale(0.85); }
      }
      .eq-heading {
        font-size: clamp(28px, 4vw, 42px);
        font-weight: 600;
        color: #111827;
        margin: 0 0 12px;
        line-height: 1.2;
      }
      .eq-accent {
        color: #6B0119;
        font-style: italic;
      }
      .eq-subheading {
        font-size: 15px;
        color: #6b7280;
        line-height: 1.6;
        max-width: 480px;
        margin: 0 auto;
      }

      /* Layout */
      .eq-layout {
        display: grid;
        grid-template-columns: 320px 1fr;
        gap: 2rem;
        align-items: start;
      }
      @media (max-width: 860px) {
        .eq-layout { grid-template-columns: 1fr; }
      }

      /* Sidebar */
      .eq-sidebar-card {
        background: #6B0119;
        border-radius: 16px;
        padding: 2rem 1.75rem;
        position: sticky;
        top: 80px;
      }
      .eq-sidebar-title {
        font-size: 16px;
        font-weight: 600;
        color: #fff;
        margin: 0 0 1.25rem;
      }
      .eq-reasons {
        list-style: none;
        margin: 0;
        padding: 0;
        display: flex;
        flex-direction: column;
        gap: 14px;
      }
      .eq-reason {
        display: flex;
        align-items: flex-start;
        gap: 10px;
      }
      .eq-reason-icon {
        width: 28px; height: 28px;
        border-radius: 8px;
        background: rgba(255,255,255,0.15);
        display: flex; align-items: center; justify-content: center;
        flex-shrink: 0;
        color: #fff;
      }
      .eq-reason-text {
        font-size: 13px;
        color: rgba(255,255,255,0.85);
        line-height: 1.55;
        padding-top: 5px;
      }
      .eq-divider {
        height: 0.5px;
        background: rgba(255,255,255,0.2);
        margin: 1.5rem 0;
      }
      .eq-contact {
        display: flex;
        align-items: center;
        gap: 12px;
        text-decoration: none;
      }
      .eq-contact-icon {
        width: 36px; height: 36px;
        border-radius: 10px;
        background: rgba(255,255,255,0.15);
        display: flex; align-items: center; justify-content: center;
        flex-shrink: 0;
        color: #fff;
      }
      .eq-contact-label {
        font-size: 11px;
        color: rgba(255,255,255,0.6);
        margin: 0 0 2px;
        text-transform: uppercase;
        letter-spacing: 0.06em;
        font-weight: 500;
      }
      .eq-contact-value {
        font-size: 14px;
        font-weight: 600;
        color: #fff;
        margin: 0;
      }

      /* Form card */
      .eq-form-col {
        background: #fff;
        border: 0.5px solid #e5e7eb;
        border-radius: 16px;
        padding: 2rem;
      }
      .eq-form {
        display: flex;
        flex-direction: column;
        gap: 1.25rem;
      }
      .eq-row {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 1rem;
      }
      @media (max-width: 560px) {
        .eq-row { grid-template-columns: 1fr; }
      }

      /* Field */
      .eq-field {
        display: flex;
        flex-direction: column;
        gap: 6px;
      }
      .eq-label {
        font-size: 13px;
        font-weight: 500;
        color: #374151;
      }
      .eq-req { color: #6B0119; }

      /* Input wrapper */
      .eq-input-wrap {
        position: relative;
        display: flex;
        align-items: center;
      }
      .eq-input-icon {
        position: absolute;
        left: 12px;
        color: #9ca3af;
        pointer-events: none;
        z-index: 1;
      }
      .eq-textarea-wrap { align-items: flex-start; }
      .eq-textarea-icon { top: 13px; }

      .eq-input {
        width: 100%;
        height: 42px;
        border: 0.5px solid #e5e7eb;
        border-radius: 10px;
        font-size: 14px;
        color: #111827;
        background: #fafafa;
        outline: none;
        transition: border-color 0.15s, background 0.15s, box-shadow 0.15s;
        padding: 0 12px;
        font-family: inherit;
        appearance: none;
        box-sizing: border-box;
      }
      .eq-input:focus {
        border-color: #6B0119;
        background: #fff;
        box-shadow: 0 0 0 3px rgba(107,1,25,0.08);
      }
      .eq-input-icon-pad { padding-left: 36px; }
      .eq-input-phone { padding-left: 80px; }
      .eq-prefix {
        position: absolute;
        left: 36px;
        font-size: 13px;
        font-weight: 500;
        color: #374151;
        pointer-events: none;
        z-index: 1;
        border-right: 0.5px solid #e5e7eb;
        padding-right: 8px;
        line-height: 42px;
      }
      .eq-input-err { border-color: #dc2626 !important; background: #fff5f5 !important; }
      .eq-select { cursor: pointer; background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%239ca3af' stroke-width='2'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E"); background-repeat: no-repeat; background-position: right 12px center; padding-right: 32px; }
      .eq-select-ph { color: #9ca3af; }
      .eq-textarea { height: auto; padding: 12px 12px 12px 36px; resize: vertical; line-height: 1.6; }

      /* Error */
      .eq-error {
        display: flex;
        align-items: center;
        gap: 6px;
        font-size: 12px;
        color: #dc2626;
        margin: 0;
      }
      .eq-error-dot {
        width: 5px; height: 5px;
        border-radius: 50%;
        background: #dc2626;
        flex-shrink: 0;
      }

      /* Privacy */
      .eq-privacy {
        display: flex;
        align-items: flex-start;
        gap: 7px;
        font-size: 12px;
        color: #9ca3af;
        margin: 0;
        line-height: 1.5;
      }

      /* Submit */
      .eq-submit {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 8px;
        width: 100%;
        height: 48px;
        background: #6B0119;
        color: #fff;
        font-size: 14px;
        font-weight: 600;
        border: none;
        border-radius: 12px;
        cursor: pointer;
        transition: background 0.15s, box-shadow 0.15s, transform 0.1s;
        font-family: inherit;
        letter-spacing: 0.02em;
      }
      .eq-submit:hover:not(:disabled) {
        background: #530114;
        box-shadow: 0 4px 16px -4px rgba(107,1,25,0.4);
      }
      .eq-submit:active:not(:disabled) { transform: scale(0.99); }
      .eq-submit:disabled { opacity: 0.7; cursor: not-allowed; }

      /* Spinner */
      @keyframes eq-spin { to { transform: rotate(360deg); } }
      .eq-spin { animation: eq-spin 0.8s linear infinite; }

      /* Success */
      .eq-success {
        max-width: 480px;
        margin: 4rem auto;
        text-align: center;
        padding: 3rem 2rem;
        border: 0.5px solid #e5e7eb;
        border-radius: 20px;
      }
      .eq-success-ring {
        width: 72px; height: 72px;
        border-radius: 50%;
        background: #fdf0f2;
        display: flex; align-items: center; justify-content: center;
        margin: 0 auto 1.5rem;
      }
      .eq-success-heading {
        font-size: 22px;
        font-weight: 600;
        color: #111827;
        margin: 0 0 12px;
      }
      .eq-success-body {
        font-size: 14px;
        color: #6b7280;
        line-height: 1.7;
        margin: 0 0 1.5rem;
      }
      .eq-back-btn {
        display: inline-flex;
        align-items: center;
        gap: 6px;
        padding: 10px 24px;
        border: 1.5px solid #6B0119;
        border-radius: 10px;
        background: transparent;
        color: #6B0119;
        font-size: 14px;
        font-weight: 500;
        cursor: pointer;
        font-family: inherit;
        transition: background 0.15s;
      }
      .eq-back-btn:hover { background: #fdf0f2; }
    `}</style>
  );
}