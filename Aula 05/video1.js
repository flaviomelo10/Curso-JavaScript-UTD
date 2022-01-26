/*
//hoisting -> possibilidade de utilizar uma variável antes de sua criação
console.log(fantasma);
var fantasma;
//let resolve os erros do hoisting. É recomendado usar o let
let fantasma;
*/

/*
//let resolve o erro de escopo da variável. O let mantem a variável dentro do escopo proposto para ela.
for(var i=0;i<10;i++){
    console.log(i);//vai até 9
}
console.log(i); //vai até 10. Mesmo fora do for, existe o acesso ao i.
for(let i=0;i<10;i++){
    console.log(i);//vai até 9
}
console.log(i);//vai até 10
*/

/*
//constante
const palavra = "JavaScript";
palavra = "Java";
*/

//for of -> for simplificado que serve para percorrer arrays
/*
const sala = ["Pedro","Tiago","João","Cláudio"];
for(let pedaco of sala){
    console.log(pedaco);
}

const sala = ["Pedro","Tiago","João","Cláudio"];
let texto="";
for(let pedaco of sala){
    texto=texto+" "+pedaco;
}
console.log(texto);

for(let pedaco of sala){
    if(pedaco==="João"){
        pedaco="Jacira";
    texto+=" "+pedaco;
    }
}
console.log(texto);
*/

/*
//valores padrão
function ola(nome){
    console.log("Olá "+nome);
}
ola("Beatriz");
ola(); //retorna undefined

function ola(nome="Fulano"){
    console.log("Olá "+nome)
}
ola(); //assume o valor padrão
ola("Ana"); //assume o valor do parâmetro

function quedaLivre(gravidade=10){
    ep = gravidade * 50 * 10;
    console.log(ep)
}
quedaLivre(9.8); //assume o valor do parâmetro
*/

/*
//rest parameters
function soma(...numeros){ //recebe um número indeterminado de parâmetros
    let somatorio = 0;
    for(let numero of numeros){
        somatorio+=numero;
    }
    console.log(somatorio);
}
soma(2,4,6,8,10,12,14);

//String.includes() - verifica se a string tem uma determinada palavra. Retorna true ou false.
let text = "Hello world, welcome to the universe.";
console.log(text.includes("welcome"));
//String.startsWith() - verifica se a string começa com uma palavra. Retorna true ou false.
//array from() - cria uma array a partir de uma string
//array keys() - retorna os índices de um array
*/

//arrow functions
function exponencial(num){
    return Math.pow(num,2);
}

console.log(exponencial(14));

const quadrado = (num)=>{//a constante recebe o valor de uma função anônima, que é uma arrow function
    return Math.pow(num,2)
}
//const quadrado = num => Math.pow(num,2) - quando tiver apenas um argumento, tira as chaves, e quando tiver apenas um retorno, retira as chaves 

console.log(quadrado(30))