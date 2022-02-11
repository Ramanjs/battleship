const Gameboard = (playerName) => {
  const name = playerName;
  const marked = [];
  const ships = [];

  const receiveAttack = () => {

  };

  const isValidHit = (x, y) => {
    for (const coord of marked) {
      if (coord[0] == x && coord[1] == y) {
        return false;
      }
    }
    return true;
  };

  const newShip = (ship) => {
    ships.push(ship);
  };

  const isMarked = () => {

  };

  const isGameOver = () => {

  };

  const generateRandomPoint = () => {
    while(true) {
      let x = Math.floor((Math.random() * 10) + 1);
      let y = Math.floor((Math.random() * 10) + 1);
      if (isValidHit(x, y)) return [x, y]
    }
  };

  const generateCoordinates = (start, len, dir) => {
    const coords = [start];
    if (dir) {
      for (let i = 1; i < len; i++) {
        coords.push([start[0], start[1] + i]);
      }
    } else {
      for (let i = 1; i < len; i++) {
        coords.push([start[0] + i, start[1]]);
      }
    }
    return coords;
  };

  const isValidShip = (coords) => {
    for (const ship of ships) {
      blocks = ship.getBlocks();
      for (const block of blocks) {
        coord = block["value"];
        for (const x of coords) {
          if (x == coord) {
            return false;
          }
        }
      }
    }
    return true;
  };

  const makeShip = (len, dir) => {
    while(true) {
      start = generateRandomPoint();
      coords = generateCoordinates(start, len, dir);
      if (isValidShip(coords)) {
        return coords;
      }
    }
  };

  const getMarked = () => marked;
  const setMarked = (x, y) => {
    marked.push([x, y]);
  };

  const getName = () => name;

  return {
    getName, isValidHit, getMarked, setMarked, generateRandomPoint, makeShip, newShip
  }
};

module.exports = Gameboard;
