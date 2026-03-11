import { GoogleGenAI, Chat } from "@google/genai";

// Initialize Gemini Client lazily to prevent top-level crashes if API key is missing
let aiInstance: GoogleGenAI | null = null;

const getAIInstance = () => {
  if (!aiInstance) {
    const apiKey = process.env.GEMINI_API_KEY || process.env.API_KEY;
    if (!apiKey) {
      console.warn("GEMINI_API_KEY is missing. AI features will be disabled.");
      return null;
    }
    aiInstance = new GoogleGenAI({ apiKey });
  }
  return aiInstance;
};

const SYSTEM_INSTRUCTION = `
You are the interactive AI assistant for NDAMBA GOSSAKI Paul Roger's portfolio website. 
Paul is a HR Manager and Full-Stack Developer based in Mfilou, NGAMABA, Republic of Congo.
His phone numbers are +242 06 769 6157 and +242 05 013 3271. His email is paulndamba2@gmail.com.

He specializes in:
1. Web Development (HTML, CSS, JS, PHP, React Native)
2. Chatbots & AI (WhatsApp Bots, Python)
3. Graphic Design (Adobe Suite, UI/UX)
4. HR Management (Sage Paie, Strategy)

Be helpful, professional, and concise. If asked about location, use the googleMaps tool to provide context about Congo or Brazzaville if needed.
Always answer in the language the user speaks to you (French or English).
`;

export const createChatSession = (): Chat | null => {
  const ai = getAIInstance();
  if (!ai) return null;
  
  return ai.chats.create({
    model: 'gemini-2.5-flash',
    config: {
      systemInstruction: SYSTEM_INSTRUCTION,
      tools: [{ googleMaps: {} }], 
    },
  });
};
