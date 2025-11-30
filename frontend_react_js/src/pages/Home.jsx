import Hero from '../components/Hero';
import Section from '../components/Section';
import Card from '../components/Card';
import FeatureIcon from '../components/FeatureIcon';
import CTAButton from '../components/CTAButton';
import projects from '../data/projects.json';
import blog from '../data/blog.json';

/**
 * PUBLIC_INTERFACE
 * Home
 * Landing page with hero, features, selected projects, testimonials, and CTA.
 */
export default function Home() {
  const featured = projects.slice(0, 3);
  const features = [
    { icon: '⚡', title: 'Performance first', text: 'Lean, accessible, and fast by default.' },
    { icon: '🧠', title: 'Clear architecture', text: 'Maintainable code with measurable outcomes.' },
    { icon: '🌊', title: 'Ocean calm UX', text: 'Minimalist UI with purposeful motion.' },
  ];

  return (
    <>
      <Hero />

      <Section title="What I focus on" description="A pragmatic approach to building products that scale with clarity and speed.">
        <div className="grid grid-3">
          {features.map((f) => (
            <Card key={f.title} title={
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: 10 }}>
                <FeatureIcon emoji={f.icon} /> {f.title}
              </span>
            } description={f.text} />
          ))}
        </div>
      </Section>

      <Section title="Selected projects" description="A selection of work across product engineering and platform initiatives.">
        <div className="grid grid-3">
          {featured.map((p) => (
            <Card
              key={p.id}
              title={p.title}
              description={p.summary}
              footer={<CTAButton href={p.link} variant="ghost">View project →</CTAButton>}
            >
              <div className="muted" style={{ fontSize: 14, marginTop: 8 }}>
                Stack: {p.stack.join(', ')}
              </div>
            </Card>
          ))}
        </div>
      </Section>

      <Section title="What people say" description="A few kind words from people I’ve worked with.">
        <div className="grid grid-3">
          {(blog.slice(0,3)).map((t) => (
            <Card key={t.id} description={`“${t.excerpt}”`} footer={<div className="muted">— {t.author}</div>} />
          ))}
        </div>
      </Section>

      <section className="section" style={{ paddingTop: '0' }}>
        <div className="container card" style={{ background: 'var(--color-surface)' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16, flexWrap: 'wrap' }}>
            <div>
              <h3 style={{ margin: 0 }}>Have a project in mind?</h3>
              <p className="muted" style={{ margin: '6px 0 0' }}>I can help you design, build, and ship it.</p>
            </div>
            <div style={{ display: 'flex', gap: 10 }}>
              <CTAButton to="/contact" variant="primary">Contact</CTAButton>
              <CTAButton to="/projects" variant="ghost">See more work</CTAButton>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
