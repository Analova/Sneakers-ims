webpackJsonp([0],{

/***/ 240:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(77);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(78);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactAddonsUpdate = __webpack_require__(152);

var _reactAddonsUpdate2 = _interopRequireDefault(_reactAddonsUpdate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var UsaStates = __webpack_require__(154).UsaStates;

var Popup = function (_Component) {
  _inherits(Popup, _Component);

  function Popup() {
    _classCallCheck(this, Popup);

    var _this = _possibleConstructorReturn(this, (Popup.__proto__ || Object.getPrototypeOf(Popup)).call(this));

    _this.change = function (event) {
      var name = event.target.name;
      var value = event.target.type === "checkbox" ? event.target.checked : event.target.value;
      var currentState = _this.state;
      var newState = (0, _reactAddonsUpdate2.default)(currentState, {
        form: {
          $merge: _defineProperty({}, name, value)
        }
      });

      _this.setState(newState, function () {
        console.log(_this.state);
      });
    };

    _this.showProducts = function () {
      if (_this.props.allProducts != "") {
        return _this.props.allProducts.map(function (item) {
          return _react2.default.createElement(
            "option",
            { key: item.id, value: item.id },
            item.title
          );
        });
      }
    };

    _this.clickedCancelBtn = function () {
      _this.props.closePopup();
    };

    _this.clickedSaveItemBtn = function () {
      var product = _this.props.allProducts.filter(function (product) {
        return product.id == _this.state.form.product;
      });
      var itemData = {
        productInfo: product[0],
        qtyBuying: _this.state.form.qty
      };

      // let itemData={
      //   id:this.state.form.product,
      //   qty:this.state.form.qty
      // }
      _this.props.addItemToList(itemData);
    };

    _this.state = {
      form: {
        product: "",
        qty: 1
      }
    };
    return _this;
  }

  _createClass(Popup, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "div",
        { className: "popup " + (this.props.showPopup ? "active" : "") },
        _react2.default.createElement(
          "div",
          { className: "container-box" },
          _react2.default.createElement(
            "div",
            { className: "row" },
            _react2.default.createElement(
              "div",
              { className: "col-md-12" },
              _react2.default.createElement(
                "h2",
                null,
                "Add Item to Order"
              ),
              _react2.default.createElement(
                "div",
                { className: "htmlForm-group" },
                _react2.default.createElement(
                  "label",
                  { htmlFor: "" },
                  "Product"
                ),
                _react2.default.createElement(
                  "select",
                  {
                    className: "custom-select",
                    name: "product",
                    value: this.state.form.product,
                    onChange: this.change
                  },
                  _react2.default.createElement(
                    "option",
                    { value: "none" },
                    "Select a sneaker"
                  ),
                  this.showProducts()
                )
              ),
              _react2.default.createElement(
                "div",
                { className: "htmlForm-group" },
                _react2.default.createElement(
                  "label",
                  { htmlFor: "" },
                  "Quantity"
                ),
                _react2.default.createElement(
                  "select",
                  {
                    className: "custom-select",
                    name: "qty",
                    value: this.state.qty,
                    onChange: this.change
                  },
                  _react2.default.createElement(
                    "option",
                    { value: "1" },
                    "1"
                  ),
                  _react2.default.createElement(
                    "option",
                    { value: "2" },
                    "2"
                  ),
                  _react2.default.createElement(
                    "option",
                    { value: "3" },
                    "3"
                  ),
                  _react2.default.createElement(
                    "option",
                    { value: "4" },
                    "4"
                  ),
                  _react2.default.createElement(
                    "option",
                    { value: "5" },
                    "5"
                  ),
                  _react2.default.createElement(
                    "option",
                    { value: "6" },
                    "6"
                  ),
                  _react2.default.createElement(
                    "option",
                    { value: "7" },
                    "7"
                  ),
                  _react2.default.createElement(
                    "option",
                    { value: "8" },
                    "8"
                  ),
                  _react2.default.createElement(
                    "option",
                    { value: "9" },
                    "9"
                  ),
                  _react2.default.createElement(
                    "option",
                    { value: "10" },
                    "10"
                  )
                )
              ),
              _react2.default.createElement(
                "div",
                {
                  className: "add-btn btn btn-primary mb-3",
                  onClick: this.clickedSaveItemBtn
                },
                "save item"
              ),
              _react2.default.createElement(
                "div",
                {
                  className: "add-btn btn btn-danger mb-3",
                  onClick: this.clickedCancelBtn
                },
                "cancel"
              )
            )
          )
        )
      );
    }
  }]);

  return Popup;
}(_react.Component);

exports.default = Popup;

/***/ }),

/***/ 262:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(77);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(78);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactAddonsUpdate = __webpack_require__(152);

var _reactAddonsUpdate2 = _interopRequireDefault(_reactAddonsUpdate);

var _Popup = __webpack_require__(240);

var _Popup2 = _interopRequireDefault(_Popup);

