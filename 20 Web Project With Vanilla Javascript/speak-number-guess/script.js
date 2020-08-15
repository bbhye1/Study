const msg = document.getElementById('msg');

const randomNum = getRandomNumber();

window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

let recognition = new window.SpeechRecognition;

// Start recognition and game start
recognition.start();

// Capture user speak
function onSpeak(e) {
    const msg = e.results[0][0].transcript;
    writeMessage(msg);
    checkNumber(msg);
}


// Get random number
function getRandomNumber() {
    return Math.floor(Math.random() * 100 + 1);
}

// Speak result 
recognition.addEventListener('result', onSpeak);