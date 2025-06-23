import {reactive} from "#imports";
import type {BadgeCategory, BadgeTech} from "~/interfaces/homepage";
import type {Trajectory} from "~/interfaces/geral";

const Languages = reactive<BadgeTech[]>([
    { src: `https://firebasestorage.googleapis.com/v0/b/portfolio-2cd49.firebasestorage.app/o/projects%2Fsati%2Ftech%2Fjs.svg?alt=media&token=e2647def-590e-4562-b60b-b3921bdd8dad`, title: "JAVASCRIPT", current: true, proficiency_level: 4 },
    { src: `https://firebasestorage.googleapis.com/v0/b/portfolio-2cd49.firebasestorage.app/o/projects%2Fsati%2Ftech%2Fts.svg?alt=media&token=e2647def-590e-4562-b60b-b3921bdd8dad`, title: "TYPESCRIPT", current: true, proficiency_level: 3 },
    { src: `https://firebasestorage.googleapis.com/v0/b/portfolio-2cd49.firebasestorage.app/o/projects%2Fsati%2Ftech%2Fpython.svg?alt=media&token=e2647def-590e-4562-b60b-b3921bdd8dad`, title: "PYTHON", current: false, proficiency_level: 2 },
    { src: `https://firebasestorage.googleapis.com/v0/b/portfolio-2cd49.firebasestorage.app/o/projects%2Fsati%2Ftech%2Fdart.svg?alt=media&token=e2647def-590e-4562-b60b-b3921bdd8dad`, title: "DART", current: true, proficiency_level: 4 },
    { src: `https://firebasestorage.googleapis.com/v0/b/portfolio-2cd49.firebasestorage.app/o/projects%2Fsati%2Ftech%2Fruby.svg?alt=media&token=e2647def-590e-4562-b60b-b3921bdd8dad`, title: "RUBY", current: true, proficiency_level: 4 },
    { src: `https://firebasestorage.googleapis.com/v0/b/portfolio-2cd49.firebasestorage.app/o/projects%2Fsati%2Ftech%2Fswift.svg?alt=media&token=e2647def-590e-4562-b60b-b3921bdd8dad`, title: "SWIFT", current: false, proficiency_level: 2 },
    { src: `https://firebasestorage.googleapis.com/v0/b/portfolio-2cd49.firebasestorage.app/o/projects%2Fsati%2Ftech%2Felixir.svg?alt=media&token=e2647def-590e-4562-b60b-b3921bdd8dad`, title: "ELIXIR", current: false, proficiency_level: 1 },
    { src: `https://firebasestorage.googleapis.com/v0/b/portfolio-2cd49.firebasestorage.app/o/projects%2Fsati%2Ftech%2Fkotlin.svg?alt=media&token=e2647def-590e-4562-b60b-b3921bdd8dad`, title: "KOTLIN", current: false, proficiency_level: 2 },
    { src: `https://firebasestorage.googleapis.com/v0/b/portfolio-2cd49.firebasestorage.app/o/projects%2Fsati%2Ftech%2Fshellscript.svg?alt=media&token=e2647def-590e-4562-b60b-b3921bdd8dad`, title: "SHELLSCRIPT", current: false, proficiency_level: 2 },
    { src: `https://firebasestorage.googleapis.com/v0/b/portfolio-2cd49.firebasestorage.app/o/projects%2Fsati%2Ftech%2Fgo.svg?alt=media&token=e2647def-590e-4562-b60b-b3921bdd8dad`, title: "GO", current: true, proficiency_level: 4 },
    { src: `https://firebasestorage.googleapis.com/v0/b/portfolio-2cd49.firebasestorage.app/o/projects%2Fsati%2Ftech%2Fphp.svg?alt=media&token=e2647def-590e-4562-b60b-b3921bdd8dad`, title: "PHP", current: false, proficiency_level: 2 },
    { src: `https://firebasestorage.googleapis.com/v0/b/portfolio-2cd49.firebasestorage.app/o/projects%2Fsati%2Ftech%2Fjava.svg?alt=media&token=e2647def-590e-4562-b60b-b3921bdd8dad`, title: "JAVA", current: false, proficiency_level: 2 },
])

