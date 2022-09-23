// Utilize a estrutura de repetição for para desenvolver um algoritmo que seja capaz de inverter uma palavra. Por exemplo, a palavra “banana” seria invertida para “ananab”. Utilize a string abaixo como exemplo, depois troque por outras para verificar se seu algoritmo está funcionando corretamente.

let palavra = 'trybe';
let palavraInvertida = ``;

for(let i = 1; i <= palavra.length; i += 1) {
    palavraInvertida += `${palavra[palavra.length - i]}`
    console.log(palavra[palavra.length - i])
}

console.log(palavraInvertida)