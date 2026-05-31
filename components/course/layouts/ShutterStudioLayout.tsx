import {
  FaCamera, FaCameraRetro, FaFilm, FaVideo,
  FaImages, FaPhotoFilm, FaCircleCheck, FaMicroscope,
  FaPalette, FaPen, FaUsers, FaLightbulb,
  FaMobileScreen, FaAward, FaHandshake, FaBullhorn,
  FaGraduationCap,
} from "react-icons/fa6";

const CRIMSON      = "#6B0119";
const CRIMSON_DARK = "#1a0006";
const CRIMSON_MID  = "#3a000d";
const PINK_ACCENT  = "#ffb3c1";
const PALE_BG      = "#fdf5f6";
const BORDER_COLOR = "#f0d0d5";

/* ─── DATA ─────────────────────────────────────────── */

const whatYouDo = [
  {
    Icon: FaCamera,
    title: "Photography",
    desc: "Capture events, campus life, and academic activities with professional guidance on composition and technique.",
  },
  {
    Icon: FaVideo,
    title: "Videography",
    desc: "Plan, shoot, and produce video content covering ASPIRE events, programmes, and student stories.",
  },
  {
    Icon: FaFilm,
    title: "Editing & Post-Production",
    desc: "Learn photo and video editing tools to produce polished, publish-ready digital content.",
  },
  {
    Icon: FaPhotoFilm,
    title: "Digital Content Creation",
    desc: "Design graphics, reels, and social media content to represent ASPIRE's brand and student voice.",
  },
  {
    Icon: FaBullhorn,
    title: "Event Coverage",
    desc: "Officially cover ASPIRE events, competitions, and academic functions as part of the media team.",
  },
  {
    Icon: FaMobileScreen,
    title: "Real-Time Projects",
    desc: "Work on live projects that are published and used by ASPIRE — real impact, real experience.",
  },
];

const keyFeatures = [
  "Official student media and creative team of ASPIRE",
  "Covers events, programmes, and academic activities",
  "Involvement in photography, videography, and editing",
  "Encourages teamwork, creativity, and responsibility",
  "Opportunity to work on real-time projects",
  "Platform to showcase and develop creative talent",
];

const whatYouGain = [
  { Icon: FaGraduationCap, title: "Practical Skills",   desc: "Hands-on experience in photography, videography, and editing beyond the classroom." },
  { Icon: FaAward,         title: "Portfolio Building", desc: "Build a real portfolio of published work to showcase your creativity and skills." },
  { Icon: FaUsers,         title: "Teamwork",           desc: "Collaborate with fellow students, learning coordination, communication, and responsibility." },
  { Icon: FaLightbulb,     title: "Creative Thinking",  desc: "Develop a creative eye and storytelling instinct through every project you work on." },
  { Icon: FaHandshake,     title: "Responsibility",     desc: "Be trusted with official media duties, building discipline and professional work ethics." },
  { Icon: FaPalette,       title: "Design Sense",       desc: "Understand visual design principles through real content creation for ASPIRE's platforms." },
];

/* ─── COMPONENTS ────────────────────────────────────── */
type FeatureCardProps = {
  Icon: React.ElementType;
  title: string;
  desc: string;
  pale: boolean;
};

function FeatureCard({
  Icon,
  title,
  desc,
  pale,
}: FeatureCardProps) {
  return (
    <div style={{
      background: pale ? PALE_BG : "#fff",
      border: `1px solid ${BORDER_COLOR}`,
      borderRadius: 16,
      padding: 24,
      position: "relative",
      overflow: "hidden",
    }}>
      {/* top accent bar */}
      <div style={{
        position: "absolute", top: 0, left: 0, right: 0, height: 3,
        background: `linear-gradient(90deg, ${CRIMSON}, #c0395a)`,
      }} />
      <div style={{
        width: 46, height: 46, background: PALE_BG,
        borderRadius: 12, display: "flex", alignItems: "center",
        justifyContent: "center", marginBottom: 14,
        border: `1px solid ${BORDER_COLOR}`,
      }}>
        <Icon size={20} color={CRIMSON} />
      </div>
      <p style={{ fontSize: 15, fontWeight: 700, color: "#1a0006", marginBottom: 6 }}>{title}</p>
      <p style={{ fontSize: 13, color: "#555", lineHeight: 1.65 }}>{desc}</p>
    </div>
  );
}

/* ─── PAGE ──────────────────────────────────────────── */