const FrameworksAndLibraries = reactive<BadgeTech[]>([
    { src: `https://firebasestorage.googleapis.com/v0/b/portfolio-2cd49.firebasestorage.app/o/projects%2Fsati%2Ftech%2Fvue.svg?alt=media&token=e2647def-590e-4562-b60b-b3921bdd8dad`, title: "VUE JS", current: true, proficiency_level: 4 },
    { src: `https://firebasestorage.googleapis.com/v0/b/portfolio-2cd49.firebasestorage.app/o/projects%2Fsati%2Ftech%2Fflutter.svg?alt=media&token=e2647def-590e-4562-b60b-b3921bdd8dad`, title: "FLUTTER", current: true, proficiency_level: 4 },
    { src: `https://firebasestorage.googleapis.com/v0/b/portfolio-2cd49.firebasestorage.app/o/projects%2Fsati%2Ftech%2Frails.svg?alt=media&token=e2647def-590e-4562-b60b-b3921bdd8dad`, title: "RUBY ON RAILS", current: true, proficiency_level: 4 },
    { src: `https://firebasestorage.googleapis.com/v0/b/portfolio-2cd49.firebasestorage.app/o/projects%2Fsati%2Ftech%2Fdjango.svg?alt=media&token=e2647def-590e-4562-b60b-b3921bdd8dad`, title: "DJANGO", current: false, proficiency_level: 1 },
    { src: `https://firebasestorage.googleapis.com/v0/b/portfolio-2cd49.firebasestorage.app/o/projects%2Fsati%2Ftech%2Fphoenix.svg?alt=media&token=e2647def-590e-4562-b60b-b3921bdd8dad`, title: "PHOENIX", current: false, proficiency_level: 1 },
    { src: `https://firebasestorage.googleapis.com/v0/b/portfolio-2cd49.firebasestorage.app/o/projects%2Fsati%2Ftech%2Fspring-boot.svg?alt=media&token=e2647def-590e-4562-b60b-b3921bdd8dad`, title: "SPRING BOOT", current: false, proficiency_level: 1 },
    { src: `https://firebasestorage.googleapis.com/v0/b/portfolio-2cd49.firebasestorage.app/o/projects%2Fsati%2Ftech%2Freact.svg?alt=media&token=e2647def-590e-4562-b60b-b3921bdd8dad`, title: "REACT JS", current: false, proficiency_level: 1 },
    { src: `https://firebasestorage.googleapis.com/v0/b/portfolio-2cd49.firebasestorage.app/o/projects%2Fsati%2Ftech%2Felectron.svg?alt=media&token=e2647def-590e-4562-b60b-b3921bdd8dad`, title: "ELECTRON JS", current: false, proficiency_level: 1 },
    { src: `https://firebasestorage.googleapis.com/v0/b/portfolio-2cd49.firebasestorage.app/o/projects%2Fsati%2Ftech%2Flaravel.svg?alt=media&token=e2647def-590e-4562-b60b-b3921bdd8dad`, title: "LARAVEL", current: false, proficiency_level: 1 },
    { src: `https://firebasestorage.googleapis.com/v0/b/portfolio-2cd49.firebasestorage.app/o/projects%2Fsati%2Ftech%2Fnodejs.svg?alt=media&token=e2647def-590e-4562-b60b-b3921bdd8dad`, title: "NODE JS", current: false, proficiency_level: 2 },
])

const DatabaseAndCloud = reactive<BadgeTech[]>([
    { src: `https://firebasestorage.googleapis.com/v0/b/portfolio-2cd49.firebasestorage.app/o/projects%2Fsati%2Ftech%2Fmysql.svg?alt=media&token=e2647def-590e-4562-b60b-b3921bdd8dad`, title: "MYSQL", current: false, proficiency_level: 3 },
    { src: `https://firebasestorage.googleapis.com/v0/b/portfolio-2cd49.firebasestorage.app/o/projects%2Fsati%2Ftech%2Fpostgresql.svg?alt=media&token=e2647def-590e-4562-b60b-b3921bdd8dad`, title: "POSTGRESQL", current: true, proficiency_level: 4 },
    { src: `https://firebasestorage.googleapis.com/v0/b/portfolio-2cd49.firebasestorage.app/o/projects%2Fsati%2Ftech%2Ffirebase.svg?alt=media&token=e2647def-590e-4562-b60b-b3921bdd8dad`, title: "FIREBASE FIRESTORE", current: false, proficiency_level: 2 },
    { src: `https://firebasestorage.googleapis.com/v0/b/portfolio-2cd49.firebasestorage.app/o/projects%2Fsati%2Ftech%2Faws-rds.svg?alt=media&token=e2647def-590e-4562-b60b-b3921bdd8dad`, title: "AWS RDS", current: false, proficiency_level: 2 },
    { src: `https://firebasestorage.googleapis.com/v0/b/portfolio-2cd49.firebasestorage.app/o/projects%2Fsati%2Ftech%2Faws-sqs.svg?alt=media&token=e2647def-590e-4562-b60b-b3921bdd8dad`, title: "AWS SQS", current: false, proficiency_level: 3 },
    { src: `https://firebasestorage.googleapis.com/v0/b/portfolio-2cd49.firebasestorage.app/o/projects%2Fsati%2Ftech%2Fs3.svg?alt=media&token=e2647def-590e-4562-b60b-b3921bdd8dad`, title: "AWS S3", current: false, proficiency_level: 3 },
    { src: `https://firebasestorage.googleapis.com/v0/b/portfolio-2cd49.firebasestorage.app/o/projects%2Fsati%2Ftech%2Faws-ec2.svg?alt=media&token=e2647def-590e-4562-b60b-b3921bdd8dad`, title: "AWS EC2", current: false, proficiency_level: 2 },
])

const DevOpsAndSettingsDevelopment = reactive<BadgeTech[]>([
    { src: `https://firebasestorage.googleapis.com/v0/b/portfolio-2cd49.firebasestorage.app/o/projects%2Fsati%2Ftech%2Fdocker.svg?alt=media&token=e2647def-590e-4562-b60b-b3921bdd8dad`, title: "DOCKER", current: false, proficiency_level: 3 },
    { src: `https://firebasestorage.googleapis.com/v0/b/portfolio-2cd49.firebasestorage.app/o/projects%2Fsati%2Ftech%2Fdocker.svg?alt=media&token=e2647def-590e-4562-b60b-b3921bdd8dad`, title: "DOCKER SWARM", current: false, proficiency_level: 2 },
    { src: `https://firebasestorage.googleapis.com/v0/b/portfolio-2cd49.firebasestorage.app/o/projects%2Fsati%2Ftech%2Fkubernetes.svg?alt=media&token=e2647def-590e-4562-b60b-b3921bdd8dad`, title: "KUBERNETES", current: false, proficiency_level: 2 },
    { src: `https://firebasestorage.googleapis.com/v0/b/portfolio-2cd49.firebasestorage.app/o/projects%2Fsati%2Ftech%2Fgit.svg?alt=media&token=e2647def-590e-4562-b60b-b3921bdd8dad`, title: "GIT & GIT FLOW", current: true, proficiency_level: 4 },
    { src: `https://firebasestorage.googleapis.com/v0/b/portfolio-2cd49.firebasestorage.app/o/projects%2Fsati%2Ftech%2Fkafka.svg?alt=media&token=e2647def-590e-4562-b60b-b3921bdd8dad`, title: "KAFKA", current: true, proficiency_level: 2 },
])

