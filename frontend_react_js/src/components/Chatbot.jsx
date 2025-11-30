import { useEffect, useMemo, useRef, useState } from 'react';
import { getBotReply, getChatbotConfig, formatEmailFromChat } from '../services/chatbot';

/**
 * PUBLIC_INTERFACE
 * Chatbot
 * Floating site-wide chatbot with rule-based responses and hooks for future APIs.
 * Keyboard:
 *  - Toggle with button
 *  - Press Escape to close when open
 */
export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState(() => {
    // restore last session
    try {
      const saved = localStorage.getItem('chatbot:messages');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });
  const [input, setInput] = useState('');
  const [busy, setBusy] = useState(false);
  const scrollRef = useRef(null);
  const cfg = useMemo(() => getChatbotConfig(), []);

  // Persist conversation
  useEffect(() => {
    try {
      localStorage.setItem('chatbot:messages', JSON.stringify(messages));
    } catch {
      // ignore
    }
  }, [messages]);

  // Scroll to newest message
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, open]);

  // Close with Escape
  useEffect(() => {
    function onKey(e) {
      if (e.key === 'Escape') setOpen(false);
    }
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  const send = async (text) => {
    const trimmed = (text || '').trim();
    if (!trimmed) return;
    setBusy(true);
    const userMsg = { role: 'user', text: trimmed, at: Date.now() };
    setMessages((m) => [...m, userMsg]);
    setInput('');
    // Simulate thinking
    await new Promise(r => setTimeout(r, 150));
    const replyText = getBotReply(trimmed);
    const botMsg = { role: 'bot', text: replyText, at: Date.now() };
    setMessages((m) => [...m, botMsg]);
    setBusy(false);
  };

  const clearChat = () => {
    setMessages([]);
  };

  const emailLink = formatEmailFromChat(messages);

  return (
    <>
      <button
        className="chatbot-fab"
        aria-label={open ? 'Close chat' : 'Open chat'}
        onClick={() => setOpen((o) => !o)}
        title={open ? 'Close chat' : 'Chat with me'}
      >
        {open ? '✖' : '💬'}
      </button>

      {open && (
        <div className="chatbot-panel" role="dialog" aria-label="Website chatbot" aria-modal="false">
          <header className="chatbot-header">
            <div className="chatbot-title">
              <span className="chatbot-dot" />
              Chat with Christopher
            </div>
            <div className="chatbot-actions">
              <a className="chatbot-icon-btn" href={emailLink} title="Email this chat" aria-label="Email this chat">✉️</a>
              <button className="chatbot-icon-btn" onClick={clearChat} title="Clear chat" aria-label="Clear chat">🧹</button>
              <button className="chatbot-icon-btn" onClick={() => setOpen(false)} title="Close" aria-label="Close">✖</button>
            </div>
          </header>

          <div className="chatbot-body" ref={scrollRef}>
            {messages.length === 0 && (
              <div className="chatbot-empty">
                <p className="muted">Ask about availability, projects, pricing, or anything else.</p>
                <div className="chatbot-suggestions">
                  <button onClick={() => send('Are you available for freelance work?')}>Availability</button>
                  <button onClick={() => send('How do you approach new projects?')}>Approach</button>
                  <button onClick={() => send('What about pricing and budget?')}>Pricing</button>
                </div>
              </div>
            )}

            {messages.map((m, idx) => (
              <div key={idx} className={`chatbot-msg ${m.role}`}>
                <div className="bubble">{m.text}</div>
              </div>
            ))}
            {busy && (
              <div className="chatbot-msg bot">
                <div className="bubble typing">
                  <span className="dot" /><span className="dot" /><span className="dot" />
                </div>
              </div>
            )}
          </div>

          <form
            className="chatbot-input"
            onSubmit={(e) => {
              e.preventDefault();
              send(input);
            }}
          >
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your message…"
              aria-label="Message input"
              disabled={busy}
            />
            <button className="btn btn-primary" disabled={busy || !input.trim()} type="submit">
              Send
            </button>
          </form>
          <footer className="chatbot-footer muted">
            Private by default. This local chatbot runs entirely in your browser.
          </footer>
        </div>
      )}
    </>
  );
}
