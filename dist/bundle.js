/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "html, body {\n  height: 100%;\n  margin: 0;\n\n}\n.container {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-family: Arial, Helvetica, sans-serif;\n}\n \n.gameboard {\n    min-width: 340px;\n    min-height: 340px;\n    display: grid;\n    margin: 75px;\n    margin-top: 0;\n    grid-template-columns: repeat(10, 1fr);\n    grid-template-rows: repeat(10, 1fr);\n    border: none;\n    background-color: white;\n}\n\n.box {\n  border: 1px solid #b4b4ff;\n  border-collapse: collapse;\n}\n\n.ship {\n  border: 2px solid #00f;\n  background-color: rgba(0,0,255,0.05);\n}\n\nspan {\n  padding: 0;\n  margin: 0;\n}\n\n.empty {\n  background-color: rgba(10, 10, 10, 0.1);\n}\n\n.hit {\n    position: relative;\n    height: 30px; /* this can be anything */\n    width: 30px;  /* ...but maintain 1:1 aspect ratio */\n    border-color: red;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n}\n\n.hit::before,\n.hit::after {\n    position: absolute;\n    content: '';\n    width: 100%;\n    height: 2px; /* cross thickness */\n    background-color: red;\n}\n\n.hit::before {\n    transform: rotate(45deg);\n}\n\n.hit::after {\n    transform: rotate(-45deg);\n}\n\n.sunk {\n    position: relative;\n    height: 30px; /* this can be anything */\n    width: 30px;  /* ...but maintain 1:1 aspect ratio */\n    border-color: black;\n    background-color: rgba(0,0,255,0.1);\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n}\n\n.sunk::before,\n.sunk::after {\n    position: absolute;\n    content: '';\n    width: 100%;\n    height: 2px; /* cross thickness */\n    background-color: black;\n}\n\n.sunk::before {\n    transform: rotate(45deg);\n}\n\n.sunk::after {\n    transform: rotate(-45deg);\n}\n\n.heading {\n    text-align: center;\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,YAAY;EACZ,SAAS;;AAEX;AACA;EACE,WAAW;EACX,YAAY;EACZ,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,yCAAyC;AAC3C;;AAEA;IACI,gBAAgB;IAChB,iBAAiB;IACjB,aAAa;IACb,YAAY;IACZ,aAAa;IACb,sCAAsC;IACtC,mCAAmC;IACnC,YAAY;IACZ,uBAAuB;AAC3B;;AAEA;EACE,yBAAyB;EACzB,yBAAyB;AAC3B;;AAEA;EACE,sBAAsB;EACtB,oCAAoC;AACtC;;AAEA;EACE,UAAU;EACV,SAAS;AACX;;AAEA;EACE,uCAAuC;AACzC;;AAEA;IACI,kBAAkB;IAClB,YAAY,EAAE,yBAAyB;IACvC,WAAW,GAAG,qCAAqC;IACnD,iBAAiB;IACjB,aAAa;IACb,sBAAsB;IACtB,uBAAuB;AAC3B;;AAEA;;IAEI,kBAAkB;IAClB,WAAW;IACX,WAAW;IACX,WAAW,EAAE,oBAAoB;IACjC,qBAAqB;AACzB;;AAEA;IACI,wBAAwB;AAC5B;;AAEA;IACI,yBAAyB;AAC7B;;AAEA;IACI,kBAAkB;IAClB,YAAY,EAAE,yBAAyB;IACvC,WAAW,GAAG,qCAAqC;IACnD,mBAAmB;IACnB,mCAAmC;IACnC,aAAa;IACb,sBAAsB;IACtB,uBAAuB;AAC3B;;AAEA;;IAEI,kBAAkB;IAClB,WAAW;IACX,WAAW;IACX,WAAW,EAAE,oBAAoB;IACjC,uBAAuB;AAC3B;;AAEA;IACI,wBAAwB;AAC5B;;AAEA;IACI,yBAAyB;AAC7B;;AAEA;IACI,kBAAkB;AACtB","sourcesContent":["html, body {\n  height: 100%;\n  margin: 0;\n\n}\n.container {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-family: Arial, Helvetica, sans-serif;\n}\n \n.gameboard {\n    min-width: 340px;\n    min-height: 340px;\n    display: grid;\n    margin: 75px;\n    margin-top: 0;\n    grid-template-columns: repeat(10, 1fr);\n    grid-template-rows: repeat(10, 1fr);\n    border: none;\n    background-color: white;\n}\n\n.box {\n  border: 1px solid #b4b4ff;\n  border-collapse: collapse;\n}\n\n.ship {\n  border: 2px solid #00f;\n  background-color: rgba(0,0,255,0.05);\n}\n\nspan {\n  padding: 0;\n  margin: 0;\n}\n\n.empty {\n  background-color: rgba(10, 10, 10, 0.1);\n}\n\n.hit {\n    position: relative;\n    height: 30px; /* this can be anything */\n    width: 30px;  /* ...but maintain 1:1 aspect ratio */\n    border-color: red;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n}\n\n.hit::before,\n.hit::after {\n    position: absolute;\n    content: '';\n    width: 100%;\n    height: 2px; /* cross thickness */\n    background-color: red;\n}\n\n.hit::before {\n    transform: rotate(45deg);\n}\n\n.hit::after {\n    transform: rotate(-45deg);\n}\n\n.sunk {\n    position: relative;\n    height: 30px; /* this can be anything */\n    width: 30px;  /* ...but maintain 1:1 aspect ratio */\n    border-color: black;\n    background-color: rgba(0,0,255,0.1);\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n}\n\n.sunk::before,\n.sunk::after {\n    position: absolute;\n    content: '';\n    width: 100%;\n    height: 2px; /* cross thickness */\n    background-color: black;\n}\n\n.sunk::before {\n    transform: rotate(45deg);\n}\n\n.sunk::after {\n    transform: rotate(-45deg);\n}\n\n.heading {\n    text-align: center;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";


var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";


var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/Dom.js":
/*!********************!*\
  !*** ./src/Dom.js ***!
  \********************/
/***/ ((module) => {

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


/***/ }),

/***/ "./src/Gameboard.js":
/*!**************************!*\
  !*** ./src/Gameboard.js ***!
  \**************************/
/***/ ((module) => {

const Gameboard = (playerName) => {
  const name = playerName;
  const marked = [];
  const ships = [];

  const receiveAttack = (x, y) => {
    marked.push([x, y]);
    for (const ship of ships) {
      if (ship.isHit(x, y)) {
        if (ship.isSunk()) {
          return [true, true, ship]
        } else {
          return [true, false, ship];
        }
      }
    }
    return [false, [x, y]];
  };

  const isValidHit = (x, y) => {
    if (x > 10 || y > 10 || x < 1 || y < 1) {
      return false;
    }
    for (const coord of marked) {
      if (coord[0] == x && coord[1] == y) {
        return false;
      }
    }
    return true;
  };

  const newShip = (ship) => {
    ships.push(ship);
  };

  const isGameOver = () => {
    for (let ship of ships) {
      if (!ship.isSunk()) {
        return false;
      }
    }
    return true;
  };

  const generateRandomPoint = () => {
    while(true) {
      let x = Math.floor((Math.random() * 10) + 1);
      let y = Math.floor((Math.random() * 10) + 1);
      if (isValidHit(x, y)) return [x, y]
    }
  };

  const generateCoordinates = (start, len, dir) => {
    const coords = [start];
    if (dir) {
      for (let i = 1; i < len; i++) {
        coords.push([start[0], start[1] + i]);
      }
    } else {
      for (let i = 1; i < len; i++) {
        coords.push([start[0] + i, start[1]]);
      }
    }
    return coords;
  };

  const isValidShip = (coords) => {
    for (const ship of ships) {
      const blocks = ship.getBlocks();
      for (const block of blocks) {
        for (const x of coords) {
          const coord = JSON.stringify(block["value"]);
          if (JSON.stringify(x) == coord) {
            return false;
          }
          if (JSON.stringify([x[0] + 1, x[1]]) == coord){
            return false;
          }
          if (JSON.stringify([x[0] - 1, x[1]]) == coord) {
            return false;
          }
          if (JSON.stringify([x[0], x[1] + 1]) == coord) {
            return false;
          }
          if (JSON.stringify([x[0], x[1] - 1]) == coord) {
            return false;
          }
          if (JSON.stringify([x[0] + 1, x[1] + 1]) == coord) {
            return false;
          }
          if (JSON.stringify([x[0] + 1, x[1] - 1]) == coord) {
            return false;
          }
          if (JSON.stringify([x[0] - 1, x[1] + 1]) == coord) {
            console.log(false);
            return false;
          }
          if (JSON.stringify([x[0] - 1, x[1] - 1]) == coord) {
            return false;
          }
        }
      }
    }
    return true;
  };

  const makeShip = (len, dir) => {
    while(true) {
      const start = generateRandomPoint();
      if (dir) {
        if (start[1] + len > 11) {
          continue;
        }
      } else {
        if (start[0] + len > 11) {
          continue;
        }
      }
      const coords = generateCoordinates(start, len, dir);
      if (isValidShip(coords)) {
        return coords;
      }
    }
  };

  const getMarked = () => marked.slice();
  const setMarked = (x, y) => {
    marked.push([x, y]);
  };

  const getName = () => name;
  const getShips = () => ships;
  return {
    getName, isValidHit, getMarked, setMarked, generateRandomPoint, makeShip, newShip, receiveAttack, isGameOver, getShips 
  }
};

module.exports = Gameboard;


/***/ }),

/***/ "./src/Ship.js":
/*!*********************!*\
  !*** ./src/Ship.js ***!
  \*********************/
/***/ ((module) => {

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

  const getBlocks = () => blocks.slice();
  const isSunk = () => sunk.valueOf();

  return {
    getBlocks, isHit, isSunk
  }
}

module.exports = Ship;


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _Gameboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Gameboard */ "./src/Gameboard.js");
/* harmony import */ var _Gameboard__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Gameboard__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Ship__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Ship */ "./src/Ship.js");
/* harmony import */ var _Ship__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Ship__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Dom */ "./src/Dom.js");
/* harmony import */ var _Dom__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Dom__WEBPACK_IMPORTED_MODULE_3__);





