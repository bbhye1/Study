(function() {
    const stageElem = document.querySelector('.stage');
    const houseElem = document.querySelector('.house');
    let maxScrollValue;

    function resizeHandler() {
        maxScrollValue = document.body.offsetHeight - window.innerHeight
    }

    function scrollHandler() {
        const scrollPer = pageYOffset / maxScrollValue;
        const zMove = scrollPer * 980 - 490;
        console.log(zMove);
        houseElem.style.transform = 'translateZ(' + zMove + 'vw)';

    }
    window.addEventListener('scroll', scrollHandler);
    resizeHandler();
})();