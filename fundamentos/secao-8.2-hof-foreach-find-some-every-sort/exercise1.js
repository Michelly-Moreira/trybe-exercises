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
//ENCONTRE O NOME da primeira pessoa autora do livro nascida no ano de 1947.
/* const findAuthorBornIn1947 = (callback) => {
 for (let i = 0; i < callback.length; i += 1){
  if(callback[i].author.birthYear === 1947){
    return callback[i].author.name;
  }undefined;
}
}
console.log(findAuthorBornIn1947(books)); */


//RETORNE O NOME do livro de menor nome.
/* function smallerName() {
  let nameBook;
  books.forEach((callback) => {
    if (!nameBook || callback.name.length < nameBook.length) {
      nameBook = callback.name;
    }
  });
  return nameBook;
} console.log(smallerName()) */
 
 
//ENCONTRE O PRIMEIRO LIVRO cujo nome possui 26 caracteres.
/* function getNamedBook() {
return books.find((callback) => 
  callback.name.length === 26);
}
console.log(getNamedBook(books)); */


//ORDENE OS LIVROS por data de lançamento em ordem decrescente.
/* function booksOrderedByReleaseYearDesc() {
return books.sort((a,b) => b.releaseYear - a.releaseYear);
}
console.log(booksOrderedByReleaseYearDesc(books)); */


//FAÇA UMA FUNÇÃO QUE RETORNE true, se todas as pessoas autoras nasceram no século XX, ou false, caso contrário.
/* function everyoneWasBornOnSecXX() {
  return books.every((callback) => callback.author.birthYear >= 1901 && callback.author.birthYear <= 2000);
}
console.log(everyoneWasBornOnSecXX(books)); */


//Faça uma função que retorne true, se ALGUM LIVRO FOI LANÇADO NA DÉCADA DE 80, e false, caso contrário.
/*function someBookWasReleaseOnThe80s() {
  return books.some((callback) => callback.releaseYear > 1979 && callback.releaseYear < 1990);
}
console.log(someBookWasReleaseOnThe80s(books));*/



//Faça uma função que retorne true, caso NENHUM AUTOR TENHA NASCIDO NO MESMO ANO, e false, caso contrário.
/* function authorUnique() {
  return books.every((callback) => 
  books.some((callbackSome) => callback.author.birthYear === callbackSome.author.birthYear && callback.author.name !== callbackSome.author.name));
}
console.log(authorUnique(books));

Obs: Como estamos iterando duas vezes sobre o mesmo array, acaba acontecendo que comparamos o mesmo índice do array. Outra coisa que pode acontecer também é termos o mesmo autor para dois livros diferentes. Vamos então criar uma regra para que o nome do autor não possa ser igual nas comparações.*/