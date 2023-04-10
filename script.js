function createShip(length) {
    const ship = {
        length: length,
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
