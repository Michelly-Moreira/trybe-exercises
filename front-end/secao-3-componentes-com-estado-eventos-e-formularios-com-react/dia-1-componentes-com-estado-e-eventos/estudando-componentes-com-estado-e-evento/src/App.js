/*1. Faça com que sua aplicação exiba três botões lado a lado com textos diferentes. Cada botão clicado deve acionar um evento diferente, cada um escrevendo algo diferente no console do navegador via console.log(). */

/* import './App.css';
import React from 'react';

/* class App extends React.Component{
  handleClick = () =>{
    console.log('clicou')
  };
  
  getName = () =>{
    console.log('errou')
  }
  
  inputEmail = () => {
    console.log('tente de novo')
  }
  render () {
    return(
    <span>
    <button onClick={ this.handleClick }>Aperte</button>
    <button onClick={ this.getName }>aqui</button>
    <button onClick={ this.inputEmail }>de novo!</button>
    </span>
    )
  }
}
export default App;
 */


/* 2.
import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    // A função `super()` é chamada para garantir que a lógica interna do React rode **antes** da sua. Se não for assim, o código não funcionará
    super()

    // Sua lógica extra vai aqui! O parâmetro `props` é opcional, para você acessar as props diretamente no construtor
  }

  render() {
    return <span>Meu componente!</span>
  }
}

export default App;
 */


/* 3. bind significa ligar
import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super()
    // A função abaixo vincula "manualmente" o `this` à nossa função
    this.handleClick = this.handleClick.bind(this) // a função handleClick está ligada ao this
  }

  handleClick() {
    /* Agora esse log retorna o objeto `this`, já acessível para nossa função!
    Com isso, podemos acessar as `props`, estado do componente (ainda vamos ver como!)
    e tudo o mais daqui de dentro */
   /* console.log(this)
    console.log('Clicou!')
  }

  render() {
    return <button onClick={this.handleClick}>Meu botão</button>
  }
}
export default App; */



/* 4.O mesmo código acima, ao invés de usar constructor e super usamos arrow function:
import React from 'react';
import './App.css';

class App extends React.Component {
  handleClick = () => {
    console.log('Clicou!')
  }

  render() {
    return <button onClick={this.handleClick}>Meu botão</button>
  }
}

export default App; */



/* 5.Para definir um estado inicial ao componente. A ser definido
    no momento em que o componente for colocado na tela, faça uma atribuição
    de um objeto à chave state do `this`, ou seja, ao `this.state` */

/* import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super(); */
    
    /* this.state = {
      numeroDeCliques: 0,
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    /* Você **NUNCA** deve fazer atribuições diretamente a `this.state`. Deve,
    ao invés disso, SEMPRE utilizar a função `this.setState(novoEstado)` do
    React */
    /*this.setState({
      numeroDeCliques: 1,
    });
  }
  render() {
    /* Para LER o estado, você pode usar `this.state.chaveDoMeuEstado` */
    /*const { numeroDeCliques } = this.state;
    return (
      <button
        type="button"
        onClick={ this.handleClick }
      >
        { numeroDeCliques }
      </button>
    );
  }
}
export default App; */



// 6. Atualizando o state e o valor que aparece no botão
/* import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      numeroDeCliques: 0,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() { */
    /* Passando uma callback à função setState, que recebe de parâmetros
    o estado anterior e as props do componente, você garante que as atualizações
    do estado acontecerão uma depois da outra! */
    /* this.setState((estadoAnterior, _props) => ({
      numeroDeCliques: estadoAnterior.numeroDeCliques + 1,
    }));
  }

  render() {
    const { numeroDeCliques } = this.state;
    return (
      <button
        type="button"
        onClick={ this.handleClick }
      >
        { numeroDeCliques }
      </button>
    );
  }
}

export default App; */



// Outra maneira de (definir o estado do componente), usando Public Class Fields, para o mesmo exercicio anterior.
/* import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super();

    this.handleClick = this.handleClick.bind(this);
  } */

  // Fazemos a definição do estado utilizando a sintaxe Public Class Field
  /* state = {
    numeroDeCliques: 0,
  };

  handleClick() {
    this.setState((estadoAnterior, _props) => ({
      numeroDeCliques: estadoAnterior.numeroDeCliques + 1,
    }));
  }

  render() {
    const { numeroDeCliques } = this.state;
    return (
      <button type="button" onClick={ this.handleClick }>
        { numeroDeCliques }
      </button>
    );
  }
}

export default App; */
/* Se você quisesse chamar, no elemento, um evento passando um parâmetro, você deveria trocar a sintaxe <button onClick{this.minhaFuncao} ...> por <button onClick={() => this.minhaFuncao('meu parametro')}. Basicamente, substitua a função do evento por uma chamada à mesma feita via callback! */