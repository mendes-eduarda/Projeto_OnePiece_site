const botoes = document.querySelectorAll(".botao");
   
const Personagens = document.querySelectorAll(".Personagem");

botoes.forEach((botao, indice ) => {
    botao.addEventListener("click", () => {

        desselecionarBotao();
  
        botao.classList.add("selecionado");
       
        desselecionarPersonagem();
        
        Personagens[indice].classList.add("selecionado");


    })
})
function desselecionarPersonagem() {
    const PersonagemSelecionado = document.querySelector(".Personagem.selecionado");
    PersonagemSelecionado.classList.remove("selecionado");
}

function desselecionarBotao() {
    const botaoSelecionado = document.querySelector(".botao.selecionado");
    botaoSelecionado.classList.remove("selecionado");
}