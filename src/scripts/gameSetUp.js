import { fromPairs } from "lodash";
import {receiveAttack, checkFleet} from "./attackLogic.js";
// import { renderThePage, renderTheGameboard, addTileFunctionality } from "./dom.js"

var currentPlayer = "human";


function playRound(human, ai) {
    if (checkFleet(ai) === true) {
        return alert("human wins");
    }
    if (checkFleet(human) === true) {
        return alert("ai wins")
    };
    if (currentPlayer === "human") {
        console.log("czlowiek")
    } else if (currentPlayer === "ai") {
        console.log("ai")
        aiMove(human, ai);
    }
}

function aiMove(human, ai) {
    var attackedBox = Math.floor(Math.random() * human.availableMoves.length);
    console.log(human.availableMoves[attackedBox][0])
    var humanTile = human.availableMoves[attackedBox][0] + "human";
    console.log(humanTile)
    const humanTiles = document.getElementById(humanTile)
    humanTiles.classList.remove("notHit")
    humanTiles.classList.add("hit")
    console.log(humanTiles);
    console.log(attackedBox)
    receiveAttack(attackedBox, human);
    if (checkFleet(human) === true) {
        return console.log("ai wins")
    } else {
    currentPlayer = "human";
    playRound(human, ai) }
}


function addTileFunctionality(human, ai) {
    var tiles = document.querySelectorAll(".ai.notHit")
    console.log(tiles)
    tiles.forEach(tile => {
        tile.addEventListener("click", event => {
            event.target.classList.remove("notHit")
            event.target.classList.add("hit")
            var buttonId = event.target.id;
            if (buttonId.length == 4) {
                buttonId = buttonId.slice(0,2)
            } else if (buttonId.length == 5) {
                buttonId = buttonId.slice(0,3)
            }
            receiveAttack(buttonId,ai);
            currentPlayer = "ai"
            playRound(human, ai)
        });
    });
}

export {playRound, addTileFunctionality}