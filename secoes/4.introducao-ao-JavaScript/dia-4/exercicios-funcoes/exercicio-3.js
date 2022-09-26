// Crie uma função que receba um array de inteiros e retorne o índice do menor valor.

// Array de teste: [2, 4, 6, 7, 10, 0, -3];.

// Valor esperado no retorno da função: 6.
let teste = [2, 4, 6, 7, 10, 0, -3];
let menorNumero
let indice

function indiceMenorNumero(array){
    for( numero in array){
        if (numero == 0){
            menorNumero = array[numero];
        }else if (array[numero] < menorNumero){
            menorNumero = array[numero]
            indice = numero
        }
    }
    console.log(indice)
}

indiceMenorNumero(teste)