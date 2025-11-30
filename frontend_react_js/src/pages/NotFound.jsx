import Section from '../components/Section';
import CTAButton from '../components/CTAButton';

/**
 * PUBLIC_INTERFACE
 * NotFound
 * 404 page for unknown routes.
 */
export default function NotFound() {
  return (
    <Section title="Page not found" description="The page you’re looking for doesn’t exist.">
      <CTAButton to="/" variant="primary">Go home</CTAButton>
    </Section>
  );
}
