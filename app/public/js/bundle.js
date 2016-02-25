(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _Main = __webpack_require__(1);

	var _Main2 = _interopRequireDefault(_Main);

	var _AddAQuote = __webpack_require__(3);

	var _AddAQuote2 = _interopRequireDefault(_AddAQuote);

	var _RetrieveQuote = __webpack_require__(12);

	var _RetrieveQuote2 = _interopRequireDefault(_RetrieveQuote);

	var _DeleteQuote = __webpack_require__(14);

	var _DeleteQuote2 = _interopRequireDefault(_DeleteQuote);

	var _ListQuotes = __webpack_require__(15);

	var _ListQuotes2 = _interopRequireDefault(_ListQuotes);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var partials = { Main: _Main2.default, AddAQuote: _AddAQuote2.default, RetrieveQuote: _RetrieveQuote2.default, DeleteQuote: _DeleteQuote2.default, ListQuotes: _ListQuotes2.default };

	// export as client-side namespace
	/*eslint-env browser*/
	if (typeof window !== "undefined" && window.iaf && window.iaf.composition) {

		window.iaf.composition.partials = partials;
	}
	// export as module
	exports.default = partials;

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _iaf = __webpack_require__(2);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var HelloWorld = function (_React$Component) {
		_inherits(HelloWorld, _React$Component);

		function HelloWorld(props) {
			_classCallCheck(this, HelloWorld);

			var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(HelloWorld).call(this, props));

			_this.state = {};

			return _this;
		}

		_createClass(HelloWorld, [{
			key: "handleClick",
			value: function handleClick() {

				this.setState({ hit: true });
			}
		}, {
			key: "render",
			value: function render() {
				var _this2 = this;

				return _iaf.React.createElement(
					"div",
					{ onClick: function onClick(e) {
							return _this2.handleClick(e);
						} },
					"Hello world",
					_iaf.React.createElement(
						"div",
						null,
						this.state.hit && "OUCH!"
					)
				);
			}
		}]);

		return HelloWorld;
	}(_iaf.React.Component);

	exports.default = HelloWorld;

