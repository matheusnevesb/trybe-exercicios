// Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.

// Array de teste: [2, 3, 2, 5, 8, 2, 3];.

// Valor esperado no retorno da função: 2.

let teste = [2, 3, 2, 5, 8, 2, 3];

function maisRepete(lista){
    let indiceDoMaisRepetido = 0;
    let maiorRepeticao = 0;

    for(indice in lista){
        let repeticoesNoLoopInicial = 0;
        
        for(valor of lista){
            if (lista[indice] === valor){
                repeticoesNoLoopInicial += 1;
            }
            if (repeticoesNoLoopInicial > maiorRepeticao){
                indiceDoMaisRepetido = indice;
                maiorRepeticao = repeticoesNoLoopInicial
            }
        }
    }
    console.log(lista[indiceDoMaisRepetido])
}

maisRepete(teste)