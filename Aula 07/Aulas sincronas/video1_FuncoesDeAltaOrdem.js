// funções de alta ordem
function multiplicador(multiplicador){
    return function(valor){
        return valor * multiplicador;
    }
}

//cria uma constante que recebe um valor de uma função
const dobro = multiplicador(2);
const triplo = multiplicador(3);
const quintuplo = multiplicador(5);

//chama a constante como se chamasse uma função
console.log(dobro(10));
console.log(triplo(10));
console.log(quintuplo(10));