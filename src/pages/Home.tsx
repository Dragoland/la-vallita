import { useEffect } from 'react';
import { useLocation } from 'react-router';
import Hero from '@/sections/Hero';
import Historia from '@/sections/Historia';
import Legado from '@/sections/Legado';
import Reconocimientos from '@/sections/Reconocimientos';
import Medios from '@/sections/Medios';
import Catalogo from '@/sections/Catalogo';
import Visitanos from '@/sections/Visitanos';
import Consejos from '@/sections/Consejos';
import Contacto from '@/sections/Contacto';
import BitCriollo from '@/sections/BitCriollo';

export default function Home() {
    const { hash } = useLocation();

    useEffect(() => {
        if (hash) {
            const el = document.querySelector(hash);
            if (el) el.scrollIntoView({ behavior: 'smooth' });
        }
    }, [hash]);

    return (
        <main>
        <Hero />
        <Historia />
        <Legado />
        <Reconocimientos />
        <Medios />
        <Catalogo />
        <Visitanos />
        <Consejos />
        <Contacto />
        <BitCriollo />
        </main>
    );
}
