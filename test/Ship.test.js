const Ship = require('../src/Ship');

test('make coords object', () => {
  const ship = Ship([[1,2], [4, 7]]);
  expect(ship.blocks[0]["hit"]).toBe(false);
});
