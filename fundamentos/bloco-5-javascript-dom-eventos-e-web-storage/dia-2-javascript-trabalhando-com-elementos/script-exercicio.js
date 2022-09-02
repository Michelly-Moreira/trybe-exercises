/* Acesse o elemento elementoOndeVoceEsta.
Acesse pai a partir de elementoOndeVoceEsta e adicione uma color a ele.
Acesse o primeiroFilhoDoFilho e adicione um texto a ele.
Acesse o primeiroFilho a partir de pai.
Agora acesse o primeiroFilho a partir de elementoOndeVoceEsta.
Agora acesse o texto Atenção! a partir de elementoOndeVoceEsta.
Agora acesse o terceiroFilho a partir de elementoOndeVoceEsta.
Agora acesse o terceiroFilho a partir de pai. */

document.querySelector('#elementoOndeVoceEsta');

const addCor = document.querySelector('#elementoOndeVoceEsta').parentElement.style.color = 'green';

document.querySelector('#primeiroFilhoDoFilho').innerText = 'Passa lá!';

document.getElementById('pai').firstElementChild;

document.querySelector('#elementoOndeVoceEsta').previousElementSibling;

document.getElementById('elementoOndeVoceEsta').nextSibling;

document.getElementById('elementoOndeVoceEsta').nextSibling.nextElementSibling;

document.getElementById('pai').lastElementChild.previousElementSibling;