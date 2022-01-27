//promises ecmascript6
/*
//1. antigamente
function boasVindas(nome){
    alert('Olá '+nome);
}

function processaFuncao(callback){
    var nome = prompt('Por favor, insira seu nome.');
    callback(nome);
}

processaFuncao(boasVindas);
//problema: erro callback hell: função chamando outra função, outra função, etc. Para superar esse tipo de problema, foi criada a promise.
*/

//2. com promises
//
//promise é uma classe do JavaDcript
function minhaPromise(valor){
    //dentro do parâmetro recebe uma função
    return new Promise((reject, resolve)=>{
        if(valor == null)
            reject({
                status:"404 not found",
                msg: "Algo de errado não está certo!"
            })
        else
            resolve({
                status: "200 ok",
                msg: valor
            });
    });
}

minhaPromise("Design de Interfaces Web com JavaScript").then(response =>{
    console.log(response)
}).catch(erro =>{
    console.log(erro)
})// se não passar nada no valor, vai dar reject!!