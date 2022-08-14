import { fromPairs } from "lodash";
import {receiveAttack, checkFleet} from "./attackLogic.js";
// import { renderThePage, renderTheGameboard, addTileFunctionality } from "./dom.js"

var currentPlayer = "human";


function playRound(human, ai) {
    if (currentPlayer === "human") {
        playerMove(human, ai);
    } else if (currentPlayer === "ai") {
        aiMove(human, ai);
    }
}

function aiMove(human, ai) {
    var attackedBox = Math.floor(Math.random() * human.availableMoves.length);
    receiveAttack(attackedBox, human);
    if (checkFleet(human) === true) {
        return console.log("ai wins")
    } else {
    currentPlayer = "human";
    playRound(human, ai) }
}

function playerMove(human, ai) {
    // var playerInput = Math.floor(Math.random() * ai.availableMoves.length);
    var tileId = "";
    

    // receiveAttack(playerInput, ai);
    if (checkFleet(ai) === true) {
        return console.log("human wins");
    } else {
    currentPlayer = "ai"
    playRound(human, ai)
    }
}

function addTileFunctionality(ai) {
    console.log(ai);
    var tiles = document.querySelectorAll(".ai.notHit")
    console.log(tiles)
    tiles.forEach(tile => {
        tile.addEventListener("click", event => {
            console.log("hiya")
            var buttonId = event.target.id;
            if (buttonId.length == 4) {
                buttonId = buttonId.slice(0,2)
            } else if (buttonId.length == 5) {
                buttonId = buttonId.slice(0,3)
            }
            console.log(buttonId);
            receiveAttack(buttonId,ai);
        });
    });
    // for (let item of tiles) {
    //     item.addEventListener("click", getTile(ai))
    // }
}

function getTile(ai) {
    var buttonId = this.attributes[1].value;
    console.log(this);
    console.log(ai)
    this.classList.remove("notHit")
    this.classList.add("hit");
    if (buttonId.length == 4) {
        buttonId = buttonId.slice(0,2)
    } else if (buttonId.length == 5) {
        buttonId = buttonId.slice(0,3)
    }
    console.log(buttonId);
    var player = "ewe";
    // receiveAttack(buttonId, player)
}
export {playRound, addTileFunctionality}