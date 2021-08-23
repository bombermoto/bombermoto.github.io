
// Declare as variable
let canvas;
let ctx;
let secondsPassed;
let oldTimeStamp;
let timePassed = 0;
let fps;
let ch1xy = [50, 500];
let ch2xy = [230, 500];
let ch3xy = [410, 500];
let ch4xy = [590, 500];
let en1stretch = 267;
let en3stretch = 277;
let updown = 1;
let updown2 = 1;
let updown3 = 1;
let en1xy = [100, 100];
let en2xy = [465, 50];
let en3xy = [870, 90];
let hp1 = 500;
//let shield1 = 100; lazy
let hp2 = 300;
//let shield2 = 200;
let hp3 = 250;
//let shield3 = 0;
let execute = false;
let skillhit = 0;
let f = 30;

let charchoice = 0,
    enemychoice = 0,
    enemychoicewait = 0,
    skillchoice = 0;

let bg = "/img/bg_crop.jpg";

let characters = [
    "/img/Character_Beidou_Card_small.jpg",
    "/img/Character_Eula_Card_small.jpg",
    "/img/Character_Jean_Card_small.jpg",
    "/img/Character_Zhongli_Card_small.jpg",
];

//img sources
bgi = new Image();
bgi.src = bg;

ch1 = new Image();
ch1.src = characters[0];

ch2 = new Image();
ch2.src = characters[1];

ch3 = new Image();
ch3.src = characters[2];

ch4 = new Image();
ch4.src = characters[3];

mn = new Image();
mn.src = "/img/menu.png";

en1 = new Image();
en1.src = "/img/Enemy_Large_Cryo_Slime.png";

en2 = new Image();
en2.src = "/img/Enemy_Cryo_Abyss_Mage.png";

en3 = new Image();
en3.src = "/img/Enemy_Large_Electro_Slime.png";

sk11 = new Image();
sk11.src = "/img/Talent_Oceanborne.png";

sk12 = new Image();
sk12.src = "/img/Talent_Tidecaller.png";

sk13 = new Image();
sk13.src = "/img/Talent_Stormbreaker.png";

sk21 = new Image();
sk21.src = "/img/Talent_Favonius_Bladework_-_Edel.png";

sk22 = new Image();
sk22.src = "/img/Talent_Icetide_Vortex.png";

sk23 = new Image();
sk23.src = "/img/Talent_Glacial_Illumination.png";

sk31 = new Image();
sk31.src = "/img/Talent_Favonius_Bladework.png";

sk32 = new Image();
sk32.src = "/img/Talent_Gale_Blade.png";

sk33 = new Image();
sk33.src = "/img/Talent_Dandelion_Breeze.png";

sk41 = new Image();
sk41.src = "/img/Talent_Rain_of_Stone.png";

sk42 = new Image();
sk42.src = "/img/Talent_Dominus_Lapidis.png";

sk43 = new Image();
sk43.src = "/img/Talent_Planet_Befall.png";

sk0 = new Image();
sk0.src = "/img/skill_circle.png";

// Listen to the onLoad event
window.onload = init;

// Trigger init function when the page has loaded
function init() {
    canvas = document.getElementById("canvas");
    ctx = canvas.getContext("2d");

    // char choice
    canvas.addEventListener("mousedown", clicked, false);

    // Request an animation frame for the first time
    // The gameLoop() function will be called as a callback of this request
    window.requestAnimationFrame(gameLoop);
}

function gameLoop() {

    canvasLeft = canvas.getBoundingClientRect().left; // x
    canvasTop = canvas.getBoundingClientRect().top; // y

    if (en1stretch == 300) {
        updown = 0;
    } else if (en1stretch == 267) {
        updown = 1;
    }
    if (en2xy[1] == 30) {
        updown2 = 0;
    } else if (en2xy[1] == 70) {
        updown2 = 1;
    }
    if (en3stretch == 315) {
        updown3 = 0;
    } else if (en3stretch == 277) {
        updown3 = 1;
    }

    gamereset();

    //animations
    update();
    // Perform the drawing operation
    draw();

    // The loop function has reached it's end
    // Keep requesting new frames
    window.requestAnimationFrame(gameLoop);
}

//animation variables
function update() {

    //switch (enemychoice) {
    //  case 1:
    if (updown == 1) { en1stretch += 1; en1xy[1] -= 1; }
    if (updown == 0) { en1stretch -= 1; en1xy[1] += 1; }

    // break;
    // case 2:
    if (updown2 == 1) { en2xy[1] -= 1; }
    if (updown2 == 0) { en2xy[1] += 1; }
    //  break;
    //case 3:
    if (updown3 == 1) { en3stretch += 1; en3xy[1] -= 1; }
    if (updown3 == 0) { en3stretch -= 1; en3xy[1] += 1; }
    //break;
    //}

    font = f + "px Comic Sans MS";
    f += 0.2;

}

