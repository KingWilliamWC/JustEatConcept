import React, { Component } from "react";

import './RestrauntMenuItem.css';

class RestrauntMenuItem extends Component{
    render(){
        return(
            <div onClick={() => this.props.clickHandler(this.props.data)} className='restrauntItem'>
                <p className='restrauntItemName'>{this.props.data.name}</p>
                <div className='restrauntItemPriceContainer'>
                    <p className='restrauntItemPriceFromText'>{this.props.data.isPriceRange ? 'from' : ''}</p>
                    <p className='restrauntItemPriceText'>£{this.props.data.price}</p>
                </div>
            </div>
        )
    }
}

export default RestrauntMenuItem;