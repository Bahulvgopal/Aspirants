import {
  FaCircleCheck, FaWifi, FaMicroscope, FaCamera,
  FaBookOpen, FaLayerGroup, FaMap, FaNoteSticky,
  FaClipboardQuestion, FaPencil, FaComments, FaTrophy,
} from "react-icons/fa6";

const CRIMSON      = "#6B0119";
const CRIMSON_DARK = "#1a0006";
const CRIMSON_MID  = "#3a000d";
const PINK_ACCENT  = "#ffb3c1";
const PALE_BG      = "#fdf5f6";

const wavesFeatures = [
  { Icon: FaBookOpen,         title: "Complete Study Materials",    desc: "Complete +1 & +2 study materials in digital format for Physics and Chemistry" },
  { Icon: FaLayerGroup,       title: "Flashcards for Quick Revision", desc: "Flashcards for fast recall and memory reinforcement across all subjects" },
  { Icon: FaMap,              title: "Concept Maps & Mind Maps",    desc: "Concept maps and mind maps for better understanding and visual learning" },
  { Icon: FaNoteSticky,       title: "Short Notes",                 desc: "Chapter-wise short notes for quick revision before exams" },
  { Icon: FaClipboardQuestion,title: "Previous Year Questions",     desc: "Previous year questions for exam-oriented practice with detailed solutions" },
  { Icon: FaPencil,           title: "NCERT Practice Questions",    desc: "NCERT-based highlighted summaries and additional practice questions with worked examples" },
  { Icon: FaComments,         title: "Classroom Discussions",       desc: "Classroom-supported question and answer discussions for concept clarity" },
  { Icon: FaTrophy,           title: "Competitive Level Questions", desc: "Competitive level questions for advanced practice and higher-order thinking" },
];

const shutterFeatures = [
  "Official student media and creative team of ASPIRE",
  "Covers events, programmes, and academic activities",
  "Involvement in photography, videography, and editing",
  "Encourages teamwork, creativity, and responsibility",
  "Opportunity to work on real-time projects",
  "Platform to showcase and develop creative talent",
];

const allKfItems = wavesFeatures.map(f => `${f.title} — ${f.desc}`);

