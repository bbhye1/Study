(function() {
    const clearBtn = document.getElementById('clear');
    const showBtn = document.getElementById('show');
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
    const cardData = [{
            question: 'question 1',
            answer: 'answer 1'
        },
        {
            question: 'question 2',
            answer: 'answer 2'
        },
        {
            question: 'question 3',
            answer: 'answer 3'
        }
    ]


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

    createCards();
})();