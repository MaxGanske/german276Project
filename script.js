let coins = document.getElementById("coins");
let clickElement = document.getElementById("clickElement");
let currentClickCounter  = document.getElementById("currentClick");
let confetti = document.getElementById("confetti");
let bowtie = document.getElementById("bowtie");

let coinsTotal = 0;
let currentClick = 1;

function clicking() {
    coinsTotal += currentClick;
    coins.innerText = "Coins: " + coinsTotal;
}
function buyGermania() {
    if(coinsTotal >= 1){
    currentClick += 1;
    coinsTotal -= 1;
    coins.innerText = "Coins: " + coinsTotal;
    currentClickCounter.innerText = "Coins per click: " + currentClick;
    }

}
function buyNibe() {
    if(coinsTotal >= 5){
        currentClick += 5;
        coinsTotal -= 5;
        coins.innerText = "Coins: " + coinsTotal;
        currentClickCounter.innerText = "Coins per click: " + currentClick;
        }

}
function buyChristian() {
    if(coinsTotal >= 10){
        currentClick += 10;
        coinsTotal -= 10;
        coins.innerText = "Coins: " + coinsTotal;
        currentClickCounter.innerText = "Coins per click: " + currentClick;
        }

}
function buyHermann() {
    if(coinsTotal >= 15){
        currentClick += 15;
        coinsTotal -= 15;
        coins.innerText = "Coins: " + coinsTotal;
        currentClickCounter.innerText = "Coins per click: " + currentClick;
        }

}
function buyWeimar() {
    if(coinsTotal >= 20){
        currentClick += 20;
        coinsTotal -= 20;
        coins.innerText = "Coins: " + coinsTotal;
        currentClickCounter.innerText = "Coins per click: " + currentClick;
        }

}
function buyAnglo() {
    if(coinsTotal >= 25){
        currentClick += 25;
        coinsTotal -= 25;
        coins.innerText = "Coins: " + coinsTotal;
        currentClickCounter.innerText = "Coins per click: " + currentClick;
        }

}
function ultimateReward() {

    if(coinsTotal >= 10000) {
        coinsTotal -= 10000;
        confetti.classList.remove("is-hidden");
        bowtie.classList.remove("is-hidden");
    }

}
