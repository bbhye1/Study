"use strict";

const balance = document.getElementById('balance');
const moneyPlus = document.getElementById('money-plus');
const moneyMinus = document.getElementById('money-minus');
const list = document.getElementById('list');
const form = document.getElementById('form');
const amount = document.getElementById('amount');
const text = document.getElementById('text');

const localStorageTransactions = JSON.parse(localStorage.getItem('transactions'));

let transactions = localStorage.getItem('transactions') !== null ? localStorageTransactions : [];

// Add new transaction
function addTransaction(e) {
    e.preventDefault();

    if (amount.value.trim() === '' || text.value.trim() === '') {
        alert('Please add a text and amount');
    } else {
        const transaction = {
            id: generateID(),
            text: text.value,
            amount: +amount.value
        };

        transactions.push(transaction);
        addTransactionDOM(transaction);
        updateValues();
        updateLocalStorage();

        text.value = '';
        amount.value = '';
    }
}

//Get random transaction ID
function generateID() {
    return Math.floor(Math.random() * 100000000);
}

// Add trasactions to DOM list
function addTransactionDOM(transaction) {
    // GEt sign
    const sign = transaction.amount < 0 ? "-$" : "+$"
    const historyList = document.createElement('li');

    // Add class based on value
    historyList.classList.add(transaction.amount < 0 ? "minus" : "plus");
    historyList.innerHTML = `
        ${transaction.text} <span>${sign}${Math.abs(transaction.amount)}</span>
        <button class="delete-btn" onclick="removeTransaction(${transaction.id})" /> x </button>
        `;

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

// Remove transcation by ID
function removeTransaction(id) {
    console.log(id);
    transactions = transactions.filter(transaction => transaction.id !== id);
    updateLocalStorage();
    init();
}

// Update local storage transactions
function updateLocalStorage() {
    localStorage.setItem('transactions', JSON.stringify(transactions));
}
// Init  app
function init() {
    list.innerHTML = ''

    transactions.forEach(addTransactionDOM);
    updateValues();
}

init();
form.addEventListener('submit', addTransaction);