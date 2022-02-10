const Ship = (coords) => {
  const blocks = coords.map((value) => {
    return {"value": value, "hit": false}
  });

  let hits = 0;
  
  let sunk = false;

  const isHit = (x, y) => {
    let found = false;
    blocks.forEach((item) => {
      if (item["value"][0] == x && item["value"][1] == y) {
        found = true;
        hits++;
        item["hit"] = true;
        if (hits == blocks.length) {
          sunk = true;
        }
      }
    });
    return found;
  };

  const getBlocks = () => blocks;
  const isSunk = () => sunk;

  return {
    getBlocks, isHit, isSunk
  }
}

module.exports = Ship;
