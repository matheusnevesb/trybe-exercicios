// Faça um programa que retorne o maior de dois números. Defina, no começo do programa, duas constantes com os valores que serão comparados.

let a = 10;
let b = 2;

function maiorNumero(a,b){
    if ( a > b){
        return a;
    }else {
        return b;
    }
}

console.log(maiorNumero(a,b));