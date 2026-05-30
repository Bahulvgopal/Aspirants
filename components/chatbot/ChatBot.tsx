"use client";

import { useState } from "react";
import { MessageCircle, X } from "lucide-react";
import { chatbotKnowledge } from "@/data/chatbotKnowledge";
import { getChatbotResponse } from "@/lib/chatbot";

type Message = {
  role: "user" | "bot";
  text: string;
};

export default function ChatBot() {
  const [open, setOpen] = useState(false);

  const [input, setInput] = useState("");

  const [messages, setMessages] = useState<
    Message[]
  >([
    {
      role: "bot",
      text:
        "Hi 👋 Welcome to Aspire Tuition Centre. Ask me about courses, timings, admissions or contact details.",
    },
  ]);

  function handleAsk() {
    if (!input.trim()) return;

    const userMessage = input;

   const botReply =
  getChatbotResponse(userMessage);

    setMessages((prev) => [
      ...prev,
      {
        role: "user",
        text: userMessage,
      },
      {
        role: "bot",
        text: botReply,
      },
    ]);

    setInput("");
  }

  return (
    <>
      {/* Floating Button */}

      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-28 right-6 z-50 flex h-16 w-16 items-center justify-center rounded-full bg-[#8B1E2D] text-white shadow-xl transition hover:scale-110"
      >
        {open ? (
          <X size={28} />
        ) : (
          <MessageCircle size={28} />
        )}
      </button>

      {/* Chat Window */}

      {open && (
        <div className="fixed bottom-48 right-6 z-50 w-[360px] overflow-hidden rounded-[32px] border border-gray-200 bg-white shadow-2xl">
          <div className="bg-[#8B1E2D] p-5 text-white">
            <h2 className="font-semibold">
              Aspire Assistant
            </h2>

            <p className="text-sm opacity-90">
              Ask anything about Aspire.
            </p>
          </div>

          <div className="h-[350px] space-y-4 overflow-y-auto p-5">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`max-w-[85%] rounded-3xl p-4 text-sm ${
                  message.role === "user"
                    ? "ml-auto bg-[#8B1E2D] text-white"
                    : "bg-gray-100"
                }`}
              >
                {message.text}
              </div>
            ))}
          </div>

          <div className="flex gap-2 border-t border-gray-200 p-4">
            <input
            onKeyDown={(e) => {
  if (e.key === "Enter") {
    handleAsk();
  }
}}
              value={input}
              onChange={(e) =>
                setInput(e.target.value)
              }
              placeholder="Ask about courses, timings..."
              className="flex-1 rounded-full border border-gray-300 px-4 py-3 outline-none"
            />

            <button
              onClick={handleAsk}
              className="rounded-full bg-[#8B1E2D] px-5 text-white"
            >
              Send
            </button>
          </div>
        </div>
      )}
    </>
  );
}