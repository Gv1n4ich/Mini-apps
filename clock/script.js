const container = document.querySelector('.container');

const firstSpan = document.querySelector(".first");
const secondSpan = document.querySelector(".second");
const thirdSpan = document.querySelector(".third");


const Timer = document.querySelector('.container');

function getTimer() {
    const Timer = new Date();
    firstSpan.textContent = Timer.getHours()
    secondSpan.textContent = Timer.getMinutes()
    thirdSpan.textContent = Timer.getSeconds()
    if (Number(thirdSpan.textContent) < 10) {
        thirdSpan.textContent = `0` + Timer.getSeconds()
    }
    if (Number(firstSpan.textContent) < 10) {
        thirdSpan.textContent = `0` + Timer.getSeconds()
    }
    if (Number(secondSpan.textContent) < 10) {
        thirdSpan.textContent = `0` + Timer.getSeconds()
    }
}


setInterval(getTimer, 1000)