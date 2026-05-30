"use client";

import { useState } from "react";
import SectionHeading from "../shared/SectionHeading";
import { faqs } from "@/data/faq";
import { ChevronDown } from "lucide-react";

export default function FaqSection() {
  const [openIndex, setOpenIndex] =
    useState<number | null>(0);

  return (
    <section className="section-padding">
      <div className="container-custom max-w-4xl">
        <SectionHeading
          title="Frequently Asked Questions"
          subtitle="Quick answers to common student and parent questions."
        />

        <div className="space-y-5">
          {faqs.map((faq, index) => {
            const open = openIndex === index;

            return (
              <div
                key={faq.question}
                className="rounded-[28px] border border-gray-200 bg-white p-6"
              >
                <button
                  onClick={() =>
                    setOpenIndex(
                      open ? null : index
                    )
                  }
                  className="flex w-full items-center justify-between text-left"
                >
                  <h3 className="font-semibold text-[#8B1E2D]">
                    {faq.question}
                  </h3>

                  <ChevronDown
                    size={20}
                    className={`transition ${
                      open
                        ? "rotate-180"
                        : ""
                    }`}
                  />
                </button>

                {open && (
                  <p className="mt-4 text-gray-600">
                    {faq.answer}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}