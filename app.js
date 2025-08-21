// variaveis 

let input = document.getElementById("amigo");
let listaAmigos = document.getElementById("listaAmigos");
let resultado = document.getElementById("resultado");
let button = document.querySelector(".button-add");
let amigos = [];

// atualizar a lista de amigos que sera exibidas
function atualizarLista() {
    listaAmigos.innerHTML = "";
    amigos.forEach((amigo, index) => {
        let li = document.createElement("li");
        li.textContent = amigo;
        li.setAttribute("data-index", index);
        listaAmigos.appendChild(li);
    });
}

// adiciona amigo a lista
function adicionarAmigo() {
    let nome = input.value.trim();
    if (nome == "") {
        alert("Por favor, insira um nome válido.");
    }else if(amigos.includes(nome)){
        alert("Este nome já está na lista.");
    }else{
        amigos.push(nome);
        input.value = "";
        atualizarLista();
    }
}


