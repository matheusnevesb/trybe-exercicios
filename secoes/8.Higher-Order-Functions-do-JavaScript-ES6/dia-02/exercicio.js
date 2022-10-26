const books = [
{
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
        name: 'George R. R. Martin',
        birthYear: 1948,
    },
    releaseYear: 1991,
},
{
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: {
        name: 'J. R. R. Tolkien',
        birthYear: 1892,
    },
    releaseYear: 1954,
},
{
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: {
        name: 'Isaac Asimov',
        birthYear: 1920,
    },
    releaseYear: 1951,
},
{
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: {
        name: 'Frank Herbert',
        birthYear: 1920,
    },
    releaseYear: 1965,
},
{
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: {
        name: 'Stephen King',
        birthYear: 1947,
    },
    releaseYear: 1986,
},
{
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: {
        name: 'H. P. Lovecraft',
        birthYear: 1890,
    },
    releaseYear: 1928,
},
];


// Adicione o código do exercício aqui:

// Encontre o nome da primeira pessoa autora do livro nascida no ano de 1947.
function authorBornIn1947() {
    // escreva aqui o seu código
    let resposta
    books.find((book) => {
        if (book.author.birthYear === 1947){
            resposta = book.author.name
        }
    })
    return resposta;
}

function smallerName() {
    let nameBook;
    // escreva aqui o seu código
    books.forEach( (book) => {
        if (nameBook === undefined) {
            nameBook = book.name;
        }else if (nameBook.length > book.name.length) {
            nameBook = book.name;
        }
    })
  
    // Variável nameBook que receberá o valor do menor nome;
    return nameBook;
  }

const expectedResult1 = {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
        name: 'George R. R. Martin',
        birthYear: 1948,
},
    releaseYear: 1991,
};
function getNamedBook() {
    // escreva seu código aqui
    return books.find( (book) => book.name.length === 26)
}

const expectedResult2 = [
{
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: { name: 'George R. R. Martin', birthYear: 1948 },
    releaseYear: 1991,
},
{
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: { name: 'Stephen King', birthYear: 1947 },
    releaseYear: 1986,
},
{
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: { name: 'Frank Herbert', birthYear: 1920 },
    releaseYear: 1965,
},
{
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: { name: 'J. R. R. Tolkien', birthYear: 1892 },
    releaseYear: 1954,
},
{
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: { name: 'Isaac Asimov', birthYear: 1920 },
    releaseYear: 1951,
},
{
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: { name: 'H. P. Lovecraft', birthYear: 1890 },
    releaseYear: 1928,
},
];

function booksOrderedByReleaseYearDesc() {
    // escreva aqui seu código
    let objeto = books.sort( (a, b) => a.releaseYear > b.releaseYear)
    return objeto;
}

// const expectedResult = false;

function everyoneWasBornOnSecXX() {
  // escreva seu código aqui
  return books.every( (book) => book.author.birthYear >= 1900 && book.author.birthYear <= 1999)
}

// const expectedResult = true;

function someBookWasReleaseOnThe80s() {
  // escreva seu código aqui
  return books.some( (book) => book.releaseYear >= 1800 && book.releaseYear <= 1899)
}

// const expectedResult = false;

function authorUnique() {
  // escreva seu código aqui
  
}

console.log(someBookWasReleaseOnThe80s())