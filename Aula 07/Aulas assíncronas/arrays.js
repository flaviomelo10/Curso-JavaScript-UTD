//arrays
//criação e inicialização
let lista = [];

lista[0] = "leite";
lista[1] = "carne";
lista[2] = "frango";
lista[3] = "maçã";
lista[4] = "abacate";
lista[5] = "peixe";

//adicionar um item no fim do array (na última posição)
lista.push("uva");

//adicionar um item no começo do array (na 1ª posição)
lista.unshift("aveia");

//retira o último elemento da lista
lista.pop();

//retira o primeiro elemento da lista
lista.shift();

//retirar items da lista / adicionar itens na lista
lista.splice(3,2); //após a 3ª posição, remove 2 elementos
lista.splice(2,3,"melancia") //após a 2ª posição, retira três elementos e acrescenta melancia
lista.splice(4); // retira tudo o que está após a 4ª posição
console.log(lista);
console.log(lista[4]);

let numeros = [1,2,3,4,5,6];

console.log(numeros);