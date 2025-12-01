// script.js

document.getElementById("Toggle_btn").addEventListener("click", function () { //denne koden sier at når iconet blir trykket skakl meny vises
    // document.getElementById("Meny").style.display = "block";
    document.getElementById("Meny").style.display = "flex";


})

document.getElementById("back").addEventListener("click", function () { //denne sier hvis dette ivonet trykkes skal meny vekk
    document.getElementById("Meny").style.display = "none";



})
