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

  const isMarked = () => {

  };

  const makeShips = () => {

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

  const generateShipStartPoint = () => {

  };

  const getMarked = () => marked;
  const setMarked = (x, y) => {
    marked.push([x, y]);
  };

  const getName = () => name;

  return {
    getName, isValidHit, getMarked, setMarked, generateRandomPoint
  }
};

module.exports = Gameboard;
