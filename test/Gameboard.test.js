const Gameboard = require('../src/Gameboard');
const Ship = require('../src/Ship');

test('test getName', () => {
  const gameboard = Gameboard("Player");
  expect(gameboard.getName()).toBe("Player");
});

test('test isValidHit with in-valid attack', () => {
  const gameboard = Gameboard("Player");
  gameboard.setMarked(4, 5);
  expect(gameboard.isValidHit(4, 5)).toBe(false);
});

test('test isValidHit with valid attack', () => {
  const gameboard = Gameboard("Player");
  gameboard.setMarked(4, 5);
  expect(gameboard.isValidHit(7, 2)).toBe(true);
});
