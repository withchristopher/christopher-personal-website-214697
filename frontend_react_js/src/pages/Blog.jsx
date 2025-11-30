import Section from '../components/Section';
import Card from '../components/Card';
import blog from '../data/blog.json';

/**
 * PUBLIC_INTERFACE
 * Blog
 * Simple list of entries (placeholder content).
 */
export default function Blog() {
  return (
    <Section title="Notes & writing" description="Occasional thoughts on product and engineering.">
      <div className="grid grid-3">
        {blog.map((b) => (
          <Card
            key={b.id}
            title={b.title}
            description={b.excerpt}
            footer={<span className="muted">{b.date}</span>}
          />
        ))}
      </div>
    </Section>
  );
}
