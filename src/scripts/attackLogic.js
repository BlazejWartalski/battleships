function receiveAttack(attackedBox, player) {
    console.log(player)
    console.log(player.availableMoves.length)
    console.log(player.availableMoves[attackedBox])
    const boxHit = player.availableMoves[attackedBox];
    boxHit[2] = "hit"
    if (boxHit[1] == "occupied" ) {
        findDamagedShip(boxHit[0], player);
        // console.log(`${boxHit[0]} is a hit`)
        // oneMoreMove();
    } else {
        // console.log(`${boxHit[0]} "missed"`)
        // nextPlayerMove();
    }
    removeBoxFromList(boxHit, player);
}

function removeBoxFromList(boxHit, player) {
    const legalMoves = player.availableMoves
    const index = legalMoves.indexOf(boxHit);
    if (index > -1) {
        legalMoves.splice(index, 1)
        ;
    }
}

function findDamagedShip(square, player) {
    const playerFleet = player.fleet;
    playerFleet.forEach(ship => findDamagedShip2(ship, square, playerFleet, player))
}

function findDamagedShip2(ship, square, playerFleet, player) {
    if (ship.position.includes(square)) {
        ship.damage.push(square);
        if (ship.checkIfSunk() === "sunk") {
            player.sunkShips.push(ship);
        }
    }
}

function checkFleet(player) {
    if (player.sunkShips.length == "12") {
        return true
        }
    else {
        return false
    }
}

export { receiveAttack, checkFleet }