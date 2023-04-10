import { createShip } from './script';

const ship = createShip(4);

test('Create ship', () => {
    expect(typeof ship).toBe('object');
});

test('Ship length', () => {
    expect(ship.length).toBe(4);
});

test('Ship hits', () => {
    expect(ship.hits).toBe(0);
});

test('hit()', () => {
    ship.hit();
    expect(ship.hits).toBe(1);
});

test('isSunk()', () => {
    ship.hit();
    ship.hit();
    ship.hit();
    expect(ship.isSunk()).toBe(true);
});
