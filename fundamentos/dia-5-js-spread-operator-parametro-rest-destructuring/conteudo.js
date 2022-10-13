//SPREAD OPERATOR

/* exemplo1
const numbers = [1, 2, 3];

const newArray = [...numbers, 4, 5, 6];
console.log(newArray); // [ 1, 2, 3, 4, 5, 6 ]
console.log(numbers); // [ 1, 2, 3 ] */


/*exemplo2
const spring = ['OUT', 'NOV', 'DEZ'];
const summer = ['JAN', 'FEV', 'MAR'];
const fall = ['ABR', 'MAI', 'JUN'];
const winter = ['JUL', 'AGO', 'SET'];

const months = [...summer, ...fall, ...winter, ...spring];
console.log(months); */


/* exemplo3 - Aplicando spread como parametro de uma função
Um dos usos interessantes do spread é no argumento de uma função que recebe vários parâmetros.
No exemplo, temos uma função que calcula o IMC (índice de massa corporal) de um paciente. A função recebe como parâmetros o peso e a altura da pessoa e retorna o resultado arredondado do IMC. Podemos salvar os dados do paciente em um array e utilizar o spread para expandir esses valores no argumento da função que calcula o IMC:
const imc = (peso, altura) => (peso / (altura * altura)).toFixed(2);
const patientInfo = [60, 1.7];

console.log(imc(...patientInfo)); // 20.76 */


/* exemplo4 - Aplicando spread em funções prontas do js(ex.Math.max e Math.min)
const randomNumbers = [57, 8, 5, 800, 152, 74, 630, 98, 40];

console.log(Math.max(...randomNumbers)); // 800
console.log(Math.min(...randomNumbers)); // 5 */


/*exemplo5 - Usando propriedades de dois obj para criar um novo objeto, com spread
const people = {
  id: 101,
  name: 'Alysson',
  age: 25,
};

const about = {
  address: 'Av. Getúlio Vargas, 1000',
  occupation: 'Developer',
};

const customer = { ...people, ...about };

console.log(customer);*/


//PARA FIXAR
/* Faça uma função chamada fruitSalad passando como parâmetro specialFruit e additionalItens; faça a função retornar uma lista única, contendo todos os itens da nossa salada de frutas, usando o spread.

// Faça uma lista com as suas frutas favoritas
 const specialFruit = ['laranja', 'banana', 'mamão'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['leite condensado', 'melão', 'kiwi'];

const fruitSalad = (fruit, additional) => [...fruit, ...additional];


console.log(fruitSalad(specialFruit, additionalItens));*/


/* REST - O parâmetro rest é uma feature do ES6 que permite que você crie funções que recebam um número variável de argumentos. O resultado são funções mais flexíveis. Os argumentos que serão passados como parâmetro são salvos em um array que pode ser acessado de dentro da função. Por isso, podemos passar qualquer tipo de parâmetro quando usamos o rest. Todos eles serão colocados dentro de um array, o que te permite usar métodos como o .length*/
//exemplo1
/* function quantosParams(...args) {//rest
  console.log('parâmetros:', args);
  return `Você passou ${args.length} parâmetros para a função.`;
}

console.log(quantosParams(0, 1, 2)); // Você passou 3 parâmetros para a função.
console.log(quantosParams('string', null, [1, 2, 3], { })); // Você passou 4 parâmetros para a função. */


/* exemplo2 - usando o rest com o reduce
const sum = (...args) => args.reduce((accumulator, current) => accumulator + current, 0);
console.log(sum(4, 7, 8, 9, 60)); // 88 */


/* OBJECT DESTRUCTURING - acessando os valores de um objeto, mais simples e com menos declarações, também conhecido como desestruturação de objetos. 
//Sintaxe da desestruturação de objetos
  const product = {
  name: 'Smart TV Crystal UHD',
  price: '1899.05',
  seller: 'Casas de Minas',
};
//acessando o nome do produto
const { name } = product;
console.log(name); // Smart TV Crystal UHD

//acessando a loja vendedora e o produto também
const { name, seller } = product;
console.log(name); // Smart TV Crystal UHD
console.log(seller); // Casas de Minas

Dessa forma, conseguimos extrair o valor da propriedade que precisamos acessar com muito menos código, atribuindo esse valor à variáveis.*/


