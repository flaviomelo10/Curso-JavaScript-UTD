//arrays são conjuntos de dados
const vetor = ['Ana','Maria','Ricardo','Lara','João'];

console.log(vetor);

//arrays dinâmicos: deriva os conceitos de Pilha e Fila
//Pilha exemplo: pilha de pratos para lavar FiLo (primeiro a entrar é o último a sair)
//push coloca o elemento no final do array
vetor.push("Cláudio");
console.log(vetor);
vetor.push("Jéssica");
console.log(vetor);

//pop retira o último elemento no final do array
vetor.pop();
vetor.pop();
vetor.pop();
vetor.pop();
console.log(vetor);

//Fila exemplo: fila de banco. FiLo primeiro a entrar, primeiro a sair
//unshift adiciona o elemento no começo do array
vetor.unshift("Alberto");
console.log(vetor);

//shift remove o primeiro elemento do array
vetor.shift();
vetor.shift();
console.log(vetor);

//lenght retorna o tamanho do array
console.log(vetor.length);

//join, nesse caso transformou o vetor em uma string e separou os elementos por traço (-)
//transforma uma string em um array fazendo a concatenação através do caractere escolhido
const lista = vetor.join(" - ");
console.log(lista);

//split separa a string em um vetor
const listaSeparada = lista.split(",");
console.log(listaSeparada);

//reverse inverte a posição dos elementos do array
console.log(vetor.reverse());

//desestruturação de vetor
const vetor2 = ['Ana','Maria','Ricardo','Lara','João'];
const [aluno1, aluno2, resto] = vetor2;
//pega os 3 primeiros elementos e coloca cada um em uma variável
console.log(aluno1);
console.log(aluno2);
console.log(resto);

// desestruturação de vetor com spread operator
const vetor3 = ['Ana','Maria','Ricardo','Lara','João'];
const [aluno_1, aluno_2, ...resto_1] = vetor3;
console.log(aluno_1);
console.log(aluno_2);
console.log(resto_1); //todos os outros componentes do vetor em uma única variável
