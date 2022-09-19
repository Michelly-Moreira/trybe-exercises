/* const sum = (value1, value2) => value1 + value2;

console.log(sum(2,'3')); */

/* 
const sum = (value1, value2) => {
  if (typeof value1 !== 'number' || typeof value2 !== 'number') {
    return 'Os valores devem ser numéricos';
  }
  return value1 + value2;
};

console.log(sum(2, 3)); */

/* THROW 
const sum = (value1, value2) => {
  if (typeof value1 !== 'number' || typeof value2 !== 'number') {
    throw new Error('Os valores devem ser numéricos');
  }
  return value1 + value2;
};

console.log(sum(2, '3')); */



/* THROW , TRY , CATCH
const verifyIsNumber = (value1, value2) => {
  if (typeof value1 !== 'number' || typeof value2 !== 'number') {
    throw new Error('Os valores devem ser numéricos');
  }
};

const sum = (value1, value2) => {
  try {
    verifyIsNumber(value1, value2);
    return value1 + value2;
  } catch (error) {
    return error.message;
  }
};

console.log(sum(2, '3')); */



/* FORMAS DE REESCREVER UMA NOVA PROPRIEDADE PARA O OBJETO
const customer = {
  firstName: 'Maria',
  age: 23,
  job: 'Medic',
};

customer['lastName'] = 'Silva';
||
customer.lastName = 'Faria';

console.log(customer); */



/* Diferentes formas de associar chaves e valores a um objeto: 

const customer = {
  firstName: 'Roberto',
  age: 22,
  job: 'Teacher',
};

let newKey = 'lastName';
const lastName = 'Ferreira';
customer[newKey] = lastName;
newKey = 'fullName';
const fullName = `${customer.firstName} ${customer.lastName}`;
customer[newKey] = fullName;
console.log(customer); 
*/

/* COMO LISTAR AS CHAVES DE UM OBJETO?
(exemplo utilizando FOR IN)

const coolestTvShow = {
  name: 'BoJack Horseman',
  genre: 'adult animation',
  createdBy: 'Raphael Bob-Waksberg',
  favoriteCharacter: 'Princess Carolyn',
  quote: 'Princess Carolyn always lands on her feet.',
  seasons: 6,
};

for (const property in coolestTvShow) {
  console.log(property);
} 

(agora utilizando o método Object.keys), onde Cada entrada do array retornado será uma string com o valor de cada chave do objeto:

const coolestTvShow = {
  name: 'BoJack Horseman',
  genre: 'adult animation',
  createdBy: 'Raphael Bob-Waksberg',
  favoriteCharacter: 'Princess Carolyn',
  quote: 'Princess Carolyn always lands on her feet.',
  seasons: 6,
};


console.log(Object.keys(coolestTvShow));

const student1 = {
  Html: 'Muito Bom',
  Css: 'Bom',
  JavaScript: 'Ótimo',
  SoftSkills: 'Ótimo',
};

const student2 = {
  Html: 'Bom',
  Css: 'Ótimo',
  JavaScript: 'Ruim',
  SoftSkills: 'Ótimo',
  Git: 'Bom', 
};

const listSkills = (student) => {
  const arrayOfSkills = Object.keys(student);
  
    for (const index in arrayOfSkills) {
    console.log(`${arrayOfSkills[index]}, Nível: ${student[arrayOfSkills[index]]}`); //retornando os valores de cada chave
  }
};

console.log('Estudante 1');
listSkills(student1);

console.log('Estudante 2');
listSkills(student2);*/


/* LISTANDO OS VALORES DAS CHAVES DO OBJETO
(usando for in)

const coolestTvShow = {
  name: "BoJack Horseman",
  genre: "adult animation",
  createdBy: "Raphael Bob-Waksberg",
  favoriteCharacter: "Princess Carolyn",
  quote: "Princess Carolyn always lands on her feet.",
  seasons: 6,
};

for (const property in coolestTvShow) {
  console.log(coolestTvShow[property]);
}

(usando Object.values)
console.log(Object.values(coolestTvShow)); 
OUTRO EXEMPLO RETORNANDO VALORES DO OBJ 
const student = {
  Html: 'Muito Bom',
  Css: 'Bom',
  JavaScript: 'Ótimo',
  SoftSkill: 'Ótimo',
};

const listSkillsValuesWithFor = (student) => {
  const skills = [];
  for(skill in student) {
    skills.push(student[skill]);
  }

  return skills;
};

const listSkillsValuesWithValues = (student) => Object.values(student);

// Sem Object.values
console.log(listSkillsValuesWithFor(student));

// Com Object.values
console.log(listSkillsValuesWithValues(student));*/



/* RETORNANDO UM ARRAY DE ARRAYS CONSTANDO PROPRIEDADE(CHAVE E VALOR) DO OBJETO, USANDO Object.entries: 

const coolestTvShow = {
  name: 'BoJack Horseman',
  genre: 'adult animation',
  createdBy: 'Raphael Bob-Waksberg',
  favoriteCharacter: 'Princess Carolyn',
  quote: 'Princess Carolyn always lands on her feet.',
  seasons: 6,
};
  console.log(Object.entries(coolestTvShow));

Para ver os valores separadamente, adicione o for in*/

