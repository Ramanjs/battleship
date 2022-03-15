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

const activateShips = () => {
  const boxes = document.querySelectorAll('.Computer .box');
  boxes.forEach((box) => {
    box.addEventListener('click', getHitPoint);
  });
};

const getHitPoint = (e) => {
  let id = e.target.id;
  if (id.slice(1, 3) == '10') {
    id = id[0] + id.slice(1, 3) + ',' + id.slice(3);
  } else {
    id = id.slice(0, 2) + ',' + id.slice(2);
  }
  processHit(id);
};

const info = {
  "cur": false,
  "dir": null,
  "coords": [],
  "last": false,
  "forward": true
};

const processHit = (coords) => {
  const x = parseInt(coords.slice(1, coords.indexOf(',')));
  const y = parseInt(coords.slice(coords.indexOf(',') + 1));
  if (compBoard.isValidHit(x, y)){
    const result = compBoard.receiveAttack(x, y);
    compDom.updateBoard(result);
    if (compBoard.isGameOver()) {
      window.alert("You won");
    }
  } else {
    return;
  }
  compAttack(info);
};

const generateAttack = (info) => {
  if (!info.cur) {
    const coords = playerBoard.generateRandomPoint();
    return coords;
  } else {
    if (info.coords.length == 1) {
      let x = info.coords[0][0], y = info.coords[0][1];
      if (playerBoard.isValidHit(x + 1, y)) {
        return [x + 1, y];
      }
      if (playerBoard.isValidHit(x - 1, y)) {
        return [x - 1, y];
      }
      if (playerBoard.isValidHit(x, y + 1)) {
        return [x, y + 1];
      }
      if (playerBoard.isValidHit(x, y - 1)) {
        return [x, y - 1];
      }
    } else {
      if (info.last) {
        const last = info.coords[info.coords.length - 1];
        if (info.dir) {
          const next = [last[0], last[1] + 1];
          if (next[1] > 10) {
            info.last = false;
            return generateAttack(info);
          }
          return next;
        } else {
          const next = [last[0] + 1, last[1]];
          if (next[0] > 10) {
            info.last = false;
            return generateAttack(info);
          }
          return next;
        }
      } else {
        const first = info.coords[0];
        if (info.dir) {
          const next = [first[0], first[1] - 1];
          if (next[1] < 1) {
            info.last = false;
            return generateAttack(info);
          }
          return next;
        } else {
          const next = [first[0] - 1, first[1]];
          if (next[0] < 1) {
            info.last = false;
            return generateAttack(info);
          }
          return next;
        }
      }
    }
  }
};

const updateInfo = (result, coords, info) => {
  if (result.length > 2 && result[1]) {
    info.cur = false;
    info.dir = null;
    info.coords = [];
    info.last = false;
    return;
  }
  // not a sink
  if (!info.cur) {
    if (result[0]) {
      info.cur = true;
      info.coords.push(coords);
      info.last = true;
    }
  } else {
    if (info.coords.length == 1) {
      if (result[0]) {
        if (info.coords[0][0] == coords[0]) {
          info.dir = true;
        } else {
          info.dir = false;
        }
        info.coords.push(coords);
        info.last = true;
      } else {
        info.last = false;
      }
    } else {
      if (result[0]) {
        info.coords.push(coords);
        info.last = true;
      } else {
        info.last = false;
      }
    }
  }
};

const compAttack = (info) => {
  const coords = generateAttack(info);
  const result = playerBoard.receiveAttack(coords[0], coords[1]);
  updateInfo(result, coords, info);
  playerDom.updateBoard(result);
  if (playerBoard.isGameOver()) {
    window.alert("Computer Won");
    window.location.reload();
  }
  if (compBoard.isGameOver()) {
    window.alert("You Won");
    window.location.reload();
  }
};

const init = () => {
  makeShips(playerBoard);
  playerDom.render();
  playerDom.renderShips(playerBoard.getShips());
  makeShips(compBoard);
  compDom.render();
  activateShips();
};

init();
