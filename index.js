// index.js
import express from "express";
import axios from "axios";
import cors from "cors";
import rateLimit from "express-rate-limit";
import helmet from "helmet";

const app = express();
app.use(helmet());
app.use(express.json());

// Allow origins - change to your mobile/web app origin in production
app.use(cors({
  origin: true // allow all origins for now; tighten in production
}));

// Basic rate limiting (adjust)
const limiter = rateLimit({
  windowMs: 60 * 1000, // 1 minute
  max: 30,             // max requests per IP per window
  standardHeaders: true,
  legacyHeaders: false
});
app.use(limiter);

// Health
app.get("/", (req, res) => res.json({ status: "ok" }));

// Chat endpoint - expects { messages: [ { role, content }, ... ] }
app.post("/chat", async (req, res) => {
  try {
    if (!process.env.DEEPSEEK_KEY) {
      return res.status(500).json({ error: "Server not configured. DEEPSEEK_KEY missing." });
    }

    const userMessages = req.body.messages;
    if (!userMessages || !Array.isArray(userMessages)) {
      return res.status(400).json({ error: "Request body must include messages array." });
    }

    // Prepare call to DeepSeek
    const apiResp = await axios.post(
      "https://api.deepseek.com/chat/completions",
      {
        model: "deepseek-chat",
        messages: userMessages
      },
      {
        headers: {
          "Authorization": `Bearer ${process.env.DEEPSEEK_KEY}`,
          "Content-Type": "application/json"
        },
        timeout: 30000
      }
    );

    // Forward the raw DeepSeek response (or pick fields you want)
    return res.status(200).json(apiResp.data);

  } catch (err) {
    console.error("Error /chat:", err?.response?.data || err.message || err);
    const status = err?.response?.status || 500;
    const body = err?.response?.data || { error: err.message || "Unknown error" };
    return res.status(status).json(body);
  }
});

// Start
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
