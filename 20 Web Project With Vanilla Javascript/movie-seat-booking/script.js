(function() {
    const container = document.querySelector('.container');
    const selected = document.querySelectorAll('.row .seat:not(.occupied)');
    const movie = document.getElementById('movie');
    const count = document.getElementById('count');
    const total = document.getElementById('total');

    let moviePrice = +movie.value;

    function updateSelectedCount() {
        const selectedSeat = document.querySelectorAll('.row .seat.selected');
        const selectedSeatCount = +selectedSeat.length;

        count.innerText = selectedSeatCount;
        total.innerText = selectedSeatCount * moviePrice;
    }
    window.addEventListener('change', e => {
        moviePrice = +e.target.value;
        updateSelectedCount();
    })
    window.addEventListener('click', e => {
        if (e.target.classList.contains('seat') && !e.target.classList.contains('occupied')) {
            e.target.classList.toggle('selected');
        }
        updateSelectedCount();
    })
})();