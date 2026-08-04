const alterarBotaoElemento= document.getElementById("alternarBotao");

const mensagemElemento = document.getElementById("mensagem");

// Vamos adicionar un listener, um ouvido de evento clique no nbot
alterarBotaoElemento.addEventListener("click", function() {
    if(mensagemElemento.classList.contains("oculto")) {
        mensagemElemento.classList.remove("oculto")
    } else {
        mensagemElemento.classList.add("oculto");
    }
});