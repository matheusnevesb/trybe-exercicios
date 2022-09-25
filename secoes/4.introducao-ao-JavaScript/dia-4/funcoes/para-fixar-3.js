// Faça um programa que retorne o maior de três números. Defina, no começo do programa, três constantes com os valores que serão comparados.

let a = 5;
let b = 4;
let c = 3;

function maiorDeTresNumeros(a,b,c){
    if ( a > b && a > c){
        return a;
    }else if ( b > a && b > c){
        return b;
    }else{
        return c;
    }
}

console.log(maiorDeTresNumeros(a,b,c));