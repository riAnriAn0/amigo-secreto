// variaveis 
let input = document.getElementById("amigo");
let listaAmigos = document.getElementById("listaAmigos");
let resultado = document.getElementById("resultado");
let button = document.querySelector(".button-add");

let amigos = [];
let numerosSorteados = [];

function limparInput(){
    input.value = "";
}

function limparLista(){
    listaAmigos.innerHTML = "";
}

function sortearNumero(lista) {
    
    if(numerosSorteados.length === lista.length){
        return -1;
    }

    let num = parseInt(Math.random() * lista.length);
    while (numerosSorteados.includes(num)) {
        num = parseInt(Math.random() * lista.length);
    }
    numerosSorteados.push(num);
    return num;
}

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
    numerosSorteados = [];

    if (nome == "") {
        alert("Por favor, insira um nome válido.");
    }else if(amigos.includes(nome)){
        alert("Este nome já está na lista.");
    }else{
        amigos.push(nome);
        input.value = "";
        atualizarLista();
    }

    input.focus();
}

function sortearAmigo(){
    if (amigos.length < 2) {
        alert("Adicione pelo menos dois amigos para sortear.");
        return;
    }

    limparInput();

    let index = sortearNumero(amigos);

    if(index === -1) {
        alert("Todos os amigos já foram sorteados.");
    }else{
        let amigoSorteado = amigos[index];
        limparLista();
        resultado.textContent = `O amigo secreto é: ${amigoSorteado}`;
    }
}

