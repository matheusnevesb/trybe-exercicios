// Crie uma função que receba um array de inteiros e retorne o índice do maior valor.


// Valor esperado no retorno da função: 4.

let teste = [2, 3, 6, 7, 10, 1];

function maiorValor(array){
    let maiorNumero = 0;
    let indice = 0
    let i = 0
    for(numero of teste) {
        if (numero > maiorNumero){
            maiorNumero = numero;
            indice = i;
        }
        i += 1;
    }
    console.log(indice)
}

maiorValor(teste)
