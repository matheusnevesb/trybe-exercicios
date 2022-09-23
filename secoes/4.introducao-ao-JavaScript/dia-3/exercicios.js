// O fatorial é representado pelo sinal !
// 4! = 4 x 3 x 2 x 1 = 24

let n = 4;
frase = n +'! = ' + n ;
let total = n;

for (let i = n - 1; i >= 1; i -= 1 ) {
    frase +=  ' x ' + i
    total *= i; 
}

console.log(frase + ' = ' + total)