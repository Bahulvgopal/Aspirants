"use client";

import { useState } from "react";
import { faqs } from "@/data/faq";

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="section-padding faq-section">
      <div className="container-custom max-w-4xl">

        <div className="section-header-block mb-10">
          <p className="faq-label">Support</p>
          <h2 className="faq-title">
            Questions<br /><em>Answered</em>
          </h2>
          <p className="faq-subtitle">
            Everything students and parents need to know before taking the next step.
          </p>
          <div className="faq-divider" />
        </div>

        <div className="faq-wrap">
          {faqs.map((faq, index) => {
            const open = openIndex === index;
            return (
              <div
                key={faq.question}
                className={`faq-row ${open ? "faq-row--open" : ""}`}
              >
                <button
                  className="faq-btn"
                  onClick={() => setOpenIndex(open ? null : index)}
                  aria-expanded={open}
                >
                  <span className="faq-q">{faq.question}</span>
                  <span className="faq-icon" aria-hidden="true">
                    <svg viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth={1.8}>
                      <path d={open ? "M1 6h10" : "M6 1v10M1 6h10"} />
                    </svg>
                  </span>
                </button>
                <div className="faq-body">
                  <div className="faq-inner">
                    <p className="faq-ans">{faq.answer}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>

      <style>{`
        /* ── Google Font: Lora (serif, classic academic feel) ── */
        @import url('https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400;0,600;0,700;1,400;1,600&family=Source+Sans+3:wght@400;500;600&display=swap');

        .faq-section {
          background: #0a0a0a;
          font-family: 'Source Sans 3', 'Georgia', serif;
        }

        /* ── Header ── */
        .faq-label {
          font-family: 'Source Sans 3', sans-serif;
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.25em;
          text-transform: uppercase;
          color: #d11215;
          margin: 0 0 14px;
        }

        .faq-title {
          font-family: 'Lora', Georgia, serif;
          font-size: clamp(2rem, 5vw, 3rem);
          font-weight: 700;
          color: #fff;
          line-height: 1.2;
          letter-spacing: -0.01em;
          margin: 0 0 16px;
        }

        .faq-title em {
          font-style: italic;
          color: #d11215;
        }

        .faq-subtitle {
          font-family: 'Source Sans 3', sans-serif;
          font-size: 1rem;
          color: #9ca3af;
          line-height: 1.75;
          margin: 0;
          max-width: 44ch;
        }

        .faq-divider {
          width: 48px;
          height: 2px;
          background: #d11215;
          margin-top: 20px;
          border-radius: 1px;
        }

        /* ── FAQ list ── */
        .faq-wrap {
          display: flex;
          flex-direction: column;
          gap: 0;
          border-top: 1px solid #1e1e1e;
        }

        /* ── Row ── */
        .faq-row {
          border-bottom: 1px solid #1e1e1e;
          transition: background 0.2s;
        }

        .faq-row--open {
          background: #111;
        }

        /* ── Button ── */
        .faq-btn {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
          padding: 1.2rem 0;
          background: transparent;
          border: none;
          cursor: pointer;
          text-align: left;
        }

        .faq-q {
          font-family: 'Lora', Georgia, serif;
          font-size: 1rem;
          font-weight: 600;
          color: #f9fafb;
          line-height: 1.5;
          transition: color 0.2s;
          flex: 1;
        }

        .faq-row--open .faq-q {
          color: #d11215;
        }

        /* ── Icon ── */
        .faq-icon {
          flex-shrink: 0;
          width: 28px;
          height: 28px;
          border-radius: 50%;
          border: 1.5px solid #2a2a2a;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #6b7280;
          transition: border-color 0.2s, color 0.2s, background 0.2s, transform 0.35s;
        }

        .faq-icon svg {
          width: 11px;
          height: 11px;
        }

        .faq-row--open .faq-icon {
          border-color: #d11215;
          background: #d11215;
          color: #fff;
          transform: rotate(45deg);
        }

        /* ── Body / answer ── */
        .faq-body {
          display: grid;
          grid-template-rows: 0fr;
          transition: grid-template-rows 0.38s cubic-bezier(0.4,0,0.2,1);
        }

        .faq-row--open .faq-body {
          grid-template-rows: 1fr;
        }

        .faq-inner {
          overflow: hidden;
        }

        .faq-ans {
          font-family: 'Source Sans 3', sans-serif;
          font-size: 0.9rem;
          color: #9ca3af;
          line-height: 1.85;
          margin: 0;
          padding: 0 36px 1.2rem 0;
        }

        /* ── Mobile ── */
        @media (max-width: 640px) {
          .faq-title  { font-size: 1.75rem; }
          .faq-q      { font-size: 0.92rem; }
          .faq-ans    { font-size: 0.86rem; padding-right: 12px; }
          .faq-btn    { padding: 1rem 0; }
        }
      `}</style>
    </section>
  );
}