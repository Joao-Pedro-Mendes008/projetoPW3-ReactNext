'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import Cookies from 'js-cookie';
import { ThemeProvider } from '../context/ThemeContext';

import Principal from '../components/principal';
import Parametro, { Texto1, Texto2, Texto3 } from '../components/parametro';
import Footer from '../components/footer';
import Header from '../components/header';
import LoadingSpinner from '../components/LoadingSpinner';

export default function Default() {
    const router = useRouter();
    const [isLoading, setLoading] = useState(false);

    const handleLogout = () => {
        setLoading(true);
        Cookies.remove('authToken');
        setTimeout(() => {
            router.push('/login');
        }, 600);
    };

    return (
        <div>
            <Header />
            <ThemeProvider />
            <Principal />
            <Parametro />
            <Texto1 />
            <Texto2 />
            <Texto1 />
            <Texto2 />
            <Texto3 cor="red" tipo="bold">
                .... Texto texto 3 ....
            </Texto3>

            <button
                onClick={handleLogout}
                className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 
          focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2
          transition-colors"
            >
                Sair ...
            </button>
            <Footer />
            {isLoading && <LoadingSpinner />}
        </div>
    );
}
