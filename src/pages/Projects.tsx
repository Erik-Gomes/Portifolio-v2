import { useLanguage } from '../contexts/LanguageContext';

interface Project {
    id: number;
    title: string;
    description: string;
    techs: string[];
    repoLink: string;
}

export default function Projects() {
    const { t } = useLanguage();

    const projectsList: Project[] = [
        {
            id: 1,
            title: 'Algoritmo de Adoção de Animais',
            description:
                'Projeto de graduação focado em um sistema de recomendação para adoção de animais utilizando a técnica de Similaridade de Cossenos.',
            techs: [
                'Algoritmos',
                'Lógica de Programação',
                'Estrutura de Dados',
            ],
            repoLink: 'https://github.com/Erik-Gomes/ong-animal-app',
        }
        
    ];

    return (
        <section className="pt-24 pb-20 px-6 md:px-12 bg-[#eef5fd] min-h-screen">
            <div className="max-w-6xl mx-auto">

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projectsList.map((project) => (
                        <div
                            key={project.id}
                            className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow flex flex-col h-full border border-gray-100"
                        >
                            <h3 className="text-2xl font-bold text-[#005F7E] mb-3">
                                {project.title}
                            </h3>

                            <p className="text-gray-600 mb-6 flex-grow leading-relaxed">
                                {project.description}
                            </p>

                            {/* Tags de Tecnologias */}
                            <div className="flex flex-wrap gap-2 mb-8">
                                {project.techs.map((tech) => (
                                    <span
                                        key={tech}
                                        className="px-3 py-1 bg-[#EAF4FF] text-[#053546] text-sm font-bold rounded-md"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            {/* Botão do Repositório */}
                            <a
                                href={project.repoLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full py-3 bg-[#62C0DE] text-[#053546] font-bold text-center rounded-xl hover:bg-[#005F7E] hover:text-white transition-colors flex items-center justify-center gap-2"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="20"
                                    height="20"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                </svg>
                                {t.projects.viewRepo}
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
