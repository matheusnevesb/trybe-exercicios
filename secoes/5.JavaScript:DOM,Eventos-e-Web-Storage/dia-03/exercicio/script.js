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

function createDecemberDays(){
    const ul = document.getElementById('days')
    let decemberDaysList = [29,30]
    for (let i = 1; i <= 31; i += 1){
        decemberDaysList.push(i)
    }
    for (let dias = 0; dias < decemberDaysList.length; dias += 1){
        let li = document.createElement('li');
        li.innerText = decemberDaysList[dias];
        ul.appendChild(li)

    }
}

createDecemberDays()

