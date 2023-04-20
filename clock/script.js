const container = document.querySelector('.container');

const firstSpan = document.querySelector('first';
const secondSpan = document.querySelector('second';
const thirdSpan = document.querySelector('.third');


const timer = document.querySelector('.container');

function getTimer() {
    const timer = new Date();
    firstSpan.textContent = Timer.getHours() < 10 ? firstSpan.textContent = '0' + Timer.getHours() : Timer.getHours()
    secondSpan.textContent = Timer.getMinutes() < 10 ? secondSpan.textContent = '0' + Timer.getMinutes() : Timer.getMinutes()
    thirdSpan.textContent = Timer.getSeconds() < 10 ? thirdSpan.textContent = '0' + Timer.getSeconds() : Timer.getSeconds()
}


setInterval(getTimer, 1000)
