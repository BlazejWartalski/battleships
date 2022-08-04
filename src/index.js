import {shipFactory , fleet} from "./scripts/shipFactory.js";
import {createGameBoard, findLegalSpaces} from "./scripts/gameboard.js";
import { initializeGame, receiveAttack, createFleet } from "./scripts/gameSetUp.js"
var gameboard = createGameBoard();

initializeGame();
createFleet(gameboard);
receiveAttack();