const FrondEndAndUxUi = reactive<BadgeTech[]>([
    { src: `https://firebasestorage.googleapis.com/v0/b/portfolio-2cd49.firebasestorage.app/o/projects%2Fsati%2Ftech%2Fhtml.svg?alt=media&token=e2647def-590e-4562-b60b-b3921bdd8dad`, title: "HTML", current: true, proficiency_level: 4 },
    { src: `https://firebasestorage.googleapis.com/v0/b/portfolio-2cd49.firebasestorage.app/o/projects%2Fsati%2Ftech%2Fcss.svg?alt=media&token=e2647def-590e-4562-b60b-b3921bdd8dad`, title: "CSS", current: true, proficiency_level: 4 },
    { src: `https://firebasestorage.googleapis.com/v0/b/portfolio-2cd49.firebasestorage.app/o/projects%2Fsati%2Ftech%2Fsass.svg?alt=media&token=e2647def-590e-4562-b60b-b3921bdd8dad`, title: "SASS", current: true, proficiency_level: 4 },
    { src: `https://firebasestorage.googleapis.com/v0/b/portfolio-2cd49.firebasestorage.app/o/projects%2Fsati%2Ftech%2Ffigma.svg?alt=media&token=e2647def-590e-4562-b60b-b3921bdd8dad`, title: "FIGMA", current: false, proficiency_level: 4 },
    { src: `https://firebasestorage.googleapis.com/v0/b/portfolio-2cd49.firebasestorage.app/o/projects%2Fsati%2Ftech%2Fadobe-xd.svg?alt=media&token=e2647def-590e-4562-b60b-b3921bdd8dad`, title: "ADOBE XD", current: false, proficiency_level: 2 },
])

const ArchitectureAndDevelopmentPatterns = reactive<BadgeTech[]>([
    { src: `https://firebasestorage.googleapis.com/v0/b/portfolio-2cd49.firebasestorage.app/o/projects%2Fsati%2Ftech%2Frest-api.svg?alt=media&token=e2647def-590e-4562-b60b-b3921bdd8dad`, title: "API RESTful", current: true, proficiency_level: 4 },
    { src: `https://firebasestorage.googleapis.com/v0/b/portfolio-2cd49.firebasestorage.app/o/projects%2Fsati%2Ftech%2Fprocess.svg?alt=media&token=e2647def-590e-4562-b60b-b3921bdd8dad`, title: "SSR", current: false, proficiency_level: 2 },
    { src: `https://firebasestorage.googleapis.com/v0/b/portfolio-2cd49.firebasestorage.app/o/projects%2Fsati%2Ftech%2Fprocess.svg?alt=media&token=e2647def-590e-4562-b60b-b3921bdd8dad`, title: "SPA", current: false, proficiency_level: 4 },
    { src: `https://firebasestorage.googleapis.com/v0/b/portfolio-2cd49.firebasestorage.app/o/projects%2Fsati%2Ftech%2Fprocess.svg?alt=media&token=e2647def-590e-4562-b60b-b3921bdd8dad`, title: "MVC", current: false, proficiency_level: 4 },
])

const AuthAndStorage = reactive<BadgeTech[]>([
    { src: `https://firebasestorage.googleapis.com/v0/b/portfolio-2cd49.firebasestorage.app/o/projects%2Fsati%2Ftech%2Ffirebase.svg?alt=media&token=e2647def-590e-4562-b60b-b3921bdd8dad`, title: "FIREBASE AUTH", current: false, proficiency_level: 2 },
    { src: `https://firebasestorage.googleapis.com/v0/b/portfolio-2cd49.firebasestorage.app/o/projects%2Fsati%2Ftech%2Ffirebase.svg?alt=media&token=e2647def-590e-4562-b60b-b3921bdd8dad`, title: "FIREBASE STORAGE", current: false, proficiency_level: 2 },
])

const AgileMethodologies = reactive<BadgeTech[]>([
    { src: `https://firebasestorage.googleapis.com/v0/b/portfolio-2cd49.firebasestorage.app/o/projects%2Fsati%2Ftech%2Fkanban.svg?alt=media&token=e2647def-590e-4562-b60b-b3921bdd8dad`, title: "KANBAN", current: true, proficiency_level: 4 },
    { src: `https://firebasestorage.googleapis.com/v0/b/portfolio-2cd49.firebasestorage.app/o/projects%2Fsati%2Ftech%2Fscrum.svg?alt=media&token=e2647def-590e-4562-b60b-b3921bdd8dad`, title: "SCRUM", current: true, proficiency_level: 3 },
])

const SO = reactive<BadgeTech[]>([
    { src: `https://firebasestorage.googleapis.com/v0/b/portfolio-2cd49.firebasestorage.app/o/projects%2Fsati%2Ftech%2Flinux.svg?alt=media&token=e2647def-590e-4562-b60b-b3921bdd8dad`, title: "LINUX", current: false, proficiency_level: 2 },
    { src: `https://firebasestorage.googleapis.com/v0/b/portfolio-2cd49.firebasestorage.app/o/projects%2Fsati%2Ftech%2Fmacos.svg?alt=media&token=e2647def-590e-4562-b60b-b3921bdd8dad`, title: "MACOS", current: true, proficiency_level: 2 },
    { src: `https://firebasestorage.googleapis.com/v0/b/portfolio-2cd49.firebasestorage.app/o/projects%2Fsati%2Ftech%2Fwindows.svg?alt=media&token=e2647def-590e-4562-b60b-b3921bdd8dad`, title: "WINDOWS", current: false, proficiency_level: 2 },
])

