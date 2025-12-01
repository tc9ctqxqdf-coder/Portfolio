
let ProgramMy = 0;

document.getElementById("CalgProgramGI").addEventListener("click", function () { //når dette objektet trykker ser dette.
    if (ProgramMy === 0) {
        console.log("viser menyen for programer");
        document.getElementById("MenyProgramGI").style.display = "block";
        ProgramMy = 1;
    } else {
        console.log("skjuler menyen for programer");
        document.getElementById("MenyProgramGI").style.display = "none";
        ProgramMy = 0;

    }
});


document.getElementById("ITProgram").addEventListener("click", function () {

    let bokser = document.getElementsByClassName("CardMD"); //her henter den variablene og så legger den i en boks
    for (let i = 0; i < bokser.length; i++) {// starer løka som gjentar 
        bokser[i].style.display = "none";// setter hver gjentagele til none
    }

    console.log("ferdig");
});

document.getElementById("ITProgram").addEventListener("click", function () {

    let bokser = document.getElementsByClassName("CardIT");
    for (let i = 0; i < bokser.length; i++) {
        bokser[i].style.display = "block";
    }

    console.log("ferdig");
});

document.getElementById("MDProgramer").addEventListener("click", function () {

    let bokser = document.getElementsByClassName("CardIT");
    for (let i = 0; i < bokser.length; i++) {
        bokser[i].style.display = "none";
    }

    console.log("ferdig");
});

document.getElementById("MDProgramer").addEventListener("click", function () {

    let bokser = document.getElementsByClassName("CardMD");
    for (let i = 0; i < bokser.length; i++) {
        bokser[i].style.display = "block";
    }

    console.log("ferdig");
});



document.getElementById("AlProgram").addEventListener("click", function () {

    let bokser = document.getElementsByClassName("CardIT");
    for (let i = 0; i < bokser.length; i++) {
        bokser[i].style.display = "block";
    }

    console.log("ferdig");
});

document.getElementById("AlProgram").addEventListener("click", function () {

    let bokser = document.getElementsByClassName("CardMD");
    for (let i = 0; i < bokser.length; i++) {
        bokser[i].style.display = "block";
    }

    console.log("ferdig");
});









