import React, {Component} from 'react';
import {Link} from "react-router-dom";
import category from '../data/category.json';
import products from '../data/products';
import EventEmitter from '../helpers/EventEmitter'
import _ from "lodash"

class Category extends Component {

    constructor(props) {
        super(props);
        this.state = {
            categoryId: null,
            subCategory: null,
            showMenu: false

        };
    }

    getCategoryFilters = (categoryId, e) => {
        const arr = products.filter(pr => pr.categoryId == e.target.id)
        if (arr.find(p => p.subId)) {
            this.setState({showMenu: !this.state.showMenu})
        }
        this.setState({categoryId})
        EventEmitter.emit('categoryChange', {categoryId});
    }
    getSubCategory = (subCategory) => {
        this.setState({subCategory})
        EventEmitter.emit('subCategory', {subCategory});
    }


    render() {
        const {showMenu} = this.state

        return (
            <ul className="list">
                {category.map((categories) => (
                    <li key={categories.id}>
                        <Link to="#" id={categories.id}
                              onClick={(e) => this.getCategoryFilters(categories.id, e)}>{categories.title}</Link>
                        {categories.sub.map((e) => e === null ? '' :
                            (
                                <ul className={showMenu ? '' : "hidden"}>
                                    <li key={e.id} onClick={() => this.getSubCategory(e.id)}>
                                        <Link to='#'>{e.title}</Link>
                                    </li>
                                </ul>
                            )
                        )}
                    </li>
                ))}

            </ul>
        )
    }
}

export default Category