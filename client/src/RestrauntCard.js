import React, { Component } from "react";

import restrauntSampleImage from './restrauntSample.png';
import CircleSolidSVG from './SVG/Circle-Solid.svg';
import StarSolidSVG from './SVG/Star-Solid.svg';
import TimeSolidSVG from './SVG/Time-Solid.svg';

import './RestrauntCard.css';

class RestrauntCard extends Component{
    render(){
        return(
            <div onClick={() =>  this.props.clickHandler(this.props.restrauntName)} className='restrauntContainer'>
                <div className='restrauntImageContainer'>
                    <img className='restrauntImage' src={restrauntSampleImage}></img>
                    <div className='restrauntInfoContainer'>
                        <div className='restrauntInfoWrapper'>
                            <div className='restrauntNameCuisineSide'>
                                <p className='restrauntTitle'>Chillox Burger</p>
                                <div className='restrauntCuisines'>
                                    <p className='restrauntCuisineText'>Burgers</p>
                                    <img className='cuisineSeperatorIcon' src={CircleSolidSVG}></img>
                                    <p className='restrauntCuisineText'>Fast Food</p>
                                </div>
                            </div>
                            <div className='restrauntRatingTimeSide'>
                                <div className='metricIcons'>
                                    <img className='metricIcon' src={StarSolidSVG}></img>
                                    <img className='metricIcon' src={TimeSolidSVG}></img>
                                </div>
                                <div className='metricValues'>
                                    <p>4.8</p>
                                    <p>15-25mins</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default RestrauntCard;