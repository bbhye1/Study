(() => {
    const sceneInfo = [{
            type: 'sticky',
            heightNum: 5,
            scrollHeight: 0,
            objs: {
                container: document.querySelector('#scroll-section-0'),
                messageA: document.querySelector('#scroll-section-0 .main-message.a'),
                messageB: document.querySelector('#scroll-section-0 .main-message.b'),
                messageC: document.querySelector('#scroll-section-0 .main-message.c'),
                messageD: document.querySelector('#scroll-section-0 .main-message.d'),
                canvas: document.querySelector('#video-canvas-0'),
                context: document.querySelector('#video-canvas-0').getContext('2d'),
                videoImages: []
            },
            values: {
                videoImagesCount: 430,
                imageSequence: [0, 429],
                canvas_opacity_out: [1, 0, { start: 0.9, end: 1 }],

                messageA_opacity_in: [0, 1, { start: 0.1, end: 0.2 }],
                messageA_opacity_out: [1, 0, { start: 0.25, end: 0.3 }],
                messageB_opacity_in: [0, 1, { start: 0.3, end: 0.4 }],
                messageB_opacity_out: [1, 0, { start: 0.45, end: 0.5 }],
                messageC_opacity_in: [0, 1, { start: 0.5, end: 0.6 }],
                messageC_opacity_out: [1, 0, { start: 0.65, end: 0.7 }],
                messageD_opacity_in: [0, 1, { start: 0.7, end: 0.8 }],
                messageD_opacity_out: [1, 0, { start: 0.85, end: 0.9 }],

                messageA_translateY_in: [20, 0, { start: 0.1, end: 0.2 }],
                messageA_translateY_out: [0, -20, { start: 0.25, end: 0.3 }],
                messageB_translateY_in: [20, 0, { start: 0.3, end: 0.4 }],
                messageB_translateY_out: [0, -20, { start: 0.45, end: 0.5 }],
                messageC_translateY_in: [20, 0, { start: 0.5, end: 0.6 }],
                messageC_translateY_out: [0, -20, { start: 0.65, end: 0.7 }],
                messageD_translateY_in: [20, 0, { start: 0.7, end: 0.8 }],
                messageD_translateY_out: [0, -20, { start: 0.85, end: 0.9 }],
            }
        },
        {
            type: 'normal',
            scrollHeight: 0,
            objs: {
                container: document.querySelector('#scroll-section-1'),
            },
            values: {

            }
        }, {
            type: 'sticky',
            heightNum: 5,
            scrollHeight: 0,
            objs: {
                container: document.querySelector('#scroll-section-2'),
                messageA: document.querySelector('#scroll-section-2 .a'),
                messageB: document.querySelector('#scroll-section-2 .b'),
                messageC: document.querySelector('#scroll-section-2 .c'),
                pinB: document.querySelector('#scroll-section-2 .b .pin'),
                pinC: document.querySelector('#scroll-section-2 .c .pin'),
                canvas: document.querySelector('#video-canvas-2'),
                context: document.querySelector('#video-canvas-2').getContext('2d'),
                videoImages: []
            },
            values: {
                videoImagesCount: 309,
                imageSequence: [0, 308],
                canvas_opacity_in: [0, 1, { start: 0, end: 0.1 }],
                canvas_opacity_out: [1, 0, { start: 0.9, end: 1 }],
                messageA_translateY_in: [20, 0, { start: 0.15, end: 0.2 }],
                messageB_translateY_in: [30, 0, { start: 0.6, end: 0.65 }],
                messageC_translateY_in: [30, 0, { start: 0.87, end: 0.92 }],
                messageA_opacity_in: [0, 1, { start: 0.25, end: 0.3 }],
                messageB_opacity_in: [0, 1, { start: 0.6, end: 0.65 }],
                messageC_opacity_in: [0, 1, { start: 0.87, end: 0.92 }],
                messageA_translateY_out: [0, -20, { start: 0.4, end: 0.45 }],
                messageB_translateY_out: [0, -20, { start: 0.68, end: 0.73 }],
                messageC_translateY_out: [0, -20, { start: 0.95, end: 1 }],
                messageA_opacity_out: [1, 0, { start: 0.4, end: 0.45 }],
                messageB_opacity_out: [1, 0, { start: 0.68, end: 0.73 }],
                messageC_opacity_out: [1, 0, { start: 0.95, end: 1 }],
                pinB_scaleY: [0.5, 1, { start: 0.6, end: 0.65 }],
                pinC_scaleY: [0.5, 1, { start: 0.87, end: 0.92 }]
            }
        }, {
            type: 'sticky',
            heightNum: 5,
            scrollHeight: 0,
            objs: {
                container: document.querySelector('#scroll-section-3'),
                canvasCaption: document.querySelector('.canvas-caption'),
                canvas: document.querySelector('.image-blend-canvas'),
                context: document.querySelector('.image-blend-canvas').getContext('2d'),
                images: [],
            },
            values: {
                imageCount: 2,
                imageSequence: [0, 1],
                rect1X: [0, 0, { start: 0, end: 0 }],
                rect2X: [0, 0, { start: 0, end: 0 }],
                rectStartY: 0,
                blendHeight: [0, 0, { start: 0, end: 0 }],
                canvasScale: [0, 0, { start: 0, end: 0 }],
                canvasCaption_opacity_in: [0, 1, { start: 0, end: 0 }],
                canvasCaption_translateY_in: [20, 0, { start: 0, end: 0 }],


            }
        }
    ];

    let YOffset;
    let currentScene = 0;
    let prevScrollHeight = 0;
    let enterNewScene = false; //새로운 씬이 시작되는 순간 true

    let delayedYoffset = 0;
    let rafId;
    let rafState;
    const acc = 0.1;


    function setLayout() {
        //  각 스크롤 섹션의 높이 셋팅
        for (let i = 0; i < sceneInfo.length; i++) {
            if (sceneInfo[i].type === 'normal') {
                sceneInfo[i].scrollHeight = sceneInfo[i].objs.container.offsetHeight;
            } else if (sceneInfo[i].type === 'sticky') {
                sceneInfo[i].scrollHeight = window.innerHeight * sceneInfo[i].heightNum;
            }
            sceneInfo[i].objs.container.style.height = `${sceneInfo[i].scrollHeight}px`
        }
        YOffset = window.pageYOffset;

        let totalScrollHeight = 0;
        for (let i = 0; i < sceneInfo.length; i++) {
            totalScrollHeight += sceneInfo[currentScene].scrollHeight;
            if (totalScrollHeight >= YOffset) {
                currentScene = i;
                break;
            }
        }
        document.body.setAttribute('id', `scroll-active-${currentScene}`);

        const widthRatio = window.innerWidth / 1920;
        const heightRatio = window.innerHeight / 1080;
        let canvasRatio;
        if (widthRatio <= heightRatio) {
            canvasRatio = heightRatio;
        } else {
            canvasRatio = widthRatio;
        }

        sceneInfo[0].objs.canvas.style.transform = `translate3d(-50%, -50%, 0) scale(${canvasRatio})`;
        sceneInfo[2].objs.canvas.style.transform = `translate3d(-50%, -50%, 0) scale(${canvasRatio})`;

    }

    function scrollLoop() {
        prevScrollHeight = 0;
        enterNewScene = false;

        for (let i = 0; i < currentScene; i++) {
            prevScrollHeight += sceneInfo[i].scrollHeight;
        }

        if (delayedYoffset > prevScrollHeight + sceneInfo[currentScene].scrollHeight) {
            enterNewScene = true;
            currentScene++;
            document.body.setAttribute('id', `scroll-active-${currentScene}`);
        }
        if (delayedYoffset < prevScrollHeight) {
            enterNewScene = true;
            if (currentScene === 0) return;
            currentScene--;
            document.body.setAttribute('id', `scroll-active-${currentScene}`);
        }

        if (enterNewScene) return;
        playAnimation();
    }

    function playAnimation() {
        const objs = sceneInfo[currentScene].objs;
        const values = sceneInfo[currentScene].values;
        const currentYOffset = YOffset - prevScrollHeight;
        const scrollHeight = sceneInfo[currentScene].scrollHeight;
        const scrollRatio = currentYOffset / scrollHeight;

        switch (currentScene) {
            case 0:
                // Image Sequence 
                // let sequence = Math.round(calcValues(values.imageSequence, currentYOffset));
                // objs.context.drawImage(objs.videoImages[sequence], 0, 0);

                if (scrollRatio > 0.9) {
                    objs.canvas.style.opacity = calcValues(values.canvas_opacity_out, currentYOffset);
                }

                if (scrollRatio <= 0.22) {
                    objs.messageA.style.opacity = calcValues(values.messageA_opacity_in, currentYOffset);
                    objs.messageA.style.transform = `translateY(${calcValues(values.messageA_translateY_in,currentYOffset)}%)`;

                } else {
                    objs.messageA.style.opacity = calcValues(values.messageA_opacity_out, currentYOffset);
                    objs.messageA.style.transform = `translateY(${calcValues(values.messageA_translateY_out,currentYOffset)}%)`;
                }
                if (scrollRatio <= 0.42) {
                    objs.messageB.style.opacity = calcValues(values.messageB_opacity_in, currentYOffset);
                    objs.messageB.style.transform = `translateY(${calcValues(values.messageB_translateY_in,currentYOffset)}%)`;

                } else {
                    objs.messageB.style.opacity = calcValues(values.messageB_opacity_out, currentYOffset);
                    objs.messageB.style.transform = `translateY(${calcValues(values.messageB_translateY_out,currentYOffset)}%)`;
                }
                if (scrollRatio <= 0.62) {
                    objs.messageC.style.opacity = calcValues(values.messageC_opacity_in, currentYOffset);
                    objs.messageC.style.transform = `translateY(${calcValues(values.messageC_translateY_in,currentYOffset)}%)`;

                } else {
                    objs.messageC.style.opacity = calcValues(values.messageC_opacity_out, currentYOffset);
                    objs.messageC.style.transform = `translateY(${calcValues(values.messageC_translateY_out,currentYOffset)}%)`;
                }
                if (scrollRatio <= 0.82) {
                    objs.messageD.style.opacity = calcValues(values.messageD_opacity_in, currentYOffset);
                    objs.messageD.style.transform = `translateY(${calcValues(values.messageD_translateY_in,currentYOffset)}%)`;

                } else {
                    objs.messageD.style.opacity = calcValues(values.messageD_opacity_out, currentYOffset);
                    objs.messageD.style.transform = `translateY(${calcValues(values.messageD_translateY_out,currentYOffset)}%)`;
                }


                break;
            case 1:

                break;

            case 2:
                // let sequence2 = Math.round(calcValues(values.imageSequence, currentYOffset));
                // objs.context.drawImage(objs.videoImages[sequence2], 0, 0);
                objs.canvas.style.opacity = calcValues(values.canvas_opacity_in, currentYOffset);
                if (scrollRatio > 0.9) {
                    objs.canvas.style.opacity = calcValues(values.canvas_opacity_out, currentYOffset);

                }
                if (scrollRatio <= 0.32) {
                    // in
                    objs.messageA.style.opacity = calcValues(values.messageA_opacity_in, currentYOffset);
                    objs.messageA.style.transform = `translate3d(0, ${calcValues(values.messageA_translateY_in, currentYOffset)}%, 0)`;
                } else {
                    // out
                    objs.messageA.style.opacity = calcValues(values.messageA_opacity_out, currentYOffset);
                    objs.messageA.style.transform = `translate3d(0, ${calcValues(values.messageA_translateY_out, currentYOffset)}%, 0)`;
                }

                if (scrollRatio <= 0.67) {
                    // in
                    objs.messageB.style.transform = `translate3d(0, ${calcValues(values.messageB_translateY_in, currentYOffset)}%, 0)`;
                    objs.messageB.style.opacity = calcValues(values.messageB_opacity_in, currentYOffset);
                    objs.pinB.style.transform = `scaleY(${calcValues(values.pinB_scaleY, currentYOffset)})`;
                } else {
                    // out
                    objs.messageB.style.transform = `translate3d(0, ${calcValues(values.messageB_translateY_out, currentYOffset)}%, 0)`;
                    objs.messageB.style.opacity = calcValues(values.messageB_opacity_out, currentYOffset);
                    objs.pinB.style.transform = `scaleY(${calcValues(values.pinB_scaleY, currentYOffset)})`;
                }

                if (scrollRatio <= 0.93) {
                    // in
                    objs.messageC.style.transform = `translate3d(0, ${calcValues(values.messageC_translateY_in, currentYOffset)}%, 0)`;
                    objs.messageC.style.opacity = calcValues(values.messageC_opacity_in, currentYOffset);
                    objs.pinC.style.transform = `scaleY(${calcValues(values.pinC_scaleY, currentYOffset)})`;
                } else {
                    // out
                    objs.messageC.style.transform = `translate3d(0, ${calcValues(values.messageC_translateY_out, currentYOffset)}%, 0)`;
                    objs.messageC.style.opacity = calcValues(values.messageC_opacity_out, currentYOffset);
                    objs.pinC.style.transform = `scaleY(${calcValues(values.pinC_scaleY, currentYOffset)})`;
                }

                if (scrollRatio < 0.9) {
                    const objs = sceneInfo[3].objs;
                    const values = sceneInfo[3].values;
                    const widthRatio = window.innerWidth / objs.canvas.width;
                    const heightRatio = window.innerHeight / objs.canvas.height;
                    let canvasRatio;

                    if (widthRatio <= heightRatio) {
                        canvasRatio = heightRatio;
                    } else {
                        canvasRatio = widthRatio;
                    }

                    objs.canvas.style.transform = `scale(${canvasRatio})`;
                    objs.context.drawImage(objs.images[0], 0, 0);

                    const recalculatedInnerWidth = document.body.offsetWidth / canvasRatio;

                    const whiteRectWidth = recalculatedInnerWidth * 0.15;
                    values.rect1X[0] = (objs.canvas.width - recalculatedInnerWidth) / 2;
                    values.rect1X[1] = values.rect1X[0] - whiteRectWidth;
                    values.rect2X[0] = values.rect1X[0] + recalculatedInnerWidth - whiteRectWidth;
                    values.rect2X[1] = values.rect2X[0] + whiteRectWidth;

                    // 좌우 흰색 박스 그리기 
                    objs.context.fillRect(values.rect1X[0], 0, parseInt(whiteRectWidth), objs.canvas.height);
                    objs.context.fillRect(values.rect2X[0], 0, parseInt(whiteRectWidth), objs.canvas.height);
                }


                break;

            case 3:
                // 가로세로 모두 꽉 차게 하기 위해서 여기서 세팅(계산 필요)
                const widthRatio = window.innerWidth / objs.canvas.width;
                const heightRatio = window.innerHeight / objs.canvas.height;
                let canvasRatio;

                if (widthRatio <= heightRatio) {
                    canvasRatio = heightRatio;
                } else {
                    canvasRatio = widthRatio;
                }

                objs.canvas.style.transform = `scale(${canvasRatio})`;
                objs.context.drawImage(objs.images[0], 0, 0);

                // 캔버스 사이즈에 맞춰 가정한 innerWidth
                const recalculatedInnerWidth = document.body.offsetWidth / canvasRatio;

                if (!values.rectStartY) {
                    values.rectStartY = objs.canvas.offsetTop + (objs.canvas.height - objs.canvas.height * canvasRatio) / 2;
                    // values.rectStartY = objs.canvas.getBoundingClientRect().top;
                    values.rect1X[2].start = (window.innerHeight / 2) / scrollHeight;
                    values.rect2X[2].start = (window.innerHeight / 2) / scrollHeight;
                    values.rect1X[2].end = values.rectStartY / scrollHeight;
                    values.rect2X[2].end = values.rectStartY / scrollHeight;
                }

                const whiteRectWidth = recalculatedInnerWidth * 0.15;
                values.rect1X[0] = (objs.canvas.width - recalculatedInnerWidth) / 2;
                values.rect1X[1] = values.rect1X[0] - whiteRectWidth;
                values.rect2X[0] = values.rect1X[0] + recalculatedInnerWidth - whiteRectWidth;
                values.rect2X[1] = values.rect2X[0] + whiteRectWidth;

                // 좌우 흰색 박스 그리기 
                objs.context.fillRect(parseInt(calcValues(values.rect1X, currentYOffset)), 0, parseInt(whiteRectWidth), objs.canvas.height);
                objs.context.fillRect(parseInt(calcValues(values.rect2X, currentYOffset)), 0, parseInt(whiteRectWidth), objs.canvas.height);

                if (scrollRatio < values.rect1X[2].end) {
                    // step 1
                    objs.canvas.classList.remove('sticky');

                } else {
                    // step 2
                    objs.canvas.classList.add('sticky');
                    objs.canvas.style.top = `${-(objs.canvas.height - objs.canvas.height * canvasRatio) / 2}px`;

                    values.blendHeight[0] = 0;
                    values.blendHeight[1] = objs.canvas.height;
                    values.blendHeight[2].start = values.rect1X[2].end;
                    values.blendHeight[2].end = values.blendHeight[2].start + 0.2;

                    const blendHeight = calcValues(values.blendHeight, currentYOffset);

                    objs.context.drawImage(objs.images[1],
                        0, objs.canvas.height - blendHeight, objs.canvas.width, blendHeight,
                        0, objs.canvas.height - blendHeight, objs.canvas.width, blendHeight
                    );
                    // objs.context.drawImage(image, x, y, width, height);

                    if (scrollRatio > values.blendHeight[2].end) {
                        values.canvasScale[0] = canvasRatio;
                        values.canvasScale[1] = document.body.offsetWidth / (objs.canvas.width * 1.5);
                        values.canvasScale[2].start = values.blendHeight[2].end;
                        values.canvasScale[2].end = values.canvasScale[2].start + 0.2;

                        objs.canvas.style.transform = `scale(${calcValues(values.canvasScale,currentYOffset)})`
                        objs.canvas.style.marginTop = '0px'

                    }

                    if (scrollRatio > values.canvasScale[2].end && values.canvasScale[2].end > 0) {
                        objs.canvas.classList.remove('sticky');
                        objs.canvas.style.marginTop = `${scrollHeight *0.4}px`

                        values.canvasCaption_opacity_in[2].start = values.canvasScale[2].end;
                        values.canvasCaption_opacity_in[2].end = values.canvasCaption_opacity_in[2].start + 0.1;
                        values.canvasCaption_translateY_in[2].start = values.canvasScale[2].end;
                        values.canvasCaption_translateY_in[2].end = values.canvasCaption_translateY_in[2].start + 0.1;

                        objs.canvasCaption.style.opacity = `${calcValues(values.canvasCaption_opacity_in, currentYOffset)}`;
                        objs.canvasCaption.style.transfrom = `translateY(${calcValues(values.canvasCaption_translateY_in, currentYOffset)}%)`
                    }
                }
                break;
        }

    }

    function calcValues(values, currentYOffset) {
        let rv;
        // 현재 씬(스크롤섹션)에서 스크롤된 범위를 비율로 구하기
        const scrollHeight = sceneInfo[currentScene].scrollHeight;
        const scrollRatio = currentYOffset / scrollHeight;

        if (values.length === 3) {
            // start ~ end 사이에 애니메이션 실행
            const partScrollStart = values[2].start * scrollHeight;
            const partScrollEnd = values[2].end * scrollHeight;
            const partScrollHeight = partScrollEnd - partScrollStart;

            if (currentYOffset >= partScrollStart && currentYOffset <= partScrollEnd) {
                rv = (currentYOffset - partScrollStart) / partScrollHeight * (values[1] - values[0]) + values[0];
            } else if (currentYOffset < partScrollStart) {
                rv = values[0];
            } else if (currentYOffset > partScrollEnd) {
                rv = values[1];
            }

        } else {
            rv = scrollRatio * (values[1] - values[0]) + values[0];
        }
        return rv;
    }

    function setCanvasImages() {
        const objs1 = sceneInfo[0].objs;
        const values1 = sceneInfo[0].values;

        for (let i = 0; i < values1.videoImagesCount; i++) {
            const image = new Image();
            image.src = `../video2/001/${i+1}.jpg`
            objs1.videoImages.push(image);
        }

        const objs2 = sceneInfo[2].objs;
        const values2 = sceneInfo[2].values;

        for (let i = 0; i < values2.videoImagesCount; i++) {
            const image = new Image();
            image.src = `../video2/002/${i+1}.jpg`
            objs2.videoImages.push(image);
        }

        const objs3 = sceneInfo[3].objs;
        const values3 = sceneInfo[3].values;

        for (let i = 0; i < values3.imageCount; i++) {
            const image = new Image();
            image.src = `../images2/coffee${i+1}.jpg`;
            objs3.images.push(image);
        }
    }

    function checkMenu() {
        if (YOffset > 44) {
            document.querySelector('.local-nav').classList.add('fixed');
        } else {
            document.querySelector('.local-nav').classList.remove('fixed');

        }
    }

    function loop() {
        delayedYoffset = delayedYoffset + (YOffset - delayedYoffset) * acc;
        if (!enterNewScene) {


            if (currentScene === 0 || currentScene === 2) {
                const currentYOffset = delayedYoffset - prevScrollHeight;
                const objs = sceneInfo[currentScene].objs;
                const values = sceneInfo[currentScene].values;
                let sequence = Math.round(calcValues(values.imageSequence, currentYOffset));

                if (objs.videoImages[sequence]) {
                    objs.context.drawImage(objs.videoImages[sequence], 0, 0);
                }
            }
        }
        rafId = requestAnimationFrame(loop);


        if (Math.abs(YOffset - delayedYoffset) < 1) {
            cancelAnimationFrame(rafId);
            rafState = false;
        }
    }


    window.addEventListener('resize', () => {
        if (window.innerWidth > 600) {
            setLayout();
            sceneInfo[3].values.rectStartY = 0;
        }
    });
    window.addEventListener('scroll', () => {
        YOffset = window.pageYOffset;

        scrollLoop();
        checkMenu();

        if (!rafState) {
            rafId = requestAnimationFrame(loop);
            rafState = true;
        }
    });

    window.addEventListener('load', () => {
        setLayout();
        sceneInfo[0].objs.context.drawImage(sceneInfo[0].objs.videoImages[0], 0, 0);

        document.body.classList.remove('before-load');
    });
    window.addEventListener('orientationchange', setLayout);
    document.querySelector('.loading').addEventListener('transitionend', (e) => {
        document.body.removeChild(e.currentTarget);
    })
    setCanvasImages();

})();