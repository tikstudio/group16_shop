import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <header className="main_menu home_menu">
        <div className="container-fluid">
          <div className="row align-items-center justify-content-center">
            <div className="col-lg-11">
              <nav className="navbar navbar-expand-lg navbar-light">
                <Link className="navbar-brand" href="index.html">
                  <img src="/assets/img/logo.png" alt="logo" /> </Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse"
                        data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                  <span className="menu_icon"><i className="fas fa-bars"></i></span>
                </button>

                <div className="collapse navbar-collapse main-menu-item" id="navbarSupportedContent">
                  <ul className="navbar-nav">
                    <li className="nav-item">
                      <Link className="nav-link" href="index.html">Home</Link>
                    </li>
                    <li className="nav-item dropdown">
                      <Link className="nav-link dropdown-toggle" href="blog.html" id="navbarDropdown_1"
                            role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Shop
                      </Link>
                      <div className="dropdown-menu" aria-labelledby="navbarDropdown_1">
                        <Link className="dropdown-item" href="category.html"> shop category</Link>
                        <Link className="dropdown-item" href="single-product.html">product details</Link>

                      </div>
                    </li>
                    <li className="nav-item dropdown">
                      <Link className="nav-link dropdown-toggle" href="blog.html" id="navbarDropdown_3"
                            role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        pages
                      </Link>
                      <div className="dropdown-menu" aria-labelledby="navbarDropdown_2">
                        <Link className="dropdown-item" href="login.html">
                          login

                        </Link>
                        <Link className="dropdown-item" href="tracking.html">tracking</Link>
                        <Link className="dropdown-item" href="checkout.html">product checkout</Link>
                        <Link className="dropdown-item" href="cart.html">shopping cart</Link>
                        <Link className="dropdown-item" href="confirmation.html">confirmation</Link>
                        <Link className="dropdown-item" href="elements.html">elements</Link>
                      </div>
                    </li>

                    <li className="nav-item dropdown">
                      <Link className="nav-link dropdown-toggle" href="blog.html" id="navbarDropdown_2"
                            role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        blog
                      </Link>
                      <div className="dropdown-menu" aria-labelledby="navbarDropdown_2">
                        <Link className="dropdown-item" href="blog.html"> blog</Link>
                        <Link className="dropdown-item" href="single-blog.html">Single blog</Link>
                      </div>
                    </li>

                    <li className="nav-item">
                      <Link className="nav-link" href="contact.html">Contact</Link>
                    </li>
                  </ul>
                </div>
                <div className="hearer_icon d-flex">
                  <div className="dropdown cart">
                    <Link className="dropdown-toggle" href="#" id="navbarDropdown3" role="button"
                          data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      <i className="ti-bag"></i>
                    </Link>
                  </div>
                  <Link id="search_1" href="#">
                    <i className="ti-search"></i>
                  </Link>
                </div>
              </nav>
            </div>
          </div>
        </div>
        {false ? (
          <div className="search_input" id="search_input_box">
            <div className="container ">
              <form className="d-flex justify-content-between search-inner">
                <input type="text" className="form-control" id="search_input" placeholder="Search Here" />
                <button type="submit" className="btn"></button>
                <span className="ti-close" id="close_search" title="Close Search"></span>
              </form>
            </div>
          </div>
        ) : null}

      </header>
    );
  }
}

export default Header;

















