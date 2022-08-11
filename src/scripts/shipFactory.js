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
    // fleet.carrier = {
    //     size : 5,
    //     amount : 1
    // };
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
            chooseDirectionToGo(originPointIndex, freeSpace, legalSpaces, shipLength);
            for (var z = 0; z < listOfShips[entry].size; z++) {
                var randomNumber = Math.floor(Math.random() * freeSpace.length);
                var coordinate = freeSpace[randomNumber][0]

                freeSpace[randomNumber][1] = "occupied"
                freeSpace.splice(randomNumber, 1);

                coordinates.push(coordinate)
            }
            var ship = shipFactory(listOfShips[entry].size, coordinates)
            playerFleet.push(ship)
        }
    })
    return playerFleet;
}

function getOriginPoint(freeSpace) {
    var originPointIndex = Math.floor(Math.random() * freeSpace.length);
    // var originPoint = freeSpace[randomNumber]

    return originPointIndex
}

function chooseDirectionToGo(originPointIndex, freeSpace, legalSpaces, shipLength) {
    console.log("nowy statek")
    var shipCoordinates = []
    shipCoordinates.push(legalSpaces[originPointIndex][0])
    console.log(originPointIndex);
    createRowBoundary(originPointIndex);

    if (legalSpaces[originPointIndex+1][1] == !undefined || "empty") {
        shipCoordinates.push(legalSpaces[originPointIndex+1][0]);
        console.log(legalSpaces[originPointIndex][0]);
        if (checkIfEnoughCoordinates(shipCoordinates, shipLength) == true) {
            return console.log(shipCoordinates)
        };
        if (legalSpaces[originPointIndex+2][1] == !undefined || "empty") {
            shipCoordinates.push(legalSpaces[originPointIndex+2][0]);
            if (checkIfEnoughCoordinates(shipCoordinates, shipLength) == true) {
                return console.log(shipCoordinates)
            };            
            if (legalSpaces[originPointIndex+3][1] == !undefined || "empty") {
                shipCoordinates.push(legalSpaces[originPointIndex+3][0]);
                if (checkIfEnoughCoordinates(shipCoordinates, shipLength) == true) {
                    return console.log(shipCoordinates)
                };            
            } else if 
                 (legalSpaces[originPointIndex-1][1] == !undefined || "empty") {
                    shipCoordinates.push(legalSpaces[originPointIndex-1][0]);
                    if (checkIfEnoughCoordinates(shipCoordinates, shipLength) == true) {
                        return console.log(shipCoordinates)
                    };
                }
        }
        else if (legalSpaces[originPointIndex-1][1] == !undefined || "empty") {
                shipCoordinates.push(legalSpaces[originPointIndex-1][0]);
                if (checkIfEnoughCoordinates(shipCoordinates, shipLength) == true) {
                    return console.log(shipCoordinates)
                };                if (legalSpaces[originPointIndex-2][1] == !undefined || "empty") {
                    shipCoordinates.push(legalSpaces[originPointIndex-2][0])
                    if (checkIfEnoughCoordinates(shipCoordinates, shipLength) == true) {
                        return console.log(shipCoordinates)
                    };                
                }
        }
    }
    else if (legalSpaces[originPointIndex-1][1] == !undefined || "empty") {
            shipCoordinates.push(legalSpaces[originPointIndex-1][0]);
            if (checkIfEnoughCoordinates(shipCoordinates, shipLength) == true) {
                return console.log(shipCoordinates)
            };
                if (legalSpaces[originPointIndex-2][1] == !undefined || "empty") {
                shipCoordinates.push(legalSpaces[originPointIndex-2][0])
                if (checkIfEnoughCoordinates(shipCoordinates, shipLength) == true) {
                    return console.log(shipCoordinates)
                };
                    if (legalSpaces[originPointIndex-3][1] == !undefined || "empty") {
                    shipCoordinates.push(legalSpaces[originPointIndex-3][0])
                    if (checkIfEnoughCoordinates(shipCoordinates, shipLength) == true) {
                        return console.log(shipCoordinates)
                    };                }
            }
    }
    else {
        if (legalSpaces[originPointIndex+10][1] == !undefined || "empty") {
            shipCoordinates.push(legalSpaces[originPointIndex+10][0]);

            if (legalSpaces[originPointIndex+20][1] == !undefined || "empty") {
                shipCoordinates.push(legalSpaces[originPointIndex+20][0]);
                if (checkIfEnoughCoordinates(shipCoordinates, shipLength) == true) {
                    return console.log(shipCoordinates)
                };
                    if (legalSpaces[originPointIndex+30][1] == !undefined || "empty") {
                    shipCoordinates.push(legalSpaces[originPointIndex+30][0]);
                    if (checkIfEnoughCoordinates(shipCoordinates, shipLength) == true) {
                        return console.log(shipCoordinates)
                    };
                    } else if 
                     (legalSpaces[originPointIndex-10][1] == !undefined || "empty") {
                        shipCoordinates.push(legalSpaces[originPointIndex-10][0]);
                        if (checkIfEnoughCoordinates(shipCoordinates, shipLength) == true) {
                            return console.log(shipCoordinates)
                        };
                    }
            }
            else if (legalSpaces[originPointIndex-10][1] == !undefined || "empty") {
                    shipCoordinates.push(legalSpaces[originPointIndex-10][0]);
                    if (checkIfEnoughCoordinates(shipCoordinates, shipLength) == true) {
                        return console.log(shipCoordinates)
                    };
                    if (legalSpaces[originPointIndex-20][1] == !undefined || "empty") {
                        shipCoordinates.push(legalSpaces[originPointIndex-20][0])
                        if (checkIfEnoughCoordinates(shipCoordinates, shipLength) == true) {
                            return console.log(shipCoordinates)
                        };
                    }
            }
        }
    }
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
        console.log(boundaries);
        return boundaries;
        console.log(upperBoundary);
        console.log(lowBoundary);
        console.log(strLimit.charAt(0))
        console.log(limit)
    }
    
}

function checkIfEnoughCoordinates(shipCoordinates, shipLength) {
    if (shipCoordinates.length === shipLength) {
        console.log("mamy go")
        return true
    } else {
        return false
    }
}
// module.exports = shipFactory;
export {shipFactory , fleet, createFleet}