import { useLanguage } from '../contexts/LanguageContext';
import ilustracao from '../assets/ilustracao.svg';

export default function Hero() {
    const { t } = useLanguage();

    return (
        <section
            id="about-me"
            className="pt-32 pb-16 px-6 md:px-12 min-h-screen flex flex-col md:flex-row items-center justify-between gap-12"
        >
            {/* Texto e Conteúdo */}
            <div className="flex-1 max-w-2xl text-center md:text-left">
                <h1 className="text-4xl md:text-6xl font-bold text-[#005F7E] mb-4">
                    {t.hero.greeting}{' '}
                    <span className="text-[#62C0DE]">Erik Gomes</span>
                </h1>
                <h2 className="text-xl md:text-2xl font-semibold text-gray-600 mb-6">
                    {t.hero.role}
                </h2>
                <p className="text-[#005F7E] leading-relaxed mb-8 text-lg font-medium opacity-90">
                    {t.hero.description}
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                    <a
                        href="/Portifolio-v2/#/projects"
                        className="px-8 py-3 bg-[#005F7E] text-[#EAF4FF] rounded-xl font-bold hover:bg-[#053546] transition-all shadow-lg hover:shadow-xl text-center"
                    >
                        {t.hero.btnProjects}
                    </a>
                    <a
                        href="https://github.com/Erik-Gomes"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-8 py-3 border-2 border-[#005F7E] text-[#005F7E] rounded-xl font-bold hover:shadow-xl hover:bg-[#d7e7f7] transition-all text-center"
                    >
                        {t.hero.btnGithub}
                    </a>
                </div>
            </div>

            {/* Ilustração com Animação */}
            <div className="flex-1 flex justify-center items-center">
                {/* A classe animate-float vem da configuração que colocamos no index.css */}
                <div className="relative w-full max-w-md animate-float">
                    <img
                        src={ilustracao}
                        alt="Ilustração Desenvolvedor"
                        className="w-full h-auto drop-shadow-2xl"
                    />
                </div>
            </div>
        </section>
    );
}
