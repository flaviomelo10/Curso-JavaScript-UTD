//promises
// promises são utilizadas quando um determinado script vai demorar um pouco mais para ser executado, mas não podemos esperar que ele seja executado para continuar a execução do programa. O programa deve continuar a executado enquanto esse script está sendo executado. Quando o script terminar a execução, retornamos o valor dele e tratamos o que for retornado.
//servem para programação assíncrona. Muitas vezes o conteúdo do site é inteiramente carregado antes de executar uma determinada requisição no código. Para evitar que o carregamento pare devido a essa requisição, aumentando o tempo de espera para o carregamento do restante do conteúdo, 
//as promises retiram essa tarefa do fluxo do código, aguardam seu processamento, possibilitam o carregamento do código e trabalham com os valores que foram passados.
function efetuarPagamento(total){
    if(total <= saldo)
        return Promise.resolve("Compra autorizada");
    else
        return Promise.reject("Transação interrompida. Saldo insuficiente.");
}

let saldo = 100;
efetuarPagamento(200)
    .then(result => console.log("Promisse resolved: "+result))
    .catch(error => console.log("Promisse rejected: "+error));

console.log("Processando...");