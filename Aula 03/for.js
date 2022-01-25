for(var numero=0; numero<10; numero++){
    console.log(numero);
}

console.log('fim do FOR');
//let respeita o escopo, ele só existe enquanto o FOR
//estiver sendo executado

var vogais = ['a', 'e', 'i', 'o', 'u']

for(var numero=0; numero<vogais.length; numero++){
    console.log(vogais[numero]);
}

var sala = ['ana', 'jacira', 'paulo'];

sala[0] = 'joana';

var sala_matrix = [
    ['ana', 'lopes'],
    ['kacira', 'rocha'],
    ['paulo', 'teixeira']
];

console.log(sala_matrix[2][0]+" "+sala_matrix[2][1]);

for(var aluno of sala){
    console.log(aluno);
}