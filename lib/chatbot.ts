export async function getChatbotResponse(
  message: string
) {
  try {
    const response = await fetch("/api/chat", {
      method: "POST",

      headers: {
        "Content-Type":
          "application/json",
      },

      body: JSON.stringify({
        message,
      }),
    });

    const data = await response.json();

    return data.reply;
  } catch (error) {
    return "Something went wrong. Please try again.";
  }
}