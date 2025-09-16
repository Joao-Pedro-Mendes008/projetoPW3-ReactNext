import React from 'react';

export default function Footer () {
  return (
    <footer className="fixed bottom-0 left-0 w-full bg-blue-600 text-white text-sm shadow-inner z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <p>&copy; {new Date().getFullYear()} João Pedro Mendes Fernandes </p>
        <div className="space-x-4">
          <a href="#" className="hover:text-blue-200 transition-colors">Privacidade</a>
          <a href="#" className="hover:text-blue-200 transition-colors">Termos</a>
        </div>
      </div>
    </footer>
  );
};