import {shipFactory , fleet} from "./scripts/shipFactory.js";
import {createGameBoard, findLegalSpaces} from "./scripts/gameboard.js";
const ship2 = shipFactory(3);

ship2.checkIfSunk()

createGameBoard();
console.log(gameBoard);

findLegalSpaces(gameBoard);