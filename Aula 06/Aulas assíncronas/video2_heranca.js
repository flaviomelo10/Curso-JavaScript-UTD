//herança
class Pessoa{
    nome;
    idade;
    static populacao = 0;
    constructor(nome, idade){
        this.nome = nome;
        this.idade = idade;
    }

    dizerOla(){
        console.log(`Olá, meu nome é: ${this.nome}`);
        //template literals ->  colocar um código de JS dentro de uma string sem necessidade de concatenação
        console.log(`Olá, meu nome é: ${this.nome=="Roberto"?"é o cara":"nem conheço"}`)
    }

    //método static é o método da classe
    static identifica(){
        console.log("Classe: Pessoa\nAtributos: nome, idade\nMétodos: dizerOla()")
    }

    static getPopulacao(){
        return this.populacao;
    }
}
//instanciando o objeto
const p1 = new Pessoa("Roberto", 36);
const p2 = new Pessoa("Ana", 28);

//p1.dizerOla();
//console.log(Pessoa.identifica());

console.log(Pessoa.populacao);

class Estudante extends Pessoa{
    constructor(nome, idade, turma){
        super(nome, idade);
        this.turma = turma;
    }
    //sobreescrita do método estudante
    static identifica(){
        console.log("Classe: Estudante\nAtributos: nome, idade, turma\nMétodos: dizerOla()")
    }
}

const estudante = new Estudante("Joaquim", 30, "JavaScript");

console.log(estudante);
Estudante.identifica();
estudante.dizerOla();