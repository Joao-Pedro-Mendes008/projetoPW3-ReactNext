'use client';
import { useTheme } from '@/context/ThemeContext';

export default function ThemeToggleButton() {
  const { isDark, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="mt-4 px-4 py-2 text-sm rounded border border-gray-300 dark:border-gray-600
                 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
    >
      {isDark ? '🌞 Modo Claro' : '🌙 Modo Escuro'}
    </button>
  );
}