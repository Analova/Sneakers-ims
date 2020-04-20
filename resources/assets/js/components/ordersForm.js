import React, { Component } from "react";
import ReactDOM from "react-dom";
import update from "react-addons-update";
import Popup from "./Popup";
import axios from "axios";
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
      allProducts: "",
      showPopup: false,
    };
  }

  componentWillMount() {
    this.getAllProducts();
  }
  async getAllProducts() {
    try {
      let allProducts = await axios.get("/api/admin/products");
      allProducts = allProducts.data;
      console.log(allProducts);
      this.setState(
        {
          allProducts,
        },
        () => console.log(this.state)
      );
    } catch (error) {
      console.log(error);
    }
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

  addNewBtn = () => {
    this.setState({
      showPopup: !this.state.showPopup,
    });
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

          <option className="col-sm-12 col-md-6">
            <label className="col-htmlForm-label">Payment Type</label>
            <select
              className="custom-select"
              name="payment_type"
              value={this.state.form.payment_type}
              onChange={this.change}
            >
              <option>Paypal</option>
              <option value="{{brand.id}}">Credit card</option>
            </select>
          </option>
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
              <div className="add-item-button" onClick={this.addNewBtn}>
                <span>+</span>
                Add New Item
              </div>
            </div>
          </div>
          <Popup
            showPopup={this.state.showPopup}
            closePopup={this.addNewBtn}
            allProducts={this.state.allProducts}
          />
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
