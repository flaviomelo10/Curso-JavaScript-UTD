import {Aluno} from "./aluno.js"
import { Pessoa } from "./pessoa.js";

const aluno1 = new Aluno("Mariana", 28, "JavaScript");
console.log(aluno1); //retorna vazio (Aluno {}), pois os atributos do aluno estão privados

//para retornar os valores, deve acessá-los na classe
console.log(aluno1.nome);

//o atributo nome não pode mudar, pois ele apenas um getter e não tem set. Esssa é uma maneira
//de proteger a classe via encapsulamento
//aluno1.nome = "Larissa"; 
console.log(aluno1.nome);


const pessoa1 = new Pessoa("Fulano", 30);
console.log(pessoa1); //retorna Pessoa {}
//Pessoa deve ser classe abstrata para ser herdada e não pode ser instanciada.