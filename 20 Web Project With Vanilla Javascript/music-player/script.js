(function() {
    const musicContainer = document.getElementById('music-container');
    const title = document.getElementById('title');
    const audio = document.getElementById('audio');
    const cover = document.getElementById('cover');

    const prev = document.getElementById('prev');
    const play = document.getElementById('play');
    const next = document.getElementById('next');

    const progressContainer = document.getElementById('progress-container');
    const progress = document.getElementById('progress');

    //song title
    const songs = ['hey', 'ukulele', 'summer'];

    //Keep track of song
    let songIndex = 1;

    //Initially load song details into DOM
    loadSong(songs[songIndex]);

    // Update song details
    function loadSong(song) {
        title.innerText = song;
        audio.src = `music/${song}.mp3`;
        cover.src = `images/${song}.jpg`;
    }

    function playMusic() {
        musicContainer.classList.add('play');
        audio.play();
    }

    function pauseMusic() {
        musicContainer.classList.remove('play');
        audio.pause();
    }

    //Play previous song
    function prevSong() {
        --songIndex;
        if (songIndex < 0) {
            songIndex = songs.length - 1;
        }
        loadSong(songs[songIndex]);
        playMusic();
    }

    //Play next song
    function nextSong() {
        songIndex++;
        if (songIndex > songs.length - 1) {
            songIndex = 0;
        }
        loadSong(songs[songIndex]);
        playMusic();
    }

    //Show progress
    function showProgress(e) {
        const { duration, currentTime } = e.srcElement;
        const progressPercent = currentTime / duration * 100;
        progress.style.width = `${progressPercent}%`
    }

    // Change Time
    function changeTime(e) {
        const width = e.target.clientWidth;
        const clickX = e.offsetX;
        const duration = audio.duration;
        audio.currentTime = clickX / width * duration;
    }

    //Event listener
    play.addEventListener('click', () => {
        const isPlaying = musicContainer.classList.contains('play');
        if (isPlaying) {
            pauseMusic();
        } else {
            playMusic();
        }
    });

    // Chanage song
    prev.addEventListener('click', prevSong);
    next.addEventListener('click', nextSong);

    //Display progress
    audio.addEventListener('timeupdate', showProgress);

    //Change Time
    progressContainer.addEventListener('click', changeTime)

    //Song ends
    audio.addEventListener('ended', nextSong);

})();