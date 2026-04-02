const pagina = document.body.dataset.page;


// =====================
// MENU
// =====================
function toggleMenu() {
  document.getElementById("menu").classList.toggle("ativo");
}

document.querySelectorAll(".menu a").forEach(link => {
  link.addEventListener("click", () => {
    document.getElementById("menu").classList.remove("ativo");
  });
});


// =====================
// PERSONAGENS
// =====================
if (pagina === "personagens") {

  const personagens = [
    {
      nome: "CHRIS REDFIELD",
      subtitulo: "Soldado veterano e agente da BSAA.\nUm dos principais combatentes do bioterrorismo",
      thumb: "img/personagens/chris_icon.png",
      descricao: "Chris Redfield é um veterano militar e um dos fundadores da BSAA (Bioterrorism Security Assessment Alliance). Após sobreviver ao Incidente da Mansão em 1998 como membro dos S.T.A.R.S., dedicou sua vida a combater armas bio-orgânicas ao redor do mundo. Conhecido por sua força física e liderança, Chris se tornou uma figura central na luta contra o bioterrorismo, enfrentando diversas ameaças globais ao longo dos anos.",
      imagens: [
        {src: "img/personagens/chris_RE1.png", legenda: "Resident Evil"},
      ]
    },

    {
      nome: "JILL VALENTINE",
      subtitulo: "Especialista em táticas e agente da BSAA.\nSobrevivente do Incidente da Mansão",
      thumb: "img/personagens/jill_icon.png",
      descricao: "Jill Valentine é uma ex-integrante dos S.T.A.R.S. e uma das sobreviventes do Incidente da Mansão em 1998. Altamente treinada em desarmamento de bombas e combate tático, tornou-se posteriormente uma agente da BSAA. Jill é conhecida por sua inteligência, habilidade e resistência, tendo enfrentado inúmeras ameaças biológicas, incluindo sua captura e controle por Albert Wesker.",
      imagens: [
        {src: "img/personagens/jill_RE1R.png", legenda: "Resident Evil"},
      ]
    },

    {
      nome: "LEON SCOTT KENNEDY",
      subtitulo: "Ex policial e atual agente americano.\nUm dos sobreviventes da catástrofe de Raccon City",
      thumb: "img/personagens/leon_icon.png",
      descricao: "Ex policial e atual agente americano da D.S.O, divisão essa que ajudou a criar ao lado do Presidente dos Estados Unidos, tendo um cargo de muita confiança e respeito das altas autoridades dos Estados Unidos, tendo sido amigo do falecido Presidente Adam Benford. Antes disso, Leon serviu como policial pelo Departamento de Policia de Raccoon City(R.P.D) por apenas um dia. Ele se interessou em entrar para a policia depois de saber sobre os estranhos eventos que aconteceu em Arklay Mountains, no ano de 1996.",
      imagens: [
        {src: "img/personagens/leon_RE2.png", legenda: "Resident Evil 2"},
        {src: "img/personagens/leon_RE9.png", legenda: "Resident Evil 4"}
      ]
    },

    {
      nome: "CLAIRE REDFIELD",
      subtitulo: "Civil e membro da TerraSave.\nSobrevivente de Raccoon City",
      thumb: "img/personagens/claire_icon.png",
      descricao: "Claire Redfield é a irmã mais nova de Chris Redfield. Durante o surto em Raccoon City, foi em busca de seu irmão e acabou sobrevivendo ao desastre. Determinada e empática, Claire se tornou membro da organização TerraSave, dedicada a ajudar vítimas de bioterrorismo e denunciar abusos envolvendo armas biológicas.",
      imagens: [
        {src: "img/personagens/claire_RE2R.png", legenda: "Resident Evil 2 (Remake)"},
        {src: "img/personagens/claire_RE2.png", legenda: "Resident Evil 2"}
      ]
    },

    {
      nome: "ADA WONG",
      subtitulo: "Espiã misteriosa e agente independente.\nEspecialista em infiltração",
      thumb: "img/personagens/ada_icon.png",
      descricao: "Ada Wong é uma agente secreta altamente habilidosa que atua nos bastidores de diversos incidentes envolvendo armas biológicas. Misteriosa e imprevisível, ela frequentemente trabalha para organizações desconhecidas, mantendo seus verdadeiros objetivos em segredo. Apesar disso, possui uma relação complexa com Leon Kennedy, ajudando-o em momentos cruciais.",
      imagens: [
        {src: "img/personagens/ada_RE4.png", legenda: "Resident Evil 4"},
        {src: "img/personagens/ada_RE4R.png", legenda: "Resident Evil 4 (Remake)"}
      ]
    },

    {
      nome: "ALBERT WESKER",
      subtitulo: "Ex capitão dos S.T.A.R.S. e traidor.\nMente por trás de experimentos biológicos",
      thumb: "img/personagens/wesker_icon.png",
      descricao: "Albert Wesker foi o capitão da equipe S.T.A.R.S., mas secretamente trabalhava para a Umbrella Corporation. Extremamente inteligente e manipulador, desempenhou um papel central no desenvolvimento de armas bio-orgânicas. Após se submeter a experimentos, adquiriu habilidades sobre-humanas, tornando-se um dos principais antagonistas da série.",
      imagens: [
        {src: "img/personagens/wesker_RE1R.png", legenda: "Resident Evil (Remake)"},
        {src: "img/personagens/wesker_RE5.png", legenda: "Resident Evil 5"}
      ]
    },

    {
      nome: "ETHAN WINTERS",
      subtitulo: "Civil envolvido em incidentes biológicos.\nPai determinado e sobrevivente",
      thumb: "img/personagens/ethan_icon.png",
      descricao: "Ethan Winters é um civil que acabou envolvido em eventos de bioterrorismo ao procurar sua esposa desaparecida. Sem treinamento militar, demonstrou grande resistência e determinação ao sobreviver aos horrores enfrentados na Louisiana e posteriormente na Europa. Sua principal motivação sempre foi proteger sua família.",
      imagens: [
        {src: "img/personagens/ethan_RE7.png", legenda: "Resident Evil 7"},
        {src: "img/personagens/ethan_RE8.png", legenda: "Resident Evil Village"}
      ]
    },

    {
      nome: "GRACE ASHCROFT",
      subtitulo: "Personagem inédita.\nLigada aos novos eventos da franquia",
      thumb: "img/personagens/grace_icon.png",
      descricao: "Grace Ashcroft é uma personagem introduzida em Resident Evil Requiem. Ainda envolta em mistério, ela aparenta ter ligação direta com os novos acontecimentos da franquia, podendo desempenhar um papel importante nos eventos futuros envolvendo bioterrorismo.",
      imagens: [
        {src: "img/personagens/grace_RE9.png", legenda: "Resident Evil Requiem"}
      ]
    },

    {
      nome: "BARRY BURTON",
      subtitulo: "Ex membro dos S.T.A.R.S.\nEspecialista em armas pesadas",
      thumb: "img/personagens/barry_icon.png",
      descricao: "Barry Burton é um ex-integrante dos S.T.A.R.S. e especialista em armas pesadas. Participou do Incidente da Mansão em 1998, onde ajudou Jill Valentine a sobreviver. Apesar de ter sido manipulado por Wesker, manteve-se leal aos seus companheiros. Posteriormente, continuou atuando contra ameaças biológicas.",
      imagens: [
        {src: "img/personagens/barry_RE1.png", legenda: "Resident Evil (Remake)"},
        {src: "img/personagens/barry_RE1R.png", legenda: "Resident Evil"}
      ]
    },

    {
      nome: "REBECCA CHAMBERS",
      subtitulo: "Ex médica dos S.T.A.R.S.\nGênio da biomedicina",
      thumb: "img/personagens/grace_icon.png",
      descricao: "Rebecca Chambers é uma prodígio da medicina e ex-integrante dos S.T.A.R.S. com apenas 18 anos durante o Incidente da Mansão. Atuando como médica de campo, foi essencial para a sobrevivência de seus companheiros. Posteriormente, seguiu carreira científica, contribuindo para pesquisas contra armas biológicas.",
      imagens: [
        {src: "img/personagens/rebecca_RE1.png", legenda: "Resident Evil (Remake)"},
        {src: "img/personagens/rebecca_RE1R.png", legenda: "Resident Evil"}
      ]
    },

  ];

  let personagemIndex = 0;
  let versaoIndex = 0;

  function abrirModal(index) {
    personagemIndex = index;
    versaoIndex = 0;
    document.getElementById("modal").style.display = "flex";
    atualizarPersonagem();
  }

  function fecharModal() {
    document.getElementById("modal").style.display = "none";
  }

  function mudarPersonagem(dir) {
    personagemIndex += dir;

    if (personagemIndex < 0) personagemIndex = personagens.length - 1;
    if (personagemIndex >= personagens.length) personagemIndex = 0;

    versaoIndex = 0;
    atualizarPersonagem();
  }

  function trocarVersao(dir) {
    const atual = personagens[personagemIndex];

    versaoIndex += dir;

    if (versaoIndex < 0) versaoIndex = atual.imagens.length - 1;
    if (versaoIndex >= atual.imagens.length) versaoIndex = 0;

    atualizarPersonagem();
  }

  function atualizarPersonagem() {
    const p = personagens[personagemIndex];
    const v = p.imagens[versaoIndex];

    document.getElementById("modal-p-img").src = v.src;
    document.getElementById("nome").innerText = p.nome;
    document.getElementById("subtitulo").innerText = p.subtitulo;
    document.getElementById("descricao").innerText = p.descricao;
    document.getElementById("legenda").innerText = v.legenda;

    const prevIndex = (personagemIndex - 1 + personagens.length) % personagens.length;
    const nextIndex = (personagemIndex + 1) % personagens.length;

    document.getElementById("prev-thumb").src = personagens[prevIndex].thumb;
    document.getElementById("next-thumb").src = personagens[nextIndex].thumb;
  }

  window.abrirModal = abrirModal;
  window.fecharModal = fecharModal;
  window.mudarPersonagem = mudarPersonagem;
  window.trocarVersao = trocarVersao;
}


