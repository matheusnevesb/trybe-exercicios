let array = ['java', 'javascript', 'python', 'html', 'css'];
// Utilize a estrutura de repetição for para escrever dois algoritmos: um que retorne a maior palavra desse array e outro que retorne a menor. Considere o número de caracteres de cada palavra.

// maior palavra
let maiorPalavra = '';
for(let i = 0; i < array.length; i += 1){
    if (array[i].length > maiorPalavra.length){
        maiorPalavra = array[i]
    }
}

console.log(`A maior palavra: ${maiorPalavra}`);

// menor palavra
let menorPalavra = 'aaaaaaaaaaaaaaaaaaaaaaaaaa';
for(let k = 0; k < array.length; k += 1){
    if (array[k].length < menorPalavra.length){
        menorPalavra = array[k]
    }
}

console.log(`A menor palavra: ${menorPalavra}`);
