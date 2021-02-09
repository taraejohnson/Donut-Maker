import {DonutMaker} from "./DonutMaker.js";

let newDonutMaker = new DonutMaker;

const donutButton = document.getElementById("donut-to-click");
const autoClickButton = document.getElementById("auto-click-button");
const donutCounter = document.getElementById("donut-counter");
const multiplierButton = document.getElementById("multiplier-button");
const autoClickDisplay = document.getElementById("auto-click-display");
const multiDisplay = document.getElementById("multiplier-display");
const autoClickCost = document.getElementById("current-auto-click-cost");
const multiCost = document.getElementById("current-multiplier-cost");
const donutsPerSec = document.getElementById("donuts-per-sec");

//event listeners

donutButton.addEventListener("click", () => {
    newDonutMaker.recordClick();
    donutCounter.innerText = `${Math.round(newDonutMaker.currentDonutCount)} Donuts`;
});

autoClickButton.addEventListener("click", () => {
    newDonutMaker.buyAutoClicker();

    donutCounter.innerText = `${Math.round(newDonutMaker.currentDonutCount)} Donuts`;
    autoClickDisplay.innerText = `${newDonutMaker.autoClickCount} Auto-Clickers Owned`;
    autoClickCost.innerText = `Current auto-clicker cost: ${(Math.round(newDonutMaker.autoClickCost))} donuts`;
    donutsPerSec.innerText = `You're making ${newDonutMaker.perSecondCount} donuts each second`;
});

multiplierButton.addEventListener("click", () => {
    newDonutMaker.buyMultiplier();

    donutCounter.innerText = `${Math.round(newDonutMaker.currentDonutCount)} Donuts`;
    multiDisplay.innerText = `${newDonutMaker.multiplierCount} Donut Multipliers Owned`;
    multiCost.innerText = `Current donut multiplier cost: ${(Math.round(newDonutMaker.multiplierCost))} donuts`;
    donutsPerSec.innerText = `You're making ${newDonutMaker.perSecondCount} donuts each second`;
})

/*autoClickButton.onload = () => {
    enableDisableAutoClickers();
}

enableDisableAutoClickers = () => {
    if (newDonutMaker.clickCount < newDonutMaker.autoClickCost) {
        autoClickButton.disabled = true;
    } else {
        autoClickButton.disabled = false;
    }
}*/

setInterval(function () {
    newDonutMaker.activateAutoClickers();
    donutCounter.innerText = `${Math.round(newDonutMaker.currentDonutCount)} Donuts`;
}, 1000);