//encapsulamento
class Livro{
    
    constructor(titulo, autor){
        this._titulo = titulo;
        this._autor = autor;
    }
    get titulo(){
        return this._titulo;
    }

    set titulo(titulo){
        this._titulo = titulo;
    }
}

const livro = new Livro("Ensaio sobre a cegueira", "José Saramago");

livro.titulo = "Blindness" //cria um atributo no objeto -> vulnerabilidade
//apesar do objeto ser uma constante, o valor foi alterado (título foi alterado).
console.log(livro);
//o underline transforma o atributo em private, por isso retorna undefined
console.log(livro.titulo); //get titulo. Retorna, pois é necessário saber qual é o atributo