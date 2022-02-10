const Ship = require('../src/Ship');

test('init blocks array with false', () => {
  const ship = Ship([[1,2], [4, 7]]);
  expect(ship.blocks[0]["hit"]).toBe(false);
});

test('check len property', () => {
  const ship = Ship([[1,2], [4, 7], [8, 1]]);
  expect(ship.len).toBe(3);
});

test('check co-ordinates', () => {
  const ship = Ship([[1,2], [4, 7], [8, 1]]);
  expect(ship.blocks[1]["value"]).toStrictEqual([4, 7]);
});
