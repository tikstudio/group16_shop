import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ProductItem from "../components/ProductItem";
import products from '../data/products.json';
import LeftArea from "../components/LeftArea";
import BreadCrumb from "../components/BreadCrumb";
import LazyLoad from 'react-lazyload';
import ModalShop from "./ModalShop";
import EventEmitter from '../helper/EventEmitter'
import _ from "lodash"

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productsCount: 3,
      price:null
    }
  }
  showMore = () => {
    const { productsCount } = this.state;
    this.setState({ productsCount: productsCount + 3 })
  }
  componentDidMount(){
    EventEmitter.on('priceChange',this.handlePriceChange)
  }
    handlePriceChange = (data) => {
        const {price}  = this.state
        this.setState({price:data});
    };
  render() {
    const { productsCount,price } = this.state;
    let productsFiltered=products;
      if (price) {
          const filteredPrice=price['value'];
          productsFiltered = _.filter(productsFiltered, p => _.inRange(parseInt((p.price).substr(1)), filteredPrice['min'], filteredPrice['max']));
    }
    return (
      <>
        <Header />
        <BreadCrumb />
        <section className="cat_product_area section_padding border_top">
          <div className="container">
            <div className="row">
              <div className="col-lg-3">
                <LeftArea />
              </div>
              <div className="col-lg-9">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="product_top_bar d-flex justify-content-between align-items-center">
                      <div className="single_product_menu product_bar_item">
                        <h2>Womans (12)</h2>
                      </div>
                      <div className="product_top_bar_iner product_bar_item d-flex">
                        <div className="product_bar_single">
                          <select className="wide">
                            <option data-display="Default sorting">Default sorting</option>
                            <option value="1">Some option</option>
                            <option value="2">Another option</option>
                            <option value="3">Potato</option>
                          </select>
                        </div>
                        <div className="product_bar_single">
                          <select>
                            <option data-display="Show 12">Show 12</option>
                            <option value="1">Show 20</option>
                            <option value="2">Show 30</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                  {productsFiltered.slice(0, productsCount).map((product) => (
                      <LazyLoad
                        key={product.id}
                        offset={1024}
                        placeholder={<div className="col-lg-4 col-sm-6" style={{ height: 385 }} />}
                        unmountIfInvisible
                      >
                        <ProductItem product={product} />
                      </LazyLoad>
                    ))}
                  {productsCount < products.length ? (
                    <div className="col-lg-12 text-center">
                      <button onClick={this.showMore} className="btn_2">More Items</button>
                    </div>
                  ) : null}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="shipping_details section_padding border_top">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-sm-6">
                <div className="single_shopping_details">
                  <img src="/assets/img/icon/icon_1.png" alt="" />
                  <h4>Free shipping</h4>
                  <p>Divided face for bearing the divide unto seed winged divided light Forth.</p>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <div className="single_shopping_details">
                  <img src="/assets/img/icon/icon_2.png" alt="" />
                  <h4>Free shipping</h4>
                  <p>Divided face for bearing the divide unto seed winged divided light Forth.</p>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <div className="single_shopping_details">
                  <img src="/assets/img/icon/icon_3.png" alt="" />
                  <h4>Free shipping</h4>
                  <p>Divided face for bearing the divide unto seed winged divided light Forth.</p>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <div className="single_shopping_details">
                  <img src="/assets/img/icon/icon_4.png" alt="" />
                  <h4>Free shipping</h4>
                  <p>Divided face for bearing the divide unto seed winged divided light Forth.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </>
    );
  }
}

export default Home;
