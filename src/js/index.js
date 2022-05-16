/*
OBJETIVO 1: Quando passar o mouse em cima do personagem temos que:
    
    - Colocar a classe selecionado no personagem que passamos o mouse em cima, para     adicionar animação nele

    - retirar classe selecionado do personagem que está selecionado


OBJETIVO 2: Quando passar o mouse em cima do personagem, trocar a imagem e o nome do personagem grande
    
    - Alterar a imagem do personagem 1
    - Alterar o nome do personagem 1
*/

const personagens = document.querySelectorAll(".personagem");

personagens.forEach((personagem) => {
  personagem.addEventListener("mouseenter", () => {

    const idSelecionado = personagem.attributes.id.value

    if (idSelecionado === 'barba-negra') return
    
    const personagemSelecionado = document.querySelector(".selecionado");
    personagemSelecionado.classList.remove("selecionado");

    personagem.classList.add("selecionado");

   
    const imagemJogador1 = document.getElementById('personagem-jogador-1')

    imagemJogador1.src = `./src/imagens/${idSelecionado}.png`

    const nomeJogador1 = document.getElementById('nome-jogador-1')

    nomeJogador1.innerHTML = personagem.getAttribute('data-name')

  });
});
 