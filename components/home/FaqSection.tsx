"use client";

import { useState } from "react";
import { faqs } from "@/data/faq";

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="section-padding faq-section">
      <div className="container-custom max-w-4xl">

        <div className="section-header-block mb-10">
          <p className="aspirant-label">Support</p>
          <h2 className="aspirant-title">
            Questions<br /><em>Answered</em>
          </h2>
          <p className="aspirant-subtitle">
            Everything students and parents need to know before taking the next step.
          </p>
          <div className="aspirant-divider" />
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
                      <path d="M6 1v10M1 6h10" />
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
    </section>
  );
}