export const MockTechnologies = reactive<BadgeCategory[]>([
    { title: "Linguagens", badges: Languages },
    { title: "Frameworks e Bibliotecas", badges: FrameworksAndLibraries },
    { title: "Banco de dados e Cloud", badges: DatabaseAndCloud },
    { title: "DevOps e Ferramentas de desenvolvimento", badges: DevOpsAndSettingsDevelopment },
    { title: "Front-end e UX/UI", badges: FrondEndAndUxUi },
    { title: "Arquitetura e Padrões de desenvolvimento", badges: ArchitectureAndDevelopmentPatterns },
    { title: "Autenticação e Armazenamento", badges: AuthAndStorage },
    { title: "Metodologias Ágeis", badges: AgileMethodologies },
    { title: "Sistemas Operacionais", badges: SO },
])

export const MockTrajectories = reactive<Trajectory[]>([
    {
        "text": `Iníciei no mundo da informática no ensino médio através do curso técnico profissionalizante de T.I.
             No primeiro semestre do curso, houve uma prova 
             de lógia de programação na escola para concorrer a uma vaga em um curso chamado Coding na Escolas - UFC, onde ensinava lógica de 
             programação, estruturas condicionais, estruturas de repetição, funções, declaração de variáveis nas linguagens Python
             e Java. No curso de T.I, aprendi + sobre programação e conceitos básicos de T.I. Ao final ano, realizei cursos onlines de HTML e
             CSS na plataforma fundação bradesco.`,
        "year": "2017",
        "html": [
            {
                "type": "images",
                "data": [
                    { "url": `https://firebasestorage.googleapis.com/v0/b/portfolio-2cd49.firebasestorage.app/o/projects%2Fsati%2Ftech%2Fjava.svg?alt=media&token=e2647def-590e-4562-b60b-b3921bdd8dad`, "text": "Java" },
                    { "url": `https://firebasestorage.googleapis.com/v0/b/portfolio-2cd49.firebasestorage.app/o/projects%2Fsati%2Ftech%2Fpython.svg?alt=media&token=e2647def-590e-4562-b60b-b3921bdd8dad`, "text": "Python" },
                    { "url": `https://firebasestorage.googleapis.com/v0/b/portfolio-2cd49.firebasestorage.app/o/projects%2Fsati%2Ftech%2Fhtml.svg?alt=media&token=e2647def-590e-4562-b60b-b3921bdd8dad`, "text": "HTML" },
                    { "url": `https://firebasestorage.googleapis.com/v0/b/portfolio-2cd49.firebasestorage.app/o/projects%2Fsati%2Ftech%2Fcss.svg?alt=media&token=e2647def-590e-4562-b60b-b3921bdd8dad`, "text": "CSS" }
                ],
                "text": "Tecnologias"
            },
            {
                "type": "links",
                "data": [
                    { "url": "/certifications", "text": "Coding nas Escolas" },
                    { "url": "/certifications?id=12GSDLJHYbYuTUg2T_wFHm7ooKdIHwwHR", "text": "Curso HTML" },
                    { "url": "/certifications?id=1bDJHnbezaj7JVvH_FoABUUBnCNftrIsE", "text": "Curso CSS" },
                ],
                "text": "Links"
            },
        ]
    },
    {
        "text": `No meu segundo ano do curso profissionalizante de T.I, aprendi sobre HTML, CSS, JAVASCRIPT, PHP, JAVA e MySQL.
             Ao longo do ano estudei essas tecnologias com exercícios práticos e teóricos. Desenvolvi alguns códigos como páginas simples
             com HTML, CSS e JavaScript. Também desenvolvi back-end com PHP + Apache + MySQL e em java criei pequenos projetos como uma calculdadora
             de juros simples e compostos, entre outros pequenos projetos para fixação de conteúdo.`,
        "year": "2018",
        "html": [
            {
                "type": "images",
                "data": [
                    { "url": `https://firebasestorage.googleapis.com/v0/b/portfolio-2cd49.firebasestorage.app/o/projects%2Fsati%2Ftech%2Fjava.svg?alt=media&token=e2647def-590e-4562-b60b-b3921bdd8dad`, "text": "Java" },
                    { "url": `https://firebasestorage.googleapis.com/v0/b/portfolio-2cd49.firebasestorage.app/o/projects%2Fsati%2Ftech%2Fphp.svg?alt=media&token=e2647def-590e-4562-b60b-b3921bdd8dad`, "text": "PHP" },
                    { "url": `https://firebasestorage.googleapis.com/v0/b/portfolio-2cd49.firebasestorage.app/o/projects%2Fsati%2Ftech%2Fmysql.svg?alt=media&token=e2647def-590e-4562-b60b-b3921bdd8dad`, "text": "MySQL" },
                    { "url": `https://firebasestorage.googleapis.com/v0/b/portfolio-2cd49.firebasestorage.app/o/projects%2Fsati%2Ftech%2Fpython.svg?alt=media&token=e2647def-590e-4562-b60b-b3921bdd8dad`, "text": "Python" },
                    { "url": `https://firebasestorage.googleapis.com/v0/b/portfolio-2cd49.firebasestorage.app/o/projects%2Fsati%2Ftech%2Fhtml.svg?alt=media&token=e2647def-590e-4562-b60b-b3921bdd8dad`, "text": "HTML" },
                    { "url": `https://firebasestorage.googleapis.com/v0/b/portfolio-2cd49.firebasestorage.app/o/projects%2Fsati%2Ftech%2Fjs.svg?alt=media&token=e2647def-590e-4562-b60b-b3921bdd8dad`, "text": "JavaScript" },
                    { "url": `https://firebasestorage.googleapis.com/v0/b/portfolio-2cd49.firebasestorage.app/o/projects%2Fsati%2Ftech%2Fcss.svg?alt=media&token=e2647def-590e-4562-b60b-b3921bdd8dad`, "text": "CSS" }
                ], "text": "Tecnologias"
            },
            {
                "type": "links",
                "data": [
                    { "url": "https://github.com/rafaelleonan/calculadora-juros-java", "text": "Repo. do projeto java (Calculadora)" },
                    { "url": "/projects/3", "text": "Projeto java (Calculadora)" },
                ],
                "text": "Links"
            },
        ]
    },
    {
        "text": `No meu último ano desenvolvi projetos mais completos utilizando PHP + MySQL para o back-end e HTML, CSS e JavaScript para
             o front-end. Um dos projetos foi um realizado em grupo, o projeto consistia em um petshop com exibição de produtos e outros serviços.
             Outro projeto em PHP foi realizado também em grupo e consistia em um portal de notícias de esportes, com seção de notícias novas, comentário
             cadastro e login de usuários. Também realizei um projeto em dupla utilizando Java + MySQL, um sistema de PDV para supermercados.
             Por fim, ao final do curso e do ano realizei um estágio de desenvolvimento Web em uma empresa dentro da UFC, onde trabalhei com Python + Django 2 e Vue js 2.`,
        "year": "2019",
        "html": [
            {
                "type": "images",
                "data": [
                    { "url": `https://firebasestorage.googleapis.com/v0/b/portfolio-2cd49.firebasestorage.app/o/projects%2Fsati%2Ftech%2Fjava.svg?alt=media&token=e2647def-590e-4562-b60b-b3921bdd8dad`, "text": "Java" },
                    { "url": `https://firebasestorage.googleapis.com/v0/b/portfolio-2cd49.firebasestorage.app/o/projects%2Fsati%2Ftech%2Fphp.svg?alt=media&token=e2647def-590e-4562-b60b-b3921bdd8dad`, "text": "PHP" },
                    { "url": `https://firebasestorage.googleapis.com/v0/b/portfolio-2cd49.firebasestorage.app/o/projects%2Fsati%2Ftech%2Fmysql.svg?alt=media&token=e2647def-590e-4562-b60b-b3921bdd8dad`, "text": "MySQL" },
                    { "url": `https://firebasestorage.googleapis.com/v0/b/portfolio-2cd49.firebasestorage.app/o/projects%2Fsati%2Ftech%2Fpython.svg?alt=media&token=e2647def-590e-4562-b60b-b3921bdd8dad`, "text": "Python" },
                    { "url": `https://firebasestorage.googleapis.com/v0/b/portfolio-2cd49.firebasestorage.app/o/projects%2Fsati%2Ftech%2Fdjango.svg?alt=media&token=e2647def-590e-4562-b60b-b3921bdd8dad`, "text": "Django" },
                    { "url": `https://firebasestorage.googleapis.com/v0/b/portfolio-2cd49.firebasestorage.app/o/projects%2Fsati%2Ftech%2Fhtml.svg?alt=media&token=e2647def-590e-4562-b60b-b3921bdd8dad`, "text": "HTML" },
                    { "url": `https://firebasestorage.googleapis.com/v0/b/portfolio-2cd49.firebasestorage.app/o/projects%2Fsati%2Ftech%2Fjs.svg?alt=media&token=e2647def-590e-4562-b60b-b3921bdd8dad`, "text": "JavaScript" },
                    { "url": `https://firebasestorage.googleapis.com/v0/b/portfolio-2cd49.firebasestorage.app/o/projects%2Fsati%2Ftech%2Fcss.svg?alt=media&token=e2647def-590e-4562-b60b-b3921bdd8dad`, "text": "CSS" }
                ], "text": "Tecnologias"
            },
            {
                "type": "links",
                "data": [
                    { "url": "https://github.com/rafaelleonan/ponto", "text": "Repo. I do Estágio" },
                    { "url": "https://github.com/rafaelleonan/projeto-django-e-vuejs", "text": "Repo. II do Estágio" },
                    { "url": "https://github.com/rafaelleonan/projeto-com-django-II", "text": "Repo. III do Estágio" }
                ],
                "text": "Links"
            },
        ]
    },
    {
        "text": `No início de 2020, passei por um processo seletivo para uma vaga de desenvolvedor full stack na empresa FIX PAY.
             Onde acabei sendo contratado como MEI, pois ainda não tinha iniciado na faculdade. Durante o ano estudei diversas tecnologias novas
             como Ruby, Ruby On Rails, JQuery, Electron, GO, PostgreSQL, GIT e aprendi mais sobre Vue JS. Conclui cursos na plataforma Alura em uma
             conta compartilhada da empresa. Após os estudos no mesmo ano, peguei algumas pequenas demandas de melhorias e ajustes de bugs em
             Vue js e Ruby On Rails nos projetos da empresa. Neste ano também fiz um curso completo de react na plataforma online Rocketseat.`,
        "year": "2020",
        "html": [
            {
                "type": "images",
                "data": [
                    { "url": `https://firebasestorage.googleapis.com/v0/b/portfolio-2cd49.firebasestorage.app/o/projects%2Fsati%2Ftech%2Fruby.svg?alt=media&token=e2647def-590e-4562-b60b-b3921bdd8dad`, "text": "Ruby" },
                    { "url": `https://firebasestorage.googleapis.com/v0/b/portfolio-2cd49.firebasestorage.app/o/projects%2Fsati%2Ftech%2Frails.svg?alt=media&token=e2647def-590e-4562-b60b-b3921bdd8dad`, "text": "Ruby On Rais" },
                    { "url": `https://firebasestorage.googleapis.com/v0/b/portfolio-2cd49.firebasestorage.app/o/projects%2Fsati%2Ftech%2Felectron.svg?alt=media&token=e2647def-590e-4562-b60b-b3921bdd8dad`, "text": "Electron" },
                    { "url": `https://firebasestorage.googleapis.com/v0/b/portfolio-2cd49.firebasestorage.app/o/projects%2Fsati%2Ftech%2Fgo.svg?alt=media&token=e2647def-590e-4562-b60b-b3921bdd8dad`, "text": "GO" },
                    { "url": `https://firebasestorage.googleapis.com/v0/b/portfolio-2cd49.firebasestorage.app/o/projects%2Fsati%2Ftech%2Fpostgresql.svg?alt=media&token=e2647def-590e-4562-b60b-b3921bdd8dad`, "text": "PostgreSQL" },
                    { "url": `https://firebasestorage.googleapis.com/v0/b/portfolio-2cd49.firebasestorage.app/o/projects%2Fsati%2Ftech%2Fvue.svg?alt=media&token=e2647def-590e-4562-b60b-b3921bdd8dad`, "text": "Vue JS" },
                    { "url": `https://firebasestorage.googleapis.com/v0/b/portfolio-2cd49.firebasestorage.app/o/projects%2Fsati%2Ftech%2Freact.svg?alt=media&token=e2647def-590e-4562-b60b-b3921bdd8dad`, "text": "React JS" },
                ], "text": "Tecnologias"
            },
            {
                "type": "links",
                "data": [
                    { "url": "https://github.com/rafaelleonan/curso-vuejs", "text": "Repo. curso Vue js" },
                    { "url": "https://github.com/rafaelleonan/golang-poo", "text": "Repo. I curso GO" },
                    { "url": "https://github.com/rafaelleonan/cursor-go-validacoes-testes-paginas", "text": "Repo. II curso GO" },
                    { "url": "https://github.com/rafaelleonan/https://github.com/rafaelleonan/curso-basico-golang", "text": "Repo. II curso GO" },
                    { "url": "https://github.com/rafaelleonan/carousel", "text": "Repo. estudo Electron JS" },
                ],
                "text": "Links"
            },
        ]
    },
    {
        "text": `Neste ano aprofundei meus conhecimentos nas tecnologias que já conhecia, como Vue js 2, HTML, CSS, JavaScript, JQuery,
             Ruby On Rails, GIT, PostgreSQL e apliquei na prática em demandas de melhorias, inovação, correção de bugs e em análise e correção de código.
             Durante o ano também estudei e realizei cursos de novas tecnologias, principalmente o GO e Flutter, framework que utiliza a linguagem
             Dart para o desenvolvimento de plataformas hibridas, iOS, Android, Web e Desktop. No segundo semestre ingressei no curso de 
             Análise e Desenvolvimento de Sistemas na Unifametro e mudei o tipo de contrato de MEI para estágio na FIX PAY.`,
        "year": "2021",
        "html": [
            {
                "type": "images",
                "data": [
                    { "url": `https://firebasestorage.googleapis.com/v0/b/portfolio-2cd49.firebasestorage.app/o/projects%2Fsati%2Ftech%2Fvue.svg?alt=media&token=e2647def-590e-4562-b60b-b3921bdd8dad`, "text": "Vue JS" },
                    { "url": `https://firebasestorage.googleapis.com/v0/b/portfolio-2cd49.firebasestorage.app/o/projects%2Fsati%2Ftech%2Fgo.svg?alt=media&token=e2647def-590e-4562-b60b-b3921bdd8dad`, "text": "GO" },
                    { "url": `https://firebasestorage.googleapis.com/v0/b/portfolio-2cd49.firebasestorage.app/o/projects%2Fsati%2Ftech%2Fgit.svg?alt=media&token=e2647def-590e-4562-b60b-b3921bdd8dad`, "text": "GIT" },
                    { "url": `https://firebasestorage.googleapis.com/v0/b/portfolio-2cd49.firebasestorage.app/o/projects%2Fsati%2Ftech%2Fpostgresql.svg?alt=media&token=e2647def-590e-4562-b60b-b3921bdd8dad`, "text": "PostgreSQL" },
                    { "url": `https://firebasestorage.googleapis.com/v0/b/portfolio-2cd49.firebasestorage.app/o/projects%2Fsati%2Ftech%2Fflutter.svg?alt=media&token=e2647def-590e-4562-b60b-b3921bdd8dad`, "text": "Flutter" },
                    { "url": `https://firebasestorage.googleapis.com/v0/b/portfolio-2cd49.firebasestorage.app/o/projects%2Fsati%2Ftech%2Fdart.svg?alt=media&token=e2647def-590e-4562-b60b-b3921bdd8dad`, "text": "Dart" },
                    { "url": `https://firebasestorage.googleapis.com/v0/b/portfolio-2cd49.firebasestorage.app/o/projects%2Fsati%2Ftech%2Fjs.svg?alt=media&token=e2647def-590e-4562-b60b-b3921bdd8dad`, "text": "JavaScript" }
                ], "text": "Tecnologias"
            },
            {
                "type": "links",
                "data": [
                    { "url": "https://github.com/rafaelleonan/curso-ruby", "text": "Repo. I curso Ruby" },
                    { "url": "https://github.com/rafaelleonan/curso-ruby-II", "text": "Repo. II curso Ruby" },
                    { "url": "https://github.com/rafaelleonan/curso-ruby-III", "text": "Repo. III curso Ruby" },
                    { "url": "https://github.com/rafaelleonan/curso-ruby-on-rails", "text": "Repo. curso Ruby on Rails" },
                    { "url": "/certifications?id=UC-e29bd996-0660-4e72-9aa1-8d30bd172f05", "text": "Certificado Flutter" },
                ],
                "text": "Links"
            },
        ]
    },
    {
        "text": `Aprimorei meus conhecimentos em GO no desenvolvimento de APIs RESTful, e integração com o front-end utilizando os frameworks
             Vue js e Flutter. Conheci e desenvolvi na prática Vue js 3 + TypeScript + Vite + SASS.
             No segundo semestre participei juntamente com colegas do trabalho do evento GopherCon realizado em Grande Florianópolis, São José - SC.
             Participar do GopherCon foi possível pois a FIX PAY, empresa onde trabalho pagou todos os custos de viagem para o evento.
             Ao final do ano fiz cursos sobre a linguagem Elixir e iniciei cursos sobre o framework Phoenix com Elixir. Neste ano também migrei de 
             estágio para CLT.`,
        "year": "2022",
        "html": [
            {
                "type": "images",
                "data": [
                    { "url": `https://firebasestorage.googleapis.com/v0/b/portfolio-2cd49.firebasestorage.app/o/projects%2Fsati%2Ftech%2Fvue.svg?alt=media&token=e2647def-590e-4562-b60b-b3921bdd8dad`, "text": "Vue js" },
                    { "url": `https://firebasestorage.googleapis.com/v0/b/portfolio-2cd49.firebasestorage.app/o/projects%2Fsati%2Ftech%2Fflutter.svg?alt=media&token=e2647def-590e-4562-b60b-b3921bdd8dad`, "text": "Flutter" },
                    { "url": `https://firebasestorage.googleapis.com/v0/b/portfolio-2cd49.firebasestorage.app/o/projects%2Fsati%2Ftech%2Fts.svg?alt=media&token=e2647def-590e-4562-b60b-b3921bdd8dad`, "text": "TypeScript" },
                    { "url": `https://firebasestorage.googleapis.com/v0/b/portfolio-2cd49.firebasestorage.app/o/projects%2Fsati%2Ftech%2Fsass.svg?alt=media&token=e2647def-590e-4562-b60b-b3921bdd8dad`, "text": "SASS" },
                    { "url": `https://firebasestorage.googleapis.com/v0/b/portfolio-2cd49.firebasestorage.app/o/projects%2Fsati%2Ftech%2Fgo.svg?alt=media&token=e2647def-590e-4562-b60b-b3921bdd8dad`, "text": "GO" },
                    { "url": `https://firebasestorage.googleapis.com/v0/b/portfolio-2cd49.firebasestorage.app/o/projects%2Fsati%2Ftech%2Felixir.svg?alt=media&token=e2647def-590e-4562-b60b-b3921bdd8dad`, "text": "Elixir" },
                    { "url": `https://firebasestorage.googleapis.com/v0/b/portfolio-2cd49.firebasestorage.app/o/projects%2Fsati%2Ftech%2Fphoenix.svg?alt=media&token=e2647def-590e-4562-b60b-b3921bdd8dad`, "text": "Phoenix" },
                ], "text": "Tecnologias"
            },
            {
                "type": "links",
                "data": [
                    { "url": "/certifications?id=UC-9ad3b702-32f2-4e9f-a1a1-55b05dba5596", "text": "Certificado Elixir" },
                    { "url": "/certifications?id=UC-d3269a6c-3b4c-4a06-8225-6e996f7dab5c", "text": "Certificado Elixir com Phoenix" },
                    { "url": "/certifications?id=1QUKAcKbgH8OeyeVm6LdGp1WXj8FB263e", "text": "Certificado GopherCon 2022" },
                ],
                "text": "Links"
            },
        ]
    },
    {
        "text": `Estudei e aprimorei bastante meus conhecimentos em desenvolvimento de software.
             Realizei alguns cursos na plataforma Udemy e Alura para
             conhecer novas tecnologias e aprofundar meus conhecimentos nas tecnologias que já trabalho.
             Concluí cursos de: Elixir, Linux para Desenvolvedores, Formação Kotlin, Formação Android com Kotlin 
             e iniciei outros na plataforma Udemy. Também desenvolvi um projeto simples em 
             React js para aplicar meus estudos e conhecimentos no framework. 
             No segundo semestre migrei a faculdade ADS para EAD, pois acabei tendo alguns problema quando estava presencial e
             na modalidade EAD conseguiria focar e dar uma atenção melhor na faculdade.`,
        "year": "2023",
        "html": [
            {
                "type": "images",
                "data": [
                    { "url": `https://firebasestorage.googleapis.com/v0/b/portfolio-2cd49.firebasestorage.app/o/projects%2Fsati%2Ftech%2Fkotlin.svg?alt=media&token=e2647def-590e-4562-b60b-b3921bdd8dad`, "text": "Kotlin" },
                    { "url": `https://firebasestorage.googleapis.com/v0/b/portfolio-2cd49.firebasestorage.app/o/projects%2Fsati%2Ftech%2Fandroid.svg?alt=media&token=e2647def-590e-4562-b60b-b3921bdd8dad`, "text": "Android" },
                    { "url": `https://firebasestorage.googleapis.com/v0/b/portfolio-2cd49.firebasestorage.app/o/projects%2Fsati%2Ftech%2Flinux.svg?alt=media&token=e2647def-590e-4562-b60b-b3921bdd8dad`, "text": "Linux" },
                    { "url": `https://firebasestorage.googleapis.com/v0/b/portfolio-2cd49.firebasestorage.app/o/projects%2Fsati%2Ftech%2Freact.svg?alt=media&token=e2647def-590e-4562-b60b-b3921bdd8dad`, "text": "React JS" },
                ], "text": "Tecnologias"
            },
            {
                "type": "links",
                "data": [
                    { "url": "https://github.com/rafaelleonan?tab=repositories&q=&type=&language=kotlin&sort=", "text": "Repositórios da formação Android + Kotlin" },
                    { "url": "https://github.com/rafaelleonan/projeto-reactjs", "text": "Repositório React JS" },
                ],
                "text": "Links"
            },
        ]
    },
    {
        "text": `Neste ano concluí todos os cursos que tinha iniciado no ano anterior na plataforma da Udemy.
             Os cursos são sobre Docker com Swarn e Kubernetes, Programação em Shell Script, UI & UX - Adobe XD e PSD,
             UI - Figma, Desenvolvimento iOS e também iniciei novos cursos. O que aprendi nos cursos,
             apliquei diriamente no meu trabalho onde obtive muitos conhecimentos também, mais até do que nos cursos e principalmente
             com outros desenvolvedores com mais tempo na área. No segundo semestre concluí a faculdade de ADS.`,
        "year": "2024",
        "html": [
            {
                "type": "images",
                "data": [
                    { "url": `https://firebasestorage.googleapis.com/v0/b/portfolio-2cd49.firebasestorage.app/o/projects%2Fsati%2Ftech%2Fdocker.svg?alt=media&token=e2647def-590e-4562-b60b-b3921bdd8dad`, "text": "Docker" },
                    { "url": `https://firebasestorage.googleapis.com/v0/b/portfolio-2cd49.firebasestorage.app/o/projects%2Fsati%2Ftech%2Fadobe-xd.svg?alt=media&token=e2647def-590e-4562-b60b-b3921bdd8dad`, "text": "Adobe XD" },
                    { "url": `https://firebasestorage.googleapis.com/v0/b/portfolio-2cd49.firebasestorage.app/o/projects%2Fsati%2Ftech%2Ffigma.svg?alt=media&token=e2647def-590e-4562-b60b-b3921bdd8dad`, "text": "Figma" },
                    { "url": `https://firebasestorage.googleapis.com/v0/b/portfolio-2cd49.firebasestorage.app/o/projects%2Fsati%2Ftech%2Fswift.svg?alt=media&token=e2647def-590e-4562-b60b-b3921bdd8dad`, "text": "Swift" },
                ], "text": "Tecnologias"
            },
            {
                "type": "links",
                "data": [
                    { "url": "/certifications?id=UC-277a8a2d-a235-48aa-8ff3-6b14692b4ad0", "text": "Certificado Docker" },
                    { "url": "/certifications?id=UC-bb81955d-6f98-4fbc-9b5d-3602bc849d0d", "text": "Certificado UI & UX Adobe XD" },
                    { "url": "/certifications?id=UC-50a90aec-6e77-48d4-9e13-f263c8014798", "text": "Certificado UI & UX Figma" },
                    { "url": "/certifications?id=UC-89e500c7-7a6c-4f76-8922-9df58fcfc3aa", "text": "Certificado iOS nativo" },
                ],
                "text": "Links"
            },
        ]
    },
    {
        "text": `Finalizei todos os cursos pendentes na Udemy que tinha iniciado ao longo de 2024.
             Cursos completos de PHP, React JS + TypeScript, React Native, Java + Spring Boot, Flutter aplicações web responsivas,
             Python + Django, TypeScript, Desenvolvimento iOS e iniciei um curso de Google Cloud Professional Coud Architect.
             Por fim, assinei a ATA de colação de grau do curso de Análise e Desenvolvimento de Sistemas que concluí no final de 2024.`,
        "year": "2025",
        "html": [
            {
                "type": "images",
                "data": [
                    { "url": `https://firebasestorage.googleapis.com/v0/b/portfolio-2cd49.firebasestorage.app/o/projects%2Fsati%2Ftech%2Fjava.svg?alt=media&token=e2647def-590e-4562-b60b-b3921bdd8dad`, "text": "Java" },
                    { "url": `https://firebasestorage.googleapis.com/v0/b/portfolio-2cd49.firebasestorage.app/o/projects%2Fsati%2Ftech%2Fspring-boot.svg?alt=media&token=e2647def-590e-4562-b60b-b3921bdd8dad`, "text": "SpringBoot" },
                    { "url": `https://firebasestorage.googleapis.com/v0/b/portfolio-2cd49.firebasestorage.app/o/projects%2Fsati%2Ftech%2Fpython.svg?alt=media&token=e2647def-590e-4562-b60b-b3921bdd8dad`, "text": "Python" },
                    { "url": `https://firebasestorage.googleapis.com/v0/b/portfolio-2cd49.firebasestorage.app/o/projects%2Fsati%2Ftech%2Fdjango.svg?alt=media&token=e2647def-590e-4562-b60b-b3921bdd8dad`, "text": "Django" },
                    { "url": `https://firebasestorage.googleapis.com/v0/b/portfolio-2cd49.firebasestorage.app/o/projects%2Fsati%2Ftech%2Freact.svg?alt=media&token=e2647def-590e-4562-b60b-b3921bdd8dad`, "text": "React" },
                    { "url": `https://firebasestorage.googleapis.com/v0/b/portfolio-2cd49.firebasestorage.app/o/projects%2Fsati%2Ftech%2Fts.svg?alt=media&token=e2647def-590e-4562-b60b-b3921bdd8dad`, "text": "TypeScript" },
                ], "text": "Tecnologias"
            },
            {
                "type": "links",
                "data": [
                    { "url": "/certifications?id=UC-35c234e5-a20c-4466-9dbd-89339cdaf912", "text": "Certificado React JS" },
                    { "url": "/certifications?id=UC-84f78411-5168-4925-b7ff-a04f88405105", "text": "Certificado TypeScript" },
                    { "url": "/certifications?id=UC-4468e666-8938-4eac-b1c0-fc37c1a8a214", "text": "Certificado Django" },
                    { "url": "/certifications?id=UC-f0f3d505-bb39-423f-bedc-e26aaedf703b", "text": "Certificado SpringBoot" },
                ],
                "text": "Links"
            },
        ]
    }
])