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

/* Crie um array com strings no formato NOME_DO_LIVRO - GÊNERO_DO_LIVRO - NOME_DA_PESSOA_AUTORA
Use a função map */

/* const expectedResult1 = [
  'As Crônicas de Gelo e Fogo - Fantasia - George R. R. Martin',
  'O Senhor dos Anéis - Fantasia - J. R. R. Tolkien',
  'Fundação - Ficção Científica - Isaac Asimov',
  'Duna - Ficção Científica - Frank Herbert',
  'A Coisa - Terror - Stephen King',
  'O Chamado de Cthulhu - Terror - H. P. Lovecraft',
];

function formatedBookNames(array) {
 return array.map((element) => `${element.name} - ${element.genre} - ${element.author.name}`);
}
console.log(formatedBookNames(books)); */

/* Construa um array de objetos a partir do array de livros.
Cada objeto deve conter uma propriedade author, com o nome da pessoa autora do livro, e uma propriedade age, com a idade dessa pessoa quando o livro foi lançado. O array deve ser ordenado por idade, ou seja, da pessoa mais jovem para a mais velha, considerando suas idades quando o livro foi lançado.
use as funções map, sort */

/* const expectedResult2 = [
  {
    age: 31,
    author: 'Isaac Asimov',
  },
  {
    age: 38,
    author: 'H. P. Lovecraft',
  },
  {
    age: 39,
    author: 'Stephen King',
  },
  {
    age: 43,
    author: 'George R. R. Martin',
  },
  {
    age: 45,
    author: 'Frank Herbert',
  },
  {
    age: 62,
    author: 'J. R. R. Tolkien',
  },
];

function nameAndAge(list) {
return list.map((element) =>
  ({
  age: (element.releaseYear - element.author.birthYear),
  author: element.author.name
    })
    ).sort((a, b) => a.age - b.age)
  }

console.log(nameAndAge(books))

 */
/* Crie um array com todos os objetos que possuem gênero ficção científica ou fantasia.
use a função filter */

   /* const expectedResult3 = [
  { 
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: { name: 'George R. R. Martin', birthYear: 1948 },
    releaseYear: 1991
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: { name: 'J. R. R. Tolkien', birthYear: 1892 },
    releaseYear: 1954
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: { name: 'Isaac Asimov', birthYear: 1920 },
    releaseYear: 1951
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: { name: 'Frank Herbert', birthYear: 1920 },
    releaseYear: 1965
  }
];

function fantasyOrScienceFiction(livros) {
    return livros.filter((tipo) => 
    tipo.genre === 'Ficção Científica' || tipo.genre === 'Fantasia');
  }
console.log(fantasyOrScienceFiction(books));
 */


/* Crie um array formado pelos livros com mais de 60 anos desde sua publicação. Esse array deve ser ordenado do livro mais velho ao mais novo.
use as funções filter e sort */
   /* const expectedResult4 = [
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: { name: 'H. P. Lovecraft', birthYear: 1890 },
    releaseYear: 1928,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: { name: 'Isaac Asimov', birthYear: 1920 },
    releaseYear: 1951,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: { name: 'J. R. R. Tolkien', birthYear: 1892 },
    releaseYear: 1954,
  },
];


function oldBooksOrdered() {
  const anoAtual = 2022 - 60;
 return biblioteca.filter((ano) => (ano.releaseYear < anoAtual)).sort((a, b) => {a.releaseYear - b.releaseYear})
}
  console.log(oldBooksOrdered(books));
 */
  //outra forma de fazer com a data atual
/* function oldBooksOrdered() {
  const currentYear = new Date().getFullYear();
  return books.filter((book) => (
    book.releaseYear < currentYear - 60
  )).sort((bookA, bookB) => bookA.releaseYear - bookB.releaseYear);
} */



/* Crie um array em ordem alfabética apenas com os nomes de todas as pessoas autoras de ficção científica ou fantasia. */
  /* const expectedResult5 = [
  'Frank Herbert',
  'George R. R. Martin',
  'Isaac Asimov',
  'J. R. R. Tolkien',
];

function fantasyOrScienceFictionAuthors() {
  return books.filter((autores) => (
    autores.genre === 'Ficção Científica' || autores.genre === 'Fantasia')).map((autores) =>
    `${autores.author.name}`).sort()
  }
console.log(fantasyOrScienceFictionAuthors(books)) */

/* Crie um array com o nome de todos os livros com mais de 60 anos de publicação.*/
  /* const expectedResult6 = [
  'O Senhor dos Anéis',
  'Fundação',
  'O Chamado de Cthulhu',
];

function oldBooks(livros) {
  const anoAtual = 2022 - 60;
  return livros.filter((titulo) => (titulo.releaseYear < anoAtual)).map((titulo) => titulo.name)
} 
console.log(oldBooks(books));  */


/* Encontre o nome do livro escrito pela pessoa cujo nome registrado começa com três iniciais.
cada inicial termina com um ponto.*/
/* const expectedResult = 'O Senhor dos Anéis';
function authorWith3DotsOnName(nameBook) {
  return nameBook.filter((titulo) => (titulo.author.name[1] === '.' && titulo.author.name[4] === '.' && titulo.author.name[7] === '.')).map((titulo) => titulo.name)
}
console.log(authorWith3DotsOnName(books)); */