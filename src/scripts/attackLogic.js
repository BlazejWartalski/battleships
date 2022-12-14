import { intersection } from "lodash";

function receiveAttack(attackedBox, player) {
    var boxHit = "";
    if (typeof attackedBox == "number") {
        boxHit = player.availableMoves[attackedBox];
        boxHit[2] = "hit"
        if (boxHit[1] == "occupied" ) {
            findDamagedShip(boxHit[0], player);
        } else {
            return
        }
        removeBoxFromList(boxHit, player);
    } else if (typeof attackedBox == "string") {
        for (var i = 0; i < player.availableMoves.length; i++) {
            if (player.availableMoves[i][0] == attackedBox) {
                console.log(attackedBox)
                console.log(player.availableMoves[i][2])
                if (player.availableMoves[i][2] == "hit") {
                    return alert ("try again")
                }
                boxHit = player.availableMoves[i]
                boxHit[2] = "hit"
                if (boxHit[1] == "occupied" ) {
                findDamagedShip(boxHit[0], player);
                } else {
                return
                }
            }
        }
    }
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
    console.log("szukamy statku")
    const playerFleet = player.fleet;
    playerFleet.forEach(ship => findDamagedShip2(ship, square, playerFleet, player))
}

function findDamagedShip2(ship, square, playerFleet, player) {
    if (ship.position.includes(square)) {
        console.log("jest usterka!")
        ship.damage.push(square);
        if (ship.checkIfSunk() === "sunk") {
            console.log("JEB!")
            player.sunkShips.push(ship);
        }
    }
}

function checkFleet(player) {
    console.log(player);
    if (player.sunkShips.length == player.fleet.length) {
        return true
        }
    else {
        return false
    }
}

export { receiveAttack, checkFleet }