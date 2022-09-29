let elementoOndeVoceEsta = document.querySelector('#elementoOndeVoceEsta');

let primeiroFilhoDoFilho = document.querySelector('#primeiroFilhoDoFilho');

let terceiroFilho = document.querySelector('#terceiroFilho');

function criarFilho(ondeVaiSerAdicionado) {
    novoElement = document.createElement('h1')
    novoElement.innerText = 'novo elemento'

    ondeVaiSerAdicionado.appendChild(novoElement)
}

function criarIrmao(elementoIrmao){
    let novoElemento = document.createElement('h2');
    novoElemento.innerText = 'Irmao!'

    let paiDele = elementoIrmao.parentElement;
    paiDele.appendChild(novoElemento)
}

criarFilho(elementoOndeVoceEsta);
criarFilho(primeiroFilhoDoFilho);
criarIrmao(elementoOndeVoceEsta);

