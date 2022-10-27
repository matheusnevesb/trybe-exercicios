// const { describe } = require('yargs')
// const { it } = require('node:test')
const containsA = require('./exercise3')

const names = [
    'Aanemarie', 'Adervandes', 'Akifusa',
    'Abegildo', 'Adicellia', 'Aladonata',
    'Abeladerco', 'Adieidy', 'Alarucha',
];

describe('Exercicio 03', () => {
    it('Dado o array de nomes, utilize o reduce para retornar a quantidade de vezes em que aparece a letra a, maiúscula ou minúscula.', () => {
        expect(containsA(names)).toEqual(20)
    })
})