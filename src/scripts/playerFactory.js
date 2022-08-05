import { initializeGame, receiveAttack,  } from './gameSetUp.js'
import {shipFactory , fleet, createFleet} from "./shipFactory.js"

const playerFactory = (humanOrAi, legalSpaces) => {
    const player = [];
    player.aiOrHuman = humanOrAi;
    player.legalSpaces = [];
    player.gameBoard = [];
    console.log(createFleet(legalSpaces))
    player.fleet = [createFleet(legalSpaces)];
    player.afloatShips = [];
    player.availableMoves = [];
console.log(player);
    return player
}


export default playerFactory;