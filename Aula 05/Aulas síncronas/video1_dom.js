//dom
//a página hmtl é uma árvore
//o document vem primeiro porque ele está na hierarquia mais alta da árvore
const lista = document.createElement('ul');
const painel = document.querySelector('#painel'); //pega o 1 da lista
//querySelectorALL - para pegar a lista inteira
//const jogo = document.getElementById('jogo').value;
painel.appendChild(lista);

function criarLista(){
    const jogo = document.getElementById('jogo').value;
    //console.log(jogo);
    //queryselector é mais moderno e inclui os métodos .getElementsByName, .getElementsByTagName, .getElementsClassName, .getElementsById
    //const painel = document.querySelector('#painel')
    //const lista = document.createElement('ul');
    //painel.appendChild(lista);
    //painel.innerHTML = '<h1>Olá, DOM</h1>'; //criar tags HTML dentro dos elementos
    const item = document.createElement('li');
    item.textContent = jogo; //pode ser também .innerText(). Serve para criar elementos do tipo texto dentro
    lista.appendChild(item);
    document.getElementById('jogo').value = ''; //para limpar o input.
}