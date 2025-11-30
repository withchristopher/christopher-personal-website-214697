import { Link } from 'react-router-dom';

/**
 * PUBLIC_INTERFACE
 * Footer
 * Responsive multi-column footer with navigation and socials.
 */
export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-col">
          <h4>Christopher</h4>
          <p className="muted">Building delightful software with measurable impact.</p>
        </div>
        <div className="footer-col">
          <h4>Site</h4>
          <Link to="/about">About</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/blog">Blog</Link>
          <Link to="/contact">Contact</Link>
        </div>
        <div className="footer-col">
          <h4>Legal</h4>
          <Link to="/privacy">Privacy</Link>
        </div>
        <div className="footer-col">
          <h4>Connect</h4>
          <a href="https://github.com" target="_blank" rel="noreferrer">GitHub</a>
          <a href="https://www.linkedin.com" target="_blank" rel="noreferrer">LinkedIn</a>
          <a href="mailto:hello@example.com">Email</a>
        </div>
      </div>
      <div className="container" style={{ marginTop: '24px', color: 'var(--color-muted)', fontSize: 14 }}>
        © {new Date().getFullYear()} Christopher. All rights reserved.
      </div>
    </footer>
  );
}
