/* Neste exemplo, o teste esperava receber como valor um objeto contendo uma pessoa usuária com o nome “Joana”, mas ao invés disso recebeu “Bob”.Mesmo existindo um teste com erro, os outros testes foram executados normalmente. Além disso, o log do erro gerado pelo Jest te possibilita identificar rapidamente onde foi que ocorreu o erro, uma vez que é exibida a mensagem que está contida no teste em questão.
 
const {
  greetingMessage,
  loginErrorMessage,
  verifyCredentials,
} = require("./loginValidation.js");

describe("Testa a função verifyCredentials()", () => {
  
  it("verifyCredentials() chama a função correta dependendo do valor de userName e password", () => {
    
    const user = {
      userName: 'Bob',
      password: 123456,
    };
      
    const { userName, password } = user;

    expect(verifyCredentials({ userName, password })).toBe(
      "Hello, Joana! Que bom ter você de volta"
    ); 
  });

  it("greetingMessage() retorna uma mensagem no formato: `Hello, ${user}! Que bom ter você de volta`", () => {
    expect(greetingMessage("Lucas")).toBe(
      "Hello, Lucas! Que bom ter você de volta"
    );
  });

  it("loginErrorMessage() retorna uma mensagem no formato: `Pessoa usuária '${user}' não encontrada, tente novamente!`", () => {
    expect(loginErrorMessage("Bob")).toBe(
      "Pessoa usuária 'Bob' não encontrada, tente novamente!"
    );
  });  
});

Outro ponto positivo da utilização do Jest para fazer nossos testes é que ele traz uma mensagem contendo um diff, ou seja, o que se esperava que ocorresse no teste e o que de fato aconteceu. Isso nos ajuda a entender mais rapidamente onde está o erro.
*/


