const Gameboard = (playerName) => {
  const name = playerName;

  const getName = () => name;

  return {
    getName
  }
};

module.exports = Gameboard;
