import React from 'react';

const textJSX = 'Hello, JSX';
const word = <h1>{textJSX}</h1>;

class Hello extends React.Component {
  render() {
    return (
      <h1>
        {word}
      </h1>)
  }
}

export default Hello;