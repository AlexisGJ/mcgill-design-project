module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/AppbarComponent.js":
/*!***************************************!*\
  !*** ./components/AppbarComponent.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "next/link");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/AppBar */ "@material-ui/core/AppBar");
/* harmony import */ var _material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Toolbar */ "@material-ui/core/Toolbar");
/* harmony import */ var _material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Typography */ "@material-ui/core/Typography");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Button */ "@material-ui/core/Button");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/IconButton */ "@material-ui/core/IconButton");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_core_Icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/Icon */ "@material-ui/core/Icon");
/* harmony import */ var _material_ui_core_Icon__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Icon__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _material_ui_icons_Info__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/icons/Info */ "@material-ui/icons/Info");
/* harmony import */ var _material_ui_icons_Info__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Info__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _material_ui_icons_Home__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/icons/Home */ "@material-ui/icons/Home");
/* harmony import */ var _material_ui_icons_Home__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Home__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _material_ui_icons_Settings__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/icons/Settings */ "@material-ui/icons/Settings");
/* harmony import */ var _material_ui_icons_Settings__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Settings__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/core/CircularProgress */ "@material-ui/core/CircularProgress");
/* harmony import */ var _material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _material_ui_core_Tooltip__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/core/Tooltip */ "@material-ui/core/Tooltip");
/* harmony import */ var _material_ui_core_Tooltip__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Tooltip__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! moment */ "moment");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_15__);
var _jsxFileName = "/Users/alexisgj/GitHub/mcgill-design-project/frontend/components/AppbarComponent.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

















var styles = {
  root: {
    flexGrow: 1
  },
  grow: {
    flexGrow: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  },
  infoTooltip: {},
  progress: {
    marginLeft: '20px'
  }
};
var longText = "\nMcGill Artificial Pancreas Lab\n\n\n\nInterface d\xE9velopp\xE9e par Alexis Gigu\xE8re-Joannette, Ege Ozer et Rami Djema.\n";

var ButtonAppBar =
/*#__PURE__*/
function (_React$Component) {
  _inherits(ButtonAppBar, _React$Component);

  function ButtonAppBar(props) {
    var _this;

    _classCallCheck(this, ButtonAppBar);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ButtonAppBar).call(this, props));
    _this.state = {
      loading: false,
      time: moment__WEBPACK_IMPORTED_MODULE_15___default()().format('HH:mm')
    };
    return _this;
  }

  _createClass(ButtonAppBar, [{
    key: "displayTime",
    value: function displayTime() {
      this.setState({
        time: moment__WEBPACK_IMPORTED_MODULE_15___default()().format('HH:mm')
      });
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      this.interval = setInterval(function () {
        _this2.displayTime();
      }, 5000);
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps() {
      this.setState({
        loading: this.props.loading
      });
    }
  }, {
    key: "render",
    value: function render() {
      var classes = this.props.classes;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: classes.root,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_4___default.a, {
        position: "static",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_5___default.a, {
        className: "navbar",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
        as: "/",
        href: "/",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_8___default.a, {
        className: classes.menuButton,
        color: "inherit",
        "aria-label": "Menu",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_Home__WEBPACK_IMPORTED_MODULE_11___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "mcgill-logo-container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "mcgill-logo",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6___default.a, {
        color: "inherit",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        },
        __self: this
      }, "McGill Artificial Pancreas Lab")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Tooltip__WEBPACK_IMPORTED_MODULE_14___default.a, {
        title: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 92
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6___default.a, {
          color: "inherit",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 93
          },
          __self: this
        }, "McGill Artificial Pancreas Lab"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 94
          },
          __self: this
        }), 'Interface développée par Alexis Giguère-Joannette, Ege Ozer et Rami Djema sous la supervision de Dr. Ahmad Haidar'),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_8___default.a, {
        className: classes.infoTooltip,
        color: "inherit",
        "aria-label": "Info",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_Info__WEBPACK_IMPORTED_MODULE_10___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99
        },
        __self: this
      }))), this.state.loading && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_13___default.a, {
        className: classes.progress,
        color: "secondary",
        size: 20,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 102
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6___default.a, {
        className: classes.grow,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 103
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6___default.a, {
        variant: "h6",
        color: "inherit",
        style: {
          marginRight: '10px'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 105
        },
        __self: this
      }, this.state.time), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
        as: "/settings",
        href: "/settings",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 106
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_8___default.a, {
        color: "inherit",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 107
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_Settings__WEBPACK_IMPORTED_MODULE_12___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 108
        },
        __self: this
      }))))));
    }
  }]);

  return ButtonAppBar;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

