let header = document.getElementById('header-container');
header.style.backgroundColor = 'green'

let body = document.getElementById('container');
body.style.backgroundColor = 'lightgray'

let footer = document.getElementById('footer-container');
footer.style.backgroundColor = 'darkgreen'

let emergencyTasks = document.getElementsByClassName('emergency-tasks');
emergencyTasks[0].style.backgroundColor = 'pink'

let noEmergencyTasks = document.getElementsByClassName('no-emergency-tasks');
noEmergencyTasks[0].style.backgroundColor = 'yellow'

let topicosEmergencyTasks = document.querySelectorAll('.emergency-tasks h3');
topicosEmergencyTasks[0].style.backgroundColor = 'purple'
topicosEmergencyTasks[1].style.backgroundColor = 'purple'

let topicosNoEmergencyTasks = document.querySelectorAll('.no-emergency-tasks h3');
topicosNoEmergencyTasks[0].style.backgroundColor = 'black'
topicosNoEmergencyTasks[1].style.backgroundColor = 'black'
