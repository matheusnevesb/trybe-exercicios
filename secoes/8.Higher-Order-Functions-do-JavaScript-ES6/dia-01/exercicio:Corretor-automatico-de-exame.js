const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const checkAnswers = (certas, estudante) => {
    let sum = 0;
    for(let i = 0; i < certas.length; i += 1) {
        if (certas[i] === estudante[i]) {
            sum += 1;
        }else if (estudante[i] !== 'N.A' && certas[i] !== estudante[i] ) {
            sum -= 0.5;
        }
    }
    return sum;
}

const retornaResultado = (RIGHT_ANSWERS, STUDENT_ANSWERS, checkAnswers) => {
    const result = checkAnswers(RIGHT_ANSWERS, STUDENT_ANSWERS);
    return result;
}

console.log(retornaResultado(RIGHT_ANSWERS, STUDENT_ANSWERS, checkAnswers));