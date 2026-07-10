import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import dotenv from "dotenv";
import { GoogleGenAI } from "@google/genai";

dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json());

// Lazy-initialized Gemini client
let aiClient: GoogleGenAI | null = null;
function getGeminiClient(): GoogleGenAI {
  if (!aiClient) {
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      throw new Error("GEMINI_API_KEY environment variable is required");
    }
    aiClient = new GoogleGenAI({
      apiKey,
      httpOptions: {
        headers: {
          'User-Agent': 'aistudio-build',
        }
      }
    });
  }
  return aiClient;
}

// API endpoint for chatbot proxying supporting both custom OpenRouter and native Gemini
app.post("/api/chat", async (req, res) => {
  try {
    const { messages, systemInstruction, language } = req.body;
    if (!messages || !Array.isArray(messages)) {
      return res.status(400).json({ error: "Invalid 'messages' format. Must be an array." });
    }

    let defaultPrompt = "Eres 'Rider Buddy', el copiloto inteligente de BikerTrip. Eres un motero experto y entusiasta de las rutas. Ayuda a los usuarios con recomendaciones de rutas, consejos de equipamiento, preparación mecánica y resolución de dudas sobre viajes en moto en español. Sé amigable, directo, entusiasta y utiliza un lenguaje motero técnico pero accesible. Responde usando formato Markdown claro, organizado e interactivo.";

    if (language === "en") {
      defaultPrompt = "You are 'Rider Buddy', the intelligent BikerTrip copilot. You are an expert rider and route enthusiast. Help users with route recommendations, gear advice, mechanical preparation, and solving doubts about motorcycle trips in English. Be friendly, direct, enthusiastic, and use a technical but accessible rider vocabulary. Respond using clear, organized, and interactive Markdown format.";
    } else if (language === "fr") {
      defaultPrompt = "Vous êtes 'Rider Buddy', le copilote intelligent de BikerTrip. Vous êtes un motard expert et passionné d'itinéraires. Aidez les utilisateurs en leur proposant des recommandations d'itinéraires, des conseils d'équipement, de préparation mécanique et en répondant à leurs doutes sur les voyages à moto en français. Soyez amical, direct, enthousiaste et utilisez un vocabulaire de motard technique mais accessible. Répondez en utilisant un format Markdown clair, organisé et interactif.";
    }

    const systemPrompt = systemInstruction || defaultPrompt;

    const openRouterKey = process.env.OPENROUTER_API_KEY;
    const geminiKey = process.env.GEMINI_API_KEY;

    // 1. If user provided their own funded OpenRouter API key, prioritize OpenRouter
    if (openRouterKey && openRouterKey !== "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") {
      console.log("Sending request to OpenRouter using configured process.env.OPENROUTER_API_KEY...");
      const formattedMessages = messages.map((m: any) => ({
        role: m.role === "assistant" || m.role === "model" ? "assistant" : "user",
        content: m.content || m.text || "",
      }));

      const payload = {
        model: "google/gemini-2.5-flash",
        messages: [
          { role: "system", content: systemPrompt },
          ...formattedMessages
        ],
        temperature: 0.7,
        max_tokens: 1500,
      };

      const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${openRouterKey}`,
          "Content-Type": "application/json",
          "HTTP-Referer": "https://ai.studio/build",
          "X-Title": "BikerTrip Copilot",
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const errorText = await response.text();
        console.error(`OpenRouter API error response (Status ${response.status}):`, errorText);
        throw new Error(`OpenRouter returned status ${response.status}: ${errorText}`);
      }

      const data = await response.json();
      const replyText = data?.choices?.[0]?.message?.content || "No se ha podido generar una respuesta por el momento.";
      return res.json({ reply: replyText });
    } 
    // 2. If Gemini API key is available, use native Google GenAI SDK
    else if (geminiKey) {
      console.log("Sending request to Google Gemini API (gemini-3.5-flash)...");
      const formattedContents = messages.map((m: any) => ({
        role: m.role === "assistant" || m.role === "model" ? "model" : "user",
        parts: [{ text: m.content || m.text || "" }]
      }));

      const ai = getGeminiClient();
      const response = await ai.models.generateContent({
        model: "gemini-3.5-flash",
        contents: formattedContents,
        config: {
          systemInstruction: systemPrompt,
          temperature: 0.7,
        }
      });

      const replyText = response.text || "No se ha podido generar una respuesta por el momento.";
      return res.json({ reply: replyText });
    } 
    // 3. Fallback to hardcoded OpenRouter key as a last resort
    else {
      console.log("No custom keys found. Sending request to OpenRouter using fallback key...");
      const fallbackKey = openRouterKey || "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";
      const formattedMessages = messages.map((m: any) => ({
        role: m.role === "assistant" || m.role === "model" ? "assistant" : "user",
        content: m.content || m.text || "",
      }));

      const payload = {
        model: "google/gemini-2.5-flash",
        messages: [
          { role: "system", content: systemPrompt },
          ...formattedMessages
        ],
        temperature: 0.7,
        max_tokens: 1500,
      };

      const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${fallbackKey}`,
          "Content-Type": "application/json",
          "HTTP-Referer": "https://ai.studio/build",
          "X-Title": "BikerTrip Copilot",
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const errorText = await response.text();
        console.error(`OpenRouter Fallback error response (Status ${response.status}):`, errorText);
        throw new Error(`OpenRouter returned status ${response.status}: ${errorText}`);
      }

      const data = await response.json();
      const replyText = data?.choices?.[0]?.message?.content || "No se ha podido generar una respuesta por el momento.";
      return res.json({ reply: replyText });
    }
  } catch (error: any) {
    console.error("Error in /api/chat handler:", error);
    res.json({
      reply: "¡Hola! Por el momento el copiloto está experimentando dificultades de cobertura. Disfruta de la ruta y vuelve a intentarlo en unos instantes."
    });
  }
});

// API health check
app.get("/api/health", (req, res) => {
  res.json({ status: "ok", firebaseProjectId: process.env.FIREBASE_PROJECT_ID || "ai-studio" });
});

// Serve application via Vite in development, or static assets in production
async function setupServer() {
  if (process.env.NODE_ENV !== "production") {
    console.log("Starting in DEVELOPMENT mode with Vite middleware...");
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    console.log("Starting in PRODUCTION mode...");
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running at http://localhost:${PORT}`);
  });
}

setupServer();
