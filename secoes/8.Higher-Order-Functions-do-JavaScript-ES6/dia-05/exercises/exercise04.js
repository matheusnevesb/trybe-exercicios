const people = [
    {
        name: 'Nicole',
        bornIn: 1992,
        nationality: 'Australian',
    },
    {
        name: 'Harry',
        bornIn: 2008,
        nationality: 'Australian',
    },
    {
        name: 'Toby',
        bornIn: 1901,
        nationality: 'Australian',
    },
    {
        name: 'Frida',
        bornIn: 1960,
        nationality: 'Dannish',
    },
    {
        name: 'Fernando',
        bornIn: 2001,
        nationality: 'Brazilian',
    },
];
// bornIn: nascido em

  // escreva filterPeople abaixo

const filterPeople = (lista) => {
    return lista.reduce( (acc, crr) => {
        const {name, bornIn, nationality} = crr;
        if (bornIn >= 1900 && bornIn < 2000 && nationality === 'Australian'){
            if (acc.length === 0) {
                acc = [`${name}`]
                return acc
            }else {
                acc[acc.length] = `${name}`
                return acc 
            }
        }
        return acc
        // console.log(bornIn);
        // console.log(nationality);

    }, [])
}

console.log(filterPeople(people));

module.exports = filterPeople;