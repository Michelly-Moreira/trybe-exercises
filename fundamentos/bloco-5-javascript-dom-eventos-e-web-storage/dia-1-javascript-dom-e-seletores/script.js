document.getElementsByTagName('p')[1].innerText="Sendo uma excelente desenvolvedora de software";

document.getElementsByClassName('main-content')[0].style.backgroundColor = 'rgb(76,164,109)';

document.getElementsByClassName('center-content')[0].style.backgroundColor = 'white';

document.getElementsByClassName('title')[0].innerText='Exercício 5.1 - JavaScript';

let p = document.getElementsByTagName('section')[0].style.textTransform = "uppercase"; 

let paragraf = document.getElementsByClassName('center-content');
for (let index of paragraf)
    console.log (index.innerText); /* não apareceu o resultado */

/*
Aqui você vai modificar os elementos já existentes utilizando apenas as funções:
- document.getElementById()
- document.getElementsByClassName()
- document.getElementsByTagName()

1. Crie e execute uma função que mude o texto na tag `<p>-----</p>`, para uma descrição de como você se vê daqui a 2 anos. (Não gaste tempo pensando no texto e sim realizando o exercício)*/


/*2. Crie e execute uma função que mude a cor do quadrado amarelo para o verde da Trybe (rgb(76,164,109)).
3. Crie e execute uma função que mude a cor do quadrado vermelho para branco.
4. Crie e execute uma função que corrija o texto da tag <h1>.
5. Crie e execute uma função que modifique todo o texto da tag <p> para maiúsculo.
6. Crie e execute uma função que exiba o conteúdo de todas as tags <p> no console.*/
