import { chatbotKnowledge } from "@/data/chatbotKnowledge";

export function getChatbotResponse(
  userInput: string
) {
  const normalizedInput =
    userInput.toLowerCase();

  const matched =
    chatbotKnowledge.find((item) =>
      item.keywords.some((keyword) =>
        normalizedInput.includes(
          keyword.toLowerCase()
        )
      )
    );

  return matched
    ? matched.answer
    : "Sorry, I couldn't understand that. Please contact Aspire for detailed assistance.";
}