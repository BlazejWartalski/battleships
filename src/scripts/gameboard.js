import { forEach } from "lodash"
const gameBoard = [];

const createGameBoard = () => {
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


export {createGameBoard, findLegalSpaces}