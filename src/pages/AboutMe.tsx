// src/pages/AboutMe.tsx
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import ilustracao from '../assets/ilustracao.svg';

export default function AboutMe() {
    const { t } = useLanguage();

    return (
        <div className="pt-24 pb-16 px-6 md:px-12 min-h-screen flex flex-col items-center max-w-4xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-700">

            <div className="space-y-6 text-lg text-gray-700 leading-relaxed font-medium">
                <p>{t.about.p1}</p>
                <p>{t.about.p2}</p>
                <p>{t.about.p3}</p>
                <p>{t.about.p4}</p>
                <p className="font-bold text-[#005F7E]">{t.about.p5}</p>
            </div>

            <div className="mt-12">
                <Link
                    to="/"
                    className="px-8 py-3 bg-[#005F7E] text-[#EAF4FF] rounded-xl font-bold hover:bg-[#053546] transition-all shadow-lg hover:shadow-xl inline-block"
                >
                    &larr; {t.about.backBtn}
                </Link>
            </div>
        </div>
    );
}