ButtonAppBar.propTypes = {
  classes: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["withStyles"])(styles)(ButtonAppBar));

/***/ }),

/***/ "./components/SnackbarComponent.js":
/*!*****************************************!*\
  !*** ./components/SnackbarComponent.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Button */ "@material-ui/core/Button");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_icons_CheckCircle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/icons/CheckCircle */ "@material-ui/icons/CheckCircle");
/* harmony import */ var _material_ui_icons_CheckCircle__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_CheckCircle__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_icons_Error__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/icons/Error */ "@material-ui/icons/Error");
/* harmony import */ var _material_ui_icons_Error__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Error__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_icons_Info__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/icons/Info */ "@material-ui/icons/Info");
/* harmony import */ var _material_ui_icons_Info__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Info__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/icons/Close */ "@material-ui/icons/Close");
/* harmony import */ var _material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_core_colors_green__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/colors/green */ "@material-ui/core/colors/green");
/* harmony import */ var _material_ui_core_colors_green__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_colors_green__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_core_colors_amber__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/colors/amber */ "@material-ui/core/colors/amber");
/* harmony import */ var _material_ui_core_colors_amber__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_colors_amber__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/IconButton */ "@material-ui/core/IconButton");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _material_ui_core_Snackbar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/Snackbar */ "@material-ui/core/Snackbar");
/* harmony import */ var _material_ui_core_Snackbar__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Snackbar__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _material_ui_core_SnackbarContent__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/SnackbarContent */ "@material-ui/core/SnackbarContent");
/* harmony import */ var _material_ui_core_SnackbarContent__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_SnackbarContent__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _material_ui_icons_Warning__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/icons/Warning */ "@material-ui/icons/Warning");
/* harmony import */ var _material_ui_icons_Warning__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Warning__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_14__);
var _jsxFileName = "/Users/alexisgj/GitHub/mcgill-design-project/frontend/components/SnackbarComponent.js";

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
















var variantIcon = {
  success: _material_ui_icons_CheckCircle__WEBPACK_IMPORTED_MODULE_4___default.a,
  warning: _material_ui_icons_Warning__WEBPACK_IMPORTED_MODULE_13___default.a,
  error: _material_ui_icons_Error__WEBPACK_IMPORTED_MODULE_5___default.a,
  info: _material_ui_icons_Info__WEBPACK_IMPORTED_MODULE_6___default.a
};

var styles = function styles(theme) {
  return {
    success: {
      backgroundColor: _material_ui_core_colors_green__WEBPACK_IMPORTED_MODULE_8___default.a[600]
    },
    error: {
      backgroundColor: theme.palette.error.dark
    },
    info: {
      backgroundColor: theme.palette.primary.dark
    },
    warning: {
      backgroundColor: _material_ui_core_colors_amber__WEBPACK_IMPORTED_MODULE_9___default.a[700]
    },
    icon: {
      fontSize: 20
    },
    iconVariant: {
      opacity: 0.9,
      marginRight: theme.spacing.unit
    },
    message: {
      display: 'flex',
      alignItems: 'center'
    }
  };
};

function MySnackbarContent(props) {
  var classes = props.classes,
      className = props.className,
      message = props.message,
      onClose = props.onClose,
      variant = props.variant,
      other = _objectWithoutProperties(props, ["classes", "className", "message", "onClose", "variant"]);

  var Icon = variantIcon[variant];
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_SnackbarContent__WEBPACK_IMPORTED_MODULE_12___default.a, {
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(classes[variant], className),
    "aria-describedby": "client-snackbar",
    message: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      id: "client-snackbar",
      className: classes.message,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Icon, {
      className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(classes.icon, classes.iconVariant),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60
      },
      __self: this
    }), message),
    action: [react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_10___default.a, {
      key: "close",
      "aria-label": "Close",
      color: "inherit",
      className: classes.close,
      onClick: onClose,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_7___default.a, {
      className: classes.icon,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 72
      },
      __self: this
    }))],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  });
}

