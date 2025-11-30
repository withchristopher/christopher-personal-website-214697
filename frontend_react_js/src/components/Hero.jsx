import CTAButton from './CTAButton';

/**
 * PUBLIC_INTERFACE
 * Hero
 * Full-width hero with gradient background and actions.
 */
export default function Hero() {
  return (
    <section className="hero">
      <div className="container fade-in">
        <p className="muted" style={{ marginBottom: 12 }}>Hi, I'm Christopher</p>
        <h1 className="hero-title">
          I design and build modern products that feel effortless.
        </h1>
        <p className="hero-subtitle">
          Full-stack engineer focused on outcome-driven solutions, clean architecture, and delightful experiences.
        </p>
        <div style={{ display: 'flex', gap: 12, marginTop: 24, flexWrap: 'wrap' }}>
          <CTAButton to="/projects" variant="primary">View Projects</CTAButton>
          <CTAButton to="/contact" variant="ghost">Get in touch</CTAButton>
        </div>
      </div>
    </section>
  );
}
