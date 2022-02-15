import './style.css';
import Gameboard from './Gameboard';
import Ship from './Ship';
import Dom from './Dom';

const playerBoard = Gameboard('Player');
const compBoard = Gameboard('Computer');
const playerDom = Dom('Player');
const compDom = Dom('Computer');

const makeShips = (board) => {
  let coords = board.makeShip(4, true);
  let ship = Ship(coords);
  board.newShip(ship);
  coords = board.makeShip(3, true);
  ship = Ship(coords);
  board.newShip(ship);
  coords = board.makeShip(3, false);
  ship = Ship(coords);
  board.newShip(ship);
  coords = board.makeShip(2, true);
  ship = Ship(coords);
  board.newShip(ship);
  coords = board.makeShip(2, false);
  ship = Ship(coords);
  board.newShip(ship);
  coords = board.makeShip(2, false);
  ship = Ship(coords);
  board.newShip(ship);
  coords = board.makeShip(1, false);
  ship = Ship(coords);
  board.newShip(ship);
  coords = board.makeShip(1, false);
  ship = Ship(coords);
  board.newShip(ship);
  coords = board.makeShip(1, false);
  ship = Ship(coords);
  board.newShip(ship);
  coords = board.makeShip(1, false);
  ship = Ship(coords);
  board.newShip(ship);
};
//const coords = gameboard.makeShip(3, false);
//const ship = Ship(coords);
//dom.render();
//dom.renderShips([ship]);

const activateShips = () => {
  const boxes = document.querySelectorAll('.Computer .box');
  boxes.forEach((box) => {
    box.addEventListener('click', getHitPoint);
  });
};

const getHitPoint = (e) => {
  console.log(e);
  let id = e.target.id;
  if (id.slice(1, 3) == '10') {
    id = id[0] + id.slice(1, 3) + ',' + id.slice(3);
  } else {
    id = id.slice(0, 2) + ',' + id.slice(2);
  }
  console.log(id);
  processHit(id);
};

const processHit = (coords) => {
  const x = parseInt(coords.slice(1, coords.indexOf(',')));
  const y = parseInt(coords.slice(coords.indexOf(',') + 1));
  console.log(x);
  console.log(y);
  if (coords[0] == 'C') {
    if (compBoard.isValidHit(x, y)){
      const result = compBoard.receiveAttack(x, y);
      console.log(result);
      compDom.updateShip(result[2]);
    }
  } else {

  }
}

const updateDom = () => {

};

makeShips(playerBoard);
playerDom.render();
playerDom.renderShips(playerBoard.getShips());
makeShips(compBoard);
compDom.render();
compDom.renderShips(compBoard.getShips());

activateShips();