MySnackbarContent.propTypes = {
  classes: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired,
  className: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  message: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node,
  onClose: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  variant: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOf(['success', 'warning', 'error', 'info']).isRequired
};
var MySnackbarContentWrapper = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_14__["withStyles"])(styles)(MySnackbarContent);
/* harmony default export */ __webpack_exports__["default"] = (MySnackbarContentWrapper);

/***/ }),

/***/ "./pages/settings.js":
/*!***************************!*\
  !*** ./pages/settings.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Paper */ "@material-ui/core/Paper");
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Typography */ "@material-ui/core/Typography");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/link */ "next/link");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Button */ "@material-ui/core/Button");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Grid */ "@material-ui/core/Grid");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_core_ExpansionPanel__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/ExpansionPanel */ "@material-ui/core/ExpansionPanel");
/* harmony import */ var _material_ui_core_ExpansionPanel__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_ExpansionPanel__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _material_ui_core_ExpansionPanelDetails__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/ExpansionPanelDetails */ "@material-ui/core/ExpansionPanelDetails");
/* harmony import */ var _material_ui_core_ExpansionPanelDetails__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_ExpansionPanelDetails__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _material_ui_core_ExpansionPanelSummary__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/ExpansionPanelSummary */ "@material-ui/core/ExpansionPanelSummary");
/* harmony import */ var _material_ui_core_ExpansionPanelSummary__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_ExpansionPanelSummary__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _material_ui_core_ExpansionPanelActions__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/ExpansionPanelActions */ "@material-ui/core/ExpansionPanelActions");
/* harmony import */ var _material_ui_core_ExpansionPanelActions__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_ExpansionPanelActions__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/icons/ExpandMore */ "@material-ui/icons/ExpandMore");
/* harmony import */ var _material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _material_ui_icons_Add__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/icons/Add */ "@material-ui/icons/Add");
/* harmony import */ var _material_ui_icons_Add__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Add__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @material-ui/core/Divider */ "@material-ui/core/Divider");
/* harmony import */ var _material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @material-ui/core/TextField */ "@material-ui/core/TextField");
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @material-ui/core/FormControlLabel */ "@material-ui/core/FormControlLabel");
/* harmony import */ var _material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _material_ui_core_Switch__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @material-ui/core/Switch */ "@material-ui/core/Switch");
/* harmony import */ var _material_ui_core_Switch__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Switch__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _material_ui_core_Snackbar__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @material-ui/core/Snackbar */ "@material-ui/core/Snackbar");
/* harmony import */ var _material_ui_core_Snackbar__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Snackbar__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @material-ui/core/IconButton */ "@material-ui/core/IconButton");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var _material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @material-ui/icons/Close */ "@material-ui/icons/Close");
/* harmony import */ var _material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var _static_css_main_custom_css__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../static/css/main_custom.css */ "./static/css/main_custom.css");
/* harmony import */ var _static_css_main_custom_css__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(_static_css_main_custom_css__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var _components_SnackbarComponent__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../components/SnackbarComponent */ "./components/SnackbarComponent.js");
/* harmony import */ var _components_AppbarComponent__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../components/AppbarComponent */ "./components/AppbarComponent.js");
var _jsxFileName = "/Users/alexisgj/GitHub/mcgill-design-project/frontend/pages/settings.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



























var API_URL =  false ? undefined : "http://localhost:1234";
var theme = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["createMuiTheme"])({
  palette: {
    primary: {
      main: '#455a64'
    },
    secondary: {
      main: '#ffffff'
    }
  },
  typography: {
    useNextVariants: true
  }
});

