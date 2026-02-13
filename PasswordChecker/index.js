
let input = document.querySelector("input");
let h2 = document.querySelector("h2");

let clipboard = document.getElementById("clipboard-blank");
let clipboardCheck = document.getElementById("clipboard-check-fill");

let generate = document.querySelector("button");

let char8 = document.getElementById("char8");
let char8tick = document.querySelector("#char8 .tick");
let char8wrong = document.querySelector("#char8 .wrong");

let number1 = document.getElementById("number");
let number1tick = document.querySelector("#number .tick");
let number1wrong = document.querySelector("#number .wrong");

let upper1 = document.getElementById("upper1");
let upper1tick = document.querySelector("#upper1 .tick");
let upper1wrong = document.querySelector("#upper1 .wrong");

let lower1 = document.getElementById("lower1");
let lower1tick = document.querySelector("#lower1 .tick");
let lower1wrong = document.querySelector("#lower1 .wrong");

let symbol1 = document.getElementById("symbol");
let symbol1tick = document.querySelector("#symbol .tick");
let symbol1wrong = document.querySelector("#symbol .wrong");

let rec10 = document.getElementById("rec10");
let rec10tick = document.querySelector("#rec10 .tick");
let rec10wrong = document.querySelector("#rec10 .wrong");


h2.innerText = "Check Password Strength";
clipboardCheck.style.display = "none";
clipboard.style.color="grey";

let lower = 0, upper = 0, sym = 0, num = 0, flag = 0,length=0;

function checkStrength(password) {
    length = password.length;
    lower = 0, upper = 0, sym = 0, num = 0, flag = 0;
    for (let i = 0; i < length; i++) {
        let char = password.charCodeAt(i);
        if (char >= 48 && char <= 57) { num++; }
        else if (char >= 65 && char <= 90) { upper++; }
        else if (char >= 97 && char <= 122) { lower++; }
        else { sym++; }
    }
    Strong(password);

    if (length >= 10 && flag>=5 && upper >= 1 && lower >= 1 && num >= 1 && sym >= 1 && (upper >= 2 || lower >= 2 || num >= 2 || sym >= 2)) {
        return true;
    }else{
        return false;
    }
}

function Strong(password){
    clipboard.style.display = "block";
    clipboardCheck.style.display = "none";
    if (length <= 0){
        clipboard.style.color="grey";
    }else{
        clipboard.style.color="black";
    }
    if (length >= 8) {
        char8tick.style.display = "inline-block"
        char8wrong.style.display = "none"
        char8.style.color = "green";
        flag++;
    } else {
        char8wrong.style.display = "inline-block"
        char8tick.style.display = "none"
        char8.style.color = "red";
    }

    if (num >= 1) {
        number1tick.style.display = "inline-block"
        number1wrong.style.display = "none"
        number1.style.color = "green";
        flag++;
    } else {
        number1tick.style.display = "none"
        number1wrong.style.display = "inline-block"
        number1.style.color = "red";
    }

    if (upper >= 1) {
        upper1tick.style.display = "inline-block"
        upper1wrong.style.display = "none"
        upper1.style.color = "green";
        flag++;
    } else {
        upper1tick.style.display = "none"
        upper1wrong.style.display = "inline-block"
        upper1.style.color = "red";
    }

    if (lower >= 1) {
        lower1tick.style.display = "inline-block"
        lower1wrong.style.display = "none"
        lower1.style.color = "green";
        flag++;
    } else {
        lower1tick.style.display = "none"
        lower1wrong.style.display = "inline-block"
        lower1.style.color = "red";
    }
    if (sym >= 1) {
        symbol1tick.style.display = "inline-block"
        symbol1wrong.style.display = "none"
        symbol1.style.color = "green";
        flag++;
    } else {
        symbol1tick.style.display = "none"
        symbol1wrong.style.display = "inline-block"
        symbol1.style.color = "red";
    }
    if (length >= 10) {
        rec10tick.style.display = "inline-block"
        rec10wrong.style.display = "none"
        rec10.style.color = "green";
        flag++;
    } else {
        rec10tick.style.display = "none"
        rec10wrong.style.display = "inline-block"
        rec10.style.color = "red";
    }

    if (length >= 10 && flag >= 5 && upper >= 1 && lower >= 1 && num >= 1 && sym >= 1 && (upper >= 2 || lower >= 2 || num >= 2 || sym >= 2)) {
        h2.innerText = "Strong Password"
        h2.style.color = "green";
    } else if (flag >= 5 && upper >= 1 && lower >= 1 && num >= 1 && sym >= 1) {
        h2.innerText = "Mediam Password";
        h2.style.color = "rgb(255, 230, 0)";
    } else if (length > 0) {
        h2.innerText = "Low Password";
        h2.style.color = "red";
    } else {
        h2.innerText = "Check Password Strength";
        h2.style.color = "white";
    }
}

input.addEventListener("input", () => {
    let password = input.value;
    checkStrength(password);
})

clipboard.addEventListener("click",() => {
    if (length > 0) {
        clipboard.style.display = "none";
        clipboardCheck.style.display = "block";
        let text=input.value;
        navigator.clipboard.writeText(text);
    }
})

clipboardCheck.addEventListener("click",() => {
    if (length > 0) {
        let text=input.value;
        navigator.clipboard.writeText(text);
    }
})

function pick(str){
    return str[Math.floor(Math.random()*str.length)];
}

function generatePassword(pass){
    let u="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let l="abcdefghijklmnopqrstuvwxyz";
    let s="~`!@#$%^&*()_-+=[{]}\\|;:'\",<.>/?";

    while(pass.length<10){
        let random = Math.floor(Math.random()*10);
        switch (random){
            case 1:
            case 5:
            case 9:
                pass += pick(u);
                break;

            case 2:
            case 6:
                pass += pick(l);
                break;

            case 3:
            case 7:
                pass += pick(s);
                break;

            case 4:
            case 8:
                pass += Math.floor(Math.random()*10);
                break;
        }
    }
    if(checkStrength(pass)){
        return pass;
    }else{        
        return generatePassword(pass.charAt(1));
    }
}

generate.addEventListener("click",()=>{
    let pass=generatePassword(input.value);
    input.value=pass;
});