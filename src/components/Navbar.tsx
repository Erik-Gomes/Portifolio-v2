import { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const { t, language, toggleLanguage } = useLanguage();
    const location = useLocation();

    const isHome = location.pathname === '/';
    const navLinks = [
    //{ href: isHome ? "#" : "/", label: t.nav.home },
    { href: "/sobre", label: t.nav.about },
    { href: isHome ? "#certifications" : "/#certifications", label: t.nav.certs },
    { href: isHome ? "#game" : "/#game", label: t.nav.game },
    ];

    return (
        <nav className="fixed top-0 w-full bg-[#62C0DE] h-16 flex items-center justify-end px-8 z-50 shadow-md">
            {/* Nome/Logo 
            <div className="flex items-center">
                <h2 className="font-bold text-[#EAF4FF] text-xl tracking-tight">
                    Erik Gomes
                </h2>
            </div>
                */}
            {/* Menu Desktop */}
            <div className="hidden md:flex items-center gap-8  ">
                {navLinks.map((link) => (
                    <Link
                        key={link.href}
                        to={link.href}
                        className="text-[#EAF4FF] font-semibold hover:text-[#053546] transition-colors duration-300"
                    >
                        {link.label}
                    </Link>
                ))}

                {/* Botão de Troca de Idioma (Desktop) */}
                <button
                    onClick={toggleLanguage}
                    className="ml-4 flex items-center gap-2 px-4 py-1.5 bg-[#053546] text-[#EAF4FF] rounded-full font-bold text-sm hover:bg-[#005F7E] transition-all transform hover:scale-105 active:scale-95 shadow-sm"
                >
                    <span
                        className={
                            language === 'pt' ? 'opacity-100' : 'opacity-50'
                        }
                    >
                        PT
                    </span>
                    <span className="text-[#62C0DE]">|</span>
                    <span
                        className={
                            language === 'en' ? 'opacity-100' : 'opacity-50'
                        }
                    >
                        EN
                    </span>
                </button>
            </div>

            {/* Botão Hamburger (Mobile) */}
            <button
                className="md:hidden text-[#EAF4FF] p-2 focus:outline-none"
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Toggle Menu"
            >
                <div className="w-6 h-5 relative flex flex-col justify-between">
                    <span
                        className={`w-full h-0.5 bg-current transition-all ${isOpen ? 'rotate-45 translate-y-2' : ''}`}
                    />
                    <span
                        className={`w-full h-0.5 bg-current transition-all ${isOpen ? 'opacity-0' : ''}`}
                    />
                    <span
                        className={`w-full h-1 bg-current transition-all ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}
                    />
                </div>
            </button>

            {/* Menu Mobile (Dropdown) */}
            {isOpen && (
                <div className="absolute top-16 left-0 w-full bg-[#62C0DE] flex flex-col items-center py-8 gap-6 md:hidden shadow-xl border-t border-[#EAF4FF]/10 animate-in fade-in slide-in-from-top-4">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            to={link.href}
                            onClick={() => setIsOpen(false)}
                            className="text-[#EAF4FF] font-bold text-lg hover:text-[#053546]"
                        >
                            {link.label}
                        </Link>
                    ))}

                    <div className="h-px w-2/3 bg-[#EAF4FF]/20 my-2" />

                    {/* Botão de Idioma (Mobile) */}
                    <button
                        onClick={() => {
                            toggleLanguage();
                            setIsOpen(false);
                        }}
                        className="px-8 py-3 bg-[#053546] text-[#EAF4FF] rounded-xl font-bold text-base flex items-center gap-3"
                    >
                        {language === 'pt'
                            ? 'Mudar para Inglês'
                            : 'Switch to Portuguese'}
                        <span className="text-xs opacity-60">
                            ({language.toUpperCase()})
                        </span>
                    </button>
                </div>
            )}
        </nav>
    );
}
