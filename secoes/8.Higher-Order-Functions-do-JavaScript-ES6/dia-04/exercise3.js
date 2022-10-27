// Dado o array de nomes, utilize o reduce para retornar a quantidade de vezes em que aparece a letra a, maiúscula ou minúscula.

const names = [
    'Aanemarie', 'Adervandes', 'Akifusa',
    'Abegildo', 'Adicellia', 'Aladonata',
    'Abeladerco', 'Adieidy', 'Alarucha',
];

const expectedResult = 20;

const countA = (string) => {
    const upString = string.toUpperCase();
    const array = upString.split('');
    return array.reduce( (acc, curr) => {
        return (curr === 'A')? acc + 1: acc;
    }, 0)
}

function containsA(array) {
    // escreva seu código aqui
    return array.reduce( (acc, curr) => {
        return acc + countA(curr);
    }, 0)
}

console.log(containsA(names));

module.exports = containsA