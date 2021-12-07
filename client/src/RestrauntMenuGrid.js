import React, { Component } from "react";

import './RestrauntMenuGrid.css';

import RestrauntMenuItem from "./RestrauntMenuItem";

class RestrauntMenuGrid extends Component{
    onRestrauntItemClick= (itemData) =>{
        this.props.clickHandler(itemData);
    }
    render(){
        return(
            <div id='restrauntMenuGridContainer'>
                <div id='restrauntMenuGridWrapper'>
                    <RestrauntMenuItem clickHandler={this.onRestrauntItemClick} data={{"name": "Quater Pounder Beef Burger", "price": "3.00", "isPriceRange": false}}/>
                </div>
            </div>
        )
    }
}

export default RestrauntMenuGrid;