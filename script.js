var lan = "en";

function item(t) {

    if (t == 'mn') {
        for (var i = 0; i < 4; i++) {
            //buttons[i].sW = 9;
            if (buttons[i].out == true) {
                buttons[i].in = true;
            }
        }
        generalVideo = 4;
        switchVideo(4);

    } else {
        changeButtonName(t);
        lan = t;
        if (video != standby) {
            switchVideo(generalVideo);
        } else {
            switchVideo(4);
        }
    }
    console.log(lan);
}


function changeButtonName(l) {
    switch (l) {
        case 'en':
            // document.getElementById("button_id").innerHTML = 'Languages';
            for (var i = 0; i < 4; i++) {
                buttons[i].subT = buttons[i].t2;
                buttons[i].mainT = buttons[i].t;
            }
            break;
        case 'es':
            // document.getElementById("button_id").innerHTML = 'Idiomas';
            for (var i = 0; i < 4; i++) {
                buttons[i].subT = buttons[i].t2Es;
                buttons[i].mainT = buttons[i].tEs;
            }
            break;
        case 'cat':
            // document.getElementById("button_id").innerHTML = 'Idiomes';
            for (var i = 0; i < 4; i++) {
                buttons[i].subT = buttons[i].t2Cat;
                buttons[i].mainT = buttons[i].tCat;
            }
            break;
    }
}

$(window).bind("load", function() {

    var items = document.querySelectorAll('.circle a');
    for (var i = 0, l = items.length; i < l; i++) {
        items[i].style.left = (50 - 55 * Math.cos(0.50 * Math.PI - 1.1 * (1 / l) * i / 1.5 * Math.PI)).toFixed(4) + "%";
        items[i].style.top = (50 + 55 * Math.sin(0.50 * Math.PI - 1.1 * (1 / l) * i / 1.5 * Math.PI)).toFixed(4) + "%";
    }

    document.querySelector('.menu-button').onclick = function(e) {
        e.preventDefault();
        document.querySelector('.circle').classList.toggle('open');
        setTimeout(function() {
            if (document.querySelector('.circle').classList.contains('open')) {
                document.querySelector('.circle').classList.toggle('open');
            }
        }, 3000)
    }

    document.querySelector('.circle').onclick = function(e) {
        document.querySelector('.circle').classList.toggle('open');
        item(e.target.id);
    }

});