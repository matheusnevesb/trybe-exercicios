let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// Percorra o array imprimindo todos os valores nele contidos com a função console.log();
console.log('todos os numero:')
for(let i = 0; i < numbers.length; i +=1) {
    console.log(numbers[i])
}

// Some todos os valores contidos no array e imprima o resultado;
let soma = 0
for(let i = 0; i < numbers.length; i +=1) {
    soma += numbers[i]
}
console.log('soma dos numeros: ' + soma)

// Calcule e imprima a média aritmética dos valores contidos no array;
let media = (soma)/(numbers.length)
console.log('media aritmetica dos numeros: ' + media)

// Com base no código que acabou de gerar, faça com que, caso o valor final seja maior que 20, imprima a mensagem: “valor maior que 20”. Caso não seja, imprima a mensagem: “valor menor ou igual a 20”;
if (media > 20 ) {
    console.log('valor maior que 20')
}else {
    console.log('valor menor ou igual a 20')
}

// Utilizando for, descubra qual o maior valor contido no array e imprima-o;
let maior = 0;
for(let i = 0; i < numbers.length; i+=1 ){
    if (numbers[i] > maior){
        maior = numbers[i]
    }
}
console.log(' O maior numero : ' + maior)

// Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: “nenhum valor ímpar encontrado”;
numerosImpares = [];
quantosImpares = 0;
for(let i = 0; i < numbers.length; i+=1 ){
    if(numbers[i]%2!==0){
        quantosImpares += 1;
        numerosImpares.push(numbers[i])
    }
}
console.log('quantos numeros impar: ' +quantosImpares)
console.log('numeros impar: ' + numerosImpares)

// Utilizando for, descubra qual o menor valor contido no array e imprima-o;
let menorNumero = 1000;
for(let i = 0; i < numbers.length; i +=1){
    if(numbers[i] < menorNumero){
        menorNumero = numbers[i];
    }
} 
console.log('Menor numero: ' + menorNumero);

// Utilizando for, crie um array que vá de 1 até 25 e imprima o resultado;
let contagem = [];
for(let n = 1; n <=25; n+=1){
    contagem.push(n)
}
console.log('de 1 ate 25: ' + contagem)

// Utilizando o array que acabou de criar, imprima o resultado da divisão de cada um dos elementos por 2.
for(let i = 0; i < contagem.length; i += 1){
    console.log('Divisao de ' + contagem[i] + ' por 2: ' + (contagem[i]/2))
}