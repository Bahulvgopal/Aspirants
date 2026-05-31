export default function AspireMarathonPage() {
  const features = [
    { icon: "🔍", title: "Intensive Revision", desc: "Intensive revision of key topics covering the entire syllabus with focused, targeted sessions." },
    { icon: "📋", title: "Chapter-wise Recaps", desc: "Chapter-wise quick recap sessions designed to reinforce memory and core concepts rapidly." },
    { icon: "🎯", title: "High-Weightage Focus", desc: "Focus on high-weightage areas that carry maximum marks in board and entrance examinations." },
    { icon: "⚡", title: "Speed & Accuracy", desc: "Speed and accuracy practice drills to sharpen exam performance under timed conditions." },
    { icon: "📐", title: "Formula Revision", desc: "Formula revision and concept reinforcement sessions to ensure nothing is left behind." },
    { icon: "🏆", title: "Exam-Oriented Solving", desc: "Exam-oriented problem solving with past-paper patterns and predicted question techniques." },
    { icon: "❓", title: "Doubt Clearing", desc: "Dedicated doubt clearing and final guidance sessions before the exam window." },
    { icon: "💪", title: "Confidence Building", desc: "Confidence building before exams through mock drills, positive reinforcement, and strategy." },
  ];

  const phases = [
    { num: "01", title: "Syllabus Audit", desc: "Map every chapter by weightage and personal weakness" },
    { num: "02", title: "Rapid Revision", desc: "Chapter-wise blitz sessions with formula sheets" },
    { num: "03", title: "Mock Drills", desc: "Full-length timed mocks under exam conditions" },
    { num: "04", title: "Analysis & Gaps", desc: "Detailed performance breakdown after every drill" },
    { num: "05", title: "Final Push", desc: "Last-mile doubt clearing and confidence strategy" },
  ];

  return (
    <main
      style={{
        fontFamily: "'Georgia', 'Times New Roman', serif",
        background: "#0a0a0a",
        minHeight: "100vh",
        color: "#fff",
      }}
    >
      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes ticker {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
        .feat-card:hover {
          background: #fff !important;
          color: #0a0a0a !important;
          border-color: #F59E0B !important;
          transform: translateY(-4px);
        }
        .feat-card:hover .feat-title { color: #0a0a0a !important; }
        .feat-card:hover .feat-desc  { color: #444 !important; }
        .feat-card:hover .feat-icon-box { background: #F59E0B !important; }
        .feat-card { transition: all 0.22s ease; }
        .phase-card:hover { border-color: #F59E0B !important; background: rgba(245,158,11,0.06) !important; }
        .phase-card { transition: all 0.2s; }
        .cta-primary:hover { background: #D97706 !important; }
        .cta-outline:hover { background: rgba(245,158,11,0.1) !important; }
      `}</style>

      {/* ══ TICKER ══ */}
      <div
        style={{
          background: "#F59E0B",
          overflow: "hidden",
          whiteSpace: "nowrap",
          padding: "10px 0",
        }}
      >
        <div
          style={{
            display: "inline-flex",
            animation: "ticker 22s linear infinite",
          }}
        >
          {Array(8).fill("SPRINT · REVISE · CONQUER · ASPIRE MARATHON ·  ").map((t, i) => (
            <span
              key={i}
              style={{
                color: "#0a0a0a",
                fontFamily: "sans-serif",
                fontWeight: 900,
                fontSize: 13,
                letterSpacing: 3,
                paddingRight: 40,
                textTransform: "uppercase",
              }}
            >
              {t}
            </span>
          ))}
        </div>
      </div>

      {/* ══ HERO ══ */}
      <section
        style={{
          position: "relative",
          overflow: "hidden",
          borderBottom: "1px solid #1f1f1f",
        }}
      >
        {/* yellow glow */}
        <div
          style={{
            position: "absolute", top: -120, right: -120,
            width: 500, height: 500, borderRadius: "50%",
            background: "radial-gradient(circle, rgba(245,158,11,0.12) 0%, transparent 65%)",
            pointerEvents: "none",
          }}
        />
        {/* diagonal stripes bg */}
        <div
          style={{
            position: "absolute", inset: 0,
            backgroundImage: "repeating-linear-gradient(45deg, transparent, transparent 40px, rgba(245,158,11,0.015) 40px, rgba(245,158,11,0.015) 80px)",
            pointerEvents: "none",
          }}
        />

        <div
          style={{
            maxWidth: 1100, margin: "0 auto", padding: "72px 32px 80px",
            animation: "fadeUp 0.65s ease both",
            position: "relative",
          }}
        >
          {/* eyebrow */}
          <div
            style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              border: "1px solid rgba(245,158,11,0.35)",
              borderRadius: 3, padding: "5px 16px", marginBottom: 28,
              background: "rgba(245,158,11,0.07)",
            }}
          >
            <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#F59E0B", display: "inline-block", animation: "pulse 1.5s infinite" }} />
            <span style={{ color: "#F59E0B", fontSize: 11, fontWeight: 700, letterSpacing: 3, fontFamily: "sans-serif", textTransform: "uppercase" }}>
              Intensive Revision Programme
            </span>
          </div>

          {/* wordmark */}
          <div>
            <p style={{ margin: 0, color: "rgba(255,255,255,0.25)", fontSize: 12, letterSpacing: 7, textTransform: "uppercase", fontFamily: "sans-serif", fontWeight: 600 }}>
              ASPIRE
            </p>
            <h1
              style={{
                margin: "4px 0 0",
                fontSize: "clamp(64px,11vw,128px)",
                fontWeight: 900,
                lineHeight: 0.9,
                letterSpacing: -5,
                fontFamily: "sans-serif",
              }}
            >
              <span style={{ color: "#fff" }}>MARA</span>
              <span
                style={{
                  color: "transparent",
                  WebkitTextStroke: "3px #F59E0B",
                }}
              >
                THON
              </span>
            </h1>
          </div>

          {/* sub */}
          <p
            style={{
              color: "rgba(255,255,255,0.55)",
              fontSize: "clamp(14px,1.8vw,18px)",
              maxWidth: 600, lineHeight: 1.85,
              margin: "24px 0 0",
            }}
          >
            A focused revision programme designed to improve speed, accuracy, and exam confidence. The final, decisive push before your boards and entrance examinations.
          </p>

          {/* stats */}
          <div style={{ display: "flex", gap: 40, marginTop: 48, flexWrap: "wrap" }}>
            {[
              { num: "8", label: "Core Modules" },
              { num: "5", label: "Phase Process" },
              { num: "100%", label: "Exam Focused" },
              { num: "Final", label: "Sprint Mode" },
            ].map((s) => (
              <div key={s.label} style={{ borderLeft: "3px solid #F59E0B", paddingLeft: 14 }}>
                <div style={{ color: "#F59E0B", fontSize: 26, fontWeight: 900, fontFamily: "sans-serif", lineHeight: 1 }}>{s.num}</div>
                <div style={{ color: "rgba(255,255,255,0.4)", fontSize: 12, fontFamily: "sans-serif", marginTop: 3 }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ KEY FEATURES ══ */}
      <section style={{ padding: "80px 32px", maxWidth: 1100, margin: "0 auto" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 48, flexWrap: "wrap", gap: 16 }}>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8 }}>
              <div style={{ width: 32, height: 3, background: "#F59E0B", borderRadius: 2 }} />
              <p style={{ margin: 0, color: "#F59E0B", fontFamily: "sans-serif", fontWeight: 700, fontSize: 11, letterSpacing: 4, textTransform: "uppercase" }}>
                Key Features
              </p>
            </div>
            <h2 style={{ fontSize: "clamp(24px,3.5vw,38px)", fontWeight: 900, color: "#fff", margin: 0, lineHeight: 1.2 }}>
              Everything in Your Final Arsenal
            </h2>
          </div>
          <div
            style={{
              background: "rgba(245,158,11,0.1)",
              border: "1px solid rgba(245,158,11,0.25)",
              borderRadius: 8, padding: "10px 20px",
              fontFamily: "sans-serif", fontSize: 13, color: "#F59E0B", fontWeight: 700,
            }}
          >
            8 Power Modules
          </div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))", gap: 16 }}>
          {features.map((f, i) => (
            <div
              key={f.title}
              className="feat-card"
              style={{
                background: "#111",
                border: "1px solid #222",
                borderRadius: 10,
                padding: "26px 24px",
                position: "relative",
                overflow: "hidden",
                cursor: "default",
              }}
            >
              {/* number watermark */}
              <div
                style={{
                  position: "absolute", top: 8, right: 14,
                  fontSize: 48, fontWeight: 900,
                  color: "rgba(245,158,11,0.06)",
                  fontFamily: "sans-serif", lineHeight: 1,
                  userSelect: "none",
                }}
              >
                {String(i + 1).padStart(2, "0")}
              </div>

              <div
                className="feat-icon-box"
                style={{
                  width: 44, height: 44, borderRadius: 8,
                  background: "rgba(245,158,11,0.1)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: 22, marginBottom: 14,
                  transition: "background 0.22s",
                }}
              >
                {f.icon}
              </div>
              <h3 className="feat-title" style={{ margin: "0 0 8px", fontSize: 16, fontWeight: 800, color: "#fff", lineHeight: 1.3, transition: "color 0.22s" }}>
                {f.title}
              </h3>
              <p className="feat-desc" style={{ margin: 0, color: "rgba(255,255,255,0.5)", fontSize: 13, lineHeight: 1.75, transition: "color 0.22s" }}>
                {f.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ══ MARATHON PHASES ══ */}
      <section
        style={{
          background: "#fff",
          padding: "80px 32px",
        }}
      >
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 52 }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 12, marginBottom: 10 }}>
              <div style={{ width: 36, height: 2, background: "#0a0a0a", borderRadius: 1 }} />
              <p style={{ margin: 0, color: "#0a0a0a", fontFamily: "sans-serif", fontWeight: 700, fontSize: 11, letterSpacing: 4, textTransform: "uppercase" }}>
                The Process
              </p>
              <div style={{ width: 36, height: 2, background: "#0a0a0a", borderRadius: 1 }} />
            </div>
            <h2 style={{ fontSize: "clamp(26px,4vw,40px)", fontWeight: 900, color: "#0a0a0a", margin: 0, lineHeight: 1.2 }}>
              The 5-Phase <span style={{ color: "#F59E0B", WebkitTextStroke: "1px #D97706" }}>Marathon</span> Journey
            </h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(180px,1fr))", gap: 16 }}>
            {phases.map((p, i) => (
              <div
                key={p.num}
                className="phase-card"
                style={{
                  background: "#fff",
                  border: "2px solid #e8e8e8",
                  borderRadius: 10,
                  padding: "28px 20px",
                  position: "relative",
                  overflow: "hidden",
                  cursor: "default",
                }}
              >
                {/* progress fill */}
                <div
                  style={{
                    position: "absolute", bottom: 0, left: 0,
                    height: 3,
                    width: `${((i + 1) / phases.length) * 100}%`,
                    background: "#F59E0B",
                    borderRadius: "0 2px 2px 0",
                  }}
                />
                <div
                  style={{
                    fontSize: 40, fontWeight: 900, fontFamily: "sans-serif",
                    color: "#F59E0B", lineHeight: 1, marginBottom: 12,
                    opacity: 0.7,
                  }}
                >
                  {p.num}
                </div>
                <h3 style={{ margin: "0 0 8px", fontSize: 16, fontWeight: 800, color: "#0a0a0a" }}>
                  {p.title}
                </h3>
                <p style={{ margin: 0, color: "#666", fontSize: 13, lineHeight: 1.7 }}>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ QUOTE BAND ══ */}
      <section
        style={{
          background: "#F59E0B",
          padding: "52px 32px",
          textAlign: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute", inset: 0,
            backgroundImage: "repeating-linear-gradient(45deg, transparent, transparent 30px, rgba(0,0,0,0.03) 30px, rgba(0,0,0,0.03) 60px)",
            pointerEvents: "none",
          }}
        />
        <div style={{ position: "relative", maxWidth: 700, margin: "0 auto" }}>
          <p
            style={{
              fontSize: "clamp(22px,4vw,38px)",
              fontWeight: 900, color: "#0a0a0a",
              margin: 0, lineHeight: 1.3,
              letterSpacing: -1,
            }}
          >
            "Speed. Accuracy.
            <br />
            <span
              style={{
                color: "transparent",
                WebkitTextStroke: "2px #0a0a0a",
              }}
            >
              Confidence."
            </span>
          </p>
          <p style={{ color: "rgba(0,0,0,0.5)", fontSize: 14, fontFamily: "sans-serif", marginTop: 12, letterSpacing: 2, textTransform: "uppercase", fontWeight: 700 }}>
            The Marathon Promise
          </p>
        </div>
      </section>

      {/* ══ CTA ══ */}
      <section style={{ padding: "72px 32px", textAlign: "center", background: "#0a0a0a" }}>
        <div style={{ maxWidth: 540, margin: "0 auto" }}>
          <div
            style={{
              display: "inline-block",
              background: "rgba(245,158,11,0.1)",
              border: "1px solid rgba(245,158,11,0.3)",
              borderRadius: 4, padding: "4px 16px", marginBottom: 20,
            }}
          >
            <span style={{ color: "#F59E0B", fontSize: 11, fontWeight: 700, fontFamily: "sans-serif", letterSpacing: 3, textTransform: "uppercase" }}>
              Last Sprint
            </span>
          </div>
          <h2 style={{ fontSize: "clamp(26px,4vw,38px)", fontWeight: 900, color: "#fff", margin: "0 0 16px", lineHeight: 1.2 }}>
            The Finish Line Is <br />
            <span style={{ color: "#F59E0B" }}>Closer Than You Think.</span>
          </h2>
          <p style={{ color: "rgba(255,255,255,0.5)", fontSize: 15, lineHeight: 1.85, marginBottom: 36 }}>
            Join ASPIRE MARATHON — the intensive final sprint that transforms your preparation into exam-day dominance.
          </p>
          <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
            <button
              className="cta-primary"
              style={{
                background: "#F59E0B",
                color: "#0a0a0a", border: "none", borderRadius: 6,
                padding: "14px 36px", fontSize: 15, fontWeight: 800,
                fontFamily: "sans-serif", cursor: "pointer", letterSpacing: 0.5,
                boxShadow: "0 4px 20px rgba(245,158,11,0.35)",
                transition: "background 0.2s",
              }}
            >
              Join the Sprint
            </button>
            <button
              className="cta-outline"
              style={{
                background: "transparent", color: "#fff",
                border: "2px solid #fff", borderRadius: 6,
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

      {/* footer bar */}
      <div style={{ height: 5, background: "linear-gradient(90deg,#0a0a0a,#F59E0B,#fff,#F59E0B,#0a0a0a)" }} />
    </main>
  );
}