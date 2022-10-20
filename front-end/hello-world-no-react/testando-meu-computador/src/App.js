import { Component } from 'react';
import './App.css';
import Hello from './hello';

/* 1.
const element = <h1>Hello, world!</h1>;

class App extends Component{
  render() {
  return (
    <div>
  {element}
   </div>
  );
}
} */



//2.  INCORPORANDO EXPRESSÕES NO JSX

// const nome = 'Jorge Maravilha';
// const element = <h1>Hello, {nome}</h1>;
/* 
class App extends Component{
  render() {
  return (
    <div>
    <h1>
   Hello, {nome}
   </h1>
   </div>
  );
}
} */



// 3.
 /* function nomeCompleto (nome, sobrenome) {
  return `${nome} ${sobrenome}`;
}

const element = <h1>Hello, {nomeCompleto('Jorge', 'Maravilha')}</h1>;

class App extends Component{
  render() {
 {element}
}
} */


// 4. incorporando a constante element na função helloWorld, retornar um código JSX e encapsulá-la em uma div

 /* function helloWorld (nome, sobrenome) {
  return <h1>Hello, {`${nome} ${sobrenome}`}</h1>;
}

const element = helloWorld('Jorge', 'Maravilha');
const container = <div>{element}</div>;

class App extends Component{
  render() {
  return (
    <div>
   {element}
   </div>
  );
}
} */



/* 5.
const nome = 'Michelly Moreira';
const classe = 'hello-class';
const element = <h1 className={classe}>Hello, {nome}</h1>;

class App extends Component{
  render() {
  return (
    <h1>
   {element}
   </h1>
  );
}
} */


// Renderizando um elemento jsx, importado.
class App extends Component{
  render() {
  return (
  < Hello />
  );
}
}
export default App;
