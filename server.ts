import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // Contact Form Endpoint
  app.post("/api/contact", (req, res) => {
    const { name, email, subject, budget, message } = req.body || {};

    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        error: "Name, email, and message are required fields."
      });
    }

    console.log(`[Contact Form Received] From: ${name} <${email}> | Subject: ${subject || 'Inquiry'} | Budget: ${budget || 'N/A'}`);
    
    // Simulate instant success
    return res.json({
      success: true,
      message: `Thank you, ${name}! Your message has been received. Alex will get back to you at ${email} within 24 hours.`,
      receivedAt: new Date().toISOString()
    });
  });

  // AI Assistant Chat Endpoint powered by Gemini API
  app.post("/api/chat", async (req, res) => {
    try {
      const { message, history } = req.body || {};

      if (!message || typeof message !== 'string') {
        return res.status(400).json({ success: false, error: "A prompt message string is required." });
      }

      const apiKey = process.env.GEMINI_API_KEY;
      if (!apiKey) {
        // Fallback response if GEMINI_API_KEY is not yet attached
        return res.json({
          success: true,
          reply: `Hi! I'm Alex's AI Co-pilot. Alex Mercer is a Senior Full-Stack & AI Engineer specializing in React, TypeScript, Node.js, and Cloud Infrastructure with 6+ years of experience. Feel free to explore the Projects and Timeline sections, or drop Alex an email at alex.mercer@dev.io!`,
          isFallback: true
        });
      }

      const ai = new GoogleGenAI({
        apiKey,
        httpOptions: {
          headers: {
            'User-Agent': 'aistudio-build'
          }
        }
      });

      const systemInstruction = `You are Alex Mercer's AI Assistant on his official portfolio website.
Alex Mercer is a Senior Full-Stack & AI Systems Engineer based in San Francisco with 6+ years of engineering leadership.
Key Strengths:
- Frontend: React 19, Next.js, TypeScript, Tailwind CSS, Motion, WebGL, Micro-frontends
- Backend: Node.js, Express, Go, Python, FastAPI, PostgreSQL, Redis, GraphQL, gRPC
- Cloud & AI: GCP, AWS, Docker, Kubernetes, CI/CD, Gemini API, Vector DBs (Pinecone, Qdrant), RAG architecture
- Projects:
  1. "Nexus AI Workbench" — Real-time collaborative AI playground (120k active users)
  2. "Aether Cloud Studio" — Low-latency serverless deployment canvas with live web terminal
  3. "Chronos Analytics Engine" — High-throughput event streaming platform (45M events/day)
  4. "Pulse UI System" — Accessible open-source component library (8.5k GitHub stars)
- Availability: Open for Principal/Senior Full-Stack & AI Engineering roles, technical advisory, and high-impact contract projects.
- Preferred Location: Remote or San Francisco Bay Area.

Guidelines:
- Answer questions accurately, concisely (2-4 sentences max unless detailed project breakdown is asked), warmly, and professionally.
- Use markdown bolding or code formatting for tech names.
- If asked about contacting Alex, invite them to use the Contact form on the page or email alex.mercer@dev.io.`;

      // Construct messages context
      let promptText = message;
      if (Array.isArray(history) && history.length > 0) {
        const historyContext = history
          .slice(-6)
          .map(h => `${h.role === 'user' ? 'Visitor' : 'Alex AI'}: ${h.content}`)
          .join('\n');
        promptText = `Conversation History:\n${historyContext}\n\nVisitor: ${message}`;
      }

      const response = await ai.models.generateContent({
        model: 'gemini-3.6-flash',
        contents: promptText,
        config: {
          systemInstruction,
          temperature: 0.7,
        }
      });

      const reply = response.text || "Alex is currently available for high-impact full-stack and AI projects! How can I assist you further?";

      return res.json({
        success: true,
        reply
      });

    } catch (err: any) {
      console.error("[Chat API Error]:", err?.message || err);
      return res.json({
        success: true,
        reply: `Alex Mercer is a Senior Full-Stack Engineer with expertise in React, Next.js, Node.js, and Cloud Infrastructure. Check out the Projects or Timeline section to see recent work!`,
        error: err?.message
      });
    }
  });

  // Health check API
  app.get("/api/health", (req, res) => {
    res.json({ status: "ok", timestamp: new Date() });
  });

  // Vite middleware setup
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
