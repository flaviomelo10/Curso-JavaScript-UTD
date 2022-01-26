//async await
//são palavras-chave que servem para transformar as nossas funções em funções assíncronas.
//1. criar uma função que retorna uma promise
function minhaFuncao(obj){
    return new Promise((resolve, reject)=>{
        if(obj == null)
            reject({
                status: "404 not found"
            })
        else
            resolve({
                status:"200 ok",
                objeto: obj
            })
    })
}
//2. resolver essa função através de uma outra função (no caso, uma função assíncrona)
const animal = {nome: "rex", idade: 3}

async function minhaPromise(){
    try{
        const response = await minhaFuncao(); //await diz para o programa esperar a promise ser resolvida
        console.log(response);
        //return response;
    }catch(err){
        console.log(err.status)
        //return err.status;
    }
}

console.log(minhaPromise());
//as funções síncronas têm prioridade maior que as assíncronas.Portanto, o programa vai resolver primeiro o console.log(), que é uma função síncrona, e depois resolve a promise