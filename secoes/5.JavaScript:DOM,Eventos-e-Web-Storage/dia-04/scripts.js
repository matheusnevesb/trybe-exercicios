window.onload = function (){
    let corDeFundo = document.querySelector('#corDeFundo');
    let textoContainer = document.querySelector('.texto');



    textoContainer.style.backgroundColor = localStorage.getItem('5.4-background-color')
    textoContainer.style.color = localStorage.getItem('color')
    textoContainer.style.fontSize = localStorage.getItem('tamanho-da-fonte') + 'px'
    textoContainer.style.lineHeight = localStorage.getItem('altura-linha') + 'px'
    textoContainer.style.fontFamily = localStorage.getItem('font-family')



    corDeFundo.addEventListener('keyup', function (event){
        textoContainer.style.backgroundColor = event.target.value
        console.log(event.target.value)

        localStorage.setItem('5.4-background-color',event.target.value)
    })

    let corDoTexto = document.querySelector('#corDoTexto');

    corDoTexto.addEventListener('keyup',function(event){
        textoContainer.style.color = event.target.value;

        localStorage.setItem('color',event.target.value)
    })

    let tamamhoDaFonte = document.querySelector('#tamanhoDaFonte');

    tamamhoDaFonte.addEventListener('keyup',function(event){
        textoContainer.style.fontSize = event.target.value + 'px';

        localStorage.setItem('tamanho-da-fonte', event.target.value)
    })

    let entreLinhas = document.querySelector('#entreLinhas');

    entreLinhas.addEventListener('keyup', function(e){
        textoContainer.style.lineHeight = e.target.value + 'px'

        localStorage.setItem('altura-linha', e.target.value)
    })

    let tipoFonte = document.querySelector('#tipoFonte');

    tipoFonte.addEventListener('keyup', function(e){
        textoContainer.style.fontFamily = e.target.value

        localStorage.setItem('font-family',e.target.value)
    })
}