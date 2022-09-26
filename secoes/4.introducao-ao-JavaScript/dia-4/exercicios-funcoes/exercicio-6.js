// Crie uma função que receba um número natural (número inteiro não negativo) N e retorne o somatório de todos os números de 1 até N.

// Valor de teste: N = 5.

// Valor esperado no retorno da função: 1+2+3+4+5 = 15.

let n = 5;
let soma = 0;
let lista = [];

function somaAteN(numero) {
    for(let i = 1; i <= numero; i += 1){
        soma += i;
        if (i == numero){
            lista.push(i+'='+soma)
        }else {
            lista.push(i+'+')
        }
    }
    resposta = lista.join('')
    console.log(resposta)
}

somaAteN(n)