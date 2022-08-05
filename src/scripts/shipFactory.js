import {createGameBoard, findLegalSpaces} from "./gameboard.js";


const shipFactory = (length, position) => {
    const ship = {};
    ship.size = length;
    ship.position = position;
    ship.damage = [];
    ship.isSunk = "afloat";
    ship.takeHit = (hit) => ship.damage.push(hit);
    ship.checkIfSunk = () => {
        if (ship.damage.length === ship.position.length) {
            ship.isSunk = "sunk"
            return ship.isSunk
        } else {
            return ship.isSunk
        }
    };
    return ship
}

const fleet = () => {
    const fleet = {};
    fleet.carrier = {
        size : 5,
        amount : 1
    };
    fleet.battleship = {
        size : 4,
        amount: 2
    };
    fleet.destroyer = {
        size : 3,
        amount: 3,
    };
    fleet.submarine = {
        size : 2,
        amount : 2,
    };
    fleet.patrolBoat = {
        size : 1,
        amount : 4,
    };

    return fleet
}

function createFleet(legalSpaces) {
    var listOfShips = fleet();
    console.log(listOfShips);
    var playerFleet = [];
    Object.keys(listOfShips).forEach(entry => {
        for(var i = 0; i < listOfShips[entry].amount; i++) {
            var coordinates = [];
            for (var z = 0; z < listOfShips[entry].size; z++) {

                var randomNumber = Math.floor(Math.random() * legalSpaces.length);
                var coordinate = legalSpaces[randomNumber][0]
                legalSpaces[randomNumber][1] = "occupied"
                coordinates.push(coordinate)
            }
            var ship = shipFactory(listOfShips[entry].size, coordinates)
            playerFleet.push(ship)
        }
    })
    return playerFleet;
}
// module.exports = shipFactory;
export {shipFactory , fleet, createFleet}