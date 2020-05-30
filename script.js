var lan = "en";

function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
    setTimeout(closeDropdown, 7000);
}

//close dropdown in 5 sec of innactiovity
function closeDropdown() {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
            openDropdown.classList.remove('show');

        }
    }
    clear();
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}

//dropdown links
function item(t) {

    changeButtonName(t);
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
        lan = t;
        if (video != standby) {
            switchVideo(generalVideo);
        } else {
            switchVideo(4);
        }
    }
    /*if (t != 'cr') {
        lan = t;
        switchVideo(4);
        for (var i = 0; i < 4; i++) {
            buttons[i].in = true;
        }
    }
    else {
        for (var i = 0; i < 4; i++) {
            buttons[i].sW = 9;
            buttons[i].out = true;
        }
        switchVideo(5);
    }*/
    console.log(lan);
}


function changeButtonName(l) {
    switch (l) {
        case 'en':
            document.getElementById("button_id").innerHTML = 'Languages';
            for (var i = 0; i < 4; i++) {
                buttons[i].subT = buttons[i].t2;
                buttons[i].mainT = buttons[i].t;
            }
            break;
        case 'es':
            document.getElementById("button_id").innerHTML = 'Idiomas';
            for (var i = 0; i < 4; i++) {
                buttons[i].subT = buttons[i].t2Es;
                buttons[i].mainT = buttons[i].tEs;
            }
            break;
        case 'cat':
            document.getElementById("button_id").innerHTML = 'Idiomes';
            for (var i = 0; i < 4; i++) {
                buttons[i].subT = buttons[i].t2Cat;
                buttons[i].mainT = buttons[i].tCat;
            }
            break;

    }
}