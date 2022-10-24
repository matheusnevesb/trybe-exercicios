const wakeUp = () => 'Acordando!!'
const coffe = () => 'Bora tomar cafe!!'
const sleep = () => 'Partiu Dormir!!'

const doingThings = (funcao) => console.log(funcao()) 

// Ao chamar a função doingThings:
doingThings(wakeUp);

// Ela deve retornar o valor do respectivo parâmetro, neste caso:
// Acordando!!