// Sorteador de loteria
// Desenvolva uma HOF que retorna o resultado de um sorteio. Esta HOF irá gerar um número aleatório entre 1 e 5 recebendo como parâmetros o número apostado e uma função que checa se o número apostado é igual ao número sorteado. O retorno da sua HOF deve ser uma string (Ex: “Tente novamente” ou “Parabéns você ganhou”).

// retornar resultado de um sorteio 
// gerar numero de 1 a 5

const checarSorteio = (numero) => {
    let numeroAleatorio = Math.floor(Math.random() * 5) + 1;
    if (numeroAleatorio === numero) {
        return 'Parabéns você ganhou';
    }
    return 'Tente novamente';
}

const darResultadoSorteio = (numero, action) => {
    return action(numero)
}

console.log(darResultadoSorteio(5, checarSorteio))