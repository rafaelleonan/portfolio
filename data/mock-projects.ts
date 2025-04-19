import type {Project} from "~/interfaces/projects";
import { reactive } from "vue";
import type {GenericOption} from "~/interfaces/geral";

export const MockProjects = reactive<Project[]>([
  {
      "id": 1,
      "title": "SISTEMA PARA GESTÃO DE HOSPITAIS",
      "current_index": 0,
      "type_project": ["Fullstack", "Design", "Frontend", "Backend", "API RESTful", "Web"],
      "description": `Esse projeto foi planejado e desenvolvido para uma cadeira da faculdade PRÁTICAS INTEGRATIVAS.
          Ele foi desenvolvido com o framework Vue js 3 para o frontend, consumindo os dados de uma REST Full APIs em GO com Fiber.
          O banco de dados utilizado é o PostgreSQL, para a avaliação do professor os 2 projetos(frontend e backend) foram hospedados
          no EC2 da AWS com containers em docker, e o banco de dados também foi armazenado na AWS utilizando o serviço de RDS.
          Na época também comprei e configurei um DNS para o projeto, atualmente o projeto frontend está hospedado no github pages.
          Foi planejado e desenvolvido as telas com o figma para uma melhor implementação no código. Os links do dockerhub para visualizar as imagens docker
          visualizar as telas do projeto no figma, e outros links estão disponíveis logo acima, no início dessa página`,
      "post_date": "11/01/2025 19:55",
      "images": [
          { "alt": "Tela de dashboard", "src": "https://firebasestorage.googleapis.com/v0/b/portfolio-2cd49.firebasestorage.app/o/projects%2Fsati%2Fdashboard_tela.png?alt=media&token=5a4342a3-82b9-457b-a079-419030dc2882" },
          { "alt": "Tela de login", "src": "https://firebasestorage.googleapis.com/v0/b/portfolio-2cd49.firebasestorage.app/o/projects%2Fsati%2Flogin_tela.png?alt=media&token=e209892d-bda7-49fd-9512-7a0e4c1f9e71" },
          { "alt": "Tela de unidades", "src": "https://firebasestorage.googleapis.com/v0/b/portfolio-2cd49.firebasestorage.app/o/projects%2Fsati%2Funidades_tela.png?alt=media&token=a73e8ee6-0d0f-4d53-8fb5-ace1351b4d0d" },
          { "alt": "Tela de unidade detalhes", "src": "https://firebasestorage.googleapis.com/v0/b/portfolio-2cd49.firebasestorage.app/o/projects%2Fsati%2Funidade_detalhes.png?alt=media&token=ddf46793-1f72-4572-a763-298dafd61c6c" },
          { "alt": "Tela de meus dados", "src": "https://firebasestorage.googleapis.com/v0/b/portfolio-2cd49.firebasestorage.app/o/projects%2Fsati%2Fmeus_dados.png?alt=media&token=7031d305-9a5b-4e4c-8631-141dc27691c3" },
          { "alt": "Tela de pacientes", "src": "https://firebasestorage.googleapis.com/v0/b/portfolio-2cd49.firebasestorage.app/o/projects%2Fsati%2Fpacientes_detalhes.png?alt=media&token=a2bddcd6-f3e1-4dd7-8593-47fd0db258c3" },
          { "alt": "Tela de pacientes prontuário", "src": "https://firebasestorage.googleapis.com/v0/b/portfolio-2cd49.firebasestorage.app/o/projects%2Fsati%2Fpacientes_prontuario.png?alt=media&token=75f7e1b0-e6c1-405b-8ca5-09b88a2fa453" },
          { "alt": "Tela de alterar senha", "src": "https://firebasestorage.googleapis.com/v0/b/portfolio-2cd49.firebasestorage.app/o/projects%2Fsati%2Falterar_senha.png?alt=media&token=c3651d27-c518-4610-94c5-8e1d19bab5b0" },
          { "alt": "Tela de recuperar senha 1", "src": "https://firebasestorage.googleapis.com/v0/b/portfolio-2cd49.firebasestorage.app/o/projects%2Fsati%2Frecovery_password_1.png?alt=media&token=88123b72-8ebf-4b9d-bc7b-93958a3e9e44" },
          { "alt": "Tela de recuperar senha 2", "src": "https://firebasestorage.googleapis.com/v0/b/portfolio-2cd49.firebasestorage.app/o/projects%2Fsati%2Frecovery_password_2.png?alt=media&token=b63cc058-ee23-4c46-aac1-8ee1f022ceb7" },
          { "alt": "Tela de recuperar senha 3", "src": "https://firebasestorage.googleapis.com/v0/b/portfolio-2cd49.firebasestorage.app/o/projects%2Fsati%2Frecovery_password_3.png?alt=media&token=19c686d8-ceae-4379-a8ed-308f1dbb834b" },
          { "alt": "Email de recuperar senha", "src": "https://firebasestorage.googleapis.com/v0/b/portfolio-2cd49.firebasestorage.app/o/projects%2Fsati%2Femail_recovery_password.png?alt=media&token=36321f3b-bbc8-47b2-9daa-a8a54ab3e8f0" },
          { "alt": "Email de recuperar senha 2", "src": "https://firebasestorage.googleapis.com/v0/b/portfolio-2cd49.firebasestorage.app/o/projects%2Fsati%2Femail_recovery_password_0.png?alt=media&token=60c0a1ee-db6e-4ce4-b5b2-42160873d606" },
      ],
      "external_links": [
          {
              "label": "Demonstração do projeto",
              "url": "https://trabalhos-unifametro.github.io/portal-sati/"
          },
          {
              "label": "Repositório do portal web",
              "url": "https://github.com/trabalhos-unifametro/portal-sati"
          },
          {
              "label": "Dockerhub do portal web",
              "url": "https://hub.docker.com/r/rafaelleonan/portal-sati"
          },
          {
              "label": "Repositório da APIs",
              "url": "https://github.com/trabalhos-unifametro/apis-sati"
          },
          {
              "label": "Dockerhub da APIs",
              "url": "https://hub.docker.com/r/rafaelleonan/apis-sati"
          },
          {
              "label": "Protótipo no FIGMA",
              "url": "https://www.figma.com/design/oh6lzDrfnGIJFeGxLYS8un/Sistema-para-gest%C3%A3o-de-Hospitais"
          },
          {
              "label": "Diagrama DB",
              "url": "https://lucid.app/lucidchart/983da376-727a-4395-b73f-7eba5d670fc7/edit?invitationId=inv_89b4568d-b0ba-492c-9885-9a90acfef360&page=0_0#"
          },
      ],
      "technologies": [
          { "name": "NODE JS", "version": ">=18", "icon_url": "https://firebasestorage.googleapis.com/v0/b/portfolio-2cd49.firebasestorage.app/o/projects%2Fsati%2Ftech%2Fnodejs.svg?alt=media&token=fcc57e6f-5fb4-4a97-9fd9-71db7faf7d7b" },
          { "name": "VUE JS", "version": "latest", "icon_url": "https://firebasestorage.googleapis.com/v0/b/portfolio-2cd49.firebasestorage.app/o/projects%2Fsati%2Ftech%2Fvue.svg?alt=media&token=4efc1bbb-40af-4f3e-8873-33f196dd3860" },
          { "name": "GO", "version": "1.19", "icon_url": "https://firebasestorage.googleapis.com/v0/b/portfolio-2cd49.firebasestorage.app/o/projects%2Fsati%2Ftech%2Fgo.svg?alt=media&token=48af8dc0-89e1-416f-9b9b-fa5d203eaac6" },
          { "name": "DOCKER", "version": "latest", "icon_url": "https://firebasestorage.googleapis.com/v0/b/portfolio-2cd49.firebasestorage.app/o/projects%2Fsati%2Ftech%2Fdocker.svg?alt=media&token=72dcbec8-789d-441f-aed9-941acd30462e" },
          { "name": "POSTGRESQL", "version": "latest", "icon_url": "https://firebasestorage.googleapis.com/v0/b/portfolio-2cd49.firebasestorage.app/o/projects%2Fsati%2Ftech%2Fpostgresql.svg?alt=media&token=c37c9a40-b101-4917-a992-914430269bd0" },
      ],
      "sections": [
          {
              "id": 1,
              "title": "Sobre o projeto",
              "order": 1,
              "components": [
                  {
                      "id": 1,
                      "type": "text",
                      "content": `<p>Esse projeto foi planejado e desenvolvido para uma cadeira da faculdade <i>PRÁTICAS INTEGRATIVAS</i>.
                          Ele foi desenvolvido com o framework Vue js 3 para o frontend, consumindo os dados de uma REST Full APIs em GO com Fiber e
                          como banco de dados foi utilizado o PostgreSQL. para a avaliação do professor os 2 projetos(frontend e backend) foram hospedados
                          no EC2 da AWS com containers em docker, e o banco de dados também foi armazenado na AWS utilizando o serviço de RDS.</p>
                          <p>Na época também comprei e configurei um DNS para o projeto, atualmente o projeto frontend está hospedado no github pages.
                          Foi planejado e desenvolvido o protótipo das telas com o figma para uma melhor implementação no código. Os links do dockerhub para visualizar as imagens docker,
                          visualizar as telas do projeto no figma, e outros links estão disponíveis logo acima, no início dessa página</p>`,
                  }
              ]
          },
          {
              "id": 2,
              "title": "Por tela",
              "order": 2,
              "components": [
                  {
                      "id": 2,
                      "type": "carousel_image_with_text",
                      "content": {
                          "current_index": 0,
                          "items": [
                              {
                                  "id": 1,
                                  "title": "Tela de login",
                                  "text": `Essa tela inicial para o usuário do portal-sati realizar o login utilizando suas credenciais.
                                           Possui opções de recuperar senha, por meio de um processo de envio de emails de recuperação de senha,
                                           para o email cadastrado, o que garante uma maior segurança. Nessa tela possui também a opção de
                                           exibir/ocultar a senha para um melhor uso do usuário.`,
                                  "url": "https://firebasestorage.googleapis.com/v0/b/portfolio-2cd49.firebasestorage.app/o/projects%2Fsati%2Flogin_tela.png?alt=media&token=e209892d-bda7-49fd-9512-7a0e4c1f9e71"
                              },
                              {
                                  "id": 2,
                                  "title": "Tela de dashboard",
                                  "text": `Essa tela é a principal do sistema, onde possui seções de unidades e pacientes
                                          exibindo esses dados através de totalizadores e gráficos de pizza, para uma maior e melhor
                                          visualização e interpretação dos dados pelo usuário. Possui ainda uma opção de atalho
                                          para ir para a tela de pacientes ou unidades. Ao final da tela possui um gráfico de barras
                                          exibindo a ocupação mensal das unidades ao longo do último ano.`,
                                  "url": "https://firebasestorage.googleapis.com/v0/b/portfolio-2cd49.firebasestorage.app/o/projects%2Fsati%2Fdashboard_tela.png?alt=media&token=5a4342a3-82b9-457b-a079-419030dc2882"
                              },
                              {
                                  "id": 3,
                                  "title": "Tela de unidades",
                                  "text": `Essa tela possui elementos para exibir as unidades do hospital cadastradas na base de dados.
                                          É possível visualizar os dados através de totalizadores e componentes onde exibem uma visualizam
                                          individual de cada unidade. A tela possui filtros para uma pesquisa mais minuciosa pelo usuário e
                                          também possui ordenação e paginação.`,
                                  "url": "https://firebasestorage.googleapis.com/v0/b/portfolio-2cd49.firebasestorage.app/o/projects%2Fsati%2Funidades_tela.png?alt=media&token=e209892d-bda7-49fd-9512-7a0e4c1f9e71"
                              },
                              {
                                  "id": 4,
                                  "title": "Tela de unidades - detalhes",
                                  "text": `A tela de detalhes da unidade, exibe todas as informações da unidade selecionada.
                                          Como total de pacientes na unidade, capacidade máxima e vagas se disponível.
                                          Também é exibido uma lista dos pacientes, com opções de ver mais detalhes do paciente ou ver o prontuário.`,
                                  "url": "https://firebasestorage.googleapis.com/v0/b/portfolio-2cd49.firebasestorage.app/o/projects%2Fsati%2Funidade_detalhes.png?alt=media&token=e209892d-bda7-49fd-9512-7a0e4c1f9e71"
                              },
                              {
                                  "id": 5,
                                  "title": "Tela de pacientes",
                                  "text": `A tela de pacientes exibe de forma geral informações de todos os pacientes do
                                           hospital em uma lista e com totalizadores. Essa tela possui filtros para uma busca
                                           mais avançada por pacientes e também a opção de ordenar.
                                           Na listagem de pacientes é possível ver mais detalhes ou ir para tela de prontuário.`,
                                  "url": "https://firebasestorage.googleapis.com/v0/b/portfolio-2cd49.firebasestorage.app/o/projects%2Fsati%2Fpacientes_detalhes.png?alt=media&token=e209892d-bda7-49fd-9512-7a0e4c1f9e71"
                              },
                              {
                                  "id": 6,
                                  "title": "Tela de pacientes - prontuário",
                                  "text": `Essa tela exibe as todas informações do prontuário do paciente selecionado e
                                           alguns campos em branco para quando exportado em PDF e impresso, seja possível realizar o
                                           preenchimento dessas informações. Nessa tela também é possível exportar o prontuário em
                                           formato .PDF.`,
                                  "url": "https://firebasestorage.googleapis.com/v0/b/portfolio-2cd49.firebasestorage.app/o/projects%2Fsati%2Fpacientes_prontuario.png?alt=media&token=e209892d-bda7-49fd-9512-7a0e4c1f9e71"
                              }
                          ]
                      }
                  },
              ]
          },
          {
              "id": 3,
              "title": "Baixando e executando localmente",
              "order": 3,
              "components": [
                  {
                      "id": 4,
                      "type": "text",
                      "content": `<p>É necessário ter instalado e configurado em máquina o <b>Node >= 18</b>, <b>GO 1.19</b> e <b>PostgreSQL</b>
                          com seus binários adicionados ao <b>$PATH</b>. Ter o docker instalado e configurado é opcional, caso queira
                           executar utilizando Docker.</p>`,
                  },
                  {
                      "id": 5,
                      "type": "code_or_instructions",
                      "content": [
                          {
                              "title": "DB - PostgreSQL",
                              "instructions": [
                                  {
                                      "title": "Crie um banco de dados chamado sati_development:",
                                      "type": "code",
                                      "content": "CREATE DATABASE sati_development;"
                                  },
                                  {
                                      "title": "Crie as tabelas do diagrama ER do banco (<a href='https://lucid.app/lucidchart/983da376-727a-4395-b73f-7eba5d670fc7/edit?invitationId=inv_89b4568d-b0ba-492c-9885-9a90acfef360&page=0_0#' rel='noopener noreferrer' target='_blank'>link aqui</a>) ou copie os SCRIPTs aqui:",
                                      "type": "image",
                                      "content": "https://firebasestorage.googleapis.com/v0/b/portfolio-2cd49.firebasestorage.app/o/projects%2Fsati%2Fdiagrama_db.svg?alt=media&token=c43f20c3-b1c0-498c-8b20-10c857890778"
                                  }
                              ]
                          },
                          {
                              "title": "API - apis-sati",
                              "instructions": [
                                  {
                                      "title": "Clonar o projeto:",
                                      "type": "code",
                                      "content": "git clone https://github.com/trabalhos-unifametro/apis-sati"
                                  },
                                  {
                                      "title": "Acessar o diretório raiz do projeto:",
                                      "type": "code",
                                      "content": "cd apis-sati"
                                  },
                                  {
                                      "title": "Arquivo de variáveis de ambiente:",
                                      "type": "code",
                                      "content": "cp .env.development .env"
                                  },
                                  {
                                      "title": "Executar o projeto:",
                                      "type": "code",
                                      "content": "go run main.go"
                                  }
                              ]
                          },
                          {
                              "title": "WEB - Portal S.A.T.I",
                              "instructions": [
                                  {
                                      "title": "Clonar o repositório:",
                                      "type": "code",
                                      "content": "git clone https://github.com/trabalhos-unifametro/portal-sati"
                                  },
                                  {
                                      "title": "Acessar o diretório raiz do projeto:",
                                      "type": "code",
                                      "content": "cd portal-sati"
                                  },
                                  {
                                      "title": "Instalar dependências do projeto:",
                                      "type": "code",
                                      "content": "npm install"
                                  },
                                  {
                                      "title": "Executar o projeto:",
                                      "type": "code",
                                      "content": "npm run dev"
                                  }
                              ]
                          }
                      ]
                  }
              ]
          }
      ],
      "comments": [
          {
              "id": 1,
              "user_name": "John Doe",
              "content": "Great project! Loved the design.",
              "posted_at": "10/12/2024 ás 17:11",
              "replies": [
                  {
                      "id": 2,
                      "user_name": "Author",
                      "content": "Thank you, John!",
                      "posted_at": "11/12/2024 ás 12:35",
                      "reactions": [
                          {
                              "id": 1,
                              "count": 1,
                              "list_users_id": [1],
                              "reaction_type": "like",
                          }
                      ]
                  }
              ],
              "reactions": [
                  {
                      "id": 2,
                      "count": 3,
                      "list_users_id": [1, 3, 4],
                      "reaction_type": "like",
                  },
                  {
                      "id": 3,
                      "count": 5,
                      "list_users_id": [1, 5, 6, 7, 13],
                      "reaction_type": "smile",
                  }
              ]
          }
      ]
},
  {
      "id": 2,
      "title": "APP SIMULADO ENEM",
      "type_project": ["Design", "Mobile"],
      "current_index": 0,
      "description": `Esse projeto foi planejado juntamente com o Antônio Guilherme, com o intuito de auxiliar no estudo de pessoas
                                  que realizam o ENEM a se prepararem com simulados, com questões de provas anteriores ou simulados personalizados.
                                  O design do app foi feito utilizando o FIGMA, definindo a tabela de cores, tipografia e componentes.`,
      "post_date": "11/01/2025 19:55",
      "images": [
          { "alt": "Splash Screen", "src": "https://firebasestorage.googleapis.com/v0/b/portfolio-2cd49.firebasestorage.app/o/projects%2Fapp_simulado_enem%2Fsplash_screen.svg?alt=media&token=d02d7928-bc44-4874-ad43-4d7147014c00" },
          { "alt": "Tela de home", "src": "https://firebasestorage.googleapis.com/v0/b/portfolio-2cd49.firebasestorage.app/o/projects%2Fapp_simulado_enem%2Fhome.svg?alt=media&token=d02d7928-bc44-4874-ad43-4d7147014c00" },
          { "alt": "Tela simulado personalizado - 1", "src": "https://firebasestorage.googleapis.com/v0/b/portfolio-2cd49.firebasestorage.app/o/projects%2Fapp_simulado_enem%2Fsimulado_personalizado_1.svg?alt=media&token=d02d7928-bc44-4874-ad43-4d7147014c00" },
          { "alt": "Tela simulado personalizado - 2", "src": "https://firebasestorage.googleapis.com/v0/b/portfolio-2cd49.firebasestorage.app/o/projects%2Fapp_simulado_enem%2Fsimulado_personalizado_2.svg?alt=media&token=d02d7928-bc44-4874-ad43-4d7147014c00" },
          { "alt": "Tela simulado personalizado - 3", "src": "https://firebasestorage.googleapis.com/v0/b/portfolio-2cd49.firebasestorage.app/o/projects%2Fapp_simulado_enem%2Fsimulado_personalizado_3.svg?alt=media&token=d02d7928-bc44-4874-ad43-4d7147014c00" },
          { "alt": "Tela simulado personalizado - 4", "src": "https://firebasestorage.googleapis.com/v0/b/portfolio-2cd49.firebasestorage.app/o/projects%2Fapp_simulado_enem%2Fsimulado_personalizado_4.svg?alt=media&token=d02d7928-bc44-4874-ad43-4d7147014c00" },
          { "alt": "Tela simulado personalizado - 5", "src": "https://firebasestorage.googleapis.com/v0/b/portfolio-2cd49.firebasestorage.app/o/projects%2Fapp_simulado_enem%2Fsimulado_personalizado_5.svg?alt=media&token=d02d7928-bc44-4874-ad43-4d7147014c00" },
          { "alt": "Tela simulado personalizado - 6", "src": "https://firebasestorage.googleapis.com/v0/b/portfolio-2cd49.firebasestorage.app/o/projects%2Fapp_simulado_enem%2Fsimulado_personalizado_6.svg?alt=media&token=d02d7928-bc44-4874-ad43-4d7147014c00" },
          { "alt": "Tela simulado personalizado - 7", "src": "https://firebasestorage.googleapis.com/v0/b/portfolio-2cd49.firebasestorage.app/o/projects%2Fapp_simulado_enem%2Fsimulado_personalizado_7.svg?alt=media&token=d02d7928-bc44-4874-ad43-4d7147014c00" },
          { "alt": "Tela simulado personalizado - 8", "src": "https://firebasestorage.googleapis.com/v0/b/portfolio-2cd49.firebasestorage.app/o/projects%2Fapp_simulado_enem%2Fsimulado_personalizado_8.svg?alt=media&token=d02d7928-bc44-4874-ad43-4d7147014c00" },
          { "alt": "Tela simulado personalizado - 9", "src": "https://firebasestorage.googleapis.com/v0/b/portfolio-2cd49.firebasestorage.app/o/projects%2Fapp_simulado_enem%2Fsimulado_personalizado_9.svg?alt=media&token=d02d7928-bc44-4874-ad43-4d7147014c00" },
          { "alt": "Tela simulado por ano - 2021", "src": "https://firebasestorage.googleapis.com/v0/b/portfolio-2cd49.firebasestorage.app/o/projects%2Fapp_simulado_enem%2Fsimulado_por_ano_2021.svg?alt=media&token=d02d7928-bc44-4874-ad43-4d7147014c00" },
          { "alt": "Tela simulado por ano - 2022", "src": "https://firebasestorage.googleapis.com/v0/b/portfolio-2cd49.firebasestorage.app/o/projects%2Fapp_simulado_enem%2Fsimulado_por_ano_2022.svg?alt=media&token=d02d7928-bc44-4874-ad43-4d7147014c00" },
          { "alt": "Tela simulado por ano - 2023", "src": "https://firebasestorage.googleapis.com/v0/b/portfolio-2cd49.firebasestorage.app/o/projects%2Fapp_simulado_enem%2Fsimulado_por_ano_2023.svg?alt=media&token=d02d7928-bc44-4874-ad43-4d7147014c00" },
          { "alt": "Tela questão V ou F - 1", "src": "https://firebasestorage.googleapis.com/v0/b/portfolio-2cd49.firebasestorage.app/o/projects%2Fapp_simulado_enem%2Fsimulado_questoes_V_ou_F1.svg?alt=media&token=d02d7928-bc44-4874-ad43-4d7147014c00" },
          { "alt": "Tela questão V ou F - 2", "src": "https://firebasestorage.googleapis.com/v0/b/portfolio-2cd49.firebasestorage.app/o/projects%2Fapp_simulado_enem%2Fsimulado_questoes_V_ou_F.svg?alt=media&token=d02d7928-bc44-4874-ad43-4d7147014c00" },
          { "alt": "Tela questão matemática", "src": "https://firebasestorage.googleapis.com/v0/b/portfolio-2cd49.firebasestorage.app/o/projects%2Fapp_simulado_enem%2Fsimulado_questoes_matematica.svg?alt=media&token=d02d7928-bc44-4874-ad43-4d7147014c00" },
          { "alt": "Tela questão opções grandes", "src": "https://firebasestorage.googleapis.com/v0/b/portfolio-2cd49.firebasestorage.app/o/projects%2Fapp_simulado_enem%2Fsimulado_questoes_opcoes_grandes.svg?alt=media&token=d02d7928-bc44-4874-ad43-4d7147014c00" },
      ],
      "external_links": [
          {
              "label": "Demonstração do projeto",
              "url": "https://www.figma.com/proto/dYtBFN3uKKYxHY945HExk6/SimuladoEnem2024?node-id=40-69&t=4JVdxGahUkS187Os-0&scaling=scale-down&content-scaling=fixed&page-id=6%3A4&starting-point-node-id=40%3A69"
          },
          {
              "label": "Tipografia do projeto",
              "url": "https://www.figma.com/proto/dYtBFN3uKKYxHY945HExk6/SimuladoEnem2024?node-id=4-1115&t=VEWzhwj3KWdiJBUv-0&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1"
          },
          {
              "label": "Cores do projeto",
              "url": "https://www.figma.com/proto/dYtBFN3uKKYxHY945HExk6/SimuladoEnem2024?node-id=4-1115&t=VEWzhwj3KWdiJBUv-0&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1"
          },
          {
              "label": "Ícones do projeto",
              "url": "https://www.figma.com/proto/dYtBFN3uKKYxHY945HExk6/SimuladoEnem2024?node-id=93-161&t=VEWzhwj3KWdiJBUv-0&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1"
          }
      ],
      "technologies": [
          { "name": "FIGMA", "version": "-", "icon_url": "https://firebasestorage.googleapis.com/v0/b/portfolio-2cd49.firebasestorage.app/o/projects%2Fsati%2Ftech%2Ffigma.svg?alt=media&token=fcc57e6f-5fb4-4a97-9fd9-71db7faf7d7b" },
      ],
      "sections": [
          {
              "id": 4,
              "title": "Sobre o projeto",
              "order": 1,
              "components": [
                  {
                      "id": 1,
                      "type": "text",
                      "content": `<p>Esse projeto foi planejado juntamente com o Antônio Guilherme, com o intuito de auxiliar no estudo de pessoas
                                  que realizam o ENEM a se prepararem com simulados, com questões de provas anteriores ou simulados personalizados.
                                  O design do app foi feito utilizando o FIGMA, definindo a tabela de cores, tipografia, ícones e componentes. </p>
                                  <p>No figma definimos variáveis de cores, tamanhos, fonte-style de acordo com o que foi definido, para ter um controle maior
                                  sobre a padronização dos componentes, exemplo de variável de fonte: <b>h1-noto-sans-regular</b>.</p>`,
                  }
              ]
          },
          {
              "id": 5,
              "title": "Por tela",
              "order": 2,
              "components": [
                  {
                      "id": 2,
                      "type": "carousel_image_with_text",
                      "content": {
                          "current_index": 0,
                          "items": [
                              {
                                  "id": 1,
                                  "title": "Tela de Splash Screen",
                                  "text": `A tela de SplashScreen do app é exibida toda vez que o app é aberto, e carrega durante alguns segundos.
                                           E após essa tela, vem a tela de dashboard.`,
                                  "url": "https://firebasestorage.googleapis.com/v0/b/portfolio-2cd49.firebasestorage.app/o/projects%2Fapp_simulado_enem%2Fsplash_screen.svg?alt=media&token=d02d7928-bc44-4874-ad43-4d7147014c00"
                              },
                              {
                                  "id": 2,
                                  "title": "Tela de Home",
                                  "text": `A tela de Home, exibe o nome do usuário e uma foto ao topo.
                                          Logo em sequida possui um card com a média da nota de simulados realizados pelo usuário.
                                          Na seção seguida possui a opção de iniciar um simulado personalizado ou por ano(edições anteriores do ENEM).
                                          A próxima seção do app possui a opção de inicar um simulado por área de conhecimento.
                                          Na última seção o usuário pode iniciar um simulado por matéria.`,
                                  "url": "https://firebasestorage.googleapis.com/v0/b/portfolio-2cd49.firebasestorage.app/o/projects%2Fapp_simulado_enem%2Fhome.svg?alt=media&token=d02d7928-bc44-4874-ad43-4d7147014c00"
                              },
                              {
                                  "id": 3,
                                  "title": "Tela de simulado personalizado - 1",
                                  "text": `Essa primeira tela após clicar em simulado personalizado o usuário deve selecionar a(s) área(s) do
                                           conhecimento que deseja que tenha no simulado. Essa tela inicia uma sequência de escolhas que o
                                           usuário deve fazer para montar seu simulado de acordo com seu gosto.`,
                                  "url": "https://firebasestorage.googleapis.com/v0/b/portfolio-2cd49.firebasestorage.app/o/projects%2Fapp_simulado_enem%2Fsimulado_personalizado_1.svg?alt=media&token=d02d7928-bc44-4874-ad43-4d7147014c00"
                              },
                              {
                                  "id": 4,
                                  "title": "Tela de simulado personalizado - 2",
                                  "text": `Aqui o usuário deve selecionar a(s) matéria(s) que ele deseja que tenha no simulado.
                                           As matérias disponíveis nessa tela irão depender da escolha feita anteriormente, do qual o usuário
                                           selecionou as áreas do conhecimento.`,
                                  "url": "https://firebasestorage.googleapis.com/v0/b/portfolio-2cd49.firebasestorage.app/o/projects%2Fapp_simulado_enem%2Fsimulado_personalizado_2.svg?alt=media&token=d02d7928-bc44-4874-ad43-4d7147014c00"
                              },
                              {
                                  "id": 5,
                                  "title": "Tela de simulado personalizado - 3",
                                  "text": `O usuário deve escolher quantas questões irá ter no simulado.`,
                                  "url": "https://firebasestorage.googleapis.com/v0/b/portfolio-2cd49.firebasestorage.app/o/projects%2Fapp_simulado_enem%2Fsimulado_personalizado_3.svg?alt=media&token=d02d7928-bc44-4874-ad43-4d7147014c00"
                              },
                              {
                                  "id": 6,
                                  "title": "Tela de simulado personalizado - 4",
                                  "text": `Nessa tela o usuário irá selecionar as edições do ENEM anteriores que serão retiradas as questões para realizar o simulado.`,
                                  "url": "https://firebasestorage.googleapis.com/v0/b/portfolio-2cd49.firebasestorage.app/o/projects%2Fapp_simulado_enem%2Fsimulado_personalizado_4.svg?alt=media&token=d02d7928-bc44-4874-ad43-4d7147014c00"
                              },
                              {
                                  "id": 7,
                                  "title": "Tela de simulado personalizado - 5",
                                  "text": `Nessa tela o usuário poderá definir um tempo para realização do simulado, caso ele não queira tempo ele pode pular.`,
                                  "url": "https://firebasestorage.googleapis.com/v0/b/portfolio-2cd49.firebasestorage.app/o/projects%2Fapp_simulado_enem%2Fsimulado_personalizado_5.svg?alt=media&token=d02d7928-bc44-4874-ad43-4d7147014c00"
                              },
                              {
                                  "id": 8,
                                  "title": "Tela de simulado personalizado - 6",
                                  "text": `O usuário pode definir a quantidade de questões que deseja em determinada área do conhecimento, por exemplo, ele pode
                                           definir 20 questões para Linguagens, Códigos e suas Tecnologias e 15 para Matemática e suas Tecnologias (Só será exibido
                                           as áreas do conhecimento que o usuário selecionou anteriormente).`,
                                  "url": "https://firebasestorage.googleapis.com/v0/b/portfolio-2cd49.firebasestorage.app/o/projects%2Fapp_simulado_enem%2Fsimulado_personalizado_6.svg?alt=media&token=d02d7928-bc44-4874-ad43-4d7147014c00"
                              },
                              {
                                  "id": 9,
                                  "title": "Tela de simulado personalizado - 7",
                                  "text": `Assim como na tela anterior, é possível definir a quantidade de questões por matéria.
                                          Sempre de acordo com o que já foi definido anteriormente pelo usuário.`,
                                  "url": "https://firebasestorage.googleapis.com/v0/b/portfolio-2cd49.firebasestorage.app/o/projects%2Fapp_simulado_enem%2Fsimulado_personalizado_7.svg?alt=media&token=d02d7928-bc44-4874-ad43-4d7147014c00"
                              },
                              {
                                  "id": 10,
                                  "title": "Tela de simulado personalizado - 8",
                                  "text": `Assim como na tela anterior, é possível definir a quantidade de questões por edição do ENEM.
                                          Sempre de acordo com o que já foi definido anteriormente pelo usuário.`,
                                  "url": "https://firebasestorage.googleapis.com/v0/b/portfolio-2cd49.firebasestorage.app/o/projects%2Fapp_simulado_enem%2Fsimulado_personalizado_8.svg?alt=media&token=d02d7928-bc44-4874-ad43-4d7147014c00"
                              },
                              {
                                  "id": 11,
                                  "title": "Tela de simulado personalizado - 9",
                                  "text": `Por último, tem a opção de fazer a redação e selecionar o tema de acordo com os temas das edições anteriores.
                                           É possível pular e não ter essa opção de redação no simulado.`,
                                  "url": "https://firebasestorage.googleapis.com/v0/b/portfolio-2cd49.firebasestorage.app/o/projects%2Fapp_simulado_enem%2Fsimulado_personalizado_9.svg?alt=media&token=d02d7928-bc44-4874-ad43-4d7147014c00"
                              },
                          ]
                      }
                  },
              ]
          },
          {
              "id": 6,
              "title": "Tipografia, cores e ícones...",
              "order": 3,
              "components": [
                  {
                      "id": 4,
                      "type": "text",
                      "content": `<p>Logo abaixo está a tipografia, cores e ícones do projeto definidos e criados no FIGMA.</p>`,
                  },
                  {
                      "id": 5,
                      "type": "code_or_instructions",
                      "content": [
                          {
                              "title": "",
                              "instructions": [
                                  {
                                      "title": "Tipografia",
                                      "type": "image",
                                      "content": "https://firebasestorage.googleapis.com/v0/b/portfolio-2cd49.firebasestorage.app/o/projects%2Fapp_simulado_enem%2Ftipografia.svg?alt=media&token=11e32722-2183-4d4e-93a1-a7cdb99a9360"
                                  },
                                  {
                                      "title": "Cores",
                                      "type": "image",
                                      "content": "https://firebasestorage.googleapis.com/v0/b/portfolio-2cd49.firebasestorage.app/o/projects%2Fapp_simulado_enem%2Fcores.svg?alt=media&token=a5c5b260-894b-4355-a9ad-7eab5ca10e42"
                                  },
                                  {
                                      "title": "Ícones",
                                      "type": "image",
                                      "content": "https://firebasestorage.googleapis.com/v0/b/portfolio-2cd49.firebasestorage.app/o/projects%2Fapp_simulado_enem%2Ficones.svg?alt=media&token=238b414a-9ab8-4fd1-82e6-2be976beac9c"
                                  }
                              ]
                          },
                      ]
                  }
              ]
          }
      ],
      "comments": [
          {
              "id": 1,
              "user_name": "John Doe",
              "content": "Great project! Loved the design.",
              "posted_at": "10/12/2024 ás 17:11",
              "replies": [
                  {
                      "id": 2,
                      "user_name": "Author",
                      "content": "Thank you, John!",
                      "posted_at": "11/12/2024 ás 12:35",
                      "reactions": [
                          {
                              "id": 1,
                              "count": 1,
                              "list_users_id": [1],
                              "reaction_type": "like",
                          }
                      ]
                  }
              ],
              "reactions": [
                  {
                      "id": 2,
                      "count": 3,
                      "list_users_id": [1, 3, 4],
                      "reaction_type": "like",
                  },
                  {
                      "id": 3,
                      "count": 5,
                      "list_users_id": [1, 5, 6, 7, 13],
                      "reaction_type": "smile",
                  }
              ]
          }
      ]
  },
  {
      "id": 3,
      "title": "CALCULADORA DE JUROS SIMPLES/COMPOSTOS",
      "type_project": ["Desktop", "Frontend"],
      "current_index": 0,
      "description": `Uma aplicação desktop simples desenvolvida em Java com o intuito de calcular juros simples e compostos.
                      Esse projeto foi desenvolvido durante o curso Técnico em Informática que realizei no período de 2017 à 2019.`,
      "post_date": "11/01/2025 19:55",
      "images": [
          { "alt": "Tela inicial", "src": "https://raw.githubusercontent.com/rafaelleonan/calculadora-juros-java/main/assets/tela-inicial.png" },
          { "alt": "Formulário de juros simples - 1", "src": "https://raw.githubusercontent.com/rafaelleonan/calculadora-juros-java/main/assets/juros-simples-1.png" },
          { "alt": "Formulário de juros simples - 2", "src": "https://raw.githubusercontent.com/rafaelleonan/calculadora-juros-java/main/assets/juros-simples-2.png" },
          { "alt": "Formulário de juros simples - 3", "src": "https://raw.githubusercontent.com/rafaelleonan/calculadora-juros-java/main/assets/juros-simples-3.png" },
          { "alt": "Formulário de juros simples - 4", "src": "https://raw.githubusercontent.com/rafaelleonan/calculadora-juros-java/main/assets/juros-simples-4.png" },
          { "alt": "Formulário de juros compostos - 1", "src": "https://raw.githubusercontent.com/rafaelleonan/calculadora-juros-java/main/assets/juros-composto-1.png" },
          { "alt": "Formulário de juros compostos - 2", "src": "https://raw.githubusercontent.com/rafaelleonan/calculadora-juros-java/main/assets/juros-composto-2.png" },
          { "alt": "Formulário de juros compostos - 3", "src": "https://raw.githubusercontent.com/rafaelleonan/calculadora-juros-java/main/assets/juros-composto-3.png" },
          { "alt": "Formulário de juros compostos - 4", "src": "https://raw.githubusercontent.com/rafaelleonan/calculadora-juros-java/main/assets/juros-composto-4.png" },
      ],
      "external_links": [
          {
              "label": "Repositório do projeto",
              "url": "https://github.com/rafaelleonan/calculadora-juros-java"
          },
      ],
      "technologies": [
          { "name": "JAVA", "version": "8", "icon_url": "https://firebasestorage.googleapis.com/v0/b/portfolio-2cd49.firebasestorage.app/o/projects%2Fsati%2Ftech%2Fjava.svg?alt=media&token=fcc57e6f-5fb4-4a97-9fd9-71db7faf7d7b" },
      ],
      "sections": [
          {
              "id": 7,
              "title": "Sobre o projeto",
              "order": 1,
              "components": [
                  {
                      "id": 1,
                      "type": "text",
                      "content": `<p>Uma aplicação desktop simples desenvolvida em Java com o intuito de calcular juros simples e compostos.
                      Esse projeto foi desenvolvido durante o curso Técnico em Informática que realizei no período de 2017 à 2019.</p>`,
                  }
              ]
          },
          {
              "id": 8,
              "title": "Por tela",
              "order": 2,
              "components": [
                  {
                      "id": 2,
                      "type": "carousel_image_with_text",
                      "content": {
                          "current_index": 0,
                          "items": [
                              {
                                  "id": 1,
                                  "title": "Tela inicial",
                                  "text": `Essa tela contém as duas opções disponíveis na calculadora, juros simples ou juros compostos.`,
                                  "url": "https://raw.githubusercontent.com/rafaelleonan/calculadora-juros-java/main/assets/tela-inicial.png"
                              },
                              {
                                  "id": 2,
                                  "title": "Tela de juros simples - 1",
                                  "text": `Essa tela contém o formulário de juros simples vazio para ser preenchido e realizar o cálculo.`,
                                  "url": "https://raw.githubusercontent.com/rafaelleonan/calculadora-juros-java/main/assets/juros-simples-1.png"
                              },
                              {
                                  "id": 3,
                                  "title": "Tela de juros simples - 2",
                                  "text": `Essa tela contém o formulário de juros simples preenchido e com o cálculo realizado, exibindo o resultando no final.`,
                                  "url": "https://raw.githubusercontent.com/rafaelleonan/calculadora-juros-java/main/assets/juros-simples-2.png"
                              },
                              {
                                  "id": 4,
                                  "title": "Tela de juros simples - 3",
                                  "text": `Essa tela contém o formulário de juros simples preenchido e com o dropdown "Tipo Período" aberto com as opções disponíveis.`,
                                  "url": "https://raw.githubusercontent.com/rafaelleonan/calculadora-juros-java/main/assets/juros-simples-3.png"
                              },
                              {
                                  "id": 5,
                                  "title": "Tela de juros simples - 4",
                                  "text": `Essa tela contém o formulário de juros composto preenchido e com o dropdown "Tipo de Taxa" aberto com as opções disponíveis.`,
                                  "url": "https://raw.githubusercontent.com/rafaelleonan/calculadora-juros-java/main/assets/juros-simples-4.png"
                              },
                              {
                                  "id": 6,
                                  "title": "Tela de juros composto - 1",
                                  "text": `Essa tela contém o formulário de juros composto vazio para ser preenchido e realizar o cálculo.`,
                                  "url": "https://raw.githubusercontent.com/rafaelleonan/calculadora-juros-java/main/assets/juros-composto-1.png"
                              },
                              {
                                  "id": 7,
                                  "title": "Tela de juros composto - 2",
                                  "text": `Essa tela contém o formulário de juros composto preenchido e com o cálculo realizado, exibindo o resultando no final.`,
                                  "url": "https://raw.githubusercontent.com/rafaelleonan/calculadora-juros-java/main/assets/juros-composto-2.png"
                              },
                              {
                                  "id": 8,
                                  "title": "Tela de juros composto - 3",
                                  "text": `Essa tela contém o formulário de juros composto preenchido e com o dropdown "Tipo Período" aberto com as opções disponíveis.`,
                                  "url": "https://raw.githubusercontent.com/rafaelleonan/calculadora-juros-java/main/assets/juros-composto-3.png"
                              },
                              {
                                  "id": 9,
                                  "title": "Tela de juros composto - 4",
                                  "text": `Essa tela contém o formulário de juros composto preenchido e com o dropdown "Tipo de Taxa" aberto com as opções disponíveis.`,
                                  "url": "https://raw.githubusercontent.com/rafaelleonan/calculadora-juros-java/main/assets/juros-composto-4.png"
                              },
                          ]
                      }
                  },
              ]
          },
          {
              "id": 9,
              "title": "Baixando e executando localmente",
              "order": 3,
              "components": [
                  {
                      "id": 4,
                      "type": "text",
                      "content": `<p>É necessário ter instalado e configurado em máquina o <b>JDK 8</b> ou superior
                          com seus binários adicionados ao <b>$PATH</b>.</p>`,
                  },
                  {
                      "id": 5,
                      "type": "code_or_instructions",
                      "content": [
                          {
                              "title": "Instalando e executando via terminal",
                              "instructions": [
                                  {
                                      "title": "Clonar o projeto:",
                                      "type": "code",
                                      "content": "git clone https://github.com/rafaelleonan/calculadora-juros-java"
                                  },
                                  {
                                      "title": "Acessar o diretório raiz do projeto:",
                                      "type": "code",
                                      "content": "cd calculadora-juros-java/src"
                                  },
                                  {
                                      "title": "Compile os arquivos java, utilizando javac:",
                                      "type": "code",
                                      "content": "javac calcularjuros/*.java"
                                  },
                                  {
                                      "title": "Executar o projeto:",
                                      "type": "code",
                                      "content": "java calcularjuros.TelaInicial"
                                  }
                              ]
                          },
                      ]
                  }
              ]
          }
      ],
      "comments": [
          {
              "id": 1,
              "user_name": "John Doe",
              "content": "Great project! Loved the design.",
              "posted_at": "10/12/2024 ás 17:11",
              "replies": [
                  {
                      "id": 2,
                      "user_name": "Author",
                      "content": "Thank you, John!",
                      "posted_at": "11/12/2024 ás 12:35",
                      "reactions": [
                          {
                              "id": 1,
                              "count": 1,
                              "list_users_id": [1],
                              "reaction_type": "like",
                          }
                      ]
                  }
              ],
              "reactions": [
                  {
                      "id": 2,
                      "count": 3,
                      "list_users_id": [1, 3, 4],
                      "reaction_type": "like",
                  },
                  {
                      "id": 3,
                      "count": 5,
                      "list_users_id": [1, 5, 6, 7, 13],
                      "reaction_type": "smile",
                  }
              ]
          }
      ]
  },
  {
      "id": 4,
      "title": "APP 'CLONE' UBER",
      "type_project": ["Mobile", "Frontend"],
      "current_index": 0,
      "description": `Um aplicativo desenvolvido durante o curso de Desenvolvimento Flutter Mobile,
                      com o objetivo de entender e aplicar conceitos fundamentais na criação de um aplicativo similar ao UBER.
                       O projeto utiliza Firebase para gerenciamento de cadastro, autenticação de usuários, banco de dados
                       em tempo real, proporcionando uma experiência prática e completa de desenvolvimento mobile.`,
      "post_date": "11/01/2025 19:55",
      "images": [
          { "alt": "Tela de Login", "src": "https://raw.githubusercontent.com/rafaelleonan/app-flutter-clone-uber/refs/heads/main/assets/images/simulator_screenshot_iphone13_ios16_4_tela_login.png" },
          { "alt": "Tela de cadastro", "src": "https://raw.githubusercontent.com/rafaelleonan/app-flutter-clone-uber/refs/heads/main/assets/images/simulator_screenshot_iphone13_ios16_4_tela_cadastro.png" },
          { "alt": "Tela inicial - permissão do usuário", "src": "https://raw.githubusercontent.com/rafaelleonan/app-flutter-clone-uber/refs/heads/main/assets/images/simulator_screenshot_iphone13_ios16_4_tela_permissao_localizacao.png" },
          { "alt": "Configurações/Sair", "src": "https://raw.githubusercontent.com/rafaelleonan/app-flutter-clone-uber/refs/heads/main/assets/images/simulator_screenshot_iphone13_ios16_4_tela_botao_sair.png" },
          { "alt": "Motorista - Aceitar corrida", "src": "https://raw.githubusercontent.com/rafaelleonan/app-flutter-clone-uber/refs/heads/main/assets/images/simulator_screenshot_iphone13_ios16_4_tela_aceitar_corrida.png" },
          { "alt": "Motorista - Nenhuma corrida", "src": "https://raw.githubusercontent.com/rafaelleonan/app-flutter-clone-uber/refs/heads/main/assets/images/simulator_screenshot_iphone13_ios16_4_tela_painel_motorista.png" },
          { "alt": "Motorista - Corrida", "src": "https://raw.githubusercontent.com/rafaelleonan/app-flutter-clone-uber/refs/heads/main/assets/images/simulator_screenshot_iphone13_ios16_4_tela_solicitacoes_de_viagens.png" },
          { "alt": "Passageiro - Chamar uber", "src": "https://raw.githubusercontent.com/rafaelleonan/app-flutter-clone-uber/refs/heads/main/assets/images/simulator_screenshot_iphone13_ios16_4_tela_chamar_uber.png" },
          { "alt": "Passageiro - Confirmar corrida", "src": "https://raw.githubusercontent.com/rafaelleonan/app-flutter-clone-uber/refs/heads/main/assets/images/simulator_screenshot_iphone13_ios16_4_tela_confirmar_corrida.png" },
          { "alt": "Passageiro - Cancelar corrida", "src": "https://raw.githubusercontent.com/rafaelleonan/app-flutter-clone-uber/refs/heads/main/assets/images/simulator_screenshot_iphone13_ios16_4_tela_cancelar_solicitacao.png" },
      ],
      "external_links": [
          {
              "label": "Repositório do projeto",
              "url": "https://github.com/rafaelleonan/app-flutter-clone-uber"
          },
      ],
      "technologies": [
          { "name": "Flutter", "version": "3.22.2", "icon_url": "https://firebasestorage.googleapis.com/v0/b/portfolio-2cd49.firebasestorage.app/o/projects%2Fsati%2Ftech%2Fflutter.svg?alt=media&token=fcc57e6f-5fb4-4a97-9fd9-71db7faf7d7b" },
          { "name": "Dart", "version": ">=3.4.3 <4.0.0", "icon_url": "https://firebasestorage.googleapis.com/v0/b/portfolio-2cd49.firebasestorage.app/o/projects%2Fsati%2Ftech%2Fdart.svg?alt=media&token=fcc57e6f-5fb4-4a97-9fd9-71db7faf7d7b" },
          { "name": "Firestore", "version": "^5.1.0", "icon_url": "https://firebasestorage.googleapis.com/v0/b/portfolio-2cd49.firebasestorage.app/o/projects%2Fsati%2Ftech%2Ffirebase.svg?alt=media&token=fcc57e6f-5fb4-4a97-9fd9-71db7faf7d7b" },
          { "name": "Core", "version": "^3.2.0", "icon_url": "https://firebasestorage.googleapis.com/v0/b/portfolio-2cd49.firebasestorage.app/o/projects%2Fsati%2Ftech%2Ffirebase.svg?alt=media&token=fcc57e6f-5fb4-4a97-9fd9-71db7faf7d7b" },
          { "name": "Auth", "version": "^5.1.2", "icon_url": "https://firebasestorage.googleapis.com/v0/b/portfolio-2cd49.firebasestorage.app/o/projects%2Fsati%2Ftech%2Ffirebase.svg?alt=media&token=fcc57e6f-5fb4-4a97-9fd9-71db7faf7d7b" },
          { "name": "Storage", "version": "^12.1.1", "icon_url": "https://firebasestorage.googleapis.com/v0/b/portfolio-2cd49.firebasestorage.app/o/projects%2Fsati%2Ftech%2Ffirebase.svg?alt=media&token=fcc57e6f-5fb4-4a97-9fd9-71db7faf7d7b" },
      ],
      "sections": [
          {
              "id": 7,
              "title": "Sobre o projeto",
              "order": 1,
              "components": [
                  {
                      "id": 1,
                      "type": "text",
                      "content": `<p>Um aplicativo desenvolvido durante o curso de Desenvolvimento Flutter Mobile,
                                      com o objetivo de entender e aplicar conceitos fundamentais na criação de um aplicativo
                                       similar ao UBER. O projeto utiliza Firebase para gerenciamento de cadastro,
                                       autenticação de usuários, banco de dados em tempo real, proporcionando uma experiência
                                       prática e completa de desenvolvimento mobile.</p>`,
                  }
              ]
          },
          {
              "id": 8,
              "title": "Por tela",
              "order": 2,
              "components": [
                  {
                      "id": 2,
                      "type": "carousel_image_with_text",
                      "content": {
                          "current_index": 0,
                          "items": [
                              {
                                  "id": 1,
                                  "title": "Tela de Login",
                                  "text": `Tela de acesso ao app, onde o usuário informa suas credenciais de e-mail e senha cadastradas no sistema.
                                           Caso o usuário ainda não tenha cadastro, possui um link redirecionando para o cadastro.`,
                                  "url": "https://raw.githubusercontent.com/rafaelleonan/app-flutter-clone-uber/refs/heads/main/assets/images/simulator_screenshot_iphone13_ios16_4_tela_login.png"
                              },
                              {
                                  "id": 2,
                                  "title": "Tela de cadastro",
                                  "text": `Formulário de cadastro do passageiro/motorista no app, possui os campos de e-mail, nome e senha.`,
                                  "url": "https://raw.githubusercontent.com/rafaelleonan/app-flutter-clone-uber/refs/heads/main/assets/images/simulator_screenshot_iphone13_ios16_4_tela_cadastro.png"
                              },
                              {
                                  "id": 3,
                                  "title": "Tela inicial - permissão do usuário",
                                  "text": `Pop-up para o usuário liberar a permissão de localização do dispositivo.`,
                                  "url": "https://raw.githubusercontent.com/rafaelleonan/app-flutter-clone-uber/refs/heads/main/assets/images/simulator_screenshot_iphone13_ios16_4_tela_permissao_localizacao.png"
                              },
                              {
                                  "id": 4,
                                  "title": "Configurações/Sair",
                                  "text": `Dropdown com opções de configurações ou sair(encerrar sessão).`,
                                  "url": "https://raw.githubusercontent.com/rafaelleonan/app-flutter-clone-uber/refs/heads/main/assets/images/simulator_screenshot_iphone13_ios16_4_tela_botao_sair.png"
                              },
                              {
                                  "id": 5,
                                  "title": "Motorista - Aceitar corrida",
                                  "text": `Tela onde aparece a corrida para o motorista, ele pode aceitar a corrida.`,
                                  "url": "https://raw.githubusercontent.com/rafaelleonan/app-flutter-clone-uber/refs/heads/main/assets/images/simulator_screenshot_iphone13_ios16_4_tela_aceitar_corrida.png"
                              },
                              {
                                  "id": 6,
                                  "title": "Motorista - Nenhuma corrida",
                                  "text": `Tela sem nenhuma corrida disponível para o motorista.`,
                                  "url": "https://raw.githubusercontent.com/rafaelleonan/app-flutter-clone-uber/refs/heads/main/assets/images/simulator_screenshot_iphone13_ios16_4_tela_painel_motorista.png"
                              },
                              {
                                  "id": 7,
                                  "title": "Motorista - Corrida",
                                  "text": `Tela com informações da corrida atual. Informações de nome do passageiro e destino final.`,
                                  "url": "https://raw.githubusercontent.com/rafaelleonan/app-flutter-clone-uber/refs/heads/main/assets/images/simulator_screenshot_iphone13_ios16_4_tela_solicitacoes_de_viagens.png"
                              },
                              {
                                  "id": 8,
                                  "title": "Passageiro - Chamar uber",
                                  "text": `Tela para o passageiro selecionar o destino e chamar uma corrida.`,
                                  "url": "https://raw.githubusercontent.com/rafaelleonan/app-flutter-clone-uber/refs/heads/main/assets/images/simulator_screenshot_iphone13_ios16_4_tela_chamar_uber.png"
                              },
                              {
                                  "id": 9,
                                  "title": "Passageiro - Confirmar corrida",
                                  "text": `Pop-up para o usuário confirmar a corrida solicitada.`,
                                  "url": "https://raw.githubusercontent.com/rafaelleonan/app-flutter-clone-uber/refs/heads/main/assets/images/simulator_screenshot_iphone13_ios16_4_tela_confirmar_corrida.png"
                              },
                              {
                                  "id": 10,
                                  "title": "Passageiro - Cancelar corrida",
                                  "text": `Botão para o usuário solicitar o cancelamento da corrida.`,
                                  "url": "https://raw.githubusercontent.com/rafaelleonan/app-flutter-clone-uber/refs/heads/main/assets/images/simulator_screenshot_iphone13_ios16_4_tela_cancelar_solicitacao.png"
                              },
                          ]
                      }
                  },
              ]
          },
          {
              "id": 9,
              "title": "Baixando e executando localmente",
              "order": 3,
              "components": [
                  {
                      "id": 4,
                      "type": "text",
                      "content": `<p>É necessário ter instalado e configurado em máquina o <b>Flutter 3.22.2</b> ou superior
                          com seus binários adicionados ao <b>$PATH</b> e <b>Dart >=3.4.3 <4.0.0</b> também adicionado ao <b>$PATH</b></p>`,
                  },
                  {
                      "id": 5,
                      "type": "code_or_instructions",
                      "content": [
                          {
                              "title": "Instalando e executando via terminal",
                              "instructions": [
                                  {
                                      "title": "Clonar o projeto:",
                                      "type": "code",
                                      "content": "git clone https://github.com/rafaelleonan/app-flutter-clone-uber.git"
                                  },
                                  {
                                      "title": "Acessar o diretório raiz do projeto:",
                                      "type": "code",
                                      "content": "cd app-flutter-clone-uber"
                                  },
                                  {
                                      "title": "Executar o projeto:",
                                      "type": "code",
                                      "content": "flutter run"
                                  }
                              ]
                          },
                      ]
                  }
              ]
          }
      ],
      "comments": [
          {
              "id": 1,
              "user_name": "John Doe",
              "content": "Great project! Loved the design.",
              "posted_at": "10/12/2024 ás 17:11",
              "replies": [
                  {
                      "id": 2,
                      "user_name": "Author",
                      "content": "Thank you, John!",
                      "posted_at": "11/12/2024 ás 12:35",
                      "reactions": [
                          {
                              "id": 1,
                              "count": 1,
                              "list_users_id": [1],
                              "reaction_type": "like",
                          }
                      ]
                  }
              ],
              "reactions": [
                  {
                      "id": 2,
                      "count": 3,
                      "list_users_id": [1, 3, 4],
                      "reaction_type": "like",
                  },
                  {
                      "id": 3,
                      "count": 5,
                      "list_users_id": [1, 5, 6, 7, 13],
                      "reaction_type": "smile",
                  }
              ]
          }
      ]
  },
	{
		"id": 5,
		"title": "APP 'CLONE' YOUTUBE",
		"type_project": ["Mobile", "Frontend"],
		"current_index": 0,
		"description": `Um aplicativo desenvolvido durante o curso de Desenvolvimento Flutter Mobile,
                        com o objetivo de entender e aplicar conceitos fundamentais na criação de um aplicativo similar ao YouTube.
                         É um projeto simples para simular algumas das principais telas do app YouTube.`,
		"post_date": "11/01/2025 19:55",
		"images": [
			{ "alt": "Tela de Home", "src": "https://raw.githubusercontent.com/rafaelleonan/app-flutter-clone-youtube/refs/heads/main/assets/images/simulator_screenshot_iphone13_ios16_4home.png" },
			{ "alt": "Tela de Em Alta", "src": "https://raw.githubusercontent.com/rafaelleonan/app-flutter-clone-youtube/refs/heads/main/assets/images/simulator_screenshot_iphone13_ios16_4_em_alta.png" },
			{ "alt": "Tela de Inscrições", "src": "https://raw.githubusercontent.com/rafaelleonan/app-flutter-clone-youtube/refs/heads/main/assets/images/simulator_screenshot_iphone13_ios16_4inscricoes.png" },
			{ "alt": "Tela de Biblioteca", "src": "https://raw.githubusercontent.com/rafaelleonan/app-flutter-clone-youtube/refs/heads/main/assets/images/simulator_screenshot_iphone13_ios16_4biblioteca.png" },
			{ "alt": "Tela de Pesquisa", "src": "https://raw.githubusercontent.com/rafaelleonan/app-flutter-clone-youtube/refs/heads/main/assets/images/simulator_screenshot_iphone13_ios16_4pesquisa.png" },
		],
		"external_links": [
			{
				"label": "Repositório do projeto",
				"url": "https://github.com/rafaelleonan/app-flutter-clone-youtube"
			},
		],
		"technologies": [
			{ "name": "Flutter", "version": "3.22.2", "icon_url": "https://firebasestorage.googleapis.com/v0/b/portfolio-2cd49.firebasestorage.app/o/projects%2Fsati%2Ftech%2Fflutter.svg?alt=media&token=fcc57e6f-5fb4-4a97-9fd9-71db7faf7d7b" },
			{ "name": "Dart", "version": ">=3.4.3 <4.0.0", "icon_url": "https://firebasestorage.googleapis.com/v0/b/portfolio-2cd49.firebasestorage.app/o/projects%2Fsati%2Ftech%2Fdart.svg?alt=media&token=fcc57e6f-5fb4-4a97-9fd9-71db7faf7d7b" },
		],
		"sections": [
			{
				"id": 7,
				"title": "Sobre o projeto",
				"order": 1,
				"components": [
					{
						"id": 1,
						"type": "text",
						"content": `<p>Um aplicativo desenvolvido durante o curso de Desenvolvimento Flutter Mobile,
                        com o objetivo de entender e aplicar conceitos fundamentais na criação de um aplicativo similar ao YouTube.
                         É um projeto simples para simular algumas das principais telas do app YouTube.</p>`,
					}
				]
			},
			{
				"id": 8,
				"title": "Por tela",
				"order": 2,
				"components": [
					{
						"id": 2,
						"type": "carousel_image_with_text",
						"content": {
							"current_index": 0,
							"items": [
								{
									"id": 1,
									"title": "Tela de Home",
									"text": `Tela inicial do app, onde é exibido um topbar com a logo do YouTube e um botão com ícone de pesquisar.
									         No conteúdo da tela exibe a listagem de videos em forma de cards com a thumb e título do vídeo e por fim, tem o
									         bottombar, com as opções de menu`,
									"url": "https://raw.githubusercontent.com/rafaelleonan/app-flutter-clone-youtube/refs/heads/main/assets/images/simulator_screenshot_iphone13_ios16_4home.png"
								},
								{
									"id": 2,
									"title": "Tela de Em Alta",
									"text": `Tela com videos que estão em alta dentro do YouTube.`,
									"url": "https://raw.githubusercontent.com/rafaelleonan/app-flutter-clone-youtube/refs/heads/main/assets/images/simulator_screenshot_iphone13_ios16_4_em_alta.png"
								},
								{
									"id": 3,
									"title": "Tela de Inscrições",
									"text": `Tela que exibe os canais onde o usuário está inscrito dentro da plataforma.`,
									"url": "https://raw.githubusercontent.com/rafaelleonan/app-flutter-clone-youtube/refs/heads/main/assets/images/simulator_screenshot_iphone13_ios16_4inscricoes.png"
								},
								{
									"id": 4,
									"title": "Tela de Biblioteca",
									"text": `Tela que exibe os videos em que o usuário já interagiu, para acessar novamente.`,
									"url": "https://raw.githubusercontent.com/rafaelleonan/app-flutter-clone-youtube/refs/heads/main/assets/images/simulator_screenshot_iphone13_ios16_4biblioteca.png"
								},
								{
									"id": 5,
									"title": "Tela de Pesquisa",
									"text": `Tela para o usuário realizar pesquisa de videos.`,
									"url": "https://raw.githubusercontent.com/rafaelleonan/app-flutter-clone-youtube/refs/heads/main/assets/images/simulator_screenshot_iphone13_ios16_4pesquisa.png"
								},
							]
						}
					},
				]
			},
			{
				"id": 9,
				"title": "Vídeo",
				"order": 2,
				"components": [
					{
						"id": 2,
						"type": "video_with_text",
						"content": [
							{
								"id": 0,
								"title": "Tela de fluxo 1",
								"text": `Veja o vídeo curto abaixo com o fluxo do app.`,
								"url": "https://youtube.com/embed/Mz8HVcAUbX4"
							},
						]
					},
				]
			},
			{
				"id": 10,
				"title": "Baixando e executando localmente",
				"order": 3,
				"components": [
					{
						"id": 4,
						"type": "text",
						"content": `<p>É necessário ter instalado e configurado em máquina o <b>Flutter 3.22.2</b> ou superior
                            com seus binários adicionados ao <b>$PATH</b> e <b>Dart >=3.4.3 <4.0.0</b> também adicionado ao <b>$PATH</b></p>`,
					},
					{
						"id": 5,
						"type": "code_or_instructions",
						"content": [
							{
								"title": "Instalando e executando via terminal",
								"instructions": [
									{
										"title": "Clonar o projeto:",
										"type": "code",
										"content": "git clone https://github.com/rafaelleonan/app-flutter-clone-youtube.git"
									},
									{
										"title": "Acessar o diretório raiz do projeto:",
										"type": "code",
										"content": "cd app-flutter-clone-youtube"
									},
									{
										"title": "Executar o projeto:",
										"type": "code",
										"content": "flutter run"
									}
								]
							},
						]
					}
				]
			}
		],
		"comments": [
			{
				"id": 1,
				"user_name": "John Doe",
				"content": "Great project! Loved the design.",
				"posted_at": "10/12/2024 ás 17:11",
				"replies": [
					{
						"id": 2,
						"user_name": "Author",
						"content": "Thank you, John!",
						"posted_at": "11/12/2024 ás 12:35",
						"reactions": [
							{
								"id": 1,
								"count": 1,
								"list_users_id": [1],
								"reaction_type": "like",
							}
						]
					}
				],
				"reactions": [
					{
						"id": 2,
						"count": 3,
						"list_users_id": [1, 3, 4],
						"reaction_type": "like",
					},
					{
						"id": 3,
						"count": 5,
						"list_users_id": [1, 5, 6, 7, 13],
						"reaction_type": "smile",
					}
				]
			}
		]
	},
	{
		"id": 6,
		"title": "APP 'CLONE' OLX",
		"type_project": ["Mobile", "Frontend"],
		"current_index": 0,
		"description": `Um aplicativo desenvolvido durante o curso de Desenvolvimento Flutter Mobile,
                      com o objetivo de entender e aplicar conceitos fundamentais na criação de um aplicativo similar a OLX.
                       O projeto utiliza Firebase para gerenciamento de cadastro, autenticação de usuários, banco de dados
                       em tempo real, proporcionando uma experiência prática e completa de desenvolvimento mobile.`,
		"post_date": "11/01/2025 19:55",
		"images": [
			{ "alt": "Tela de Login", "src": "https://raw.githubusercontent.com/rafaelleonan/app-flutter-clone-olx/refs/heads/main/assets/images/simulator_screenshot_iphone13_ios16.4_cadastro.png" },
			{ "alt": "Tela de Cadastro", "src": "https://raw.githubusercontent.com/rafaelleonan/app-flutter-clone-olx/refs/heads/main/assets/images/simulator_screenshot_iphone13_ios16.4_login.png" },
			{ "alt": "Tela de Anúncios", "src": "https://raw.githubusercontent.com/rafaelleonan/app-flutter-clone-olx/refs/heads/main/assets/images/simulator_screenshot_iphone13_ios16.4_anuncios.png" },
			{ "alt": "Tela de Cadastrar Anúncio", "src": "https://raw.githubusercontent.com/rafaelleonan/app-flutter-clone-olx/refs/heads/main/assets/images/simulator_screenshot_iphone13_ios16.4_cadastrar_anuncio.png" },
			{ "alt": "Tela de Meus Anúncios", "src": "https://raw.githubusercontent.com/rafaelleonan/app-flutter-clone-olx/refs/heads/main/assets/images/simulator_screenshot_iphone13_ios16.4_meus_anuncios.png" },
		],
		"external_links": [
			{
				"label": "Repositório do projeto",
				"url": "https://github.com/rafaelleonan/app-flutter-clone-olx"
			},
		],
		"technologies": [
			{ "name": "Flutter", "version": "3.22.2", "icon_url": "https://firebasestorage.googleapis.com/v0/b/portfolio-2cd49.firebasestorage.app/o/projects%2Fsati%2Ftech%2Fflutter.svg?alt=media&token=fcc57e6f-5fb4-4a97-9fd9-71db7faf7d7b" },
			{ "name": "Dart", "version": ">=3.4.3 <4.0.0", "icon_url": "https://firebasestorage.googleapis.com/v0/b/portfolio-2cd49.firebasestorage.app/o/projects%2Fsati%2Ftech%2Fdart.svg?alt=media&token=fcc57e6f-5fb4-4a97-9fd9-71db7faf7d7b" },
			{ "name": "Firestore", "version": "^5.1.0", "icon_url": "https://firebasestorage.googleapis.com/v0/b/portfolio-2cd49.firebasestorage.app/o/projects%2Fsati%2Ftech%2Ffirebase.svg?alt=media&token=fcc57e6f-5fb4-4a97-9fd9-71db7faf7d7b" },
			{ "name": "Core", "version": "^3.2.0", "icon_url": "https://firebasestorage.googleapis.com/v0/b/portfolio-2cd49.firebasestorage.app/o/projects%2Fsati%2Ftech%2Ffirebase.svg?alt=media&token=fcc57e6f-5fb4-4a97-9fd9-71db7faf7d7b" },
			{ "name": "Auth", "version": "^5.1.2", "icon_url": "https://firebasestorage.googleapis.com/v0/b/portfolio-2cd49.firebasestorage.app/o/projects%2Fsati%2Ftech%2Ffirebase.svg?alt=media&token=fcc57e6f-5fb4-4a97-9fd9-71db7faf7d7b" },
			{ "name": "Storage", "version": "^12.1.1", "icon_url": "https://firebasestorage.googleapis.com/v0/b/portfolio-2cd49.firebasestorage.app/o/projects%2Fsati%2Ftech%2Ffirebase.svg?alt=media&token=fcc57e6f-5fb4-4a97-9fd9-71db7faf7d7b" },
		],
		"sections": [
			{
				"id": 7,
				"title": "Sobre o projeto",
				"order": 1,
				"components": [
					{
						"id": 1,
						"type": "text",
						"content": `<p>Um aplicativo desenvolvido durante o curso de Desenvolvimento Flutter Mobile,
                      com o objetivo de entender e aplicar conceitos fundamentais na criação de um aplicativo similar a OLX.
                       O projeto utiliza Firebase para gerenciamento de cadastro, autenticação de usuários, banco de dados
                       em tempo real, proporcionando uma experiência prática e completa de desenvolvimento mobile.</p>`,
					}
				]
			},
			{
				"id": 8,
				"title": "Por tela",
				"order": 2,
				"components": [
					{
						"id": 2,
						"type": "carousel_image_with_text",
						"content": {
							"current_index": 0,
							"items": [
								{
									"id": 1,
									"title": "Tela de Login",
									"text": `Tela de acesso ao app, onde o usuário informa suas credenciais de e-mail e senha cadastradas no sistema.
                           Caso o usuário ainda não tenha cadastro, possui um toggle que ao ser selecionado, utiliza o formulário para cadastro.`,
									"url": "https://raw.githubusercontent.com/rafaelleonan/app-flutter-clone-olx/refs/heads/main/assets/images/simulator_screenshot_iphone13_ios16.4_cadastro.png"
								},
								{
									"id": 2,
									"title": "Tela de Cadastro",
									"text": `Tela de acesso ao app, onde o usuário se cadastra com suas credenciais de e-mail e senha no sistema.
                           Caso o usuário já tenha cadastro, possui um toggle que ao ser selecionado, utiliza o formulário para login.`,
									"url": "https://raw.githubusercontent.com/rafaelleonan/app-flutter-clone-olx/refs/heads/main/assets/images/simulator_screenshot_iphone13_ios16.4_login.png"
								},
								{
									"id": 3,
									"title": "Tela de Anúncios",
									"text": `Tela inicial do app após login, que contém diversos anúncios disponíveis em formato de cards com imagem, título e valor.
													 É possível também aplicar filtros por categoria ou região`,
									"url": "https://raw.githubusercontent.com/rafaelleonan/app-flutter-clone-olx/refs/heads/main/assets/images/simulator_screenshot_iphone13_ios16.4_anuncios.png"
								},
								{
									"id": 4,
									"title": "Tela de Cadastrar Anúncio",
									"text": `Tela de formulário para realizar a postagem de um anúncio, informando os campos de Região, Categoria, Título, Preço, Telefone e Descrição.`,
									"url": "https://raw.githubusercontent.com/rafaelleonan/app-flutter-clone-olx/refs/heads/main/assets/images/simulator_screenshot_iphone13_ios16.4_cadastrar_anuncio.png"
								},
								{
									"id": 5,
									"title": "Tela de Meus Anúncios",
									"text": `Tela que contém a listagem de anúncios do usuário logado, exibidos em formato de cards com a opção de deletar anúncio ou cadastrar um novo.`,
									"url": "https://raw.githubusercontent.com/rafaelleonan/app-flutter-clone-olx/refs/heads/main/assets/images/simulator_screenshot_iphone13_ios16.4_meus_anuncios.png"
								},
							]
						}
					},
				]
			},
			{
				"id": 9,
				"title": "Vídeo",
				"order": 2,
				"components": [
					{
						"id": 2,
						"type": "video_with_text",
						"content": [
							{
								"id": 0,
								"title": "Tela de fluxo 1",
								"text": `Veja o vídeo curto abaixo com o fluxo do app.`,
								"url": "https://youtube.com/embed/c1BMVePlR4A?feature=share"
							},
						]
					},
				]
			},
			{
				"id": 10,
				"title": "Baixando e executando localmente",
				"order": 3,
				"components": [
					{
						"id": 4,
						"type": "text",
						"content": `<p>É necessário ter instalado e configurado em máquina o <b>Flutter 3.22.2</b> ou superior
                          com seus binários adicionados ao <b>$PATH</b> e <b>Dart >=3.4.3 <4.0.0</b> também adicionado ao <b>$PATH</b></p>`,
					},
					{
						"id": 5,
						"type": "code_or_instructions",
						"content": [
							{
								"title": "Instalando e executando via terminal",
								"instructions": [
									{
										"title": "Clonar o projeto:",
										"type": "code",
										"content": "git clone https://github.com/rafaelleonan/app-flutter-clone-olx.git"
									},
									{
										"title": "Acessar o diretório raiz do projeto:",
										"type": "code",
										"content": "cd app-flutter-clone-olx"
									},
									{
										"title": "Executar o projeto:",
										"type": "code",
										"content": "flutter run"
									}
								]
							},
						]
					}
				]
			},
		],
		"comments": [
			{
				"id": 1,
				"user_name": "John Doe",
				"content": "Great project! Loved the design.",
				"posted_at": "10/12/2024 ás 17:11",
				"replies": [
					{
						"id": 2,
						"user_name": "Author",
						"content": "Thank you, John!",
						"posted_at": "11/12/2024 ás 12:35",
						"reactions": [
							{
								"id": 1,
								"count": 1,
								"list_users_id": [1],
								"reaction_type": "like",
							}
						]
					}
				],
				"reactions": [
					{
						"id": 2,
						"count": 3,
						"list_users_id": [1, 3, 4],
						"reaction_type": "like",
					},
					{
						"id": 3,
						"count": 5,
						"list_users_id": [1, 5, 6, 7, 13],
						"reaction_type": "smile",
					}
				]
			}
		]
	},
	{
		"id": 7,
		"title": "APP 'CLONE' WHATSAPP",
		"type_project": ["Mobile", "Frontend"],
		"current_index": 0,
		"description": `Um aplicativo desenvolvido durante o curso de Desenvolvimento Flutter Mobile,
                      com o objetivo de entender e aplicar conceitos fundamentais na criação de um aplicativo similar ao Whatsapp.
                       O projeto utiliza Firebase para gerenciamento de cadastro, autenticação de usuários, banco de dados
                       em tempo real, proporcionando uma experiência prática e completa de desenvolvimento mobile.`,
		"post_date": "11/01/2025 19:55",
		"images": [
			{ "alt": "Tela de Login", "src": "https://raw.githubusercontent.com/rafaelleonan/app-flutter-clone-whatsapp/refs/heads/main/assets/images/simulator_screenshot_iphone13_ios16_4_login.png" },
			{ "alt": "Tela de Cadastro", "src": "https://raw.githubusercontent.com/rafaelleonan/app-flutter-clone-whatsapp/refs/heads/main/assets/images/simulator_screenshot_iphone13_ios16_4_cadastro.png" },
			{ "alt": "Tela de Configurações", "src": "https://raw.githubusercontent.com/rafaelleonan/app-flutter-clone-whatsapp/refs/heads/main/assets/images/simulator_screenshot_iphone13_ios16_4_configuracoes.png" },
			{ "alt": "Tela de Contatos", "src": "https://raw.githubusercontent.com/rafaelleonan/app-flutter-clone-whatsapp/refs/heads/main/assets/images/simulator_screenshot_iphone13_ios16_4_contatos.png" },
			{ "alt": "Tela de Conversas Vazia", "src": "https://raw.githubusercontent.com/rafaelleonan/app-flutter-clone-whatsapp/refs/heads/main/assets/images/simulator_screenshot_iphone13_ios16_4_conversas.png" },
			{ "alt": "Tela de Conversa - 1", "src": "https://raw.githubusercontent.com/rafaelleonan/app-flutter-clone-whatsapp/refs/heads/main/assets/images/simulator_screenshot_iphone13_ios16_4_conversa1.png" },
			{ "alt": "Tela de Conversa - 2", "src": "https://raw.githubusercontent.com/rafaelleonan/app-flutter-clone-whatsapp/refs/heads/main/assets/images/simulator_screenshot_iphone13_ios16_4_conversa2.png" },
			{ "alt": "Tela de Conversa - 3", "src": "https://raw.githubusercontent.com/rafaelleonan/app-flutter-clone-whatsapp/refs/heads/main/assets/images/simulator_screenshot_iphone13_ios16_4_conversa4.png" },
			{ "alt": "Tela de Conversa - 4", "src": "https://raw.githubusercontent.com/rafaelleonan/app-flutter-clone-whatsapp/refs/heads/main/assets/images/simulator_screenshot_iphone13_ios16_4_conversa5.png" },
			{ "alt": "Tela de Conversas", "src": "https://raw.githubusercontent.com/rafaelleonan/app-flutter-clone-whatsapp/refs/heads/main/assets/images/simulator_screenshot_iphone13_ios16_4_conversa6.png" },
		],
		"external_links": [
			{
				"label": "Repositório do projeto",
				"url": "https://github.com/rafaelleonan/app-flutter-clone-whatsapp"
			},
		],
		"technologies": [
			{ "name": "Flutter", "version": "3.22.2", "icon_url": "https://firebasestorage.googleapis.com/v0/b/portfolio-2cd49.firebasestorage.app/o/projects%2Fsati%2Ftech%2Fflutter.svg?alt=media&token=fcc57e6f-5fb4-4a97-9fd9-71db7faf7d7b" },
			{ "name": "Dart", "version": ">=3.4.3 <4.0.0", "icon_url": "https://firebasestorage.googleapis.com/v0/b/portfolio-2cd49.firebasestorage.app/o/projects%2Fsati%2Ftech%2Fdart.svg?alt=media&token=fcc57e6f-5fb4-4a97-9fd9-71db7faf7d7b" },
			{ "name": "Firestore", "version": "^5.1.0", "icon_url": "https://firebasestorage.googleapis.com/v0/b/portfolio-2cd49.firebasestorage.app/o/projects%2Fsati%2Ftech%2Ffirebase.svg?alt=media&token=fcc57e6f-5fb4-4a97-9fd9-71db7faf7d7b" },
			{ "name": "Core", "version": "^3.2.0", "icon_url": "https://firebasestorage.googleapis.com/v0/b/portfolio-2cd49.firebasestorage.app/o/projects%2Fsati%2Ftech%2Ffirebase.svg?alt=media&token=fcc57e6f-5fb4-4a97-9fd9-71db7faf7d7b" },
			{ "name": "Auth", "version": "^5.1.2", "icon_url": "https://firebasestorage.googleapis.com/v0/b/portfolio-2cd49.firebasestorage.app/o/projects%2Fsati%2Ftech%2Ffirebase.svg?alt=media&token=fcc57e6f-5fb4-4a97-9fd9-71db7faf7d7b" },
			{ "name": "Storage", "version": "^12.1.1", "icon_url": "https://firebasestorage.googleapis.com/v0/b/portfolio-2cd49.firebasestorage.app/o/projects%2Fsati%2Ftech%2Ffirebase.svg?alt=media&token=fcc57e6f-5fb4-4a97-9fd9-71db7faf7d7b" },
		],
		"sections": [
			{
				"id": 7,
				"title": "Sobre o projeto",
				"order": 1,
				"components": [
					{
						"id": 1,
						"type": "text",
						"content": `<p>Um aplicativo desenvolvido durante o curso de Desenvolvimento Flutter Mobile,
                      com o objetivo de entender e aplicar conceitos fundamentais na criação de um aplicativo similar ao Whatsapp.
                       O projeto utiliza Firebase para gerenciamento de cadastro, autenticação de usuários, banco de dados
                       em tempo real, proporcionando uma experiência prática e completa de desenvolvimento mobile.</p>`,
					}
				]
			},
			{
				"id": 8,
				"title": "Por tela",
				"order": 2,
				"components": [
					{
						"id": 2,
						"type": "carousel_image_with_text",
						"content": {
							"current_index": 0,
							"items": [
								{
									"id": 1,
									"title": "Tela de Login",
									"text": `Tela de acesso ao app, onde o usuário informa suas credenciais de e-mail e senha cadastradas no sistema.
                           Caso o usuário ainda não tenha cadastro, possui um link que ao ser clicado redireciona para o formulário de cadastro.`,
									"url": "https://raw.githubusercontent.com/rafaelleonan/app-flutter-clone-whatsapp/refs/heads/main/assets/images/simulator_screenshot_iphone13_ios16_4_login.png"
								},
								{
									"id": 2,
									"title": "Tela de Cadastro",
									"text": `Tela de cadastro ao app, onde o usuário informa suas credenciais de e-mail e senha para ser cadastrado no sistema.
                           Caso o usuário já tenha cadastro, é possível retornar ao login com um botão de voltar ao topo do lado direito da tela.`,
									"url": "https://raw.githubusercontent.com/rafaelleonan/app-flutter-clone-whatsapp/refs/heads/main/assets/images/simulator_screenshot_iphone13_ios16_4_cadastro.png"
								},
								{
									"id": 3,
									"title": "Tela de Configurações",
									"text": `Tela de configurações do perfil, onde o usuário pode alterar o nome de perfil e trocar a foto, buscando uma na galeria,
									         ou tirando uma nova foto.`,
									"url": "https://raw.githubusercontent.com/rafaelleonan/app-flutter-clone-whatsapp/refs/heads/main/assets/images/simulator_screenshot_iphone13_ios16_4_configuracoes.png"
								},
								{
									"id": 4,
									"title": "Tela de Contatos",
									"text": `Tela de contatos, onde o usuário pode visualizar a lista de contatos que possui e clicar para iniciar uma conversa.`,
									"url": "https://raw.githubusercontent.com/rafaelleonan/app-flutter-clone-whatsapp/refs/heads/main/assets/images/simulator_screenshot_iphone13_ios16_4_contatos.png"
								},
								{
									"id": 5,
									"title": "Tela de Conversas - Vazia",
									"text": `Tela de conversas - vazia, exibe apenas uma mensagem informando que o usuário ainda não possui conversas.`,
									"url": "https://raw.githubusercontent.com/rafaelleonan/app-flutter-clone-whatsapp/refs/heads/main/assets/images/simulator_screenshot_iphone13_ios16_4_conversas.png"
								},
								{
									"id": 6,
									"title": "Tela de Conversa - 1",
									"text": `Tela de conversa - 1, iniciando uma conversa com um contato.`,
									"url": "https://raw.githubusercontent.com/rafaelleonan/app-flutter-clone-whatsapp/refs/heads/main/assets/images/simulator_screenshot_iphone13_ios16_4_conversa1.png"
								},
								{
									"id": 7,
									"title": "Tela de Conversa - 2",
									"text": `Tela de conversa - 2, mensagem enviada ao contato.`,
									"url": "https://raw.githubusercontent.com/rafaelleonan/app-flutter-clone-whatsapp/refs/heads/main/assets/images/simulator_screenshot_iphone13_ios16_4_conversa2.png"
								},
								{
									"id": 8,
									"title": "Tela de Conversa - 3",
									"text": `Tela de conversa - 3, visualizando mensagem e respondendo.`,
									"url": "https://raw.githubusercontent.com/rafaelleonan/app-flutter-clone-whatsapp/refs/heads/main/assets/images/simulator_screenshot_iphone13_ios16_4_conversa4.png"
								},
								{
									"id": 9,
									"title": "Tela de Conversa - 4",
									"text": `Tela de conversa - 4, visualizando nova mensagem de um contato diferente e respondendo.`,
									"url": "https://raw.githubusercontent.com/rafaelleonan/app-flutter-clone-whatsapp/refs/heads/main/assets/images/simulator_screenshot_iphone13_ios16_4_conversa5.png"
								},
								{
									"id": 10,
									"title": "Tela de Conversas",
									"text": `Tela de conversas, exibe a listagem de conversas ativas que o usuário possui.`,
									"url": "https://raw.githubusercontent.com/rafaelleonan/app-flutter-clone-whatsapp/refs/heads/main/assets/images/simulator_screenshot_iphone13_ios16_4_conversa6.png"
								},
							]
						}
					},
				]
			},
			{
				"id": 9,
				"title": "Vídeo",
				"order": 2,
				"components": [
					{
						"id": 2,
						"type": "video_with_text",
						"content": [
							{
								"id": 0,
								"title": "Tela de fluxo 1",
								"text": `Veja o vídeo curto abaixo com o fluxo 1.`,
								"url": "https://youtube.com/embed/-EpSZh9bCq8?feature=share"
							},
							{
								"id": 1,
								"title": "Tela de fluxo 2",
								"text": `Veja o vídeo curto abaixo com o fluxo 2.`,
								"url": "https://youtube.com/embed/Ph4Jw5PnmAw?feature=share"
							}
						]
					},
				]
			},
			{
				"id": 10,
				"title": "Baixando e executando localmente",
				"order": 3,
				"components": [
					{
						"id": 4,
						"type": "text",
						"content": `<p>É necessário ter instalado e configurado em máquina o <b>Flutter 3.22.2</b> ou superior
                          com seus binários adicionados ao <b>$PATH</b> e <b>Dart >=3.4.3 <4.0.0</b> também adicionado ao <b>$PATH</b></p>`,
					},
					{
						"id": 5,
						"type": "code_or_instructions",
						"content": [
							{
								"title": "Instalando e executando via terminal",
								"instructions": [
									{
										"title": "Clonar o projeto:",
										"type": "code",
										"content": "git clone https://github.com/rafaelleonan/app-flutter-clone-whatsapp.git"
									},
									{
										"title": "Acessar o diretório raiz do projeto:",
										"type": "code",
										"content": "cd app-flutter-clone-whatsapp"
									},
									{
										"title": "Executar o projeto:",
										"type": "code",
										"content": "flutter run"
									}
								]
							},
						]
					}
				]
			}
		],
		"comments": [
			{
				"id": 1,
				"user_name": "John Doe",
				"content": "Great project! Loved the design.",
				"posted_at": "10/12/2024 ás 17:11",
				"replies": [
					{
						"id": 2,
						"user_name": "Author",
						"content": "Thank you, John!",
						"posted_at": "11/12/2024 ás 12:35",
						"reactions": [
							{
								"id": 1,
								"count": 1,
								"list_users_id": [1],
								"reaction_type": "like",
							}
						]
					}
				],
				"reactions": [
					{
						"id": 2,
						"count": 3,
						"list_users_id": [1, 3, 4],
						"reaction_type": "like",
					},
					{
						"id": 3,
						"count": 5,
						"list_users_id": [1, 5, 6, 7, 13],
						"reaction_type": "smile",
					}
				]
			}
		]
	},
	{
		"id": 8,
		"title": "TELA DE LOGIN ANIMADA COM FLUTTER",
		"type_project": ["Mobile", "Frontend"],
		"current_index": 0,
		"description": `Uma tela de login simples, com campos de e-email e senha utilizando animações em flutter.`,
		"post_date": "11/01/2025 19:55",
		"images": [
			{ "alt": "Tela de Login", "src": "https://raw.githubusercontent.com/rafaelleonan/app-flutter-login-animado/refs/heads/main/assets/images/simulator_screenshot_iphone13_ios16_4.png" },
		],
		"external_links": [
			{
				"label": "Repositório do projeto",
				"url": "https://github.com/rafaelleonan/app-flutter-login-animado"
			},
		],
		"technologies": [
			{ "name": "Flutter", "version": "3.22.2", "icon_url": "https://firebasestorage.googleapis.com/v0/b/portfolio-2cd49.firebasestorage.app/o/projects%2Fsati%2Ftech%2Fflutter.svg?alt=media&token=fcc57e6f-5fb4-4a97-9fd9-71db7faf7d7b" },
			{ "name": "Dart", "version": ">=3.4.3 <4.0.0", "icon_url": "https://firebasestorage.googleapis.com/v0/b/portfolio-2cd49.firebasestorage.app/o/projects%2Fsati%2Ftech%2Fdart.svg?alt=media&token=fcc57e6f-5fb4-4a97-9fd9-71db7faf7d7b" },
		],
		"sections": [
			{
				"id": 7,
				"title": "Sobre o projeto",
				"order": 1,
				"components": [
					{
						"id": 1,
						"type": "text",
						"content": `<p>Uma tela de login simples, com campos de e-email e senha utilizando animações em flutter.</p>`,
					}
				]
			},
			{
				"id": 8,
				"title": "Por tela",
				"order": 2,
				"components": [
					{
						"id": 1,
						"type": "image_with_text",
						"content": [
							{
								"id": 0,
								"title": "Tela de Login Animada",
								"text": `Tela de login simples utilizando animações em flutter`,
								"url": "https://raw.githubusercontent.com/rafaelleonan/app-flutter-login-animado/refs/heads/main/assets/images/simulator_screenshot_iphone13_ios16_4.png"
							}
						]
					},
				]
			},
			{
				"id": 9,
				"title": "Vídeo",
				"order": 2,
				"components": [
					{
						"id": 2,
						"type": "video_with_text",
						"content": [
							{
								"id": 0,
								"title": "Tela de Login Animada",
								"text": `Veja o vídeo curto abaixo com a animação.`,
								"url": "https://youtube.com/embed/dbUkqac2EM0?feature=share"
							}
						]
					},
				]
			},
			{
				"id": 10,
				"title": "Baixando e executando localmente",
				"order": 3,
				"components": [
					{
						"id": 4,
						"type": "text",
						"content": `<p>É necessário ter instalado e configurado em máquina o <b>Flutter 3.22.2</b> ou superior
                            com seus binários adicionados ao <b>$PATH</b> e <b>Dart >=3.4.3 <4.0.0</b> também adicionado ao <b>$PATH</b></p>`,
					},
					{
						"id": 5,
						"type": "code_or_instructions",
						"content": [
							{
								"title": "Instalando e executando via terminal",
								"instructions": [
									{
										"title": "Clonar o projeto:",
										"type": "code",
										"content": "git clone https://github.com/rafaelleonan/app-flutter-login-animado.git"
									},
									{
										"title": "Acessar o diretório raiz do projeto:",
										"type": "code",
										"content": "cd app-flutter-login-animado"
									},
									{
										"title": "Executar o projeto:",
										"type": "code",
										"content": "flutter run"
									}
								]
							},
						]
					}
				]
			}
		],
		"comments": [
			{
				"id": 1,
				"user_name": "John Doe",
				"content": "Great project! Loved the design.",
				"posted_at": "10/12/2024 ás 17:11",
				"replies": [
					{
						"id": 2,
						"user_name": "Author",
						"content": "Thank you, John!",
						"posted_at": "11/12/2024 ás 12:35",
						"reactions": [
							{
								"id": 1,
								"count": 1,
								"list_users_id": [1],
								"reaction_type": "like",
							}
						]
					}
				],
				"reactions": [
					{
						"id": 2,
						"count": 3,
						"list_users_id": [1, 3, 4],
						"reaction_type": "like",
					},
					{
						"id": 3,
						"count": 5,
						"list_users_id": [1, 5, 6, 7, 13],
						"reaction_type": "smile",
					}
				]
			}
		]
	},
])

export const OptionsFontSize = reactive<GenericOption[]>([
    {label: 'Heading 1', value: '32px'},
    {label: 'Heading 2', value: '28px'},
    {label: 'Heading 3', value: '24px'},
    {label: 'Heading 4', value: '20px'},
    {label: 'normal', value: '16px'},
    {label: 'medium', value: '14px'},
    {label: 'small', value: '12px'},
    {label: 'extra small', value: '10px'},
    {label: '2x extra small', value: '8px'}
])