const playerBoard = _Gameboard__WEBPACK_IMPORTED_MODULE_1___default()('Player');
const compBoard = _Gameboard__WEBPACK_IMPORTED_MODULE_1___default()('Computer');
const playerDom = _Dom__WEBPACK_IMPORTED_MODULE_3___default()('Player');
const compDom = _Dom__WEBPACK_IMPORTED_MODULE_3___default()('Computer');

const makeShips = (board) => {
  let coords = board.makeShip(4, true);
  let ship = _Ship__WEBPACK_IMPORTED_MODULE_2___default()(coords);
  board.newShip(ship);
  coords = board.makeShip(3, true);
  ship = _Ship__WEBPACK_IMPORTED_MODULE_2___default()(coords);
  board.newShip(ship);
  coords = board.makeShip(3, false);
  ship = _Ship__WEBPACK_IMPORTED_MODULE_2___default()(coords);
  board.newShip(ship);
  coords = board.makeShip(2, true);
  ship = _Ship__WEBPACK_IMPORTED_MODULE_2___default()(coords);
  board.newShip(ship);
  coords = board.makeShip(2, false);
  ship = _Ship__WEBPACK_IMPORTED_MODULE_2___default()(coords);
  board.newShip(ship);
  coords = board.makeShip(2, false);
  ship = _Ship__WEBPACK_IMPORTED_MODULE_2___default()(coords);
  board.newShip(ship);
  coords = board.makeShip(1, false);
  ship = _Ship__WEBPACK_IMPORTED_MODULE_2___default()(coords);
  board.newShip(ship);
  coords = board.makeShip(1, false);
  ship = _Ship__WEBPACK_IMPORTED_MODULE_2___default()(coords);
  board.newShip(ship);
  coords = board.makeShip(1, false);
  ship = _Ship__WEBPACK_IMPORTED_MODULE_2___default()(coords);
  board.newShip(ship);
  coords = board.makeShip(1, false);
  ship = _Ship__WEBPACK_IMPORTED_MODULE_2___default()(coords);
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

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLFNBQVM7QUFDL0I7QUFDQTtBQUNBLE1BQU07QUFDTixzQkFBc0IsU0FBUztBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7O0FDeklBO0FBQ0E7QUFDQSxZQUFZO0FBQ1osR0FBRzs7QUFFSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7VUNoQ0E7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOcUI7QUFDZTtBQUNWO0FBQ0Y7O0FBRXhCLG9CQUFvQixpREFBUztBQUM3QixrQkFBa0IsaURBQVM7QUFDM0Isa0JBQWtCLDJDQUFHO0FBQ3JCLGdCQUFnQiwyQ0FBRzs7QUFFbkI7QUFDQTtBQUNBLGFBQWEsNENBQUk7QUFDakI7QUFDQTtBQUNBLFNBQVMsNENBQUk7QUFDYjtBQUNBO0FBQ0EsU0FBUyw0Q0FBSTtBQUNiO0FBQ0E7QUFDQSxTQUFTLDRDQUFJO0FBQ2I7QUFDQTtBQUNBLFNBQVMsNENBQUk7QUFDYjtBQUNBO0FBQ0EsU0FBUyw0Q0FBSTtBQUNiO0FBQ0E7QUFDQSxTQUFTLDRDQUFJO0FBQ2I7QUFDQTtBQUNBLFNBQVMsNENBQUk7QUFDYjtBQUNBO0FBQ0EsU0FBUyw0Q0FBSTtBQUNiO0FBQ0E7QUFDQSxTQUFTLDRDQUFJO0FBQ2I7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSIsInNvdXJjZXMiOlsid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9Eb20uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9HYW1lYm9hcmQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9TaGlwLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJodG1sLCBib2R5IHtcXG4gIGhlaWdodDogMTAwJTtcXG4gIG1hcmdpbjogMDtcXG5cXG59XFxuLmNvbnRhaW5lciB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG59XFxuIFxcbi5nYW1lYm9hcmQge1xcbiAgICBtaW4td2lkdGg6IDM0MHB4O1xcbiAgICBtaW4taGVpZ2h0OiAzNDBweDtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgbWFyZ2luOiA3NXB4O1xcbiAgICBtYXJnaW4tdG9wOiAwO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgMWZyKTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTAsIDFmcik7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxufVxcblxcbi5ib3gge1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2I0YjRmZjtcXG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XFxufVxcblxcbi5zaGlwIHtcXG4gIGJvcmRlcjogMnB4IHNvbGlkICMwMGY7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwyNTUsMC4wNSk7XFxufVxcblxcbnNwYW4ge1xcbiAgcGFkZGluZzogMDtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuLmVtcHR5IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTAsIDEwLCAxMCwgMC4xKTtcXG59XFxuXFxuLmhpdCB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgaGVpZ2h0OiAzMHB4OyAvKiB0aGlzIGNhbiBiZSBhbnl0aGluZyAqL1xcbiAgICB3aWR0aDogMzBweDsgIC8qIC4uLmJ1dCBtYWludGFpbiAxOjEgYXNwZWN0IHJhdGlvICovXFxuICAgIGJvcmRlci1jb2xvcjogcmVkO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLmhpdDo6YmVmb3JlLFxcbi5oaXQ6OmFmdGVyIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBjb250ZW50OiAnJztcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMnB4OyAvKiBjcm9zcyB0aGlja25lc3MgKi9cXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcbn1cXG5cXG4uaGl0OjpiZWZvcmUge1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XFxufVxcblxcbi5oaXQ6OmFmdGVyIHtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcXG59XFxuXFxuLnN1bmsge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGhlaWdodDogMzBweDsgLyogdGhpcyBjYW4gYmUgYW55dGhpbmcgKi9cXG4gICAgd2lkdGg6IDMwcHg7ICAvKiAuLi5idXQgbWFpbnRhaW4gMToxIGFzcGVjdCByYXRpbyAqL1xcbiAgICBib3JkZXItY29sb3I6IGJsYWNrO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwyNTUsMC4xKTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5zdW5rOjpiZWZvcmUsXFxuLnN1bms6OmFmdGVyIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBjb250ZW50OiAnJztcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMnB4OyAvKiBjcm9zcyB0aGlja25lc3MgKi9cXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxufVxcblxcbi5zdW5rOjpiZWZvcmUge1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XFxufVxcblxcbi5zdW5rOjphZnRlciB7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XFxufVxcblxcbi5oZWFkaW5nIHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsWUFBWTtFQUNaLFNBQVM7O0FBRVg7QUFDQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIseUNBQXlDO0FBQzNDOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixhQUFhO0lBQ2IsWUFBWTtJQUNaLGFBQWE7SUFDYixzQ0FBc0M7SUFDdEMsbUNBQW1DO0lBQ25DLFlBQVk7SUFDWix1QkFBdUI7QUFDM0I7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLG9DQUFvQztBQUN0Qzs7QUFFQTtFQUNFLFVBQVU7RUFDVixTQUFTO0FBQ1g7O0FBRUE7RUFDRSx1Q0FBdUM7QUFDekM7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsWUFBWSxFQUFFLHlCQUF5QjtJQUN2QyxXQUFXLEdBQUcscUNBQXFDO0lBQ25ELGlCQUFpQjtJQUNqQixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLHVCQUF1QjtBQUMzQjs7QUFFQTs7SUFFSSxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFdBQVc7SUFDWCxXQUFXLEVBQUUsb0JBQW9CO0lBQ2pDLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLHdCQUF3QjtBQUM1Qjs7QUFFQTtJQUNJLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixZQUFZLEVBQUUseUJBQXlCO0lBQ3ZDLFdBQVcsR0FBRyxxQ0FBcUM7SUFDbkQsbUJBQW1CO0lBQ25CLG1DQUFtQztJQUNuQyxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLHVCQUF1QjtBQUMzQjs7QUFFQTs7SUFFSSxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFdBQVc7SUFDWCxXQUFXLEVBQUUsb0JBQW9CO0lBQ2pDLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLHdCQUF3QjtBQUM1Qjs7QUFFQTtJQUNJLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0QlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJodG1sLCBib2R5IHtcXG4gIGhlaWdodDogMTAwJTtcXG4gIG1hcmdpbjogMDtcXG5cXG59XFxuLmNvbnRhaW5lciB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG59XFxuIFxcbi5nYW1lYm9hcmQge1xcbiAgICBtaW4td2lkdGg6IDM0MHB4O1xcbiAgICBtaW4taGVpZ2h0OiAzNDBweDtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgbWFyZ2luOiA3NXB4O1xcbiAgICBtYXJnaW4tdG9wOiAwO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgMWZyKTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTAsIDFmcik7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxufVxcblxcbi5ib3gge1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2I0YjRmZjtcXG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XFxufVxcblxcbi5zaGlwIHtcXG4gIGJvcmRlcjogMnB4IHNvbGlkICMwMGY7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwyNTUsMC4wNSk7XFxufVxcblxcbnNwYW4ge1xcbiAgcGFkZGluZzogMDtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuLmVtcHR5IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTAsIDEwLCAxMCwgMC4xKTtcXG59XFxuXFxuLmhpdCB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgaGVpZ2h0OiAzMHB4OyAvKiB0aGlzIGNhbiBiZSBhbnl0aGluZyAqL1xcbiAgICB3aWR0aDogMzBweDsgIC8qIC4uLmJ1dCBtYWludGFpbiAxOjEgYXNwZWN0IHJhdGlvICovXFxuICAgIGJvcmRlci1jb2xvcjogcmVkO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLmhpdDo6YmVmb3JlLFxcbi5oaXQ6OmFmdGVyIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBjb250ZW50OiAnJztcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMnB4OyAvKiBjcm9zcyB0aGlja25lc3MgKi9cXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcbn1cXG5cXG4uaGl0OjpiZWZvcmUge1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XFxufVxcblxcbi5oaXQ6OmFmdGVyIHtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcXG59XFxuXFxuLnN1bmsge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGhlaWdodDogMzBweDsgLyogdGhpcyBjYW4gYmUgYW55dGhpbmcgKi9cXG4gICAgd2lkdGg6IDMwcHg7ICAvKiAuLi5idXQgbWFpbnRhaW4gMToxIGFzcGVjdCByYXRpbyAqL1xcbiAgICBib3JkZXItY29sb3I6IGJsYWNrO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwyNTUsMC4xKTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5zdW5rOjpiZWZvcmUsXFxuLnN1bms6OmFmdGVyIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBjb250ZW50OiAnJztcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMnB4OyAvKiBjcm9zcyB0aGlja25lc3MgKi9cXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxufVxcblxcbi5zdW5rOjpiZWZvcmUge1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XFxufVxcblxcbi5zdW5rOjphZnRlciB7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XFxufVxcblxcbi5oZWFkaW5nIHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImNvbnN0IERvbSA9ICh1c2VyKSA9PiB7XG4gIGNvbnN0IGJvYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLicgKyB1c2VyKTtcbiAgY29uc3QgcGxheWVyID0gdXNlcjtcblxuICBjb25zdCByZW5kZXIgPSAoKSA9PiB7XG4gICAgZm9yIChsZXQgaSA9IDE7IGkgPD0gMTAwOyBpKyspIHtcbiAgICAgIGNvbnN0IGJveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgIGJveC5jbGFzc0xpc3QuYWRkKCdib3gnKTtcbiAgICAgIGxldCBpZCA9ICcnO1xuICAgICAgaWYgKHBsYXllciA9PSAnQ29tcHV0ZXInKSB7XG4gICAgICAgIGlkID0gJ0MnO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWQgPSAnUCc7XG4gICAgICB9XG4gICAgICBjb25zdCB4ID0gTWF0aC5jZWlsKGkvMTApLnRvU3RyaW5nKCk7XG4gICAgICBjb25zdCB5ID0gKGkgJSAxMCA9PSAwPyAxMCA6IGkgJSAxMCkudG9TdHJpbmcoKTtcbiAgICAgIGlkICs9IHggKyB5O1xuICAgICAgYm94LnNldEF0dHJpYnV0ZSgnaWQnLCBpZCk7XG4gICAgICBib2FyZC5hcHBlbmRDaGlsZChib3gpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCByZW5kZXJTaGlwcyA9IChzaGlwcykgPT4ge1xuICAgIHNoaXBzLmZvckVhY2goKHNoaXApID0+IHtcbiAgICAgIGNvbnN0IGJsb2NrcyA9IHNoaXAuZ2V0QmxvY2tzKCk7XG4gICAgICBibG9ja3MuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgICBjb25zdCB4ID0gaXRlbVsndmFsdWUnXVswXTtcbiAgICAgICAgY29uc3QgeSA9IGl0ZW1bJ3ZhbHVlJ11bMV07XG4gICAgICAgIGNvbnN0IGlkID0gcGxheWVyWzBdICsgeCArIHk7IFxuICAgICAgICBjb25zdCBib3ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjJyArIGlkKTtcbiAgICAgICAgYm94LmNsYXNzTGlzdC5hZGQoJ3NoaXAnKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9O1xuXG4gIGNvbnN0IHVwZGF0ZUJvYXJkID0gKHJlc3VsdCkgPT4ge1xuICAgIGlmIChyZXN1bHRbMF0pIHtcbiAgICAgIGNvbnN0IHNoaXAgPSByZXN1bHRbMl07XG4gICAgICBpZiAoc2hpcC5pc1N1bmsoKSkge1xuICAgICAgICBjb25zdCBibG9ja3MgPSBzaGlwLmdldEJsb2NrcygpO1xuICAgICAgICBibG9ja3MuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgICAgIGNvbnN0IHggPSBpdGVtWyd2YWx1ZSddWzBdO1xuICAgICAgICAgIGNvbnN0IHkgPSBpdGVtWyd2YWx1ZSddWzFdO1xuICAgICAgICAgIGNvbnN0IGlkID0gcGxheWVyWzBdICsgeCArIHk7IFxuICAgICAgICAgIGNvbnN0IGJveCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyMnICsgaWQpO1xuICAgICAgICAgIGJveC5jbGFzc0xpc3QuYWRkKCdzdW5rJyk7XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgYmxvY2tzID0gc2hpcC5nZXRCbG9ja3MoKTtcbiAgICAgICAgYmxvY2tzLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgICAgICBjb25zdCB4ID0gaXRlbVsndmFsdWUnXVswXTtcbiAgICAgICAgICBjb25zdCB5ID0gaXRlbVsndmFsdWUnXVsxXTtcbiAgICAgICAgICBjb25zdCBpZCA9IHBsYXllclswXSArIHggKyB5OyBcbiAgICAgICAgICBjb25zdCBib3ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjJyArIGlkKTtcbiAgICAgICAgICBpZiAoaXRlbVsnaGl0J10gPT0gdHJ1ZSAmJiAhYm94LmNsYXNzTGlzdC5jb250YWlucygnaGl0JykpIHtcbiAgICAgICAgICAgIGJveC5jbGFzc0xpc3QuYWRkKCdoaXQnKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBpZCA9IHBsYXllclswXSArIHJlc3VsdFsxXVswXSArIHJlc3VsdFsxXVsxXTtcbiAgICAgIGNvbnN0IGJveCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyMnICsgaWQpO1xuICAgICAgYm94LmNsYXNzTGlzdC5hZGQoJ2VtcHR5Jyk7XG4gICAgfVxuXG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICByZW5kZXIsIFxuICAgIHJlbmRlclNoaXBzLFxuICAgIHVwZGF0ZUJvYXJkXG4gIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gRG9tO1xuIiwiY29uc3QgR2FtZWJvYXJkID0gKHBsYXllck5hbWUpID0+IHtcbiAgY29uc3QgbmFtZSA9IHBsYXllck5hbWU7XG4gIGNvbnN0IG1hcmtlZCA9IFtdO1xuICBjb25zdCBzaGlwcyA9IFtdO1xuXG4gIGNvbnN0IHJlY2VpdmVBdHRhY2sgPSAoeCwgeSkgPT4ge1xuICAgIG1hcmtlZC5wdXNoKFt4LCB5XSk7XG4gICAgZm9yIChjb25zdCBzaGlwIG9mIHNoaXBzKSB7XG4gICAgICBpZiAoc2hpcC5pc0hpdCh4LCB5KSkge1xuICAgICAgICBpZiAoc2hpcC5pc1N1bmsoKSkge1xuICAgICAgICAgIHJldHVybiBbdHJ1ZSwgdHJ1ZSwgc2hpcF1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gW3RydWUsIGZhbHNlLCBzaGlwXTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gW2ZhbHNlLCBbeCwgeV1dO1xuICB9O1xuXG4gIGNvbnN0IGlzVmFsaWRIaXQgPSAoeCwgeSkgPT4ge1xuICAgIGlmICh4ID4gMTAgfHwgeSA+IDEwIHx8IHggPCAxIHx8IHkgPCAxKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGZvciAoY29uc3QgY29vcmQgb2YgbWFya2VkKSB7XG4gICAgICBpZiAoY29vcmRbMF0gPT0geCAmJiBjb29yZFsxXSA9PSB5KSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG4gIH07XG5cbiAgY29uc3QgbmV3U2hpcCA9IChzaGlwKSA9PiB7XG4gICAgc2hpcHMucHVzaChzaGlwKTtcbiAgfTtcblxuICBjb25zdCBpc0dhbWVPdmVyID0gKCkgPT4ge1xuICAgIGZvciAobGV0IHNoaXAgb2Ygc2hpcHMpIHtcbiAgICAgIGlmICghc2hpcC5pc1N1bmsoKSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xuICB9O1xuXG4gIGNvbnN0IGdlbmVyYXRlUmFuZG9tUG9pbnQgPSAoKSA9PiB7XG4gICAgd2hpbGUodHJ1ZSkge1xuICAgICAgbGV0IHggPSBNYXRoLmZsb29yKChNYXRoLnJhbmRvbSgpICogMTApICsgMSk7XG4gICAgICBsZXQgeSA9IE1hdGguZmxvb3IoKE1hdGgucmFuZG9tKCkgKiAxMCkgKyAxKTtcbiAgICAgIGlmIChpc1ZhbGlkSGl0KHgsIHkpKSByZXR1cm4gW3gsIHldXG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGdlbmVyYXRlQ29vcmRpbmF0ZXMgPSAoc3RhcnQsIGxlbiwgZGlyKSA9PiB7XG4gICAgY29uc3QgY29vcmRzID0gW3N0YXJ0XTtcbiAgICBpZiAoZGlyKSB7XG4gICAgICBmb3IgKGxldCBpID0gMTsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgIGNvb3Jkcy5wdXNoKFtzdGFydFswXSwgc3RhcnRbMV0gKyBpXSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGZvciAobGV0IGkgPSAxOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgY29vcmRzLnB1c2goW3N0YXJ0WzBdICsgaSwgc3RhcnRbMV1dKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGNvb3JkcztcbiAgfTtcblxuICBjb25zdCBpc1ZhbGlkU2hpcCA9IChjb29yZHMpID0+IHtcbiAgICBmb3IgKGNvbnN0IHNoaXAgb2Ygc2hpcHMpIHtcbiAgICAgIGNvbnN0IGJsb2NrcyA9IHNoaXAuZ2V0QmxvY2tzKCk7XG4gICAgICBmb3IgKGNvbnN0IGJsb2NrIG9mIGJsb2Nrcykge1xuICAgICAgICBmb3IgKGNvbnN0IHggb2YgY29vcmRzKSB7XG4gICAgICAgICAgY29uc3QgY29vcmQgPSBKU09OLnN0cmluZ2lmeShibG9ja1tcInZhbHVlXCJdKTtcbiAgICAgICAgICBpZiAoSlNPTi5zdHJpbmdpZnkoeCkgPT0gY29vcmQpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKEpTT04uc3RyaW5naWZ5KFt4WzBdICsgMSwgeFsxXV0pID09IGNvb3JkKXtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKEpTT04uc3RyaW5naWZ5KFt4WzBdIC0gMSwgeFsxXV0pID09IGNvb3JkKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChKU09OLnN0cmluZ2lmeShbeFswXSwgeFsxXSArIDFdKSA9PSBjb29yZCkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoSlNPTi5zdHJpbmdpZnkoW3hbMF0sIHhbMV0gLSAxXSkgPT0gY29vcmQpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKEpTT04uc3RyaW5naWZ5KFt4WzBdICsgMSwgeFsxXSArIDFdKSA9PSBjb29yZCkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoSlNPTi5zdHJpbmdpZnkoW3hbMF0gKyAxLCB4WzFdIC0gMV0pID09IGNvb3JkKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChKU09OLnN0cmluZ2lmeShbeFswXSAtIDEsIHhbMV0gKyAxXSkgPT0gY29vcmQpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGZhbHNlKTtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKEpTT04uc3RyaW5naWZ5KFt4WzBdIC0gMSwgeFsxXSAtIDFdKSA9PSBjb29yZCkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfTtcblxuICBjb25zdCBtYWtlU2hpcCA9IChsZW4sIGRpcikgPT4ge1xuICAgIHdoaWxlKHRydWUpIHtcbiAgICAgIGNvbnN0IHN0YXJ0ID0gZ2VuZXJhdGVSYW5kb21Qb2ludCgpO1xuICAgICAgaWYgKGRpcikge1xuICAgICAgICBpZiAoc3RhcnRbMV0gKyBsZW4gPiAxMSkge1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoc3RhcnRbMF0gKyBsZW4gPiAxMSkge1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBjb25zdCBjb29yZHMgPSBnZW5lcmF0ZUNvb3JkaW5hdGVzKHN0YXJ0LCBsZW4sIGRpcik7XG4gICAgICBpZiAoaXNWYWxpZFNoaXAoY29vcmRzKSkge1xuICAgICAgICByZXR1cm4gY29vcmRzO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICBjb25zdCBnZXRNYXJrZWQgPSAoKSA9PiBtYXJrZWQuc2xpY2UoKTtcbiAgY29uc3Qgc2V0TWFya2VkID0gKHgsIHkpID0+IHtcbiAgICBtYXJrZWQucHVzaChbeCwgeV0pO1xuICB9O1xuXG4gIGNvbnN0IGdldE5hbWUgPSAoKSA9PiBuYW1lO1xuICBjb25zdCBnZXRTaGlwcyA9ICgpID0+IHNoaXBzO1xuICByZXR1cm4ge1xuICAgIGdldE5hbWUsIGlzVmFsaWRIaXQsIGdldE1hcmtlZCwgc2V0TWFya2VkLCBnZW5lcmF0ZVJhbmRvbVBvaW50LCBtYWtlU2hpcCwgbmV3U2hpcCwgcmVjZWl2ZUF0dGFjaywgaXNHYW1lT3ZlciwgZ2V0U2hpcHMgXG4gIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gR2FtZWJvYXJkO1xuIiwiY29uc3QgU2hpcCA9IChjb29yZHMpID0+IHtcbiAgY29uc3QgYmxvY2tzID0gY29vcmRzLm1hcCgodmFsdWUpID0+IHtcbiAgICByZXR1cm4ge1widmFsdWVcIjogdmFsdWUsIFwiaGl0XCI6IGZhbHNlfVxuICB9KTtcblxuICBsZXQgaGl0cyA9IDA7XG4gIFxuICBsZXQgc3VuayA9IGZhbHNlO1xuXG4gIGNvbnN0IGlzSGl0ID0gKHgsIHkpID0+IHtcbiAgICBsZXQgZm91bmQgPSBmYWxzZTtcbiAgICBibG9ja3MuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgaWYgKGl0ZW1bXCJ2YWx1ZVwiXVswXSA9PSB4ICYmIGl0ZW1bXCJ2YWx1ZVwiXVsxXSA9PSB5KSB7XG4gICAgICAgIGZvdW5kID0gdHJ1ZTtcbiAgICAgICAgaGl0cysrO1xuICAgICAgICBpdGVtW1wiaGl0XCJdID0gdHJ1ZTtcbiAgICAgICAgaWYgKGhpdHMgPT0gYmxvY2tzLmxlbmd0aCkge1xuICAgICAgICAgIHN1bmsgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIGZvdW5kO1xuICB9O1xuXG4gIGNvbnN0IGdldEJsb2NrcyA9ICgpID0+IGJsb2Nrcy5zbGljZSgpO1xuICBjb25zdCBpc1N1bmsgPSAoKSA9PiBzdW5rLnZhbHVlT2YoKTtcblxuICByZXR1cm4ge1xuICAgIGdldEJsb2NrcywgaXNIaXQsIGlzU3Vua1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gU2hpcDtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCBHYW1lYm9hcmQgZnJvbSAnLi9HYW1lYm9hcmQnO1xuaW1wb3J0IFNoaXAgZnJvbSAnLi9TaGlwJztcbmltcG9ydCBEb20gZnJvbSAnLi9Eb20nO1xuXG5jb25zdCBwbGF5ZXJCb2FyZCA9IEdhbWVib2FyZCgnUGxheWVyJyk7XG5jb25zdCBjb21wQm9hcmQgPSBHYW1lYm9hcmQoJ0NvbXB1dGVyJyk7XG5jb25zdCBwbGF5ZXJEb20gPSBEb20oJ1BsYXllcicpO1xuY29uc3QgY29tcERvbSA9IERvbSgnQ29tcHV0ZXInKTtcblxuY29uc3QgbWFrZVNoaXBzID0gKGJvYXJkKSA9PiB7XG4gIGxldCBjb29yZHMgPSBib2FyZC5tYWtlU2hpcCg0LCB0cnVlKTtcbiAgbGV0IHNoaXAgPSBTaGlwKGNvb3Jkcyk7XG4gIGJvYXJkLm5ld1NoaXAoc2hpcCk7XG4gIGNvb3JkcyA9IGJvYXJkLm1ha2VTaGlwKDMsIHRydWUpO1xuICBzaGlwID0gU2hpcChjb29yZHMpO1xuICBib2FyZC5uZXdTaGlwKHNoaXApO1xuICBjb29yZHMgPSBib2FyZC5tYWtlU2hpcCgzLCBmYWxzZSk7XG4gIHNoaXAgPSBTaGlwKGNvb3Jkcyk7XG4gIGJvYXJkLm5ld1NoaXAoc2hpcCk7XG4gIGNvb3JkcyA9IGJvYXJkLm1ha2VTaGlwKDIsIHRydWUpO1xuICBzaGlwID0gU2hpcChjb29yZHMpO1xuICBib2FyZC5uZXdTaGlwKHNoaXApO1xuICBjb29yZHMgPSBib2FyZC5tYWtlU2hpcCgyLCBmYWxzZSk7XG4gIHNoaXAgPSBTaGlwKGNvb3Jkcyk7XG4gIGJvYXJkLm5ld1NoaXAoc2hpcCk7XG4gIGNvb3JkcyA9IGJvYXJkLm1ha2VTaGlwKDIsIGZhbHNlKTtcbiAgc2hpcCA9IFNoaXAoY29vcmRzKTtcbiAgYm9hcmQubmV3U2hpcChzaGlwKTtcbiAgY29vcmRzID0gYm9hcmQubWFrZVNoaXAoMSwgZmFsc2UpO1xuICBzaGlwID0gU2hpcChjb29yZHMpO1xuICBib2FyZC5uZXdTaGlwKHNoaXApO1xuICBjb29yZHMgPSBib2FyZC5tYWtlU2hpcCgxLCBmYWxzZSk7XG4gIHNoaXAgPSBTaGlwKGNvb3Jkcyk7XG4gIGJvYXJkLm5ld1NoaXAoc2hpcCk7XG4gIGNvb3JkcyA9IGJvYXJkLm1ha2VTaGlwKDEsIGZhbHNlKTtcbiAgc2hpcCA9IFNoaXAoY29vcmRzKTtcbiAgYm9hcmQubmV3U2hpcChzaGlwKTtcbiAgY29vcmRzID0gYm9hcmQubWFrZVNoaXAoMSwgZmFsc2UpO1xuICBzaGlwID0gU2hpcChjb29yZHMpO1xuICBib2FyZC5uZXdTaGlwKHNoaXApO1xufTtcblxuY29uc3QgYWN0aXZhdGVTaGlwcyA9ICgpID0+IHtcbiAgY29uc3QgYm94ZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuQ29tcHV0ZXIgLmJveCcpO1xuICBib3hlcy5mb3JFYWNoKChib3gpID0+IHtcbiAgICBib3guYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBnZXRIaXRQb2ludCk7XG4gIH0pO1xufTtcblxuY29uc3QgZ2V0SGl0UG9pbnQgPSAoZSkgPT4ge1xuICBsZXQgaWQgPSBlLnRhcmdldC5pZDtcbiAgaWYgKGlkLnNsaWNlKDEsIDMpID09ICcxMCcpIHtcbiAgICBpZCA9IGlkWzBdICsgaWQuc2xpY2UoMSwgMykgKyAnLCcgKyBpZC5zbGljZSgzKTtcbiAgfSBlbHNlIHtcbiAgICBpZCA9IGlkLnNsaWNlKDAsIDIpICsgJywnICsgaWQuc2xpY2UoMik7XG4gIH1cbiAgcHJvY2Vzc0hpdChpZCk7XG59O1xuXG5jb25zdCBpbmZvID0ge1xuICBcImN1clwiOiBmYWxzZSxcbiAgXCJkaXJcIjogbnVsbCxcbiAgXCJjb29yZHNcIjogW10sXG4gIFwibGFzdFwiOiBmYWxzZSxcbiAgXCJmb3J3YXJkXCI6IHRydWVcbn07XG5cbmNvbnN0IHByb2Nlc3NIaXQgPSAoY29vcmRzKSA9PiB7XG4gIGNvbnN0IHggPSBwYXJzZUludChjb29yZHMuc2xpY2UoMSwgY29vcmRzLmluZGV4T2YoJywnKSkpO1xuICBjb25zdCB5ID0gcGFyc2VJbnQoY29vcmRzLnNsaWNlKGNvb3Jkcy5pbmRleE9mKCcsJykgKyAxKSk7XG4gIGlmIChjb21wQm9hcmQuaXNWYWxpZEhpdCh4LCB5KSl7XG4gICAgY29uc3QgcmVzdWx0ID0gY29tcEJvYXJkLnJlY2VpdmVBdHRhY2soeCwgeSk7XG4gICAgY29tcERvbS51cGRhdGVCb2FyZChyZXN1bHQpO1xuICAgIGlmIChjb21wQm9hcmQuaXNHYW1lT3ZlcigpKSB7XG4gICAgICB3aW5kb3cuYWxlcnQoXCJZb3Ugd29uXCIpO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICByZXR1cm47XG4gIH1cbiAgY29tcEF0dGFjayhpbmZvKTtcbn07XG5cbmNvbnN0IGdlbmVyYXRlQXR0YWNrID0gKGluZm8pID0+IHtcbiAgaWYgKCFpbmZvLmN1cikge1xuICAgIGNvbnN0IGNvb3JkcyA9IHBsYXllckJvYXJkLmdlbmVyYXRlUmFuZG9tUG9pbnQoKTtcbiAgICByZXR1cm4gY29vcmRzO1xuICB9IGVsc2Uge1xuICAgIGlmIChpbmZvLmNvb3Jkcy5sZW5ndGggPT0gMSkge1xuICAgICAgbGV0IHggPSBpbmZvLmNvb3Jkc1swXVswXSwgeSA9IGluZm8uY29vcmRzWzBdWzFdO1xuICAgICAgaWYgKHBsYXllckJvYXJkLmlzVmFsaWRIaXQoeCArIDEsIHkpKSB7XG4gICAgICAgIHJldHVybiBbeCArIDEsIHldO1xuICAgICAgfVxuICAgICAgaWYgKHBsYXllckJvYXJkLmlzVmFsaWRIaXQoeCAtIDEsIHkpKSB7XG4gICAgICAgIHJldHVybiBbeCAtIDEsIHldO1xuICAgICAgfVxuICAgICAgaWYgKHBsYXllckJvYXJkLmlzVmFsaWRIaXQoeCwgeSArIDEpKSB7XG4gICAgICAgIHJldHVybiBbeCwgeSArIDFdO1xuICAgICAgfVxuICAgICAgaWYgKHBsYXllckJvYXJkLmlzVmFsaWRIaXQoeCwgeSAtIDEpKSB7XG4gICAgICAgIHJldHVybiBbeCwgeSAtIDFdO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoaW5mby5sYXN0KSB7XG4gICAgICAgIGNvbnN0IGxhc3QgPSBpbmZvLmNvb3Jkc1tpbmZvLmNvb3Jkcy5sZW5ndGggLSAxXTtcbiAgICAgICAgaWYgKGluZm8uZGlyKSB7XG4gICAgICAgICAgY29uc3QgbmV4dCA9IFtsYXN0WzBdLCBsYXN0WzFdICsgMV07XG4gICAgICAgICAgaWYgKG5leHRbMV0gPiAxMCkge1xuICAgICAgICAgICAgaW5mby5sYXN0ID0gZmFsc2U7XG4gICAgICAgICAgICByZXR1cm4gZ2VuZXJhdGVBdHRhY2soaW5mbyk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBuZXh0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbnN0IG5leHQgPSBbbGFzdFswXSArIDEsIGxhc3RbMV1dO1xuICAgICAgICAgIGlmIChuZXh0WzBdID4gMTApIHtcbiAgICAgICAgICAgIGluZm8ubGFzdCA9IGZhbHNlO1xuICAgICAgICAgICAgcmV0dXJuIGdlbmVyYXRlQXR0YWNrKGluZm8pO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gbmV4dDtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgZmlyc3QgPSBpbmZvLmNvb3Jkc1swXTtcbiAgICAgICAgaWYgKGluZm8uZGlyKSB7XG4gICAgICAgICAgY29uc3QgbmV4dCA9IFtmaXJzdFswXSwgZmlyc3RbMV0gLSAxXTtcbiAgICAgICAgICBpZiAobmV4dFsxXSA8IDEpIHtcbiAgICAgICAgICAgIGluZm8ubGFzdCA9IGZhbHNlO1xuICAgICAgICAgICAgcmV0dXJuIGdlbmVyYXRlQXR0YWNrKGluZm8pO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gbmV4dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb25zdCBuZXh0ID0gW2ZpcnN0WzBdIC0gMSwgZmlyc3RbMV1dO1xuICAgICAgICAgIGlmIChuZXh0WzBdIDwgMSkge1xuICAgICAgICAgICAgaW5mby5sYXN0ID0gZmFsc2U7XG4gICAgICAgICAgICByZXR1cm4gZ2VuZXJhdGVBdHRhY2soaW5mbyk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBuZXh0O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59O1xuXG5jb25zdCB1cGRhdGVJbmZvID0gKHJlc3VsdCwgY29vcmRzLCBpbmZvKSA9PiB7XG4gIGlmIChyZXN1bHQubGVuZ3RoID4gMiAmJiByZXN1bHRbMV0pIHtcbiAgICBpbmZvLmN1ciA9IGZhbHNlO1xuICAgIGluZm8uZGlyID0gbnVsbDtcbiAgICBpbmZvLmNvb3JkcyA9IFtdO1xuICAgIGluZm8ubGFzdCA9IGZhbHNlO1xuICAgIHJldHVybjtcbiAgfVxuICAvLyBub3QgYSBzaW5rXG4gIGlmICghaW5mby5jdXIpIHtcbiAgICBpZiAocmVzdWx0WzBdKSB7XG4gICAgICBpbmZvLmN1ciA9IHRydWU7XG4gICAgICBpbmZvLmNvb3Jkcy5wdXNoKGNvb3Jkcyk7XG4gICAgICBpbmZvLmxhc3QgPSB0cnVlO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBpZiAoaW5mby5jb29yZHMubGVuZ3RoID09IDEpIHtcbiAgICAgIGlmIChyZXN1bHRbMF0pIHtcbiAgICAgICAgaWYgKGluZm8uY29vcmRzWzBdWzBdID09IGNvb3Jkc1swXSkge1xuICAgICAgICAgIGluZm8uZGlyID0gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpbmZvLmRpciA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGluZm8uY29vcmRzLnB1c2goY29vcmRzKTtcbiAgICAgICAgaW5mby5sYXN0ID0gdHJ1ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGluZm8ubGFzdCA9IGZhbHNlO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBpZiAocmVzdWx0WzBdKSB7XG4gICAgICAgIGluZm8uY29vcmRzLnB1c2goY29vcmRzKTtcbiAgICAgICAgaW5mby5sYXN0ID0gdHJ1ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGluZm8ubGFzdCA9IGZhbHNlO1xuICAgICAgfVxuICAgIH1cbiAgfVxufTtcblxuY29uc3QgY29tcEF0dGFjayA9IChpbmZvKSA9PiB7XG4gIGNvbnN0IGNvb3JkcyA9IGdlbmVyYXRlQXR0YWNrKGluZm8pO1xuICBjb25zdCByZXN1bHQgPSBwbGF5ZXJCb2FyZC5yZWNlaXZlQXR0YWNrKGNvb3Jkc1swXSwgY29vcmRzWzFdKTtcbiAgdXBkYXRlSW5mbyhyZXN1bHQsIGNvb3JkcywgaW5mbyk7XG4gIHBsYXllckRvbS51cGRhdGVCb2FyZChyZXN1bHQpO1xuICBpZiAocGxheWVyQm9hcmQuaXNHYW1lT3ZlcigpKSB7XG4gICAgd2luZG93LmFsZXJ0KFwiQ29tcHV0ZXIgV29uXCIpO1xuICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcbiAgfVxuICBpZiAoY29tcEJvYXJkLmlzR2FtZU92ZXIoKSkge1xuICAgIHdpbmRvdy5hbGVydChcIllvdSBXb25cIik7XG4gICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xuICB9XG59O1xuXG5jb25zdCBpbml0ID0gKCkgPT4ge1xuICBtYWtlU2hpcHMocGxheWVyQm9hcmQpO1xuICBwbGF5ZXJEb20ucmVuZGVyKCk7XG4gIHBsYXllckRvbS5yZW5kZXJTaGlwcyhwbGF5ZXJCb2FyZC5nZXRTaGlwcygpKTtcbiAgbWFrZVNoaXBzKGNvbXBCb2FyZCk7XG4gIGNvbXBEb20ucmVuZGVyKCk7XG4gIGFjdGl2YXRlU2hpcHMoKTtcbn07XG5cbmluaXQoKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==