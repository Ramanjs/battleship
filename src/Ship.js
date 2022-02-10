const Ship = (coords) => {
  const blocks = coords.map((value, index) => {
    return {[index]: value, "hit": false}
  });

  const len = coords.length;
  const isHit = (x, y) => {
    return null;
  }

  const isSunk = () => {

  }

  return {
    blocks, len
  }
}

module.exports = Ship;
