var lang;
var menu = true;
var textId = 0;

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
    console.log(t);
    if (t == 'cr') {
        var videoId = 0; //credits
    } else {
        lang = t;
    }
}