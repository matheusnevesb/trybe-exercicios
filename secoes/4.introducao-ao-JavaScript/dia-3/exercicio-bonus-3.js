// Agora inverta o lado do triângulo. Por exemplo:

let n = 5;
let estrela = '*';
let vazio = ' ';
let numeroVazios = 0;

for(let i = 1; i <=n; i += 1){
    numeroVazios = n - i;
    console.log(vazio.repeat(numeroVazios)+estrela.repeat(i));
}