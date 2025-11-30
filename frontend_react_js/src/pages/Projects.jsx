import Section from '../components/Section';
import Card from '../components/Card';
import CTAButton from '../components/CTAButton';
import projects from '../data/projects.json';

/**
 * PUBLIC_INTERFACE
 * Projects
 * Projects index page.
 */
export default function Projects() {
  return (
    <Section title="Projects" description="A broader look at things I’ve built.">
      <div className="grid grid-3">
        {projects.map((p) => (
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
  );
}
