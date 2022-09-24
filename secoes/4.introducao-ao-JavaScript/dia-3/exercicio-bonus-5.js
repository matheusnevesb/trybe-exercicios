// Faça uma pirâmide com n asteriscos de base que seja vazia no meio. Assuma que o valor de n será sempre ímpar:
// Por último, façamos com que a variável seja incrementada com o valor correspondente a cada loop;
// n = 7

//    *
//   * *
//  *   *
// *******

let n = 7;

let quantidadeEspacosPonta = (n-1)/2;
let quantidadeEspacosMeio = 0;
let espaco = ' ';
let asterisco = '*'
let asteriscoDireita = '';

for(let i = 0; i < n - 1; i +=2){
    if (i == 2) {
        asteriscoDireita = '*'
        quantidadeEspacosMeio = 1;
    }else if (i > 2){
        quantidadeEspacosMeio +=2
    }
    console.log(espaco.repeat(quantidadeEspacosPonta) + asterisco + espaco.repeat(quantidadeEspacosMeio) + asteriscoDireita + espaco.repeat(quantidadeEspacosPonta))
    quantidadeEspacosPonta -= 1;
}
console.log(asterisco.repeat(n))