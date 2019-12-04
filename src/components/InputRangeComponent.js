import React, {Component} from 'react';
import InputRange from 'react-input-range';
import "react-input-range/lib/css/index.css";
import products from '../data/products.json';
import EventEmitter from '../helper/EventEmitter'
import _ from "lodash"

class InputRangeComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            value: {min: 120, max: 190},
            price: this.getPrices(),
        };
    }
    getPrices = () => {
        let price = [];
        {
            products.map((product) => (
                price.push(product['price'].substr(1))
            ))
        }
        this.setState({price})
        return price || {}
    };
    getFilters = (val) => {
        let filteredPrice = [];
        const {price, value} = this.state
        this.setState({value: val})
        filteredPrice.push(_.filter(price, p => _.inRange(p, value['min'], value['max'])))
        return filteredPrice
    }
    render() {
        const {price, value} = this.state
        const min = parseInt(_.min(price))
        const max = parseInt(_.max(price))
        return (
            <div>

                <InputRange
                    maxValue={max}
                    minValue={min}
                    value={value}
                    onChange={value =>this.getFilters(value)} />
            </div>

        )
    }
}

export default InputRangeComponent
