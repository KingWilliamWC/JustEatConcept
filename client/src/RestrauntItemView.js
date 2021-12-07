import React, { Component } from "react";

import MinusSolidSVG from './SVG/Minus-Solid.svg';
import PlusSolidSVG from './SVG/Plus-Solid.svg';

import './RestrauntItemView.css';

class RestrauntItemView extends Component{
    constructor(props){
        super(props);

        this.state = {
            quantity: 1,
        }
    }
    onValueChange(toChange){
        if(this.state.quantity + toChange >= 0){
            this.setState({quantity: this.state.quantity + toChange});
        }
    }
    render(){
        return(
            <div id='restrauntItemViewContainer'>
                <div id='restrauntItemViewWrapper'>
                    <p id='viewItemTitle'>Chicken Burger</p>
                    <p id='viewItemPrice'>£7.99</p>
                    <div id='quantityContainer'>
                        <img onClick={() => this.onValueChange(-1)} className='valueChangeButton' src={MinusSolidSVG}></img>
                        <div id='quantityTextContainer'>
                            <p className='quantityText'>{this.state.quantity}</p>
                        </div>
                        <img onClick={() => this.onValueChange(1)} className='valueChangeButton' src={PlusSolidSVG}></img>
                    </div>
                    <div className='addToOrderButton'>
                        <p>Add To Order (£{(7.99 * this.state.quantity).toString()})</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default RestrauntItemView;