(function() {
        const wordElem = document.getElementById('word');
        const wrongLettersElem = document.getElementById('wrong-letters');
        const finalMessage = document.getElementById('final-message');
        const playAgainBtn = document.getElementById('play-button');
        const notification = document.getElementById('notification-container');
        const popup = document.getElementById('popup-container');


        const words = ["apple", "watermelon", "pineapple", "lemon", "grapes"];
        let selectedWord = words[Math.floor(Math.random() * words.length)];

        const correctLetters = [];
        const wrongLetters = [];


        //Show hidden word
        function displayWord() {
            wordElem.innerHTML = `
             ${selectedWord
                .split('')
                .map(letter => `<span class="letter">${correctLetters.includes(letter) ? letter : ' '}</span>`)
                .join('')}
                `;

         const innerWord = wordElem.innerText.replace(/\n/g, '');
        if (innerWord === selectedWord) {
            finalMessage.innerText = 'Congratulations! You won! 😃';
            popup.style.display = 'flex';
                }  
    }


    //Keydown event
    window.addEventListener('keydown', e => {
        if(e.keyCode >= 65 && e.keyCode <= 90) {
            const letter = e.key;
          if(selectedWord.includes(letter)) {
             if(!correctLetters.includes(letter)) {
                correctLetters.push(letter);
                displayWord()
             } else {
                showNotification();
             }
          } else {
            if(!wrongLetters.includes(letter)) {
                wrongLetters.push(letter);
                displayWord()
            } else {
               showNotification();
            }
         }
        }
    })

    // Show notification 
    function showNotification() {
        notification.classList.add('show'); 

        setTimeout(()=>{
            notification.classList.remove('show')},2000);
    }

    

    displayWord();
})();