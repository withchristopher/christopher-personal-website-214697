import { env } from '../utils/env';

/**
 * PUBLIC_INTERFACE
 * getFeatureFlags
 * Returns a map of feature flags parsed from REACT_APP_FEATURE_FLAGS.
 * Supported format: "flagA=true,flagB=false,flagC"
 */
export function getFeatureFlags() {
  const raw = env.FEATURE_FLAGS || '';
  const flags = {};
  raw.split(',').map(s => s.trim()).filter(Boolean).forEach(pair => {
    const [k, v] = pair.split('=');
    if (!k) return;
    if (typeof v === 'undefined') {
      flags[k] = true;
    } else {
      const val = v.toLowerCase();
      flags[k] = val === 'true' || val === '1' || val === 'yes';
    }
  });
  return flags;
}
