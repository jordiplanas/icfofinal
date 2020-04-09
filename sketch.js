let taps = [];
let tapImage;
var video, standby, about, intercity, intracity, international, credits;
var standbyEn, standbyEs, standbyCat;
var aboutEn, aboutEs, aboutCat;
var intercityEn, intercityEs, intercityCat;
var intracityEn, intracityEs, intracityCat;
var internationalEN, internationalEs, internationalCat;
var creditsEn, creditsEs, creditsCat;

let fontRegular, fontItalic, fontBold;
let b1, b2, b3, b0;

function preload() {
    taps[0] = loadImage('assets/imgs/tap.png')
    taps[1] = loadImage('assets/imgs/tap2.png')
    standbyEs = createVideo('assets/videos/StandbyEs.mp4');
    standbyEn = createVideo('assets/videos/StandbyEn.mp4');
    standbyCat = createVideo('assets/videos/StandbyCat.mp4');
    standby = standbyEn;
    aboutEn = createVideo('assets/videos/AboutEn.mp4');
    aboutEs = createVideo('assets/videos/AboutEs.mp4');
    aboutCat = createVideo('assets/videos/AboutCat.mp4');
    about = aboutEn;
    intercityEn = createVideo('assets/videos/IntercityEn.mp4');
    intercityEs = createVideo('assets/videos/IntercityEs.mp4');
    intercityCat = createVideo('assets/videos/IntercityCat.mp4');
    intercity = intercityEn;
    intracityEn = createVideo('assets/videos/IntracityEn.mp4');
    intracityEs = createVideo('assets/videos/IntracityEs.mp4');
    intracityCat = createVideo('assets/videos/IntracityCat.mp4');
    intracity = intracityEn;
    internationalEn = createVideo('assets/videos/InternationalEn.mp4');
    internationalEs = createVideo('assets/videos/InternationalEs.mp4');
    internationalCat = createVideo('assets/videos/InternationalCat.mp4');
    international = internationalEn;
    creditsEn = createVideo('assets/videos/CreditsEn.mp4');
    creditsEs = createVideo('assets/videos/CreditsEs.mp4');
    creditsCat = createVideo('assets/videos/CreditsCat.mp4');
    credits = creditsEn;
    fontRegular = loadFont('assets/type/graphik/Graphik-Regular.otf');
    fontItalic = loadFont('assets/type/graphik/Graphik-SemiboldItalic.otf');
    fontBold = loadFont('assets/type/graphik/Graphik-Bold.otf');
    b0 = loadImage('assets/imgs/0.png');
    b1 = loadImage('assets/imgs/1.png');
    b2 = loadImage('assets/imgs/2.png');
    b3 = loadImage('assets/imgs/3.png');
}

let buttons = [];
let cnv;
let tap = false;

function setup() {
    cnv = createCanvas(windowWidth, windowHeight);
    cnv.id('buttons');
    for (var i = 0; i < 4; i++) {
        buttons.push(new Butt(width / 2 - 350 + i * 250, height - height / 4, i));
    }

    video = standby;
    video.loop();
}


function draw() {
    clear();
    displayVideo();
    tapping();
    for (var i = 0; i < 4; i++) {
        buttons[i].display();
        if (i < 3) {
            buttons[i].drawLine(buttons[i + 1]);
        }
    }
}

function displayVideo() {
    if (video != standby) {
        //console.log(video.time() / video.duration());
        if (video.time() / video.duration() >= .99) {
            switchVideo(4);
            console.log("video Ended");
            for (var i = 0; i < 4; i++) {
                buttons[i].in = true;
            }
        } else {}
    }

    image(video, 0, 0, width, height);
}


function switchVideo(id) {
    console.log(id);
    switch (id) {
        case 0:
            video.stop();
            if (lan == 'es') {
                about = aboutEs;
            }
            if (lan == 'en') {
                about = aboutEn;
            }
            if (lan == 'cat') {
                about = aboutCat;
            }
            video = about;
            video.loop();
            break;
        case 1:
            video.stop();
            if (lan == 'es') {
                intracity = intracityEs;
            }
            if (lan == 'en') {
                intracity = intracityEn;
            }
            if (lan == 'cat') {
                intracity = intracityCat;
            }
            video = intracity;
            video.loop();
            break;
        case 2:
            video.stop();
            if (lan == 'es') {
                intercity = intercityEs;
            }
            if (lan == 'en') {
                intercity = intercityEn;
            }
            if (lan == 'cat') {
                intercity = intercityCat;
            }
            video = intercity;
            video.loop();
            break;
        case 3:
            video.stop();
            if (lan == 'es') {
                international = internationalEs;
            }
            if (lan == 'en') {
                international = internationalEn;
            }
            if (lan == 'cat') {
                international = internationalCat;
            }
            video = international;
            video.loop();
            break;
        case 4:
            video.stop();
            if (lan == 'es') {
                standby = standbyEs;
            }
            if (lan == 'en') {
                standby = standbyEn;
            }
            if (lan == 'cat') {
                standby = standbyCat;
            }
            video = standby;
            video.loop();
            break;
        case 5:
            video.stop();
            if (lan == 'es') {
                credits = creditsEs;
            }
            if (lan == 'en') {
                credits = creditsEn;
            }
            if (lan == 'cat') {
                credits = creditsCat;
            }
            video = credits;
            video.loop();
            break;
    }

}

