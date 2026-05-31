export default function AspireNextPage() {
  

  const features = [
    { icon: "🎓", title: "Expert Faculty", desc: "Central support for students and parents with dedicated academic and administrative assistance." },
    { icon: "⚡", title: "Quick Response", desc: "Quick response and issue resolution — smooth communication with faculty at all times." },
    { icon: "📅", title: "Schedules & Programmes", desc: "Guidance on schedules, exams, and programmes keeping students and parents always informed." },
    { icon: "🤖", title: "AI Integration", desc: "Introduction of new-generation learning environment with AI integration for more engaging, concept-driven, and student-focused learning." },
    { icon: "📊", title: "Precise Performance Tracking", desc: "Personalised feedback and targeted practice based on each student's learning pattern with precise performance analytics." },
    { icon: "🧠", title: "Skill Development", desc: "Workshops and interactive sessions to strengthen communication, analytical thinking, and problem-solving abilities." },
  ];

  return (
    <main
      style={{
        fontFamily: "'Georgia', 'Times New Roman', serif",
        background: "#fff",
        minHeight: "100vh",
        color: "#1a0608",
      }}
    >
      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes shimmer {
          0%   { background-position: -400px 0; }
          100% { background-position: 400px 0; }
        }
        .next-card:hover {
          box-shadow: 0 8px 32px rgba(107,1,25,0.13) !important;
          border-color: #f9c4cc !important;
          transform: translateY(-3px);
        }
        .next-card { transition: all 0.25s ease; }
        .topper-chip:hover {
          background: #6B0119 !important;
          color: #fff !important;
          transform: scale(1.04);
        }
        .topper-chip { transition: all 0.2s; }
        .cta-btn:hover { background: #4e010f !important; }
      `}</style>

      {/* ══ HERO ══ */}
      <section
        style={{
          background: "#fff",
          borderBottom: "1px solid #fce4e7",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* big ghost watermark */}
        <div
          style={{
            position: "absolute", right: -40, top: "50%",
            transform: "translateY(-50%)",
            fontSize: "clamp(120px,18vw,220px)",
            fontWeight: 900,
            color: "rgba(107,1,25,0.04)",
            letterSpacing: -8,
            lineHeight: 1,
            userSelect: "none",
            pointerEvents: "none",
            fontFamily: "sans-serif",
          }}
        >
          NEXT
        </div>

        {/* top crimson bar */}
        <div style={{ height: 5, background: "linear-gradient(90deg,#6B0119,#c0003a,#6B0119)" }} />

        <div
          style={{
            maxWidth: 1100, margin: "0 auto", padding: "64px 32px 72px",
            animation: "fadeUp 0.6s ease both",
          }}
        >
          {/* eyebrow */}
          <div
            style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              border: "1px solid rgba(107,1,25,0.25)",
              borderRadius: 4, padding: "5px 16px", marginBottom: 24,
              background: "rgba(107,1,25,0.04)",
            }}
          >
            <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#6B0119", display: "inline-block" }} />
            <span style={{ color: "#6B0119", fontSize: 11, fontWeight: 700, letterSpacing: 3, fontFamily: "sans-serif", textTransform: "uppercase" }}>
              25-Year Milestone · Forward-Looking Vision
            </span>
          </div>

          {/* wordmark */}
          <div style={{ display: "flex", alignItems: "flex-end", gap: 16, flexWrap: "wrap" }}>
            <div>
              <p style={{ margin: 0, color: "#b0b0b0", fontSize: 13, letterSpacing: 6, textTransform: "uppercase", fontFamily: "sans-serif", fontWeight: 600 }}>
                ASPIRE
              </p>
              <div style={{ display: "flex", alignItems: "center", gap: 0 }}>
                <h1
                  style={{
                    margin: 0,
                    fontSize: "clamp(60px,10vw,108px)",
                    fontWeight: 900,
                    lineHeight: 0.95,
                    color: "#1a0608",
                    letterSpacing: -4,
                    fontFamily: "sans-serif",
                  }}
                >
                  NEX
                </h1>
                <h1
                  style={{
                    margin: 0,
                    fontSize: "clamp(60px,10vw,108px)",
                    fontWeight: 900,
                    lineHeight: 0.95,
                    color: "#6B0119",
                    letterSpacing: -4,
                    fontFamily: "sans-serif",
                  }}
                >
                  T
                </h1>
              </div>
            </div>
            <div
              style={{
                marginBottom: 16,
                background: "#6B0119",
                borderRadius: 4,
                padding: "5px 16px",
                fontFamily: "sans-serif", fontWeight: 700, fontSize: 12,
                color: "#fff", letterSpacing: 1,
              }}
            >
              Where Future Learning Begins
            </div>
          </div>

          {/* description */}
          <p
            style={{
              color: "#555", fontSize: "clamp(15px,2vw,18px)",
              maxWidth: 680, lineHeight: 1.8, margin: "20px 0 0",
            }}
          >
            ASPIRE NEXT represents the institution's forward-looking vision at approaching its 25-year milestone. It focuses on introducing new-generation learning environments with AI integration — creating a more engaging, concept-driven, and student-focused approach.
          </p>

          {/* stat row */}
          <div style={{ display: "flex", gap: 40, marginTop: 44, flexWrap: "wrap" }}>
            {[
              { num: "25+", label: "Years of Excellence" },
              { num: "22", label: "Years of Toppers" },
              { num: "AI", label: "Integrated Learning" },
              { num: "100%", label: "Student Support" },
            ].map((s) => (
              <div key={s.label} style={{ borderLeft: "3px solid #6B0119", paddingLeft: 14 }}>
                <div style={{ color: "#6B0119", fontSize: 24, fontWeight: 900, fontFamily: "sans-serif", lineHeight: 1 }}>{s.num}</div>
                <div style={{ color: "#888", fontSize: 12, fontFamily: "sans-serif", marginTop: 3 }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ ABOUT ══ */}
      <section style={{ background: "#fdf4f5", borderBottom: "1px solid #fce4e7" }}>
        <div
          style={{
            maxWidth: 1100, margin: "0 auto", padding: "56px 32px",
            display: "grid", gridTemplateColumns: "1fr 1fr", gap: 56,
          }}
        >
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 14 }}>
              <div style={{ width: 32, height: 3, background: "#6B0119", borderRadius: 2 }} />
              <p style={{ margin: 0, color: "#6B0119", fontFamily: "sans-serif", fontWeight: 700, fontSize: 11, letterSpacing: 4, textTransform: "uppercase" }}>
                The Vision
              </p>
            </div>
            <h2 style={{ fontSize: "clamp(22px,3vw,32px)", fontWeight: 800, color: "#1a0608", margin: "0 0 18px", lineHeight: 1.3 }}>
              Next-Generation <br />Learning Redefined
            </h2>
            <p style={{ color: "#444", lineHeight: 1.85, fontSize: 15, margin: "0 0 16px" }}>
              Alongside academics, ASPIRE NEXT emphasises skill development through workshops and interactive sessions to strengthen communication, analytical thinking, and problem-solving abilities — while building on its strong legacy.
            </p>
            <p style={{ color: "#444", lineHeight: 1.85, fontSize: 15, margin: 0 }}>
              Moving forward, ASPIRE NEXT reflects its commitment to evolving with time — delivering education that is relevant, effective, and future-ready.
            </p>
          </div>

          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 14 }}>
              <div style={{ width: 32, height: 3, background: "#6B0119", borderRadius: 2 }} />
              <p style={{ margin: 0, color: "#6B0119", fontFamily: "sans-serif", fontWeight: 700, fontSize: 11, letterSpacing: 4, textTransform: "uppercase" }}>
                What Makes NEXT Different
              </p>
            </div>
            <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: 14 }}>
              {[
                "AI element integrated into every learning environment",
                "Precise performance tracking with personalised feedback",
                "Targeted practice based on each student's unique pattern",
                "Interactive skill-building workshops alongside core academics",
                "ASPIRE HELPDESK — dedicated student & parent support centre",
              ].map((item) => (
                <li key={item} style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                  <span
                    style={{
                      marginTop: 4, flexShrink: 0,
                      width: 18, height: 18, borderRadius: "50%",
                      background: "#6B0119",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      color: "#fff", fontSize: 10, fontWeight: 800,
                    }}
                  >
                    ✓
                  </span>
                  <span style={{ color: "#444", lineHeight: 1.7, fontSize: 14 }}>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ══ KEY FEATURES ══ */}
      <section style={{ padding: "72px 32px", maxWidth: 1100, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 52 }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 12, marginBottom: 10 }}>
            <div style={{ width: 36, height: 2, background: "#6B0119", borderRadius: 1 }} />
            <p style={{ margin: 0, color: "#6B0119", fontFamily: "sans-serif", fontWeight: 700, fontSize: 11, letterSpacing: 4, textTransform: "uppercase" }}>
              Key Features
            </p>
            <div style={{ width: 36, height: 2, background: "#6B0119", borderRadius: 1 }} />
          </div>
          <h2 style={{ fontSize: "clamp(26px,4vw,40px)", fontWeight: 900, color: "#1a0608", margin: 0, lineHeight: 1.2 }}>
            Built for the Future of Learning
          </h2>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))", gap: 22 }}>
          {features.map((f, i) => (
            <div
              key={f.title}
              className="next-card"
              style={{
                background: "#fff",
                border: "1px solid #fce4e7",
                borderRadius: 12,
                padding: "30px 28px",
                position: "relative",
                overflow: "hidden",
                boxShadow: "0 2px 8px rgba(107,1,25,0.05)",
              }}
            >
              {/* top accent */}
              <div
                style={{
                  position: "absolute", top: 0, left: 0, right: 0, height: 3,
                  background: i % 2 === 0
                    ? "linear-gradient(90deg,#6B0119,#c0003a)"
                    : "linear-gradient(90deg,#1a0608,#6B0119)",
                }}
              />
              <div
                style={{
                  width: 48, height: 48, borderRadius: 10,
                  background: "rgba(107,1,25,0.07)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: 24, marginBottom: 16,
                }}
              >
                {f.icon}
              </div>
              <h3 style={{ margin: "0 0 10px", fontSize: 17, fontWeight: 800, color: "#1a0608", lineHeight: 1.3 }}>
                {f.title}
              </h3>
              <p style={{ margin: 0, color: "#555", fontSize: 14, lineHeight: 1.8 }}>{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ══ HELPDESK BAND ══ */}
     

     

      {/* ══ CTA ══ */}
      <section style={{ padding: "72px 32px", textAlign: "center", background: "#fff" }}>
        <div style={{ maxWidth: 560, margin: "0 auto" }}>
          <div
            style={{
              display: "inline-block",
              background: "rgba(107,1,25,0.07)",
              border: "1px solid rgba(107,1,25,0.2)",
              borderRadius: 4, padding: "4px 16px", marginBottom: 20,
            }}
          >
            <span style={{ color: "#6B0119", fontSize: 11, fontWeight: 700, fontFamily: "sans-serif", letterSpacing: 3, textTransform: "uppercase" }}>
              Be Part of the Legacy
            </span>
          </div>
          <h2 style={{ fontSize: "clamp(26px,4vw,38px)", fontWeight: 900, color: "#1a0608", margin: "0 0 16px", lineHeight: 1.2 }}>
            Your Future Starts <br />
            <span style={{ color: "#6B0119" }}>Right Here.</span>
          </h2>
          <p style={{ color: "#555", fontSize: 15, lineHeight: 1.8, marginBottom: 36 }}>
            Join the next chapter of Aspire's 25-year journey. AI-integrated learning, expert mentorship, and a legacy of toppers — all waiting for you.
          </p>
          <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
            <button
              className="cta-btn"
              style={{
                background: "#6B0119",
                color: "#fff", border: "none", borderRadius: 6,
                padding: "14px 36px", fontSize: 15, fontWeight: 700,
                fontFamily: "sans-serif", cursor: "pointer", letterSpacing: 0.5,
                boxShadow: "0 4px 20px rgba(107,1,25,0.3)",
                transition: "background 0.2s",
              }}
            >
              Enrol Now
            </button>
            <button
              style={{
                background: "transparent", color: "#6B0119",
                border: "2px solid #6B0119", borderRadius: 6,
                padding: "14px 36px", fontSize: 15, fontWeight: 700,
                fontFamily: "sans-serif", cursor: "pointer", letterSpacing: 0.5,
              }}
            >
              Download Brochure
            </button>
          </div>
        </div>
      </section>

      {/* crimson footer line */}
      <div style={{ height: 5, background: "linear-gradient(90deg,#6B0119,#c0003a,#6B0119)" }} />
    </main>
  );
}