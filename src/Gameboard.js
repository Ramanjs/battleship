const Gameboard = (playerName) => {
  const name = playerName;
  const marked = [];
  const ships = [];

  const receiveAttack = (x, y) => {
    marked.push([x, y]);
    for (const ship of ships) {
      if (ship.isHit(x, y)) {
        if (ship.isSunk()) {
          return [true, true, ship]
        } else {
          return [true, false, ship];
        }
      }
    }
    return [false, [x, y]];
  };

  const isValidHit = (x, y) => {
    if (x > 10 || y > 10 || x < 1 || y < 1) {
      return false;
    }
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

  const isGameOver = () => {
    console.log(ships);
    for (let ship of ships) {
      console.log(ship);
      if (!ship.isSunk()) {
        console.log(ship.isSunk());
        return false;
      }
    }
    return true;
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
      const blocks = ship.getBlocks();
      for (const block of blocks) {
        //let coord = block["value"];
        for (const x of coords) {
          //console.log(1, coord);
          //console.log(x);
          //console.log([x[0] + 1, x[1]]);
          //console.log([x[0] - 1, x[1]]);
          //console.log([x[0], x[1] + 1]);
          //console.log([x[0], x[1] - 1]);
          //console.log([x[0] + 1, x[1] + 1]);
          //console.log([x[0] - 1, x[1] + 1]);
          //console.log([x[0] + 1, x[1] - 1]);
          //console.log([x[0] - 1, x[1] - 1]);
          const coord = JSON.stringify(block["value"]);
          //console.log(coord);
          if (JSON.stringify(x) == coord) {
            console.log(false);
            return false;
          }
          if (JSON.stringify([x[0] + 1, x[1]]) == coord){
            console.log(false);
            return false;
          }
          if (JSON.stringify([x[0] - 1, x[1]]) == coord) {
            console.log(false);
            return false;
          }
          if (JSON.stringify([x[0], x[1] + 1]) == coord) {
            console.log(false);
            return false;
          }
          if (JSON.stringify([x[0], x[1] - 1]) == coord) {
            console.log(false);
            return false;
          }
          if (JSON.stringify([x[0] + 1, x[1] + 1]) == coord) {
            console.log(false);
            return false;
          }
          if (JSON.stringify([x[0] + 1, x[1] - 1]) == coord) {
            console.log(false);
            return false;
          }
          if (JSON.stringify([x[0] - 1, x[1] + 1]) == coord) {
            console.log(false);
            return false;
          }
          if (JSON.stringify([x[0] - 1, x[1] - 1]) == coord) {
            console.log(false);
            return false;
          }
        }
      }
    }
    return true;
  };

  const makeShip = (len, dir) => {
    while(true) {
      const start = generateRandomPoint();
      if (dir) {
        if (start[1] + len > 11) {
          continue;
        }
      } else {
        if (start[0] + len > 11) {
          continue;
        }
      }
      const coords = generateCoordinates(start, len, dir);
      if (isValidShip(coords)) {
        console.log(coords);
        return coords;
      }
    }
  };

  const getMarked = () => marked.slice();
  const setMarked = (x, y) => {
    marked.push([x, y]);
  };

  const getName = () => name;
  const getShips = () => ships;
  return {
    getName, isValidHit, getMarked, setMarked, generateRandomPoint, makeShip, newShip, receiveAttack, isGameOver, getShips 
  }
};

module.exports = Gameboard;
