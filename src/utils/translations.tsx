function calculateAge(birthDate: string): number {
    const today = new Date();
    const birth = new Date(birthDate);
    let age = today.getFullYear() - birth.getFullYear();
    const monthDiff = today.getMonth() - birth.getMonth();

    if (
        monthDiff < 0 ||
        (monthDiff === 0 && today.getDate() < birth.getDate())
    ) {
        age--;
    }

    return age;
}

const myAge = calculateAge('2006-02-06');

export const translations = {
    pt: {
        nav: {
            home: 'Início',
            about: 'Sobre Mim',
            certs: 'Certificados',
            projects: 'Projetos',
        },
        hero: {
            greeting: 'Olá, eu sou',
            role: 'Estudante de ADS & Desenvolvedor de Sistemas',
            description:
                'Atualmente estou no 5º semestre de Análise e Desenvolvimento de Sistemas na Fatec Indaiatuba. Minha jornada começou com Arduino e C++, e hoje foco em construir aplicações modernas como Java (Spring Boot) e React.',
            btnProjects: 'Ver Projetos',
            btnGithub: 'GitHub',
        },
        about: {
            title: 'About Me',
            p1:
                'Hello! My name is Erik, I am ' +
                myAge +
                ' years old, and I have been curious about the tech world since I was a child. Currently, I am in my fifth semester studying Systems Analysis and Development (ADS), where I am further exploring my interest in programming and software development.',
            p2: 'My journey as a programmer started around the age of 16, when I had my first contact with coding through Arduino and C++. My enthusiasm led me to specialized courses at SENAI, where I solidified my programming logic and began to see technology as a tool to solve real-world problems.',
            p3: 'Currently, I work professionally with the implementation and development of corporate systems. This experience in complex projects has given me a mature perspective on real-world software architecture, with a constant focus on solving business challenges and building scalable and efficient solutions.',
            p4: (
                <>
                    Beyond the corporate environment, I believe in using technology
                    to generate social impact. I am a volunteer at{' '}
                    <a
                        href="https://www.instagram.com/uparindaiatuba/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#005F7E] font-bold hover:underline"
                    >
                        UPAR
                    </a>
                    , an animal protection NGO in Indaiatuba, an experience that
                    directly inspired my graduation project: the development of an
                    animal adoption recommendation system using the Cosine Similarity
                    algorithm. This project merged my dedication to the animal cause
                    with my deepening knowledge of algorithms and data structures.
                </>
            ),
            p5: 'Thank you for visiting my portfolio! I am always looking for technical challenges that allow me to evolve. Feel free to reach out!',
            backBtn: 'Back to Home',
        },
        certs: {
            title: 'Minhas Certificações',
            subtitle: 'Cursos e aperfeiçoamentos técnicos que realizei.',
            viewBtn: 'Ver certificado',
        },
        projects: {
            title: 'Meus Projetos',
            subtitle: 'Soluções, arquiteturas e algoritmos que desenvolvi.',
            viewRepo: 'Ver Repositório',
        },
    },
    en: {
        nav: {
            home: 'Home',
            about: 'About Me',
            certs: 'Certificates',
            projects: 'Projects',
        },
        hero: {
            greeting: 'Hello, I am',
            role: 'Software Development Student & Developer',
            description:
                'Currently in my 5rd semester of Systems Analysis and Development at Fatec Indaiatuba. My journey started with Arduino and C++, and today I focus on building modern applications with Java (Spring Boot) and React.',
            btnProjects: 'View Projects',
            btnGithub: 'GitHub',
        },
        about: {
            title: 'About Me',
            p1:
                "Hello! My name is Erik, I'm " +
                myAge +
                " years old, and I've been passionate about technology for as long as I can remember. Currently, I'm in the first semester of college studying Analysis and Development of Systems (ADS), where I'm further exploring my interest in programming and software development.",
            p2: 'My journey with programming started about four years ago when I had my first contact with the coding world through Arduino. I learned to program in C++ while exploring fascinating projects that can be done with this microcontroller. My enthusiasm led me to take a specialized Arduino course at SENAI, where I was able to enhance my skills and gain a deeper understanding of programming concepts.',
            p3: 'Currently, I work professionally with the implementation and development of corporate systems. This experience in complex projects has given me a mature perspective on real-world software architecture, with a constant focus on solving business challenges and building scalable and efficient solutions.',
            p4: "I'm open to internship opportunities or projects that allow me to apply what I've learned so far and continue to grow as a developer. I'm confident that my passion for technology and my commitment to continuous learning will make me a valuable asset to any development team.",
            p5: 'Thank you for visiting my profile, and I look forward to connecting with professionals in the field and exploring new opportunities together!',
            backBtn: 'Back to Home',
        },
        certs: {
            title: 'My Certifications',
            subtitle: "Technical courses and improvements I've completed.",
            viewBtn: 'View certificate',
        },
        projects: {
            title: 'My Projects',
            subtitle:
                "Solutions, architectures, and algorithms I've developed.",
            viewRepo: 'View Repository',
        },
    },
};
