(function() {
    const currencyOne = document.getElementById('currency-one');
    const amountOne = document.getElementById('amount-one');
    const currencyTwo = document.getElementById('currency-two');
    const amountTwo = document.getElementById('amount-two');
    const swap = document.getElementById('swap');
    const rateElem = document.getElementById('rate');


    function calculate() {
        const currencyOneVal = currencyOne.value;
        const currencyTwoVal = currencyTwo.value;

        fetch(`https://api.exchangerate-api.com/v4/latest/USD`)
            .then(res => res.json())
            .then(data => {
                const rate = data.rates[currencyTwoVal];
                rateElem.innerHTML = `1 ${currencyOneVal} = ${rate} ${currencyTwoVal}`
                amountTwo.value = (amountOne.value * rate).toFixed(2);
            });
    }

    currencyOne.addEventListener('change', calculate);
    amountOne.addEventListener('input', calculate);
    currencyTwo.addEventListener('change', calculate);
    amountTwo.addEventListener('input', calculate);

    swap.addEventListener('click', () => {
        const temCurrency = currencyOne.value;
        currencyOne.value = currencyTwo.value;
        currencyTwo.value = temCurrency;
        calculate();
    });

    calculate();
})();