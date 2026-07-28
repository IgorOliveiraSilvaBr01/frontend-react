const textoElemento = document.getElementById("texto");

const botao = document.getElementById("botao");

botao.addEventListener("click", function(){
    textoElemento.textContent = "Texto alterado com o click!"
})