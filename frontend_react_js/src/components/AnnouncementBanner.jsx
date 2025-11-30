import { Link } from 'react-router-dom';

/**
 * PUBLIC_INTERFACE
 * AnnouncementBanner
 * Optional announcement strip similar to posthog.com top banner.
 */
export default function AnnouncementBanner() {
  return (
    <div style={{
      background: 'color-mix(in oklab, var(--color-primary) 12%, var(--color-surface))',
      borderBottom: '1px solid var(--color-border)'
    }}>
      <div className="container" style={{
        display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 12, padding: '10px 0'
      }}>
        <span role="img" aria-label="sparkles">✨</span>
        <span className="muted">Now open for select freelance engagements.</span>
        <Link className="link-underline" to="/contact">Let’s talk</Link>
      </div>
    </div>
  );
}
