import { Link } from 'react-router-dom';

/**
 * PUBLIC_INTERFACE
 * CTAButton
 * Reusable call-to-action button supporting variants and links.
 */
export default function CTAButton({ to, href, children, variant = 'primary' }) {
  const className = `btn ${variant === 'primary' ? 'btn-primary' : variant === 'accent' ? 'btn-accent' : 'btn-ghost'}`;
  if (href) {
    return <a className={className} href={href}>{children}</a>;
  }
  return <Link className={className} to={to || '#'}>{children}</Link>;
}
