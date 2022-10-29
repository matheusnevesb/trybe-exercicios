const swap = require('./exercise05');

describe('Exercise 05', () => {
    it('Funcao swap recebe [5, 2, 3] e retorna [3, 2, 5]', () => {
        expect(swap([5,2,3])).toEqual([3, 2, 5])
    })
})