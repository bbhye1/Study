(function() {
    const houseElem = document.querySelector('.house');
    const stageElem = document.querySelector('.stage');
    let maxScrollValue;

    function resizeHandler() {
        maxScrollValue = document.body.offsetHeight - window.innerHeight
    }

    function scrollHandler() {
        const scrollPer = pageYOffset / maxScrollValue;
        const zMove = scrollPer * 980 - 490;
        houseElem.style.transform = 'translateZ(' + zMove + 'vw)';

    }

    function mouseHandler(e) {
        const pointX = -1 + (e.clientX / window.innerWidth) * 2;
        const pointY = 1 - (e.clientY / window.innerHeight) * 2;
        console.log(pointX, pointY)
        stageElem.style.transform = 'rotateY(' + pointX * 7 + 'deg) rotateX(' + pointY * 7 + 'deg)'
    }
    window.addEventListener('mousemove', mouseHandler);
    window.addEventListener('scroll', scrollHandler);
    resizeHandler();
})();