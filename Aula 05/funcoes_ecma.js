//let e const
//surgiram para suprir algumas demandas

/*utilização de uma variável antes dela ser inicializada. O retorno será undefined.
console.log(variavel);
var variavel= ' ';
*/

/* ao se utlizar o let, o retorno será um erro, que reporta a variável não pode ser acessada antes de ser inicializada
console.log(variavel);
let variavel= ' ';
*/

/* antes do const as variávesi sempre podiam ser modificadas. Uma constante não pode ser modifiada diretamente. O código abaixo retorna um erro
const variavel = 'javascript';
variavel = 'ruby';
console.log(variavel);
*/

/*
//valores padrão
function mostraIdade(idade){
    console.log(idade);
}
mostraIdade(); //retorna undefined


//adicionando-se o valor padrão à idade
function mostraIdade(idade=33){
    console.log(idade);
}
mostraIdade(); //retorna o valor padrão sem passa nenhum parâmetro


//passando o valor na chamada na função
function mostraIdade(idade=33){
    console.log(idade);
}
mostraIdade(17); //retorna o valor passado na função
*/

//template literals
let nome = "João", idade = 27, endereco = "Praia do Futuro";
console.log("Nome: "+nome+ " Idade: "+idade+ " Endereço: "+endereco); //antes do ecmascript
console.log(`Nome: ${nome} Idade: ${idade} Endereço: ${endereco}`); //após o ecmascript

//arrow functions
function soma(x,y){
    return x + y;
} //função normal

let somaArrow = (x,y) => x + y; //arrow function

console.log(soma(10,20));
console.log(somaArrow(15,25))