function mousePressed() {
    for (var i = 0; i < 4; i++) {
        buttons[i].isPressed(mouseX, mouseY);
    }
}


class Butt {

    constructor(x, y, id) {
        this.prev = millis();
        if (id != 0) {
            this.del = 2000 / (id + 1);
        } else {
            this.del = 650;
        }
        this.x = x;
        this.y = y;
        this.id = id;
        this.sz = 100;
        this.vel = .3;
        this.canvasVel = 2;
        this.op = 255;
        this.out = false;
        this.in = false;
        this.acc = 0.02;
        this.w = false;
        this.t = "";
        this.t2 = "";
        this.img;
        this.sW = 4;

        switch (id) {
            case 0:
                this.t = "The Quantum Communication Infrastructure";
                this.img = b0;
                this.t2 = "EU - QCI";
                break;
            case 1:
                this.t = "Intracity";
                this.img = b1;
                this.t2 = "Short-distance network";
                break;
            case 2:
                this.t = "Intercity";
                this.img = b2;
                this.t2 = "Mid-distance network";
                break;
            case 3:
                this.t = "International";
                this.img = b3;
                this.t2 = "Long-distance network";
                break;
        }

    }

    display() {
        if (this.wait() && !this.out && !this.in) {
            this.move();
            this.drawText();
        }
        push();
        stroke(194, 174, 31, this.op);
        strokeWeight(this.sW);
        tint(255, this.op)
        image(this.img, this.x - 50, this.y - 50, 100, 100)
        noFill();
        ellipse(this.x, this.y, this.sz);
        pop();
        if (this.out) {
            this.removeButtons();
        }
        if (this.in) {
            this.addButtons();
        }
    }

    move() {
        this.y += this.vel;
        this.vel += this.acc;
        if (this.y < height / 2) {
            this.vel = 1;
        }
        if (this.y > height - 180) {
            this.vel = -1;
        }
    }

    wait() {
        if (millis() > this.prev + this.del) {
            return true;
        }
    }

    drawLine(b) {
        push();
        stroke(194, 174, 31, this.op)
        strokeWeight(3);
        line(this.x + this.sz / 2, this.y, b.x - this.sz / 2, b.y);
        pop();
    }

    drawText() {
        push();
        textAlign(CENTER);
        textFont(fontBold);
        textSize(16);
        fill(255);
        text(this.t, this.x - 100, this.y + 60, 200, 100);
        textSize(9);
        if (this.id != 0) {
            text(this.t2, this.x - 100, this.y + 80, 200, 100);
        } else {
            text(this.t2, this.x - 100, this.y + 120, 200, 100);
        }

        pop();
    }

    isPressed(x, y) {
        if (sq(x - this.x) + sq(y - this.y) < this.sz / 2 * this.sz / 2) {
            for (var i = 0; i < 4; i++) {
                buttons[i].sW = 9;
                buttons[i].out = true;
            }
            switchVideo(this.id);
        }
    }

    removeButtons() {
        this.y += this.canvasVel;
        this.canvasVel += this.acc;
        if (this.op > 0) {
            this.op -= 7;
        }
        if (this.y > height + 100) {
            this.canvasVel = 0;
        }
    }

    addButtons() {
        this.sW = 4;
        this.out = false;
        this.y -= this.canvasVel;
        this.canvasVel += this.acc;
        if (this.op < 255) {
            this.op += 7;
        }
        if (this.y < height - height / 4) {
            this.prev = millis();
            this.in = false;
        }
    }
}

///tapping

var run = setInterval(function() {
    tap = !tap;

}, 1000);

function tapping() {
    if (tap) {
        tapImage = taps[0];
    } else {
        tapImage = taps[1];
    }
    image(tapImage, width - 250, 20, 50, 50);
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight)
}