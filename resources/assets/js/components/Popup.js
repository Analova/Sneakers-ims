import React, { Component } from "react";
import ReactDOM from "react-dom";
import update from "react-addons-update";
var UsaStates = require("usa-states").UsaStates;

export default class Popup extends Component {
  constructor() {
    super();
    this.state = {
      form: {
        product: "",
        qty: 1,
      },
    };
  }

  change = (event) => {
    var name = event.target.name;
    var value =
      event.target.type === "checkbox"
        ? event.target.checked
        : event.target.value;
    let currentState = this.state;
    let newState = update(currentState, {
      form: {
        $merge: {
          [name]: value,
        },
      },
    });

    this.setState(newState, () => {
      console.log(this.state);
    });
  };

  clickedCancelBtn = () => {
    this.props.closePopup();
  };

  render() {
    return (
      <div className={`popup ${this.props.showPopup ? "active" : ""}`}>
        <div className="container-box">
          <div className="row">
            <div className="col-md-12">
              <h2>Add Item to Order</h2>
              <div className="htmlForm-group">
                <label htmlFor="">Product</label>
                <select
                  className="custom-select"
                  name="product"
                  value={this.state.form.product}
                  onChange={this.change}
                >
                  <option value="1">Nike</option>
                  <option value="2">Adidas</option>
                  <option value="3">Puma</option>
                </select>
              </div>
              <div className="htmlForm-group">
                <label htmlFor="">Quantity</label>
                <select
                  className="custom-select"
                  name="qty"
                  value={this.state.qty}
                  onChange={this.change}
                >
                  <option value="1">1</option>
                  <option value="2">2</option>
                </select>
              </div>
              <div className="add-btn btn btn-primary mb-3">save item</div>
              <div
                className="add-btn btn btn-primary mb-3"
                onClick={this.clickedCancelBtn}
              >
                cancel
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
