const Ship = require('../src/Ship');

test('init blocks array with false', () => {
  const ship = Ship([[1, 2], [4, 7]]);
  expect(ship.getBlocks()[0]["hit"]).toBe(false);
});

test('test length of blocks array', () => {
  const ship = Ship([[1, 2], [4, 7], [8, 1]]);
  expect(ship.getBlocks().length).toBe(3);
});

test('test co-ordinates of blocks array', () => {
  const ship = Ship([[1, 2], [4, 7], [8, 1]]);
  expect(ship.getBlocks()[1]["value"]).toStrictEqual([4, 7]);
});

test('test correct hit', () => {
  const ship = Ship([[1, 2], [4, 7], [8, 1]]);
  expect(ship.isHit(4, 7)).toBe(true);
});

test('test wrong hit', () => {
  const ship = Ship([[1, 2], [4, 7], [8, 1]]);
  expect(ship.isHit(4, 9)).toBe(false);
});

test('test isSunk', () => {
  const ship = Ship([[1, 2], [4, 7], [8, 1]]);
  ship.isHit(1, 2);
  ship.isHit(4, 7);
  ship.isHit(8, 1);
  expect(ship.isSunk()).toBe(true);
})

test('test blocks array after hit', () => {
  const ship = Ship([[1, 2], [4, 7], [8, 1]]);
  ship.isHit(1, 2);
  expect(ship.getBlocks()[0]["hit"]).toBe(true);
});