// =====================
// JOGOS
// =====================
if (pagina === "jogos") {

  const jogos = [
    {
      nome: "Resident Evil",
      subtitulo: "Lançado em 2002. É um remake do jogo original de 1996, o primeiro da franquia Resident Evil.",
      thumb: "img/jogos/RE1R_card.jpg",
      descricao: "O jogo que definiu o gênero survival-horror em uma nova versão: remasterizada em HD do Resident Evil. Em 1998, uma equipe das forças especiais é enviada para investigar alguns assassinatos bizarros nos arredores de Raccoon City. Ao chegar lá, eles são atacados por criaturas violentas e são forçados a buscar abrigo em uma mansão próxima. Com recursos limitados, eles precisam sobreviver e descobrir os segredos por trás do incidente.",
      imagem: "img/jogos/RE1R_card.jpg"
    },

    {
      nome: "Resident Evil 2",
      subtitulo: "Lançado em 2019. Remake do clássico de 1998.",
      thumb: "img/jogos/RE2R_card.jpg",
      descricao: "Em meio ao colapso de Raccoon City, o policial novato Leon S. Kennedy e a estudante Claire Redfield lutam para sobreviver a um surto biológico devastador. Explorando a delegacia e instalações subterrâneas, eles enfrentam criaturas aterrorizantes enquanto buscam respostas e uma forma de escapar da cidade condenada.",
      imagem: "img/jogos/RE2R_card.jpg"
    },

    {
      nome: "Resident Evil 3",
      subtitulo: "Lançado em 2020. Remake do clássico de 1999.",
      thumb: "img/jogos/RE3R_card.jpg",
      descricao: "Durante os eventos finais de Raccoon City, Jill Valentine tenta escapar de uma cidade dominada pelo caos. Perseguida pela implacável arma biológica Nemesis, ela precisa sobreviver enquanto enfrenta hordas de infectados e desvenda a verdade por trás do surto que destruiu a cidade.",
      imagem: "img/jogos/RE3R_card.jpg"
    },

    {
      nome: "Resident Evil 4",
      subtitulo: "Lançado em 2023. Remake do clássico de 2005.",
      thumb: "img/jogos/RE4R_card.jpg",
      descricao: "Anos após a queda de Raccoon City, Leon S. Kennedy é enviado à Europa rural para resgatar a filha do presidente dos Estados Unidos. Em uma vila isolada dominada por uma seita misteriosa, ele enfrenta inimigos infectados por um novo tipo de ameaça, em uma missão que redefine o horror e a ação na franquia.",
      imagem: "img/jogos/RE4R_card.jpg"
    },

    {
      nome: "Resident Evil 5",
      subtitulo: "Lançado em 2009. Continuação direta dos eventos anteriores.",
      thumb: "img/jogos/RE5_card.jpg",
      descricao: "Chris Redfield viaja para a África para investigar uma nova ameaça biológica ao lado de Sheva Alomar. Enfrentando inimigos mais agressivos e inteligentes, ele se depara com uma conspiração global envolvendo armas bio-orgânicas e reencontra um antigo inimigo ligado ao seu passado.",
      imagem: "img/jogos/RE5_card.jpg"
    },

    {
      nome: "Resident Evil 6",
      subtitulo: "Lançado em 2012. Um dos jogos mais ambiciosos da franquia.",
      thumb: "img/jogos/RE6_card.jpg",
      descricao: "Com múltiplas campanhas interligadas, Resident Evil 6 acompanha diversos personagens, incluindo Leon, Chris e novos protagonistas, em uma ameaça bioterrorista global. Misturando ação intensa com elementos de horror, o jogo apresenta diferentes perspectivas e histórias que se conectam em um grande conflito mundial.",
      imagem: "img/jogos/RE6_card.jpg"
    },

    {
      nome: "Resident Evil 7: Biohazard",
      subtitulo: "Lançado em 2017. Um novo começo para a franquia em primeira pessoa.",
      thumb: "img/jogos/RE7_card.jpg",
      descricao: "Ethan Winters parte em busca de sua esposa desaparecida e acaba em uma propriedade isolada na Louisiana. Preso em um ambiente hostil e perturbador, ele precisa explorar, resolver enigmas e sobreviver a uma família dominada por uma misteriosa infecção, em uma experiência mais íntima e aterrorizante.",
      imagem: "img/jogos/RE7_card.jpg"
    },

    {
      nome: "Resident Evil 8",
      subtitulo: "Lançado em 2021. Continuação direta de Resident Evil 7.",
      thumb: "img/jogos/RE8_card.jpg",
      descricao: "Após os eventos de Resident Evil 7, Ethan Winters tenta viver uma vida tranquila com sua família, mas uma nova tragédia o leva a uma vila isolada na Europa. Enfrentando criaturas grotescas e figuras enigmáticas, ele precisa sobreviver e descobrir a verdade por trás dos acontecimentos que ameaçam sua filha.",
      imagem: "img/jogos/RE8_card.jpg"
    },

    {
      nome: "Resident Evil 9",
      subtitulo: "Resident Evil Requiem. Novo capítulo da franquia.",
      thumb: "img/jogos/RE9_card.jpg",
      descricao: "Uma nova era do survival horror começa com Resident Evil Requiem. Acompanhando a analista do FBI Grace Ashcroft e o agente Leon S. Kennedy, o jogo apresenta uma narrativa intensa que combina investigação, ação e terror. Com possibilidade de alternar entre primeira e terceira pessoa, a experiência mistura combate, exploração e gerenciamento de recursos em uma jornada profunda e envolvente.",
      imagem: "img/jogos/RE9_card.jpg"
    }
  ];

  let jogoIndex = 0;

  function abrirModal(index) {
    jogoIndex = index;
    document.getElementById("modal").style.display = "flex";
    atualizarJogo();
  }

  function fecharModal() {
    document.getElementById("modal").style.display = "none";
  }

  function mudarJogo(dir) {
    jogoIndex += dir;

    if (jogoIndex < 0) jogoIndex = jogos.length - 1;
    if (jogoIndex >= jogos.length) jogoIndex = 0;

    atualizarJogo();
  }

  function atualizarJogo() {
    const j = jogos[jogoIndex];

    document.getElementById("modal-j-img").src = j.imagem;
    document.getElementById("nome").innerText = j.nome;
    document.getElementById("subtitulo").innerText = j.subtitulo;
    document.getElementById("descricao").innerText = j.descricao;

    const prevIndex = (jogoIndex - 1 + jogos.length) % jogos.length;
    const nextIndex = (jogoIndex + 1) % jogos.length;

    document.getElementById("prev-thumb").src = jogos[prevIndex].thumb;
    document.getElementById("next-thumb").src = jogos[nextIndex].thumb;
  }

  window.abrirModal = abrirModal;
  window.fecharModal = fecharModal;
  window.mudarJogo = mudarJogo;
  
}

// =====================
// TIMELINE
// =====================

function revelarTimeline() {
  const elementos = document.querySelectorAll(".reveal");

  elementos.forEach(el => {
    const top = el.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (top < windowHeight - 100) {
      el.classList.add("active");
    }
  });
}

window.addEventListener("scroll", revelarTimeline);
window.addEventListener("load", revelarTimeline);