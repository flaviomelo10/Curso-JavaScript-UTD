var laco = true;
var escolha;

while(laco){
    prompt('escolha uma opção a, b, c, d ou e para sair');

    switch(escolha){
        case 'a': console.log('novo documento'); break;

        case 'b': console.log('abrir documento'); break;

        case 'c': console.log('salvar documento'); break;

        case 'd': console.log('salvar como...'); break;

        case 'e': laco = false; break;

        default: console.log('opção inválida');
    }
}

console.log('fim od laço');