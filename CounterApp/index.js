let body = document.querySelector("body");
let info = document.getElementById("info");
let reset = document.getElementById("reset");
let count = document.getElementById("count");
let plus = document.getElementById("plus");
let minus = document.getElementById("minus");
let light = document.getElementById("light");
let dark = document.getElementById("dark");
let container = count.parentElement;


let counter = 0;

count.innerText = counter;

function Increment() {
    counter++;
    count.innerText = counter;
}

function Decrement() {
    counter--;
    count.innerText = counter;
}

function Reset() {
    counter = 0;
    count.innerText = counter;
}

plus.addEventListener("click", Increment);
minus.addEventListener("click", Decrement);
reset.addEventListener("dblclick", Reset);

document.addEventListener("keydown", (event) => {
    if (event.key == "+") {
        Increment();
    }
    else if (event.key == "-") {
        Decrement();
    }
})

dark.style.display = "none";

light.addEventListener("dblclick", () => {
    body.style.backgroundColor = "white";
    body.style.color = "black";
    dark.style.display = "block";
    light.style.display = "none";
})

dark.addEventListener("dblclick", () => {
    body.style.backgroundColor = "black";
    body.style.color = "rgba(176, 169, 169, 0.821)";
    light.style.display = "block";
    dark.style.display = "none";
})

