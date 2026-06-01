export default function AspireCodexPage() {
  const codexFeatures = [
    {
      icon: "💻",
      title: "Fully Digital Learning",
      desc: "Fully digital, hands-on learning environment — no pen-and-paper approach, practice-based learning throughout.",
    },
    {
      icon: "🧩",
      title: "Coding & Problem Solving",
      desc: "Introduction to coding concepts and basic reverse engineering with logical problem-solving techniques.",
    },
    {
      icon: "🤖",
      title: "AI-Supported Learning",
      desc: "AI-supported learning and guided practice with continuous mentoring and skill tracking.",
    },
    {
      icon: "🌐",
      title: "Real-World Platforms",
      desc: "Access to platforms like HackerRank, LeetCode, and Hack The Box for real-world exposure and competitive coding.",
    },
    {
      icon: "📡",
      title: "World Exposure",
      desc: "Using platforms like HackerRank, LeetCode, and Hack The Box, students gain real-world exposure through structured tools and beginner-level activities.",
    },
    {
      icon: "🚀",
      title: "Higher Education Ready",
      desc: "Safe-ready learning environment with continuous mentoring — CODEX prepares students for higher education and emerging tech careers.",
    },
  ];

  const marathonFeatures = [
    { icon: "🔍", text: "Intensive revision of key topics" },
    { icon: "📋", text: "Chapter-wise quick recap sessions" },
    { icon: "🎯", text: "Focus on high-weightage areas" },
    { icon: "⚡", text: "Speed and accuracy practice" },
    { icon: "📐", text: "Formula revision and concept reinforcement" },
    { icon: "🏆", text: "Exam-oriented problem solving" },
    { icon: "❓", text: "Doubt clearing and final guidance" },
    { icon: "💪", text: "Confidence building before exams" },
  ];

  return (
    <main
      style={{
        fontFamily: "'Georgia', 'Times New Roman', serif",
        background: "#F8F7F4",
        minHeight: "100vh",
        color: "#0d0d0d",
      }}
    >
      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(22px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes blink {
          0%, 100% { opacity: 1; } 50% { opacity: 0.4; }
        }
        .codex-card:hover {
          box-shadow: 0 10px 36px rgba(107,1,25,0.12) !important;
          border-color: #BFDBFE !important;
          transform: translateY(-3px);
        }
        .codex-card { transition: all 0.25s ease; }
        .marathon-item:hover {
          background: #fff !important;
          border-color: #6B0119 !important;
        }
        .marathon-item { transition: all 0.2s; }
        .cta-btn:hover { background: #4e010f !important; box-shadow: 0 6px 24px rgba(107,1,25,0.35) !important; }
      `}</style>

      {/* ══ HERO ══ */}
      <section
        style={{
          background: "#0d0d0d",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* subtle grid */}
        <div
          style={{
            position: "absolute", inset: 0,
            backgroundImage: `
              linear-gradient(rgba(191,219,254,0.05) 1px, transparent 1px),
              linear-gradient(90deg, rgba(191,219,254,0.05) 1px, transparent 1px)
            `,
            backgroundSize: "40px 40px",
            pointerEvents: "none",
          }}
        />
        {/* crimson glow */}
        <div
          style={{
            position: "absolute", bottom: -100, left: -100,
            width: 400, height: 400, borderRadius: "50%",
            background: "radial-gradient(circle, rgba(107,1,25,0.4) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />
        {/* light blue glow top right */}
        <div
          style={{
            position: "absolute", top: -80, right: -80,
            width: 350, height: 350, borderRadius: "50%",
            background: "radial-gradient(circle, rgba(186,230,253,0.08) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />

        {/* crimson top bar */}
        <div style={{ height: 4, background: "linear-gradient(90deg,#6B0119,#c0003a,#6B0119)" }} />

        <div
          style={{
            maxWidth: 1100, margin: "0 auto", padding: "64px 32px 72px",
            animation: "fadeUp 0.65s ease both",
            position: "relative",
          }}
        >
          {/* eyebrow badge */}
          <div
            style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              border: "1px solid rgba(191,219,254,0.25)",
              borderRadius: 4, padding: "5px 16px", marginBottom: 24,
              background: "rgba(191,219,254,0.06)",
            }}
          >
            <span
              style={{
                width: 7, height: 7, borderRadius: "50%",
                background: "#BFDBFE",
                display: "inline-block",
                animation: "blink 2s infinite",
              }}
            />
            <span style={{ color: "#BFDBFE", fontSize: 11, fontWeight: 700, letterSpacing: 3, fontFamily: "sans-serif", textTransform: "uppercase" }}>
              Computer & Digital Skills Programme
            </span>
          </div>

          {/* wordmark */}
          <div style={{ display: "flex", alignItems: "flex-end", gap: 16, flexWrap: "wrap", marginBottom: 8 }}>
            <div>
              <p style={{ margin: 0, color: "rgba(255,255,255,0.3)", fontSize: 12, letterSpacing: 7, textTransform: "uppercase", fontFamily: "sans-serif", fontWeight: 600 }}>
                ASPIRE
              </p>
              <div style={{ display: "flex", alignItems: "center", gap: 0 }}>
                <h1
                  style={{
                    margin: 0,
                    fontSize: "clamp(56px,9vw,100px)",
                    fontWeight: 900, lineHeight: 0.95,
                    color: "#fff", letterSpacing: -4,
                    fontFamily: "sans-serif",
                  }}
                >
                  CODE
                </h1>
                <h1
                  style={{
                    margin: 0,
                    fontSize: "clamp(56px,9vw,100px)",
                    fontWeight: 900, lineHeight: 0.95,
                    color: "#BFDBFE", letterSpacing: -4,
                    fontFamily: "sans-serif",
                  }}
                >
                  X
                </h1>
              </div>
            </div>
            <div
              style={{
                marginBottom: 14,
                background: "#6B0119",
                borderRadius: 4, padding: "5px 16px",
                fontFamily: "sans-serif", fontWeight: 700, fontSize: 12,
                color: "#fff", letterSpacing: 1,
              }}
            >
              Batch
            </div>
          </div>

          {/* description */}
          <p
            style={{
              color: "rgba(255,255,255,0.65)",
              fontSize: "clamp(14px,1.8vw,17px)",
              maxWidth: 660, lineHeight: 1.85, margin: "18px 0 0",
            }}
          >
            A skill-focused computer science batch at ASPIRE — designed to build computational abilities alongside world exposure. Using platforms like HackerRank, LeetCode, and Hack The Box, students gain real-world understanding of technology, logical thinking, problem-solving, and a practical approach to higher education.
          </p>

          {/* stat pills */}
          <div style={{ display: "flex", gap: 12, marginTop: 44, flexWrap: "wrap" }}>
            {[
              { label: "HackerRank", sub: "Integration" },
              { label: "LeetCode", sub: "Practice" },
              { label: "Hack The Box", sub: "Real-World" },
              { label: "AI-Supported", sub: "Learning" },
            ].map((s) => (
              <div
                key={s.label}
                style={{
                  background: "rgba(191,219,254,0.07)",
                  border: "1px solid rgba(191,219,254,0.18)",
                  borderRadius: 8, padding: "10px 18px",
                  textAlign: "center",
                }}
              >
                <div style={{ color: "#BFDBFE", fontWeight: 800, fontSize: 14, fontFamily: "sans-serif" }}>{s.label}</div>
                <div style={{ color: "rgba(255,255,255,0.4)", fontSize: 11, fontFamily: "sans-serif", marginTop: 2 }}>{s.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ ABOUT ══ */}
      <section style={{ background: "#fff", borderBottom: "1px solid #e8e4dc" }}>
        <div
          style={{
            maxWidth: 1100, margin: "0 auto", padding: "52px 32px",
            display: "grid", gridTemplateColumns: "1fr 1fr", gap: 56,
          }}
        >
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 14 }}>
              <div style={{ width: 32, height: 3, background: "#6B0119", borderRadius: 2 }} />
              <p style={{ margin: 0, color: "#6B0119", fontFamily: "sans-serif", fontWeight: 700, fontSize: 11, letterSpacing: 4, textTransform: "uppercase" }}>
                About CodeX
              </p>
            </div>
            <h2 style={{ fontSize: "clamp(22px,3vw,32px)", fontWeight: 800, color: "#0d0d0d", margin: "0 0 18px", lineHeight: 1.3 }}>
              Code. Build. <br />
              <span style={{ color: "#6B0119" }}>Think Different.</span>
            </h2>
            <p style={{ color: "#444", lineHeight: 1.85, fontSize: 15, margin: 0 }}>
              ASPIRE CODEX is a skill-focused computer & digital skills programme named as CODEX batch at ASPIRE. It builds computational abilities alongside world exposure, introducing students to coding, logical thinking, and practical tools used by professionals in the industry.
            </p>
          </div>

          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 14 }}>
              <div style={{ width: 32, height: 3, background: "#BFDBFE", borderRadius: 2 }} />
              <p style={{ margin: 0, color: "#3B82F6", fontFamily: "sans-serif", fontWeight: 700, fontSize: 11, letterSpacing: 4, textTransform: "uppercase" }}>
                What You'll Gain
              </p>
            </div>
            <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: 13 }}>
              {[
                "Hands-on experience with coding platforms used industry-wide",
                "Logical thinking and reverse engineering skills",
                "AI-assisted learning with personalised guided practice",
                "Real-world problem exposure through CTF and competitive coding",
                "Strong foundation for higher education in computer science",
              ].map((item) => (
                <li key={item} style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                  <span
                    style={{
                      marginTop: 4, flexShrink: 0,
                      width: 18, height: 18, borderRadius: 4,
                      background: "#0d0d0d",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      color: "#BFDBFE", fontSize: 10, fontWeight: 800,
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
          <h2 style={{ fontSize: "clamp(26px,4vw,40px)", fontWeight: 900, color: "#0d0d0d", margin: 0, lineHeight: 1.2 }}>
            Skills That{" "}
            <span
              style={{
                color: "transparent",
                WebkitTextStroke: "2px #6B0119",
              }}
            >
              Actually Matter
            </span>
          </h2>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))", gap: 22 }}>
          {codexFeatures.map((f, i) => (
            <div
              key={f.title}
              className="codex-card"
              style={{
                background: "#fff",
                border: "1px solid #e8e4dc",
                borderRadius: 12,
                padding: "30px 28px",
                position: "relative",
                overflow: "hidden",
                boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
              }}
            >
              <div
                style={{
                  position: "absolute", top: 0, left: 0, right: 0, height: 3,
                  background: i % 3 === 0
                    ? "linear-gradient(90deg,#6B0119,#c0003a)"
                    : i % 3 === 1
                    ? "linear-gradient(90deg,#0d0d0d,#333)"
                    : "linear-gradient(90deg,#93C5FD,#BFDBFE)",
                }}
              />
              <div
                style={{
                  width: 48, height: 48, borderRadius: 10,
                  background: i % 3 === 0
                    ? "rgba(107,1,25,0.07)"
                    : i % 3 === 1
                    ? "rgba(0,0,0,0.05)"
                    : "rgba(191,219,254,0.3)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: 24, marginBottom: 16,
                }}
              >
                {f.icon}
              </div>
              <h3 style={{ margin: "0 0 10px", fontSize: 17, fontWeight: 800, color: "#0d0d0d", lineHeight: 1.3 }}>
                {f.title}
              </h3>
              <p style={{ margin: 0, color: "#555", fontSize: 14, lineHeight: 1.8 }}>{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ══ MARATHON SECTION ══ */}
      <section
        style={{
          background: "#0d0d0d",
          padding: "72px 32px",
          position: "relative", overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute", inset: 0,
            backgroundImage: "radial-gradient(circle, rgba(191,219,254,0.05) 1px, transparent 1px)",
            backgroundSize: "28px 28px", pointerEvents: "none",
          }}
        />
        <div
          style={{
            position: "absolute", top: -60, right: -60,
            width: 280, height: 280, borderRadius: "50%",
            background: "radial-gradient(circle, rgba(107,1,25,0.3) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />

        <div style={{ maxWidth: 1100, margin: "0 auto", position: "relative" }}>
          <div
            style={{
              display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60, alignItems: "start",
            }}
          >
            {/* left: info */}
            <div>
              <div
                style={{
                  display: "inline-flex", alignItems: "center", gap: 8,
                  background: "rgba(107,1,25,0.25)", border: "1px solid rgba(192,0,58,0.4)",
                  borderRadius: 4, padding: "4px 14px", marginBottom: 20,
                }}
              >
                <span style={{ color: "#fca5a5", fontSize: 11, fontWeight: 700, letterSpacing: 3, fontFamily: "sans-serif", textTransform: "uppercase" }}>
                  🏃 Intensive Revision
                </span>
              </div>
              <div style={{ display: "flex", alignItems: "flex-end", gap: 10, marginBottom: 16 }}>
                <div>
                  <p style={{ margin: 0, color: "rgba(255,255,255,0.3)", fontSize: 11, letterSpacing: 5, textTransform: "uppercase", fontFamily: "sans-serif" }}>ASPIRE</p>
                  <h2
                    style={{
                      margin: 0, color: "#fff",
                      fontSize: "clamp(32px,5vw,56px)",
                      fontWeight: 900, lineHeight: 1, letterSpacing: -2,
                      fontFamily: "sans-serif",
                    }}
                  >
                    MARA<span style={{ color: "#BFDBFE" }}>THON</span>
                  </h2>
                </div>
              </div>
              <p style={{ color: "rgba(255,255,255,0.6)", fontSize: 15, lineHeight: 1.85, margin: "0 0 24px" }}>
                ASPIRE MARATHON is a focused revision programme designed to improve speed, accuracy, and exam confidence — the final push before your exams.
              </p>
              <div
                style={{
                  background: "rgba(191,219,254,0.07)",
                  border: "1px solid rgba(191,219,254,0.15)",
                  borderRadius: 8, padding: "16px 20px",
                  display: "inline-block",
                }}
              >
                <p style={{ margin: 0, color: "#BFDBFE", fontFamily: "sans-serif", fontWeight: 700, fontSize: 13 }}>
                  "Speed. Accuracy. Confidence."
                </p>
              </div>
            </div>

            {/* right: feature grid */}
            <div>
              <p style={{ color: "rgba(255,255,255,0.4)", fontFamily: "sans-serif", fontWeight: 700, fontSize: 11, letterSpacing: 3, textTransform: "uppercase", marginBottom: 20 }}>
                Key Features
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 10,  }}>
                {marathonFeatures.map((f) => (
                  <div
                    key={f.text}
                    className="marathon-item "
                    style={{
                      display: "flex", gap: 14, alignItems: "center",
                      background: "rgba(255,255,255,0.04)",
                      border: "1px solid rgba(255,255,255,0.08)",
                      borderRadius: 8, padding: "12px 18px",
                      cursor: "default",
                      
                    }}
                  >
                    <span style={{ fontSize: 18, flexShrink: 0 }}>{f.icon}</span>
                    <span style={{ color: "#bfdbfa", fontSize: 14, lineHeight: 1.5 }}>{f.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ PLATFORMS ROW ══ */}
      <section style={{ background: "#fff", borderTop: "1px solid #e8e4dc", borderBottom: "1px solid #e8e4dc" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", padding: "44px 32px" }}>
          <p style={{ textAlign: "center", color: "#888", fontFamily: "sans-serif", fontWeight: 700, fontSize: 11, letterSpacing: 4, textTransform: "uppercase", marginBottom: 28 }}>
            Platforms You'll Train On
          </p>
          <div style={{ display: "flex", justifyContent: "center", gap: 16, flexWrap: "wrap" }}>
            {[
              { name: "HackerRank", color: "#2EC866", bg: "rgba(46,200,102,0.08)", icon: "⌨️" },
              { name: "LeetCode", color: "#FFA116", bg: "rgba(255,161,22,0.08)", icon: "🧮" },
              { name: "Hack The Box", color: "#9FEF00", bg: "rgba(159,239,0,0.08)", icon: "📦" },
            ].map((p) => (
              <div
                key={p.name}
                style={{
                  display: "flex", alignItems: "center", gap: 12,
                  background: p.bg,
                  border: `1px solid ${p.color}30`,
                  borderRadius: 10, padding: "14px 28px",
                  minWidth: 200,
                }}
              >
                <span style={{ fontSize: 24 }}>{p.icon}</span>
                <div>
                  <div style={{ fontWeight: 800, fontSize: 15, color: "#0d0d0d", fontFamily: "sans-serif" }}>{p.name}</div>
                  <div style={{ fontSize: 12, color: p.color, fontFamily: "sans-serif", fontWeight: 600 }}>Integrated Platform</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ CTA ══ */}
      <section style={{ padding: "72px 32px", textAlign: "center", background: "#F8F7F4" }}>
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
              Start Coding
            </span>
          </div>
          <h2 style={{ fontSize: "clamp(26px,4vw,38px)", fontWeight: 900, color: "#0d0d0d", margin: "0 0 16px", lineHeight: 1.2 }}>
            Your First Line of Code <br />
            <span style={{ color: "#6B0119" }}>Starts Here.</span>
          </h2>
          <p style={{ color: "#555", fontSize: 15, lineHeight: 1.8, marginBottom: 36 }}>
            Hands-on platforms, AI-assisted learning, and real-world coding challenges. ASPIRE CODEX builds the skills that define the next generation of tech thinkers.
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
                transition: "all 0.2s",
              }}
            >
              Enrol Now
            </button>
            <button
              style={{
                background: "#0d0d0d", color: "#BFDBFE",
                border: "2px solid #0d0d0d", borderRadius: 6,
                padding: "14px 36px", fontSize: 15, fontWeight: 700,
                fontFamily: "sans-serif", cursor: "pointer", letterSpacing: 0.5,
              }}
            >
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* bottom bar */}
      <div style={{ height: 4, background: "linear-gradient(90deg,#0d0d0d,#6B0119,#BFDBFE,#6B0119,#0d0d0d)" }} />
    </main>
  );
}