// api/core.ts
import axios from "axios";

const COHERE_API_KEY = "LUax0nvYV0Rp4aKkpdWj0pwsMm6MnUQ5Qm22Ed6w"; // paste your actual key

export async function generateVibeAndPlan(prompt: string) {
  const response = await axios.post(
    "https://api.cohere.ai/v1/generate",
    {
      model: "command",
      prompt,
      max_tokens: 300,
      temperature: 0.9,
    },
    {
      headers: {
        Authorization: `Bearer ${COHERE_API_KEY}`,
        "Content-Type": "application/json",
      },
    }
  );

  return response.data.generations[0].text.trim();
}
