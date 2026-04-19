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
                'Atualmente no 5º semestre de Análise e Desenvolvimento de Sistemas na Fatec Indaiatuba. Minha jornada começou com Arduino e C++, e hoje foco em construir aplicações modernas com Java (Spring Boot) e React.',
            btnCerts: 'Ver Certificados',
            btnGithub: 'GitHub',
        },
        about: {
            title: 'Sobre Mim',
            p1:
                'Olá! Meu nome é Erik, tenho ' +
                myAge +
                ' anos e sou apaixonado por tecnologia desde que me lembro. Atualmente, estou no primeiro semestre da faculdade de Análise e Desenvolvimento de Sistemas (ADS), onde estou explorando ainda mais meu interesse em programação e desenvolvimento de software.',
            p2: 'Minha jornada com programação começou cerca de quatro anos atrás, quando tive meu primeiro contato com o mundo da codificação através do Arduino. Aprendi a programar em C++ com videos no youtube enquanto explorava os projetos que podem ser realizados com esse microcontrolador. Meu entusiasmo me levou a fazer um curso especializado em Arduino no SENAI, onde pude aprimorar minhas habilidades e entender mais profundamente os conceitos de programação.',
            p3: 'Atualmente, estou ansioso para expandir meu conhecimento e ganhar experiência profissional como programador. Estou dedicado a aprender novas tecnologias e a aprimorar minhas habilidades de codificação enquanto embarco nesta jornada emocionante.',
            p4: 'Estou aberto a oportunidades de estágio ou projetos que me permitam colocar em prática o que aprendi até agora e continuar crescendo como desenvolvedor. Estou confiante de que minha paixão pela tecnologia e meu compromisso com a aprendizagem contínua me tornarão um ativo valioso para qualquer equipe de desenvolvimento.',
            p5: 'Obrigado por visitar meu perfil e estou ansioso para conectar-me com profissionais da área e explorar novas oportunidades juntos!',
            backBtn: 'Voltar para o Início',
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
            btnCerts: 'View Certificates',
            btnGithub: 'GitHub',
        },
        about: {
            title: 'About Me',
            p1:
                "Hello! My name is Erik, I'm " +
                myAge +
                " years old, and I've been passionate about technology for as long as I can remember. Currently, I'm in the first semester of college studying Analysis and Development of Systems (ADS), where I'm further exploring my interest in programming and software development.",
            p2: 'My journey with programming started about four years ago when I had my first contact with the coding world through Arduino. I learned to program in C++ while exploring fascinating projects that can be done with this microcontroller. My enthusiasm led me to take a specialized Arduino course at SENAI, where I was able to enhance my skills and gain a deeper understanding of programming concepts.',
            p3: "Currently, I'm eager to expand my knowledge and gain professional experience as a programmer. I'm dedicated to learning new technologies and improving my coding skills as I embark on this exciting journey.",
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
