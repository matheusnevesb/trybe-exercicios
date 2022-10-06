let submit = document.querySelector('#submit');
let date = document.querySelector('#date');
let campoNome = document.querySelector('#campo-nome');
let campoEmail = document.querySelector('#campo-email');
let clearFields = document.querySelector('#clearFields');
let textArea = document.querySelector('#text-area');
let checkboxImagem = document.querySelector('#checkbox-imagens')
let checkboxOportunidades = document.querySelector('#checkbox-oportunidades')

function submitForm(e) {
    e.preventDefault();
 
    let validacaoNome = campoNome.value.length > 9 && campoNome.value.length < 41
    let validacaoEmail = campoEmail.value.length > 9 && campoEmail.value.length < 51
    if (validacaoEmail && validacaoNome){
        alert('Dados enviados com sucesso! Obrigado por participar do concurso TrybeTrip')
    }else {
        alert('Dados Inválidos')
    }

    if (checkboxImagem.checked == false){
        return
    }
}

function limparCampos(){
    campoNome.value = ''
    campoEmail.value = ''
    textArea.value = ''
    date.value = ''
    checkboxImagem.checked = false
    checkboxOportunidades.checked = false
}

submit.addEventListener('click', submitForm );
clearFields.addEventListener('click', limparCampos)