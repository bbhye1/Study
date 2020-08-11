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

    // Init  app
    function init() {
        list.innerHTML = ''

        transactions.forEach(addTransactionDOM);
    }

    init();
})();