const greet = require('./exercise08')

describe('Exercise 08', () => {
    it("greet('John') retorna 'Hi John'", () => {
        expect(greet('John')).toEqual('Hi John')
    })
    it("greet('John', 'Good morning') retorna 'Good morning John'", () => {
        expect(greet('John', 'Good morning')).toEqual('Good morning John')
    })
    it("greet('Isabela', 'Oi') retorna 'Oi Isabela'", () => {
        expect(greet('Isabela', 'Oi')).toEqual('Oi Isabela')
    })
})

console.log(greet('John')); // 'Hi John'
console.log(greet('John', 'Good morning')); // 'Good morning John'
console.log(greet('Isabela', 'Oi')); // 'Oi Isabela'