var styles = function styles(theme) {
  return {
    root: {
      flexGrow: 1,
      padding: 20
    },
    paper: {
      padding: theme.spacing.unit * 2,
      textAlign: 'center',
      color: theme.palette.text.secondary
    },
    heading: {
      fontSize: theme.typography.pxToRem(15),
      textAlign: 'left'
    },
    secondaryHeading: {
      fontSize: theme.typography.pxToRem(15),
      color: theme.palette.text.secondary,
      textAlign: 'left'
    },
    icon: {
      verticalAlign: 'bottom',
      height: 20,
      width: 20
    },
    details: {
      alignItems: 'center'
    },
    column: {
      flexBasis: '33.33%'
    },
    helper: {
      borderLeft: "2px solid ".concat(theme.palette.divider),
      padding: "".concat(theme.spacing.unit, "px ").concat(theme.spacing.unit * 2, "px")
    },
    link: {
      color: theme.palette.primary.main,
      textDecoration: 'none',
      '&:hover': {
        textDecoration: 'underline'
      }
    },
    textField: {
      width: '95%'
    },
    close: {
      padding: theme.spacing.unit / 2
    },
    message: {
      display: 'flex',
      alignItems: 'center'
    },
    snackbarContainer: {
      minWidth: 500
    },
    snackbarMargin: {
      margin: theme.spacing.unit
    },
    childActiveTrue: {
      color: 'green'
    },
    childActiveFalse: {
      color: 'red'
    },
    addPanel: {
      background: '#455a64',
      color: '#fff'
    }
  };
};

