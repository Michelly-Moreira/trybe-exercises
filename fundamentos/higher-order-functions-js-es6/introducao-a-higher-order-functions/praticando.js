/* Crie uma função que retorne a string 'Acordando!!';
Crie outra função que retorne a string 'Bora tomar café!!';
Crie mais uma função que retorne a string 'Partiu dormir!!';
Agora desenvolva uma HOF chamada doingThings e configure esta função para que imprima no console o resultado da execução das funções que você criou nos exemplos anteriores:

const abriuOsOlhos = () => 'Acordando!!';

const fome = () =>  'Bora tomar café!!';

const sono = () => 'Partiu dormir!!';

const doingThings = (wakeup) => wakeup(); // wakeup é callback

console.log(doingThings(abriuOsOlhos));  */



/* let newPeople = (listNames) => { 
const listNames = ['Pedro Guerra', 'Luiza Drumond', 'Carla Paiva'];
let todos = [];
for (let i = 0; i< listNames.length; i += 1){
let dados = {};
dados['nomeCompleto'] = listNames[i]; //forma de add propriedade ao objeto
dados.email = `${listNames[i].replace(' ','_').toLowerCase()}@trybe.com`; //outra forma de add propriedade ao objeto

todos.push(dados)
 }
 return todos;
}
console.log(newPeople(listNames));
  PRIMEIRA PARTE DO EXERCICIO 1, ACIMA*/




/*Crie uma função que retorne um objeto no formato { nomeCompleto, email } representando uma nova pessoa contratada OK.
Passe sua função como parâmetro da HOF newEmployees para criar cada pessoa contratada em seu respectivo id. 
A sua função deve receber como parâmetro o nome completo da pessoa funcionária e, a partir dele, gerar automaticamente um email no formato nome_da_pessoa@trybe.com. OK
*/

const listNames = ['Pedro Guerra', 'Luiza Drumond', 'Carla Paiva'];

let newPeople = (nome) => ({ 
nomeCompleto: nome,
email: `${nome.replace(' ','_').toLowerCase()}@trybe.com`
})

/* console.log(newPeople('Pedro Guerra'))
 */
  const newEmployees = () => {
    
  const employees = {
      id1: '', // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
      id2: '', // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
      id3: '', // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
    };

    return employees;
  };
  console.log(employees(newPeople()));