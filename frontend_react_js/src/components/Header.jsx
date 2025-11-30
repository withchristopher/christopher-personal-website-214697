import { NavLink, Link } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';

/**
 * PUBLIC_INTERFACE
 * Header
 * Sticky site header with navigation resembling posthog.com style.
 */
export default function Header() {
  return (
    <header className="site-header">
      <div className="container navbar">
        <Link to="/" className="navbar-brand">
          <span style={{ width: 10, height: 10, background: 'var(--color-primary)', borderRadius: 2, display: 'inline-block' }} />
          Christopher
        </Link>
        <nav className="navbar-links" aria-label="Primary">
          <NavLink to="/" end className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>Home</NavLink>
          <NavLink to="/about" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>About</NavLink>
          <NavLink to="/projects" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>Projects</NavLink>
          <NavLink to="/blog" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>Blog</NavLink>
          <NavLink to="/contact" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>Contact</NavLink>
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}
