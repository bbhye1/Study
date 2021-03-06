const main = document.querySelector('main');
const toggleBtn = document.getElementById('toggle');
const closeBtn = document.getElementById('close');
const voiceSelect = document.getElementById('voices');
const textarea = document.getElementById('text');
const readBtn = document.getElementById('read');
const textBox = document.querySelector('.text-box');


const data = [{
        image: './img/drink.jpg',
        text: "I'm Thirsty"
    },
    {
        image: './img/food.jpg',
        text: "I'm Hungry"
    },
    {
        image: './img/tired.jpg',
        text: "I'm Tired"
    },
    {
        image: './img/hurt.jpg',
        text: "I'm Hurt"
    },
    {
        image: './img/happy.jpg',
        text: "I'm Happy"
    },
    {
        image: './img/angry.jpg',
        text: "I'm Angry"
    },
    {
        image: './img/sad.jpg',
        text: "I'm Sad"
    },
    {
        image: './img/scared.jpg',
        text: "I'm Scared"
    },
    {
        image: './img/outside.jpg',
        text: 'I Want To Go Outside'
    },
    {
        image: './img/home.jpg',
        text: 'I Want To Go Home'
    },
    {
        image: './img/school.jpg',
        text: 'I Want To Go To School'
    },
    {
        image: './img/grandma.jpg',
        text: 'I Want To Go To Grandmas'
    }
];

data.forEach(createBox);

//Create speech boxes
function createBox(item) {
    const box = document.createElement('div');
    box.classList.add('box');
    const { image, text } = item;

    box.innerHTML = `
    <img src="${image}" alt="${text}">
    <p class="info">${text}</p>`;


    //@todo - speak event
    box.addEventListener('click', () => {
        setTextMessage(text);
        speakVoice();

        //Add active effect
        box.classList.add('active');

        setTimeout(() => {
            box.classList.remove('active')
        }, 800);
    })

    main.appendChild(box);
}

//Init speech synth
const message = new SpeechSynthesisUtterance();

//Store voices
let voices = [];

function getVoices() {
    voices = window.speechSynthesis.getVoices();
    voices.forEach(voice => {
        const option = document.createElement('option');
        option.value = voice.name;
        option.innerText = `${voice.name}${voice.lang}`;
        voiceSelect.appendChild(option);
    })
}

//Set text message
function setTextMessage(text) {
    message.text = text;
}

//Speak text 
function speakVoice() {
    speechSynthesis.speak(message);
}

//Set voices 
function setVoice(e) {
    message.voice = voices.find(voice => voice.name === e.target.value);
}


//Voices changed
speechSynthesis.addEventListener('voiceschanged', getVoices);

//Change voice
voiceSelect.addEventListener('change', setVoice);

//Open and close text box
toggleBtn.addEventListener('click', () => textBox.classList.toggle('show'));
closeBtn.addEventListener('click', () => textBox.classList.remove('show'));

//Read textarea
readBtn.addEventListener('click', () => {
    setTextMessage(textarea.value);
    speakVoice();
})

getVoices();