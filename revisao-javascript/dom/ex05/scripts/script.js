const novaTarefaElement = document.getElementById("novaTarefa");
const adicionarTarefaButton = document.getElementById("adicionarTarefa");
const listarTarefaList = document.getElementById("listarTarefa");

adicionarTarefaButton.addEventListener("click", function() {
    const textoTarefa = novaTarefaElement.ariaValueMax.trim();
    // remove espaços em branco

    if(textoTarefa !== "") { //não permitir uma tarefa totalmente em branco
        adicionarTarefa(textoTarefa);
        // chamar a função adicionarTarefa()

        novaTarefaElement.value = "";

        novaTarefaElement.focus();
        // método focus faz com que o foco do cursor volte a caixa de texto após uma tarefa ser enviada
    }

});

novaTarefaElement.addEventListener("", function(event) {
    if (event.key === "Enter"){
        adicionarTarefaButton.click();
    }
})

function adicionarTarefa(texto) {
    const itemLista = document.createElement("li");

    const spanTarefa = document.createElement("span")

    spanTarefa.textContent = texto;

    itemLista.appendChild(spanTarefa);

    const botaoRemover = document.createElement("button");

    botaoRemover.textContent = "Remover"

    itemLista.appendChild(botaoRemover);


    // evento para marcar/desmarcar a tarefa como concluida
    spanTarefa.addEventListener("click", function (){
        itemLista.classList.toggle("Completa"); 
    });


    // evento para removar as tarefas
    botaoRemover.addEventListener("click", function() {
        listarTarefaList.removeChild(itemLista);
    })
}

// trim - método javascript que remove espaços em branco, quebras de linha e tabulações apenas do início  e do final de uma string.