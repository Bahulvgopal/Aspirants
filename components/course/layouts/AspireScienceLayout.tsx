import { FaCheckCircle, FaAtom, FaFlask, FaDna, FaMicroscope } from "react-icons/fa";
import { FaSquareRootVariable } from "react-icons/fa6";
import { GiAtom } from "react-icons/gi";

const GREEN_DARK   = "#0a2e14";
const GREEN_MID    = "#145c28";
const GREEN_LIGHT  = "#1e7a38";
const GREEN_PALE   = "#f3fbf5";
const GREEN_ACCENT = "#86efac";

const subjects = [
  {
    id: "physics",
    title: "Accuratus Physics",
    icon: <FaAtom size={34} color="#fff" />,
    description:
      "The Physics Lab at ASPIRE supports classroom learning through structured practical sessions, helping students prepare effectively for +2 physics lab examinations and strengthen their conceptual understanding.",
    features: [
      "Dedicated training for +2 physics lab examinations",
      "Chapter-based experiments and practical sessions",
      "Focus on measurements, accuracy, and application",
      "Guided support for record work and viva preparation",
      "Hands-on experience with standard lab apparatus",
      "Safe and well-organized lab environment",
      "Strengthens understanding of core physics concepts",
    ],
  },
  {
    id: "chemistry",
    title: "Accuratus Chemistry",
    icon: <FaFlask size={32} color="#fff" />,
    description:
      "The Chemistry Lab at ASPIRE supports classroom learning through structured practical sessions, helping students prepare effectively for +2 lab examinations and improve conceptual understanding.",
    features: [
      "Dedicated training for +2 chemistry lab examinations",
      "Chapter-based practical sessions and presentations",
      "Hands-on experiments aligned with syllabus",
      "Guided support for record work and viva preparation",
      "Safe and well-organized lab environment",
    ],
  },
  {
    id: "biology",
    title: "Accuratus Biology",
    icon: <FaDna size={32} color="#fff" />,
    description:
      "Zoology and Botany Labs at ASPIRE provide structured practical training to support +2 biology learning. These labs help students strengthen their understanding of both animal and plant sciences through guided and hands-on sessions. Both labs are supported by Accuratus Scientia, Attingal, ensuring quality standards and systematic training.",
    features: [
      "Dedicated training for +2 zoology and botany lab examinations",
      "Specimen study, herbarium preparation, and practical observation",
      "Microscope-based learning and identification skills",
      "Chapter-based practical sessions",
      "Guided support for concept clarity, accuracy, and viva preparation",
      "Focus on problem-solving and logical reasoning",
      "Safe and well-organized lab environment",
      "Backed by Accuratus Scientia, Attingal",
    ],
  },
  {
    id: "mathematics",
    title: "Accuratus Mathematics",
    icon: <FaSquareRootVariable size={32} color="#fff" />,
    description:
      "The Maths Lab at ASPIRE supports mathematics learning through visual and interactive methods, helping students prepare effectively for +2 lab examinations.",
    features: [
      "Concept visualization using digital tools and graphs",
      "Interactive learning for better understanding of mathematical concepts",
      "Focus on problem-solving and logical reasoning",
      "Chapter-based practice and application sessions",
      "Support for improving speed and accuracy",
      "Guided sessions for step-by-step solution methods",
      "Strengthens analytical and computational skills",
    ],
  },
];
type Subject = {
  id: string;
  title: string;
  icon: React.ReactNode;
  description: string;
  features: string[];
};
function SubjectCard({
  subject,
  index,
}: {
  subject: Subject;
  index: number;
}) {
  const bg = index % 2 === 0 ? "#fff" : GREEN_PALE;
  return (
    <section style={{ background: bg, padding: "64px 24px", borderBottom: "1px solid #e0f0e6" }}>
      <div style={{ maxWidth: 960, margin: "0 auto", display: "flex", gap: 48, flexWrap: "wrap" }}>
        {/* Left */}
        <div style={{ width: 200, display: "flex", flexDirection: "column", gap: 10, flexShrink: 0 }}>
          <div style={{
            width: 76, height: 76, background: GREEN_MID,
            borderRadius: 18, display: "flex", alignItems: "center", justifyContent: "center",
            boxShadow: "0 4px 16px rgba(20,92,40,0.3)"
          }}>
            {subject.icon}
          </div>
          <h2 style={{ fontSize: 20, fontWeight: 800, color: GREEN_MID, lineHeight: 1.2, margin: 0 }}>
            {subject.title}
          </h2>
          <div style={{ width: 52, height: 4, background: GREEN_LIGHT, borderRadius: 4 }} />
        </div>

        {/* Right */}
        <div style={{ flex: 1, minWidth: 280 }}>
          <p style={{
            fontSize: 14, color: "#374151", lineHeight: 1.75,
            borderLeft: `4px solid ${GREEN_LIGHT}`, paddingLeft: 14, marginBottom: 22
          }}>
            {subject.description}
          </p>
          <p style={{
            fontSize: 10, fontWeight: 700, textTransform: "uppercase",
            letterSpacing: 3, color: GREEN_MID, marginBottom: 14
          }}>
            Key Features
          </p>
          <ul style={{
            display: "grid", gridTemplateColumns: "1fr 1fr",
            gap: 10, listStyle: "none", padding: 0, margin: 0
          }}>
            {subject.features.map((f, i) => (
              <li key={i} style={{ display: "flex", alignItems: "flex-start", gap: 8, fontSize: 13, color: "#374151", lineHeight: 1.5 }}>
                <FaCheckCircle size={14} color={GREEN_LIGHT} style={{ marginTop: 2, flexShrink: 0 }} />
                <span>{f}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default function AspireSciencePage() {
  return (
    <div style={{ fontFamily: "'Segoe UI', sans-serif", background: "#fff", minHeight: "100vh" }}>
      {/* HERO */}
      <header style={{
        background: `linear-gradient(135deg, ${GREEN_DARK} 0%, ${GREEN_MID} 55%, ${GREEN_LIGHT} 100%)`,
        padding: "56px 24px 52px", position: "relative", overflow: "hidden"
      }}>
        <div style={{ maxWidth: 960, margin: "0 auto", position: "relative", zIndex: 1 }}>
          {/* Powered by badge */}
          <div style={{
            display: "inline-flex", alignItems: "center", gap: 14,
            background: "rgba(255,255,255,0.12)", border: "1px solid rgba(255,255,255,0.25)",
            borderRadius: 18, padding: "14px 22px", marginBottom: 32
          }}>
            <div style={{
              width: 52, height: 52, background: "#fff", borderRadius: "50%",
              display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0
            }}>
              <FaMicroscope size={26} color={GREEN_MID} />
            </div>
            <div>
              <p style={{ fontSize: 10, color: "rgba(255,255,255,0.55)", textTransform: "uppercase", letterSpacing: 3, fontWeight: 600, margin: 0 }}>Powered by</p>
              <p style={{ fontSize: 22, fontWeight: 800, color: "#fff", lineHeight: 1, margin: "3px 0" }}>Accuratus Scientia</p>
              <p style={{ fontSize: 9, color: "rgba(255,255,255,0.4)", textTransform: "uppercase", letterSpacing: 2, margin: 0 }}>Natural Product Research & Development Pvt. Ltd.</p>
            </div>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 10 }}>
            <GiAtom size={20} color={GREEN_ACCENT} />
            <span style={{ fontSize: 12, color: GREEN_ACCENT, textTransform: "uppercase", letterSpacing: 3, fontWeight: 600 }}>Science Division</span>
          </div>

          <h1 style={{ fontSize: "clamp(48px,8vw,80px)", fontWeight: 900, color: "#fff", lineHeight: 0.95, letterSpacing: -2, margin: "0 0 16px" }}>
            ASPIRE<br /><span style={{ color: GREEN_ACCENT }}>SCIENCE</span>
          </h1>

          <p style={{ color: "rgba(255,255,255,0.68)", fontSize: 15, maxWidth: 520, lineHeight: 1.7, marginBottom: 28 }}>
            World-class practical science education for +2 students — powered by Accuratus Scientia's cutting-edge lab infrastructure and expert mentorship.
          </p>

          <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
            {[
              { label: "Physics", icon: <FaAtom size={12} /> },
              { label: "Chemistry", icon: <FaFlask size={12} /> },
              { label: "Biology", icon: <FaDna size={12} /> },
              { label: "Mathematics", icon: <FaSquareRootVariable size={12} /> },
            ].map(s => (
              <span key={s.label} style={{
                display: "inline-flex", alignItems: "center", gap: 6,
                background: "rgba(255,255,255,0.12)", border: "1px solid rgba(255,255,255,0.2)",
                color: "#fff", fontSize: 13, fontWeight: 500, padding: "7px 16px", borderRadius: 999
              }}>
                {s.icon} {s.label}
              </span>
            ))}
          </div>
        </div>
      </header>

      {subjects.map((s, i) => <SubjectCard key={s.id} subject={s} index={i} />)}

      {/* FOOTER */}
      <footer style={{ background: GREEN_DARK, padding: "48px 24px" }}>
        <div style={{ maxWidth: 960, margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 24 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
            <div style={{
              width: 60, height: 60, background: "#fff", borderRadius: "50%",
              display: "flex", alignItems: "center", justifyContent: "center",
              boxShadow: "0 4px 12px rgba(0,0,0,0.3)"
            }}>
              <FaMicroscope size={28} color={GREEN_MID} />
            </div>
            <div>
              <p style={{ fontSize: 10, color: GREEN_ACCENT, textTransform: "uppercase", letterSpacing: 3, fontWeight: 600, margin: 0 }}>Powered by</p>
              <p style={{ fontSize: 26, fontWeight: 800, color: "#fff", letterSpacing: -0.5, margin: "2px 0" }}>Accuratus Scientia</p>
              <p style={{ fontSize: 9, color: "rgba(255,255,255,0.35)", textTransform: "uppercase", letterSpacing: 2, margin: 0 }}>Natural Product Research & Development Pvt. Ltd.</p>
            </div>
          </div>
          <div style={{ textAlign: "right" }}>
            <p style={{ fontSize: 16, fontWeight: 700, color: "#fff", margin: 0 }}>ASPIRE Science Labs</p>
            <p style={{ fontSize: 13, color: "rgba(255,255,255,0.4)", marginTop: 4 }}>Physics · Chemistry · Biology · Mathematics</p>
          </div>
        </div>
      </footer>
    </div>
  );
}