export default function ShutterStudioLayout() {
  return (
    <div style={{ fontFamily: "'Segoe UI', sans-serif", background: "#fff", minHeight: "100vh" }}>

      {/* ══ HERO ══ */}
      <header style={{
        background: `linear-gradient(135deg, ${CRIMSON_DARK} 0%, ${CRIMSON} 55%, #8c0121 100%)`,
        padding: "56px 24px 52px",
        position: "relative",
        overflow: "hidden",
      }}>
        {/* decorative circles */}
        <div style={{ position: "absolute", top: -80, right: -80, width: 320, height: 320, borderRadius: "50%", background: "rgba(255,255,255,0.05)" }} />
        <div style={{ position: "absolute", bottom: -100, left: -60, width: 260, height: 260, borderRadius: "50%", background: "rgba(255,255,255,0.04)" }} />

        <div style={{ maxWidth: 960, margin: "0 auto", position: "relative", zIndex: 1 }}>

          {/* Powered by Accuratus Scientia */}
         

          {/* Eyebrow */}
          <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 10 }}>
            <FaCameraRetro size={18} color={PINK_ACCENT} />
            <span style={{ fontSize: 12, color: PINK_ACCENT, textTransform: "uppercase", letterSpacing: 3, fontWeight: 600 }}>
              Official Student Media &amp; Digital Skills Programme
            </span>
          </div>

          {/* Main heading */}
          <h1 style={{
            fontSize: "clamp(38px, 7vw, 72px)", fontWeight: 900, color: "#fff",
            lineHeight: 0.95, letterSpacing: -2, margin: "0 0 16px",
          }}>
            ASPIRE<br />
            <span style={{ color: PINK_ACCENT }}>SHUTTER</span><br />
            STUDIO
          </h1>

          <p style={{ color: "rgba(255,255,255,0.68)", fontSize: 15, maxWidth: 520, lineHeight: 1.7, marginBottom: 28 }}>
            The official student media team at ASPIRE — a platform for students passionate about
            photography, videography, editing, and digital content creation to contribute, create, and grow.
          </p>

          {/* Pills */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
            {[
              { label: "Photography",  Icon: FaCamera },
              { label: "Videography",  Icon: FaVideo },
              { label: "Editing",      Icon: FaFilm },
              { label: "Digital Media",Icon: FaPhotoFilm },
              { label: "Live Projects",Icon: FaMobileScreen },
            ].map(({ label, Icon }) => (
              <span key={label} style={{
                display: "inline-flex", alignItems: "center", gap: 7,
                background: "rgba(255,255,255,0.12)", border: "1px solid rgba(255,255,255,0.2)",
                color: "#fff", fontSize: 13, fontWeight: 500, padding: "7px 16px", borderRadius: 999,
              }}>
                <Icon size={12} /> {label}
              </span>
            ))}
          </div>
        </div>
      </header>

      {/* ══ ABOUT + KEY FEATURES ══ */}
      <section style={{ padding: "64px 24px", background: "#fff" }}>
        <div style={{ maxWidth: 960, margin: "0 auto", display: "flex", gap: 48, flexWrap: "wrap" }}>

          {/* Left */}
          <div style={{ width: 200, flexShrink: 0, display: "flex", flexDirection: "column", gap: 10 }}>
            <div style={{
              width: 76, height: 76, background: CRIMSON, borderRadius: 18,
              display: "flex", alignItems: "center", justifyContent: "center",
              boxShadow: "0 4px 16px rgba(107,1,25,0.35)",
            }}>
              <FaCamera size={32} color="#fff" />
            </div>
            <h2 style={{ fontSize: 20, fontWeight: 800, color: CRIMSON, lineHeight: 1.2, margin: 0 }}>
              Aspire Shutter Studio
            </h2>
            <div style={{ width: 52, height: 4, background: CRIMSON, borderRadius: 4 }} />
          </div>

          {/* Right */}
          <div style={{ flex: 1, minWidth: 260 }}>
            <p style={{
              fontSize: 14, color: "#374151", lineHeight: 1.75,
              borderLeft: `4px solid ${CRIMSON}`, paddingLeft: 14, marginBottom: 22,
            }}>
              Aspire Shutter Studio is the official student media team at ASPIRE. It provides a platform
              for students with an interest in photography, videography, editing and digital content
              creation to actively contribute and showcase their skills.
            </p>
            <p style={{ fontSize: 10, fontWeight: 700, textTransform: "uppercase", letterSpacing: 3, color: CRIMSON, marginBottom: 14 }}>
              Key Features
            </p>
            <ul style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, listStyle: "none", padding: 0, margin: 0 }}>
              {keyFeatures.map((f, i) => (
                <li key={i} style={{ display: "flex", alignItems: "flex-start", gap: 8, fontSize: 13, color: "#374151", lineHeight: 1.5 }}>
                  <FaCircleCheck size={14} color={CRIMSON} style={{ marginTop: 2, flexShrink: 0 }} />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ══ WHAT YOU DO ══ */}
      <section style={{ padding: "64px 24px", background: PALE_BG }}>
        <div style={{ maxWidth: 960, margin: "0 auto" }}>
          <p style={{ fontSize: 10, fontWeight: 700, textTransform: "uppercase", letterSpacing: 3, color: CRIMSON, marginBottom: 8 }}>
            What Members Do
          </p>
          <h2 style={{ fontSize: "clamp(26px,4vw,36px)", fontWeight: 900, color: "#1a0006", marginBottom: 12 }}>
            <span style={{ color: CRIMSON }}>Create.</span> Cover. Contribute.
          </h2>
          <div style={{ width: 52, height: 4, background: CRIMSON, borderRadius: 4, marginBottom: 36 }} />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 20 }}>
            {whatYouDo.map(({ Icon, title, desc }, i) => (
              <FeatureCard key={i} Icon={Icon} title={title} desc={desc} pale={false} />
            ))}
          </div>
        </div>
      </section>

      {/* ══ WHAT YOU GAIN ══ */}
      <section style={{ padding: "64px 24px", background: "#fff" }}>
        <div style={{ maxWidth: 960, margin: "0 auto" }}>
          <p style={{ fontSize: 10, fontWeight: 700, textTransform: "uppercase", letterSpacing: 3, color: CRIMSON, marginBottom: 8 }}>
            Skills &amp; Growth
          </p>
          <h2 style={{ fontSize: "clamp(26px,4vw,36px)", fontWeight: 900, color: "#1a0006", marginBottom: 12 }}>
            What You <span style={{ color: CRIMSON }}>Gain</span>
          </h2>
          <div style={{ width: 52, height: 4, background: CRIMSON, borderRadius: 4, marginBottom: 36 }} />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 20 }}>
            {whatYouGain.map(({ Icon, title, desc }, i) => (
              <FeatureCard key={i} Icon={Icon} title={title} desc={desc} pale={true} />
            ))}
          </div>
        </div>
      </section>

      {/* ══ DARK CTA BANNER ══ */}
      <section style={{ padding: "0 24px 64px", background: "#fff" }}>
        <div style={{ maxWidth: 960, margin: "0 auto" }}>
          <div style={{
            background: `linear-gradient(135deg, ${CRIMSON_DARK} 0%, ${CRIMSON_MID} 50%, ${CRIMSON} 100%)`,
            borderRadius: 20, padding: "48px 40px",
            position: "relative", overflow: "hidden",
            display: "flex", alignItems: "center", gap: 32, flexWrap: "wrap",
          }}>
            <div style={{ position: "absolute", top: -60, right: -60, width: 240, height: 240, borderRadius: "50%", background: "rgba(255,255,255,0.05)" }} />
            <div style={{
              width: 80, height: 80, background: "rgba(255,255,255,0.15)",
              borderRadius: 20, display: "flex", alignItems: "center", justifyContent: "center",
              border: "1px solid rgba(255,255,255,0.2)", flexShrink: 0,
            }}>
              <FaCameraRetro size={36} color={PINK_ACCENT} />
            </div>
            <div style={{ flex: 1, minWidth: 220 }}>
              <p style={{ fontSize: 10, color: "rgba(255,255,255,0.5)", textTransform: "uppercase", letterSpacing: 3, fontWeight: 600, margin: "0 0 6px" }}>
                Join the Team
              </p>
              <h3 style={{ fontSize: "clamp(20px,3vw,28px)", fontWeight: 900, color: "#fff", margin: "0 0 10px", lineHeight: 1.1 }}>
                Be Part of <span style={{ color: PINK_ACCENT }}>Shutter Studio</span>
              </h3>
              <p style={{ fontSize: 14, color: "rgba(255,255,255,0.68)", lineHeight: 1.7, margin: 0, maxWidth: 480 }}>
                If you love capturing moments, telling stories through a lens, or creating digital content —
                Shutter Studio is your space. Join ASPIRE's official media team and turn your passion into real-world skills.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ══ FOOTER ══ */}
     

    </div>
  );
}