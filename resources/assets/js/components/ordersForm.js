import React, { Component } from "react";
import ReactDOM from "react-dom";
import update from "react-addons-update";
var UsaStates = require("usa-states").UsaStates;
var countries = require("country-list");

class Layout extends Component {
  constructor() {
    super();
    this.state = {
      form: {
        f_name: "",
        l_name: "",
        address: "",
        address_2: "",
        city: "",
        state: "NY",
        country: "US",
        zipcode: "",
        payment_type: "paypal",
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

  //********************** */
  showStates = () => {
    var usStates = new UsaStates();

    return usStates.states.map((item) => (
      <option key={item.abbreviation} value={item.abbreviation}>
        {item.name}
      </option>
    ));
    // console.log(usStates.states);
  };

  showCountries = () => {
    var allCountries = countries.getData();

    return allCountries.map((item) => (
      <option key={item.code} value={item.code}>
        {item.name}
      </option>
    ));
    //console.log(allCountries);
  };

  render() {
    return (
      <form action="/admin/products" method="post">
        <div className="row form-group">
          <div className="col-sm-12 col-md-6">
            <label htmlFor="example-text-input" className="col-htmlForm-label">
              First Name
            </label>
            <input
              className="form-control"
              type="text"
              name="f_name"
              id="example-text-input"
              value={this.state.form.f_name}
              onChange={this.change}
            />
          </div>
          <div className="col-sm-12 col-md-6">
            <label htmlFor="example-text-input" className="col-htmlForm-label">
              Last Name
            </label>
            <input
              className="form-control"
              type="text"
              name="l_name"
              id="example-text-input"
              value={this.state.form.l_name}
              onChange={this.change}
            />
          </div>
        </div>
        <div className="form-group row">
          <div className="col-sm-12 col-md-6">
            <label htmlFor="example-text-input" className="col-form-label">
              Address
            </label>
            <input
              className="form-control"
              type="text"
              name="address"
              id="example-text-input"
              value={this.state.form.address}
              onChange={this.change}
            />
          </div>
          <div className="col-sm-12 col-md-6">
            <label htmlFor="example-text-input" className="col-form-label">
              Address 2
            </label>
            <input
              className="form-control"
              type="text"
              name="address_2"
              id="example-text-input"
              value={this.state.form.address_2}
              onChange={this.change}
            />
          </div>
        </div>

        <div className="form-group row">
          <div className="col-sm-12 col-md-3">
            <label htmlFor="example-text-input" className="col-form-label">
              City
            </label>
            <input
              className="form-control"
              type="text"
              name="city"
              id="example-text-input"
              value={this.state.form.city}
              onChange={this.change}
            />
          </div>
          <div className="col-sm-12 col-md-3">
            <label htmlFor="example-text-input" className="col-htmlForm-label">
              State
            </label>
            <select
              className="custom-select"
              name="state"
              value={this.state.form.state}
              onChange={this.change}
            >
              {this.showStates()}
            </select>
          </div>
          <div className="col-sm-12 col-md-6">
            <label className="col-htmlForm-label">Country</label>
            <select
              className="custom-select"
              name="country"
              value={this.state.form.country}
              onChange={this.change}
            >
              {this.showCountries()}
            </select>
          </div>
        </div>

        <div className="form-group row">
          <div className="col-sm-12 col-md-6">
            <label className="col-form-label">Zipcode</label>
            <input
              className="form-control"
              type="text"
              value={this.state.form.zipcode}
              onChange={this.change}
              name="zipcode"
              id="example-text-input"
            />
          </div>

          <div className="col-sm-12 col-md-6">
            <label className="col-htmlForm-label">Payment Type</label>
            <select
              className="custom-select"
              name="payment_type"
              value={this.state.form.payment_type}
              onChange={this.change}
            >
              <option>Paypal</option>
              <option>Credit card</option>
            </select>
          </div>
        </div>
        <div className="row order-items">
          <div className="col-md-12">
            <h2>Order Items</h2>
          </div>
          <div className="col-md-3">
            <div className="item-box">
              <div
                className="item-img"
                style={{
                  background: `url("https://th.bing.com/th/id/OIP.iEYWe9MDKy2_Q7ydifeLuwHaHa?w=178&h=179&c=7&o=5&pid=1.7")`,
                }}
              >
                <div className="item-delete">
                  <i className="ti-close"></i>
                </div>
              </div>
              <div className="title">sneaker title</div>
              <div className="quantity">
                <label
                  htmlFor="example-text-input"
                  className="col-htmlForm-label"
                >
                  Quantity
                </label>
                <h4>4</h4>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="item-box">
              <div className="add-item-button">
                <span>+</span>
                Add New Item
              </div>
            </div>
          </div>
          <div className="popup">
            <div className="container-box">
              <div className="row">
                <div className="col-md-12">
                  <h2>Add Item to Order</h2>
                  <div className="htmlForm-group">
                    <label htmlFor="">Product</label>
                    <select className="custom-select" name="product">
                      <option value="0">title/quantity</option>
                    </select>
                  </div>
                  <div className="htmlForm-group">
                    <label htmlFor="">Quantity</label>
                    <select className="custom-select" name="qty">
                      <option value="0">1</option>
                    </select>
                  </div>
                  <div className="add-btn btn btn-primary mb-3">save item</div>
                  <div className="add-btn btn btn-primary mb-3">cancel</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="htmlForm-group">
          <button type="submit" className="btn btn-primary mb-3">
            Submit
          </button>
        </div>
      </form>
    );
  }
}

const ordersForm = document.getElementById("ordersForm");

ReactDOM.render(<Layout />, ordersForm);
