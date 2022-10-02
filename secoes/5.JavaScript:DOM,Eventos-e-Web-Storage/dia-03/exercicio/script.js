function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  }
  
  createDaysOfTheWeek();
  
  // Escreva seu código abaixo.
let decemberDaysList = [29,30]

function createDecemberDays(){
    const ul = document.getElementById('days')
    for (let i = 1; i <= 31; i += 1){
        decemberDaysList.push(i)
    }
    for (let dias = 0; dias < decemberDaysList.length; dias += 1){
        let li = document.createElement('li');
        li.className = 'day'
        li.innerText = decemberDaysList[dias];
        ul.appendChild(li)
        if (decemberDaysList[dias] == 24 || decemberDaysList[dias] == 25|| decemberDaysList[dias] == 31){
            li.className += ' holiday'
        }
        if (decemberDaysList[dias] == 4 || decemberDaysList[dias] == 11|| decemberDaysList[dias] == 18 || decemberDaysList[dias] == 25){
            li.className += ' friday'
        }


    }
}

createDecemberDays()



function createBtnHolidays(){
    let botaoFeriados = document.createElement('button');
    botaoFeriados.innerText = 'Feriados';
    botaoFeriados.id = 'btn-holiday';
    let divMaeDoBotaoFeriado = document.querySelector('.buttons-container');
    divMaeDoBotaoFeriado.appendChild(botaoFeriados)
}

createBtnHolidays();

function mudaCorHoliday(){
    const ul = document.getElementById('days');
    let todasLis = ul.children
    for(let i = 0; i < todasLis.length; i += 1){
        let classes = todasLis[i].classList;
        for(valor of classes){
            let lista = todasLis[i];
            let condicao = lista.style.backgroundColor != ''
            if (valor == 'holiday' && condicao){
                lista.style.backgroundColor = ''
            }else if (valor == 'holiday'){
                lista.style.backgroundColor = '#32a852'
            }
        }
    }
}

let botaoFeriados = document.getElementById('btn-holiday');
botaoFeriados.addEventListener('click',mudaCorHoliday);




let divMaeDoBotaoSextaFeira = document.querySelector('.buttons-container');
function criarBtnSextaFeira(palavra){
    let btnSextaFeira = document.createElement('button');
    btnSextaFeira.id = 'btn-friday'
    btnSextaFeira.innerText = palavra
    divMaeDoBotaoSextaFeira.appendChild(btnSextaFeira)
}

criarBtnSextaFeira('Sexta-feira')

// parte 5! ----------------------------------------------------------------
function changeTextFriday(daysFriday) {
    let fridayButton = document.querySelector('#btn-friday');
    let allFridays = document.getElementsByClassName('friday');
    let newText = 'sextou';

    fridayButton.addEventListener('click', function(){
        for (let i = 0; i < allFridays.length; i += 1) {
            if (allFridays[i].innerHTML !== newText){
                allFridays[i].innerHTML = newText;
            }else {
                allFridays[i].innerHTML = daysFriday[i];
            }
        }
    })
}
daysFriday = [4,11,18,25];
changeTextFriday(daysFriday);


// parte 6! -------------------------------------------------------------------

function darZoom(){
    let days = document.querySelector('#days');
    days.addEventListener('mouseover', function(event){
        event.target.style.fontSize = '30px';
        event.target.style.fontWeight = '600'
    })
}

function tirarZoom(){
    let days = document.querySelector('#days');
    days.addEventListener('mouseout', function(event){
        event.target.style.fontSize = '20px';
        event.target.style.fontWeight = '200'
    })
}

darZoom();
tirarZoom();

// parte 7! -------------------------------------------------------------------

function tarefaPersonalizada(texto){
    let span = document.createElement('span');
    span.innerHTML = texto;
    let myTasks = document.querySelector('.my-tasks');
    myTasks.appendChild(span)
}

tarefaPersonalizada('cozinhar');