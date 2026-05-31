"use client";

import { useState, useRef, useEffect } from "react";
import { X } from "lucide-react";
import { getChatbotResponse } from "@/lib/chatbot";

type Message = {
  role: "user" | "bot";
  text: string;
};

// Custom AI brain/spark icon — no external dependency
function AIIcon({ size = 28 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Outer glow ring */}
      <circle cx="16" cy="16" r="13" stroke="white" strokeWidth="1.2" strokeOpacity="0.35" />
      {/* Brain-like circuit nodes */}
      <circle cx="16" cy="9" r="2.2" fill="white" />
      <circle cx="23" cy="14" r="2.2" fill="white" />
      <circle cx="23" cy="21" r="2.2" fill="white" />
      <circle cx="16" cy="24" r="2.2" fill="white" />
      <circle cx="9" cy="21" r="2.2" fill="white" />
      <circle cx="9" cy="14" r="2.2" fill="white" />
      {/* Center node */}
      <circle cx="16" cy="16" r="2.8" fill="white" />
      {/* Connecting lines */}
      <line x1="16" y1="11.2" x2="16" y2="13.2" stroke="white" strokeWidth="1.2" strokeOpacity="0.7" />
      <line x1="21.1" y1="15.1" x2="18.8" y2="15.8" stroke="white" strokeWidth="1.2" strokeOpacity="0.7" />
      <line x1="21.1" y1="19.9" x2="18.8" y2="17.5" stroke="white" strokeWidth="1.2" strokeOpacity="0.7" />
      <line x1="16" y1="21.8" x2="16" y2="18.8" stroke="white" strokeWidth="1.2" strokeOpacity="0.7" />
      <line x1="10.9" y1="19.9" x2="13.2" y2="17.5" stroke="white" strokeWidth="1.2" strokeOpacity="0.7" />
      <line x1="10.9" y1="15.1" x2="13.2" y2="15.8" stroke="white" strokeWidth="1.2" strokeOpacity="0.7" />
      {/* Spark at top-right */}
      <path
        d="M25 7 L23.5 10 L26.5 10 Z"
        fill="white"
        fillOpacity="0.9"
      />
    </svg>
  );
}

// Animated dots for "thinking" state
function TypingDots() {
  return (
    <div style={{ display: "flex", gap: "5px", alignItems: "center", padding: "4px 0" }}>
      {[0, 1, 2].map((i) => (
        <span
          key={i}
          style={{
            width: 7,
            height: 7,
            borderRadius: "50%",
            background: "#8B1E2D",
            opacity: 0.7,
            display: "inline-block",
            animation: `chatbot-bounce 1.2s ease-in-out ${i * 0.2}s infinite`,
          }}
        />
      ))}
    </div>
  );
}

