/*
//criação de objetos a partir do método construtor
function Person(){
    this.nome = '';
    this.idade='';
}

let p1 = new Person();
p1.nome = "Joana";
p1.idade = 29;

console.log(p1.nome);
console.log(p1.idade);
*/

//criação de objetos a partor do método literal (envolve a criação de varáveis).
let aluno={
    nome: 'Anita',
    idade: 22,
    curso: 'Engenharia Civil'
}
aluno.turno = 'manhã';
//console.log(aluno.nome);
//console.log(aluno.idade);
console.log(aluno.curso);

//desestruturação do objeto (criar variáveis e transformá-las em atributos do objeto)
let{nome, idade} = aluno;
console.log(nome);
console.log(idade);
console.log(aluno.turno);
