export default function AspireElitePage() {
  const features = [
    {
     
      title: "Structured Curriculum",
      desc: "Entrance-oriented structured curriculum aligned with board syllabus, comprehensively and regularly updated study materials.",
    },
    {
      
      title: "Performance Analysis",
      desc: "Weekly tests and full-length mock examinations with detailed performance analysis and individual feedback.",
    },
    {
      
      title: "Advanced Problem Solving",
      desc: "Advanced problem-solving and concept reinforcement sessions for faster and more accurate answers.",
    },
    {
      
      title: "Smart Calculation Techniques",
      desc: "Shortcut methods and easy calculation techniques for time efficiency.",
    },
    {
      
      title: "Revision Modules",
      desc: "Regular revision modules and practice sessions, dedicated doubt-clearing and mentoring support.",
    },
    {
      
      title: "Exam Strategy Training",
      desc: "Time management and exam strategy training to boost accuracy and exam readiness.",
    },
  ];

  return (
    <main
      style={{
        fontFamily: "'Georgia', 'Times New Roman', serif",
        background: "#EFF6FF",
        minHeight: "100vh",
        color: "#0f172a",
      }}
    >
      {/* ── HERO ── */}
      <section
        style={{
          background: "linear-gradient(135deg, #1E3A8A 0%, #1E41AF 50%, #1d4ed8 100%)",
          position: "relative",
          overflow: "hidden",
          padding: "0",
        }}
      >
        {/* decorative circles */}
        <div
          style={{
            position: "absolute",
            top: -80,
            right: -80,
            width: 400,
            height: 400,
            borderRadius: "50%",
            background: "rgba(255,255,255,0.04)",
            pointerEvents: "none",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: -60,
            left: -60,
            width: 300,
            height: 300,
            borderRadius: "50%",
            background: "rgba(255,255,255,0.04)",
            pointerEvents: "none",
          }}
        />
        {/* gold top bar */}
        <div style={{ height: 5, background: "linear-gradient(90deg,#FBBF24,#F59E0B,#FBBF24)" }} />

        <div
          style={{
            maxWidth: 1100,
            margin: "0 auto",
            padding: "60px 32px 64px",
            display: "flex",
            flexDirection: "column",
            gap: 12,
          }}
        >
          {/* badge */}
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 8 }}>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                background: "rgba(251,191,36,0.15)",
                border: "1px solid rgba(251,191,36,0.4)",
                borderRadius: 4,
                padding: "6px 16px",
              }}
            >
              <span style={{ color: "#FBBF24", fontSize: 12, fontWeight: 700, letterSpacing: 3, fontFamily: "sans-serif", textTransform: "uppercase" }}>
                ✦ Specialized Programme
              </span>
            </div>
          </div>

          {/* brand */}
          <div style={{ display: "flex", alignItems: "flex-end", gap: 16 }}>
            <div>
              <p
                style={{
                  margin: 0,
                  color: "rgba(255,255,255,0.6)",
                  fontSize: 15,
                  letterSpacing: 6,
                  textTransform: "uppercase",
                  fontFamily: "sans-serif",
                  fontWeight: 600,
                }}
              >
                ASPIRE
              </p>
              <h1
                style={{
                  margin: 0,
                  fontSize: "clamp(52px, 8vw, 88px)",
                  fontWeight: 900,
                  lineHeight: 1,
                  color: "#fff",
                  letterSpacing: -2,
                }}
              >
                ELITE
              </h1>
            </div>
            <div
              style={{
                marginBottom: 14,
                background: "linear-gradient(135deg,#FBBF24,#F59E0B)",
                borderRadius: 4,
                padding: "4px 14px",
                fontFamily: "sans-serif",
                fontWeight: 700,
                fontSize: 13,
                color: "#1E3A8A",
                letterSpacing: 1,
              }}
            >
              Batch
            </div>
          </div>

          {/* tagline */}
          <p
            style={{
              margin: "12px 0 0",
              color: "rgba(255,255,255,0.85)",
              fontSize: "clamp(16px,2.2vw,20px)",
              maxWidth: 640,
              lineHeight: 1.65,
              fontStyle: "italic",
            }}
          >
            A specialised programme for students targeting top ranks in NEET and JEE — a focused, structured approach to build strong concepts, consistent practice, and balanced board + entrance preparation.
          </p>

          {/* stats row */}
          <div
            style={{
              display: "flex",
              gap: 32,
              marginTop: 36,
              flexWrap: "wrap",
            }}
          >
            {[
              { num: "Top", label: "NEET & JEE Ranks" },
              { num: "Weekly", label: "Tests & Mock Exams" },
              { num: "1-on-1", label: "Mentoring & Doubt Support" },
              { num: "Board+", label: "Entrance Readiness" },
            ].map((s) => (
              <div key={s.label} style={{ borderLeft: "3px solid #FBBF24", paddingLeft: 14 }}>
                <div style={{ color: "#FBBF24", fontSize: 22, fontWeight: 800, fontFamily: "sans-serif" }}>{s.num}</div>
                <div style={{ color: "rgba(255,255,255,0.7)", fontSize: 12, fontFamily: "sans-serif", marginTop: 2 }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ABOUT BAND ── */}
      <section
        style={{
          background: "#fff",
          borderBottom: "1px solid #dbeafe",
        }}
      >
        <div
          style={{
            maxWidth: 1100,
            margin: "0 auto",
            padding: "52px 32px",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 48,
          }}
        >
          <div>
            <p
              style={{
                color: "#1E40AF",
                fontFamily: "sans-serif",
                fontWeight: 700,
                fontSize: 11,
                letterSpacing: 4,
                textTransform: "uppercase",
                marginBottom: 12,
              }}
            >
              About the Programme
            </p>
            <h2
              style={{
                fontSize: "clamp(24px,3vw,34px)",
                fontWeight: 800,
                lineHeight: 1.25,
                margin: "0 0 20px",
                color: "#1E3A8A",
              }}
            >
              Structured Excellence for Competitive Success
            </h2>
            <p style={{ color: "#374151", lineHeight: 1.8, fontSize: 15 }}>
              Aspire ELITE Batch follows a focused, structured approach to build strong concepts,
              consistent practice, and balanced board + entrance preparation, supported by detailed
              analyses, doubt support, revision modules and strategic continuous mentoring.
            </p>
          </div>
          <div>
            <p
              style={{
                color: "#1E40AF",
                fontFamily: "sans-serif",
                fontWeight: 700,
                fontSize: 11,
                letterSpacing: 4,
                textTransform: "uppercase",
                marginBottom: 12,
              }}
            >
              What Sets Us Apart
            </p>
            <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: 12 }}>
              {[
                "Weekly tests and mock exams to improve accuracy and time management",
                "Detailed analyses, doubt support, and revision modules",
                "Exam readiness — backed by disciplined plans and continuous mentoring",
              ].map((item) => (
                <li key={item} style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                  <span
                    style={{
                      marginTop: 3,
                      flexShrink: 0,
                      width: 20,
                      height: 20,
                      borderRadius: "50%",
                      background: "linear-gradient(135deg,#1E40AF,#3B82F6)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#fff",
                      fontSize: 11,
                      fontWeight: 700,
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

      {/* ── KEY FEATURES ── */}
      <section style={{ padding: "72px 32px", maxWidth: 1100, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 52 }}>
          <p
            style={{
              color: "#1E40AF",
              fontFamily: "sans-serif",
              fontWeight: 700,
              fontSize: 11,
              letterSpacing: 4,
              textTransform: "uppercase",
              marginBottom: 10,
            }}
          >
            Key Features
          </p>
          <h2
            style={{
              fontSize: "clamp(28px,4vw,42px)",
              fontWeight: 900,
              color: "#1E3A8A",
              margin: 0,
              lineHeight: 1.2,
            }}
          >
            Everything You Need to Rank High
          </h2>
          <div
            style={{
              width: 64,
              height: 4,
              background: "linear-gradient(90deg,#FBBF24,#F59E0B)",
              borderRadius: 2,
              margin: "18px auto 0",
            }}
          />
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: 24,
          }}
        >
          {features.map((f, i) => (
            <div
              key={f.title}
              style={{
                background: "#fff",
                border: "1px solid #DBEAFE",
                borderRadius: 12,
                padding: "28px 28px",
                position: "relative",
                overflow: "hidden",
                transition: "box-shadow 0.2s",
                boxShadow: "0 2px 8px rgba(30,64,175,0.06)",
              }}
            >
              {/* accent bar */}
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  height: 3,
                  background:
                    i % 3 === 0
                      ? "linear-gradient(90deg,#1E40AF,#3B82F6)"
                      : i % 3 === 1
                      ? "linear-gradient(90deg,#FBBF24,#F59E0B)"
                      : "linear-gradient(90deg,#3B82F6,#1E40AF)",
                }}
              />
              {/* <div style={{ fontSize: 30, marginBottom: 14 }}>{f.icon}</div> */}
              <h3
                style={{
                  margin: "0 0 10px",
                  fontSize: 17,
                  fontWeight: 800,
                  color: "#1E3A8A",
                  lineHeight: 1.3,
                }}
              >
                {f.title}
              </h3>
              <p style={{ margin: 0, color: "#4B5563", fontSize: 14, lineHeight: 1.75 }}>{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── APPROACH TIMELINE ── */}
      <section
        style={{
          background: "linear-gradient(135deg,#1E3A8A 0%,#1E40AF 100%)",
          padding: "72px 32px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0, opacity: 0.04, backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)", backgroundSize: "28px 28px", pointerEvents: "none" }} />
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 52 }}>
            <p style={{ color: "#FBBF24", fontFamily: "sans-serif", fontWeight: 700, fontSize: 11, letterSpacing: 4, textTransform: "uppercase", marginBottom: 10 }}>
              Our Approach
            </p>
            <h2 style={{ fontSize: "clamp(26px,4vw,38px)", fontWeight: 900, color: "#fff", margin: 0 }}>
              The Elite Learning Journey
            </h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))", gap: 2 }}>
            {[
              { step: "01", title: "Concept Building", desc: "Strong fundamentals with board + entrance integration" },
              { step: "02", title: "Practice Sessions", desc: "Guided practice with shortcut techniques" },
              { step: "03", title: "Weekly Testing", desc: "Full-length mocks with detailed performance analysis" },
              { step: "04", title: "Doubt Clearing", desc: "Dedicated sessions with mentors for every query" },
              { step: "05", title: "Revision & Strategy", desc: "Targeted revision modules and exam strategy training" },
            ].map((item, i) => (
              <div
                key={item.step}
                style={{
                  padding: "32px 24px",
                  background: i % 2 === 0 ? "rgba(255,255,255,0.07)" : "rgba(255,255,255,0.03)",
                  borderRadius: 8,
                  position: "relative",
                }}
              >
                <div style={{ color: "#FBBF24", fontSize: 40, fontWeight: 900, fontFamily: "sans-serif", lineHeight: 1, marginBottom: 12, opacity: 0.6 }}>{item.step}</div>
                <h3 style={{ color: "#fff", fontSize: 16, fontWeight: 800, margin: "0 0 8px" }}>{item.title}</h3>
                <p style={{ color: "rgba(255,255,255,0.65)", fontSize: 13, lineHeight: 1.7, margin: 0 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{ padding: "72px 32px", textAlign: "center" }}>
        <div style={{ maxWidth: 600, margin: "0 auto" }}>
          <h2 style={{ fontSize: "clamp(28px,4vw,40px)", fontWeight: 900, color: "#1E3A8A", margin: "0 0 16px" }}>
            Ready to Join Aspire ELITE?
          </h2>
          <p style={{ color: "#4B5563", fontSize: 16, lineHeight: 1.75, marginBottom: 36 }}>
            Limited seats. Disciplined learning. Real results. Take the first step toward your NEET / JEE rank today.
          </p>
          <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
            <button
              style={{
                background: "linear-gradient(135deg,#1E40AF,#1d4ed8)",
                color: "#fff",
                border: "none",
                borderRadius: 6,
                padding: "14px 36px",
                fontSize: 15,
                fontWeight: 700,
                fontFamily: "sans-serif",
                cursor: "pointer",
                letterSpacing: 0.5,
                boxShadow: "0 4px 20px rgba(30,64,175,0.35)",
              }}
            >
              Enroll Now
            </button>
            <button
              style={{
                background: "transparent",
                color: "#1E40AF",
                border: "2px solid #1E40AF",
                borderRadius: 6,
                padding: "14px 36px",
                fontSize: 15,
                fontWeight: 700,
                fontFamily: "sans-serif",
                cursor: "pointer",
                letterSpacing: 0.5,
              }}
            >
              Download Brochure
            </button>
          </div>
        </div>
      </section>

      {/* gold footer line */}
      <div style={{ height: 5, background: "linear-gradient(90deg,#FBBF24,#F59E0B,#FBBF24)" }} />
    </main>
  );
}