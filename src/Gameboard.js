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

  };

  const generateShipStartPoint = () => {

  };

  const getMarked = () => marked;
  const setMarked = (x, y) => {
    marked.push([x, y]);
  };

  const getName = () => name;

  return {
    getName, isValidHit, getMarked, setMarked
  }
};

module.exports = Gameboard;