var _axios = __webpack_require__(239);

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var UsaStates = __webpack_require__(154).UsaStates;
var countries = __webpack_require__(242);

var Layout = function (_Component) {
  _inherits(Layout, _Component);

  function Layout() {
    _classCallCheck(this, Layout);

    var _this = _possibleConstructorReturn(this, (Layout.__proto__ || Object.getPrototypeOf(Layout)).call(this));

    _this.addItemToList = function (item) {
      var allItems = _this.state.allItems;
      var oldState = _this.state;
      var newState = (0, _reactAddonsUpdate2.default)(oldState, {
        allItems: { $push: [item] }
      });
      _this.setState(newState, function () {
        console.log("New State");
        console.log(_this.state);
      });
    };

    _this.change = function (event) {
      var name = event.target.name;
      var value = event.target.type === "checkbox" ? event.target.checked : event.target.value;
      var currentState = _this.state;
      var newState = (0, _reactAddonsUpdate2.default)(currentState, {
        form: {
          $merge: _defineProperty({}, name, value)
        }
      });

      _this.setState(newState, function () {
        console.log(_this.state);
      });
    };

    _this.showStates = function () {
      var usStates = new UsaStates();

      return usStates.states.map(function (item) {
        return _react2.default.createElement(
          "option",
          { key: item.abbreviation, value: item.abbreviation },
          item.name
        );
      });
      // console.log(usStates.states);
    };

    _this.showCountries = function () {
      var allCountries = countries.getData();

      return allCountries.map(function (item) {
        return _react2.default.createElement(
          "option",
          { key: item.code, value: item.code },
          item.name
        );
      });
      //console.log(allCountries);
    };

    _this.addNewBtn = function () {
      _this.setState({
        showPopup: !_this.state.showPopup
      });
    };

    _this.showAllItems = function () {
      // console.log("all items test");
      return _this.state.allItems.map(function (item, index) {
        return _react2.default.createElement(
          "div",
          { key: item.productInfo.id, className: "col-md-3" },
          _react2.default.createElement(
            "div",
            { className: "item-box" },
            _react2.default.createElement(
              "div",
              {
                className: "item-img",
                style: {
                  background: "url(\"" + item.productInfo.img_url + "\")"
                }
              },
              _react2.default.createElement(
                "div",
                {
                  className: "item-delete",
                  onClick: _this.removeItem.bind(null, index)
                },
                _react2.default.createElement("i", { className: "ti-close" })
              )
            ),
            _react2.default.createElement(
              "div",
              { className: "title" },
              item.productInfo.title
            ),
            _react2.default.createElement(
              "div",
              { className: "quantity" },
              _react2.default.createElement(
                "label",
                { htmlFor: "example-text-input", className: "col-htmlForm-label" },
                "Quantity"
              ),
              _react2.default.createElement(
                "h4",
                null,
                " ",
                item.qtyBuying
              )
            )
          )
        );
      });
    };

    _this.removeItem = function (index) {
      var oldState = _this.state;
      var newState = (0, _reactAddonsUpdate2.default)(oldState, {
        allItems: {
          $splice: [[index, 1]]
        }
      });
      _this.setState(newState);
    };

    _this.state = {
      form: {
        f_name: "",
        l_name: "",
        address: "",
        address_2: "",
        city: "",
        state: "NY",
        country: "US",
        zipcode: "",
        payment_type: "paypal"
      },
      allProducts: "",
      allItems: [],
      showPopup: false
    };
    return _this;
  }

  _createClass(Layout, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      this.getAllProducts();
    }
  }, {
    key: "getAllProducts",
    value: function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var _this2 = this;

        var allProducts;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return _axios2.default.get("/api/admin/products");

              case 3:
                allProducts = _context.sent;

                allProducts = allProducts.data;
                //console.log(allProducts);
                this.setState({
                  allProducts: allProducts
                }, function () {
                  return console.log(_this2.state);
                });
                _context.next = 11;
                break;

              case 8:
                _context.prev = 8;
                _context.t0 = _context["catch"](0);

                console.log(_context.t0);

              case 11:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[0, 8]]);
      }));

      function getAllProducts() {
        return _ref.apply(this, arguments);
      }

      return getAllProducts;
    }()

    //********************** */

  }, {
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "form",
        { action: "/admin/products", method: "post" },
        _react2.default.createElement(
          "div",
          { className: "row form-group" },
          _react2.default.createElement(
            "div",
            { className: "col-sm-12 col-md-6" },
            _react2.default.createElement(
              "label",
              { htmlFor: "example-text-input", className: "col-htmlForm-label" },
              "First Name"
            ),
            _react2.default.createElement("input", {
              className: "form-control",
              type: "text",
              name: "f_name",
              id: "example-text-input",
              value: this.state.form.f_name,
              onChange: this.change
            })
          ),
          _react2.default.createElement(
            "div",
            { className: "col-sm-12 col-md-6" },
            _react2.default.createElement(
              "label",
              { htmlFor: "example-text-input", className: "col-htmlForm-label" },
              "Last Name"
            ),
            _react2.default.createElement("input", {
              className: "form-control",
              type: "text",
              name: "l_name",
              id: "example-text-input",
              value: this.state.form.l_name,
              onChange: this.change
            })
          )
        ),
        _react2.default.createElement(
          "div",
          { className: "form-group row" },
          _react2.default.createElement(
            "div",
            { className: "col-sm-12 col-md-6" },
            _react2.default.createElement(
              "label",
              { htmlFor: "example-text-input", className: "col-form-label" },
              "Address"
            ),
            _react2.default.createElement("input", {
              className: "form-control",
              type: "text",
              name: "address",
              id: "example-text-input",
              value: this.state.form.address,
              onChange: this.change
            })
          ),
          _react2.default.createElement(
            "div",
            { className: "col-sm-12 col-md-6" },
            _react2.default.createElement(
              "label",
              { htmlFor: "example-text-input", className: "col-form-label" },
              "Address 2"
            ),
            _react2.default.createElement("input", {
              className: "form-control",
              type: "text",
              name: "address_2",
              id: "example-text-input",
              value: this.state.form.address_2,
              onChange: this.change
            })
          )
        ),
        _react2.default.createElement(
          "div",
          { className: "form-group row" },
          _react2.default.createElement(
            "div",
            { className: "col-sm-12 col-md-3" },
            _react2.default.createElement(
              "label",
              { htmlFor: "example-text-input", className: "col-form-label" },
              "City"
            ),
            _react2.default.createElement("input", {
              className: "form-control",
              type: "text",
              name: "city",
              id: "example-text-input",
              value: this.state.form.city,
              onChange: this.change
            })
          ),
          _react2.default.createElement(
            "div",
            { className: "col-sm-12 col-md-3" },
            _react2.default.createElement(
              "label",
              { htmlFor: "example-text-input", className: "col-htmlForm-label" },
              "State"
            ),
            _react2.default.createElement(
              "select",
              {
                className: "custom-select",
                name: "state",
                value: this.state.form.state,
                onChange: this.change
              },
              this.showStates()
            )
          ),
          _react2.default.createElement(
            "div",
            { className: "col-sm-12 col-md-6" },
            _react2.default.createElement(
              "label",
              { className: "col-htmlForm-label" },
              "Country"
            ),
            _react2.default.createElement(
              "select",
              {
                className: "custom-select",
                name: "country",
                value: this.state.form.country,
                onChange: this.change
              },
              this.showCountries()
            )
          )
        ),
        _react2.default.createElement(
          "div",
          { className: "form-group row" },
          _react2.default.createElement(
            "div",
            { className: "col-sm-12 col-md-6" },
            _react2.default.createElement(
              "label",
              { className: "col-form-label" },
              "Zipcode"
            ),
            _react2.default.createElement("input", {
              className: "form-control",
              type: "text",
              value: this.state.form.zipcode,
              onChange: this.change,
              name: "zipcode",
              id: "example-text-input"
            })
          ),
          _react2.default.createElement(
            "div",
            { className: "col-sm-12 col-md-6" },
            _react2.default.createElement(
              "label",
              { className: "col-form-label" },
              "Payment Type"
            ),
            _react2.default.createElement(
              "select",
              {
                className: "custom-select",
                name: "payment_type",
                value: this.state.form.payment_type,
                onChange: this.change
              },
              _react2.default.createElement(
                "option",
                { value: "paypal" },
                "Paypal"
              ),
              _react2.default.createElement(
                "option",
                { value: "credit_card" },
                "Credit Card"
              )
            )
          )
        ),
        _react2.default.createElement(
          "div",
          { className: "row order-items" },
          _react2.default.createElement(
            "div",
            { className: "col-md-12" },
            _react2.default.createElement(
              "h2",
              null,
              "Order Items"
            )
          ),
          this.showAllItems(),
          _react2.default.createElement(
            "div",
            { className: "col-md-3" },
            _react2.default.createElement(
              "div",
              { className: "item-box" },
              _react2.default.createElement(
                "div",
                { className: "add-item-button", onClick: this.addNewBtn },
                _react2.default.createElement(
                  "span",
                  null,
                  "+"
                ),
                "Add New Item"
              )
            )
          ),
          _react2.default.createElement(_Popup2.default, {
            showPopup: this.state.showPopup,
            closePopup: this.addNewBtn,
            allProducts: this.state.allProducts,
            addItemToList: this.addItemToList
          })
        ),
        _react2.default.createElement(
          "div",
          { className: "htmlForm-group" },
          _react2.default.createElement(
            "button",
            { type: "submit", className: "btn btn-primary mb-3" },
            "Submit"
          )
        )
      );
    }
  }]);

  return Layout;
}(_react.Component);

var ordersForm = document.getElementById("ordersForm");

_reactDom2.default.render(_react2.default.createElement(Layout, null), ordersForm);

/***/ })

},[262]);