import './globals.css';
import { ThemeProvider } from '@/context/ThemeContext';
import { AuthProvider } from '@/context/AuthContext';
import RouteLoader from '@/components/RouteLoader';

export const metadata = {
  title: 'Meu App',
  description: 'Sistema com autenticação e tema escuro',
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt">
      <body>
        <AuthProvider>
          <ThemeProvider>
            <RouteLoader />
            {children}
          </ThemeProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
