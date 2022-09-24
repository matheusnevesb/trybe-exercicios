// Depois, faça uma pirâmide com n asteriscos de base:
// n = 5

//   *
//  ***
// *****

let n = 7;

if (n%2!==0){
    quantidadeEspacos = (n-1)/2;
}

let quantidadeAsteriscos = 0;
let espacos = ' ';
let asteriscos = '*';

for(let i = 1; i <= n; i +=2){ 
    console.log(espacos.repeat(quantidadeEspacos) + asteriscos.repeat(i) + espacos.repeat(quantidadeEspacos))
    quantidadeEspacos -=1;
}
