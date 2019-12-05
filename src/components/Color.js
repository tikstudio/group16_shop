import React, { Component } from 'react';
import { Link } from "react-router-dom";
import colorData from '../data/color.json';
import EventEmitter from "../helpers/EventEmitter";

class Brands extends Component {
    constructor(props) {
        super(props);
        this.state = {
            colorId: null
        }
    }



    handleClick = (colorId) => {
        const { colorId : colorIdOld } = this.state;
        if (colorIdOld === colorId) {
            this.setState({ colorId: null });
            EventEmitter.emit('colorChange', { colorId: null });
        } else {
            this.setState({ colorId });
            EventEmitter.emit('colorChange', { colorId });
        }
    }

    render() {
        const { colorId } = this.state;
        console.log(colorId)
        return (
            <ul className="list">
                <p>color</p>
                {colorData.map((color) =>(
                    <li onClick={()=> this.handleClick(color.id)}>
                        <input type="radio" checked={ color.id === colorId }/>
                        <Link to="#">{color.name}</Link>
                    </li>
                    ))}
            </ul>

        );
    }
}

export default Brands;
