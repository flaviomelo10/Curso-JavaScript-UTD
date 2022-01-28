class Autor{
    constructor(nome, idade){
        this.nome = nome;
        this.idade = idade;
    }
}

const autor = new Autor("Alexandre Dumas", 23);

//criação do objeto sem classe, guardando em uma variável const
const autor = {
    nome: "Alexandre Dumas",
    idade: 23
}


class Livro{
    constructor(titulo, autor){
        this.titulo = titulo;
        this.autor = autor;
    }
}

const livro = new Livro("O Conde de Monte Cristo", "Alexandre Dumas");
//objeto dentro de objeto
const livro2 = new Livro("O Conde de Monte Cristo", autor);

console.log(livro);
console.log(livro.titulo);
console.log(livro2);
console.log(livro2.autor.nome)