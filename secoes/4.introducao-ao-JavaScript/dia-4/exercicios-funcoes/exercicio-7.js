// Crie uma função que receba uma string word e outra string ending. Verifique se a string ending é o final da string word. Considere que a string ending sempre será menor que a string word.

// Valor de teste: 'trybe' e 'be'

// Valor esperado no retorno da função: true

// verificaFimPalavra('trybe', 'be');

// Retorno esperado: true
// verificaFimPalavra('joaofernando', 'fernan');

// Retorno esperado: false

let palavra = 'trybe'
let final = 'be'

function finalEmString(stringWord,stringEnding){
    let condicao = true;
    arrayWord = stringWord.split('')
    arrayWord.reverse()
    stringWord = arrayWord.join('')
    arrayWord = stringWord.split('',stringEnding.length)
    arrayWord.reverse()
    stringWord = arrayWord.join('')

    if (stringWord == stringEnding){
        console.log('true')
    }else {
        console.log('false')
    }


    console.log(arrayWord)
    console.log(stringWord)
    
}

finalEmString(palavra,final)

