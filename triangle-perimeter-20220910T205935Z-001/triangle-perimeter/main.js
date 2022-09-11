// Triangle Perimeter Assignment Start Code
let xA = document.getElementById("xA");
let yA = document.getElementById("yA");
let xB = document.getElementById("xB");
let yB = document.getElementById("yB");
let xC = document.getElementById("xC");
let yC = document.getElementById("yC");

let ABOutput = document.getElementById("ABOutput");
let ACOutput = document.getElementById("ACOutput");
let BCOutput = document.getElementById("BCOutput");
let perimeterOutput = document.getElementById("perimeterOutput");

let calculateButton = document.getElementById("calculateButton");

calculateButton.addEventListener("click", ()=>{
    let AB = dist(xA.value, yA.value, xB.value, yB.value);
    let AC = dist(xA.value, yA.value, xC.value, yC.value);
    let BC = dist(xB.value, yB.value, xC.value, yC.value);
    ABOutput.innerHTML = AB;
    ACOutput.innerHTML = AC;
    BCOutput.innerHTML = BC;
    perimeterOutput.innerHTML = AB + AC + BC;
});

function dist(x1, y1, x2, y2){
    return Math.sqrt((x2 - x1)**2 + (y2 - y1)**2);
}