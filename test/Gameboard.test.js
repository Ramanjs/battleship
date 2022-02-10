const Gameboard = require('../src/Gameboard');

test('test getName', () => {
  const gameboard = Gameboard("Player");
  expect(gameboard.getName()).toBe("Player");
});
