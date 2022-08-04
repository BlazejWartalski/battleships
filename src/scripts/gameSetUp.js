import { random } from "lodash";
import { forEach } from "lodash";
import {createGameBoard, findLegalSpaces} from "./gameboard.js";
import {shipFactory , fleet} from "./shipFactory.js"
var gameboard = createGameBoard();
var legalSpaces = findLegalSpaces(gameboard);
var legalSpacesForHits = findLegalSpaces(gameboard);
var arrayLength = legalSpaces.length;
var randomNumber = Math.floor(Math.random() * arrayLength);
var playerFleet = [];

const listOfShips = fleet();

function initializeGame() {
    var randomCoordinates = legalSpaces[randomNumber][0]

    // legalSpaces.splice(randomNumber, 1);
}

function createFleet() {
    var listOfShips = fleet();
    Object.keys(listOfShips).forEach(entry => {
        for(var i = 0; i < listOfShips[entry].amount; i++) {
            var coordinates = [];
            for (var z = 0; z < listOfShips[entry].size; z++) {

                var randomNumber = Math.floor(Math.random() * arrayLength);
                var coordinate = legalSpaces[randomNumber][0]
                legalSpaces[randomNumber][1] = "occupied"
                coordinates.push(coordinate)
            }
            var ship = shipFactory(listOfShips[entry].size, coordinates)
            playerFleet.push(ship)
        }
    })
    console.log(playerFleet);
}

function receiveAttack() {
    var boxHit = legalSpacesForHits[randomNumber]
    console.log(boxHit);
    boxHit[2] = "hit"
    console.log(boxHit[2]);
    console.log(legalSpacesForHits)
    removeBoxFromList(boxHit);
    if (boxHit[1] == "occupied" ) {
        findDamagedShip(boxHit[0]);
        console.log(`${boxHit[0]} is a hit`)
    } else {
        console.log(`${boxHit[0]} "missed"`)
    }
}

function removeBoxFromList(boxHit) {
    console.log(boxHit)
    console.log(legalSpacesForHits);

    legalSpacesForHits.splice(_.findIndex(legalSpacesForHits, function(item){ 
        console.log(boxHit);
        console.log(item);
        console.log(item.value == boxHit);
        return item.value === boxHit;
    }), 1) ;
    console.log(legalSpacesForHits);
}

function findDamagedShip(square) {
    playerFleet.forEach(x => findDamagedShip2(x, square))
    console.log(playerFleet)
    console.log(square)
}

function findDamagedShip2(x, square) {
    if (x.position.includes(square)) {
        x.damage.push(square);
        console.log(x);
    }
}

export { initializeGame, receiveAttack, createFleet }