import { random } from "lodash";
import { forEach } from "lodash";
import {createGameBoard, findLegalSpaces} from "./gameboard.js";
import {shipFactory , fleet} from "./shipFactory.js"
var gameboard = createGameBoard();
var legalSpaces = findLegalSpaces(gameboard);
var legalSpacesForHits = findLegalSpaces(gameboard);
var arrayLength = legalSpaces.length;
var randomNumber = Math.floor(Math.random() * arrayLength);
const listOfShips = fleet();
console.log(listOfShips)

function initializeGame() {
    var randomCoordinates = legalSpaces[randomNumber][0]

    legalSpaces.splice(randomNumber, 1);
}

function createFleet() {
    var listOfShips = fleet();
    console.log(Object.keys(listOfShips))
    Object.keys(listOfShips).forEach(entry => {
        
        for(var i = 0; i < listOfShips[entry].amount; i++) {
            var coordinates = [];
            for (var z = 0; z < listOfShips[entry].size; z++) {

                var randomNumber = Math.floor(Math.random() * arrayLength);
                var coordinate = legalSpaces[randomNumber][0]
                coordinates.push(coordinate)
                console.log(coordinates);
                // return coordinates
            }
            console.log("ship built")
            // var coordinate = (legalSpaces[randomNumber][0]);
            // console.log(coordinate)
            shipFactory(listOfShips[entry].size, coordinates)
        }
    })
}

function receiveAttack() {
    var boxHit = legalSpacesForHits[randomNumber]
    console.log(boxHit);
    boxHit[2] = "hit"
    console.log(boxHit[2]);
    if (boxHit[1] == "empty" ) {
        console.log(`${boxHit[0]} is a hit`)
    } else {
        console.log(`${boxHit[0]} + "missed"`)
    }
}

export { initializeGame, receiveAttack, createFleet }