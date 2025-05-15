const { GoogleGenerativeAI } = require("@google-ai/generativelanguage");
const API_KEY = "AIzaSyBvBT9pmG9To1zK7szumhCRJvmtKrblMB0"

const genAI = new GoogleGenerativeAI(API_KEY);
const model = genAI.getModel({ model: "gemini-2.0-flash" }); // ou "gemini-2.0-flash-lite", "gemini-1.5-flash", etc.

async function runGemini(prompt) {
  try {
      const result = await model.generateContent(prompt);
const response = await result.response;
console.log(response.candidates[0].content.parts[0].text);
} catch (error) {
console.error("Ocorreu um erro ao chamar a API do Gemini:", error);
}
}
runGemini("ola linda")