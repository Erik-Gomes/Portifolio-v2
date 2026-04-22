import { createContext, useState, useContext, type ReactNode } from 'react';
import { translations } from '../utils/translations';

type LanguageType = 'pt' | 'en';

interface LanguageContextData {
    language: LanguageType;
    toggleLanguage: () => void;
    t: typeof translations.pt;
}

const LanguageContext = createContext<LanguageContextData | undefined>(
    undefined,
);

export function LanguageProvider({ children }: { children: ReactNode }) {
    const [language, setLanguage] = useState<LanguageType>('pt');

    const toggleLanguage = () => {
        setLanguage((prev) => (prev === 'pt' ? 'en' : 'pt'));
    };

    const t = translations[language] as typeof translations.pt;

    return (
        <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    const context = useContext(LanguageContext);
    if (context === undefined) {
        throw new Error(
            'useLanguage deve ser usado dentro de um LanguageProvider',
        );
    }
    return context;
}
