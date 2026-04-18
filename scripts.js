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
  problema,
  objetivo,
  solucao,
  tecnologias,
  resultado,
  contribuicao,
  links,
) {
  this.img = img;
  this.titulo = titulo;
  this.problema = problema;
  this.objetivo = objetivo;
  this.solucao = solucao;
  this.tecnologias = tecnologias;
  this.resultado = resultado;
  this.contribuicao = contribuicao;
  this.links = links;
}

const projetos = [];

const koitech = new Projeto(
  "./img/koi.jpg",
  "Análise do Censo 2022 IBGE",
  [
    "Os dados do Censo 2022 disponibilizados pelo IBGE são extensos, distribuídos em múltiplas planilhas e com baixa padronização, dificultando a análise e a extração de insights.",
  ],
  [
    "Transformar dados brutos do Censo em informações acessíveis e de fácil interpretação — especialmente para usuários não técnicos.",
  ],
  [
    "Desenvolvi, em equipe, uma aplicação para processamento e visualização de dados, estruturando um pipeline completo (coleta → tratamento → insights → visualização).",
    "Os dados foram extraídos de planilhas oficiais (.xlsx), tratados e organizados com Pandas, e transformados em visualizações interativas com Plotly.",
  ],
  [
    "Python (Pandas)",
    "Plotly",
    "Flask",
    "HTML, CSS, JavaScript",
    "Google Colab",
    "Git",
  ],
  [
    "A aplicação reduziu significativamente o tempo e o esforço necessários para análise dos dados demográficos, que antes eram processados manualmente em planilhas.",
    "Ao centralizar as informações em gráficos interativos, a solução permitiu identificar padrões de forma mais rápida e intuitiva, facilitando a geração de insights e apoiando a tomada de decisão em contextos públicos.",
  ],
  [
    "Atuação como Product Owner, definindo escopo e priorizando entregas",
    "Tratamento de valores nulos",
    "Normalização de colunas",
    "Exportação de gráficos em JSON",
    "Geração de gráficos interativos com Plotly",
    "Desenvolvimento do front-end com HTML, CSS e JavaScript",
    "Estruturação de templates com Flask (Jinja2)",
  ],
  [
    { key: "https://github.com/koitech-API", value: "Repositório" },
    {
      key: "https://www.youtube.com/watch?v=_kmMAI6yvoQ",
      value: "Demonstração",
    },
  ],
);
projetos.push(koitech);

const koitechAero = new Projeto(
  "./img/koi-aero.png",
  "Plataforma de Gerenciamento de Normas Aeronáuticas (em desenvolvimento)",
  [
    "O cliente, fabricante de peças aeronáuticas, utiliza um grande volume de normas técnicas ao longo de todo o processo de engenharia. Essas normas são essenciais para garantir conformidade e qualidade nos projetos.",
    "No entanto, a identificação e consulta dessas normas é um processo lento, devido à estrutura densa e à dificuldade de organização das informações, o que impacta diretamente a eficiência das atividades técnicas.",
  ],
  [
    "Desenvolver uma plataforma capaz de centralizar o gerenciamento de normas técnicas, permitindo aos engenheiros e time técnico organizar, registrar e consultar informações de forma estruturada, com recursos de busca, classificação e rastreabilidade.",
  ],
  [
    "Até o momento, desenvolvi, em equipe, uma aplicação web para gerenciamento de normas técnicas, estruturada para suportar operações de cadastro, consulta e relacionamento entre normas.",
    "A arquitetura da aplicação foi dividida entre front-end e back-end, com comunicação via API REST e a estruturação do backend com Fastify, incluindo modelagem de dados com Prisma e validação de dados com Zod.",
  ],
  [
    "React",
    "TypeScript",
    "Vite",
    "Tailwind CSS",
    "Node.js",
    "Fastify",
    "Prisma",
    "Zod",
    "Docker",
    "Git",
  ],
  [
    "A aplicação já permite o cadastro e gerenciamento de normas técnicas, incluindo controle de versões, relacionamento entre normas e aplicação de filtros para consulta.",
    "Com isso, o sistema substitui processos manuais e descentralizados por uma solução estruturada, reduzindo o tempo necessário para localizar normas técnicas e melhorando a organização das informações no fluxo de engenharia.",
  ],
  [
    "Atuação como Product Owner, definindo escopo, priorizando entregas e alinhando requisitos com o cliente",
    "Desenvolvimento das interfaces com React e JavaScript",
    "Estruturação do front-end com separação por responsabilidades (components, services, utils, pages)",
    "Estilização com Tailwind CSS",
    "Preparação do front-end para consumo de API REST",
  ],
  [
    { key: "https://github.com/koitech-aero", value: "Repositório" },
    {
      key: "https://www.youtube.com/watch?v=e-QOllVsI6s",
      value: "Demonstração",
    },
  ],
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
    function ListaLinks(objeto) {
      return objeto
        .map((item) => `<p><a href="${item.key}">• ${item.value}</a></p>`)
        .join("");
    }
    function Solucao(array) {
      if (!array || array.length === 0) {
        return "";
      }
      return `<h2>Solução</h2><p>${ListaParagrafo(array)}</p>`;
    }

    article.innerHTML = `
            <img src="${projeto.img}">

            <div>
                <h1>${projeto.titulo}</h1>

                <h2>Problema</h2>
                ${ListaParagrafo(projeto.problema)}

                <h2>Objetivo</h2>
                ${ListaParagrafo(projeto.objetivo)}
          
                ${Solucao(projeto.solucao)}

                <h2>Tecnologias</h2>
                ${ListaItem(projeto.tecnologias)}
  
                <h2>Resultado</h2>
                ${ListaParagrafo(projeto.resultado)}

                <h2>Minha contribuição</h2>
                ${ListaItem(projeto.contribuicao)}
                
                <h2>Links</h2>
                ${ListaLinks(projeto.links)}
            </div>
        `;
    container.appendChild(article);
  }
}
renderizarProjetos();
