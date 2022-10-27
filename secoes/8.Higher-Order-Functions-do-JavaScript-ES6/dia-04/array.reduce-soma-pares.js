// Para fixar ainda mais o conceito de reduce, faça uma função que some todos os números pares do array:

const numbers = [18, 19, 23, 53, 4, 5, 76, 23, 54];

const somaDosPares = (acc, crr) => (crr % 2 === 0) ? acc + crr : acc; 

console.log(numbers.reduce( somaDosPares, 0));
