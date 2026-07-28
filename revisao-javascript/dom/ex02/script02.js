const list = document.getElementById("lista");
const input = document.getElementById("novoItem");
const button = document.getElementById("adicionar");

button .addEventListener("click", function(){
    // ler o valor do input
    const novoItemTexto = input.value;

    // validar novo item
    if (novoItemTexto !== ""){
        // criar novo elemento li
        const novoItemElemento = document.createElement("li");

        // inserir o texto do novo elemento li 
        novoItemElemento.textContent = novoItemTexto

        // adicionar o novo elemento li na lista (ul)
        list.appendChild(novoItemElemento);

        // após a entrada vamos limpar o input
        input.value = "";
    }
})