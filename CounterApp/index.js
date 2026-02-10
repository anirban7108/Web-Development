let info=document.getElementById("info");
let gear=document.getElementById("gear");
let reset=document.getElementById("reset");
let count=document.getElementById("count");
let plus=document.getElementById("plus");
let minus=document.getElementById("minus");

let counter=0

count.innerText=counter;

function Increment(){
    counter++;
    count.innerText=counter;
}

function Decrement(){
    counter--;
    count.innerText=counter;
}

function Reset(){
    counter=0;
    count.innerText=counter;
}

plus.addEventListener("click",Increment);
minus.addEventListener("click",Decrement);
reset.addEventListener("dblclick",Reset);

document.addEventListener("keydown",(event)=>{
    if(event.key=="+"){
        Increment();
    }
    else if(event.key=="-"){
        Decrement();
    }
})