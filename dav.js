let minutes = 00;
let seconds = 00;
let tens = 00;

const getMinutes = document.querySelector('.mins')
const getSeconds = document.querySelector('.secs');
const getTens = document.querySelector('.tens');
const btnStart = document.querySelector('.btn-start');
const btnStop = document.querySelector('.btn-stop');
const btnReset = document.querySelector('.btn-reset');

btnStart.addEventListener('click', ()=> {
    interval = setInterval(startTimer, 10)
})

btnStop.addEventListener('click', ()=> {
    clearInterval(interval);
})
btnReset.addEventListener('click', ()=> {
    clearInterval(interval);
    tens = '00';
    seconds = '00';
    minutes = '00';
    getSeconds.innerHTML = seconds;
    getTens.innerHTML = tens;
    getMinutes.innerHTML = minutes;
})

function startTimer() {
    
    tens++;
    if (tens <= 9) {
        getTens.innerHTML = '0' + tens
    } if (tens > 9) {
        getTens.innerHTML = tens;
    } if (tens > 99) {
        seconds++;
        getSeconds.innerHTML = '0' + seconds;
        tens = 0;
        getTens.innerHTML = '0' + 0;
    } if (seconds > 9) {
        getSeconds.innerHTML = seconds;
    } if ( seconds > 59) {
        minutes++;
        getMinutes.innerHTML = '0' + minutes;
        seconds = 0;
        getSeconds.innerHTML = '0' + 0;
    } if (minutes > 9) {
        getSeconds.innerHTML = minutes;

    }
    //  if (minutes > 59)
}