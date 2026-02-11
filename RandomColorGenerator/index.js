let body=document.querySelector("body");
let button=document.querySelector("button");

function Random(){
    let color="#";
    for(let i=0;i<6;i++){
        color=color+parseInt(Math.random()*10);
    }
    return color;
}

function changeColor(){
    let color=Random();
    body.style.backgroundColor=color;
    let color2=Random();
    button.style.backgroundColor=color2;
    let color3=Random();
    button.style.borderColor=color3;
}

button.addEventListener("click",changeColor);
