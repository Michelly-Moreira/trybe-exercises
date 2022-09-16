/* Altere o tipo das variáveis(var) para let ou const para que respeitem o escopo em que foram declaradas, e altere a função utilizando arrow function e template literals.
Modifique a estrutura da função para que ela seja uma arrow function;
Modifique as variáveis para que respeitem o escopo onde estão declaradas;
Modifique as concatenações para template literals. */

/* function testingScope(escopo) {
  if (escopo === true) {
    var ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
    ifScope = ifScope + ' ótimo, fui utilizada no escopo !';
    console.log(ifScope);
  } else {
    var elseScope = 'Não devo ser utilizada fora meu escopo (else)';
    console.log(elseScope);
  }
  console.log(ifScope + ' o que estou fazendo aqui ? :O'); // Se necessário esta linha pode ser removida.
}

testingScope(true); */

  /*Resposta
 const testingScope = escopo => {
  if (escopo === true){
  let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
    ifScope = `${ifScope}  ótimo, fui utilizada no escopo !`;
    console.log(ifScope);
  } else {
    const elseScope = 'Não devo ser utilizada fora meu escopo (else)';
    console.log(elseScope);
  }
}

testingScope(true); */




/* 2. Crie uma função que retorne um array em ordem crescente 

const oddsAndEvens = [13, 3, 4, 10, 7, 2];

const sortOddsAndEvens = () => {};
  oddsAndEvens((a,b) => a-b){

 }

console.log(`Os números ${oddsAndEvens} se encontram ordenados de forma crescente!');
*/  



/* 3 .Crie uma função que receba um número e retorne seu fatorial.
Com base nessas informações:

Crie a função factorial que recebe um número como parâmetro, utilizando arrow functions (Lembre-se de armazenar a função utilizando o tipo de variável correta).

Dentro da função crie uma variável result, que será o retorno final da função.

Crie a lógica para retornar o fatorial de N!.

Imprima no terminal “Esse é o fatorial resultado da função“ (Lembre-se de utilizar template literals nesse momento).

Bônus: tente fazer o mesmo exercício de forma recursiva. Spoiler: É possível resolver com uma linha usando ternary operator.*/



/* function factorial(number){

  let result = 1;

  for (i = number ; i >= 1; i -= 1){
    result = (result * i);
    }
    return result;
} 
 console.log(factorial(5));  */


 /* REFAZER A FUNÇÃO ACIMA COM TERNARY OPERATOR E TEMPLATE LITERALS
 const factorial = (number,result) =>
 for (i = number ; i >= 1; i -= 1){
  result = (result * i);
  }
  let resultado = 1;
  let number = 5;
  console.log(`Esse é o fatorial resultado da função ${result}`)
  Onde coloco esta informação dos valores das variáveis, onde coloco o return neste caso, 
e como fazer o console.log deste arrow function ?
  */



/* CRIE uma função que receba uma frase como parâmetro e retorne a maior palavra contida nesta frase.

longestWord('Antônio foi ao banheiro e não sabemos o que aconteceu') // retorna 'aconteceu' 
Bônus (opcional): tente fazer o mesmo exercício utilizando o método array.sort().*/



/* Crie uma página HTML que possua um contador de cliques.

Além da estrutura básica do HTML, sua página deve possuir:

Uma tag que receberá o valor atualizado da quantidade de clicks do botão.

Um botão com o texto click aqui!, que receberá um event listener do tipo click;

Na estrutura do script (dentro do HTML ou em um arquivo de JavaScript ):

Crie uma variável clickCount que irá acumular o número de clicks do botão;

Crie a lógica do evento, para que a cada click no botão, a variável seja atualizada com acréscimo de valor 1. Exemplo: Caso não tenha sido realizado nenhum click, o valor renderizado será de 0. Caso o botão seja clicado 5 vezes o valor renderizado no HTML será de 5.

Dica: Nesse exercício utilize document. getElementById para retornar o elemento do DOM que deseja. */




/* Crie duas funções JavaScript com as seguintes especificações:

Não se esqueça de usar template literals

Função 1: Escreva uma função que substitua a letra ‘x’ em uma frase.

O nome da função deverá ser substituaX;
A função deverá receber um nome por parâmetro;
Declare dentro da função uma variável do tipo const, com o nome frase, atribuindo o valor 'Tryber x aqui!';
A função deverá retornar uma nova frase onde o x da frase 'Tryber x aqui!' seja substituído pelo nome passado por parâmetro.
Exemplo:

Parâmetro: ‘Bebeto’
Retorno: ‘Tryber Bebeto aqui!’
Spoiler: O método split() pode ser utilizado de diferentes maneiras, como separar as palavras de um texto.

Função 2: Escreva uma função que irá receber o retorno da Função 1 por parâmetro e retornará uma nova string.

O nome da função deverá ser minhasSkills;
A função deverá receber o retorno da Função 1 - substituaX por parâmetro;
Declare dentro da função uma variável com o nome skills, do tipo const;
A variável skills deverá ser um array contendo três strings com tecnologias que você já aprendeu.
Crie uma varável do tipo let e concatene o valor retornado da Função 1 - substituaX (utilize template literals), a frase 'Minhas três principais habilidades são:' e o valor da variável skills.
Exemplo de retorno:

Tryber Bebeto aqui!

Minhas três principais habilidades são:

JavaScript
HTML
CSS */

