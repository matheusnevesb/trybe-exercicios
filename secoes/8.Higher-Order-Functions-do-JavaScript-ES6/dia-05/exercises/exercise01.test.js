const rectangleArea = require('./exercise01')

const rectangle1 = [1, 2];
const rectangle2 = [3, 5];
const rectangle3 = [6, 9];

describe('Exercicio 01', () => {
    it('Dado o código abaixo, altere a chamada da função rectangleArea de forma que seja impressa a área dos 3 retângulos (rectangle1, rectangle2 e rectangle3). O código deve retornar em sequência 2, 15 e 54', () => {
        expect(rectangleArea(...rectangle1)).toEqual(2)
        expect(rectangleArea(...rectangle2)).toEqual(15)
        expect(rectangleArea(...rectangle3)).toEqual(54)
    })
    it('Retorne 15', () => {
        expect(rectangleArea(...rectangle2)).toEqual(15)
    })
    it('Retorne 54', () => {
        expect(rectangleArea(...rectangle3)).toEqual(54)
    })
})