var Settings =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Settings, _React$Component);

  function Settings(props) {
    var _this;

    _classCallCheck(this, Settings);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Settings).call(this, props));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "getData", function () {
      fetch(API_URL + "/api/child/all").then(function (res) {
        return res.json();
      }).then(function (result) {
        _this.setState({
          isLoaded: true,
          data: result.sort(function (a, b) {
            return a.name.localeCompare(b.name);
          })
        });
      }, // Note: it's important to handle errors here
      // instead of a catch() block so that we don't swallow
      // exceptions from actual bugs in components.
      function (error) {
        _this.setState({
          isLoaded: true,
          error: error
        });
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "showSnackbarMessage", function (message, variant) {
      _this.setState({
        snackbarOpen: true,
        snackbarMessage: message,
        snackbarVariant: variant
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "snackbarClose", function (event, reason) {
      if (reason === 'clickaway') {
        return;
      }

      _this.setState({
        snackbarOpen: false
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleClose", function (panel) {
      return function (event, expanded) {
        _this.setState({
          expanded: expanded ? panel : false
        });
      };
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleChange", function (key, field, e) {
      var tempData = _this.state.data;
      var newValue = e.target.value;

      if (field == 'active') {
        newValue = !tempData[key].active;
      }

      tempData[key][field] = newValue;

      _this.setState({
        data: tempData
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleChangeNewChild", function (field, e) {
      var tempData = _this.state.newChild;
      var newValue = e.target.value;

      if (field == 'active') {
        newValue = !tempData.active;
      }

      tempData[field] = newValue;

      _this.setState({
        newChild: tempData
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "updateChild", function (row) {
      fetch(API_URL + '/api/child/' + row._id + '/update', {
        method: 'post',
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(row)
      }).then(function (response) {
        if (response.status == 200) {
          _this.showSnackbarMessage("Enregistré avec succès", "success");

          _this.getData();
        } else {
          _this.showSnackbarMessage("Il y a eu une erreur lors de l'enregistrement", "error");
        }
      });
      console.log(row);
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "createChild", function () {
      fetch(API_URL + '/api/child/create', {
        method: 'post',
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(_this.state.newChild)
      }).then(function (response) {
        if (response.status == 200) {
          _this.showSnackbarMessage("Enregistré avec succès", "success");

          _this.setState({
            newChild: {
              name: "",
              collection_id: "",
              location: "Tente #",
              range_min: 4,
              range_max: 8,
              active: true
            }
          });

          _this.getData();
        } else {
          _this.showSnackbarMessage("Il y a eu une erreur lors de l'enregistrement", "error");
        }
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "deleteChild", function (row) {
      fetch(API_URL + '/api/child/' + row._id + '/delete', {
        method: 'post',
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(row)
      }).then(function (response) {
        if (response.status == 200) {
          _this.showSnackbarMessage("Supprimé avec succès", "success");

          _this.getData();
        } else {
          _this.showSnackbarMessage("Il y a eu une erreur lors de la suppression", "error");
        }
      });
    });

    _this.state = {
      error: null,
      isLoaded: false,
      expanded: null,
      snackbarOpen: false,
      snackbarMessage: "",
      snackbarVariant: "info",
      data: [],
      newChild: {
        name: "",
        collection_id: "",
        location: "Tente #",
        range_min: 4,
        range_max: 8,
        active: true
      }
    };
    return _this;
  }

  _createClass(Settings, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.getData();
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var classes = this.props.classes;
      var _this$state = this.state,
          error = _this$state.error,
          isLoaded = _this$state.isLoaded,
          data = _this$state.data,
          expanded = _this$state.expanded,
          newChild = _this$state.newChild;

      if (error) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 273
          },
          __self: this
        }, "Error: ", error.message);
      } else if (!isLoaded) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 275
          },
          __self: this
        }, "Loading...");
      } else {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 278
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["MuiThemeProvider"], {
          theme: theme,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 279
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_AppbarComponent__WEBPACK_IMPORTED_MODULE_24__["default"], {
          loading: false,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 280
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_8___default.a, {
          container: true,
          spacing: 24,
          className: classes.root,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 282
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_8___default.a, {
          item: true,
          sm: 2,
          xs: 0,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 283
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_8___default.a, {
          item: true,
          sm: 8,
          xs: 12,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 284
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_4___default.a, {
          className: classes.paper,
          elevation: 1,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 285
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_ExpansionPanel__WEBPACK_IMPORTED_MODULE_9___default.a, {
          key: 'create_child',
          expanded: expanded === 'create_child',
          onChange: this.handleClose('create_child'),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 287
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_ExpansionPanelSummary__WEBPACK_IMPORTED_MODULE_11___default.a, {
          expandIcon: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_Add__WEBPACK_IMPORTED_MODULE_14___default.a, {
            color: "secondary",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 288
            },
            __self: this
          }),
          className: classes.addPanel,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 288
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: classes.column,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 289
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5___default.a, {
          className: classes.heading,
          style: {
            color: '#fff'
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 290
          },
          __self: this
        }, "Ajouter une nouvelle entr\xE9e"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_ExpansionPanelDetails__WEBPACK_IMPORTED_MODULE_10___default.a, {
          className: classes.details,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 293
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_8___default.a, {
          container: true,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 294
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_8___default.a, {
          item: true,
          sm: 4,
          xs: 12,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 295
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_16___default.a, {
          id: "outlined-name-input",
          label: "Nom",
          className: classes.textField,
          type: "text",
          name: "name",
          margin: "normal",
          variant: "outlined",
          onChange: function onChange(e) {
            return _this2.handleChangeNewChild('name', e);
          },
          value: newChild.name,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 296
          },
          __self: this
        })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_8___default.a, {
          item: true,
          sm: 4,
          xs: 12,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 308
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_16___default.a, {
          id: "outlined-sensorId-input",
          label: "ID du capteur",
          className: classes.textField,
          type: "text",
          name: "sensorId",
          margin: "normal",
          variant: "outlined",
          onChange: function onChange(e) {
            return _this2.handleChangeNewChild('collection_id', e);
          },
          value: newChild.collection_id,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 309
          },
          __self: this
        })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_8___default.a, {
          item: true,
          sm: 4,
          xs: 12,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 321
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_16___default.a, {
          id: "outlined-location-input",
          label: "Location",
          className: classes.textField,
          type: "text",
          name: "location",
          margin: "normal",
          variant: "outlined",
          onChange: function onChange(e) {
            return _this2.handleChangeNewChild('location', e);
          },
          value: newChild.location,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 322
          },
          __self: this
        })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_8___default.a, {
          item: true,
          sm: 4,
          xs: 0,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 334
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_8___default.a, {
          item: true,
          sm: 4,
          xs: 12,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 335
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_16___default.a, {
          id: "outlined-rangemin-input",
          label: "Range minimum",
          className: classes.textField,
          type: "number",
          name: "rangemin",
          margin: "normal",
          variant: "outlined",
          onChange: function onChange(e) {
            return _this2.handleChangeNewChild('range_min', e);
          },
          value: newChild.range_min,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 336
          },
          __self: this
        })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_8___default.a, {
          item: true,
          sm: 4,
          xs: 12,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 348
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_16___default.a, {
          id: "outlined-rangemax-input",
          label: "Range maximal",
          className: classes.textField,
          type: "number",
          name: "rangemin",
          margin: "normal",
          variant: "outlined",
          onChange: function onChange(e) {
            return _this2.handleChangeNewChild('range_max', e);
          },
          value: newChild.range_max,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 349
          },
          __self: this
        })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_8___default.a, {
          item: true,
          sm: 4,
          xs: 0,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 362
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_8___default.a, {
          item: true,
          sm: 4,
          xs: 0,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 363
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_8___default.a, {
          item: true,
          sm: 4,
          xs: 12,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 364
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_17___default.a, {
          control: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Switch__WEBPACK_IMPORTED_MODULE_18___default.a, {
            checked: newChild.active,
            onChange: function onChange(e) {
              return _this2.handleChangeNewChild('active', e);
            },
            color: "primary",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 367
            },
            __self: this
          }),
          label: "Actif",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 365
          },
          __self: this
        })))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_15___default.a, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 380
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_ExpansionPanelActions__WEBPACK_IMPORTED_MODULE_12___default.a, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 381
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_7___default.a, {
          size: "xsall",
          color: "primary",
          onClick: function onClick(e) {
            return _this2.createChild(), _this2.handleClose('create_child');
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 383
          },
          __self: this
        }, "Save"))), data.map(function (row, key) {
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_ExpansionPanel__WEBPACK_IMPORTED_MODULE_9___default.a, {
            key: row._id,
            expanded: expanded === row._id,
            onChange: _this2.handleClose(row._id),
            __source: {
              fileName: _jsxFileName,
              lineNumber: 392
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_ExpansionPanelSummary__WEBPACK_IMPORTED_MODULE_11___default.a, {
            expandIcon: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_13___default.a, {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 393
              },
              __self: this
            }),
            __source: {
              fileName: _jsxFileName,
              lineNumber: 393
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            className: classes.column,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 394
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5___default.a, {
            className: classes.heading,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 395
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
            className: row.active ? classes.childActiveTrue : classes.childActiveFalse,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 395
            },
            __self: this
          }, "\u25CF"), " ", row.name)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            className: classes.column,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 397
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5___default.a, {
            className: classes.secondaryHeading,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 398
            },
            __self: this
          }, row.location))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_ExpansionPanelDetails__WEBPACK_IMPORTED_MODULE_10___default.a, {
            className: classes.details,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 401
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_8___default.a, {
            container: true,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 402
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_8___default.a, {
            item: true,
            sm: 4,
            xs: 12,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 403
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_16___default.a, {
            id: "outlined-name-input",
            label: "Nom",
            className: classes.textField,
            type: "text",
            name: "name",
            margin: "normal",
            variant: "outlined",
            onChange: function onChange(e) {
              return _this2.handleChange(key, 'name', e);
            },
            value: row.name,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 404
            },
            __self: this
          })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_8___default.a, {
            item: true,
            sm: 4,
            xs: 12,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 416
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_16___default.a, {
            id: "outlined-sensorId-input",
            label: "ID du capteur",
            className: classes.textField,
            type: "text",
            name: "sensorId",
            margin: "normal",
            variant: "outlined",
            onChange: function onChange(e) {
              return _this2.handleChange(key, 'collection_id', e);
            },
            value: row.collection_id,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 417
            },
            __self: this
          })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_8___default.a, {
            item: true,
            sm: 4,
            xs: 12,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 429
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_16___default.a, {
            id: "outlined-location-input",
            label: "Location",
            className: classes.textField,
            type: "text",
            name: "location",
            margin: "normal",
            variant: "outlined",
            onChange: function onChange(e) {
              return _this2.handleChange(key, 'location', e);
            },
            value: row.location,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 430
            },
            __self: this
          })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_8___default.a, {
            item: true,
            sm: 4,
            xs: 0,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 442
            },
            __self: this
          }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_8___default.a, {
            item: true,
            sm: 4,
            xs: 12,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 443
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_16___default.a, {
            id: "outlined-rangemin-input",
            label: "Range minimum",
            className: classes.textField,
            type: "number",
            name: "rangemin",
            margin: "normal",
            variant: "outlined",
            onChange: function onChange(e) {
              return _this2.handleChange(key, 'range_min', e);
            },
            value: row.range_min,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 444
            },
            __self: this
          })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_8___default.a, {
            item: true,
            sm: 4,
            xs: 12,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 456
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_16___default.a, {
            id: "outlined-rangemax-input",
            label: "Range maximal",
            className: classes.textField,
            type: "number",
            name: "rangemin",
            margin: "normal",
            variant: "outlined",
            onChange: function onChange(e) {
              return _this2.handleChange(key, 'range_max', e);
            },
            value: row.range_max,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 457
            },
            __self: this
          })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_8___default.a, {
            item: true,
            sm: 4,
            xs: 0,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 470
            },
            __self: this
          }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_8___default.a, {
            item: true,
            sm: 4,
            xs: 0,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 471
            },
            __self: this
          }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_8___default.a, {
            item: true,
            sm: 4,
            xs: 12,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 472
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_17___default.a, {
            control: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Switch__WEBPACK_IMPORTED_MODULE_18___default.a, {
              checked: row.active,
              onChange: function onChange(e) {
                return _this2.handleChange(key, 'active', e);
              },
              color: "primary",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 475
              },
              __self: this
            }),
            label: "Actif",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 473
            },
            __self: this
          })))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_15___default.a, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 488
            },
            __self: this
          }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_ExpansionPanelActions__WEBPACK_IMPORTED_MODULE_12___default.a, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 489
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_7___default.a, {
            size: "xsall",
            onClick: function onClick(e) {
              return _this2.deleteChild(row), _this2.handleClose(row._id);
            },
            __source: {
              fileName: _jsxFileName,
              lineNumber: 490
            },
            __self: this
          }, "Supprimer"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_7___default.a, {
            size: "xsall",
            color: "primary",
            onClick: function onClick(e) {
              return _this2.updateChild(row), _this2.handleClose(row._id);
            },
            __source: {
              fileName: _jsxFileName,
              lineNumber: 491
            },
            __self: this
          }, "Enregister")));
        }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_8___default.a, {
          item: true,
          sm: 2,
          xs: 0,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 498
          },
          __self: this
        })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Snackbar__WEBPACK_IMPORTED_MODULE_19___default.a, {
          anchorOrigin: {
            vertical: 'bottom',
            horizontal: 'left'
          },
          open: this.state.snackbarOpen,
          autoHideDuration: 6000,
          onClose: this.snackbarClose,
          className: classes.snackbarContainer,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 502
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_SnackbarComponent__WEBPACK_IMPORTED_MODULE_23__["default"], {
          variant: this.state.snackbarVariant,
          className: classes.snackbarMargin,
          message: this.state.snackbarMessage,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 513
          },
          __self: this
        }))));
      }
    }
  }]);

  return Settings;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

