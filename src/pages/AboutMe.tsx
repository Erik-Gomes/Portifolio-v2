// src/pages/AboutMe.tsx
import { useLanguage } from '../contexts/LanguageContext';

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
        </div>
    );
}
