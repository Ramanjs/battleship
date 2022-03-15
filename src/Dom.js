const Dom = (user) => {
  const board = document.querySelector('.' + user);
  const player = user;

  const render = () => {
    for (let i = 1; i <= 100; i++) {
      const box = document.createElement('span');
      box.classList.add('box');
      let id = '';
      if (player == 'Computer') {
        id = 'C';
      } else {
        id = 'P';
      }
      const x = Math.ceil(i/10).toString();
      const y = (i % 10 == 0? 10 : i % 10).toString();
      id += x + y;
      box.setAttribute('id', id);
      board.appendChild(box);
    }
  };

  const renderShips = (ships) => {
    ships.forEach((ship) => {
      const blocks = ship.getBlocks();
      blocks.forEach((item) => {
        const x = item['value'][0];
        const y = item['value'][1];
        const id = player[0] + x + y; 
        const box = document.querySelector('#' + id);
        box.classList.add('ship');
      });
    });
  };

  const updateBoard = (result) => {
    if (result[0]) {
      const ship = result[2];
      if (ship.isSunk()) {
        const blocks = ship.getBlocks();
        blocks.forEach((item) => {
          const x = item['value'][0];
          const y = item['value'][1];
          const id = player[0] + x + y; 
          const box = document.querySelector('#' + id);
          box.classList.add('sunk');
        });
      } else {
        const blocks = ship.getBlocks();
        blocks.forEach((item) => {
          const x = item['value'][0];
          const y = item['value'][1];
          const id = player[0] + x + y; 
          const box = document.querySelector('#' + id);
          if (item['hit'] == true && !box.classList.contains('hit')) {
            box.classList.add('hit');
          }
        });
      }
    } else {
      const id = player[0] + result[1][0] + result[1][1];
      const box = document.querySelector('#' + id);
      box.classList.add('empty');
    }

  };

  return {
    render, 
    renderShips,
    updateBoard
  }
};

module.exports = Dom;
