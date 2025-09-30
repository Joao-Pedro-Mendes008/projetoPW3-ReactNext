'use client';

import { useTheme } from '../../context/ThemeContext';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import LoadingSpinner from '../../components/LoadingSpinner';
import ThemeToggleButton from '../../components/ThemeToogleButton';

export default function DefaultPage() {
  const { isDark } = useTheme();

  return (
    <div className={`min-h-screen transition-colors duration-300 ${isDark ? 'bg-gray-900 text-gray-100' : 'bg-gray-50 text-gray-900'}`}>
      <Header />

      <main className="w-full max-w-4xl mx-auto px-6 py-10 space-y-10">

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Fortnite</h2>
          <img
            src="https://t.ctcdn.com.br/WD904b00rO6NykNqDpvrR8ewIJU=/768x432/smart/i341793.jpeg"
            alt="Fortnite"
            className="w-full max-h-[400px] object-cover rounded-lg shadow-md"
          />
          <p className="text-gray-700 dark:text-gray-600 leading-relaxed">
            Fortnite capítulo 1.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Mesa de Ping</h2>
          <img
            src="https://a-static.mlcdn.com.br/1500x1500/mesa-de-ping-pong-15mm-olimpic-oficial/magazineluiza/202645500/e1636e729ab047df257703c98106cd20.jpg"
            alt="Mesa de ping pong"
            className="w-full max-h-[400px] object-cover rounded-lg shadow-md"
          />
          <p className="text-gray-700 dark:text-gray-600 leading-relaxed">
            Mesa muito incrível de ping pong, você nunca viu uma igual.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Mesa de Pong</h2>
          <img
            src="https://a-static.mlcdn.com.br/1500x1500/mesa-de-ping-pong-15mm-olimpic-oficial/magazineluiza/202645500/e1636e729ab047df257703c98106cd20.jpg"
            alt="Mesa de ping pong"
            className="w-full max-h-[400px] object-cover rounded-lg shadow-md"
          />
          <p className="text-gray-700 dark:text-gray-600 leading-relaxed">
            Mesa muito incrível de ping pong, você nunca viu uma igual.
          </p>
        </section>
      </main>

      <Footer />
    </div>
  );
}