Settings.propTypes = {
  classes: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired
};
var SettingsWrapped = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["withStyles"])(styles)(Settings);
/* harmony default export */ __webpack_exports__["default"] = (SettingsWrapped);

/***/ }),

/***/ "./static/css/main_custom.css":
/*!************************************!*\
  !*** ./static/css/main_custom.css ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ 4:
/*!*********************************!*\
  !*** multi ./pages/settings.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./pages/settings.js */"./pages/settings.js");


/***/ }),

/***/ "@material-ui/core/AppBar":
/*!*******************************************!*\
  !*** external "@material-ui/core/AppBar" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/AppBar");

/***/ }),

/***/ "@material-ui/core/Button":
/*!*******************************************!*\
  !*** external "@material-ui/core/Button" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Button");

/***/ }),

/***/ "@material-ui/core/CircularProgress":
/*!*****************************************************!*\
  !*** external "@material-ui/core/CircularProgress" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/CircularProgress");

/***/ }),

/***/ "@material-ui/core/Divider":
/*!********************************************!*\
  !*** external "@material-ui/core/Divider" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Divider");

/***/ }),

/***/ "@material-ui/core/ExpansionPanel":
/*!***************************************************!*\
  !*** external "@material-ui/core/ExpansionPanel" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/ExpansionPanel");

/***/ }),