/***/ },
/* 2 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {"use strict";

	/*eslint-env node, browser*/
	module.exports = (typeof window === "undefined" ? global : window).iaf.composition.iaf;
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _iaf = __webpack_require__(2);

	var _AddQuoteContainer = __webpack_require__(4);

	var _AddQuoteContainer2 = _interopRequireDefault(_AddQuoteContainer);

	var _quoteActionCreators = __webpack_require__(7);

	var actionCreators = _interopRequireWildcard(_quoteActionCreators);

	var _quoteReducers = __webpack_require__(11);

	var _quoteReducers2 = _interopRequireDefault(_quoteReducers);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Provider = _iaf.ReactRedux.Provider;
	var applyMiddleware = _iaf.Redux.applyMiddleware;
	var thunkMiddleware = _iaf.ReduxThunk.thunkMiddleware;

	var AddAQuote = function (_React$Component) {
		_inherits(AddAQuote, _React$Component);

		function AddAQuote() {
			_classCallCheck(this, AddAQuote);

			return _possibleConstructorReturn(this, Object.getPrototypeOf(AddAQuote).apply(this, arguments));
		}

		_createClass(AddAQuote, [{
			key: "componentWillMount",
			value: function componentWillMount() {

				var initialState = { products: { available: this.props.catalogue.slice() } };
				this.partialStore = _iaf.Redux.createStore(_quoteReducers2.default, initialState, applyMiddleware(thunkMiddleware));
				if (this.props.product) {

					this.partialStore.dispatch(actionCreators.selectProduct(this.props.product));
				}
				if (this.props.term) {

					this.partialStore.dispatch(actionCreators.selectTerm(this.props.term));
				}
			}
		}, {
			key: "render",
			value: function render() {

				return _iaf.React.createElement(
					Provider,
					{ store: this.partialStore },
					_iaf.React.createElement(_AddQuoteContainer2.default, null)
				);
			}
		}]);

		return AddAQuote;
	}(_iaf.React.Component);

	exports.default = AddAQuote;

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _iaf = __webpack_require__(2);

	var _AddQuote = __webpack_require__(5);

	var _AddQuote2 = _interopRequireDefault(_AddQuote);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// a mapper for converting the state tree to just the part our widget requires
	var mapStateToProps = function mapStateToProps(state) {
	  return state.terms || {};
	};

	// a mapper taking the dispatch method and building methods for our view compoments to call
	//import * as actionCreators from "../action-creators";
	var mapDispatchToProps = function mapDispatchToProps(dispatch) {
	  return {

	    //	doIt: () => dispatch( actionCreators.asyncAction() )

	  };
	};

	// importing the connect utility from react-redux - this creates the container for us


	// importing the widget which this container handles


	// build the container for our widget
	var AddQuoteContainer = _iaf.ReactRedux.connect(mapStateToProps, mapDispatchToProps)(_AddQuote2.default);

	// export the container
	exports.default = AddQuoteContainer;

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _iaf = __webpack_require__(2);

	var _ProductSelectorContainer = __webpack_require__(6);

	var _ProductSelectorContainer2 = _interopRequireDefault(_ProductSelectorContainer);

	var _TermSelectorContainer = __webpack_require__(9);

	var _TermSelectorContainer2 = _interopRequireDefault(_TermSelectorContainer);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var AddQuote = function (_React$Component) {
		_inherits(AddQuote, _React$Component);

		function AddQuote(props) {
			_classCallCheck(this, AddQuote);

			var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(AddQuote).call(this, props));

			_this.state = {};

			return _this;
		}

		_createClass(AddQuote, [{
			key: "renderTermSelector",
			value: function renderTermSelector() {
				var available = this.props.available;

				if (available && available.length) {

					return _iaf.React.createElement(
						"div",
						{ className: "form-group" },
						_iaf.React.createElement(
							"label",
							null,
							"Select a term"
						),
						_iaf.React.createElement(_TermSelectorContainer2.default, null)
					);
				}
			}
		}, {
			key: "renderAdvice",
			value: function renderAdvice(isReady) {

				if (isReady) {
					return null;
				}
				var advice = this.props.available ? "term" : "product";
				return _iaf.React.createElement(
					"p",
					{ className: "bg-info " },
					_iaf.React.createElement("span", { className: "glyphicon glyphicon-info-sign", "aria-hidden": "true" }),
					" Select a ",
					advice,
					" to complete your request"
				);
			}
		}, {
			key: "renderSubmitButton",
			value: function renderSubmitButton(isReady, isDisabled) {

				var attributes = {};
				if (isDisabled) {
					attributes.disabled = "disabled";
				}
				return _iaf.React.createElement("input", _extends({ type: "submit", value: "Submit", className: "btn btn-" + (isReady ? "primary" : "default") }, attributes));
			}
		}, {
			key: "renderSubmit",
			value: function renderSubmit() {
				var selected = this.props.selected;

				var isReady = !!selected;
				var isDisabled = this.state.isClient && !isReady;
				return _iaf.React.createElement(
					"div",
					null,
					this.renderAdvice(isReady),
					!isDisabled && this.renderSubmitButton(isReady, isDisabled)
				);
			}
		}, {
			key: "componentDidMount",
			value: function componentDidMount() {

				if (typeof window !== "undefined") {

					this.setState({ isClient: true });
					this.forceUpdate();
				}
			}
		}, {
			key: "render",
			value: function render() {

				return _iaf.React.createElement(
					"form",
					{ method: "POST" },
					_iaf.React.createElement(
						"div",
						{ className: "form-group" },
						_iaf.React.createElement(
							"label",
							null,
							"Select a product"
						),
						_iaf.React.createElement(_ProductSelectorContainer2.default, null)
					),
					this.renderTermSelector(),
					this.renderSubmit()
				);
			}
		}]);

		return AddQuote;
	}(_iaf.React.Component);

	exports.default = AddQuote;

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _quoteActionCreators = __webpack_require__(7);

	var actionCreators = _interopRequireWildcard(_quoteActionCreators);

	var _iaf = __webpack_require__(2);

	var _ProductSelector = __webpack_require__(8);

	var _ProductSelector2 = _interopRequireDefault(_ProductSelector);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	// a mapper for converting the state tree to just the part our widget requires
	var mapStateToProps = function mapStateToProps(state) {
		return state.products || {};
	};

	// a mapper taking the dispatch method and building methods for our view compoments to call

	var mapDispatchToProps = function mapDispatchToProps(dispatch) {
		return {

			selectProduct: function selectProduct(productId) {
				return dispatch(actionCreators.selectProduct(productId));
			}

		};
	};

	// importing the connect utility from react-redux - this creates the container for us


	// importing the widget which this container handles


	// build the container for our widget
	var ProductSelectorContainer = _iaf.ReactRedux.connect(mapStateToProps, mapDispatchToProps)(_ProductSelector2.default);

	// export the container
	exports.default = ProductSelectorContainer;

