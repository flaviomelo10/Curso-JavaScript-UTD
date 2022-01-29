//desestruturação de ararys
let numeros = [1,2,3,4];

let [a,b,c,d] = numeros;

console.log(a);
console.log(b);
console.log(c);
console.log(d);

let [e,f] = numeros;
console.log(e);
console.log(f);

//utilizando o rest operator
let [g,...h] = numeros;
console.log(g);
console.log(h);

//reduce - cria uma lista e reduz ele a um só resultado
let numero = [1,2,3,4];
const soma = numero.reduce(function(resultado, item){
    return resultado + item;
})

console.log(soma);

//filter - escolher elementos em uma determinada condição
let novosNumeros = [1,2,3,4,5,6,7,8]
const filtro = novosNumeros.filter(item=>item>6);

console.log(filtro);

const alunos = [ //array de objetos
    {nome: 'João', nota:8},
    {nome: 'Ana', nota:10},
    {nome: 'Paulo', nota:5},
    {nome: 'Carlos', nota:6}
];

const aprovados = alunos.filter(aluno=>aluno.nota>=7);
console.log(aprovados); //retorna um array de objetos