function Character(info) {
    this.mainElem = document.createElement('div');
    this.mainElem.classList.add('character');
    this.mainElem.style.left = info.Xpos + '%';
    this.mainElem.innerHTML =
        ` <div class="character-face-con character-head">
                <div class="character-face character-head-face face-front"></div>
                <div class="character-face character-head-face face-back"></div>
                </div>
                <div class="character-face-con character-torso">
                <div class="character-face character-torso-face face-front"></div>
                <div class="character-face character-torso-face face-back"></div>
                </div>
                <div class="character-face-con character-arm character-arm-right">
                <div class="character-face character-arm-face face-front"></div>
                <div class="character-face character-arm-face face-back"></div>
                </div>
                <div class="character-face-con character-arm character-arm-left">
                <div class="character-face character-arm-face face-front"></div>
                <div class="character-face character-arm-face face-back"></div>
                </div>
                <div class="character-face-con character-leg character-leg-right">
                <div class="character-face character-leg-face face-front"></div>
                <div class="character-face character-leg-face face-back"></div>
                </div>
                <div class="character-face-con character-leg character-leg-left">
                <div class="character-face character-leg-face face-front"></div>
                <div class="character-face character-leg-face face-back"></div>
                </div>`;

    document.querySelector('.stage').appendChild(this.mainElem);


    this.scrollState = false;
    this.lastScrollTop = 0;
    this.Xpos = info.Xpos;
    this.speed = info.speed;
    this.runningState = false;
    this.rafid;
    this.init();
}


Character.prototype = {
    constructor: Character,
    init: function() {
        const self = this;

        function charScroll() {
            clearTimeout(self.scrollState);

            if (!self.scrollState) {
                self.mainElem.classList.add('running');
            }

            self.scrollState = setTimeout(function() {
                self.scrollState = false;
                self.mainElem.classList.remove('running');
            }, 500);

            if (self.lastScrollTop < pageYOffset) {
                self.mainElem.setAttribute('data-direction', 'forward');
                self.lastScrollTop = pageYOffset;
            } else {
                self.mainElem.setAttribute('data-direction', 'backward');
                self.lastScrollTop = pageYOffset;
            }
        };

        function charKeyMove(e) {
            if (self.runningState) return;

            if (e.keyCode == 37) {
                self.mainElem.setAttribute('data-direction', 'left');
                self.direction = 'left';
                self.mainElem.style.left = self.PosX + '%';
                self.mainElem.classList.add('running');
                self.runningState = true;
                self.run(self);
            } else if (e.keyCode == 39) {
                self.mainElem.setAttribute('data-direction', 'right');
                self.direction = 'right';
                self.mainElem.classList.add('running');
                self.runningState = true;
                self.run(self);
            }
        };

        function charKeyStop(e) {
            self.mainElem.removeAttribute('data-direction');
            self.mainElem.classList.remove('running');
            cancelAnimationFrame(self.rafId);
            self.runningState = false;
        };

        window.addEventListener('keyup', charKeyStop);
        window.addEventListener('keydown', charKeyMove);
        window.addEventListener('scroll', charScroll);
    },
    run: function(self) {
        if (self.direction == 'left') {
            self.Xpos -= self.speed;
        } else if (self.direction == 'right') {
            self.Xpos += self.speed;
        }
        self.mainElem.style.left = self.Xpos + '%';
        if (self.Xpos < 3) {
            self.Xpos = 3;
        } else if (self.Xpos > 87) {
            self.Xpos = 87;
        }
        self.rafId = requestAnimationFrame(function() { self.run(self) });
    }

}