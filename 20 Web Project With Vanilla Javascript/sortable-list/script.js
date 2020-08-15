const draggableList = document.getElementById('draggable-list');
const checkBtn = document.getElementById('check');



//Get latest date
function getDate() {
    const yeaterday = new Date(new Date() - 1000 * 60 * 60 * 24);
    const year = yeaterday.getFullYear()
    let mon = (yeaterday.getMonth()) + 1
    let date = yeaterday.getDate();

    if (mon < 10) {
        mon = '0' + mon
    }
    if (date < 10) {
        date = '0' + date
    }
    return latestDate = year.toString() + mon.toString() + date.toString();
}

//Get movies from API
async function getMovies() {
    const res = await fetch(`http://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=430156241533f1d058c603178cc3ca0e&targetDt=${getDate()}`);
    const data = await res.json();
    const movies = data.boxOfficeResult.dailyBoxOfficeList;
    return movies;
}


const listItems = [];
let dragMovieIndex;

//create list items into DOM
async function createList() {
    const movies = await getMovies();
    [...movies]
    .map(a => ({ value: a, sort: Math.random() }))
        .sort((a, b) => a.sort - b.sort)
        .map(a => a.value)
        .forEach((movie, index) => {
            const listItem = document.createElement('li');
            listItem.setAttribute('data-rank', movie.rank);
            listItem.setAttribute('data-index', index);
            listItem.innerHTML = `
                <span>${index + 1}</span>
                    <div class="draggable" draggable="true" >
                        <p>${movie.movieNm}</p> <i class="fas fa-grip-lines"></i></div>
            `
            listItems.push(listItem);

            draggableList.appendChild(listItem);
        });
}
createList();

// Event listeners
function addEventListeners() {
    const draggables = document.querySelectorAll('.draggable');
    const dragListItems = document.querySelectorAll('.draggable-list li');
}