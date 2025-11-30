import Section from '../components/Section';
import CTAButton from '../components/CTAButton';

/**
 * PUBLIC_INTERFACE
 * Contact
 * Contact guidance page that encourages using the chatbot.
 */
export default function Contact() {
  return (
    <Section
      title="Contact"
      description="The fastest way to reach me is via the chat bubble in the lower-right corner."
    >
      <div className="card" style={{ maxWidth: 760 }}>
        <p className="muted">
          I use a lightweight onsite chatbot to triage inquiries and gather context. It runs locally in your browser
          and does not send your messages to a server in this version.
        </p>
        <ol style={{ marginTop: 12, paddingLeft: 18 }}>
          <li>Click the chat bubble in the lower-right corner.</li>
          <li>Share your project goals, timeline, and any constraints.</li>
          <li>Use the envelope icon in the chat to email a summary if you prefer email follow-up.</li>
        </ol>
        <div style={{ marginTop: 16, display: 'flex', gap: 8, flexWrap: 'wrap' }}>
          <CTAButton to="/" variant="ghost">Go home</CTAButton>
          <a className="btn btn-primary" href="#!" onClick={(e) => { e.preventDefault(); const el = document.querySelector('.chatbot-fab'); el?.click(); }}>
            Open chat
          </a>
        </div>
      </div>
    </Section>
  );
}
