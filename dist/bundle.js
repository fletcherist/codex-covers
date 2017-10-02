/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _button = __webpack_require__(39);

var _button2 = _interopRequireDefault(_button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var HeadlineButton = _button2.default.bind(null, {
  id: 'headline-button',
  label: 'Headline'
});


var MainTextButton = _button2.default.bind(null, {
  id: 'main-text-button',
  label: 'Main text'
});

var AttachImageButton = _button2.default.bind(null, {
  id: 'attach-image-button',
  label: 'Image'
});

var App = function App() {
  return '\n    ' + HeadlineButton().component + '\n    ' + MainTextButton().component + '\n    ' + AttachImageButton().component + '\n';
};

document.body.innerHTML = App();

var attachListener = function attachListener(type, elementId, func) {
  return document.getElementById(elementId).addEventListener(type, func);
};

var attachClickListener = attachListener.bind(null, 'click');

attachClickListener(HeadlineButton().id, function () {
  return console.log('im func');
});
attachClickListener(MainTextButton().id, function () {
  return console.log('im another func');
});
attachClickListener(AttachImageButton().id, function () {
  return console.log('im third func');
});

/***/ }),

/***/ 39:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = Button;
var ButtonStyles = "\n    color: blue;\n    font-size: 34px;\n";

function Button(props) {
  var label = props.label,
      id = props.id;

  var componentId = Math.random().toString().slice(2);
  return _extends({}, props, {
    component: "\n      <button style=\"" + ButtonStyles + "\"\n        id=\"" + (id || componentId) + "\">\n        " + label + "\n      </button>\n    "
  });
}

/***/ })

/******/ });