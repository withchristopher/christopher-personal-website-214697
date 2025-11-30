 /**
  * PUBLIC_INTERFACE
  * Section
  * Wrapper for page sections with consistent spacing and optional title/description.
  */
export default function Section({ title, description, children, id }) {
  return (
    <section id={id} className="section">
      <div className="container">
        {title && <h2 className="section-title">{title}</h2>}
        {description && <p className="section-description">{description}</p>}
        <div style={{ marginTop: title || description ? '24px' : 0 }}>
          {children}
        </div>
      </div>
    </section>
  );
}
