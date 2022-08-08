import initializeGame from "./scripts/gameSetUp.js"
import {createGameBoard, findLegalSpaces, receiveAttack} from "./scripts/gameboard.js";
import playerFactory from "./scripts/playerFactory.js"


var gameboard = createGameBoard();
var legalSpaces = findLegalSpaces(gameboard);
var legalSpacesForHits = findLegalSpaces(gameboard);
var legalSpacesForHits2 = findLegalSpaces(gameboard);

var human = playerFactory("human", legalSpaces, legalSpacesForHits);
var ai = playerFactory("ai", legalSpaces, legalSpacesForHits2);


initializeGame(human, ai);

console.log(human)
console.log(ai)