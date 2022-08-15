import {playRound, addTileFunctionality} from "./scripts/gameSetUp.js"
import {createGameBoard, findLegalSpaces, receiveAttack} from "./scripts/gameboard.js";
import playerFactory from "./scripts/playerFactory.js"
import {renderThePage, renderTheGameboard} from "./scripts/dom.js";
import addContentToFooter from "./components/footer.js";
import addContentToHeader from "./components/header.js";
import css from "./style.css"

var gameboard = createGameBoard();
var gameboard2 = createGameBoard();

var legalSpaces = findLegalSpaces(gameboard);
var legalSpacesP2 = findLegalSpaces(gameboard2);

var legalSpacesForHits = findLegalSpaces(gameboard);
var legalSpacesForHits2 = findLegalSpaces(gameboard2);

var human = playerFactory("human", legalSpaces, legalSpacesForHits);
var ai = playerFactory("ai", legalSpacesP2, legalSpacesForHits2);

console.log(human)
console.log(ai);

renderThePage();
addContentToHeader();
addContentToFooter();
renderTheGameboard(human);
renderTheGameboard(ai);
playRound(human, ai);
addTileFunctionality(human, ai);