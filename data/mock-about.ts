import type {SoftSkill} from "~/interfaces/about";

export const MockSoftSkills = reactive<SoftSkill[]>([
		{
			"id": "trabalho-em-equipe",
			"label": "Trabalho em equipe",
			"description": "Colaborar de forma produtiva com colegas, respeitando opiniões e contribuindo para o sucesso do time.",
			"icon": "diversity_3",
			"level": 2.5,
		},
		{
			"id": "pensamento-critico",
			"label": "Pensamento crítico",
			"description": "Analisar problemas com lógica e propor soluções eficientes com base em dados e experiência.",
			"icon": "psychology",
			"level": 2,
		},
		{
			"id": "organizacao",
			"label": "Organização",
			"description": "Manter o trabalho estruturado, incluindo código, tarefas e responsabilidades diárias.",
			"icon": "fact_check",
			"level": 4.5,
		},
		{
			"id": "gestao-de-tempo",
			"label": "Gestão de tempo",
			"description": "Saber priorizar tarefas e cumprir prazos de forma eficiente, sem comprometer a qualidade.",
			"icon": "access_time",
			"level": 3,
		},
		{
			"id": "empatia",
			"label": "Empatia",
			"description": "Compreender as necessidades e limitações dos outros, promovendo um ambiente mais colaborativo.",
			"icon": "volunteer_activism",
			"level": 3,
		},
		{
			"id": "escuta-ativa",
			"label": "Escuta ativa",
			"description": "Ouvir com atenção e interpretar corretamente instruções, feedbacks e necessidades da equipe.",
			"icon": "hearing",
			"level": 3,
		},
		{
			"id": "resiliencia",
			"label": "Resiliência",
			"description": "Lidar bem com falhas, críticas e mudanças de contexto sem perder a motivação ou produtividade.",
			"icon": "all_inclusive",
			"level": 4,
		},
		{
			"id": "adaptabilidade",
			"label": "Adaptabilidade",
			"description": "Se ajustar rapidamente a novas tecnologias, metodologias ou mudanças de escopo.",
			"icon": "autorenew",
			"level": 4,
		},
		{
			"id": "curiosidade",
			"label": "Curiosidade",
			"description": "Interesse contínuo em aprender novas tecnologias, ferramentas e formas de resolver problemas.",
			"icon": "psychology_alt",
			"level": 4,
		},
		{
			"id": "autogerenciamento",
			"label": "Autogerenciamento",
			"description": "Ser responsável, cumprir metas e manter a produtividade sem precisar de supervisão constante.",
			"icon": "sensor_occupied",
			"level": 4,
		},
		{
			"id": "mentalidade-de-crescimento",
			"label": "Mentalidade de crescimento",
			"description": "Buscar evolução constante, aprendendo com erros e desafios para melhorar continuamente.",
			"icon": "rocket_launch",
			"level": 5,
		}
])