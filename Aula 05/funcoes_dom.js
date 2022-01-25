/*
let tag = document.getElementsByTagName('p');

getelementsbyid só retorna 1 elemento
getelemntsbyclassname retorna uma lista de todos os elementos que pertencem a clase
getelementsbyname e getelementsbytagname também.


console.log(tag); //retorna uma lista com todos os elementos p da página.
console.log(tag[1].innerText); //recupera o texto dentro primeiro elemento p da lista.
console.log(tag[0].innerHTML); //recupera todo o HTML dentro do primeiro elemento p da lista.
*/

// adicionando um elemento na unordered list (ul)
let tag = document.getElementsByTagName('ul');
let novoElemento = document.createElement('li');
let novoElemento2 = document.createElement('li');
novoElemento.innerText = 'Kotlin';
novoElemento2.innerText = 'Ruby';
tag[0].appendChild(novoElemento);
tag[0].appendChild(novoElemento2);

//adicionando um elemento na ordered list (ol)
let tag1 = document.getElementsByTagName('ol');
let novoElemento3 = document.createElement('li');
let novoElemento4 = document.createElement('li');
novoElemento3.innerText = 'Maven'
novoElemento4.innerText = 'React'
tag1[0].appendChild(novoElemento3);
tag1[0].appendChild(novoElemento4);
