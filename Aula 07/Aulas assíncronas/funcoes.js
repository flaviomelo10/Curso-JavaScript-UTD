//forEach - percorre a lista e aplica uma função para cada item da lista
let lista = ['frango', 'carne', 'peixe', 'maçã', 'aveia', 'laranja', 'melancia'];

lista.forEach(minhaFuncao);

function minhaFuncao(item){
    console.log(item);
}

//rest parameters (...) - permite fazer uma função que recebe um número indefinido de parâmetros na função
function modificarLista(...vogais){
    console.log(vogais);
}

modificarLista('a', 'e', 'i', 'o', 'u'); //cria um array com as vogais

//spread operator (...) - 
let comidas = [...lista, 'suco', 'uva'];

console.log(comidas);

//map - percorre o array inteiro e executa um comando passado pra ele
let numeros = [3,4,5,6,7];

let copia = numeros.map(item=>item*2);

console.log(numeros);
console.log(copia);