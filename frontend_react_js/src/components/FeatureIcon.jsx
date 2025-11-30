 /**
  * PUBLIC_INTERFACE
  * FeatureIcon
  * Small circular icon container for feature lists.
  */
export default function FeatureIcon({ emoji = '💡' }) {
  return (
    <div style={{
      width: 40, height: 40, borderRadius: 12, display: 'grid', placeItems: 'center',
      background: 'rgba(37,99,235,0.12)', color: 'var(--color-primary)'
    }}>
      <span aria-hidden>{emoji}</span>
    </div>
  );
}
