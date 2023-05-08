//función que cambia el color de fondo a fucsia
function colorLightpink(obj){
    obj.style.backgroundColor='lightpink';
}

function colorBlanco(obj){
    obj.style.backgroundColor='white';
}

function upperText(texto)
    {
        const x=texto;
        x.value= x.value.toUpperCase();
    }
//caculadora

let result = document.getElementById('result');

function insertValue(value) {
result.value += value;
}

function clearResult() {
result.value = '';
}

function deleteLast() {
result.value = result.value.slice(0, -1);
}

function calculate() {
try {
result.value = eval(result.value);
} catch (error) {
result.value = 'Error';
}
}

//relog

function updateClock() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
  
    document.getElementById('hours').textContent = formatTime(hours);
    document.getElementById('minutes').textContent = formatTime(minutes);
    document.getElementById('seconds').textContent = formatTime(seconds);
  }
  
  function formatTime(time) {
    return time < 10 ? `0${time}` : time;
  }
  
  setInterval(updateClock, 1000);