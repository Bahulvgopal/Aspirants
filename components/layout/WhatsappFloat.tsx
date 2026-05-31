"use client";

import { useState, useEffect } from "react";

// Official WhatsApp SVG Logo
function WhatsAppIcon({ size = 32 }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      width={size}
      height={size}
      fill="none"
    >
      <path
        d="M24 4C13 4 4 13 4 24c0 3.6 1 7 2.7 10L4 44l10.3-2.7C17.1 43 20.5 44 24 44c11 0 20-9 20-20S35 4 24 4z"
        fill="#fff"
      />
      <path
        d="M24 6.2C14.2 6.2 6.2 14.2 6.2 24c0 3.4.9 6.7 2.7 9.6L6.5 41.5l8.1-2.1c2.8 1.5 5.9 2.4 9.4 2.4 9.8 0 17.8-8 17.8-17.8S33.8 6.2 24 6.2z"
        fill="#4CAF50"
      />
      <path
        d="M33.8 28.6c-.5-.3-3-1.5-3.5-1.7-.5-.2-.8-.3-1.1.2s-1.3 1.7-1.6 2c-.3.4-.6.4-1.1.1-3-1.5-4.9-2.7-6.9-6.1-.5-.9.5-.8 1.5-2.8.2-.4.1-.7-.1-1-.2-.3-1.1-2.7-1.5-3.7-.4-1-.8-.8-1.1-.8h-.9c-.3 0-.8.1-1.2.6s-1.6 1.6-1.6 3.8c0 2.2 1.6 4.4 1.9 4.7.3.3 3.1 4.7 7.5 6.6 4.4 1.8 4.4 1.2 5.2 1.1.8-.1 2.6-1.1 3-2.1.4-1.1.4-2 .3-2.1-.1-.2-.4-.3-.9-.6z"
        fill="#fff"
      />
    </svg>
  );
}

export default function WhatsappFloat() {
  const [visible, setVisible] = useState(false);
  const [pulse, setPulse] = useState(false);
  const [tooltip, setTooltip] = useState(false);

  useEffect(() => {
    // Entrance animation delay
    const t1 = setTimeout(() => setVisible(true), 400);
    // Trigger pulse after entrance
    const t2 = setTimeout(() => setPulse(true), 1200);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500&display=swap');

        .wa-wrapper {
          position: fixed;
          bottom: 28px;
          right: 28px;
          z-index: 99999;
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          gap: 10px;
          font-family: 'DM Sans', sans-serif;
        }

        /* Tooltip bubble */
        .wa-tooltip {
          background: #fff;
          color: #111;
          font-size: 13px;
          font-weight: 500;
          padding: 9px 14px;
          border-radius: 18px 18px 4px 18px;
          box-shadow: 0 6px 30px rgba(0,0,0,0.12), 0 1px 4px rgba(0,0,0,0.08);
          white-space: nowrap;
          pointer-events: none;
          transform-origin: bottom right;
          transition: opacity 0.22s ease, transform 0.22s cubic-bezier(.34,1.56,.64,1);
          opacity: 0;
          transform: scale(0.88) translateY(4px);
          letter-spacing: -0.01em;
        }

        .wa-tooltip.show {
          opacity: 1;
          transform: scale(1) translateY(0);
        }

        /* Main button */
        .wa-btn {
          position: relative;
          width: 60px;
          height: 60px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(145deg, #25D366 0%, #128C7E 100%);
          box-shadow: 0 6px 24px rgba(37,211,102,0.45), 0 2px 8px rgba(0,0,0,0.12);
          text-decoration: none;
          cursor: pointer;
          border: none;
          outline: none;
          transition:
            box-shadow 0.3s ease,
            transform 0.25s cubic-bezier(.34,1.56,.64,1),
            opacity 0.4s ease;
          opacity: 0;
          transform: scale(0.5) translateY(20px);
        }

        .wa-btn.visible {
          opacity: 1;
          transform: scale(1) translateY(0);
        }

        .wa-btn:hover {
          box-shadow: 0 10px 36px rgba(37,211,102,0.55), 0 3px 12px rgba(0,0,0,0.14);
          transform: scale(1.08) translateY(-2px);
        }

        .wa-btn:active {
          transform: scale(0.97);
          box-shadow: 0 4px 16px rgba(37,211,102,0.4);
        }

        /* Ripple rings */
        .wa-ring {
          position: absolute;
          inset: 0;
          border-radius: 50%;
          border: 2px solid rgba(37, 211, 102, 0.55);
          animation: wa-ripple 2.4s ease-out infinite;
          pointer-events: none;
        }

        .wa-ring:nth-child(2) {
          animation-delay: 0.8s;
        }

        @keyframes wa-ripple {
          0%   { transform: scale(1);   opacity: 0.7; }
          100% { transform: scale(2.2); opacity: 0; }
        }

        .wa-ring.paused {
          animation-play-state: paused;
        }

        /* Online dot */
        .wa-dot {
          position: absolute;
          top: 3px;
          right: 3px;
          width: 13px;
          height: 13px;
          background: #4ade80;
          border-radius: 50%;
          border: 2.5px solid #fff;
          box-shadow: 0 0 0 0 rgba(74,222,128,0.6);
          animation: wa-blink 2s ease-in-out infinite;
        }

        @keyframes wa-blink {
          0%, 100% { box-shadow: 0 0 0 0 rgba(74,222,128,0.6); }
          50%       { box-shadow: 0 0 0 5px rgba(74,222,128,0); }
        }
      `}</style>

      <div className="wa-wrapper">
        {/* Tooltip */}
        <div className={`wa-tooltip ${tooltip ? "show" : ""}`}>
          Chat with us on WhatsApp
        </div>

        {/* Button */}
        <a
          href="https://wa.me/919876543210"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
          className={`wa-btn ${visible ? "visible" : ""}`}
          onMouseEnter={() => setTooltip(true)}
          onMouseLeave={() => setTooltip(false)}
        >
          {/* Ripple rings (only after entrance) */}
          {pulse && <div className="wa-ring" />}
          {pulse && <div className="wa-ring" />}

          {/* Online indicator */}
          <div className="wa-dot" />

          {/* WhatsApp logo */}
          <WhatsAppIcon size={30} />
        </a>
      </div>
    </>
  );
}