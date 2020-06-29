let taps = [];
let tapImage;
var video, standby, about, intercity, intracity, international, credits;
var standbyEn, standbyEs, standbyCat;
var aboutEn, aboutEs, aboutCat;
var intercityEn, intercityEs, intercityCat;
var intracityEn, intracityEs, intracityCat;
var internationalEN, internationalEs, internationalCat;
var creditsEn, creditsEs, creditsCat;
var generalVideo = 0;
let fontRegular, fontItalic, fontBold;
let b1, b2, b3, b0;
var particles = [];

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
    for (var i = 0; i < 4; i++) {
        buttons[i].display();
        if (i < 3) {
            buttons[i].drawLine(buttons[i + 1]);
        }
    }
    for (let i = particles.length - 1; i >= 0; i--) {
        particles[i].update();
        particles[i].show();
        if (particles[i].finished()) {
            particles.splice(i, 1);
        }
    }
}

function touchMoved() {
    let p = new Particle(mouseX, mouseY);
    particles.push(p);
    return false;
}

class Particle {

    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.r = 10;
        this.w = 6;
        this.alpha = 255;
    }

    finished() {
        return this.alpha < 0;
    }

    update() {
        this.r += 5;
        this.alpha -= 5;
    }

    show() {
        push();
        stroke(255, this.alpha);
        strokeWeight(this.w);
        noFill();
        ellipse(this.x, this.y, this.r);
        pop();
    }

}

function displayVideo() {
    if (video != standby) {
        if (video.time() / video.duration() >= .99) {
            if (video != credits) {
                console.log("video credits");
                generalVideo = 5;
                switchVideo(5);
            } else {
                generalVideo = 4;
                switchVideo(4);
                for (var i = 0; i < 4; i++) {
                    buttons[i].in = true;
                }
            }
        }
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
    //show and hide menu while playing
    for (var i = 0; i < 4; i++) {
        if (mouseY < height - height / 4 && mouseY > 100 && buttons[i].out) {
            buttons[i].in = true;
            setTimeout(function() {
                for (var i = 0; i < 4; i++) {
                    buttons[i].in = false;
                    buttons[i].out = true;
                }
            }, 10000);
        }
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
        this.idioma = "en";
        this.subT = "";
        this.mainT = "";
        switch (id) {
            case 0:
                this.t = "The Quantum Communication Infrastructure";
                this.tCat = "La Infraestructura per a la Comunicació Quántica";
                this.tEs = "La Infraestructura para la Comunicación Cuántica";
                this.img = b0;
                this.t2 = "EU - QCI";
                this.t2Cat = "EU - QCI";
                this.t2Es = "EU - QCI";
                break;
            case 1:
                this.t = "Intracity";
                this.tCat = "Intraurbà";
                this.tEs = "Intraurbano";
                this.img = b1;
                this.t2 = "Short-distance network";
                this.t2Cat = "Xarxa de curta distància";
                this.t2Es = "Red de corta distancia";
                break;
            case 2:
                this.t = "Intercity";
                this.tCat = "Interurbà";
                this.tEs = "Interurbano";
                this.img = b2;
                this.t2 = "Mid-distance network";
                this.t2Cat = "Xarxa de mitja distància";
                this.t2Es = "Red de media distancia";
                break;
            case 3:
                this.t = "International";
                this.tCat = "Internacional";
                this.tEs = "Internacional";
                this.img = b3;
                this.t2 = "Long-distance network";
                this.t2Cat = "Xarxa de llarga distància";
                this.t2Es = "Red de larga distancia";
                break;
        }
        this.subT = this.t2;
        this.mainT = this.t;

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
        text(this.mainT, this.x - 100, this.y + 60, 200, 100);
        textSize(9);
        if (this.id != 0) {
            text(this.subT, this.x - 100, this.y + 80, 200, 100);
        } else {
            text(this.subT, this.x - 100, this.y + 120, 200, 100);
        }

        pop();
    }

    isPressed(x, y) {
        if (sq(x - this.x) + sq(y - this.y) < this.sz / 2 * this.sz / 2) {
            for (var i = 0; i < 4; i++) {
                buttons[i].sW = 9;
                buttons[i].out = true;
            }
            generalVideo = this.id;
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


function windowResized() {
    resizeCanvas(windowWidth, windowHeight)
}