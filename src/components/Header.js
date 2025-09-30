'use client';
import { useAuth } from '@/context/AuthContext';
import { useRouter } from 'next/navigation';
import ThemeToggleButton from './ThemeToogleButton';

export default function Header() {
  const { logout } = useAuth();
  const router = useRouter();

  return (
    <header className="flex justify-around items-center py-4 border-b border-gray-200 dark:border-gray-700">
      <h1 className="text-xl font-semibold">🧭 Meu App</h1>
      <nav className="space-x-4">
        <ThemeToggleButton />
        <button
          onClick={() => router.push('/default')}
          className="text-sm text-blue-600 hover:underline"
        >
          Início
        </button>
        <button
          onClick={logout}
          className="text-sm text-red-600 hover:underline"
        >
          Sair
        </button>
      </nav>
    </header>
  );
}
