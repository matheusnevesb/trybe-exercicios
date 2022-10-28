const sum = require('./exercise02')

describe('Exercise 02', () => {
    it('Crie uma função sum que dado um número ilimitado de parâmetros retorna a soma desses parâmetros. Ao chamar a função dessa forma : sum(4,5,6) o número 15 deve ser retornado.', () => {
        expect(sum(4,5,6)).toEqual(15)
    })
    it('Crie uma função sum que dado um número ilimitado de parâmetros retorna a soma desses parâmetros. Ao chamar a função dessa forma : sum(4,5,6,7,8) o número 15 deve ser retornado.', () => {
        expect(sum(4,5,6,7,8)).toEqual(30)
    })
})