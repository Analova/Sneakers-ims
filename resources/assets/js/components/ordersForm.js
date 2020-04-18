import React, { Component } from "react";
import ReactDOM from "react-dom";

class Layout extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
    };
  }
  clickedBtn = () => {
    console.log("swag");
  };
  render() {
    return (
      <htmlForm action="/admin/products" method="post">
        <div className="row form-group">
          <div className="col-sm-12 col-md-6">
            <label htmlFor="example-text-input" className="col-htmlForm-label">
              First Name
            </label>
            <input
              className="form-control"
              type="text"
              name="f_name"
              value=""
              id="example-text-input"
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
              value=""
              id="example-text-input"
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
              value=""
              id="example-text-input"
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
              value=""
              id="example-text-input"
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
              value=""
              id="example-text-input"
            />
          </div>
          <div className="col-sm-12 col-md-3">
            <label htmlFor="example-text-input" className="col-htmlForm-label">
              State
            </label>
            <select className="custom-select" name="state">
              <option value="7">7</option>
              <option value="7.5">7.5</option>
              <option value="8">8</option>
              <option value="8.5">8.5</option>
              <option value="9">9</option>
              <option value="9.5">9.5</option>
              <option value="10">10</option>
              <option value="10.5">10.5</option>
              <option value="11">11</option>
            </select>
          </div>
          <div className="col-sm-12 col-md-3">
            <label className="col-htmlForm-label">Country</label>
            <select className="custom-select" name="country">
              <option value="{{brand.id}}">country</option>
            </select>
          </div>

          <div className="col-sm-12 col-md-3">
            <label className="col-htmlForm-label">Payment Type</label>
            <select className="custom-select" name="payment_type">
              <option value="{{brand.id}}">paypal</option>
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
      </htmlForm>
    );
  }
}

const ordersForm = document.getElementById("ordersForm");

ReactDOM.render(<Layout />, ordersForm);
