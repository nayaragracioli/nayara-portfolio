import type { Language, CaseStudy } from '../types'

export const siteConfig = {
  name: 'Nayara Gracioli',
  email: 'SEU_EMAIL_AQUI',
  linkedin: 'SEU_LINKEDIN_AQUI',
  github: 'SEU_GITHUB_AQUI',
  resumePt: '/cv-nayara-pt.pdf',
  resumeEn: '/cv-nayara-en.pdf',
}

export const ui = {
  pt: {
    nav: {
      about: 'Sobre',
      work: 'Projetos',
      experience: 'Experiência',
      skills: 'Competências',
      contact: 'Contato',
    },
    hero: {
      eyebrow: 'SOFTWARE DEVELOPER',
      title: 'Transformando problemas em produtos digitais.',
      text: 'Desenvolvo aplicações web e soluções digitais combinando tecnologia, experiência do usuário, acessibilidade e pensamento de produto.',
      primary: 'Ver projetos',
      secondary: 'Entrar em contato',
    },
    about: {
      eyebrow: 'SOBRE',
      title: 'Engenharia me ensinou a entender problemas. Software me deu as ferramentas para resolvê-los.',
      p1: 'Sou Software Developer com experiência no desenvolvimento de produtos digitais, aplicações interativas e soluções internas.',
      p2: 'Minha trajetória começou na Engenharia, onde desenvolvi uma forte base de análise, melhoria de processos e resolução estruturada de problemas. Hoje aplico essa mesma forma de pensar ao desenvolvimento de software, trabalhando entre tecnologia, produto e experiência do usuário para transformar necessidades reais em soluções digitais.',
    },
    selected: {
      eyebrow: 'PROJETOS SELECIONADOS',
      title: 'Problemas reais. Soluções construídas na prática.',
      text: 'Uma seleção de projetos em que participei da criação, evolução ou validação de produtos e processos digitais.',
      view: 'Explorar case',
      note: 'Projeto profissional — alguns detalhes e elementos visuais foram omitidos ou recriados para preservar informações proprietárias.',
    },
    more: {
      eyebrow: 'OUTROS PROJETOS',
      title: 'Tecnologia é só uma parte da solução.',
      text: 'Outras iniciativas em que utilizei desenvolvimento, análise e melhoria de processos para resolver problemas do dia a dia.',
    },
    experience: {
      eyebrow: 'EXPERIÊNCIA',
      title: 'Uma trajetória construída entre tecnologia, produto e resolução de problemas.',
    },
    skills: {
      eyebrow: 'COMPETÊNCIAS',
      title: 'Ferramentas mudam. A capacidade de construir e resolver problemas permanece.',
    },
    contact: {
      eyebrow: 'CONTATO',
      title: 'Tem um problema interessante para resolver?',
      text: 'Vamos conversar sobre tecnologia, produtos digitais ou uma próxima oportunidade.',
      resume: 'Baixar currículo',
    },
    back: 'Voltar aos projetos',
    next: 'Próximo projeto',
  },
  en: {
    nav: {
      about: 'About',
      work: 'Work',
      experience: 'Experience',
      skills: 'Skills',
      contact: 'Contact',
    },
    hero: {
      eyebrow: 'SOFTWARE DEVELOPER',
      title: 'Turning problems into digital products.',
      text: 'I build web applications and digital solutions combining technology, user experience, accessibility, and product thinking.',
      primary: 'View my work',
      secondary: 'Get in touch',
    },
    about: {
      eyebrow: 'ABOUT',
      title: 'Engineering taught me how to understand problems. Software gave me the tools to solve them.',
      p1: "I'm a Software Developer with experience building digital products, interactive applications, and internal solutions.",
      p2: 'My background started in Engineering, where I developed a strong foundation in analysis, process improvement, and structured problem-solving. Today, I bring that same mindset to software development, working across technology, product, and user experience to turn real needs into digital solutions.',
    },
    selected: {
      eyebrow: 'SELECTED WORK',
      title: 'Real problems. Solutions built in practice.',
      text: 'A selection of projects where I contributed to creating, evolving, or validating digital products and processes.',
      view: 'View case study',
      note: 'Professional project — some details and visual elements have been omitted or recreated to protect proprietary information.',
    },
    more: {
      eyebrow: 'MORE WORK',
      title: 'Technology is only part of the solution.',
      text: 'Other initiatives where I used development, analysis, and process improvement to solve everyday problems.',
    },
    experience: {
      eyebrow: 'EXPERIENCE',
      title: 'A career built across technology, product, and problem-solving.',
    },
    skills: {
      eyebrow: 'SKILLS',
      title: 'Tools change. The ability to build and solve problems remains.',
    },
    contact: {
      eyebrow: 'CONTACT',
      title: 'Have an interesting problem to solve?',
      text: "Let's talk about technology, digital products, or a new opportunity.",
      resume: 'Download résumé',
    },
    back: 'Back to projects',
    next: 'Next project',
  },
} satisfies Record<Language, unknown>

