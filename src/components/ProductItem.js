import React, { Component } from 'react';
import { Link } from "react-router-dom";

class ProductItem extends Component {
  render() {
    const { product: { title, price, images } } = this.props
    return (
      <div className="col-lg-4 col-sm-6">
        <div className="single_category_product">
          <div className="single_category_img">
            <img src={images[0]} alt={title} />
            <div className="category_social_icon">
              <ul>
                <li>
                  <Link to="#">
                    <i className="ti-heart"></i>
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    <i className="ti-bag"></i>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="category_product_text">
              <Link to="single-product.html">
                <h5>{title}</h5>
              </Link>
              <p>{price}0</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProductItem;
