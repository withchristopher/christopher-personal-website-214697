import { env } from '../utils/env';

/**
 * PUBLIC_INTERFACE
 * initAnalytics
 * Initializes analytics provider (placeholder).
 * In step 1.3 we will wire PostHog. This function must be safe to call even without envs.
 */
export function initAnalytics() {
  const enabled = env.NODE_ENV !== 'test';
  if (!enabled) return;
  // Placeholder: No-op initialization for now
  // console.info('[analytics] init - placeholder');
}

/**
 * PUBLIC_INTERFACE
 * track
 * Sends a tracking event (no-op placeholder if analytics not configured).
 */
export function track(event, properties = {}) {
  // Placeholder no-op
  // console.debug('[analytics] track', event, properties);
}