export const featured = {
  pt: [
    {
      id: 'digital-book-platform',
      title: 'Plataforma de Livro Digital Interativo',
      summary: 'Desenvolvimento de uma plataforma de livro digital criada para transformar conteúdos educacionais em uma experiência web moderna, acessível e escalável para professores e estudantes.',
      stack: ['React', 'JavaScript', 'Tailwind CSS'],
      focus: ['Technical Ownership', 'Component Architecture', 'Accessibility'],
    },
    {
      id: 'early-childhood-book',
      eyebrow: 'INICIATIVA PROATIVA',
      title: 'Livro Digital Interativo para Educação Infantil',
      summary: 'Identifiquei uma oportunidade de evolução em uma experiência digital existente e transformei a ideia em pesquisa, prototipação, validação pedagógica e desenvolvimento de uma nova proposta de produto.',
      stack: ['React', 'JavaScript', 'Tailwind CSS', 'AI-Assisted Development'],
      focus: ['Product Discovery', 'UX/UI', 'Software Development'],
    },
    {
      id: 'ai-pipeline',
      title: 'Pipeline de Produção de Livros Digitais com IA',
      summary: 'Evolução e validação de um fluxo assistido por Inteligência Artificial criado para automatizar etapas repetitivas e tornar a produção de livros digitais mais rápida e consistente.',
      stack: [],
      focus: ['AI', 'Automation', 'Testing', 'Process Improvement'],
    },
  ],
  en: [
    {
      id: 'digital-book-platform',
      title: 'Interactive Digital Book Platform',
      summary: 'Development of a digital book platform designed to transform educational content into a modern, accessible, and scalable web experience for teachers and students.',
      stack: ['React', 'JavaScript', 'Tailwind CSS'],
      focus: ['Technical Ownership', 'Component Architecture', 'Accessibility'],
    },
    {
      id: 'early-childhood-book',
      eyebrow: 'PROACTIVE INITIATIVE',
      title: 'Interactive Digital Book for Early Childhood Education',
      summary: 'I identified an opportunity to improve an existing digital experience and turned the idea into research, prototyping, pedagogical validation, and the development of a new product concept.',
      stack: ['React', 'JavaScript', 'Tailwind CSS', 'AI-Assisted Development'],
      focus: ['Product Discovery', 'UX/UI', 'Software Development'],
    },
    {
      id: 'ai-pipeline',
      title: 'AI-Powered Digital Book Production Pipeline',
      summary: 'Evolution and validation of an AI-assisted workflow designed to automate repetitive steps and make digital book production faster and more consistent.',
      stack: [],
      focus: ['AI', 'Automation', 'Testing', 'Process Improvement'],
    },
  ],
}

