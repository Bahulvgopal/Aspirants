import { GoogleGenerativeAI } from "@google/generative-ai";
import { chatbotKnowledge } from "@/data/chatbotKnowledge";

const genAI = new GoogleGenerativeAI(
  process.env.GEMINI_API_KEY!
);

export async function POST(req: Request) {
  try {
    const { message } = await req.json();

    const model = genAI.getGenerativeModel({
      model: "gemini-2.5-flash",
    });

    const prompt = `
You are the official AI assistant of Aspire Tuition Centre.

Only answer based on the provided Aspire data.

Never hallucinate.

If data is unavailable say:

"Please contact Aspire for updated information."

Be helpful, friendly and concise.

Aspire Knowledge:
${JSON.stringify(chatbotKnowledge)}

User Question:
${message}
`;

    const result = await model.generateContent(prompt);

    const text =
      result.response.text();

    return Response.json({
      reply: text,
    });
  } catch (error) {
    return Response.json({
      reply:
        "Something went wrong. Please try again.",
    });
  }
}