export default function ChatBot() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "bot",
      text: "Hi 👋 Welcome to Aspire Tuition Centre. Ask me about courses, timings, admissions or contact details.",
    },
  ]);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, typing]);

  async function handleAsk() {
    if (!input.trim()) return;
    const userMessage = input;
    setInput("");
    setMessages((prev) => [...prev, { role: "user", text: userMessage }]);
    setTyping(true);

    // Simulate a short typing delay for realism
   setTimeout(async () => {
  const botReply = await getChatbotResponse(userMessage);

  setTyping(false);

  setMessages((prev) => [
    ...prev,
    {
      role: "bot",
      text: String(botReply),
    },
  ]);
}, 700);
  }

  return (
    <>
      <style>{`
        @keyframes chatbot-bounce {
          0%, 80%, 100% { transform: translateY(0); opacity: 0.5; }
          40% { transform: translateY(-5px); opacity: 1; }
        }
        @keyframes chatbot-pop {
          0% { transform: scale(0.7) translateY(16px); opacity: 0; }
          100% { transform: scale(1) translateY(0); opacity: 1; }
        }
        @keyframes chatbot-fab-pulse {
          0%, 100% { box-shadow: 0 0 0 0 rgba(139,30,45,0.35), 0 8px 28px rgba(139,30,45,0.38); }
          50% { box-shadow: 0 0 0 10px rgba(139,30,45,0), 0 8px 28px rgba(139,30,45,0.38); }
        }
        .chatbot-window {
          animation: chatbot-pop 0.28s cubic-bezier(.34,1.56,.64,1) both;
        }
        .chatbot-fab {
          animation: chatbot-fab-pulse 2.4s ease-in-out infinite;
        }
        .chatbot-msg-enter {
          animation: chatbot-pop 0.22s cubic-bezier(.34,1.56,.64,1) both;
        }
      `}</style>

      {/* Floating AI Button */}
      <button
        onClick={() => setOpen(!open)}
        aria-label={open ? "Close chat" : "Open AI chat"}
        className="chatbot-fab fixed bottom-28 right-6 z-50 flex h-16 w-16 items-center justify-center rounded-full bg-[#8B1E2D] text-white transition-transform hover:scale-110 active:scale-95"
        style={{
          background: open
            ? "#5a1220"
            : "linear-gradient(145deg, #a82235 0%, #8B1E2D 60%, #6b1622 100%)",
        }}
      >
        {open ? <X size={26} /> : <AIIcon size={30} />}
      </button>

      {/* Chat Window */}
      {open && (
        <div
          className="chatbot-window fixed bottom-48 right-6 z-50 flex flex-col overflow-hidden rounded-[28px] border border-gray-200 bg-white shadow-2xl"
          style={{ width: 360, maxHeight: 520 }}
        >
          {/* Header */}
          <div
            className="flex items-center gap-3 p-4"
            style={{
              background: "linear-gradient(135deg, #a82235 0%, #8B1E2D 100%)",
            }}
          >
            <div
              className="flex h-10 w-10 items-center justify-center rounded-full"
              style={{ background: "rgba(255,255,255,0.15)" }}
            >
              <AIIcon size={22} />
            </div>
            <div>
              <h2 className="text-sm font-semibold text-white">Aspire Assistant</h2>
              <p className="flex items-center gap-1 text-xs text-white/80">
                <span
                  style={{
                    display: "inline-block",
                    width: 7,
                    height: 7,
                    borderRadius: "50%",
                    background: "#4ade80",
                    marginRight: 2,
                  }}
                />
                AI-powered · Online
              </p>
            </div>
          </div>

          {/* Messages */}
          <div
            className="flex-1 space-y-3 overflow-y-auto p-4"
            style={{ minHeight: 280, maxHeight: 340 }}
          >
            {messages.map((message, index) => (
              <div
                key={index}
                className="chatbot-msg-enter"
                style={{
                  display: "flex",
                  justifyContent: message.role === "user" ? "flex-end" : "flex-start",
                }}
              >
                {message.role === "bot" && (
                  <div
                    style={{
                      width: 28,
                      height: 28,
                      borderRadius: "50%",
                      background: "linear-gradient(135deg, #a82235, #8B1E2D)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                      marginRight: 8,
                      marginTop: 2,
                    }}
                  >
                    <AIIcon size={15} />
                  </div>
                )}
                <div
                  style={{
                    maxWidth: "78%",
                    borderRadius:
                      message.role === "user"
                        ? "20px 20px 4px 20px"
                        : "20px 20px 20px 4px",
                    padding: "10px 14px",
                    fontSize: 13.5,
                    lineHeight: 1.5,
                    background:
                      message.role === "user"
                        ? "linear-gradient(135deg, #a82235, #8B1E2D)"
                        : "#f4f4f5",
                    color: message.role === "user" ? "#fff" : "#1a1a1a",
                    boxShadow:
                      message.role === "user"
                        ? "0 2px 10px rgba(139,30,45,0.25)"
                        : "0 1px 4px rgba(0,0,0,0.07)",
                  }}
                >
                  {message.text}
                </div>
              </div>
            ))}

            {typing && (
              <div style={{ display: "flex", alignItems: "flex-end", gap: 8 }}>
                <div
                  style={{
                    width: 28,
                    height: 28,
                    borderRadius: "50%",
                    background: "linear-gradient(135deg, #a82235, #8B1E2D)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <AIIcon size={15} />
                </div>
                <div
                  style={{
                    background: "#f4f4f5",
                    borderRadius: "20px 20px 20px 4px",
                    padding: "10px 14px",
                  }}
                >
                  <TypingDots />
                </div>
              </div>
            )}
            <div ref={bottomRef} />
          </div>

          {/* Input */}
          <div
            className="flex gap-2 p-3"
            style={{ borderTop: "1px solid #f0f0f0" }}
          >
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleAsk()}
              placeholder="Ask about courses, timings…"
              style={{
                flex: 1,
                borderRadius: 999,
                border: "1.5px solid #e5e7eb",
                padding: "10px 16px",
                fontSize: 13.5,
                outline: "none",
                background: "#fafafa",
                transition: "border-color 0.2s",
              }}
              onFocus={(e) => (e.target.style.borderColor = "#8B1E2D")}
              onBlur={(e) => (e.target.style.borderColor = "#e5e7eb")}
            />
            <button
              onClick={handleAsk}
              disabled={!input.trim()}
              style={{
                borderRadius: 999,
                background:
                  input.trim()
                    ? "linear-gradient(135deg, #a82235, #8B1E2D)"
                    : "#e5e7eb",
                color: input.trim() ? "#fff" : "#aaa",
                padding: "10px 18px",
                fontSize: 13,
                fontWeight: 600,
                border: "none",
                cursor: input.trim() ? "pointer" : "default",
                transition: "background 0.2s, color 0.2s",
              }}
            >
              Send
            </button>
          </div>
        </div>
      )}
    </>
  );
}