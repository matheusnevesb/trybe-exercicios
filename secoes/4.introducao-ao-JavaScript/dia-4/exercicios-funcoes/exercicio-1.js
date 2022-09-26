// Crie uma função que receba uma string e retorne true se for um palíndromo, ou false, se não for.

// Exemplo de palíndromo: arara

// verificaPalindrome('arara')

// Retorno esperado: true
// verificaPalindrome('desenvolvimento')

// Retorno esperado: false

let teste = 'arara';

function verificaPalindrome(palavra){
    arrayDePalavra = palavra.split("");
    arrayDePalavra.reverse();
    stringPalavra = arrayDePalavra.join()
    testeArray = teste.split("");
    testeString = testeArray.join()

    if (stringPalavra == testeString){
        console.log('palindromo')
    }else {
        console.log('nao eh palindromo')
    }
}

verificaPalindrome(teste);