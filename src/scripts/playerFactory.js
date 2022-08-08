import { initializeGame, receiveAttack,  } from './gameSetUp.js'
import {shipFactory , fleet, createFleet} from "./shipFactory.js"

const playerFactory = (humanOrAi, legalSpaces, legalSpacesForHits) => {
    const player = [];
    player.aiOrHuman = humanOrAi;
    player.legalSpaces = legalSpaces;
    player.gameBoard = [];
    player.fleet = createFleet(legalSpaces);
    player.sunkShips = [];
    player.afloatShips = [];
    player.availableMoves = legalSpacesForHits;
    return player
}


export default playerFactory;