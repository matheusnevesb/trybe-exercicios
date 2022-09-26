// Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.

// Array de teste: ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];.

// Valor esperado no retorno da função: Fernanda.

let teste = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];

let indiceMaiorCaracteres

function maisCaracteres(array) {
    for(nome in array){
        if (nome == 0){
            indiceMaiorCaracteres = nome;
        }else if (array[indiceMaiorCaracteres].length < array[nome].length){
            indiceMaiorCaracteres = nome;
        }
    }
    console.log(array[indiceMaiorCaracteres])
}

maisCaracteres(teste);
