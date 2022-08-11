import {receiveAttack, checkFleet} from "./attackLogic.js";


function initializeGame(human, ai) {
    aiMove(human, ai);
}

function aiMove(human, ai) {
    var attackedBox = Math.floor(Math.random() * human.availableMoves.length);
    receiveAttack(attackedBox, human);
    if (checkFleet(human) === true) {
        return console.log("ai wins")
    };
    playerMove(human, ai);
}

function playerMove(human, ai) {
    var playerInput = Math.floor(Math.random() * ai.availableMoves.length);
    receiveAttack(playerInput, ai);
    if (checkFleet(ai) === true) {
        return console.log("human wins");
    };
    aiMove(human, ai);
}



export default initializeGame