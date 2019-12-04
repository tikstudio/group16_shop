import React, { Component } from 'react';
import {Link} from "react-router-dom";
import Form from "./Form";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import css from "../assets/css/reacttabs.css"

class ReactTabs extends Component {



    render() {
        return (
            <div>
                <Tabs className="nav-container">
                    <TabList className="nav-block">
                        <Tab> <Link className="nav__link">Description</Link></Tab>
                        <Tab> <Link className="nav__link">Specification</Link></Tab>
                        <Tab> <Link className="nav__link">Comments</Link></Tab>
                        <Tab> <Link className="nav__link active">Reviews</Link></Tab>
                    </TabList>
                    <TabPanel>
                        <p>
                            Beryl Cook is one of Britain’s most talented and amusing artists
                            .Beryl’s pictures feature women of all shapes and sizes enjoying
                            themselves .Born between the two world wars, Beryl Cook eventually
                            left Kendrick School in Reading at the age of 15, where she went
                            to secretarial school and then into an insurance office. After
                            moving to London and then Hampton, she eventually married her next
                            door neighbour from Reading, John Cook. He was an officer in the
                            Merchant Navy and after he left the sea in 1956, they bought a pub
                            for a year before John took a job in Southern Rhodesia with a
                            motor company. Beryl bought their young son a box of watercolours,
                            and when showing him how to use it, she decided that she herself
                            quite enjoyed painting. John subsequently bought her a child’s
                            painting set for her birthday and it was with this that she
                            produced her first significant work, a half-length portrait of a
                            dark-skinned lady with a vacant expression and large drooping
                            breasts. It was aptly named ‘Hangover’ by Beryl’s husband and
                        </p>
                        <p>
                            It is often frustrating to attempt to plan meals that are designed
                            for one. Despite this fact, we are seeing more and more recipe
                            books and Internet websites that are dedicated to the act of
                            cooking for one. Divorce and the death of spouses or grown
                            children leaving for college are all reasons that someone
                            accustomed to cooking for more than one would suddenly need to
                            learn how to adjust all the cooking practices utilized before into
                            a streamlined plan of cooking that is more efficient for one
                            person creating less
                        </p>
                    </TabPanel>
                    <TabPanel>
                        <div className="table-responsive">
                            <table className="table">
                                <tbody>
                                <tr>
                                    <td>
                                        <h5>Width</h5>
                                    </td>
                                    <td>
                                        <h5>128mm</h5>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <h5>Height</h5>
                                    </td>
                                    <td>
                                        <h5>508mm</h5>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <h5>Depth</h5>
                                    </td>
                                    <td>
                                        <h5>85mm</h5>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <h5>Weight</h5>
                                    </td>
                                    <td>
                                        <h5>52gm</h5>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <h5>Quality checking</h5>
                                    </td>
                                    <td>
                                        <h5>yes</h5>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <h5>Freshness Duration</h5>
                                    </td>
                                    <td>
                                        <h5>03days</h5>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <h5>When packeting</h5>
                                    </td>
                                    <td>
                                        <h5>Without touch of hand</h5>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <h5>Each Box contains</h5>
                                    </td>
                                    <td>
                                        <h5>60pcs</h5>
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="comment_list">
                                    <div className="review_item">
                                        <div className="media">
                                            <div className="d-flex">
                                                <img src="assets/img/product/single-product/review-1.png" alt=""/>
                                            </div>
                                            <div className="media-body">
                                                <h4>Blake Ruiz</h4>
                                                <h5>12th Feb, 2017 at 05:56 pm</h5>
                                                <Link className="reply_btn" href="#">Reply</Link>
                                            </div>
                                        </div>
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                                            sed do eiusmod tempor incididunt ut labore et dolore magna
                                            aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                                            ullamco laboris nisi ut aliquip ex ea commodo
                                        </p>
                                    </div>
                                    <div className="review_item reply">
                                        <div className="media">
                                            <div className="d-flex">
                                                <img src="assets/img/product/single-product/review-2.png" alt=""/>
                                            </div>
                                            <div className="media-body">
                                                <h4>Blake Ruiz</h4>
                                                <h5>12th Feb, 2017 at 05:56 pm</h5>
                                                <Link className="reply_btn" href="#">Reply</Link>
                                            </div>
                                        </div>
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                                            sed do eiusmod tempor incididunt ut labore et dolore magna
                                            aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                                            ullamco laboris nisi ut aliquip ex ea commodo
                                        </p>
                                    </div>
                                    <div className="review_item">
                                        <div className="media">
                                            <div className="d-flex">
                                                <img src="assets/img/product/single-product/review-3.png" alt=""/>
                                            </div>
                                            <div className="media-body">
                                                <h4>Blake Ruiz</h4>
                                                <h5>12th Feb, 2017 at 05:56 pm</h5>
                                                <Link className="reply_btn" href="#">Reply</Link>
                                            </div>
                                        </div>
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                                            sed do eiusmod tempor incididunt ut labore et dolore magna
                                            aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                                            ullamco laboris nisi ut aliquip ex ea commodo
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="review_box">
                                    <h4>Post a comment</h4>
                                    <Form/>
                                </div>
                            </div>
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="row total_rate">
                                    <div className="col-6">
                                        <div className="box_total">
                                            <h5>Overall</h5>
                                            <h4>4.0</h4>
                                            <h6>(03 Reviews)</h6>
                                        </div>
                                    </div>
                                    <div className="col-6">
                                        <div className="rating_list">
                                            <h3>Based on 3 Reviews</h3>
                                            <ul className="list">
                                                <li>
                                                    <Link to="#">5 Star
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i> 01</Link>
                                                </li>
                                                <li>
                                                    <Link to="#">4 Star
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i> 01</Link>
                                                </li>
                                                <li>
                                                    <Link to="#">3 Star
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i> 01</Link>
                                                </li>
                                                <li>
                                                    <Link to="#">2 Star
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i> 01</Link>
                                                </li>
                                                <li>
                                                    <Link to="#">1 Star
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i> 01</Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="review_list">
                                    <div className="review_item">
                                        <div className="media">
                                            <div className="d-flex">
                                                <img src="assets/img/product/single-product/review-1.png" alt=""/>
                                            </div>
                                            <div className="media-body">
                                                <h4>Blake Ruiz</h4>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                            </div>
                                        </div>
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                                            sed do eiusmod tempor incididunt ut labore et dolore magna
                                            aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                                            ullamco laboris nisi ut aliquip ex ea commodo
                                        </p>
                                    </div>
                                    <div className="review_item">
                                        <div className="media">
                                            <div className="d-flex">
                                                <img src="assets/img/product/single-product/review-2.png" alt=""/>
                                            </div>
                                            <div className="media-body">
                                                <h4>Blake Ruiz</h4>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                            </div>
                                        </div>
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                                            sed do eiusmod tempor incididunt ut labore et dolore magna
                                            aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                                            ullamco laboris nisi ut aliquip ex ea commodo
                                        </p>
                                    </div>
                                    <div className="review_item">
                                        <div className="media">
                                            <div className="d-flex">
                                                <img src="assets/img/product/single-product/review-3.png" alt=""/>
                                            </div>
                                            <div className="media-body">
                                                <h4>Blake Ruiz</h4>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                            </div>
                                        </div>
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                                            sed do eiusmod tempor incididunt ut labore et dolore magna
                                            aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                                            ullamco laboris nisi ut aliquip ex ea commodo
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="review_box">
                                    <h4>Add a Review</h4>
                                    <p>Your Rating:</p>
                                    <ul className="list">
                                        <li>
                                            <Link to="#">
                                                <i className="fa fa-star"></i>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="#">
                                                <i className="fa fa-star"></i>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="#">
                                                <i className="fa fa-star"></i>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="#">
                                                <i className="fa fa-star"></i>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="#">
                                                <i className="fa fa-star"></i>
                                            </Link>
                                        </li>
                                    </ul>
                                    <p>Outstanding</p>
                                    <Form/>
                                </div>
                            </div>
                        </div>
                    </TabPanel>

                </Tabs>
            </div>
        );
    }
}

export default ReactTabs;