import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Brands from "./Brands";

class LeftArea extends Component {
  render() {
    return (
      <div className="left_sidebar_area">
        <aside className="left_widgets p_filter_widgets sidebar_box_shadow">
          <div className="l_w_title">
            <h3>Browse Categories</h3>
          </div>
          <div className="widgets_inner">
            <ul className="list">
              <li>
                <Link to="#">Fruits and Vegetables</Link>
              </li>
              <li className="sub-menu">
                <Link to="#Electronics" className=" d-flex justify-content-between">
                  Electronics
                  <div className="right ti-plus"></div>
                </Link>
                <ul>
                  <li>
                    <Link to="#Electronics">Home Appliances</Link>
                  </li>
                  <li>
                    <Link to="#Electronics">Smartphones</Link>
                  </li>
                  <li>
                    <Link to="#Electronics">Kitchen Appliances</Link>
                  </li>
                  <li>
                    <Link to="#Electronics">Computer Accessories</Link>
                  </li>
                  <li>
                    <Link to="#Electronics">Meat Alternatives</Link>
                  </li>
                  <li>
                    <Link to="#Electronics">Appliances</Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link to="#">Cooking</Link>
              </li>
              <li>
                <Link to="#">Beverages</Link>
              </li>
              <li>
                <Link to="#">Home and Cleaning</Link>
              </li>
            </ul>
          </div>
        </aside>

        <aside className="left_widgets p_filter_widgets sidebar_box_shadow">
          <div className="l_w_title">
            <h3>Product filters</h3>
          </div>
          <div className="widgets_inner">
            <Brands />
            <ul className="list">
              <p>color</p>
              <li>
                <input type="radio" aria-label="Radio button for following text input" />
                <Link to="#">Black</Link>
              </li>
              <li>
                <input type="radio" aria-label="Radio button for following text input" />
                <Link to="#">Black Leather</Link>
              </li>
              <li>
                <input type="radio" aria-label="Radio button for following text input" />
                <Link to="#">Black with red</Link>
              </li>
              <li>
                <input type="radio" aria-label="Radio button for following text input" />
                <Link to="#">Gold</Link>
              </li>
              <li>
                <input type="radio" aria-label="Radio button for following text input" />
                <Link to="#">Spacegrey</Link>
              </li>
            </ul>
          </div>
        </aside>

        <aside className="left_widgets p_filter_widgets price_rangs_aside sidebar_box_shadow">
          <div className="l_w_title">
            <h3>Price Filter</h3>
          </div>
          <div className="widgets_inner">
            <div className="range_item">
              <input type="text" className="js-range-slider" />
              <div className="d-flex align-items-center">
                <div className="price_text">
                  <p>Price :</p>
                </div>
                <div className="price_value d-flex justify-content-center">
                  <input type="text" className="js-input-from" id="amount" readOnly />
                  <span>to</span>
                  <input type="text" className="js-input-to=" id="amount" readOnly />
                </div>
              </div>
            </div>
          </div>
        </aside>
      </div>
    );
  }
}

export default LeftArea;
