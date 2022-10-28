
const user = {
    name: 'Maria',
    age: 21,
    nationality: 'Brazilian',
};

const jobInfos = {
    profession: 'Software engineer',
    squad: 'Rocket Landing Logic',
    squadInitials: 'RLL',
};

const juntos = {...user, ... jobInfos}

console.log(juntos);

const {name: nome, age, nationality, profession, squad, squadInitials} = juntos

const frase = `Hi, my name is ${nome}, I'm ${age} years old and I'm ${nationality}. I work as a ${profession} and my squad is ${squadInitials}-${squad}`

console.log(frase);