/***/ "@material-ui/core/ExpansionPanelActions":
/*!**********************************************************!*\
  !*** external "@material-ui/core/ExpansionPanelActions" ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/ExpansionPanelActions");

/***/ }),

/***/ "@material-ui/core/ExpansionPanelDetails":
/*!**********************************************************!*\
  !*** external "@material-ui/core/ExpansionPanelDetails" ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/ExpansionPanelDetails");

/***/ }),

/***/ "@material-ui/core/ExpansionPanelSummary":
/*!**********************************************************!*\
  !*** external "@material-ui/core/ExpansionPanelSummary" ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/ExpansionPanelSummary");

/***/ }),

/***/ "@material-ui/core/FormControlLabel":
/*!*****************************************************!*\
  !*** external "@material-ui/core/FormControlLabel" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/FormControlLabel");

/***/ }),

/***/ "@material-ui/core/Grid":
/*!*****************************************!*\
  !*** external "@material-ui/core/Grid" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Grid");

/***/ }),

/***/ "@material-ui/core/Icon":
/*!*****************************************!*\
  !*** external "@material-ui/core/Icon" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Icon");

/***/ }),

/***/ "@material-ui/core/IconButton":
/*!***********************************************!*\
  !*** external "@material-ui/core/IconButton" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/IconButton");

/***/ }),

