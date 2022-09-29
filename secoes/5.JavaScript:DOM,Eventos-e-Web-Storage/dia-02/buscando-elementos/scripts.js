let elementoOndeVoceEsta = document.querySelector('#elementoOndeVoceEsta');

let pai = elementoOndeVoceEsta.parentElement
pai.style.color = 'blue';

let primeiroFilhoDoFilho = elementoOndeVoceEsta.firstElementChild;

primeiroFilhoDoFilho.innerText = 'texto adicionado'

// let primeiroFilho = pai.firstElementChild
let primeiroFilho = elementoOndeVoceEsta.parentElement.firstElementChild;
// primeiroFilho.innerText = 'primeiro filho'

let atencao = elementoOndeVoceEsta.parentElement.childNodes[4]
// atencao.textContent = ' oi'

// let terceiroFilho = elementoOndeVoceEsta.nextElementSibling
let terceiroFilho = pai.children[2]
terceiroFilho.innerText = ' terceiro'