export default function WavesSpacePage() {
  return (
    <div style={{ fontFamily: "'Segoe UI', sans-serif", background: "#fff", minHeight: "100vh" }}>

      {/* ── HERO ── */}
      <header style={{
        background: `linear-gradient(135deg, ${CRIMSON_DARK} 0%, ${CRIMSON} 55%, #8c0121 100%)`,
        padding: "56px 24px 52px", position: "relative", overflow: "hidden"
      }}>
        <div style={{ maxWidth: 960, margin: "0 auto", position: "relative", zIndex: 1 }}>

          {/* Powered by */}
          

          <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 10 }}>
            <FaWifi size={18} color={PINK_ACCENT} />
            <span style={{ fontSize: 12, color: PINK_ACCENT, textTransform: "uppercase", letterSpacing: 3, fontWeight: 600 }}>Digital Learning Platform</span>
          </div>

          <h1 style={{ fontSize: "clamp(46px,8vw,78px)", fontWeight: 900, color: "#fff", lineHeight: 0.93, letterSpacing: -2, margin: "0 0 16px" }}>
            WAVES<br /><span style={{ color: PINK_ACCENT }}>SPACE</span>
          </h1>

          <p style={{ color: "rgba(255,255,255,0.68)", fontSize: 15, maxWidth: 520, lineHeight: 1.7, marginBottom: 28 }}>
            ASPIRE's digital learning library — designed to support students throughout +1 and +2 academic journey with smart study tools, resources, and media.
          </p>

          <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
            {["Study Materials", "Flashcards", "Mind Maps", "NCERT Practice", "Shutter Studio"].map(label => (
              <span key={label} style={{
                display: "inline-flex", alignItems: "center", gap: 6,
                background: "rgba(255,255,255,0.12)", border: "1px solid rgba(255,255,255,0.2)",
                color: "#fff", fontSize: 13, fontWeight: 500, padding: "7px 16px", borderRadius: 999
              }}>
                {label}
              </span>
            ))}
          </div>
        </div>
      </header>

      {/* ── WAVES SPACE: TWO-COL ── */}
      <section style={{ padding: "64px 24px", background: "#fff" }}>
        <div style={{ maxWidth: 960, margin: "0 auto", display: "flex", gap: 48, flexWrap: "wrap" }}>
          <div style={{ width: 200, flexShrink: 0, display: "flex", flexDirection: "column", gap: 10 }}>
            <div style={{ width: 76, height: 76, background: CRIMSON, borderRadius: 18, display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 4px 16px rgba(107,1,25,0.35)" }}>
              <FaWifi size={32} color="#fff" />
            </div>
            <h2 style={{ fontSize: 20, fontWeight: 800, color: CRIMSON, lineHeight: 1.2 }}>Waves Space</h2>
            <div style={{ width: 52, height: 4, background: CRIMSON, borderRadius: 4 }} />
          </div>

          <div style={{ flex: 1, minWidth: 260 }}>
            <p style={{ fontSize: 14, color: "#374151", lineHeight: 1.75, borderLeft: `4px solid ${CRIMSON}`, paddingLeft: 14, marginBottom: 22 }}>
              Waves Space is ASPIRE's digital learning platform — a comprehensive library designed to support students throughout their +1 and +2 academic journey with curated study resources, revision tools, and exam-oriented practice materials.
            </p>
            <p style={{ fontSize: 10, fontWeight: 700, textTransform: "uppercase", letterSpacing: 3, color: CRIMSON, marginBottom: 14 }}>Key Features</p>
            <ul style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, listStyle: "none", padding: 0 }}>
              {allKfItems.map((f, i) => (
                <li key={i} style={{ display: "flex", alignItems: "flex-start", gap: 8, fontSize: 13, color: "#374151", lineHeight: 1.5 }}>
                  <FaCircleCheck size={14} color={CRIMSON} style={{ marginTop: 2, flexShrink: 0 }} />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── FEATURE CARDS ── */}
      <section style={{ padding: "64px 24px", background: PALE_BG }}>
        <div style={{ maxWidth: 960, margin: "0 auto" }}>
          <p style={{ fontSize: 10, fontWeight: 700, textTransform: "uppercase", letterSpacing: 3, color: CRIMSON, marginBottom: 8 }}>What You Get</p>
          <h2 style={{ fontSize: "clamp(26px,4vw,36px)", fontWeight: 900, color: "#1a0006", marginBottom: 12 }}>
            <span style={{ color: CRIMSON }}>Waves Space</span> Resources
          </h2>
          <div style={{ width: 52, height: 4, background: CRIMSON, borderRadius: 4, marginBottom: 32 }} />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 20 }}>
            {wavesFeatures.map(({ Icon, title, desc }, i) => (
              <div key={i} style={{
                background: "#fff", border: "1px solid #f0d0d5", borderRadius: 16, padding: 24,
                position: "relative", overflow: "hidden"
              }}>
                <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 3, background: `linear-gradient(90deg, ${CRIMSON}, #c0395a)` }} />
                <div style={{ width: 46, height: 46, background: PALE_BG, borderRadius: 12, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 14 }}>
                  <Icon size={20} color={CRIMSON} />
                </div>
                <p style={{ fontSize: 15, fontWeight: 700, color: "#1a0006", marginBottom: 6 }}>{title}</p>
                <p style={{ fontSize: 13, color: "#555", lineHeight: 1.6 }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SHUTTER STUDIO ── */}
      <section style={{ padding: "64px 24px", background: "#fff" }}>
        <div style={{ maxWidth: 960, margin: "0 auto" }}>
          <p style={{ fontSize: 10, fontWeight: 700, textTransform: "uppercase", letterSpacing: 3, color: CRIMSON, marginBottom: 8 }}>Student Media Programme</p>
          <h2 style={{ fontSize: "clamp(26px,4vw,36px)", fontWeight: 900, color: "#1a0006", marginBottom: 12 }}>
            Aspire <span style={{ color: CRIMSON }}>Shutter Studio</span>
          </h2>
          <div style={{ width: 52, height: 4, background: CRIMSON, borderRadius: 4, marginBottom: 32 }} />

          <div style={{
            background: `linear-gradient(135deg, ${CRIMSON_DARK} 0%, ${CRIMSON_MID} 50%, ${CRIMSON} 100%)`,
            borderRadius: 20, padding: "48px 40px", color: "#fff", position: "relative", overflow: "hidden"
          }}>
            <div style={{ position: "absolute", top: -60, right: -60, width: 240, height: 240, borderRadius: "50%", background: "rgba(255,255,255,0.05)" }} />
            <div style={{ display: "flex", alignItems: "flex-start", gap: 20, flexWrap: "wrap", marginBottom: 20 }}>
              <div style={{
                width: 72, height: 72, background: "rgba(255,255,255,0.15)", borderRadius: 16,
                display: "flex", alignItems: "center", justifyContent: "center",
                border: "1px solid rgba(255,255,255,0.2)", flexShrink: 0
              }}>
                <FaCamera size={30} color={PINK_ACCENT} />
              </div>
              <div>
                <p style={{ fontSize: 10, color: "rgba(255,255,255,0.5)", textTransform: "uppercase", letterSpacing: 3, fontWeight: 600, marginBottom: 4 }}>Official Student Media & Digital Skills Programme</p>
                <h3 style={{ fontSize: "clamp(22px,4vw,30px)", fontWeight: 900, color: "#fff", lineHeight: 1 }}>
                  Aspire <span style={{ color: PINK_ACCENT }}>Shutter Studio</span>
                </h3>
              </div>
            </div>
            <p style={{ fontSize: 14, color: "rgba(255,255,255,0.7)", lineHeight: 1.75, marginBottom: 28, maxWidth: 640 }}>
              Aspire Shutter Studio is the official student media team at ASPIRE. It provides a platform for students with an interest in photography, videography, editing and digital content creation to actively contribute and showcase their skills.
            </p>
            <p style={{ fontSize: 10, fontWeight: 700, textTransform: "uppercase", letterSpacing: 3, color: PINK_ACCENT, marginBottom: 16 }}>Key Features</p>
            <ul style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, listStyle: "none", padding: 0 }}>
              {shutterFeatures.map((f, i) => (
                <li key={i} style={{ display: "flex", alignItems: "flex-start", gap: 8, fontSize: 13, color: "rgba(255,255,255,0.82)", lineHeight: 1.5 }}>
                  <FaCircleCheck size={14} color={PINK_ACCENT} style={{ marginTop: 2, flexShrink: 0 }} />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      

    </div>
  );
}