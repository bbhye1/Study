(function() {
    const clearBtn = document.getElementById('clear');
    const showBtn = document.getElementById('show');
    const hideBtn = document.getElementById('hide');
    const cardsContainer = document.getElementById('cards-container');
    const prevBtn = document.getElementById('prev');
    const nextBtn = document.getElementById('next');
    const addContainer = document.getElementById('add-container');
    const questionEl = document.getElementById('question');
    const answerEl = document.getElementById('answer');
    const addCardBtn = document.getElementById('add-card');
    const currentEl = document.getElementById('current');


    //Keep track of current card
    let currentActiveCard = 0;

    //Store DOM cards
    const cardEl = [];

    //Store card data 
    const cardData = getCardsData();

    //Create all cards 
    function createCards() {
        cardData.forEach((data, index) => createCard(data, index));
    }

    //Create a single card
    function createCard(data, index) {
        const card = document.createElement('div');
        card.classList.add('card');

        if (index === 0) {
            card.classList.add('active');
        }

        card.innerHTML = `
        <div class="inner-card">
            <div class="inner-card-front">
                <p>${data.question}</p>
            </div>
            <div class="inner-card-back">
                <p>${data.answer}</p>
            </div>
        </div>`

        card.addEventListener('click', () => card.classList.toggle('show-answer'));

        //Add to DOM cards
        cardEl.push(card);
        cardsContainer.appendChild(card);

        updateCurrentText();
    }

    function updateCurrentText() {
        currentEl.innerText = `${currentActiveCard + 1} / ${cardData.length}`
    }

    //Get data from local storage
    function getCardsData() {
        const data = JSON.parse(localStorage.getItem('cards'));
        return data === null ? [] : data;
    }


    //Set data to local storage
    function setCardsData(cards) {
        localStorage.setItem('cards', JSON.stringify(cards));
        window.location.reload();
    }

    createCards();

    //Event listener 
    nextBtn.addEventListener('click', () => {
        cardEl[currentActiveCard].className = 'card left';
        currentActiveCard += 1;

        if (currentActiveCard > cardEl.length - 1) {
            currentActiveCard = cardEl.length - 1;
        }

        cardEl[currentActiveCard].className = 'card active';

        updateCurrentText();
    });

    prevBtn.addEventListener('click', () => {
        cardEl[currentActiveCard].className = 'card right';
        currentActiveCard -= 1;

        if (currentActiveCard < 0) {
            currentActiveCard = 0;
        }

        cardEl[currentActiveCard].className = 'card active';

        updateCurrentText();
    });

    //Show add container
    showBtn.addEventListener('click', () => {
        addContainer.classList.add('show');
    });

    //Close add container
    hideBtn.addEventListener('click', () => {
        addContainer.classList.remove('show');
        questionEl.value = '';
        answerEl.value = '';
    });

    //Store data in local storage
    addCardBtn.addEventListener('click', () => {
        const question = questionEl.value;
        const answer = answerEl.value;

        if (question.trim() && answer.trim()) {
            const newCard = { question, answer };

            createCard(newCard);

            questionEl.value = '';
            answerEl.value = '';
            addContainer.classList.remove('show');

            cardData.push(newCard);
            setCardsData(cardData);
        }
    })

    //Clear all cards
    clearBtn.addEventListener('click', () => {
        localStorage.clear();
        cardsContainer.innerHTML = ''
        window.location.reload();
    });

})();