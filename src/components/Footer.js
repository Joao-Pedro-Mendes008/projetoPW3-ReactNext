export default function Footer() {
  return (
    <footer className="mt-12 pt-6 border-t border-gray-200 dark:border-gray-700 text-sm text-center text-gray-500">
      © {new Date().getFullYear()} Meu App. Todos os direitos reservados.
    </footer>
  );
}