function gamereset() {
    if (hp1 <= 0 && hp2 <= 0 && hp3 <= 0) {
        hp1 = 500;
        hp2 = 300;
        hp3 = 250;
    }

}

function clicked(e) {
    e.preventDefault();
    var x = e.clientX - canvasLeft;
    var y = e.clientY - canvasTop;
    console.log(x, y);

    //chars clicked
    if (x > 50 && x < 210 && y > 500 && y < 720) {
        ch2xy = [230, 500];
        ch3xy = [410, 500];
        ch4xy = [590, 500];

        ch1xy[1] = 450;

        charchoice = 1;
        skillchoice = 0;
        enemychoice = 0;
    }
    if (x > 230 && x < 390 && y > 500 && y < 720) {
        ch1xy = [50, 500];
        ch3xy = [410, 500];
        ch4xy = [590, 500];

        ch2xy[1] = 450;

        charchoice = 2;
        skillchoice = 0;
        enemychoice = 0;
    }
    if (x > 410 && x < 570 && y > 500 && y < 720) {
        ch2xy = [230, 500];
        ch1xy = [50, 500];
        ch4xy = [590, 500];

        ch3xy[1] = 450;

        charchoice = 3;
        skillchoice = 0;
        enemychoice = 0;
    }
    if (x > 590 && x < 750 && y > 500 && y < 720) {
        ch2xy = [230, 500];
        ch1xy = [50, 500];
        ch3xy = [410, 500];

        ch4xy[1] = 450;

        charchoice = 4;
        skillchoice = 0;
        enemychoice = 0;
    }

    //skills cliked
    if (x > 830 && x < 910 && y > 510 && y < 590) {
        skillchoice = 1;
        enemychoice = 0;
        switch (charchoice) {
            case 1:
                skillhit = 100;
                break;
            case 2:
                skillhit = 120;
                break;
            case 3:
                skillhit = 80;
                break;
            case 4:
                skillhit = 90;
                break;
        }

    }
    if (x > 960 && x < 1040 && y > 510 && y < 590) {
        skillchoice = 2;
        enemychoice = 0;
        switch (charchoice) {
            case 1:
                skillhit = 150;
                break;
            case 2:
                skillhit = 150;
                break;
            case 3:
                skillhit = 130;
                break;
            case 4:
                skillhit = 80;
                break;
        }
    }
    if (x > 1090 && x < 1170 && y > 510 && y < 590) {
        skillchoice = 3;
        enemychoice = 0;
        switch (charchoice) {
            case 1:
                skillhit = 200;
                break;
            case 2:
                skillhit = 250;
                break;
            case 3:
                skillhit = 180;
                break;
            case 4:
                skillhit = 200;
                break;
        }
    }

    //enemy cliked
    if (charchoice != 0 && skillchoice != 0) {
        if (x > 100 && x < 450 && y > 100 && y < 367) {
            enemychoice = 1;
            enemychoicewait = 1;
            hp1 = hp1 - skillhit;
            enemychoice = 0;
            skillchoice = 0;
            charchoice = 0;
            ch1xy = [50, 500];
            ch2xy = [230, 500];
            ch3xy = [410, 500];
            ch4xy = [590, 500];
        }
        if (x > 465 && x < 815 && y > 50 && y < 392) {
            enemychoice = 2;
            enemychoicewait = 2;
            hp2 = hp2 - skillhit;
            enemychoice = 0;
            skillchoice = 0;
            charchoice = 0;
            ch1xy = [50, 500];
            ch2xy = [230, 500];
            ch3xy = [410, 500];
            ch4xy = [590, 500];
        }
        if (x > 870 && x < 1120 && y > 90 && y < 367) {
            enemychoice = 3;
            enemychoicewait = 3;
            hp3 = hp3 - skillhit;
            enemychoice = 0;
            skillchoice = 0;
            charchoice = 0;
            ch1xy = [50, 500];
            ch2xy = [230, 500];
            ch3xy = [410, 500];
            ch4xy = [590, 500];
        }
    }

}

