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
function Projeto(img, titulo, sobre, participacao, repositorio) {
  this.img = img;
  this.titulo = titulo;
  this.sobre = sobre;
  this.participacao = participacao;
  this.repositorio = repositorio;
}

const projetos = [];

const koitech = new Projeto(
  "./img/koi.jpg",
  "Análise do Censo 2022 IBGE",
  "Desafio proposto pelo time institucional da FATEC Prof. Jessen Vidal para os alunos do primeiro semestre do curso de Desenvolvimento de Software Multiplataforma. O problema proposto foi a dificuldade do cliente em dar significado à quantidade massiva de dados do censo do IBGE de 2022. A solução oferecida foi criar uma plataforma online para exibir o resultado do tratamento e análise dos dados.",
  "Atuei como Product Owner da equipe, tratando com o cliente o que seria necessário e de valor, bem como o que seria possível ser entregue. Elaborei o escopo do projeto, atividades/tarefas a serem realizadas, manutenção na documentação do projeto, entre outras atividades. Além disso, participei ativamente no desenvolvimento do produto, principalmente no frontend.",
  "https://github.com/koitech-API",
);

projetos.push(koitech);

const koitechAero = new Projeto(
  "./img/koi-aero.png",
  "Plataforma de Conteúdo Técnico de Normas Aeronáuticas - Em andamento",
  "Desafio proposto pelo time institucional da FATEC Prof. Jessen Vidal para os alunos do segundo semestre do curso de Desenvolvimento de Software Multiplataforma. O problema proposto foi a dificuldade do cliente em buscar por normas técnicas em suas tarefas do dia-a-dia, dada a quantidade de normas e de informações que elas contém. A solução oferecida foi criar um sistema para gerenciar essas normas, permitindo organizar, registrar e consultar normas de forma estruturada.",
  "Atuo como Product Owner da equipe, definindo com o cliente o que será necessário e de valor, bem como o que será possível ser entregue. Sou o responsável pelo escopo do projeto, atividades/tarefas a serem realizadas, manutenção na documentação do projeto, entre outras atividades. Além disso, participo ativamente no desenvolvimento do produto.",
  "https://github.com/KoiTech-Aero",
);

projetos.push(koitechAero);

function renderizarProjetos() {
  const container = document.querySelector(".projetosContainer");
  projetos.reverse()

  for (let i = 0; i < projetos.length; i++) {
    const projeto = projetos[i];

    const article = document.createElement("article");

    article.innerHTML = `
            <img src="${projeto.img}">

            <div>
                <h1>${projeto.titulo}</h1>

                <h2>Sobre o Projeto</h2>
                <p>${projeto.sobre}</p>

                <h2>Minha participação</h2>
                <p>${projeto.participacao}</p>

                <h2>Repositório do projeto: </h2>
                <p><a href="${projeto.repositorio}">${projeto.repositorio}</a></p>
            </div>
        `;
    container.appendChild(article);
  }
}
renderizarProjetos();
