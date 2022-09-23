// Um número primo é um número inteiro maior do que 1 que possui somente dois divisores, ou seja, é divisível por 1 e por ele mesmo. Sabendo disso, escreva um algoritmo que retorne o maior número primo entre 2 e 50.

let maiorNumero = 0;
let lista = [];

let valorMaximo = 100;

for(let i = 2; i <= valorMaximo; i+=1){
    // console.log(i)
    lista = [];
    for(let k = 2; k <= valorMaximo; k+=1){
        if (i%k==0 ){
            lista.push(k);
        }
        // console.log(lista)
    }

    // console.log(lista)
    if(lista.length == 1){
        maiorNumero = i;
    }
}

console.log(maiorNumero);