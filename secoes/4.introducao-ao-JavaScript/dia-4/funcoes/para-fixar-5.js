// Faça um programa que receba três constantes com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false, caso contrário. Se algum ângulo for inválido, o programa deve retornar uma mensagem de erro.

// Para os ângulos serem de um triângulo válido, a soma dos três devem ser 180 graus.

// Um ângulo será considerado inválido se não tiver um valor positivo.

let angulo1 = 60;
let angulo2 = 60;
let angulo3 = 60;

function avaliarAngulosTriangulo(a,b,c){
    if ( a < 0 || b < 0 || c < 0){
        console.log(`possui um angulo invalido`);
        return;
    }else if (a+b+c == 180){
        console.log(`Soma igual a 180 graus!`)
    }else {
        console.log(`soma nao da 180 graus!`)
    }
}

avaliarAngulosTriangulo(angulo1,angulo2,angulo3);