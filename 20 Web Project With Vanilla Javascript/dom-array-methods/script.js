(function() {
    const main = document.getElementById('main');
    const addUserBtn = document.querySelector('.add-user');
    const doubleMoneyBtn = document.querySelector('.double-money');
    const showMillionaries = document.querySelector('.show-millionaires');
    const sortBtn = document.querySelector('.sort');
    const calculateWealthBtn = document.querySelector('.calculate-wealth');


    let data = [];
    getRandomUser();
    getRandomUser();

    // Fetch random user and money
    async function getRandomUser() {
        const res = await fetch(`https://randomuser.me/api`);
        const data = await res.json();
        const user = data.results[0].name;
        const newUser = {
            name: `${user.first} ${user.last}`,
            money: Math.floor(Math.random() * 1000000)
        };
        addData(newUser);
    }

    // Double everyone's money
    function doubleMoney() {
        data = data.map((item) => {
            // item.money = item.money * 2;
            // return item;
            return {...item, money: item.money * 2 }
        });
        updateDOM();
    }

    // Add new obj to data arr
    function addData(newUser) {
        data.push(newUser);

        updateDOM();
    }

    // Update DOM
    function updateDOM(provideData = data) {
        main.innerHTML = `<h2><strong>Person</strong> Wealth</h2>`
        provideData.forEach(item => {
            const userElem = document.createElement('div');
            const money = formatMoney(item.money);
            userElem.classList.add('person');
            userElem.innerHTML = `<strong>${item.name}</strong>${money}`
            main.appendChild(userElem);
        })
    }

    // Format number as money 
    function formatMoney(number) {
        return number.toLocaleString('en-US', {
            style: 'currency',
            currency: 'USD',
        });
    }

    //Event 
    addUserBtn.addEventListener('click', getRandomUser);
    doubleMoneyBtn.addEventListener('click', doubleMoney);
})();