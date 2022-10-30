const toObject = require('./exercise06')

const palio = ['Palio', 'Fiat', 2019];
const shelbyCobra = ['Shelby Cobra', 'Ford', 1963];
const chiron = ['Chiron', 'Bugatti', 2016];

describe('Exercise 06', () => {
    it('Transforma o array em um objeto', () => {
        expect(toObject(palio)).toEqual({ name: 'Palio', brand: 'Fiat', year: 2019 })
    })
})