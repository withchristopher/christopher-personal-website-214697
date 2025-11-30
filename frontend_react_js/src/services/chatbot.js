import { env } from '../utils/env';

/**
 * PUBLIC_INTERFACE
 * getChatbotConfig
 * Returns chatbot runtime configuration sourced from environment.
 * You can configure future backends without code changes.
 */
export function getChatbotConfig() {
  return {
    provider: 'local-rule-based', // future: 'api', 'llm'
    apiBase: env.API_BASE || env.BACKEND_URL || '',
    wsUrl: env.WS_URL || '',
    siteUrl: env.FRONTEND_URL || '',
  };
}

/**
 * Basic rule set for a lightweight FAQ/responder.
 * Add or adjust patterns/messages as needed.
 */
const RULES = [
  {
    test: /hello|hi|hey/i,
    reply: "Hi! 👋 I’m here to help with projects, availability, and general questions.",
  },
  {
    test: /avail|availability|book|hire|engage/i,
    reply: "I’m currently open for select freelance engagements. Tell me about your project scope, timeline, and goals.",
  },
  {
    test: /project|build|help|work/i,
    reply: "I focus on outcome-driven engineering, clean UX, and performance. What are you building and what outcomes matter most?",
  },
  {
    test: /pricing|rate|cost|budget/i,
    reply: "Pricing depends on scope and timeline. Share a bit more and I’ll suggest a structure that fits.",
  },
  {
    test: /contact|email|reach/i,
    reply: "You can reach me here in chat. If you prefer email, use the envelope icon below to draft an email based on our chat.",
  },
  {
    test: /privacy|data/i,
    reply: "I respect your privacy. The chatbot runs client-side. No messages are sent to a server in this version.",
  },
];

/**
 * PUBLIC_INTERFACE
 * getBotReply
 * Returns a bot reply string from a lightweight rule-based responder.
 * If no rule matches, a friendly default is returned.
 */
export function getBotReply(userMessage = '') {
  if (!userMessage || typeof userMessage !== 'string') {
    return "Could you share a bit more about what you’re looking for?";
  }
  const match = RULES.find(r => r.test.test(userMessage));
  if (match) return match.reply;
  return "Thanks for the details! I can help with product planning, UX, and engineering. Tell me your goals, timeline, and constraints.";
}

/**
 * PUBLIC_INTERFACE
 * formatEmailFromChat
 * Creates a mailto link body summarizing the chat for sending via email.
 */
export function formatEmailFromChat(transcript = []) {
  const subject = encodeURIComponent("Project inquiry from website chatbot");
  const bodyLines = [
    "Hi Christopher,",
    "",
    "Here’s a summary of our chat:",
    "",
    ...transcript.map(m => `${m.role === 'user' ? 'You' : 'Bot'}: ${m.text}`),
    "",
    "Best regards,"
  ];
  const body = encodeURIComponent(bodyLines.join('\n'));
  return `mailto:hello@example.com?subject=${subject}&body=${body}`;
}
