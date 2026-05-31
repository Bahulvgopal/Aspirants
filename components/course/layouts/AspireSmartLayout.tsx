export default function AspireSmartPage() {
  const features = [
    {
      
      title: "Structured Curriculum",
      desc: "Curriculum aligned with board syllabus — concept-based and easy-to-understand learning approach.",
    },
    {
      
      title: "Smart Classroom Teaching",
      desc: "Digital classrooms, digital tools, and AI-supported evaluations make learning engaging with guided revision.",
    },
    {
      
      title: "Evaluation & Performance Tracking",
      desc: "AI-supported evaluation and performance tracking with weekly tests and periodic assessments.",
    },
    {
      
      title: "Comprehensive Study Materials",
      desc: "Comprehensive and student-friendly study materials for confident, stress-free preparation.",
    },
    {
      
      title: "Revision & Doubt Clearing",
      desc: "Regular revision and guided practice sessions with dedicated doubt-clearing and mentoring support.",
    },
    {
      
      title: "Academic Guidance",
      desc: "Continuous academic guidance and progress monitoring — balanced preparation for board exams and future entrance readiness.",
    },
  ];

  return (
    <main
      style={{
        fontFamily: "'Georgia', 'Times New Roman', serif",
        background: "#F0F9FF",
        minHeight: "100vh",
        color: "#0c1a2e",
      }}
    >
      <style>{`
        @keyframes pulse-ring {
          0% { transform: scale(0.95); opacity: 0.6; }
          70% { transform: scale(1.05); opacity: 0; }
          100% { transform: scale(0.95); opacity: 0; }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }
        @keyframes slide-up {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .smart-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 40px rgba(107,1,25,0.12) !important;
          border-color: #BAE6FD !important;
        }
        .smart-card { transition: transform 0.25s, box-shadow 0.25s, border-color 0.25s; }
        .enrol-btn:hover { background: linear-gradient(135deg,#6B0119,#9B0128) !important; }
        .outline-btn:hover { background: rgba(107,1,25,0.06) !important; }
      `}</style>

      {/* ══ HERO ══ */}
      <section
        style={{
          background: "linear-gradient(135deg, #0c1a2e 0%, #0e2a4a 40%, #0a3a5c 100%)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* circuit-board dot grid */}
        <div
          style={{
            position: "absolute", inset: 0,
            backgroundImage: "radial-gradient(circle, rgba(14,165,233,0.18) 1px, transparent 1px)",
            backgroundSize: "32px 32px",
            pointerEvents: "none",
          }}
        />
        {/* diagonal tech lines */}
        <svg
          style={{ position: "absolute", right: 0, top: 0, height: "100%", opacity: 0.07, pointerEvents: "none" }}
          viewBox="0 0 400 500" fill="none" xmlns="http://www.w3.org/2000/svg"
        >
          <line x1="400" y1="0" x2="0" y2="500" stroke="#38BDF8" strokeWidth="1.5"/>
          <line x1="350" y1="0" x2="0" y2="400" stroke="#38BDF8" strokeWidth="1"/>
          <line x1="300" y1="0" x2="0" y2="300" stroke="#38BDF8" strokeWidth="0.5"/>
          <line x1="400" y1="100" x2="100" y2="500" stroke="#38BDF8" strokeWidth="1"/>
        </svg>

        {/* crimson accent bar top */}
        <div style={{ height: 5, background: "linear-gradient(90deg,#6B0119,#c0003a,#6B0119)" }} />

        <div
          style={{
            maxWidth: 1100, margin: "0 auto", padding: "60px 32px 68px",
            animation: "slide-up 0.7s ease both",
          }}
        >
          {/* badge */}
          <div
            style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              background: "rgba(107,1,25,0.25)", border: "1px solid rgba(192,0,58,0.45)",
              borderRadius: 4, padding: "5px 16px", marginBottom: 20,
            }}
          >
            <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#c0003a", display: "inline-block" }} />
            <span style={{ color: "#fff", fontSize: 11, fontWeight: 700, letterSpacing: 3, fontFamily: "sans-serif", textTransform: "uppercase" }}>
              Strong Foundation · Smart Learning
            </span>
          </div>

          <div style={{ display: "flex", alignItems: "flex-end", gap: 20, marginBottom: 6, flexWrap: "wrap" }}>
            <div>
              <p style={{ margin: 0, color: "rgba(255,255,255,0.45)", fontSize: 13, letterSpacing: 6, textTransform: "uppercase", fontFamily: "sans-serif", fontWeight: 600 }}>
                ASPIRE
              </p>
              <h1
                style={{
                  margin: 0,
                  fontSize: "clamp(56px, 9vw, 96px)",
                  fontWeight: 900,
                  lineHeight: 1,
                  color: "#fff",
                  letterSpacing: -3,
                }}
              >
                Smart
              </h1>
            </div>
            {/* tech badge */}
            <div
              style={{
                marginBottom: 16,
                background: "linear-gradient(135deg,#6B0119,#9B0128)",
                borderRadius: 4,
                padding: "5px 16px",
                fontFamily: "sans-serif", fontWeight: 700, fontSize: 12,
                color: "#fff", letterSpacing: 1,
              }}
            >
              Regular Batch
            </div>
          </div>

          {/* headline */}
          <p
            style={{
              color: "#7DD3FC", fontSize: "clamp(14px,1.8vw,18px)",
              maxWidth: 600, lineHeight: 1.7, margin: "16px 0 0",
              fontStyle: "italic",
            }}
          >
            Builds a strong foundation during +1 and +2 through structured guidance and modern learning — emphasising clear concepts, gradual preparation for competitive exams and board excellence.
          </p>

          {/* stat pills */}
          <div style={{ display: "flex", gap: 12, marginTop: 40, flexWrap: "wrap" }}>
            {[
              { label: "AI-Supported", sub: "Evaluations" },
              { label: "Smart", sub: "Classrooms" },
              { label: "Periodic", sub: "Assessments" },
              { label: "Board+", sub: "Entrance Ready" },
            ].map((s) => (
              <div
                key={s.label}
                style={{
                  background: "rgba(14,165,233,0.1)",
                  border: "1px solid rgba(14,165,233,0.25)",
                  borderRadius: 8,
                  padding: "10px 20px",
                  textAlign: "center",
                }}
              >
                <div style={{ color: "#38BDF8", fontWeight: 800, fontSize: 16, fontFamily: "sans-serif" }}>{s.label}</div>
                <div style={{ color: "rgba(255,255,255,0.5)", fontSize: 11, fontFamily: "sans-serif", marginTop: 2 }}>{s.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ ABOUT BAND ══ */}
      <section style={{ background: "#fff", borderBottom: "1px solid #BAE6FD" }}>
        <div
          style={{
            maxWidth: 1100, margin: "0 auto", padding: "52px 32px",
            display: "grid", gridTemplateColumns: "1fr 1fr", gap: 52,
          }}
        >
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 14 }}>
              <div style={{ width: 32, height: 3, background: "linear-gradient(90deg,#6B0119,#c0003a)", borderRadius: 2 }} />
              <p style={{ margin: 0, color: "#6B0119", fontFamily: "sans-serif", fontWeight: 700, fontSize: 11, letterSpacing: 4, textTransform: "uppercase" }}>
                About the Programme
              </p>
            </div>
            <h2 style={{ fontSize: "clamp(22px,3vw,32px)", fontWeight: 800, color: "#0c1a2e", margin: "0 0 18px", lineHeight: 1.3 }}>
              Modern Learning. <br />
              <span style={{ color: "#0EA5E9" }}>Real Foundation.</span>
            </h2>
            <p style={{ color: "#374151", lineHeight: 1.85, fontSize: 15, margin: 0 }}>
              The Regular Batch at ASPIRE Smart builds a strong foundation during +1 and +2 through
              structured guidance and modern learning. With weekly tests and periodic exams providing
              clear performance insights, guided revision, and continuous mentoring, students gain
              accuracy and confidence through a balanced, low-pressure, future-ready approach.
            </p>
          </div>

          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 14 }}>
              <div style={{ width: 32, height: 3, background: "linear-gradient(90deg,#0EA5E9,#38BDF8)", borderRadius: 2 }} />
              <p style={{ margin: 0, color: "#0EA5E9", fontFamily: "sans-serif", fontWeight: 700, fontSize: 11, letterSpacing: 4, textTransform: "uppercase" }}>
                Why Smart Batch
              </p>
            </div>
            <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: 14 }}>
              {[
                "Digital tools and AI-supported evaluations make learning engaging",
                "Weekly tests and periodic exams with clear performance insights",
                "Continuous mentoring — balanced low-pressure approach",
                "Gradual preparation ensuring board exam success and competitive readiness",
              ].map((item) => (
                <li key={item} style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                  <span
                    style={{
                      marginTop: 3, flexShrink: 0,
                      width: 20, height: 20, borderRadius: 4,
                      background: "linear-gradient(135deg,#6B0119,#c0003a)",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      color: "#fff", fontSize: 11, fontWeight: 700,
                    }}
                  >
                    ✓
                  </span>
                  <span style={{ color: "#374151", lineHeight: 1.7, fontSize: 14 }}>{item}</span>
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
            <div style={{ width: 40, height: 2, background: "#6B0119", borderRadius: 1 }} />
            <p style={{ margin: 0, color: "#6B0119", fontFamily: "sans-serif", fontWeight: 700, fontSize: 11, letterSpacing: 4, textTransform: "uppercase" }}>
              Key Features
            </p>
            <div style={{ width: 40, height: 2, background: "#6B0119", borderRadius: 1 }} />
          </div>
          <h2 style={{ fontSize: "clamp(26px,4vw,40px)", fontWeight: 900, color: "#0c1a2e", margin: 0, lineHeight: 1.2 }}>
            Smart Tools for <span style={{ color: "#0EA5E9" }}>Smarter</span> Results
          </h2>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))", gap: 22 }}>
          {features.map((f, i) => (
            <div
              key={f.title}
              className="smart-card"
              style={{
                background: "#fff",
                border: "1px solid #E0F2FE",
                borderRadius: 12,
                padding: "30px 28px",
                position: "relative",
                overflow: "hidden",
                boxShadow: "0 2px 10px rgba(14,165,233,0.07)",
              }}
            >
              {/* top accent */}
              <div
                style={{
                  position: "absolute", top: 0, left: 0, right: 0, height: 3,
                  background: i % 2 === 0
                    ? "linear-gradient(90deg,#6B0119,#c0003a)"
                    : "linear-gradient(90deg,#0EA5E9,#38BDF8)",
                }}
              />
              {/* corner chip */}
              {/* <div
                style={{
                  position: "absolute", top: 12, right: 16,
                  width: 28, height: 28, borderRadius: 6,
                  background: i % 2 === 0 ? "rgba(107,1,25,0.07)" : "rgba(14,165,233,0.1)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: 14,
                }}
              >
                {f.icon}
              </div> */}

              {/* <div style={{ fontSize: 28, marginBottom: 14 }}>{f.icon}</div> */}
              <h3 style={{ margin: "0 0 10px", fontSize: 17, fontWeight: 800, color: "#0c1a2e", lineHeight: 1.3 }}>
                {f.title}
              </h3>
              <p style={{ margin: 0, color: "#4B5563", fontSize: 14, lineHeight: 1.8 }}>{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ══ TECH APPROACH STRIP ══ */}
      <section
        style={{
          background: "linear-gradient(135deg,#0c1a2e 0%,#0a3a5c 100%)",
          padding: "72px 32px",
          position: "relative", overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute", inset: 0,
            backgroundImage: "radial-gradient(circle, rgba(14,165,233,0.12) 1px, transparent 1px)",
            backgroundSize: "28px 28px", pointerEvents: "none",
          }}
        />
        {/* crimson glow blob */}
        <div
          style={{
            position: "absolute", bottom: -80, right: -80,
            width: 320, height: 320, borderRadius: "50%",
            background: "radial-gradient(circle, rgba(107,1,25,0.35) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />

        <div style={{ maxWidth: 1100, margin: "0 auto", position: "relative" }}>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <p style={{ color: "#38BDF8", fontFamily: "sans-serif", fontWeight: 700, fontSize: 11, letterSpacing: 4, textTransform: "uppercase", marginBottom: 10 }}>
              Learning Pathway
            </p>
            <h2 style={{ fontSize: "clamp(24px,3.5vw,36px)", fontWeight: 900, color: "#fff", margin: 0 }}>
              The Smart Learning Journey
            </h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(180px,1fr))", gap: 2 }}>
            {[
              { n: "01", t: "Foundation Building", d: "Clear concepts with board + competitive alignment" },
              { n: "02", t: "Smart Classroom", d: "AI tools and digital teaching for engaged learning" },
              { n: "03", t: "Periodic Testing", d: "Weekly assessments with performance insights" },
              { n: "04", t: "Mentored Revision", d: "Guided revision with continuous doubt clearing" },
              { n: "05", t: "Entrance Readiness", d: "Gradual, pressure-free competitive exam prep" },
            ].map((item, i) => (
              <div
                key={item.n}
                style={{
                  padding: "30px 22px",
                  background: i % 2 === 0 ? "rgba(14,165,233,0.07)" : "rgba(107,1,25,0.1)",
                  borderRadius: 8,
                  borderTop: `2px solid ${i % 2 === 0 ? "rgba(14,165,233,0.3)" : "rgba(192,0,58,0.4)"}`,
                }}
              >
                <div
                  style={{
                    color: i % 2 === 0 ? "#38BDF8" : "#fca5a5",
                    fontSize: 36, fontWeight: 900, fontFamily: "sans-serif",
                    lineHeight: 1, marginBottom: 12, opacity: 0.5,
                  }}
                >
                  {item.n}
                </div>
                <h3 style={{ color: "#fff", fontSize: 15, fontWeight: 800, margin: "0 0 8px" }}>{item.t}</h3>
                <p style={{ color: "rgba(255,255,255,0.55)", fontSize: 13, lineHeight: 1.7, margin: 0 }}>{item.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ HIGHLIGHTS ROW ══ */}
      <section style={{ background: "#fff", borderTop: "1px solid #BAE6FD", borderBottom: "1px solid #BAE6FD" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", padding: "48px 32px", display: "flex", gap: 0, flexWrap: "wrap" }}>
          {[
            { icon: "🤖", label: "AI-Supported Evaluations", color: "#0EA5E9" },
            { icon: "📊", label: "Continuous Progress Monitoring", color: "#6B0119" },
            { icon: "🏫", label: "Smart Classroom Teaching", color: "#0EA5E9" },
            { icon: "📚", label: "Board + Entrance Balanced Prep", color: "#6B0119" },
          ].map((h, i) => (
            <div
              key={h.label}
              style={{
                flex: "1 1 200px",
                padding: "28px 24px",
                borderRight: i < 3 ? "1px solid #E0F2FE" : "none",
                display: "flex", flexDirection: "column", alignItems: "center", gap: 10, textAlign: "center",
              }}
            >
              <div
                style={{
                  width: 52, height: 52, borderRadius: 12,
                  background: i % 2 === 0 ? "rgba(14,165,233,0.1)" : "rgba(107,1,25,0.08)",
                  display: "flex", alignItems: "center", justifyContent: "center", fontSize: 24,
                }}
              >
                {h.icon}
              </div>
              <span style={{ color: "#0c1a2e", fontWeight: 700, fontSize: 14, lineHeight: 1.4 }}>{h.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ══ CTA ══ */}
      <section style={{ padding: "72px 32px", textAlign: "center" }}>
        <div style={{ maxWidth: 580, margin: "0 auto" }}>
          <div
            style={{
              display: "inline-block",
              background: "rgba(107,1,25,0.07)",
              border: "1px solid rgba(107,1,25,0.2)",
              borderRadius: 4,
              padding: "4px 16px",
              marginBottom: 20,
            }}
          >
            <span style={{ color: "#6B0119", fontSize: 11, fontWeight: 700, fontFamily: "sans-serif", letterSpacing: 3, textTransform: "uppercase" }}>
              Join the Batch
            </span>
          </div>
          <h2 style={{ fontSize: "clamp(26px,4vw,38px)", fontWeight: 900, color: "#0c1a2e", margin: "0 0 16px", lineHeight: 1.2 }}>
            Build Your Foundation <br />
            <span style={{ color: "#0EA5E9" }}>the Smart Way.</span>
          </h2>
          <p style={{ color: "#4B5563", fontSize: 15, lineHeight: 1.8, marginBottom: 36 }}>
            Low-pressure, future-ready learning. Smart classrooms, AI tools, and continuous mentoring — everything you need for board + entrance success.
          </p>
          <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
            <button
              className="enrol-btn"
              style={{
                background: "linear-gradient(135deg,#6B0119,#9B0128)",
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
              className="outline-btn"
              style={{
                background: "transparent", color: "#0EA5E9",
                border: "2px solid #0EA5E9", borderRadius: 6,
                padding: "14px 36px", fontSize: 15, fontWeight: 700,
                fontFamily: "sans-serif", cursor: "pointer", letterSpacing: 0.5,
                transition: "background 0.2s",
              }}
            >
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* crimson footer line */}
      <div style={{ height: 5, background: "linear-gradient(90deg,#6B0119,#c0003a,#6B0119)" }} />
    </main>
  );
}