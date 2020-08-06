(function() {
    const video = document.getElementById('video');
    const play = document.getElementById('play');
    const stop = document.getElementById('stop');
    const progress = document.getElementById('progress');
    const timestamp = document.getElementById('timestamp');
    let currentTime = 0;

    // play / pause video
    function toggleVideoStatus() {
        if (video.paused) {
            video.play();
        } else {
            video.pause();
        }
    }

    // update play / pause  video
    function updatePlayIcon() {
        if (video.paused) {
            play.innerHTML = `<i class="fa fa-pause fa-2x"></i>`
        } else {
            play.innerHTML = `<i class="fa fa-play fa-2x"></i>`
        }
    }

    // update Progress Timestamp 
    function updateProgress() {

    }

    //set video time to progress 
    function setVideoProgress(e) {
        return true;
    }

    // stop video
    function stopVideo() {
        video.currentTime = 0;
        video.pause();
    }

    // Event Listener
    video.addEventListener('click', toggleVideoStatus);
    video.addEventListener('pause', updatePlayIcon);
    video.addEventListener('play', updatePlayIcon);
    video.addEventListener('timeupdate', updateProgress);

    play.addEventListener('click', toggleVideoStatus);

    stop.addEventListener('click', stopVideo);

    progress.addEventListener('change', setVideoProgress);
})();