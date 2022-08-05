import { forEach } from "lodash"

const createGameBoard = () => {
    const gameBoard = [];
    addColumns(gameBoard);
    return gameBoard
}

function addColumns(gameBoard) {
    for(var i = 0; i < 10; i++) {
        var column = []
        gameBoard.push(column)
    }
    addRow(gameBoard);
}

function addRow(gameBoard) {
    for ( var i = 0; i < 10; i++ ){
        var columnNumber = i+1;
        addBoxes(gameBoard[i], columnNumber)
    }

}
function addBoxes(column, columnNumber) {
    const dictionary = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"]
        for (var i = 0; i < 10; i++) {
        var row = [];
        row.push(columnNumber + dictionary[i]);
        row.push("empty");
        row.push("notHit")
        column.push(row);
    }
}

function findLegalSpaces(gameBoard) {
    var legalSpaces = [];
    gameBoard.forEach(column => findEmptySpaces(column, legalSpaces))
    return legalSpaces;
}

function findEmptySpaces(column, legalSpaces) {
    column.forEach(box => findEmptySquares(box, legalSpaces))

}

function findEmptySquares(box, legalSpaces) {
    if (box.includes("empty")) {
        legalSpaces.push(box);
    }
}

function receiveAttack() {
    var boxHit = legalSpacesForHits[randomNumber]
    boxHit[2] = "hit"
    removeBoxFromList(boxHit);
    if (boxHit[1] == "occupied" ) {
        findDamagedShip(boxHit[0]);
        console.log(`${boxHit[0]} is a hit`)
        // oneMoreMove();
    } else {
        console.log(`${boxHit[0]} "missed"`)
        // nextPlayerMove();
    }
}

function removeBoxFromList(boxHit) {
    console.log(boxHit)
    console.log(legalSpacesForHits);

    legalSpacesForHits.splice(_.findIndex(legalSpacesForHits, function(item){ 

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
        console.log(x.checkIfSunk())
        if (x.checkIfSunk() === "sunk") {
            console.log("check more ships")
            checkFleet();
        }
    }
}

function checkFleet() {
    console.log(playerFleet);
    var fleetSize = playerFleet.length;
    var survivingShips = [];
    for (var i = 0; i < fleetSize; i++) {
        if (playerFleet[i].isSunk === "afloat") {
            survivingShips.push(playerFleet[i]);
            if (survivingShips.length == "0") {
                console.log("game over")
            }
        };
    }
    console.log(survivingShips)
}

export {createGameBoard, findLegalSpaces, receiveAttack}