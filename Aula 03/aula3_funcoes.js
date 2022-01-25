const painel = document.getElementById("painel");
 let texto=""
 
 let numero1=30, numero2=10;

 //função com parâmetros e com retorno
 
 function soma(variavel1, variavel2){
     return variavel1 + variavel2;
 }

 //função sem parâmetro e com retorno
 function endereco(){
     return "Avenida Pontes Vieira, 1415"
 }

 //função sem parâmetro e sem retorno
 function olaMundo(){
     //executa uma funcionalidade dentro do programa sem precisar receber nada e nem retornar nada
     //criar um objeto, criar uma conexão, instanciar um objeto a partor de uma classe, criar uma interface
     //ex: criar uma função que vai conectar o seu programa com o banco de dados. Ela só vai criar uma conexão
     //ex: função limpar tela
     console.log("Olá, Mundo!")
 }
 
 olaMundo();

 //texto = soma(numero1, numero2);
 texto = endereco();
 
 const resultado = document.createTextNode(texto);
 painel.appendChild(resultado);