export const moreProjects = {
  pt: [
    {
      title: 'Innovation & Knowledge Sharing Hub',
      text: 'Hub interno criado por iniciativa própria para centralizar projetos, documentações e conhecimento da equipe em um ambiente colaborativo e fácil de consultar.',
      stack: 'React · JavaScript · Tailwind CSS',
      focus: 'Knowledge Management · Collaboration · Process Improvement',
    },
    {
      title: 'Planejamento da Produção de Livros Digitais',
      text: 'Estruturação de um processo de planejamento para trazer previsibilidade à produção digital, apoiar a distribuição entre parceiros e antecipar necessidades de capacidade, prazo e orçamento.',
      stack: 'Google Sheets',
      focus: 'Production Planning · Data Analysis · Process Improvement',
    },
    {
      title: 'Desenvolvimento de Jogos Educacionais',
      text: 'Desenvolvimento de jogos educacionais para web, desde a construção de lógica e interações em JavaScript até o trabalho com estruturas reutilizáveis utilizando Phaser.',
      stack: 'JavaScript · HTML5 · CSS · Phaser',
      focus: 'Interactive Applications · Game Logic · Responsive Development',
    },
  ],
  en: [
    {
      title: 'Innovation & Knowledge Sharing Hub',
      text: 'Internal hub created proactively to centralize team projects, documentation, and knowledge in an accessible and collaborative environment.',
      stack: 'React · JavaScript · Tailwind CSS',
      focus: 'Knowledge Management · Collaboration · Process Improvement',
    },
    {
      title: 'Digital Book Production Planning',
      text: 'Creation of a production planning process to bring predictability to digital production, support partner allocation, and anticipate capacity, deadline, and budget needs.',
      stack: 'Google Sheets',
      focus: 'Production Planning · Data Analysis · Process Improvement',
    },
    {
      title: 'Educational Game Development',
      text: 'Development of educational web games, from building game logic and interactions in JavaScript to working with reusable structures using Phaser.',
      stack: 'JavaScript · HTML5 · CSS · Phaser',
      focus: 'Interactive Applications · Game Logic · Responsive Development',
    },
  ],
}

export const experience = {
  pt: [
    {
      when: '2025 — atual',
      place: 'Arco Educação',
      title: 'Software Development · Digital Products · EdTech',
      text: 'Desenvolvimento e evolução de soluções digitais para educação, com atuação em livros digitais, aplicações interativas, acessibilidade, Inteligência Artificial e melhoria de processos.',
    },
    {
      when: 'Kenzie Academy Brasil',
      place: 'Front-End Mentor',
      title: 'Mentoria técnica',
      text: 'Mentoria técnica em desenvolvimento web, suporte à resolução de problemas e acompanhamento da evolução de estudantes.',
    },
    {
      when: 'Experiências anteriores',
      place: 'Engineering · Research · Leadership',
      title: 'Base analítica',
      text: 'Minha trajetória anterior à tecnologia inclui melhoria contínua, análise de processos, pesquisa científica e liderança — experiências que construíram a base analítica que aplico hoje no desenvolvimento de software.',
    },
  ],
  en: [
    {
      when: '2025 — Present',
      place: 'Arco Educação',
      title: 'Software Development · Digital Products · EdTech',
      text: 'Development and evolution of digital solutions for education, working with digital books, interactive applications, accessibility, Artificial Intelligence, and process improvement.',
    },
    {
      when: 'Kenzie Academy Brasil',
      place: 'Front-End Mentor',
      title: 'Technical mentoring',
      text: 'Technical mentoring in web development, problem-solving support, and guidance throughout students learning journeys.',
    },
    {
      when: 'Previous experience',
      place: 'Engineering · Research · Leadership',
      title: 'Analytical foundation',
      text: 'My experience before software includes continuous improvement, process analysis, scientific research, and leadership — areas that built the analytical foundation I apply to software development today.',
    },
  ],
}

export const skills = [
  {
    title: 'Development',
    items: ['React', 'JavaScript', 'TypeScript', 'HTML5', 'CSS', 'Tailwind CSS', 'Python', 'Git'],
  },
  {
    title: 'Digital Products',
    items: ['Accessibility', 'UX', 'Responsive Development', 'Interactive Applications', 'UI Development'],
  },
  {
    title: 'AI & Automation',
    items: ['AI-Assisted Development', 'Prompt Engineering', 'Automation'],
  },
  {
    title: 'Ways of Working',
    items: ['Problem Solving', 'Process Improvement', 'Cross-functional Collaboration', 'Technical Documentation'],
  },
]

