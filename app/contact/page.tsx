"use client";

import { contactInfo } from "@/data/contact";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } },
};

const stagger = {
  hidden: {},
  show:   { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
};

const CONTACT_ITEMS = [
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor"
        strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.91a16 16 0 0 0 6 6l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.73 16.92z"/>
      </svg>
    ),
    label: "Phone",
    value: contactInfo.phone,
    href:  `tel:${contactInfo.phone}`,
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor"
        strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <rect width="20" height="16" x="2" y="4" rx="2"/>
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
      </svg>
    ),
    label: "Email",
    value: contactInfo.email,
    href:  `mailto:${contactInfo.email}`,
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor"
        strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
        <circle cx="12" cy="10" r="3"/>
      </svg>
    ),
    label: "Address",
    value: contactInfo.address,
    href:  `https://maps.google.com/?q=${encodeURIComponent(contactInfo.address)}`,
  },
];

const HOURS = [
  { day: "Monday – Friday", time: "7:00 AM – 8:00 PM" },
  { day: "Saturday",         time: "8:00 AM – 6:00 PM" },
  { day: "Sunday",           time: "Closed"             },
];

export default function ContactPage() {
  return (
    <section className="contact-section section-padding">
      <div className="container-custom">

        {/* ── Page header ───────────────────────── */}
        <motion.div
          className="contact-header"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          variants={stagger}
        >
          <motion.div variants={fadeUp} className="contact-header-eyebrow">
            <span className="contact-eyebrow-dot" aria-hidden />
            <span>We're here to help</span>
          </motion.div>

          <motion.h1 variants={fadeUp} className="contact-heading">
            Get In{" "}
            <span className="contact-heading-accent">Touch</span>
          </motion.h1>

          <motion.p variants={fadeUp} className="contact-subheading">
            Have questions about admissions, courses, or fees? Reach out —
            we'll get back to you promptly.
          </motion.p>
        </motion.div>

        {/* ── Main grid ─────────────────────────── */}
        <motion.div
          className="contact-layout"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          variants={stagger}
        >

          {/* ── LEFT — info column ── */}
          <motion.div variants={fadeUp} className="contact-info-col">

            {/* Contact items */}
            <div className="contact-items">
              {CONTACT_ITEMS.map(({ icon, label, value, href }) => (
                <a key={label} href={href} className="contact-item" target="_blank" rel="noopener noreferrer">
                  <div className="contact-item-icon-wrap">
                    {icon}
                  </div>
                  <div className="contact-item-body">
                    <p className="contact-item-label">{label}</p>
                    <p className="contact-item-value">{value}</p>
                  </div>
                  <svg className="contact-item-arrow" width="14" height="14" viewBox="0 0 16 16"
                    fill="none" aria-hidden>
                    <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.75"
                      strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
              ))}
            </div>

            {/* Divider */}
            <div className="contact-divider" aria-hidden />

            {/* Hours */}
            <div className="contact-hours">
              <p className="contact-hours-title">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                  strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                  <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
                </svg>
                Centre Hours
              </p>
              <div className="contact-hours-list">
                {HOURS.map(({ day, time }) => (
                  <div key={day} className="contact-hours-row">
                    <span className="contact-hours-day">{day}</span>
                    <span className={`contact-hours-time${time === "Closed" ? " contact-hours-closed" : ""}`}>
                      {time}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Enquiry CTA */}
            <a href="/enquiry" className="contact-enquiry-btn">
              <span>Submit an Enquiry</span>
              <svg width="15" height="15" viewBox="0 0 16 16" fill="none" aria-hidden>
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.75"
                  strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>

          </motion.div>

          {/* ── RIGHT — map ── */}
          <motion.div variants={fadeUp} className="contact-map-col">
            {/* Map header */}
            <div className="contact-map-header">
              <div className="contact-map-pin" aria-hidden>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                  strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
              </div>
              <span className="contact-map-label">Aspire Tuition Centre</span>
            </div>

            {/* Map iframe */}
            <div className="contact-map-frame">
              <iframe
                src={contactInfo.mapEmbed}
                width="100%"
                height="100%"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Aspire Tuition Centre location on Google Maps"
                className="contact-map-iframe"
              />
            </div>

            {/* Directions CTA */}
            <a
              href={`https://maps.google.com/?q=${encodeURIComponent(contactInfo.address)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-directions-btn"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                <polygon points="3 11 22 2 13 21 11 13 3 11"/>
              </svg>
              Get Directions
            </a>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}