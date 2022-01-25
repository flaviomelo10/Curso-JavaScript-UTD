//alert("Olá, Mundo!");
/*
    Programa javascript que demonstra estruturas de decisão
*/

//criando variáveis var, let, const
var letra="javascript";
console.log(letra);

let numero1=10, numero2=25;
// soma, subtração, multiplicação, divisão

console.log(numero1+numero2);
console.log(numero1-numero2);
console.log(numero1*numero2);
console.log(numero1/numero2);

//operadores relacionais

console.log(numero1>numero2);
console.log(numero1<=numero2);
console.log(numero1==numero2);
console.log(numero1!=numero2);

letra="10";
console.log(numero1==letra);
console.log(numero1===letra); //Os dois são iguais, mas os dois são iguais no tipo?! É falso, apesar de ter o mesmo valor, eles não têm o mesmo tipo.

//estruturas de decisão

letra = "10";
if(numero1===letra){
    console.log("Os dois são do mesmo tipo");
}
else if(numero1==letra)
    console.log("Os dois são iguais");
else
    console.log("Os dois não são do mesmo tipo, nem iguais");

let opcao = 3;
switch(opcao){
    case 1: console.log("Ensino médio");
        break;
    case 2: console.log("Graduação");
        break;
    case 3: console.log("Mestrado");
        break;
    case 4: console.log("Doutorado");
        break;
    default: console.log("Escolaridade não definida");
}
