/* ASSERT 
exemplo:

const assert = require('assert'); // Sintaxe para incluir o módulo assert

assert.strictEqual(50, 50); // Sem erros: 50 === 50
assert.strictEqual(50, 70); // AssertionError: 50 !== 70 */



/* ESCREVENDO TESTE EM JEST
(teste da função que foi implementada no arquivo sum.js)

const sum = require('./sum');   //importando a função 

test('soma dois valores', () => {      //função teste com nome e função
  expect(sum(2, 3)).toBe(5);              //com expectations
}); 

*/