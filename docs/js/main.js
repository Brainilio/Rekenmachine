
let optellen = document.getElementById("optellen")
let aftrekken = document.getElementById("aftrekken")
let keer = document.getElementById("keer") 
let delen = document.getElementById("delen")
let uitkomst = document.getElementById("uitkomst")
let getal1 = document.getElementById("getal1") 
let getal2 = document.getElementById("getal2") 
let total = 0 


function optellenFunction() { 


    let uitkomst = document.getElementById("uitkomst")

    total = parseFloat(document.getElementById("getal1").value) + 
    parseFloat(document.getElementById("getal2").value)

    uitkomst.value = total; 
}

function aftrekkenFunction() { 


    let uitkomst = document.getElementById("uitkomst")

    total = parseFloat(document.getElementById("getal1").value) -
    parseFloat(document.getElementById("getal2").value)
    
    uitkomst.value = total; 
}

function keerFunction() { 


    let uitkomst = document.getElementById("uitkomst")

    total = parseFloat(document.getElementById("getal1").value) * 
    parseFloat(document.getElementById("getal2").value)
    
    uitkomst.value = total; 
}

function delenFunction() { 


    let uitkomst = document.getElementById("uitkomst")

    total = parseFloat(document.getElementById("getal1").value) / 
    parseFloat(document.getElementById("getal2").value)
    
    uitkomst.value = total; 
}