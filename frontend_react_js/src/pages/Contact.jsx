import { useState } from 'react';
import Section from '../components/Section';
import { submitContact } from '../services/contact';

/**
 * PUBLIC_INTERFACE
 * Contact
 * Contact form that performs a no-op submission for now.
 */
export default function Contact() {
  const [status, setStatus] = useState({ state: 'idle' });

  const onSubmit = async (e) => {
    e.preventDefault();
    setStatus({ state: 'submitting' });
    const form = new FormData(e.currentTarget);
    const payload = {
      name: form.get('name'),
      email: form.get('email'),
      message: form.get('message'),
    };
    const res = await submitContact(payload);
    if (res.ok) {
      setStatus({ state: 'success' });
      e.currentTarget.reset();
    } else {
      setStatus({ state: 'error', error: res.error || 'Submission failed' });
    }
  };

  return (
    <Section title="Contact" description="Tell me about your idea—happy to help.">
      <form onSubmit={onSubmit} className="card" style={{ maxWidth: 720 }}>
        <label>Name
          <input name="name" required style={inputStyle} />
        </label>
        <label style={{ marginTop: 12 }}>Email
          <input type="email" name="email" required style={inputStyle} />
        </label>
        <label style={{ marginTop: 12 }}>Message
          <textarea name="message" rows={5} required style={{ ...inputStyle, resize: 'vertical' }} />
        </label>
        <div style={{ marginTop: 16 }}>
          <button className="btn btn-primary" disabled={status.state === 'submitting'}>
            {status.state === 'submitting' ? 'Sending…' : 'Send message'}
          </button>
        </div>
        {status.state === 'success' && <p className="muted" style={{ marginTop: 12 }}>Thanks! I’ll get back to you shortly.</p>}
        {status.state === 'error' && <p style={{ color: 'var(--color-danger)', marginTop: 12 }}>{status.error}</p>}
      </form>
    </Section>
  );
}

const inputStyle = {
  display: 'block',
  width: '100%',
  marginTop: 6,
  padding: '10px 12px',
  borderRadius: '12px',
  border: '1px solid var(--color-border)',
  background: 'var(--color-surface)',
  color: 'var(--color-text)',
};
