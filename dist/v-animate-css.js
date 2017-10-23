var VAnimateCss =
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
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = ["animated","bounce","flash","pulse","rubberBand","shake","headShake","swing","tada","wobble","jello","bounceIn","bounceInDown","bounceInLeft","bounceInRight","bounceInUp","bounceOut","bounceOutDown","bounceOutLeft","bounceOutRight","bounceOutUp","fadeIn","fadeInDown","fadeInDownBig","fadeInLeft","fadeInLeftBig","fadeInRight","fadeInRightBig","fadeInUp","fadeInUpBig","fadeOut","fadeOutDown","fadeOutDownBig","fadeOutLeft","fadeOutLeftBig","fadeOutRight","fadeOutRightBig","fadeOutUp","fadeOutUpBig","flipInX","flipInY","flipOutX","flipOutY","lightSpeedIn","lightSpeedOut","rotateIn","rotateInDownLeft","rotateInDownRight","rotateInUpLeft","rotateInUpRight","rotateOut","rotateOutDownLeft","rotateOutDownRight","rotateOutUpLeft","rotateOutUpRight","hinge","jackInTheBox","rollIn","rollOut","zoomIn","zoomInDown","zoomInLeft","zoomInRight","zoomInUp","zoomOut","zoomOutDown","zoomOutLeft","zoomOutRight","zoomOutUp","slideInDown","slideInLeft","slideInRight","slideInUp","slideOutDown","slideOutLeft","slideOutRight","slideOutUp"]

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.animateNow = exports.animationEnd = undefined;

var _animations = __webpack_require__(0);

var _animations2 = _interopRequireDefault(_animations);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var animationEnd = exports.animationEnd = function animationEnd(el, value, modifiers) {
  if (modifiers.once) return;
  el.addEventListener("animationend", function () {
    var classes = el.classList;
    _animations2.default.forEach(function (item) {
      if (classes.contains(item)) {
        el.classList.remove(item);
        if (value.removeAfterAnimation) {
          el.parentNode.removeChild(el);
        }
      }
    });
  }, false);
};

var animateNow = exports.animateNow = function animateNow(el, value, modifiers) {
  var classes = value.classes,
      duration = value.duration,
      delay = value.delay,
      iteration = value.iteration;


  if (!!duration) {
    el.style['-webkit-animation-duration'] = duration + 'ms';
    el.style['-moz-animation-duration'] = duration + 'ms';
    el.style['-o-animation-duration'] = duration + 'ms';
    el.style['animation-duration'] = duration + 'ms';
  }

  if (!!delay) {
    el.style['-webkit-animation-delay'] = delay + 'ms';
    el.style['-moz-animation-delay'] = delay + 'ms';
    el.style['-o-animation-delay'] = delay + 'ms';
    el.style['animation-delay'] = delay + 'ms';
  }

  if (!!iteration) {
    el.style['-webkit-animation-iteration-count'] = '' + iteration;
    el.style['-moz-animation-iteration-count'] = '' + iteration;
    el.style['-o-animation-iteration-count'] = '' + iteration;
    el.style['animation-iteration-count'] = '' + iteration;
  }

  el.className = el.classList.value + ' animated ' + classes;

  animationEnd(el, value, modifiers);
};

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _directives = __webpack_require__(3);

var _directives2 = _interopRequireDefault(_directives);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var link = document.createElement('link');
link.rel = 'stylesheet';
link.href = 'https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css';
document.getElementsByTagName('head')[0].appendChild(link);

var VAnimateCss = {
  install: function install(Vue, options) {
    (0, _directives2.default)(Vue);
  }
};

exports.default = VAnimateCss;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _animations = __webpack_require__(0);

var _animations2 = _interopRequireDefault(_animations);

var _animate = __webpack_require__(4);

var _animate2 = _interopRequireDefault(_animate);

var _events = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (Vue) {
  Vue.directive('animate-css', {
    inserted: function inserted(el) {},
    bind: function bind(el, binding, vnode) {
      var name = binding.name,
          value = binding.value,
          oldValue = binding.oldValue,
          expression = binding.expression,
          arg = binding.arg,
          modifiers = binding.modifiers;


      (0, _animate2.default)(el, value, modifiers);
    }
  });
};

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _events = __webpack_require__(1);

exports.default = function (el, value, modifiers) {
  var click = modifiers.click,
      hover = modifiers.hover,
      once = modifiers.once;


  if (typeof value === 'string') {
    value = { classes: value };
  }

  if (click) {
    el.onclick = function () {
      (0, _events.animateNow)(el, value, modifiers);
    };
    return;
  }

  if (hover) {
    el.onmouseover = function () {
      (0, _events.animateNow)(el, value, modifiers);
    };
    return;
  }

  (0, _events.animateNow)(el, value, modifiers);
};

/***/ })
/******/ ]);