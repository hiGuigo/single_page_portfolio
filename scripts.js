// saudação
function saudacao() {
  const elementos = document.querySelectorAll(".saudacao");
  const hora = new Date().getHours();
  let mensagem;

  if (hora < 12) {
    mensagem = "Bom dia, eu me chamo";
  } else if (hora < 18) {
    mensagem = "Boa tarde, eu me chamo";
  } else {
    mensagem = "Boa noite, eu me chamo";
  }

  elementos.forEach((el) => {
    el.textContent = mensagem;
  });
}
saudacao();

// renderização de projetos
function Projeto(
  img,
  titulo,
  descricao,
  aplicacao,
  participacao,
  desenvolvido,
  conceitos,
  links,
) {
  this.img = img;
  this.titulo = titulo;
  this.descricao = descricao;
  this.aplicacao = aplicacao;
  this.participacao = participacao;
  this.desenvolvido = desenvolvido;
  this.conceitos = conceitos;
  this.links = links;
}

const projetos = [];

const koitech = new Projeto(
  "./img/koi.jpg",
  "Análise do Censo 2022 IBGE",
  "Projeto desenvolvido a partir de um desafio proposto pela FATEC Prof. Jessen Vidal, com o objetivo de transformar grandes volumes de dados do Censo 2022 do IBGE em informações compreensíveis e acessíveis por meio de visualizações interativas. A dificuldade do cliente estava em extrair valor e significado de uma grande massa de dados brutos disponibilizados pelo IBGE, tornando a análise pouco acessível para usuários não técnicos.",
  [
    "A aplicação realiza um pipeline de processamento de dados do Censo, desde a coleta até a visualização. Inicialmente, as tabelas são obtidas no site oficial do IBGE e passam por um processo de padronização e tratamento, resultando em dataframes estruturados.",
    "A partir desses dados, são gerados dataframes voltados à extração de insights, como distribuição etária, nível de instrução da população, quantidade de indivíduos por cidade e proporção de jovens nas cidades do Vale do Paraíba.",
    "Com base nesses dados, são criadas visualizações interativas utilizando Plotly. Os gráficos gerados são exportados em formato JSON e integrados ao projeto, sendo posteriormente disponibilizados na aplicação web por meio de rotas implementadas com Flask, permitindo que o usuário visualize os gráficos de forma simples e acessível.",
  ],
  "Atuei como Product Owner da equipe, sendo responsável pela definição de escopo, priorização de entregas e alinhamento com o cliente. Além disso, participei ativamente do desenvolvimento técnico da aplicação, com foco no tratamento de dados e construção do front-end.",
  [
    "Padronização e organização das tabelas do Censo fornecidas pelo IBGE",
    "Tratamento e análise de dados utilizando Pandas em ambiente Google Colab",
    "Geração de visualizações interativas com Plotly a partir dos dados tratados",
    "Implementação de rotas com Flask para disponibilização dos gráficos na aplicação",
    "Desenvolvimento da interface utilizando HTML, CSS e JavaScript",
    "Criação de componentes reutilizáveis para padronização das páginas",
    "Implementação de funcionalidade para download dos gráficos",
  ],
  [
    "Manipulação e tratamento de dados",
    "Visualização de dados",
    "Componentização",
    "Herança de templates com Flask",
  ],
  [
    "https://github.com/koitech-API",
    "https://www.youtube.com/watch?v=_kmMAI6yvoQ",
  ],
);

projetos.push(koitech);

const koitechAero = new Projeto(
  "./img/koi-aero.png",
  "Plataforma de Conteúdo Técnico de Normas Aeronáuticas - Em desenvolvimento",
  [
    "Sistema para gerenciar normas técnicas aeronáuticas, com foco em organizar, visualizar e futuramente manipular dados de forma estruturada. A plataforma oferecerá recursos de busca, classificação e rastreabilidade das informações, facilitando o acesso às normas aplicáveis e tornando o processo mais ágil e eficiente.",
  ],
  [],
  "Atuo como Product Owner da equipe, definindo com o cliente o que será necessário e de valor, bem como o que será possível ser entregue. Sou o responsável pelo escopo do projeto, atividades/tarefas a serem realizadas, manutenção na documentação do projeto, entre outras atividades. Além disso, participo do desenvolvimento do front-end da aplicação.",
  [
    "Desenvolvimento da interface com React, utilizando Vite para otimização do ambiente",
    "Estilização com Tailwind CSS",
    "Estruturação de componentes reutilizáveis visando escalabilidade",
    "Organização de layout baseada em separação de responsabilidades",
    "Estruturação do front-end para integração com API REST do projeto",
  ],
  [
    "Componentização e reaproveitamento de código",
    "Gerenciamento de props entre componentes",
    "Estruturação de pastas pensando em crescimento do projeto",
  ],
  ["https://github.com/KoiTech-Aero"],
);

projetos.push(koitechAero);

function renderizarProjetos() {
  const container = document.querySelector(".projetosContainer");
  projetos.reverse();

  for (let i = 0; i < projetos.length; i++) {
    const projeto = projetos[i];

    const article = document.createElement("article");

    function ListaItem(array) {
      for (const i of array) {
        return array.map((item) => `<p>• ${item}</p>`).join("");
      }
    }
    function ListaParagrafo(array) {
      for (const i of array) {
        return array.map((item) => `<p>${item}</p>`).join("");
      }
    }
    function ListaLinks(array) {
      for (const i of array) {
        return array
          .map((item) => `<p><a href="${item}">${item}</a></p>`)
          .join("");
      }
    }
    function Funcionamento(array) {
      if (!array || array.length === 0) {
        return "";
      }
      return `<h2>Funcionamento da aplicação</h2><p>${ListaParagrafo(array)}</p>`;
    }

    article.innerHTML = `
            <img src="${projeto.img}">

            <div>
                <h1>${projeto.titulo}</h1>

                <h2>Descrição</h2>
                <p>${projeto.descricao}</p>

                ${Funcionamento(projeto.aplicacao)}

                <h2>Minha participação</h2>
                <p>${projeto.participacao}</p>
  
                <h2>O que desenvolvi</h2>
                ${ListaItem(projeto.desenvolvido)}

                <h2>Conceitos que apliquei</h2>
                ${ListaItem(projeto.conceitos)}
                
                <h2>Links: </h2>
                ${ListaLinks(projeto.links)}
            </div>
        `;
    container.appendChild(article);
  }
}
renderizarProjetos();
