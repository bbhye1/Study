(function() {
    const houseElem = document.querySelector('.house');
    const stageElem = document.querySelector('.stage');
    const barElem = document.querySelector('.progress-bar');
    let maxScrollValue;

    function resizeHandler() {
        maxScrollValue = document.body.offsetHeight - window.innerHeight
    }

    function scrollHandler() {
        const scrollPer = pageYOffset / maxScrollValue;
        const zMove = scrollPer * 980 - 490;
        houseElem.style.transform = 'translateZ(' + zMove + 'vw)';

        barElem.style.width = scrollPer * 100 + 'vw';
    }

    function mouseHandler(e) {
        const pointX = -1 + (e.clientX / window.innerWidth) * 2;
        const pointY = 1 - (e.clientY / window.innerHeight) * 2;
        stageElem.style.transform = 'rotateY(' + pointX * 7 + 'deg) rotateX(' + pointY * 7 + 'deg)'
    }

    function clickHandler(e) {
        new Character({
            Xpos: e.clientX / innerWidth * 90,
            speed: Math.random() * 0.5
        });
    }
    window.addEventListener('click', clickHandler);
    window.addEventListener('mousemove', mouseHandler);
    window.addEventListener('scroll', scrollHandler);
    window.addEventListener('resize', resizeHandler);
    resizeHandler();
})();