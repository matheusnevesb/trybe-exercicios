const gerarEmail = (nome) => {
    let nomeMinusculo = nome.toLowerCase()
    let array = nomeMinusculo.split(' ');
    let junto = array.join('_');
    return junto + '@trybe.com';
}

const novaFuncao = (nome) => {
    let objeto = {};
    objeto.nome = nome;
    objeto.email = gerarEmail(nome)
    return objeto;
}

const newEmployees = (novaFuncao, nome1, nome2, nome3) => {
    const employees = {
      id1: novaFuncao(nome1), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
      id2: novaFuncao(nome2), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
      id3: novaFuncao(nome3), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
    }
    return employees;
  };
console.log(newEmployees(novaFuncao, 'Pedro Guerra', 'Luiza Drumond', 'Carla Paiva'));
  