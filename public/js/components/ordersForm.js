webpackJsonp([0],{

/***/ 233:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(100);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(101);

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Layout = function (_Component) {
  _inherits(Layout, _Component);

  function Layout() {
    _classCallCheck(this, Layout);

    var _this = _possibleConstructorReturn(this, (Layout.__proto__ || Object.getPrototypeOf(Layout)).call(this));

    _this.clickedBtn = function () {
      console.log("swag");
    };

    _this.state = {
      name: ""
    };
    return _this;
  }

  _createClass(Layout, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "htmlForm",
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
              value: "",
              id: "example-text-input"
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
              value: "",
              id: "example-text-input"
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
              value: "",
              id: "example-text-input"
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
              value: "",
              id: "example-text-input"
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
              value: "",
              id: "example-text-input"
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
              { className: "custom-select", name: "state" },
              _react2.default.createElement(
                "option",
                { value: "7" },
                "7"
              ),
              _react2.default.createElement(
                "option",
                { value: "7.5" },
                "7.5"
              ),
              _react2.default.createElement(
                "option",
                { value: "8" },
                "8"
              ),
              _react2.default.createElement(
                "option",
                { value: "8.5" },
                "8.5"
              ),
              _react2.default.createElement(
                "option",
                { value: "9" },
                "9"
              ),
              _react2.default.createElement(
                "option",
                { value: "9.5" },
                "9.5"
              ),
              _react2.default.createElement(
                "option",
                { value: "10" },
                "10"
              ),
              _react2.default.createElement(
                "option",
                { value: "10.5" },
                "10.5"
              ),
              _react2.default.createElement(
                "option",
                { value: "11" },
                "11"
              )
            )
          ),
          _react2.default.createElement(
            "div",
            { className: "col-sm-12 col-md-3" },
            _react2.default.createElement(
              "label",
              { className: "col-htmlForm-label" },
              "Country"
            ),
            _react2.default.createElement(
              "select",
              { className: "custom-select", name: "country" },
              _react2.default.createElement(
                "option",
                { value: "{{brand.id}}" },
                "country"
              )
            )
          ),
          _react2.default.createElement(
            "div",
            { className: "col-sm-12 col-md-3" },
            _react2.default.createElement(
              "label",
              { className: "col-htmlForm-label" },
              "Payment Type"
            ),
            _react2.default.createElement(
              "select",
              { className: "custom-select", name: "payment_type" },
              _react2.default.createElement(
                "option",
                { value: "{{brand.id}}" },
                "paypal"
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
          _react2.default.createElement(
            "div",
            { className: "col-md-3" },
            _react2.default.createElement(
              "div",
              { className: "item-box" },
              _react2.default.createElement(
                "div",
                {
                  className: "item-img",
                  style: {
                    background: "url(\"https://th.bing.com/th/id/OIP.iEYWe9MDKy2_Q7ydifeLuwHaHa?w=178&h=179&c=7&o=5&pid=1.7\")"
                  }
                },
                _react2.default.createElement(
                  "div",
                  { className: "item-delete" },
                  _react2.default.createElement("i", { className: "ti-close" })
                )
              ),
              _react2.default.createElement(
                "div",
                { className: "title" },
                "sneaker title"
              ),
              _react2.default.createElement(
                "div",
                { className: "quantity" },
                _react2.default.createElement(
                  "label",
                  {
                    htmlFor: "example-text-input",
                    className: "col-htmlForm-label"
                  },
                  "Quantity"
                ),
                _react2.default.createElement(
                  "h4",
                  null,
                  "4"
                )
              )
            )
          ),
          _react2.default.createElement(
            "div",
            { className: "col-md-3" },
            _react2.default.createElement(
              "div",
              { className: "item-box" },
              _react2.default.createElement(
                "div",
                { className: "add-item-button" },
                _react2.default.createElement(
                  "span",
                  null,
                  "+"
                ),
                "Add New Item"
              )
            )
          ),
          _react2.default.createElement(
            "div",
            { className: "popup" },
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
                      { className: "custom-select", name: "product" },
                      _react2.default.createElement(
                        "option",
                        { value: "0" },
                        "title/quantity"
                      )
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
                      { className: "custom-select", name: "qty" },
                      _react2.default.createElement(
                        "option",
                        { value: "0" },
                        "1"
                      )
                    )
                  ),
                  _react2.default.createElement(
                    "div",
                    { className: "add-btn btn btn-primary mb-3" },
                    "save item"
                  ),
                  _react2.default.createElement(
                    "div",
                    { className: "add-btn btn btn-primary mb-3" },
                    "cancel"
                  )
                )
              )
            )
          )
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

},[233]);