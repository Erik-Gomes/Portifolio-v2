import { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

// Importação das imagens (ajuste os nomes conforme renomeou)
import senaiArduino from '../assets/certification/SENAI-Arduino.jpeg';
import senaiCloud from '../assets/certification/SENAI-Cloud.jpeg';
import senaiIA from '../assets/certification/SENAI-IA.jpeg';
import gitGithub from '../assets/certification/Git-e-GitHub.svg';
import reactImersao from '../assets/certification/Erik-Gomes-Imersao-React.svg';
import fundPOO from '../assets/certification/DIO-Fundamentos-da-POO.svg';
import pilarPOO from '../assets/certification/DIO-Pilares-da-POO.svg';
import SoftColab from '../assets/certification/DIO-Desenvilvimento-de-Soft.-Colab..svg'

interface Certificate {
    id: number;
    image: string;
    title: string;
}

export default function Certifications() {
    const { t } = useLanguage();
    const [selectedImg, setSelectedImg] = useState<string | null>(null);

    const certificates: Certificate[] = [
        { id: 1, image: senaiArduino, title: 'SENAI - Arduino' },
        { id: 2, image: senaiCloud, title: 'SENAI - Google Cloud' },
        { id: 3, image: senaiIA, title: 'SENAI - Inteligência Artificial' },
        { id: 4, image: gitGithub, title: 'DIO - Git & GitHub' },
        { id: 6, image: fundPOO, title: 'DIO - Fundamentos da POO' },
        { id: 7, image: pilarPOO, title: 'DIO - Pilares da POO' },
        { id: 8, image: SoftColab, title: 'DIO - Desenvolvimento de Soft. Colab.' },
        { id: 5, image: reactImersao, title: 'Alura - Imersão React' },
        // Adicione os outros certificados da DIO e GFT aqui seguindo o mesmo padrão
    ];

    return (
        <section id="certifications" className="py-20 px-6 md:px-12 bg-white">
            <div className="max-w-6xl mx-auto">
                {/* Grid de Certificados */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {certificates.map((cert) => (
                        <div
                            key={cert.id}
                            className="group relative overflow-hidden rounded-2xl shadow-lg cursor-pointer bg-[#EAF4FF] transition-all hover:-translate-y-2 hover:shadow-2xl"
                            onClick={() => setSelectedImg(cert.image)}
                        >
                            <img
                                src={cert.image}
                                alt={cert.title}
                                className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            {/* Overlay no Hover */}
                            <div className="absolute inset-0 bg-[#005F7E]/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-4">
                                <h3 className="text-[#EAF4FF] font-bold text-lg text-center mb-4">
                                    {cert.title}
                                </h3>
                                <span className="px-4 py-2 bg-[#62C0DE] text-[#053546] rounded-lg font-bold text-sm">
                                    {t.certs.viewBtn}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Modal / Lightbox */}
            {selectedImg && (
                <div
                    className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4 md:p-10 animate-in fade-in duration-300"
                    onClick={() => setSelectedImg(null)}
                >
                    <button className="absolute top-5 right-5 text-white text-4xl hover:text-[#62C0DE] transition-colors">
                        &times;
                    </button>
                    <img
                        src={selectedImg}
                        alt="Certificado Expandido"
                        className="max-w-full max-h-full rounded-lg shadow-2xl animate-in zoom-in duration-300"
                    />
                </div>
            )}
        </section>
    );
}
