import React from "react";
import {useRouter} from "next/navigation";

export default function Header() {
  const router = useRouter()
  const handleLogout = () => {
    console.log("Usuário saiu");
    router.push('/login');
  };
  return (
    <header className="bg-blue-600 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">Meu App</h1>
        <nav>
          <button 
            onClick={() => router.push('/default')}
            className="mr-4 hover:underline"
          >
            Home
          </button>
          <button
            onClick={handleLogout}
            className="hover:underline"
            >
              Sair
          </button>
        </nav>
      </div>
    </header>
  );
}