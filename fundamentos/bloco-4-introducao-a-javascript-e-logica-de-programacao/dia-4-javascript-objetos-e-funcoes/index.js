/* let car = {
  type: 'Fiat',
  model: '500',
  color: 'white',
};
 Para acessar a propriedade de um objeto:
ex.
 console.log(car.type);
 console.log(car[type]);

 Quando a propriedade(chave) do objeto for numero, como acessar o valor da chave?
 ex.
 let diasDaSemana = {
  1: 'domingo',
  2: 'segunda',
  3: 'terça',
  4: 'quarta',
  5: 'quinta',
  6: 'sexta',
  7: 'sábado',
  };
  
  diasDaSemana.1; // SyntaxError: Unexpected number
  console.log(diasDaSemana['1']); // domingo

  Neste exemplo, a chave banco do objeto conta, guarda um outro objeto, e também há o uso de variável na notação de colchetes, além de você poder ver exemplos usando notação de ponto e notação de colchetes.
  ex.
  let conta = {
  agencia: '0000',
  banco: {
    cod: '012',
    id: 4,
    nome: 'TrybeBank',
  },
};

let infoDoBanco = 'banco';
console.log(conta[infoDoBanco]); // { cod: '012', id: 4, nome: 'TrybeBank' }
console.log(conta[infoDoBanco]['nome']); // TrybeBank

console.log(conta.agencia); // 0000
console.log(conta['agencia']); // 0000

console.log(conta.banco.cod); // 012
console.log(conta['banco']['id']); // 4


Adicionando informacoes encadeadas. O objeto deste exemplo possui a chave infoPessoal que possui outras 3 chaves, uma delas sendo endereco, que é outro objeto! Ou seja, o objeto usuario possui outros dois dentro dele. Exemplo:

let usuario = {
  id: 99,
  email: 'jakeperalta@gmail.com',
  infoPessoal: {
    nome: 'Jake',
    sobrenome: 'Peralta',
    endereco: {
      rua: 'Smith Street',
      bairro: 'Brooklyn',
      cidade: 'Nova Iorque',
      estado: 'Nova Iorque',
    },
  },
};

console.log(usuario['id']); // 99
console.log(usuario.email); // jakeperalta@gmail.com

console.log(usuario.infoPessoal.endereco.rua); // Smith Street
console.log(usuario['infoPessoal']['endereco']['cidade']); // Nova Iorque

Objeto dentro de um array: Acessando as propriedades do objeto. Exemplo:

let moradores = [
  {
    nome: 'Luiza',
    sobrenome: 'Guimarães',
    andar: 10,
    apartamento: 1005,
  },
  {
    nome: 'William',
    sobrenome: 'Albuquerque',
    andar: 5,
    apartamento: 502,
  },
  {
    nome: 'Murilo',
    sobrenome: 'Ferraz',
    andar: 8,
    apartamento: 804,
  },
  {
    nome: 'Zoey',
    sobrenome: 'Brooks',
    andar: 1,
    apartamento: 101,
  },
];

let primeiroMorador = moradores[0];
console.log(primeiroMorador); // { nome: 'Luiza', sobrenome: 'Guimarães', andar: 10, apartamento: 1005 }
console.log(primeiroMorador['andar']); // 10

let ultimoMorador = moradores[moradores.length - 1];
console.log(ultimoMorador); // { nome: 'Zoey', sobrenome: 'Brooks', andar: 1, apartamento: 101 }
console.log(ultimoMorador.nome); // Zoey

ATENÇÃO: Não use o estilo de escrita kebab-case no JavaScript, isso não é uma boa prática porque o traço pode ser interpretado como um sinal de subtração. Use o estilo camelCase.

FOR/IN -> O for/in irá percorrer a propriedade declarada, e não o seu valor em si.

No laço for/in, o código que mostra as marcas de carros presentes em um Array é:
Exemplo:
let cars = ['Saab', 'Volvo', 'BMW'];

for (let index in cars) {
  console.log(cars[index]);
}

Um outro exemplo é a iteração nas chaves de um objeto:
let car = {
  type: 'Fiat',
  model: '500',
  color: 'white',
};

for (let index in car) {
  console.log(index, car[index]);
}
O resultado do código acima é:
type Fiat
model 500
color white


FOR/OF -> Já o for/of percorre os elementos dos objetos iteráveis através dos seus respectivos valores, e não dos índices como o for/in. Vejamos o exemplo:

let food = ['hamburguer', 'bife', 'acarajé'];
for (let value of food) {
  console.log(value);
};
//resultado: hamburguer, bife, acarajé;


FUNCTION
É possível criar funções que recebem ou não parâmetros. E, para decidir se a sua função precisa ou não deles, você deve pensar em sua lógica.

Por exemplo, se a função tiver o objetivo de cumprimentar a pessoa que está executando o programa pelo nome, tal como: "Bom dia, João!", ela vai precisar receber o nome da pessoa como parâmetro. Porém, se ela foi desenvolvida apenas para dar "Bom dia!", um parâmetro não é necessário.


// Sem função
let nome = 'João';

console.log('Bom dia, ' + nome);


// Com função
function bomDiaTryber(nome) {
  console.log('Bom dia, ' + nome);
}

bomDiaTryber('João'); // Bom dia, João
bomDiaTryber('Julia'); // Bom dia, Julia
bomDiaTryber('Marcelo'); // Bom dia, Marcelo



Exemplo de função sem parametro:

let status = 'deslogado';

function logarDeslogar() {
  if (status === 'deslogado') {
    status = 'logado';
  } else {
    status = 'deslogado';
  }
}

console.log(status); // deslogado

logarDeslogar();
console.log(status); // logado

logarDeslogar();
console.log(status); // deslogado

console.log('O usuário está ' + status); // O usuário está deslogado



Agora exemplo usando parametro:

function maiorNum(primeiroNum, segundoNum) {
  if (primeiroNum > segundoNum) {
    return primeiroNum + ' é maior que ' + segundoNum;
  } else if (segundoNum > primeiroNum) {
    return segundoNum + ' é maior que ' + primeiroNum;
  } else {
    return 'Os números são iguais';
  }
}

console.log(maiorNum(10, 20)); // 20 é maior que 10
console.log(maiorNum(2, -5)); // 2 é maior que -5
console.log(maiorNum(1, 1)); // Os números são iguais


1. Imprimindo a mensagem "Bem vinda, Margarida"
  let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};

console.log("Bem vinda, "+info.personagem);


2. Adicionando uma propriedade ao objeto e imprimindo na tela TODAS as propriedades e valores das propriedades, deste objeto:
info ['recorrente'] = 'sim' ;
console.log(info);


3. FOR/IN mostrando todas as PROPRIEDADES, do objeto:

for (let key in info ){
  console.log(key);
}

4. FOR/IN mostrando todos os VALORES das propriedades, do objeto:
 
for (let value in info){
console.log(info[value]);
}

5. Criar um novo objeto com a mesma estrutura do anterior (mesmas chaves), com novos valores e imprimir os valores de cada objeto juntos, de acordo com cada uma das chaves:*/

  let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  recorrente: 'sim'
};

  let notice = {
  personagem: 'Tio Patinhas',
  origem: 'Christmas on Bear Mountain, Dell's Four Color Comics #178,
  nota: 'O último MacPatinhas'
  recorrente: 'Sim'
}
console.log(info[personagem]+''+e+''+notice[personagem] )