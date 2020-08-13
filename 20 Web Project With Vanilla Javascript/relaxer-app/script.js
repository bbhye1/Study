const container = document.querySelector('.container');
const text = document.querySelector('.text');
const totalTime = 7500;
const breatheTime = (totalTime / 5) * 2;
const holeTime = totalTime / 5;

breathAnimation();

function breathAnimation() {
    text.innerText = 'Breathe In!';
    container.className = 'container grow';

    setTimeout(() => {
        text.innerText = 'Hold';

        setTimeout(() => {
            text.innerText = 'Breathe Out!';
            container.className = 'container shrink';
        }, holeTime);
    }, breatheTime);
}

setInterval(breathAnimation, totalTime);