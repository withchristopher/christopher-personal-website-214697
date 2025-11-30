import { useTheme } from '../hooks/useTheme';

/**
 * PUBLIC_INTERFACE
 * ThemeToggle
 * Toggle button for light/dark mode with localStorage persistence.
 */
export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  return (
    <button
      className="theme-toggle"
      onClick={toggleTheme}
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
      title="Toggle theme"
    >
      {theme === 'light' ? '🌙 Dark' : '☀️ Light'}
    </button>
  );
}
