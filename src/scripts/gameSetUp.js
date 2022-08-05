import { random } from "lodash";
import { forEach } from "lodash";
import {createGameBoard, findLegalSpaces, receiveAttack} from "./gameboard.js";
import {shipFactory , fleet} from "./shipFactory.js"
import playerFactory from "./playerFactory.js"

var gameboard = createGameBoard();

var legalSpaces = findLegalSpaces(gameboard);
console.log(legalSpaces);


var legalSpacesForHits = findLegalSpaces(gameboard);
console.log(legalSpacesForHits)
var arrayLength = legalSpaces.length;
var randomNumber = Math.floor(Math.random() * arrayLength);
var playerFleet = [];


function initializeGame() {
    var randomCoordinates = legalSpaces[randomNumber][0]
}

var human = playerFactory("human", legalSpaces);
var ai = playerFactory("ai", legalSpaces);

console.log(human)
console.log(ai)

export default initializeGame