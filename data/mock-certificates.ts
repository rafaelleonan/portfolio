import type {Certificates} from "~/interfaces/certificates";

export const MockCertificates = reactive<Certificates[]>([
    {
        "link": "https://www.udemy.com/certificate/UC-9429735b-c612-4387-88e2-92cfe0b6878d/",
        "certificate_id": "UC-9429735b-c612-4387-88e2-92cfe0b6878d",
        "image": "https://udemy-certificate.s3.amazonaws.com/image/UC-9429735b-c612-4387-88e2-92cfe0b6878d.jpg?v=1635332885000",
        "title": "Desenvolvimento Android e iOS com flutter",
        "description": "Udemy, 2021 - 67.5 horas",
        "issuer": "Udemy",
        "issuer_date": "2021",
        "techs": [
            {"tag": "default-app", "name": "Flutter"},
            {"tag": "default-app", "name": "Dart"}
        ],
        "tags": ["Mobile", "iOS", "Android", "Frontend"]
    },
    {
        "link": "https://cursos.alura.com.br/course/introducao-a-programacao-com-ruby-e-jogos-1",
        "certificate_id": "",
        "image": "/images/alura.svg",
        "title": "Ruby I: Introdução a lógica de programação com jogos",
        "description": "Alura, 2021 - 12 horas",
        "issuer": "Alura",
        "issuer_date": "2021",
        "techs": [
            {"tag": "default-app", "name": "Ruby"},
            {"tag": "default-app", "name": "Lógica de programação"}
        ],
        "tags": ["Lógica", "Terminal", "Backend"]
    },
    {
        "link": "https://cursos.alura.com.br/course/introducao-a-programacao-com-ruby-e-jogos-2",
        "certificate_id": "",
        "image": "/images/alura.svg",
        "title": "Ruby II: Continuando seus primeiros passos na programação",
        "description": "Alura, 2021 - 12 horas",
        "issuer": "Alura",
        "issuer_date": "2021",
        "techs": [
            {"tag": "default-app", "name": "Ruby"},
            {"tag": "default-app", "name": "Lógica de programação"}
        ],
        "tags": ["Lógica", "Terminal", "Backend"]
    },
    {
        "link": "https://cursos.alura.com.br/course/introducao-a-programacao-com-ruby-e-jogos-3",
        "certificate_id": "",
        "image": "/images/alura.svg",
        "title": "Ruby III: Mais lógica de programação em um novo jogo",
        "description": "Alura, 2021 - 12 horas",
        "issuer": "Alura",
        "issuer_date": "2021",
        "techs": [
            {"tag": "default-app", "name": "Ruby"},
            {"tag": "default-app", "name": "Lógica de programação"}
        ],
        "tags": ["Lógica", "Terminal", "Backend"]
    },
    {
        "link": "https://cursos.alura.com.br/course/ruby-on-rails-5",
        "certificate_id": "",
        "image": "/images/alura.svg",
        "title": "Ruby on Rails 5 parte 1: Fundamentos",
        "description": "Alura, 2021 - 8 horas",
        "issuer": "Alura",
        "issuer_date": "2021",
        "techs": [
            {"tag": "default-app", "name": "Ruby"},
            {"tag": "default-app", "name": "Ruby On Rails"}
        ],
        "tags": ["Lógica", "Web", "Fullstack", "Backend", "Frontend"]
    },
    {
        "link": "https://cursos.alura.com.br/course/ruby-on-rails-5-validacao-atualizacao-partials-deploy",
        "certificate_id": "",
        "image": "/images/alura.svg",
        "title": "Ruby on Rails 5 parte 2 : Validação, atualização, partials e deploy",
        "description": "Alura, 2021 - 9 horas",
        "issuer": "Alura",
        "issuer_date": "2021",
        "techs": [
            {"tag": "default-app", "name": "Ruby"},
            {"tag": "default-app", "name": "Ruby On Rails"}
        ],
        "tags": ["Lógica", "Web", "Fullstack", "Backend", "Frontend"]
    },
    {
        "link": "https://cursos.alura.com.br/course/vue-parte2",
        "certificate_id": "",
        "image": "/images/alura.svg",
        "title": "Vue. js parte 2 : construindo Single Page Applications",
        "description": "Alura, 2020 - 16 horas",
        "issuer": "Alura",
        "issuer_date": "2020",
        "techs": [
            {"tag": "default-app", "name": "Vue js"},
            {"tag": "default-app", "name": "SPA"},
            {"tag": "default-app", "name": "JavaScript"},
        ],
        "tags": ["Web", "Frontend"]
    },
    {
        "link": "https://cursos.alura.com.br/course/go-lang-web",
        "certificate_id": "",
        "image": "/images/alura.svg",
        "title": "Go: crie uma aplicação web",
        "description": "Alura, 2020 - 6 horas",
        "issuer": "Alura",
        "issuer_date": "2020",
        "techs": [
            {"tag": "default-app", "name": "GO"}
        ],
        "tags": ["Web", "Fullstack", "Backend", "Frontend"]
    },
    {
        "link": "https://cursos.alura.com.br/course/golang",
        "certificate_id": "",
        "image": "/images/alura.svg",
        "title": "Go: a linguagem do Google",
        "description": "Alura, 2020 - 10 horas",
        "issuer": "Alura",
        "issuer_date": "2020",
        "techs": [
            {"tag": "default-app", "name": "GO"}
        ],
        "tags": ["Web", "Fullstack", "Backend", "Frontend"]
    },
    {
        "link": "https://cursos.alura.com.br/course/go-lang-oo",
        "certificate_id": "",
        "image": "/images/alura.svg",
        "title": "Go: Orientação a Objetos",
        "description": "Alura, 2020 - 6 horas",
        "issuer": "Alura",
        "issuer_date": "2020",
        "techs": [
            {"tag": "default-app", "name": "GO"},
            {"tag": "default-app", "name": "POO"},
        ],
        "tags": ["Backend","POO"]
    },
    {
        "link": "https://cursos.alura.com.br/course/go-validacoes-testes-paginas-html",
        "certificate_id": "",
        "image": "/images/alura.svg",
        "title": "Go: validações, testes e páginas HTML",
        "description": "Alura, 2022 - 8 horas",
        "issuer": "Alura",
        "issuer_date": "2022",
        "techs": [
            {"tag": "default-app", "name": "GO"},
            {"tag": "default-app", "name": "HTML"},
        ],
        "tags": ["Web", "Fullstack", "Backend", "Frontend"]
    },
    {
        "link": "https://cursos.alura.com.br/course/fundamentos-android-kotlin",
        "certificate_id": "",
        "image": "/images/alura.svg",
        "title": "Android com Kotlin: criando um app",
        "description": "Alura, 2024 - 16 horas",
        "issuer": "Alura",
        "issuer_date": "2024",
        "techs": [
            {"tag": "default-app", "name": "Android"},
            {"tag": "default-app", "name": "Kotlin"},
        ],
        "tags": ["Android", "Mobile", "Frontend"]
    },
    {
        "link": "https://cursos.alura.com.br/course/android-kotlin-persistencia-dados-room",
        "certificate_id": "",
        "image": "/images/alura.svg",
        "title": "Android com Kotlin: persistência de dados com o Room",
        "description": "Alura, 2024 - 10 horas",
        "issuer": "Alura",
        "issuer_date": "2024",
        "techs": [
            {"tag": "default-app", "name": "Android"},
            {"tag": "default-app", "name": "Kotlin"},
        ],
        "tags": ["Android", "Mobile", "Frontend"]
    },
    {
        "link": "https://cursos.alura.com.br/course/android-kotlin-personalize-app",
        "certificate_id": "",
        "image": "/images/alura.svg",
        "title": "Android com Kotlin: personalize o seu app",
        "description": "Alura, 2024 - 14 horas",
        "issuer": "Alura",
        "issuer_date": "2024",
        "techs": [
            {"tag": "default-app", "name": "Android"},
            {"tag": "default-app", "name": "Kotlin"},
        ],
        "tags": ["Android", "Mobile", "Frontend"]
    },
    {
        "link": "https://cursos.alura.com.br/course/android-kotlin-migrations-relacionamento-room",
        "certificate_id": "",
        "image": "/images/alura.svg",
        "title": "Android com Kotlin: Migrations e relacionamento com o Room",
        "description": "Alura, 2024 - 10 horas",
        "issuer": "Alura",
        "issuer_date": "2024",
        "techs": [
            {"tag": "default-app", "name": "Android"},
            {"tag": "default-app", "name": "Kotlin"},
        ],
        "tags": ["Android", "Mobile", "Frontend"]
    },
    {
        "link": "https://cursos.alura.com.br/course/kotlin-orientacao-objetos",
        "certificate_id": "",
        "image": "/images/alura.svg",
        "title": "Kotlin: orientação a objetos",
        "description": "Alura, 2024 - 10 horas",
        "issuer": "Alura",
        "issuer_date": "2024",
        "techs": [
            {"tag": "default-app", "name": "Kotlin"},
            {"tag": "default-app", "name": "POO"},
        ],
        "tags": ["Lógica", "Terminal", "POO", "Backend"]
    },
    {
        "link": "https://cursos.alura.com.br/course/kotlin-heranca-polimorfismo-interface",
        "certificate_id": "",
        "image": "/images/alura.svg",
        "title": "Kotlin: herança, polimorfismo e Interface",
        "description": "Alura, 2024 - 10 horas",
        "issuer": "Alura",
        "issuer_date": "2024",
        "techs": [
            {"tag": "default-app", "name": "Kotlin"},
            {"tag": "default-app", "name": "POO"},
        ],
        "tags": ["Lógica", "Terminal", "POO", "Backend"]
    },
    {
        "link": "https://cursos.alura.com.br/course/kotlin-recursos-da-linguagem-com-pacotes-e-composicao",
        "certificate_id": "",
        "image": "/images/alura.svg",
        "title": "Kotlin: recursos da linguagem com pacotes e composição",
        "description": "Alura, 2024 - 8 horas",
        "issuer": "Alura",
        "issuer_date": "2024",
        "techs": [
            {"tag": "default-app", "name": "Kotlin"}
        ],
        "tags": ["Lógica", "Terminal", "Backend"]
    },
    {
        "link": "https://cursos.alura.com.br/course/kotlin-exceptions-null-safety",
        "certificate_id": "",
        "image": "/images/alura.svg",
        "title": "Kotlin: lidando com exceptions e referências nulas",
        "description": "Alura, 2024 - 8 horas",
        "issuer": "Alura",
        "issuer_date": "2024",
        "techs": [
            {"tag": "default-app", "name": "Kotlin"}
        ],
        "tags": ["Lógica", "Terminal", "Backend"]
    },
    {
        "link": "https://cursos.alura.com.br/course/kotlin-introducao-collections-arrays-listas",
        "certificate_id": "",
        "image": "/images/alura.svg",
        "title": "Kotlin: desenvolva com coleções, arrays e listas",
        "description": "Alura, 2024 - 10 horas",
        "issuer": "Alura",
        "issuer_date": "2024",
        "techs": [
            {"tag": "default-app", "name": "Kotlin"}
        ],
        "tags": ["Lógica", "Terminal", "Backend"]
    },
    {
        "link": "https://cursos.alura.com.br/course/kotlin-recursos-do-paradigma-funcional",
        "certificate_id": "",
        "image": "/images/alura.svg",
        "title": "Kotlin: recursos do paradigma funcional",
        "description": "Alura, 2024 - 12 horas",
        "issuer": "Alura",
        "issuer_date": "2024",
        "techs": [
            {"tag": "default-app", "name": "Kotlin"}
        ],
        "tags": ["Lógica", "Terminal", "Backend"]
    },
    {
        "link": "https://cursos.alura.com.br/course/kotlin-collections-set-map",
        "certificate_id": "",
        "image": "/images/alura.svg",
        "title": "Kotlin Collections: Set e Map",
        "description": "Alura, 2024 - 8 horas",
        "issuer": "Alura",
        "issuer_date": "2024",
        "techs": [
            {"tag": "default-app", "name": "Kotlin"}
        ],
        "tags": ["Lógica", "Terminal", "Backend"]
    },
    {
        "link": "https://www.udemy.com/certificate/UC-87bd7a34-7c0e-47a4-91fc-c8583628fe42/",
        "certificate_id": "UC-87bd7a34-7c0e-47a4-91fc-c8583628fe42",
        "image": "https://udemy-certificate.s3.amazonaws.com/image/UC-87bd7a34-7c0e-47a4-91fc-c8583628fe42.jpg?v=1672532342000",
        "title": "Elixir e programação funcional na prática",
        "description": "Udemy, 2022 - 1.5 horas",
        "issuer": "Udemy",
        "issuer_date": "2022",
        "techs": [
            {"tag": "default-app", "name": "Elixir"},
            {"tag": "default-app", "name": "Programação funcional"}
        ],
        "tags": ["Lógica", "Terminal", "Progamação funcional", "Backend"]
    },
    {
        "link": "https://www.udemy.com/certificate/UC-9ad3b702-32f2-4e9f-a1a1-55b05dba5596/",
        "certificate_id": "UC-9ad3b702-32f2-4e9f-a1a1-55b05dba5596",
        "image": "https://udemy-certificate.s3.amazonaws.com/image/UC-9ad3b702-32f2-4e9f-a1a1-55b05dba5596.jpg?v=1672616902000",
        "title": "Programação Funcional com Elixir",
        "description": "Udemy, 2023 - 9.5 horas",
        "issuer": "Udemy",
        "issuer_date": "2023",
        "techs": [
            {"tag": "default-app", "name": "Elixir"},
            {"tag": "default-app", "name": "Programação funcional"}
        ],
        "tags": ["Lógica", "Terminal", "Progamação funcional", "Backend"]
    },
    {
        "link": "https://www.udemy.com/certificate/UC-277a8a2d-a235-48aa-8ff3-6b14692b4ad0/",
        "certificate_id": "UC-277a8a2d-a235-48aa-8ff3-6b14692b4ad0",
        "image": "https://udemy-certificate.s3.amazonaws.com/image/UC-277a8a2d-a235-48aa-8ff3-6b14692b4ad0.jpg?v=1717718570000",
        "title": "Docker para Desenvolvedores (com Docker Swarm e Kubernetes)",
        "description": "Udemy, 2024 - 12 horas",
        "issuer": "Udemy",
        "issuer_date": "2024",
        "techs": [
            {"tag": "default-app", "name": "Docker"},
            {"tag": "default-app", "name": "Docker Swarm"},
            {"tag": "default-app", "name": "Kubernetes"}
        ],
        "tags": ["DevOps"]
    },
    {
        "link": "https://www.udemy.com/certificate/UC-c6480bed-681d-4998-aeb6-4eb0048870d4/",
        "certificate_id": "UC-c6480bed-681d-4998-aeb6-4eb0048870d4",
        "image": "https://udemy-certificate.s3.amazonaws.com/image/UC-c6480bed-681d-4998-aeb6-4eb0048870d4.jpg?v=1719764225000",
        "title": "Programação Shell Script - Automatizando Rotinas no Linux",
        "description": "Udemy, 2024 - 9.5 horas",
        "issuer": "Udemy",
        "issuer_date": "2024",
        "techs": [
            {"tag": "default-app", "name": "Linux"},
            {"tag": "default-app", "name": "ShellScript"}
        ],
        "tags": ["Terminal", "Lógica", "Backend"]
    },
    {
        "link": "https://www.udemy.com/certificate/UC-bb81955d-6f98-4fbc-9b5d-3602bc849d0d/",
        "certificate_id": "UC-bb81955d-6f98-4fbc-9b5d-3602bc849d0d",
        "image": "https://udemy-certificate.s3.amazonaws.com/image/UC-bb81955d-6f98-4fbc-9b5d-3602bc849d0d.jpg?v=1720183900000",
        "title": "UI & UX Design de aplicativos e sites - Adobe XD e PSD 2024",
        "description": "Udemy, 2024 - 16.5 horas",
        "issuer": "Udemy",
        "issuer_date": "2024",
        "techs": [
            {"tag": "default-app", "name": "Adobe XD"},
            {"tag": "default-app", "name": "Adobe PSD"},
            {"tag": "default-app", "name": "Design UX/UI"}
        ],
        "tags": ["Design"]
    },
    {
        "link": "https://www.udemy.com/certificate/UC-50a90aec-6e77-48d4-9e13-f263c8014798/",
        "certificate_id": "UC-50a90aec-6e77-48d4-9e13-f263c8014798",
        "image": "https://udemy-certificate.s3.amazonaws.com/image/UC-50a90aec-6e77-48d4-9e13-f263c8014798.jpg?v=1720383145000",
        "title": "PRO FIGMA | UI Design com Figma do Zero ao especialista 2024",
        "description": "Udemy, 2024 - 18 horas",
        "issuer": "Udemy",
        "issuer_date": "2024",
        "techs": [
            {"tag": "default-app", "name": "Figma"},
            {"tag": "default-app", "name": "Design UI"}
        ],
        "tags": ["Design"]
    },
    {
        "link": "https://www.udemy.com/certificate/UC-89e500c7-7a6c-4f76-8922-9df58fcfc3aa/",
        "certificate_id": "UC-89e500c7-7a6c-4f76-8922-9df58fcfc3aa",
        "image": "https://udemy-certificate.s3.amazonaws.com/image/UC-89e500c7-7a6c-4f76-8922-9df58fcfc3aa.jpg?v=1720480697000",
        "title": "Desenvolvimento de aplicativos iOS - Do básico às vendas!",
        "description": "Udemy, 2024 - 7 horas",
        "issuer": "Udemy",
        "issuer_date": "2024",
        "techs": [
            {"tag": "default-app", "name": "iOS"},
            {"tag": "default-app", "name": "Swift"}
        ],
        "tags": ["iOS", "Mobile", "Frontend"]
    },
    {
        "link": "https://drive.google.com/file/d/1QUKAcKbgH8OeyeVm6LdGp1WXj8FB263e/view",
        "certificate_id": "",
        "image": "https://firebasestorage.googleapis.com/v0/b/portfolio-2cd49.firebasestorage.app/o/certificados%2FGopherCon2022.png?alt=media&token=cd20918e-54a8-4c74-8894-276bf0f10345",
        "title": "GopherCon Brasil 2022",
        "description": "Entre os dias 30/09/2022 - 01/10/2022",
        "issuer": "GopherCon Brasil",
        "issuer_date": "2022",
        "techs": [
            {"tag": "default-app", "name": "GO"},
        ],
        "tags": ["Lógica"]
    },
    {
        "link": "https://drive.google.com/file/d/12GSDLJHYbYuTUg2T_wFHm7ooKdIHwwHR/view?usp=drive_link",
        "certificate_id": "",
        "image": "https://firebasestorage.googleapis.com/v0/b/portfolio-2cd49.firebasestorage.app/o/certificados%2Fhtml_avancado.png?alt=media&token=d9e405a4-515c-4637-a0be-2e01dc5721cf",
        "title": "HTML - Avançado",
        "description": "Fundação Bradesco, 2017 - 6 horas",
        "issuer": "Fundação Bradesco",
        "issuer_date": "2017",
        "techs": [
            {"tag": "default-app", "name": "HTML"}
        ],
        "tags": ["Frontend", "Web"]
    },
    {
        "link": "https://drive.google.com/file/d/1bDJHnbezaj7JVvH_FoABUUBnCNftrIsE/view?usp=drive_link",
        "certificate_id": "",
        "image": "https://firebasestorage.googleapis.com/v0/b/portfolio-2cd49.firebasestorage.app/o/certificados%2Fcss.png?alt=media&token=229133bf-673d-4239-a19c-0343ea80eff1",
        "title": "Inovando com CSS",
        "description": "Fundação Bradesco, 2017 - 26 horas",
        "issuer": "Fundação Bradesco",
        "issuer_date": "2017",
        "techs": [
            {"tag": "default-app", "name": "CSS"}
        ],
        "tags": ["Frontend", "Web"]
    },
    {
        "link": "https://drive.google.com/file/d/10gM-_DNJdcjp5XaB64COdVrBQVqkHA2E/view?usp=drive_link",
        "certificate_id": "",
        "image": "https://firebasestorage.googleapis.com/v0/b/portfolio-2cd49.firebasestorage.app/o/certificados%2Fhtml_basico.png?alt=media&token=2f69b320-a093-44f0-8ee9-eb4ce9f6ddd3",
        "title": "HTML - Básico",
        "description": "Fundação Bradesco, 2017 - 11 horas",
        "issuer": "Fundação Bradesco",
        "issuer_date": "2017",
        "techs": [
            {"tag": "default-app", "name": "HTML"}
        ],
        "tags": ["Frontend", "Web"]
    },
    {
        "link": "https://www.udemy.com/certificate/UC-35c234e5-a20c-4466-9dbd-89339cdaf912/",
        "certificate_id": "UC-35c234e5-a20c-4466-9dbd-89339cdaf912",
        "image": "https://udemy-certificate.s3.amazonaws.com/image/UC-35c234e5-a20c-4466-9dbd-89339cdaf912.jpg?v=1735074729000",
        "title": "React do Zero a Maestria (c/ hooks, router, API, Projetos)",
        "description": "Udemy, 2025 - 30,5 horas",
        "issuer": "Udemy",
        "issuer_date": "2025",
        "techs": [
            {"tag": "default-app", "name": "React js"},
            {"tag": "default-app", "name": "JavaScript"},
            {"tag": "default-app", "name": "React Hooks"},
        ],
        "tags": ["Frontend", "Web"]
    },
    {
        "link": "https://www.udemy.com/certificate/UC-faef641d-c803-4b98-805d-beb2600fda05/",
        "certificate_id": "UC-faef641d-c803-4b98-805d-beb2600fda05",
        "image": "https://udemy-certificate.s3.amazonaws.com/image/UC-faef641d-c803-4b98-805d-beb2600fda05.jpg?v=1735077477000",
        "title": "Node.js do Zero a Maestria com diversos Projetos",
        "description": "Udemy, 2025 - 38 horas",
        "issuer": "Udemy",
        "issuer_date": "2025",
        "techs": [
            {"tag": "default-app", "name": "Node js"},
            {"tag": "default-app", "name": "JavaScript"},
            {"tag": "default-app", "name": "Rest API"},
        ],
        "tags": ["Frontend", "Web", "API RESTful", "Backend", "Fullstack"]
    },
    {
        "link": "https://www.udemy.com/certificate/UC-84f78411-5168-4925-b7ff-a04f88405105/",
        "certificate_id": "UC-84f78411-5168-4925-b7ff-a04f88405105",
        "image": "https://udemy-certificate.s3.amazonaws.com/image/UC-84f78411-5168-4925-b7ff-a04f88405105.jpg?v=1735078198000",
        "title": "TypeScript do básico ao avançado (c/ React, Express)",
        "description": "Udemy, 2025 - 14 horas",
        "issuer": "Udemy",
        "issuer_date": "2025",
        "techs": [
            {"tag": "default-app", "name": "React js"},
            {"tag": "default-app", "name": "JavaScript"},
            {"tag": "default-app", "name": "Express"},
            {"tag": "default-app", "name": "Typescript"},
        ],
        "tags": ["Frontend", "Web"]
    },
    {
        "link": "https://www.udemy.com/certificate/UC-a2af6082-8245-413b-beca-53b703a89409/",
        "certificate_id": "UC-a2af6082-8245-413b-beca-53b703a89409",
        "image": "https://udemy-certificate.s3.amazonaws.com/image/UC-a2af6082-8245-413b-beca-53b703a89409.jpg?v=1735165587000",
        "title": "Desenvolvimento IOS 12 - Aprenda a criar 18 Apps",
        "description": "Udemy, 2025 - 52 horas",
        "issuer": "Udemy",
        "issuer_date": "2025",
        "techs": [
            {"tag": "default-app", "name": "iOS"},
            {"tag": "default-app", "name": "Swift"}
        ],
        "tags": ["iOS", "Mobile", "Frontend"]
    },
    {
        "link": "https://www.udemy.com/certificate/UC-4468e666-8938-4eac-b1c0-fc37c1a8a214/",
        "certificate_id": "UC-4468e666-8938-4eac-b1c0-fc37c1a8a214",
        "image": "https://udemy-certificate.s3.amazonaws.com/image/UC-4468e666-8938-4eac-b1c0-fc37c1a8a214.jpg?v=1735166496000",
        "title": "Curso de Django Web Framework e Django Rest Framework (DRF)",
        "description": "Udemy, 2025 - 79 horas",
        "issuer": "Udemy",
        "issuer_date": "2025",
        "techs": [
            {"tag": "default-app", "name": "Python"},
            {"tag": "default-app", "name": "Django"},
            {"tag": "default-app", "name": "Rest API"}
        ],
        "tags": ["Frontend", "Web", "API RESTful", "Fullstack", "Backend"]
    },
    {
        "link": "https://www.udemy.com/certificate/UC-275a3c3e-14c0-4e45-bb9c-9566f441ae31/",
        "certificate_id": "UC-275a3c3e-14c0-4e45-bb9c-9566f441ae31",
        "image": "https://udemy-certificate.s3.amazonaws.com/image/UC-275a3c3e-14c0-4e45-bb9c-9566f441ae31.jpg?v=1675401410000",
        "title": "Linux para Desenvolvedores (c/ terminal, Shell, Apache e +)",
        "description": "Udemy, 2025 - 7.5 horas",
        "issuer": "Udemy",
        "issuer_date": "2025",
        "techs": [
            {"tag": "default-app", "name": "Linux"},
            {"tag": "default-app", "name": "Terminal"},
            {"tag": "default-app", "name": "Apache"}
        ],
        "tags": ["Terminal", "Backend"]
    },
    {
        "link": "https://www.udemy.com/certificate/UC-e29bd996-0660-4e72-9aa1-8d30bd172f05/",
        "certificate_id": "UC-e29bd996-0660-4e72-9aa1-8d30bd172f05",
        "image": "https://udemy-certificate.s3.amazonaws.com/image/UC-e29bd996-0660-4e72-9aa1-8d30bd172f05.jpg?v=1735250997000",
        "title": "Flutter 2.0: Crie aplicações responsivas para a Web",
        "description": "Udemy, 2025 - 16 horas",
        "issuer": "Udemy",
        "issuer_date": "2025",
        "techs": [
            {"tag": "default-app", "name": "Flutter"},
            {"tag": "default-app", "name": "Dart"}
        ],
        "tags": ["Frontend", "Web"]
    },
    {
        "link": "https://www.udemy.com/certificate/UC-90bd55f9-a0a1-4bec-8769-92b666d656df/",
        "certificate_id": "UC-90bd55f9-a0a1-4bec-8769-92b666d656df",
        "image": "https://udemy-certificate.s3.amazonaws.com/image/UC-90bd55f9-a0a1-4bec-8769-92b666d656df.jpg?v=1735338299000",
        "title": "React Native: Desenvolva APPs Nativas para Android e iOS",
        "description": "Udemy, 2025 - 45 horas",
        "issuer": "Udemy",
        "issuer_date": "2025",
        "techs": [
            {"tag": "default-app", "name": "React Native"}
        ],
        "tags": ["Frontend", "Mobile", "Android", "iOS"]
    },
    {
        "link": "https://www.udemy.com/certificate/UC-cebb3fcd-49a0-4639-943f-6da6c64465cb/",
        "certificate_id": "UC-cebb3fcd-49a0-4639-943f-6da6c64465cb",
        "image": "https://udemy-certificate.s3.amazonaws.com/image/UC-cebb3fcd-49a0-4639-943f-6da6c64465cb.jpg?v=1735338421000",
        "title": "React Native Criando aplicativos do zero ao avançado",
        "description": "Udemy, 2025 - 24 horas",
        "issuer": "Udemy",
        "issuer_date": "2025",
        "techs": [
            {"tag": "default-app", "name": "React Native"}
        ],
        "tags": ["Frontend", "Mobile", "Android", "iOS"]
    },
    {
        "link": "https://www.udemy.com/certificate/UC-fa269090-f0d8-4041-b545-5cba68d00485/",
        "certificate_id": "UC-fa269090-f0d8-4041-b545-5cba68d00485",
        "image": "https://udemy-certificate.s3.amazonaws.com/image/UC-fa269090-f0d8-4041-b545-5cba68d00485.jpg?v=1735490257000",
        "title": "PHP do Zero a Maestria + 4 Projetos incríveis",
        "description": "Udemy, 2025 - 34 horas",
        "issuer": "Udemy",
        "issuer_date": "2025",
        "techs": [
            {"tag": "default-app", "name": "PHP"},
            {"tag": "default-app", "name": "POO"},
        ],
        "tags": ["Frontend", "Web", "POO", "Backend", "Fullstack"]
    },
    {
        "link": "https://www.udemy.com/certificate/UC-b8806ee0-75f6-4466-8b48-0fdb03c134bd/",
        "certificate_id": "UC-b8806ee0-75f6-4466-8b48-0fdb03c134bd",
        "image": "https://udemy-certificate.s3.amazonaws.com/image/UC-b8806ee0-75f6-4466-8b48-0fdb03c134bd.jpg?v=1735597468000",
        "title": "Desenvolvimento Web Avançado com PHP, Laravel e Vue.JS",
        "description": "Udemy, 2025 - 57 horas",
        "issuer": "Udemy",
        "issuer_date": "2025",
        "techs": [
            {"tag": "default-app", "name": "PHP"},
            {"tag": "default-app", "name": "Laravel"},
            {"tag": "default-app", "name": "Vue JS"},
            {"tag": "default-app", "name": "Rest API"},
        ],
        "tags": ["Frontend", "Web", "API RESTful", "Backend", "Fullstack"]
    },
    {
        "link": "https://www.udemy.com/certificate/UC-f0f3d505-bb39-423f-bedc-e26aaedf703b/",
        "certificate_id": "UC-f0f3d505-bb39-423f-bedc-e26aaedf703b",
        "image": "https://udemy-certificate.s3.amazonaws.com/image/UC-f0f3d505-bb39-423f-bedc-e26aaedf703b.jpg?v=1735673571000",
        "title": "Spring Boot Prático: JPA, RESTFul, Security, JWT e mais",
        "description": "Udemy, 2025 - 13.5 horas",
        "issuer": "Udemy",
        "issuer_date": "2025",
        "techs": [
            {"tag": "default-app", "name": "Java"},
            {"tag": "default-app", "name": "Spring Boot"},
            {"tag": "default-app", "name": "Rest API"},
            {"tag": "default-app", "name": "POO"},
            {"tag": "default-app", "name": "JPA"},
            {"tag": "default-app", "name": "JWT"},
        ],
        "tags": ["Frontend", "Web", "API RESTful", "Backend", "Fullstack", "POO"]
    },
    {
        "link": "https://www.udemy.com/certificate/UC-e7cffdbd-1317-4521-bb4b-fd45f1519dea/",
        "certificate_id": "UC-e7cffdbd-1317-4521-bb4b-fd45f1519dea",
        "image": "https://udemy-certificate.s3.amazonaws.com/image/UC-e7cffdbd-1317-4521-bb4b-fd45f1519dea.jpg?v=1735673332000",
        "title": "Java COMPLETO Programação Orientada a Objetos + Projetos",
        "description": "Udemy, 2025 - 54.5 horas",
        "issuer": "Udemy",
        "issuer_date": "2025",
        "techs": [
            {"tag": "default-app", "name": "Java"},
            {"tag": "default-app", "name": "Spring Boot"},
            {"tag": "default-app", "name": "Rest API"},
            {"tag": "default-app", "name": "POO"},
        ],
        "tags": ["Frontend", "Web", "API RESTful", "POO", "Backend", "Fullstack"]
    },
    {
        "link": "https://www.udemy.com/certificate/UC-d3269a6c-3b4c-4a06-8225-6e996f7dab5c/",
        "certificate_id": "UC-d3269a6c-3b4c-4a06-8225-6e996f7dab5c",
        "image": "https://udemy-certificate.s3.amazonaws.com/image/UC-d3269a6c-3b4c-4a06-8225-6e996f7dab5c.jpg?v=1735408745000",
        "title": "Elixir e Phoenix do zero! Crie sua primeira API Phoenix.",
        "description": "Udemy, 2025 - 14.5 horas",
        "issuer": "Udemy",
        "issuer_date": "2025",
        "techs": [
            {"tag": "default-app", "name": "Phoenix"},
            {"tag": "default-app", "name": "Elixir"},
            {"tag": "default-app", "name": "Rest API"},
        ],
        "tags": ["Backend", "API RESTful"]
    }
])