// desestruturação de objeto
const objeto = {
    nome: "Gabriela",
    idade: "21",
    email: "gabriela@email.com",
    telefone: "98888-7777"
}

const {nome, idade, email, telefone} = objeto;

console.log(nome);
console.log(idade);
console.log(email);

//spread operator funciona. Cria um objeto com os atributos restantes.
const objeto2 = {
    nome2: "Ana",
    idade2: "35",
    email2: "ana@email.com",
    telefone2: "96666-5555"
}

const {nome2, idade2,...atributos} = objeto2;

console.log(nome2);
console.log(idade2);
console.log(atributos);

//for in - percorrendo um objeto e pegando os valores dos seus atributos
for(let atributo in objeto2){
    console.log(atributo+ " - "+objeto2[atributo]);
}

//cria um vetor com todos os atributos do objeto
console.log(Object.keys(objeto2));