// saudação
function saudacao() {
    const h2 = document.getElementById("saudacao")
    const hora = new Date().getHours()

    if (hora < 12) {
        h2.textContent = "Bom dia, eu me chamo"
    } else if (hora < 18) {
        h2.textContent = "Boa tarde, eu me chamo"
    } else {
        h2.textContent = "Boa noite, eu me chamo"
    }
}
saudacao()

// renderização de projetos
function Projeto(img, titulo, sobre, participacao, repositorio) {
    this.img = img
    this.titulo = titulo
    this.sobre = sobre
    this.participacao = participacao
    this.repositorio = repositorio
}

const projetos = []

const koitech = new Projeto(
    "./img/koi.jpg",
    "Análise do Censo 2022 IBGE",
    "Desafio proposto pelo time institucional da FATEC Prof. Jessen Vidal para os alunos do primeiro semestre do curso de Desenvolvimento de Software Multiplataforma. O problema proposto foi a dificuldade do cliente em dar significado à quantidade massiva de dados do censo do IBGE de 2022. A solução oferecida foi criar uma plataforma online para exibir o resultado do tratamento e análise dos dados.",
    "Atuei como Product Owner da equipe, tratando com o cliente o que seria necessário e de valor, bem como o que seria possível ser entregue. Elaborei o escopo do projeto, atividades/tarefas a serem realizadas e participei do desenvolvimento front-end.",
    "https://github.com/koitech-API"
)

projetos.push(koitech)

function renderizarProjetos() {
    const container = document.querySelector(".projetosContainer")

    for (let i = 0; i < projetos.length; i++) {
        const projeto = projetos[i]

        const article = document.createElement("article")

        article.innerHTML = `
            <img src="${projeto.img}">

            <div>
                <h1>${projeto.titulo}</h1>

                <h2>Sobre o Projeto</h2>
                <p>${projeto.sobre}</p>

                <h2>Minha participação</h2>
                <p>${projeto.participacao}</p>

                <h2>Repositório do projeto</h2>
                <p><a href="${projeto.repositorio}">${projeto.repositorio}</a></p>
            </div>
        `
        container.appendChild(article)
    }
}
renderizarProjetos()