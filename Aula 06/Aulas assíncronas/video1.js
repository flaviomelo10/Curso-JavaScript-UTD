//POO
//no javascript é possível criar um objeto sem a necessidade de uma classe.
//é uma boa prática usar const para criar um objeto, para o valor não ficar mudando.
//no JS é possível criar um objeto e colocar o valor dele dentro de uma variável ou uma constante
/*
const aluno = {
    nome: "Ricardo",
    idade: 16,
    turma: "3A"
}

console.log(aluno.nome);
console.log(aluno.idade);
console.log(aluno.turma);

//retorna um objeto para obter mais dados a partir do retorno
resolve({
    status: "200",
    mensagem: "deu certo"
})

minhaPromise.then(response=>{ //.then retorna o resolve e coloca dentro de response e joga em uma função
    console.log(response.status)
}).catch(error=>{//reject é capturado pelo catch dentro do parãmetro error e jogado para dentro de uma função
    console.log(error.status);
})
//isso tudo é mesma coisa disso. A constante response está recebendo o objeto resolve
const response = resolve({
    status: "200",
    mensagem: "deu certo"
})
*/
/*
//Promises
function Pro(dado){  
    return new Promise((resolve, reject)=>{
        if(dado == "Jacira")
            resolve("É uma aluna estudiosa.");
        else
            reject("Não conheço.");
    });
}
Pro("Jacira").then(response=>{
    console.log(response);
}).catch(erro=>{
    console.log(erro)
})

//arrow functions
function soma(x,y){
    return x + y;
} //função normal

let somaArrow = (x,y) => x + y; //arrow function

console.log(soma(10,20));
console.log(somaArrow(15,25));
*/

/*
function Pro(dado){  
    return new Promise((resolve, reject)=>{
        if(dado == "Jacira")
            resolve({
                turma: "JavaScript",
                tipo: "EAD",
                nota: 10
            });
        else
            reject({
                mensagem: "não reconhecido",
                flag: false
            });
    });
}

//vai retornar um objeto { turma: 'JavaScript', tipo: 'EAD', nota: 10 }
Pro("Jacira").then(response=>{
    console.log(response);
}).catch(erro=>{
    console.log(erro)
})

//pegando os atributos dos objetos
Pro("Jacira").then(response=>{
    console.log(response.turma);
}).catch(erro=>{
    console.log(erro.mensagem)
})
*/

//criação de classes no JS ecmascript6
class Pessoa{
    nome
    idade
    static populacao = 0;
    constructor(nome, idade){
        this.nome = nome;
        this.idade = idade;
        this.populacao++;
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
