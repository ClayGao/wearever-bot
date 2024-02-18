const API_KET = "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";
import axios from "axios";
import OpenAI from "openai";

export const askGpt = async (prompt: string, model = "gpt-3.5-turbo") => {
  try {
    const response = await axios.post(
      "https://api.openai.com/v1/chat/completions",
      {
        model,
        messages: [{ role: "user", content: prompt }],
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${API_KET}`,
        },
      }
    );
    return response.data.choices[0].message.content;
  } catch (error) {
    console.error(error);
  }
};

// askGpt("今天天氣如何？").then(console.log);

const openai = new OpenAI();

async function main() {
  const myAssistant = await openai.beta.assistants.create({
    instructions:
      "You are a personal math tutor. When asked a question, write and run Python code to answer the question.",
    name: "Math Tutor",
    tools: [{ type: "code_interpreter" }],
    model: "gpt-4",
  });

  console.log(myAssistant);
}

main();
