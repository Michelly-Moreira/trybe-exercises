/* Crie uma função que retorne a string 'Acordando!!';
Crie outra função que retorne a string 'Bora tomar café!!';
Crie mais uma função que retorne a string 'Partiu dormir!!';
Agora desenvolva uma HOF chamada doingThings e configure esta função para que imprima no console o resultado da execução das funções que você criou nos exemplos anteriores:

const abriuOsOlhos = () => 'Acordando!!';

const fome = () =>  'Bora tomar café!!';

const sono = () => 'Partiu dormir!!';

const doingThings = (wakeup) => wakeup(); // wakeup é callback

console.log(doingThings(abriuOsOlhos));  */



//PRIMEIRA FORMA de fazer o exercício de prática 8.1
/* const listNames = ['Pedro Guerra', 'Luiza Drumond', 'Carla Paiva'];

let newPeople = (listNames) => { 

let todos = [];
for (let i = 0; i< listNames.length; i += 1){
let dados = {};
dados['nomeCompleto'] = listNames[i]; //forma de add propriedade ao objeto
dados.email = `${listNames[i].replace(/ /g,'_').toLowerCase()}@trybe.com`; //outra forma de add propriedade ao objeto

todos.push(dados)
 }
 return todos;
}
//console.log(newPeople(listNames));
let inputAll = newPeople(listNames);
//console.log(inputAll)
 
const newEmployees = (callback) => {
const employees = {
  id1: '', // substitua as aspas por nomeCompleto e respectivo valor, email e seu respectivo valor;
  id2: '', // substitua as aspas por nomeCompleto e respectivo valor, email e seu respectivo valor;
  id3: '', // substitua as aspas por nomeCompleto e respectivo valor, email e seu respectivo valor;
  };

employees.id1 = callback[0];
employees.id2 = callback[1];
employees.id3 = callback[2];

  return employees;
  };

  console.log(newEmployees(inputAll));    */


//SEGUNDA FORMA de fazer o exercício prático 8.1  
/* Crie uma função que retorne um objeto no formato { nomeCompleto, email } representando uma nova pessoa contratada.
Passe sua função como parâmetro da HOF newEmployees para criar cada pessoa contratada em seu respectivo id. 
A sua função deve receber como parâmetro o nome completo da pessoa funcionária e, a partir dele, gerar automaticamente um email no formato nome_da_pessoa@trybe.com. */


/* const listNames = ['Pedro Guerra', 'Luiza Drumond', 'Carla Paiva'];

let newPeople = (nome) => ({ 
nomeCompleto: nome,
email: `${nome.replace(/ /g,'_').toLowerCase()}@trybe.com`
});

//console.log(newPeople('Pedro Guerra'))
const newEmployees = (callback, listNames) => {
    
    const employees = {
      id1: callback(listNames[0]), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
      id2: callback(listNames[1]), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
      id3: callback(listNames[2]), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas.
    };
    return employees;
  };
  console.log(newEmployees(newPeople, listNames));  */



  //EXERCISE 2

  /* let numerosSorteados = () => Math.ceil(Math.random()*5);
  console.log(numerosSorteados());
  const result = (numerosApostados, callback) => numerosApostados === callback()? "Parabéns você ganhou" : 'Tente novamente';

  console.log(result(2, numerosSorteados)); */


/* EXERCISE 3
Crie uma HOF que receberá três parâmetros:
O primeiro será um array de respostas corretas (soluções);
O segundo será um array contendo as respostas fornecidas por uma pessoa estudante;
O terceiro é uma função que compara os dois arrays e então dá uma pontuação baseada nos acertos. Para isso, essa função usará os seguintes critérios:
Uma resposta correta adiciona 1 ponto à pontuação final;
A ausência de uma resposta não altera a pontuação (quando for “N.A”);
Uma resposta incorreta reduz a pontuação final em 0.5 ponto.

Ao final, a HOF deve retornar o total de pontos obtidos através das respostas fornecidas pela pessoa estudante.

const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const compareAnswers = (rightAnswer, studentAnswer) => { //rightAnswer, studentAnswer -> são callbacks.
  if (rightAnswer === studentAnswer) {
    return 1;
  } if (studentAnswer === 'N.A') {
    return 0;
  }
  return -0.5;
};

const score = (rightAnswers, studentAnswers, action) => { //rightAnswers, studentAnswers, action -> São outras callbacks
  let counter = 0;
  for (let i = 0; i < rightAnswers.length; i += 1) {
    let punctuation = action(rightAnswers[i], studentAnswers[i])
    counter += punctuation;
  }
  return `Você fez ${counter} pontos!`
};
console.log(score(RIGHT_ANSWERS, STUDENT_ANSWERS, compareAnswers)); //As callbacks foram substituídas pelos arrays e pela função. */
