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

test('test generateRandomPoint', () => {
  const gameboard = Gameboard("Player");
  gameboard.setMarked(4, 5);
  coords = gameboard.generateRandomPoint();
  expect(gameboard.isValidHit(coords[0], coords[1])).toBe(true);
});

test('test makeShip length', () => {
  const gameboard = Gameboard("Player");
  expect(gameboard.makeShip(4, false).length).toBe(4);
})

test('test receiveAttack with sinking hit', () => {
  const gameboard = Gameboard("Player");
  const coords = gameboard.makeShip(2, true);
  const ship = Ship(coords);
  gameboard.newShip(ship);
  const res = gameboard.receiveAttack(coords[0][0], coords[0][1]);
  const result = gameboard.receiveAttack(coords[1][0], coords[1][1]);
  expect(result[0]).toBe(true);
  expect(result[1]).toBe(true);
  expect(result[2]).toBe(ship);
});

test('test receiveAttack with non-sinking hit', () => {
  const gameboard = Gameboard("Player");
  const coords = gameboard.makeShip(2, true);
  const ship = Ship(coords);
  gameboard.newShip(ship);
  const result = gameboard.receiveAttack(coords[0][0], coords[0][1]);
  expect(result[0]).toBe(true);
  expect(result[1]).toBe(false);
});

test('test receiveAttack with missed hit', () => {
  const gameboard = Gameboard("Player");
  const coords = gameboard.makeShip(2, true);
  const ship = Ship(coords);
  gameboard.newShip(ship);
  const result = gameboard.receiveAttack(coords[0][0] + 1, coords[0][1]);
  expect(result[0]).toBe(false);
});

test('test isGameOver with sinking all ships', () => {
  const gameboard = Gameboard("Player");
  let coords = gameboard.makeShip(2, true);
  let ship = Ship(coords);
  gameboard.newShip(ship);
  gameboard.receiveAttack(coords[0][0], coords[0][1]);
  gameboard.receiveAttack(coords[1][0], coords[1][1]);
  coords = gameboard.makeShip(2, false);
  ship = Ship(coords);
  gameboard.newShip(ship);
  gameboard.receiveAttack(coords[0][0], coords[0][1]);
  gameboard.receiveAttack(coords[1][0], coords[1][1]);
  expect(gameboard.isGameOver()).toBe(true);
});

test('test isGameOver with sinking partial ships', () => {
  const gameboard = Gameboard("Player");
  const coords = gameboard.makeShip(2, true);
  const ship = Ship(coords);
  gameboard.newShip(ship);
  gameboard.receiveAttack(coords[1][0], coords[1][1]);
  expect(gameboard.isGameOver()).toBe(false);
});
