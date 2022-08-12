import _ from 'lodash';

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
    var playerFleet = [];
    var freeSpace = [];

    for (var u = 0; u < legalSpaces.length; u++) {
        freeSpace.push(legalSpaces[u])
    }

    Object.keys(listOfShips).forEach(entry => {
        for(var i = 0; i < listOfShips[entry].amount; i++) {
            var shipLength = listOfShips[entry].size
            var coordinates = [];
            var originPointIndex = getOriginPoint(freeSpace)
            coordinates = chooseDirectionToGo(originPointIndex, freeSpace, legalSpaces, shipLength);
            var ship = shipFactory(listOfShips[entry].size, coordinates)
            playerFleet.push(ship)
        }
    })
    return playerFleet;
}

function getOriginPoint(freeSpace) {
    var originPointIndex = Math.floor(Math.random() * freeSpace.length);

    if (freeSpace[originPointIndex][1] == "empty") {
        return originPointIndex
    } else if (freeSpace[originPointIndex][1] == "occupied")
    return getOriginPoint(freeSpace);
}

    // var originPoint = freeSpace[randomNumber]


function chooseDirectionToGo(originPointIndex, freeSpace, legalSpaces, shipLength) {
    var shipCoordinates = []
    shipCoordinates.push(legalSpaces[originPointIndex][0])
    var boundaries = createRowBoundary(originPointIndex);
    var upperBoundary = boundaries[1];
    var lowerBoundary = boundaries[0];

    if (checkIfEnoughCoordinates(shipCoordinates, shipLength) == true && legalSpaces[originPointIndex][1] == "empty") {
        legalSpaces[originPointIndex][1] = "occupied"
        return shipCoordinates
    }
    if (typeof legalSpaces[originPointIndex+1] !== "undefined" && originPointIndex+1 <= upperBoundary && legalSpaces[originPointIndex+1][1] == "empty") {
        shipCoordinates.push(legalSpaces[originPointIndex+1][0]);
        if (checkIfEnoughCoordinates(shipCoordinates, shipLength) == true) {
                legalSpaces[originPointIndex][1] = "occupied";
                legalSpaces[originPointIndex+1][1] = "occupied";
                return shipCoordinates
        };
        if (typeof legalSpaces[originPointIndex+2] !== "undefined" && originPointIndex+2 <= upperBoundary && legalSpaces[originPointIndex+2][1] == "empty") {
            shipCoordinates.push(legalSpaces[originPointIndex+2][0]);
            if (checkIfEnoughCoordinates(shipCoordinates, shipLength) == true) {
                legalSpaces[originPointIndex][1] = "occupied";
                legalSpaces[originPointIndex+1][1] = "occupied";
                legalSpaces[originPointIndex+2][1] = "occupied";
                return shipCoordinates
            };            
            if (typeof legalSpaces[originPointIndex+3] !== "undefined" && originPointIndex+3 <= upperBoundary && legalSpaces[originPointIndex+3][1] == "empty") {
                shipCoordinates.push(legalSpaces[originPointIndex+3][0]);
                if (checkIfEnoughCoordinates(shipCoordinates, shipLength) == true) {
                    legalSpaces[originPointIndex][1] = "occupied";
                    legalSpaces[originPointIndex+1][1] = "occupied";
                    legalSpaces[originPointIndex+2][1] = "occupied";
                    legalSpaces[originPointIndex+3][1] = "occupied";
                    return shipCoordinates
                };            
            } else if 
                 (typeof legalSpaces[originPointIndex-1] !== "undefined" && originPointIndex-1 >= lowerBoundary && legalSpaces[originPointIndex-1][1] == "empty") {
                    shipCoordinates.push(legalSpaces[originPointIndex-1][0]);
                    if (checkIfEnoughCoordinates(shipCoordinates, shipLength) == true) {
                        legalSpaces[originPointIndex][1] = "occupied";
                        legalSpaces[originPointIndex+1][1] = "occupied";
                        legalSpaces[originPointIndex+2][1] = "occupied";
                        legalSpaces[originPointIndex-1][1] = "occupied";
                        return shipCoordinates
                    };
                }
        }
        else if (typeof legalSpaces[originPointIndex-1] !== "undefined" && originPointIndex-1 >= lowerBoundary && legalSpaces[originPointIndex-1][1] == "empty") {
                shipCoordinates.push(legalSpaces[originPointIndex-1][0]);
                if (checkIfEnoughCoordinates(shipCoordinates, shipLength) == true) {
                    legalSpaces[originPointIndex][1] = "occupied";
                    legalSpaces[originPointIndex+1][1] = "occupied";
                    legalSpaces[originPointIndex-1][1] = "occupied";
                    return shipCoordinates
                };                
                if (typeof legalSpaces[originPointIndex-2] !== "undefined" && originPointIndex-2 >= lowerBoundary && legalSpaces[originPointIndex-2][1] == "empty") {
                    shipCoordinates.push(legalSpaces[originPointIndex-2][0])
                    if (checkIfEnoughCoordinates(shipCoordinates, shipLength) == true) {
                        legalSpaces[originPointIndex][1] = "occupied";
                        legalSpaces[originPointIndex+1][1] = "occupied";
                        legalSpaces[originPointIndex-1][1] = "occupied";
                        legalSpaces[originPointIndex-2][1] = "occupied";
                        return shipCoordinates
                    };                
                }
        }
    }
    else if (typeof legalSpaces[originPointIndex-1] !== "undefined" && originPointIndex-1 >= lowerBoundary && legalSpaces[originPointIndex-1][1] == "empty") {
            shipCoordinates.push(legalSpaces[originPointIndex-1][0]);
            if (checkIfEnoughCoordinates(shipCoordinates, shipLength) == true) {
                legalSpaces[originPointIndex][1] = "occupied";
                legalSpaces[originPointIndex-1][1] = "occupied";
                return shipCoordinates
            };
                if (typeof legalSpaces[originPointIndex-2] !== "undefined" && originPointIndex-2 >= lowerBoundary && legalSpaces[originPointIndex-2][1] == "empty") {
                shipCoordinates.push(legalSpaces[originPointIndex-2][0])
                if (checkIfEnoughCoordinates(shipCoordinates, shipLength) == true) {
                    legalSpaces[originPointIndex][1] = "occupied";
                    legalSpaces[originPointIndex-1][1] = "occupied";
                    legalSpaces[originPointIndex-2][1] = "occupied";
                    return shipCoordinates
                };
                    if (typeof legalSpaces[originPointIndex-3] !== "undefined" && originPointIndex-3 >= lowerBoundary && legalSpaces[originPointIndex-3][1] == "empty") {
                    shipCoordinates.push(legalSpaces[originPointIndex-3][0])
                    if (checkIfEnoughCoordinates(shipCoordinates, shipLength) == true) {
                        legalSpaces[originPointIndex][1] = "occupied";
                        legalSpaces[originPointIndex-1][1] = "occupied";
                        legalSpaces[originPointIndex-2][1] = "occupied";
                        legalSpaces[originPointIndex-3][1] = "occupied";
                        return shipCoordinates
                    };                }
            }
    }
    else if (typeof legalSpaces[originPointIndex+10] !== "undefined" && originPointIndex+10 <= 100  && legalSpaces[originPointIndex+10][1] == "empty") {
            shipCoordinates.push(legalSpaces[originPointIndex+10][0]);
            if (checkIfEnoughCoordinates(shipCoordinates, shipLength) == true) {
                legalSpaces[originPointIndex][1] = "occupied";
                legalSpaces[originPointIndex+10][1] = "occupied";
                return shipCoordinates
            };
            if (typeof legalSpaces[originPointIndex+20] !== "undefined" && originPointIndex+20 <= 100 && legalSpaces[originPointIndex+20][1] == "empty") {
                shipCoordinates.push(legalSpaces[originPointIndex+20][0]);
                if (checkIfEnoughCoordinates(shipCoordinates, shipLength) == true) {
                    legalSpaces[originPointIndex][1] = "occupied";
                    legalSpaces[originPointIndex+10][1] = "occupied";
                    legalSpaces[originPointIndex+20][1] = "occupied";
                    return shipCoordinates
                };
                    if (typeof legalSpaces[originPointIndex+30] !== "undefined" && originPointIndex+30 <= 100 && legalSpaces[originPointIndex+30][1] == "empty") {
                    shipCoordinates.push(legalSpaces[originPointIndex+30][0]);
                    if (checkIfEnoughCoordinates(shipCoordinates, shipLength) == true) {
                        legalSpaces[originPointIndex][1] = "occupied";
                        legalSpaces[originPointIndex+10][1] = "occupied";
                        legalSpaces[originPointIndex+20][1] = "occupied";
                        legalSpaces[originPointIndex+30][1] = "occupied";
                        return shipCoordinates
                    };
                    } else if 
                     (typeof legalSpaces[originPointIndex-10] !== "undefined" && originPointIndex-10 >= 0 && legalSpaces[originPointIndex-10][1] == "empty") {
                        shipCoordinates.push(legalSpaces[originPointIndex-10][0]);
                        if (checkIfEnoughCoordinates(shipCoordinates, shipLength) == true) {
                            legalSpaces[originPointIndex][1] = "occupied";
                            legalSpaces[originPointIndex+10][1] = "occupied";
                            legalSpaces[originPointIndex+20][1] = "occupied";
                            legalSpaces[originPointIndex-10][1] = "occupied";
                            return shipCoordinates
                        };
                    }
            }
            else if (typeof legalSpaces[originPointIndex-10] !== "undefined" && originPointIndex-10 >= 0 && legalSpaces[originPointIndex-10][1] == "empty") {
                    shipCoordinates.push(legalSpaces[originPointIndex-10][0]);
                    if (checkIfEnoughCoordinates(shipCoordinates, shipLength) == true) {
                        legalSpaces[originPointIndex][1] = "occupied";
                        legalSpaces[originPointIndex+10][1] = "occupied";
                        legalSpaces[originPointIndex-10][1] = "occupied";
                        return shipCoordinates
                    };
                    if (typeof legalSpaces[originPointIndex-20] !== "undefined" && originPointIndex-20 >= 0 && legalSpaces[originPointIndex-20][1] == "empty") {
                        shipCoordinates.push(legalSpaces[originPointIndex-20][0])
                        if (checkIfEnoughCoordinates(shipCoordinates, shipLength) == true) {
                            legalSpaces[originPointIndex][1] = "occupied";
                            legalSpaces[originPointIndex-10][1] = "occupied";
                            legalSpaces[originPointIndex-20][1] = "occupied";
                            return shipCoordinates
                        };
                        if (typeof legalSpaces[originPointIndex-30] !== "undefined" && originPointIndex-30 >= 0 && legalSpaces[originPointIndex-30][1] == "empty") {
                            shipCoordinates.push(legalSpaces[originPointIndex-20][0])
                            if (checkIfEnoughCoordinates(shipCoordinates, shipLength) == true) {
                                legalSpaces[originPointIndex][1] = "occupied";
                                legalSpaces[originPointIndex-10][1] = "occupied";
                                legalSpaces[originPointIndex-20][1] = "occupied";
                                legalSpaces[originPointIndex-30][1] = "occupied";
                                return shipCoordinates
                            };
                        }
                    }
            }
        }
    else {
        console.log("nie ma wolnych miejsc")
        var newRandomSpace = getOriginPoint(freeSpace)
        return chooseDirectionToGo(newRandomSpace, freeSpace, legalSpaces, shipLength)
    }

    return shipCoordinates
    // emptyTiles.push
}

function createRowBoundary(originPointIndex) {
    var limit = String(originPointIndex);
    var boundaries = [];
    
    if (limit.length == 1) {
        boundaries.push(0, 9)
        return boundaries;
    } else {
        var strLimit = limit.toString()
        var lowBoundary = strLimit.charAt(0) + "0";
        var upperBoundary = parseInt(lowBoundary) + 9;
        boundaries.push(lowBoundary, upperBoundary);
        return boundaries;
    }
    
}

function checkIfEnoughCoordinates(shipCoordinates, shipLength) {

    if (shipCoordinates.length === shipLength) {

        return true
    } else {
        return false
    }
}
// module.exports = shipFactory;
export {shipFactory , fleet, createFleet}