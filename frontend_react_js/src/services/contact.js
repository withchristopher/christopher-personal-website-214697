import { env } from '../utils/env';

/**
 * PUBLIC_INTERFACE
 * submitContact
 * Placeholder contact submission that resolves immediately.
 * Future step: integrate Formspree/other provider via env.
 */
export async function submitContact(payload) {
  const { name, email, message } = payload || {};
  if (!name || !email || !message) {
    // Simulate basic validation failure
    return { ok: false, error: 'Missing required fields.' };
  }
  // No backend; act as successful no-op
  return { ok: true, provider: 'noop', env: { FRONTEND_URL: env.FRONTEND_URL } };
}
