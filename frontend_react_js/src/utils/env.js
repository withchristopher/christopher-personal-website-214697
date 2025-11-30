const read = (key, fallback = '') => {
  const v = process.env[key];
  return typeof v === 'string' && v.length > 0 ? v : fallback;
};

// PUBLIC_INTERFACE
export const env = {
  /** Base API endpoint for future integrations */
  API_BASE: read('REACT_APP_API_BASE', ''),
  BACKEND_URL: read('REACT_APP_BACKEND_URL', ''),
  FRONTEND_URL: read('REACT_APP_FRONTEND_URL', ''),
  WS_URL: read('REACT_APP_WS_URL', ''),
  NODE_ENV: read('REACT_APP_NODE_ENV', process.env.NODE_ENV || 'development'),
  NEXT_TELEMETRY_DISABLED: read('REACT_APP_NEXT_TELEMETRY_DISABLED', '1'),
  ENABLE_SOURCE_MAPS: read('REACT_APP_ENABLE_SOURCE_MAPS', 'true'),
  PORT: read('REACT_APP_PORT', '3000'),
  TRUST_PROXY: read('REACT_APP_TRUST_PROXY', 'false'),
  LOG_LEVEL: read('REACT_APP_LOG_LEVEL', 'info'),
  HEALTHCHECK_PATH: read('REACT_APP_HEALTHCHECK_PATH', '/healthz'),
  FEATURE_FLAGS: read('REACT_APP_FEATURE_FLAGS', ''),
  EXPERIMENTS_ENABLED: read('REACT_APP_EXPERIMENTS_ENABLED', 'false'),
};
