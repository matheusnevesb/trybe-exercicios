const products = ['Arroz', 'Feijão', 'Alface', 'Tomate'];
const prices = [2.99, 3.99, 1.5, 2];

const produtoComValores = products.map( (element, index) => {
    const objeto = {};
    objeto[`${element}`] = prices[index]
    return objeto;
})

console.log(produtoComValores)