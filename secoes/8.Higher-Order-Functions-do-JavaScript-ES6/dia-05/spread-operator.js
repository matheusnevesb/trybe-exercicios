// Faça uma lista com as suas frutas favoritas
const specialFruit = ['banana', 'maca', 'pera'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['granola', 'aveia', 'mel'];

const fruitSalad = (fruit, additional) => {
  // Escreva sua função aqui
  return [...fruit, ...additional]
};


console.log(fruitSalad(specialFruit, additionalItens));