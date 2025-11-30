 /**
  * PUBLIC_INTERFACE
  * Card
  * Surface card with title, description, and optional footer.
  */
export default function Card({ title, description, footer, children }) {
  return (
    <div className="card scale-in">
      {title && <h3 style={{ marginTop: 0 }}>{title}</h3>}
      {description && <p className="muted">{description}</p>}
      {children}
      {footer && <div style={{ marginTop: 12 }}>{footer}</div>}
    </div>
  );
}
