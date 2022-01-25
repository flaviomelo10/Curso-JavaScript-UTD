/*
    Programa javascript que demonstra estruturas de repetição
*/
const painel = document.getElementById("painel");
let texto='';
let flag = true;
    let contador = 0
    while(flag){
        if(contador<10){
            console.log("trabalhando...")
            //operador de incremento
            //pré-incremento: primeiro faz o incremento e depois executa
            //pós-incremento: primeiro executa e depois faz o incremento
            contador++;

            texto = "trabalhando"

            let resultado = document.createTextNode(texto+" ");

            painel.appendChild(resultado);
        }else{
            flag = false;
        }
    }

    for(let x=0; x<20; x+=2){
        //imprimir apenas os números pares
        let resultado = document.createTextNode(x+" ");

        painel.appendChild(resultado);
    }