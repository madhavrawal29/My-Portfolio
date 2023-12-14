// ************************* SCRIPT FOR STICKY NAVIGATION BAR ***************************
// on page scrolls, this function will execute
window.onscroll = function () { myFunction() };

var navbar = document.getElementById("nav-bar");
var sticky = navbar.offsetTop;
// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky")
    } 
    else {
        navbar.classList.remove("sticky");
    }
}

// ******************** SCRIPT FOR ABOUT SECTION (SKILLS, EXPERIECE AND EDUCATION) ***********************
var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname) {
    for (tablink of tablinks) {
        tablink.classList.remove("active-link");
    }

    for (tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab")
}

// *************************** SCRIPT FOR MENUBAR FOR SMALLER SCREEN *******************************
var side1 = document.getElementById("sidemenu");
function openmenu() {
    side1.style.right = "0";
}

function closemenu() {
    side1.style.right = "-200px";
}


// ********************** SCRIPT FOR CONTACT FORM SEND DATA TO GOOGLE DRIVE ***********************
const scriptURL = 'https://script.google.com/macros/s/AKfycby7oy8AHTdt7X54cODClMTAvBpqOB43q0knSo209l8fvW6qvltv8AcLWYu0tzqOlEVNyA/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById("msg")

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => {
            msg.innerHTML = "Message sent sucessfully...";
            setTimeout(function () {
                msg.innerHTML = ""
            }, 5000)
            form.reset()
        })
        .catch(error => console.error('Error!', error.message))
})


//  :::::::SCRIPT FOR DARK MODE:::::::
//  ::::::::::::::::::::::::::::::::::
var icon = document.getElementById("icon")
icon.onclick = function(){
    document.body.classList.toggle("dark-theme");
    if(document.body.classList.contains("dark-theme")){
        icon.src = "Images/sun.png";
    }
    else{
        icon.src = "Images/moon.png";
    }
}