/***/ "@material-ui/core/Paper":
/*!******************************************!*\
  !*** external "@material-ui/core/Paper" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Paper");

/***/ }),

/***/ "@material-ui/core/Snackbar":
/*!*********************************************!*\
  !*** external "@material-ui/core/Snackbar" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Snackbar");

/***/ }),

/***/ "@material-ui/core/SnackbarContent":
/*!****************************************************!*\
  !*** external "@material-ui/core/SnackbarContent" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/SnackbarContent");

/***/ }),

/***/ "@material-ui/core/Switch":
/*!*******************************************!*\
  !*** external "@material-ui/core/Switch" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Switch");

/***/ }),

/***/ "@material-ui/core/TextField":
/*!**********************************************!*\
  !*** external "@material-ui/core/TextField" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/TextField");

/***/ }),

/***/ "@material-ui/core/Toolbar":
/*!********************************************!*\
  !*** external "@material-ui/core/Toolbar" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Toolbar");

/***/ }),

/***/ "@material-ui/core/Tooltip":
/*!********************************************!*\
  !*** external "@material-ui/core/Tooltip" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Tooltip");

/***/ }),

/***/ "@material-ui/core/Typography":
/*!***********************************************!*\
  !*** external "@material-ui/core/Typography" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Typography");

/***/ }),

/***/ "@material-ui/core/colors/amber":
/*!*************************************************!*\
  !*** external "@material-ui/core/colors/amber" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/colors/amber");

/***/ }),

/***/ "@material-ui/core/colors/green":
/*!*************************************************!*\
  !*** external "@material-ui/core/colors/green" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/colors/green");

/***/ }),

/***/ "@material-ui/core/styles":
/*!*******************************************!*\
  !*** external "@material-ui/core/styles" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/styles");

/***/ }),

/***/ "@material-ui/icons/Add":
/*!*****************************************!*\
  !*** external "@material-ui/icons/Add" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Add");

/***/ }),

/***/ "@material-ui/icons/CheckCircle":
/*!*************************************************!*\
  !*** external "@material-ui/icons/CheckCircle" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/CheckCircle");

/***/ }),

/***/ "@material-ui/icons/Close":
/*!*******************************************!*\
  !*** external "@material-ui/icons/Close" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Close");

/***/ }),

/***/ "@material-ui/icons/Error":
/*!*******************************************!*\
  !*** external "@material-ui/icons/Error" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Error");

/***/ }),

/***/ "@material-ui/icons/ExpandMore":
/*!************************************************!*\
  !*** external "@material-ui/icons/ExpandMore" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/ExpandMore");

/***/ }),

/***/ "@material-ui/icons/Home":
/*!******************************************!*\
  !*** external "@material-ui/icons/Home" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Home");

/***/ }),

/***/ "@material-ui/icons/Info":
/*!******************************************!*\
  !*** external "@material-ui/icons/Info" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Info");

/***/ }),

/***/ "@material-ui/icons/Settings":
/*!**********************************************!*\
  !*** external "@material-ui/icons/Settings" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Settings");

/***/ }),

/***/ "@material-ui/icons/Warning":
/*!*********************************************!*\
  !*** external "@material-ui/icons/Warning" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Warning");

/***/ }),

/***/ "classnames":
/*!*****************************!*\
  !*** external "classnames" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("classnames");

/***/ }),

/***/ "moment":
/*!*************************!*\
  !*** external "moment" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("moment");

/***/ }),

/***/ "next/link":
/*!****************************!*\
  !*** external "next/link" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ });
//# sourceMappingURL=settings.js.map