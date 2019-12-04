import React, { Component } from 'react';
import { Link } from "react-router-dom";
import brandsData from '../data/brands';
import EventEmitter from "../helpers/EventEmitter";
import Portal from "./Portal";

class Brands extends Component {
  constructor(props) {
    super(props);
    this.state = {
      brandId: null
    }
  }

  brandSelect = (brandId) => {
    const { brandId: brandIdOld } = this.state;
    if (brandIdOld === brandId) {
      this.setState({ brandId: null });
      EventEmitter.emit('brandChange', { brandId: null });
    } else {
      this.setState({ brandId });
      EventEmitter.emit('brandChange', { brandId });
    }

  }

  render() {
    const { brandId } = this.state;
    return (
      <ul className="list">
        <p>Brands</p>
        <Portal>
          {brandsData.map((brand) => (
            <li onClick={() => this.brandSelect(brand.id)}>
              <input
                type="radio"
                checked={brand.id === brandId}
              />
              <Link to="#">{brand.name}</Link>
            </li>
          ))}
        </Portal>
        {brandsData.map((brand) => (
          <li onClick={() => this.brandSelect(brand.id)}>
            <input
              type="radio"
              checked={brand.id === brandId}
            />
            <Link to="#">{brand.name}</Link>
          </li>
        ))}
      </ul>
    );
  }
}

export default Brands;
