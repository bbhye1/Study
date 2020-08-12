const settingsBtn = document.getElementById('settings-btn');
const settings = document.getElementById('settings');
const difficulty = document.getElementById('difficulty');
const word = document.getElementById('word');
const text = document.getElementById('text');
const timeElem = document.getElementById('time');
const scoreElem = document.getElementById('score');
const endGameContainer = document.getElementById('end-game-container');

//Init time
let time = 10;

//Init score
let score = 0;

//Focus on text on start
text.focus();

//Show word in DOM on start
showWord();

//Starting count down
const timeInterval = setInterval(updateTime, 1000);

//Generate random word
async function generateRandomWords() {
    const res = await fetch(`https://random-word-api.herokuapp.com/word?number=1`);
    const data = await res.json();
    return data[0];
}

//Show word in DOM
async function showWord() {
    const randomWord = await generateRandomWords();
    word.innerHTML = randomWord;
}

//Update score 
function updateScore() {
    score++;
    scoreElem.innerText = score;
}

//Update time 
function updateTime() {
    time--;
    timeElem.innerText = `${time}s`;

    if (time === 0) {
        clearInterval(timeInterval);
        gameOver();
    }
}

//Game over, show end screen
function gameOver() {
    endGameContainer.innerHTML = `
            <h2>Time ran out</h2>
            <p>your final score is ${score}</p>
            <button onclick="location.reload()">Reload</button>`;
    endGameContainer.style.display = "flex";
}

//Update score
text.addEventListener('input', e => {
    const insertedWord = e.target.value;
    if (insertedWord === word.innerText) {
        showWord();
        updateScore();
        time += 2;
        updateTime();

        //Clear
        e.target.value = '';
    }
})