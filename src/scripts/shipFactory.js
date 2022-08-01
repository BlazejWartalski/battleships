const shipFactory = (length) => {
    const ship = {};
    ship.size = length;
    ship.position = [];
    ship.damage = [];
    ship.isSunk = "afloat";
    ship.takeHit = (hit) => ship.damage.push(hit);
    ship.checkIfSunk = () => {
        if (ship.damage.length, ship.position.length) {
            var checkfloat = "sunk"
            return checkfloat
        } else {
            var checkfloat = "afloat"
            return checkfloat
        }
    }; 
    return ship
}

const fleet = () => {
    const ships = {};
    ships.carrier = 1;
    ships.battleship = 2;
    ships.destroyer = 3;
    ships.submarine = 4;
    ships.patrolBoat = 4;
}
// module.exports = shipFactory;
export {shipFactory , fleet}