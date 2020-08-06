(function() {
    const container = document.querySelector('.container');
    const selected = document.querySelectorAll('.row .seat:not(.occupied)');
    const movie = document.getElementById('movie');
    const count = document.getElementById('count');
    const total = document.getElementById('total');

    populateUI();

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

    // Get data form localstorage and populate UI
    function populateUI() {
        const selectedSeats = JSON.parse(localStorage.getItem('selectedSeats'));
        if (selectedSeats !== null && selectedSeats.length > 0) {
            selected.forEach((seat, index) => {
                if (selectedSeats.indexOf(index) > -1) {
                    seat.classList.add('selected');
                }
            });
        }
        const selectedMovieIndex = JSON.parse(localStorage.getItem('selectedMovieIndex'));
        if (selectedMovieIndex !== null) {
            movie.selectedIndex = selectedMovieIndex;
        }
    }


    // Movie select event
    movie.addEventListener('change', e => {
        moviePrice = +e.target.value;
        setMovieData(e.target.selectedIndex, e.target.value);
        updateSelectedCount();
    });

    // Seat click event
    container.addEventListener('click', e => {
        if (e.target.classList.contains('seat') && !e.target.classList.contains('occupied')) {
            e.target.classList.toggle('selected');
            updateSelectedCount();
        }

    });

    //Initial count and total set
    updateSelectedCount();
})();