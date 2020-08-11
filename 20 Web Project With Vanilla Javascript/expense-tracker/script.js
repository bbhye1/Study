"use strict";

(function() {
    const balance = document.getElementById('balance');
    const moneyPlus = document.getElementById('money-plus');
    const moneyMinus = document.getElementById('money-minus');
    const list = document.getElementById('list');
    const form = document.getElementById('form');
    const amount = document.getElementById('amount');
    const text = document.getElementById('text');

    const testTransaction = [
        { id: 1, text: 'Flower', amount: -20 },
        { id: 2, text: 'Salary', amount: 300 },
        { id: 3, text: 'Book', amount: -10 },
        { id: 4, text: 'Camera', amount: 150 }
    ];

    let transactions = testTransaction;

    // Add trasactions to DOM list
    function addTransactionDOM(transaction) {
        // GEt sign
        const sign = transaction.amount < 0 ? "-$" : "+$"
        const historyList = document.createElement('li');

        // Add class based on value
        historyList.classList.add(transaction.amount < 0 ? "minus" : "plus");
        historyList.innerHTML = `${transaction.text} <span>${sign}${Math.abs(transaction.amount)}</span><button class="delete-btn">x</button>`

        list.appendChild(historyList);
    }

    // Display balance, income and expense
    function updateValues() {
        const amount = transactions.map(item => item.amount);
        const value = amount.reduce((acc, item) => (acc += item), 0);
        const income = amount
            .filter((item) => item > 0)
            .reduce((acc, item) => (acc += item), 0)
            .toFixed(2);
        const expense = (amount
                .filter((item) => item < 0)
                .reduce((acc, item) => (acc += item), 0) * -1)
            .toFixed(2);

        balance.innerText = `$${value}`;
        moneyPlus.innerText = `$${income}`;
        moneyMinus.innerText = `$${expense}`;

    }

    // Init  app
    function init() {
        list.innerHTML = ''

        transactions.forEach(addTransactionDOM);
        updateValues();
    }

    init();
})();