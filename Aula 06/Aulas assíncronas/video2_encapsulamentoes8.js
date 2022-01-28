//encapsulamento
class Livro{

    //tornar os atributos privados -> #titulo #autor
    #titulo
    #autor
    constructor(titulo, autor){
        this.#titulo = titulo;
        this.#autor = autor;
    }
    get titulo(){
        return this.#titulo;
    }

    set titulo(titulo){
        this.#titulo = titulo;
    }
}

const livro = new Livro("Ensaio sobre a cegueira", "José Saramago");

livro.titulo = "Blindness" //cria um atributo no objeto -> vulnerabilidade
livro.#autor = "Saramago" //dá erro, pois precisa dos métodos acessores para funcionar
//apesar do objeto ser uma constante, o valor foi alterado (título foi alterado).
console.log(livro); //quando o atibuto é encapsulado (# -> private), o objetonão retorna nada, apenas a classe sem parâmentros
//o underline transforma o atributo em private, por isso retorna undefined
console.log(livro.titulo); //get titulo. Retorna, pois é necessário saber qual é o atributo
//console.log(livro.#titulo); //dá erro devido ao encapsulamento