function draw() {

    ctx.drawImage(bgi, 0, 0);

    ctx.drawImage(ch1, ch1xy[0], ch1xy[1]);

    ctx.drawImage(ch2, ch2xy[0], ch2xy[1]);

    ctx.drawImage(ch3, ch3xy[0], ch3xy[1]);

    ctx.drawImage(ch4, ch4xy[0], ch4xy[1]);

    ctx.drawImage(mn, 770, 500);

    if (hp1 > 0) {
        ctx.drawImage(en1, en1xy[0], en1xy[1], 350, en1stretch);
        Textset("HP " + hp1, 240, 390);
    }

    if (hp2 > 0) {
        ctx.drawImage(en2, en2xy[0], en2xy[1]);
        Textset("HP " + hp2, 610, 420);
    }
    if (hp3 > 0) {
        ctx.drawImage(en3, en3xy[0], en3xy[1], 350, en3stretch);
        Textset("HP " + hp3, 1010, 390);
    }


    //draw chracters skills 
    switch (charchoice) {
        case 1:
            ctx.drawImage(sk11, 830, 510);
            ctx.drawImage(sk12, 960, 510);
            ctx.drawImage(sk13, 1090, 510);
            break;
        case 2:
            ctx.drawImage(sk21, 830, 510);
            ctx.drawImage(sk22, 960, 510);
            ctx.drawImage(sk23, 1090, 510);
            break;
        case 3:
            ctx.drawImage(sk31, 830, 510);
            ctx.drawImage(sk32, 960, 510);
            ctx.drawImage(sk33, 1090, 510);
            break;
        case 4:
            ctx.drawImage(sk41, 830, 510);
            ctx.drawImage(sk42, 960, 510);
            ctx.drawImage(sk43, 1090, 510);
            break;
        default:

            Textset("Select a character", 830, 650);
    }

    if (skillchoice == 0 && charchoice != 0) {
        Textset("Choose a Talent", 830, 650);
    }

    //selector for skills
    switch (skillchoice) {
        case 1:
            ctx.drawImage(sk0, 820, 500);
            break;
        case 2:
            ctx.drawImage(sk0, 950, 500);
            break;
        case 3:
            ctx.drawImage(sk0, 1080, 500);
            break;
    }

    // !!!!!! optimize !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    switch (enemychoicewait) {
        case 1:
            Textdmg("DMG " + skillhit, 280, 290);
            setTimeout(function () {
                enemychoicewait = 0;
                f = 30;
            }, 1000)
            break;
        case 2:
            Textdmg("DMG " + skillhit, 640, 260);
            setTimeout(function () {
                enemychoicewait = 0;
                f = 30;
            }, 1000)
            break;
        case 3:
            Textdmg("DMG " + skillhit, 1047, 280);
            setTimeout(function () {
                enemychoicewait = 0;
                f = 30;
            }, 1000)
            break;
    }

    TalentDescription(charchoice, skillchoice);
}

//text settings for skill description 
function Textset(text, x, y) {
    ctx.fillStyle = "white";
    ctx.font = "22px Arial";
    ctx.textAlign = "left";
    ctx.textBaseline = "bottom";
    ctx.fillText(text, x, y);
}

//text settings for dmg description 
function Textdmg(text, x, y) {
    ctx.fillStyle = "red";
    ctx.font = font;
    ctx.textAlign = "center";
    ctx.textBaseline = "bottom";
    ctx.fillText(text, x, y);
}

//skill descriptions
function TalentDescription(charchoice, skillchoice) {
    if (charchoice == 1 && skillchoice == 1) {
        Textset("Oceanborne - Normal Attack", 830, 650);
        Textset("DMG  100", 830, 680);
    }
    if (charchoice == 1 && skillchoice == 2) {
        Textset("Tidecaller - Elemental Skill", 830, 650);
        Textset("DMG  150", 830, 680);
    }
    if (charchoice == 1 && skillchoice == 3) {
        Textset("Stormbreaker - Elemental Burst", 830, 650);
        Textset("DMG  200", 830, 680);
    }

    if (charchoice == 2 && skillchoice == 1) {
        Textset("Favonius Bladework - Normal Attack", 830, 650);
        Textset("DMG  120", 830, 680);
    }
    if (charchoice == 2 && skillchoice == 2) {
        Textset("Icetide Vortex - Elemental Skill", 830, 650);
        Textset("DMG  150", 830, 680);
    }
    if (charchoice == 2 && skillchoice == 3) {
        Textset("Glacial Illumination - Elemental Burst", 830, 650);
        Textset("DMG  250", 830, 680);
    }

    if (charchoice == 3 && skillchoice == 1) {
        Textset("Favonius Bladework - Normal Attack", 830, 650);
        Textset("DMG  80", 830, 680);
    }
    if (charchoice == 3 && skillchoice == 2) {
        Textset("Gale Blade - Elemental Skill", 830, 650);
        Textset("DMG  130", 830, 680);
    }
    if (charchoice == 3 && skillchoice == 3) {
        Textset("Dandelion Breeze - Elemental Burst", 830, 650);
        Textset("DMG  180", 830, 680);
    }

    if (charchoice == 4 && skillchoice == 1) {
        Textset("Rain of Stone - Normal Attack", 830, 650);
        Textset("DMG  90", 830, 680);
    }
    if (charchoice == 4 && skillchoice == 2) {
        Textset("Dominus Lapidis - Elemental Skill", 830, 650);
        Textset("DMG  80", 830, 680);
    }
    if (charchoice == 4 && skillchoice == 3) {
        Textset("Planet Befall - Elemental Burst", 830, 650);
        Textset("DMG  200", 830, 680);
    }

}

