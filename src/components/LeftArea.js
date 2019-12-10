import React, { Component } from 'react';
import { Link } from "react-router-dom";
import InputRangeComponent from "./InputRangeComponent";
import Brands from "./Brands";
import Category from "./Category";

class LeftArea extends Component {
  render() {
    return (
      <div className="left_sidebar_area">
        <aside className="left_widgets p_filter_widgets sidebar_box_shadow">
          <div className="l_w_title">
            <h3>Browse Categories</h3>
          </div>
          <div className="widgets_inner">
              <Category/>
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
                <InputRangeComponent/>
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
