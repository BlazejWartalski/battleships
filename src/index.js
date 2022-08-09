import initializeGame from "./scripts/gameSetUp.js"
import {createGameBoard, findLegalSpaces, receiveAttack} from "./scripts/gameboard.js";
import playerFactory from "./scripts/playerFactory.js"
import {renderThePage, renderTheGameboard} from "./scripts/dom.js";
import addContentToFooter from "./components/footer.js";
import addContentToHeader from "./components/header.js";
import css from "./style.css"

var gameboard = createGameBoard();
console.log(gameboard);
var legalSpaces = findLegalSpaces(gameboard);
var legalSpacesForHits = findLegalSpaces(gameboard);
var legalSpacesForHits2 = findLegalSpaces(gameboard);

var human = playerFactory("human", legalSpaces, legalSpacesForHits);
var ai = playerFactory("ai", legalSpaces, legalSpacesForHits2);

renderThePage();
addContentToHeader();
addContentToFooter();
renderTheGameboard(human);
renderTheGameboard(ai);
initializeGame(human, ai);

console.log(human)
console.log(ai)