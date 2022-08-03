const shipFactory = (length, position) => {
    const ship = {};
    ship.size = length;
    ship.position = position;
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
    console.log(ship)
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
// module.exports = shipFactory;
export {shipFactory , fleet}