/* OBJECT DESESTRUCTURING - Se a chave do objeto contiver outro objeto como valor.
Queremos extrair o nome do personagem, a idade, o nome do planeta e verificar se ele é um Jedi. Depois de feito, precisamos imprimir essas informações no console.log(). Para isso, vamos utilizar a desestruturação de objetos: 

const character = {
  name: 'Luke SkyWalker',
  age: '53',
  description: {
    specieName: 'Human',
    jedi: true,
  },
  homeWorld: {
    name: 'Tatooine',
    population: '200000',
  },
};
// desestruturando o objeto:
const { name, age, homeWorld: { name: planetName }, description: { jedi } } = character;
//planetName é uma variável que recebe o valor da propriedade name do objeto homeWorld.

// imprimindo os valores:
console.log(`Esse é o ${name}, ele tem ${age} anos, mora no planeta ${planetName} e, por incrível que possa parecer, ele ${jedi ? 'é um Jedi' : 'não é um Jedi'}.`);*/


/* Usando a desestruturação de objeto em conjunto com o spread operator (acessando e criando novo array com os valores)
const daysOfWeek = {
  workDays: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
  weekend: ['Saturday', 'Sunday'],
};

const { workDays, weekend } = daysOfWeek;//desestruturando o objeto, acessando o valor das chaves
console.log(workDays); // ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']
console.log(weekend); // ['Saturday', 'Sunday']

const weekdays = [...workDays, ...weekend];//usando spread operator para adicionar os valores para um novo array
console.log(weekdays); // ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'] */


/* reatribuindo o nome à propriedade
const student = {
  a: 'Maria',
  b: 'Turma B',
  c: 'Matematica',
};

const { a: name, b: classAssigned, c: subject } = student;

console.log(name); // Maria
console.log(classAssigned); // Turma B
console.log(subject); // Matemática */


/* Nesse exemplo, informamos qual a propriedade que gostaríamos de acessar e a declaramos em uma nova variável seguindo a sintaxe: { propriedade:nomeVariável } = objeto.
const student = {
  a: 'Maria',
  b: 'Turma B',
  c: 'Matematica',
};
const name = student.a;
console.log(name); // Maria */


/* Object destructuring - Passando os valores de um objeto como parâmetros para uma função
const product = {
  name: 'Smart TV Crystal UHD',
  price: '1899.05',
  seller: 'Casas de Minas',
};

const printProductDetails = ({ name, price, seller }) => {
  console.log(`Promoção! ${name} por apenas ${price} é só aqui: ${seller}`);
};

printProductDetails(product); // Promoção! Smart TV Crystal UHD por apenas 1899.05 é só aqui: Casas de Minas */


/* Crie um terceiro objeto, que terá os dados pessoais e os dados de cargo juntos.
Existem dois objetos referentes a uma pessoa usuária, um com informações pessoais e outro com informações referentes ao seu cargo na empresa trappistEnterprise. Você precisa criar um terceiro objeto, que terá os dados pessoais e os dados de cargo juntos. Para isso, utilize o spread operator.*/

const user = {
  name: 'Maria',
  age: 21,
  nationality: 'Brazilian',
};

const jobInfos = {
  profession: 'Software engineer',
  squad: 'Rocket Landing Logic',
  squadInitials: 'RLL',
};

const inputInfos = {...user, ...jobInfos};
//console.log(inputInfos)

/*Imprima no console uma frase utilizando os dados do objeto criado anteriormente. Para isso, utilize a desestruturação de objetos em conjunto com template literals.
Exemplo "Hi, my name is Maria, I'm 21 years old and I'm Brazilian. I work as a Software engineer and my squad is RLL-Rocket Landing Logic"*/

//desestruturando objetos
const {name, age, nationality, profession, squadInitials,squad } = inputInfos
console.log(inputInfos);

//imprimindo valores
console.log(`Hi, my name is ${name}, I'm ${age} years old and I'm ${nationality}. I work as a ${profession} and my squad is ${squadInitials}-${squad}`);
