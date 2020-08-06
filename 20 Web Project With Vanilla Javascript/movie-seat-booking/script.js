(function() {
    const container = document.querySelector('.container');
    const selected = document.querySelectorAll('.row .seat:not(.occupied)');
    const movie = document.getElementById('movie');
    const count = document.getElementById('count');
    const total = document.getElementById('total');

    let moviePrice = +movie.value;


    // Save selected movie index and price
    function setMovieData(movieIndex, moviePrice) {
        localStorage.setItem('selectedMovieIndex', movieIndex);
        localStorage.setItem('selectedMoviePrice', moviePrice);
    }

    // Update total and count
    function updateSelectedCount() {
        const selectedSeat = document.querySelectorAll('.row .seat.selected');

        const seatsIndex = [...selectedSeat].map(seat => [...selected].indexOf(seat));
        localStorage.setItem('selectedSeats', JSON.stringify(seatsIndex));
        const selectedSeatCount = +selectedSeat.length;

        count.innerText = selectedSeatCount;
        total.innerText = selectedSeatCount * moviePrice;
    }

    // Movie select event
    movie.addEventListener('change', e => {
        moviePrice = +e.target.value;
        updateSelectedCount();
        console.log(e.target.selectedIndex);
        setMovieData(e.target.selectedIndex, e.target.value);
    })

    // Seat click event
    container.addEventListener('click', e => {
        if (e.target.classList.contains('seat') && !e.target.classList.contains('occupied')) {
            e.target.classList.toggle('selected');
        }
        updateSelectedCount();
    })
})();