(() => {
    const sceneInfo = [{
            type: "sticky",
            heightScrollNum: 5,
            scrollHeight: 0,
            objs: { container: document.querySelector("#scroll-section-0") },
        },
        {
            type: "normal",
            heightScrollNum: 5,
            scrollHeight: 0,
            objs: { container: document.querySelector("#scroll-section-1") },
        },
        {
            type: "sticky",
            heightScrollNum: 5,
            scrollHeight: 0,
            objs: { container: document.querySelector("#scroll-section-2") },
        },
        {
            type: "sticky",
            heightScrollNum: 5,
            scrollHeight: 0,
            objs: { container: document.querySelector("#scroll-section-3") },
        },
    ];

    let yOffset = 0;
    let prevScrollHeight = 0;
    let currentScene = 0;

    function setLayout() {
        for (let i = 0; i < sceneInfo.length; i++) {
            sceneInfo[i].scrollHeight = sceneInfo[i].heightScrollNum * window.innerHeight;
            sceneInfo[i].objs.container.style.height = `${sceneInfo[i].scrollHeight}px`;
        }

        let totalScrollHeight = 0;
        for (let i = 0; i < sceneInfo.length; i++) {
            totalScrollHeight += sceneInfo[currentScene].scrollHeight;
            if (totalScrollHeight >= yOffset) {
                currentScene = i;
                break;
            }
        }
        document.body.setAttribute('id', `show-scene-${currentScene}`);

    }

    function scrollLoop() {
        prevScrollHeight = 0;
        for (let i = 0; i < currentScene; i++) {
            prevScrollHeight += sceneInfo[i].scrollHeight;
        }

        if (yOffset > prevScrollHeight + sceneInfo[currentScene].scrollHeight) {
            currentScene++;
            document.body.setAttribute('id', `show-scene-${currentScene}`);

        }
        if (yOffset < prevScrollHeight) {
            if (currentScene < 0) return;
            currentScene--;
            document.body.setAttribute('id', `show-scene-${currentScene}`);

        }
    }

    window.addEventListener('load', setLayout);
    window.addEventListener("resize", setLayout);
    window.addEventListener('scroll', () => {
        yOffset = window.pageYOffset;
        scrollLoop();
    });

    setLayout();

})();