/***/ },
/* 7 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.selectProduct = selectProduct;
	exports.selectTerm = selectTerm;
	function selectProduct(productId) {

		return { "type": "select-product", "id": productId };
	}
	function selectTerm(termId) {

		return { "type": "select-term", "id": termId };
	}

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _iaf = __webpack_require__(2);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var ProductSelector = function (_React$Component) {
		_inherits(ProductSelector, _React$Component);

		function ProductSelector(props) {
			_classCallCheck(this, ProductSelector);

			var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(ProductSelector).call(this, props));

			_this.state = {};

			return _this;
		}

		_createClass(ProductSelector, [{
			key: "handleChange",
			value: function handleChange() {

				var product = this.refs.product.value;
				this.props.selectProduct(product);
			}
		}, {
			key: "renderProduct",
			value: function renderProduct(product) {

				return _iaf.React.createElement(
					"option",
					{ key: product.value, value: product.value },
					product.text
				);
			}
		}, {
			key: "render",
			value: function render() {
				var _this2 = this;

				var selected = this.props.selected ? this.props.selected.value : "";
				return _iaf.React.createElement(
					"select",
					{ ref: "product", name: "product", className: "form-control", value: selected, onChange: function onChange(e) {
							return _this2.handleChange(e);
						} },
					_iaf.React.createElement(
						"option",
						{ value: "", disabled: true },
						"-- select a product --"
					),
					this.props.available.map(function (p) {
						return _this2.renderProduct(p);
					})
				);
			}
		}]);

		return ProductSelector;
	}(_iaf.React.Component);

	exports.default = ProductSelector;

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _quoteActionCreators = __webpack_require__(7);

	var actionCreators = _interopRequireWildcard(_quoteActionCreators);

	var _iaf = __webpack_require__(2);

	var _TermSelector = __webpack_require__(10);

	var _TermSelector2 = _interopRequireDefault(_TermSelector);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	// a mapper for converting the state tree to just the part our widget requires
	var mapStateToProps = function mapStateToProps(state) {
		return state.terms || {};
	};

	// a mapper taking the dispatch method and building methods for our view compoments to call

	var mapDispatchToProps = function mapDispatchToProps(dispatch) {
		return {

			selectTerm: function selectTerm(id) {
				return dispatch(actionCreators.selectTerm(id));
			}

		};
	};

	// importing the connect utility from react-redux - this creates the container for us


	// importing the widget which this container handles


	// build the container for our widget
	var TermSelectorContainer = _iaf.ReactRedux.connect(mapStateToProps, mapDispatchToProps)(_TermSelector2.default);

	// export the container
	exports.default = TermSelectorContainer;

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _iaf = __webpack_require__(2);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var TermSelector = function (_React$Component) {
		_inherits(TermSelector, _React$Component);

		function TermSelector(props) {
			_classCallCheck(this, TermSelector);

			var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(TermSelector).call(this, props));

			_this.state = {};

			return _this;
		}

		_createClass(TermSelector, [{
			key: "handleChange",
			value: function handleChange() {

				this.props.selectTerm(this.refs.term.value);
			}
		}, {
			key: "renderTermOption",
			value: function renderTermOption(term) {

				return _iaf.React.createElement(
					"option",
					{ key: term.value, value: term.value },
					term.text
				);
			}
		}, {
			key: "render",
			value: function render() {
				var _this2 = this;

				var selected = this.props.selected ? this.props.selected.value : "";
				return _iaf.React.createElement(
					"select",
					{ ref: "term", name: "term", className: "form-control", value: selected, onChange: function onChange(e) {
							return _this2.handleChange(e);
						} },
					_iaf.React.createElement(
						"option",
						{ value: "", disabled: true },
						"-- select a term --"
					),
					this.props.available.map(function (term) {
						return _this2.renderTermOption(term);
					})
				);
			}
		}]);

		return TermSelector;
	}(_iaf.React.Component);

	exports.default = TermSelector;

/***/ },
/* 11 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	exports.default = function (state, action) {

		switch (action.type) {

			case "select-product":

				var selectedProduct = state.products.available.find(function (x) {
					return x.value === action.id;
				});
				return _extends({}, state, {
					products: _extends({}, state.products, {
						selected: selectedProduct

					}),
					terms: {

						available: selectedProduct ? selectedProduct.terms.slice() : undefined

					}

				});

			case "select-term":
				var selectedTerm = state.terms.available.find(function (x) {
					return x.value === action.id;
				});
				return _extends({}, state, {
					terms: _extends({}, state.terms, {
						selected: selectedTerm

					})

				});

			default:
				return state;

		}
	};

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _iaf = __webpack_require__(2);

	var _ShowQuote = __webpack_require__(13);

	var _ShowQuote2 = _interopRequireDefault(_ShowQuote);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var AddAQuote = function (_React$Component) {
		_inherits(AddAQuote, _React$Component);

		function AddAQuote() {
			_classCallCheck(this, AddAQuote);

			return _possibleConstructorReturn(this, Object.getPrototypeOf(AddAQuote).apply(this, arguments));
		}

		_createClass(AddAQuote, [{
			key: "render",
			value: function render() {

				var quote = this.props.quote;
				if (quote) {

					quote.when = new Date(quote.when);
					return _iaf.React.createElement(
						"div",
						null,
						_iaf.React.createElement(_ShowQuote2.default, { quote: quote }),
						_iaf.React.createElement(
							"div",
							{ className: "well" },
							_iaf.React.createElement(
								"a",
								{ href: "./" + quote.id + "/delete", className: "btn btn-danger" },
								"Delete"
							)
						)
					);
				} else {

					return _iaf.React.createElement(
						"div",
						null,
						_iaf.React.createElement(
							"p",
							null,
							"Your quote could not be retrieved. Perhaps it was too good to be true?"
						)
					);
				}
			}
		}]);

		return AddAQuote;
	}(_iaf.React.Component);

	exports.default = AddAQuote;

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _iaf = __webpack_require__(2);

	exports.default = function (_ref) {
		var quote = _ref.quote;
		return _iaf.React.createElement(
			"table",
			{ className: "table" },
			_iaf.React.createElement(
				"tbody",
				null,
				_iaf.React.createElement(
					"tr",
					null,
					_iaf.React.createElement(
						"th",
						{ scope: "row" },
						"Product"
					),
					_iaf.React.createElement(
						"td",
						null,
						quote.product.text
					)
				),
				_iaf.React.createElement(
					"tr",
					null,
					_iaf.React.createElement(
						"th",
						{ scope: "row" },
						"Term"
					),
					_iaf.React.createElement(
						"td",
						null,
						quote.term.text
					)
				),
				_iaf.React.createElement(
					"tr",
					null,
					_iaf.React.createElement(
						"th",
						{ scope: "row" },
						"Rate (p/a)"
					),
					_iaf.React.createElement(
						"td",
						null,
						quote.price
					)
				),
				_iaf.React.createElement(
					"tr",
					null,
					_iaf.React.createElement(
						"th",
						{ scope: "row" },
						"Created"
					),
					_iaf.React.createElement(
						"td",
						null,
						quote.when.toDateString()
					)
				)
			)
		);
	};

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _iaf = __webpack_require__(2);

	var _ShowQuote = __webpack_require__(13);

	var _ShowQuote2 = _interopRequireDefault(_ShowQuote);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var DeleteQuote = function (_React$Component) {
		_inherits(DeleteQuote, _React$Component);

		function DeleteQuote() {
			_classCallCheck(this, DeleteQuote);

			return _possibleConstructorReturn(this, Object.getPrototypeOf(DeleteQuote).apply(this, arguments));
		}

		_createClass(DeleteQuote, [{
			key: "render",
			value: function render() {

				var quote = this.props.quote;
				if (quote) {

					quote.when = new Date(quote.when);
					return _iaf.React.createElement(
						"div",
						null,
						_iaf.React.createElement(_ShowQuote2.default, { quote: this.props.quote }),
						_iaf.React.createElement(
							"form",
							{ className: "well", method: "POST" },
							_iaf.React.createElement(
								"h4",
								null,
								"You are about to delete this quote. Please click to confirm."
							),
							_iaf.React.createElement("input", { type: "submit", className: "btn btn-danger", value: "CONFIRM" })
						),
						_iaf.React.createElement(
							"a",
							{ href: "/quotes" },
							"Your quotes"
						)
					);
				} else {

					return _iaf.React.createElement(
						"div",
						null,
						_iaf.React.createElement(
							"p",
							null,
							"Your quote has been deleted."
						),
						_iaf.React.createElement(
							"a",
							{ href: "/quotes" },
							"Your quotes"
						)
					);
				}
			}
		}]);

		return DeleteQuote;
	}(_iaf.React.Component);

	exports.default = DeleteQuote;

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _iaf = __webpack_require__(2);

	var _QuoteList = __webpack_require__(16);

	var _QuoteList2 = _interopRequireDefault(_QuoteList);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var ListQuotes = function (_React$Component) {
		_inherits(ListQuotes, _React$Component);

		function ListQuotes() {
			_classCallCheck(this, ListQuotes);

			return _possibleConstructorReturn(this, Object.getPrototypeOf(ListQuotes).apply(this, arguments));
		}

		_createClass(ListQuotes, [{
			key: "render",
			value: function render() {
				var quotes = this.props.quotes;

				if (quotes && quotes.created && quotes.created.length) {

					var created = quotes.created.map(function (q) {

						return Object.assign({}, q, { href: "/quotes/retrieve/" + q.id });
					});
					return _iaf.React.createElement(_QuoteList2.default, { created: created });
				} else {

					return _iaf.React.createElement(
						"p",
						null,
						"You don't have any quotes yet."
					);
				}
			}
		}]);

		return ListQuotes;
	}(_iaf.React.Component);

	exports.default = ListQuotes;

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _iaf = __webpack_require__(2);

	exports.default = function (_ref) {
		var created = _ref.created;
		return _iaf.React.createElement(
			"ul",
			{ className: "list-group" },
			created.map(function (q) {
				return _iaf.React.createElement(
					"li",
					{ className: "list-group-item", key: q.href },
					_iaf.React.createElement(
						"a",
						{ href: q.href },
						_iaf.React.createElement(
							"div",
							null,
							q.when,
							": ",
							q.product.text,
							" ",
							q.term.text,
							" (£",
							q.price,
							")"
						)
					)
				);
			})
		);
	};

/***/ }
/******/ ])
});
;