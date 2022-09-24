// Faça um programa que diz se um número definido numa variável é primo ou não.
// 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89 e 97.

let numero = 62;
let condicao = true;

for(let i = 2; i < numero; i += 1){
    if (numero % i == 0 && i !== numero){
        condicao = false;
    }
}

if(condicao){
    console.log(`${numero} eh primo!!`)
}else {
    console.log(`${numero} nao eh primo!!`)
}