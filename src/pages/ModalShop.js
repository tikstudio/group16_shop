import React, { Component } from 'react';
import Header from "../components/Header";
import BreadCrumb from "../components/BreadCrumb";
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import css from "../assets/css/modalshop.css"
import ProductItem from "../components/ProductItem";
import products from '../data/products.json';
import _ from "lodash"
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import ReactTabs from "../components/ReactTabs";
import Helmet from "react-helmet";


class ModalShop extends Component {

  constructor(props) {
    super(props);
    this.state = {
      id: this.props.match.params.Id,
      pages: "Single product",
      one: 1,
    }
  }

  plus = () => {
    this.setState({
      one: this.state.one + 1,
    })
  };
  minus = () => {
    if (this.state.one > 0) {
      this.setState({
        one: this.state.one - 1,
      })
    }
  };

  render() {
    const { id, pages, one } = this.state;
    const product = products.find(u => `${u.id}` === id);
    return (
      <div>
        <Helmet>
          <title>{product.title}</title>
          <body className="test" />
          <html lang="hy" />
        </Helmet>
        <Header />
        <BreadCrumb data={pages} />
        <div className="content">
          <div className="car">
            <Carousel>
              <div><img src={product.images[0]} alt={"#"} /></div>
              <div><img src={product.images[1]} alt={"#"} /></div>
              <div><img src={product.images[2]} alt={"#"} /></div>
              <div><img src={product.images[3]} alt={"#"} /></div>
            </Carousel>
          </div>
          <div className="article">
            <h3>{product.title1}</h3>
            <h3 style={{ color: "#2F7DFC" }}>{product.price}</h3>
            <p className="desc">{product.category}</p>
            <p className="desc">{product.availibility}</p>
            <hr />
            <p className="desc">{product.desc}</p>

            <div className="card_area">
              <div className="product_count d-inline-block">
                <Link onClick={this.minus} to="#" className="number-decrement"> - </Link>
                <input className="input-number" type="text" min="0" max="10" value={one} />
                <Link onClick={this.plus} to="#" className="number-increment"> + </Link>
              </div>
              <div className="add_to_cart">
                <Link to="#" className="btn_33">add to cart</Link>
                <Link to="#" className="like_us"> <i className="ti-heart"></i> </Link>
              </div>
              <div className="social_icon">
                <Link to="#" className="fb"><i className="ti-facebook"></i></Link>
                <Link to="#" className="tw"><i className="ti-twitter-alt"></i></Link>
                <Link to="#" className="li"><i className="ti-linkedin"></i></Link>
              </div>
            </div>
          </div>
        </div>
        <ReactTabs />
        <div className="container-item">
          <h2>Best Sellers</h2>
          <div className="images">
            <div className="images_item">
              <img src={product.images[0]} alt={"#"} />
              <p>{product.title}</p>
              <p>{product.price}</p>
            </div>
            <div className="images_item">
              <img src={product.images[1]} alt={"#"} />
              <p>{product.title}</p>
              <p>{product.price}</p>
            </div>
            <div className="images_item">
              <img src={product.images[2]} alt={"#"} />
              <p>{product.title}</p>
              <p>{product.price}</p>
            </div>
            <div className="images_item">
              <img src={product.images[3]} alt={"#"} />
              <p>{product.title}</p>
              <p>{product.price}</p>
            </div>
          </div>
          <hr />
        </div>
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
        <div className="row-block">
          <div className="row">
            <div className="col-lg-12">
              <div className="instagram_photo_iner">
                <div className="single_instgram_photo">
                  <img src="../../assets/img/instagram/inst_1.png" alt="" />
                </div>
                <div className="single_instgram_photo">
                  <img src="../../assets/img/instagram/inst_2.png" alt="" />
                </div>
                <div className="single_instgram_photo">
                  <img src="../../assets/img/instagram/inst_3.png" alt="" />
                </div>
                <div className="single_instgram_photo">
                  <img src="../../assets/img/instagram/inst_4.png" alt="" />
                </div>
                <div className="single_instgram_photo">
                  <img src="../../assets/img/instagram/inst_5.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default ModalShop;
