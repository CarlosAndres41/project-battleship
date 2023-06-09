let shipLength = {
    carrier: 5,
    battleship: 4,
    destroyer: 3,
    submarine: 3,
    patrol: 2,
};

function createShip(type) {
    const ship = {
        length: shipLength[type],
        hits: 0,
        hit: function () {
            this.hits += 1;
        },
        isSunk: function () {
            return this.hits === this.length ? true : false;
        },
    };
    return ship;
}

function createGrid() {
    let grid = [];
    for (let i = 0; i < 10; i++) {
        let y = [];
        for (let j = 0; j < 10; j++) {
            y.push([]);
        }
        grid.push(y);
    }
    return grid;
}

function gameboard() {
    const gameboard = {
        grid: createGrid(),
    };
    return gameboard;
}

export { createShip };
