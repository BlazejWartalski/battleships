// const shipFactory = require('../ship.js');
import shipFactory from "../shipFactory.js";

test('return a ship of length 4', () => {
    let ship1 = shipFactory(4);
    expect(ship1.size).toBe(4);
})

test('return a ship with afloat property', () => {
    let ship1 = shipFactory(3);
    expect(ship1.isSunk).toBe("afloat")
})

test('check if ship is sunk when length = damage', () => {
    let ship1 = shipFactory(0);
    expect(ship1.checkIfSunk()).toBe("afloat");
});

test('check if ship takes damage', () => {
    let ship1 = shipFactory(4);
    ship1.takeHit("eh");
    expect(ship1.damage).toEqual(["eh"]);
});