export const caseStudies: Record<Language, CaseStudy[]> = {
  pt: [
    {
      id: 'digital-book-platform',
      title: 'Plataforma de Livro Digital Interativo',
      summary: 'Desenvolvimento de uma plataforma de livro digital interativo criada para transformar materiais educacionais em uma experiência web moderna, acessível e escalável para professores e estudantes.',
      role: 'Software Developer',
      stack: ['React', 'JavaScript', 'Tailwind CSS'],
      focus: ['Accessibility', 'UX', 'Scalability'],
      context: 'EdTech · Digital Products',
      sections: [
        {
          title: 'Contexto e desafio',
          paragraphs: [
            'O projeto representava a criação de um novo modelo de livro digital para uma frente de produto que ainda não possuía uma aplicação anterior para simplesmente reutilizar.',
            'O desafio não era apenas digitalizar o conteúdo, mas oferecer uma experiência intuitiva para professores e estudantes, contemplar acessibilidade e criar uma base técnica que pudesse evoluir e ser reaproveitada em materiais futuros.',
          ],
        },
        {
          title: 'Minha atuação',
          paragraphs: [
            'Fui responsável pelo desenvolvimento técnico da aplicação, assumindo toda a implementação do front-end e as decisões relacionadas à estrutura do código.',
            'A partir das definições de experiência e interface construídas em parceria com Design, defini como a solução seria estruturada em React, quais elementos seriam transformados em componentes reutilizáveis e como esses componentes se relacionariam ao longo da aplicação.',
            'Minha atuação envolveu a implementação da interface, navegação e interações do livro digital, além da organização do código com foco em reutilização, manutenção e evolução da solução.',
          ],
        },
        {
          title: 'Decisões técnicas',
          paragraphs: [],
          bullets: [
            'Estruturação de componentes reutilizáveis para reduzir duplicação e facilitar evolução.',
            'Organização da aplicação com foco em manutenção e escalabilidade.',
            'Implementação de acessibilidade como requisito do produto, não como etapa posterior.',
            'Construção da navegação e das interações do livro digital.',
          ],
        },
        {
          title: 'Validação e qualidade',
          paragraphs: [
            'Após finalizar o capítulo, organizei uma etapa de validação envolvendo diferentes perspectivas do produto. A solução foi testada pela equipe pedagógica, pela designer responsável pelo projeto e por outros desenvolvedores.',
            'Os feedbacks, bugs e oportunidades de melhoria foram centralizados em um único documento. Após a rodada de testes, revisei os apontamentos, avaliei tecnicamente quais alterações faziam sentido e implementei os ajustes necessários antes da entrega.',
          ],
        },
        {
          title: 'Resultado',
          paragraphs: [
            'A solução foi bem recebida pelos especialistas e passou a servir como referência interna para a evolução de outros livros digitais.',
            'Além da entrega em si, o projeto estabeleceu uma base reutilizável e evolutiva para futuras experiências digitais.',
          ],
        },
        {
          title: 'Aprendizado',
          paragraphs: [
            'O projeto reforçou minha visão de que desenvolvimento de software vai além da implementação técnica. Estrutura de código, acessibilidade, experiência do usuário e colaboração entre diferentes áreas têm impacto direto na qualidade e na capacidade de evolução de um produto digital.',
          ],
        },
      ],
    },
    {
      id: 'early-childhood-book',
      eyebrow: 'INICIATIVA PROATIVA',
      title: 'Livro Digital Interativo para Educação Infantil',
      summary: 'Uma oportunidade identificada de forma independente que evoluiu de pesquisa e prototipação para uma nova experiência digital voltada à Educação Infantil.',
      role: 'Software Developer · Product Initiative',
      stack: ['React', 'JavaScript', 'Tailwind CSS'],
      focus: ['Product Discovery', 'UX/UI', 'AI-Assisted Development'],
      context: 'EdTech · Early Childhood Education',
      sections: [
        {
          title: 'Oportunidade identificada',
          paragraphs: [
            'Os materiais digitais voltados à Educação Infantil ainda reproduziam principalmente as páginas do material impresso, oferecendo poucas possibilidades de interação e aproveitando pouco o potencial do ambiente digital.',
            'Ao analisar a experiência existente, identifiquei de forma proativa uma oportunidade de transformar esse material em um produto mais interativo e mais adequado ao contexto de uso da Educação Infantil.',
          ],
        },
        {
          title: 'Pesquisa e validação inicial',
          paragraphs: [
            'O projeto não surgiu de uma demanda formal. Apresentei a oportunidade à liderança para validar se fazia sentido explorar uma nova abordagem para o produto.',
            'Com a validação inicial, pesquisei referências nacionais e internacionais e desenvolvi um protótipo de aproximadamente cinco páginas.',
            'Esse protótipo foi utilizado em uma sessão de brainstorming com especialistas de Educação Infantil para entender quais elementos realmente agregariam valor ao contexto pedagógico.',
          ],
        },
        {
          title: 'Minha atuação',
          paragraphs: [
            'Fui responsável pela iniciativa de ponta a ponta, desde a identificação da oportunidade e concepção da solução até o design da experiência, desenvolvimento técnico e validação do piloto.',
            'Assumi tanto as decisões de UX/UI quanto toda a implementação técnica utilizando React, JavaScript e Tailwind CSS.',
            'Durante o desenvolvimento, utilizei ferramentas de Inteligência Artificial como apoio para acelerar a implementação e explorar soluções, mantendo sob minha responsabilidade os direcionamentos, decisões técnicas, validação do código e resultado final.',
          ],
        },
        {
          title: 'Experiência criada',
          paragraphs: [],
          bullets: [
            'Navegação persistente ao longo da experiência.',
            'Persistência automática de respostas.',
            'Elementos interativos adequados ao uso em sala de aula.',
            'Experiência pensada para apoiar o professor durante a utilização do material.',
          ],
        },
        {
          title: 'Testes e refinamento',
          paragraphs: [
            'Após concluir o desenvolvimento, organizei uma rodada adicional de testes com desenvolvedores e designers da equipe para identificar bugs, problemas de usabilidade e oportunidades de melhoria.',
            'Analisei os feedbacks e incorporei os ajustes relevantes antes da apresentação final.',
          ],
        },
        {
          title: 'Resultado',
          paragraphs: [
            'A proposta foi muito bem recebida pela liderança, especialistas e coordenações, que reconheceram uma evolução significativa em relação à experiência anterior.',
            'Durante o processo, descobri também que escolas já começavam a questionar quando haveria uma experiência digital mais interativa para a Educação Infantil, mostrando que a oportunidade identificada de forma independente estava alinhada a uma necessidade real dos usuários.',
            'A solução passou a servir como referência para materiais digitais de Educação Infantil previstos para 2027.',
          ],
        },
      ],
    },
    {
      id: 'ai-pipeline',
      title: 'Pipeline de Produção de Livros Digitais com IA',
      summary: 'Evolução e validação de um fluxo assistido por Inteligência Artificial criado para automatizar etapas repetitivas e tornar a produção de livros digitais mais rápida e consistente.',
      role: 'Software Developer · Testing, Validation & Process Evolution',
      stack: [],
      focus: ['AI-Assisted Development', 'Automation', 'Process Improvement', 'Quality Assurance'],
      context: 'EdTech · Digital Production',
      sections: [
        {
          title: 'Contexto',
          paragraphs: [
            'A produção de livros digitais envolvia diversas etapas manuais para transformar materiais originalmente produzidos em PDF em conteúdos estruturados para o ambiente digital.',
            'A liderança iniciou uma iniciativa para explorar como Inteligência Artificial poderia apoiar esse processo e reduzir atividades repetitivas.',
          ],
        },
        {
          title: 'Minha atuação',
          paragraphs: [
            'A iniciativa foi inicialmente desenvolvida pelo especialista de desenvolvimento da equipe e posteriormente compartilhada com os desenvolvedores responsáveis pela frente de livros digitais.',
            'Como outro desenvolvedor assumiu a principal responsabilidade pela implementação da ferramenta, minha atuação concentrou-se na evolução do fluxo de produção, testes, validação dos resultados e identificação de melhorias necessárias para que a solução pudesse ser utilizada no processo real.',
          ],
        },
        {
          title: 'Fluxo da solução',
          paragraphs: [
            'O fluxo utiliza o material original como referência, estrutura as informações necessárias para o processamento e utiliza IA para apoiar a geração do conteúdo digital.',
            'Por se tratar de conteúdo educacional destinado a um produto final, a automação não elimina a validação humana: os resultados precisam ser revisados e testados antes de seguirem para produção.',
          ],
          bullets: [
            'Source Material',
            'Content Structuring',
            'AI-Assisted Processing',
            'Digital Output',
            'Human Validation',
          ],
        },
        {
          title: 'Testes e evolução',
          paragraphs: [
            'Para validar a solução, utilizei materiais reais do fluxo de produção e comparei os resultados gerados pela automação com os conteúdos originais.',
            'Os testes consideravam qualidade, integridade do conteúdo, consistência da saída e eficiência do processo.',
            'Nas primeiras etapas, documentava os problemas e oportunidades de melhoria encontrados nos testes e os compartilhava com o desenvolvedor responsável pela implementação. À medida que passei a conhecer melhor a solução, minha atuação também evoluiu e atualmente realizo ajustes diretamente quando identifico problemas que posso solucionar.',
          ],
        },
        {
          title: 'Resultado',
          paragraphs: [
            'A adoção do pipeline reduziu significativamente o trabalho manual necessário na produção dos livros digitais e tornou o processo mais rápido e padronizado.',
            'Com parte das atividades repetitivas sendo automatizada, o time passou a direcionar mais tempo para validação, qualidade e melhorias de maior valor para o produto.',
          ],
        },
      ],
    },
  ],
  en: [
    {
      id: 'digital-book-platform',
      title: 'Interactive Digital Book Platform',
      summary: 'Development of an interactive digital book platform designed to turn educational materials into a modern, accessible, and scalable web experience for teachers and students.',
      role: 'Software Developer',
      stack: ['React', 'JavaScript', 'Tailwind CSS'],
      focus: ['Accessibility', 'UX', 'Scalability'],
      context: 'EdTech · Digital Products',
      sections: [
        {
          title: 'Context & challenge',
          paragraphs: [
            'The project involved creating a new digital book model for a product area that did not yet have an existing application to simply reuse.',
            'The challenge was not only to digitize content, but to provide an intuitive experience for teachers and students, address accessibility, and create a technical foundation that could evolve and be reused across future materials.',
          ],
        },
        {
          title: 'My role',
          paragraphs: [
            'I was responsible for the technical development of the application, owning the full front-end implementation and the decisions related to code structure.',
            'Based on experience and interface definitions built in partnership with Design, I defined how the solution would be structured in React, which elements would become reusable components, and how those components would relate across the application.',
            'My work included implementing the interface, navigation, and interactions while organizing the code with reuse, maintainability, and evolution in mind.',
          ],
        },
        {
          title: 'Technical decisions',
          paragraphs: [],
          bullets: [
            'Reusable component structure to reduce duplication and support evolution.',
            'Application organization focused on maintainability and scalability.',
            'Accessibility implemented as a product requirement, not an afterthought.',
            'Navigation and interactive behaviors built for the digital book experience.',
          ],
        },
        {
          title: 'Validation & quality',
          paragraphs: [
            'After completing each chapter, I organized a validation stage involving different product perspectives. The solution was tested by pedagogical specialists, the project designer, and other developers.',
            'Feedback, bugs, and improvement opportunities were centralized in a shared document. I reviewed the findings, evaluated which changes made technical sense, and implemented the necessary adjustments before delivery.',
          ],
        },
        {
          title: 'Outcome',
          paragraphs: [
            'The solution was well received by specialists and became an internal reference for the evolution of other digital books.',
            'Beyond the delivery itself, the project established a reusable and evolvable foundation for future digital experiences.',
          ],
        },
        {
          title: 'What I learned',
          paragraphs: [
            'This project reinforced my view that software development goes beyond technical implementation. Code structure, accessibility, user experience, and cross-functional collaboration directly affect product quality and its ability to evolve.',
          ],
        },
      ],
    },
    {
      id: 'early-childhood-book',
      eyebrow: 'PROACTIVE INITIATIVE',
      title: 'Interactive Digital Book for Early Childhood Education',
      summary: 'An independently identified opportunity that evolved from research and prototyping into a new digital experience for Early Childhood Education.',
      role: 'Software Developer · Product Initiative',
      stack: ['React', 'JavaScript', 'Tailwind CSS'],
      focus: ['Product Discovery', 'UX/UI', 'AI-Assisted Development'],
      context: 'EdTech · Early Childhood Education',
      sections: [
        {
          title: 'Opportunity identified',
          paragraphs: [
            'The existing digital materials for Early Childhood Education largely reproduced printed pages, offering limited interaction and making little use of the possibilities of a digital environment.',
            'While reviewing the experience, I proactively identified an opportunity to transform the material into a more interactive product better suited to its classroom context.',
          ],
        },
        {
          title: 'Research & early validation',
          paragraphs: [
            'The project did not start from a formal request. I brought the opportunity to leadership to validate whether it made sense to explore a new product approach.',
            'After that initial validation, I researched national and international references and created an early prototype of approximately five pages.',
            'The prototype was then used in a brainstorming session with Early Childhood Education specialists to understand which elements would truly add pedagogical value.',
          ],
        },
        {
          title: 'My role',
          paragraphs: [
            'I owned the initiative end to end, from identifying the opportunity and shaping the solution to experience design, technical development, and pilot validation.',
            'I was responsible for both UX/UI decisions and the full technical implementation using React, JavaScript, and Tailwind CSS.',
            'During development, I used Artificial Intelligence tools to accelerate implementation and explore solutions while keeping technical direction, decisions, code validation, and final results under my responsibility.',
          ],
        },
        {
          title: 'Experience created',
          paragraphs: [],
          bullets: [
            'Persistent navigation throughout the experience.',
            'Automatic answer persistence.',
            'Interactive elements suited to classroom use.',
            'Teacher-centered experience for projected and guided use.',
          ],
        },
        {
          title: 'Testing & refinement',
          paragraphs: [
            'After completing development, I organized an additional test round with developers and designers from the team to identify bugs, usability issues, and improvement opportunities.',
            'I reviewed the feedback and incorporated relevant adjustments before the final presentation.',
          ],
        },
        {
          title: 'Outcome',
          paragraphs: [
            'The proposal was very well received by leadership, specialists, and coordinators, who recognized a significant improvement over the previous experience.',
            'During the process, I also learned that schools had already started asking when a more interactive digital book experience would become available for Early Childhood Education, showing that the opportunity I had identified independently was aligned with emerging user demand.',
            'The solution became a reference for Early Childhood digital materials planned for 2027.',
          ],
        },
      ],
    },
    {
      id: 'ai-pipeline',
      title: 'AI-Powered Digital Book Production Pipeline',
      summary: 'Evolution and validation of an AI-assisted workflow designed to automate repetitive steps and make digital book production faster and more consistent.',
      role: 'Software Developer · Testing, Validation & Process Evolution',
      stack: [],
      focus: ['AI-Assisted Development', 'Automation', 'Process Improvement', 'Quality Assurance'],
      context: 'EdTech · Digital Production',
      sections: [
        {
          title: 'Context',
          paragraphs: [
            'Digital book production involved multiple manual steps to transform PDF-based materials into structured content for a digital environment.',
            'Leadership initiated a project to explore how Artificial Intelligence could support this workflow and reduce repetitive activities.',
          ],
        },
        {
          title: 'My role',
          paragraphs: [
            'The initiative was initially developed by the team development specialist and later shared with the developers responsible for the digital book area.',
            'While another developer took the main responsibility for implementing the tool, my work focused on evolving the production workflow, testing, validating outputs, and identifying improvements needed for real production use.',
          ],
        },
        {
          title: 'Solution flow',
          paragraphs: [
            'The workflow uses the original material as a reference, structures the information required for processing, and uses AI to support digital content generation.',
            'Because the output is educational content intended for a final product, automation does not replace human validation. Results still need to be reviewed and tested before production.',
          ],
          bullets: [
            'Source Material',
            'Content Structuring',
            'AI-Assisted Processing',
            'Digital Output',
            'Human Validation',
          ],
        },
        {
          title: 'Testing & evolution',
          paragraphs: [
            'To validate the solution, I used real production materials and compared automated outputs with the original content.',
            'Testing considered quality, content integrity, output consistency, and process efficiency.',
            'In the early stages, I documented issues and improvement opportunities and shared them with the developer responsible for implementation. As I gained a deeper understanding of the solution, my contribution evolved and I now implement adjustments directly when I identify issues I can solve.',
          ],
        },
        {
          title: 'Outcome',
          paragraphs: [
            'The pipeline significantly reduced manual work in digital book production and made the process faster and more standardized.',
            'With repetitive activities partially automated, the team could spend more time on validation, quality, and higher-value improvements to the product.',
          ],
        },
      ],
    },
  ],
}
