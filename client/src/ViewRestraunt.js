import React, { Component } from "react";

import './ViewRestraunt.css';

import CuisineSlider from "./CuisineSlider";
import RestrauntMenuGrid from "./RestrauntMenuGrid";
import RestrauntItemView from "./RestrauntItemView";

import restrauntSampleImage from './restrauntSample.png';
import BackButtonSolidSVG from './SVG/BackButton-Solid.svg';
import CircleSolidSVG from './SVG/Circle-Solid.svg';
import BasketSolidSVG from './SVG/Basket-Solid.svg';
import BikeSolidSVG from './SVG/Bike-Solid.svg';
import TimeSolidSVG from './SVG/Time-Solid.svg';
import StarSolidSVG from './SVG/Star-Solid.svg';

import RestrauntSolidImage from './RestrauntLogo.png'

class ViewRestraunt extends Component{
    constructor(props){
        super(props);

        this.state = {
            isViewingItem: false,
            viewItemData: {},
        }
    }
    onShowItemInfo = (itemData) =>{
        this.setState({isViewingItem: true, viewItemData: itemData});
    }
    render(){
        return(
            <div id='viewRestraunt'>
                <div id='viewRestrauntWrapper'>
                    <div id='restrauntPageTop'>
                        <div id='backButton'>
                            <img src={BackButtonSolidSVG}></img>
                        </div>
                        <div id='restrauntMainContainer'>
                            <img id='restrauntImage' src={restrauntSampleImage}></img>
                            <div id='restrauntInformationContainer'>
                                <div id='logoContainer'>
                                    <img id='logoImage' src={RestrauntSolidImage}></img>
                                </div>
                                <div id='restrauntInformationWrapper'>
                                    <div>
                                        <p id='restrauntName'>Chillox Burger</p>
                                    </div>
                                    <div>
                                        <div id='restrauntCuisineContainer'>
                                            <p>Burger</p>
                                            <img className='cuisineSeperatorIcon-ViewRestraunt' src={CircleSolidSVG}></img>
                                            <p>Fast-Food</p>
                                        </div>
                                    </div>
                                    <div id='restrauntMetricsContainer'>
                                        <div id='deliveryContainer'>
                                            <img className='metricIcons metricIconsBike' src={BikeSolidSVG}></img>
                                            <p className='metricValueText'>Free</p>
                                        </div>
                                        <div id='deliveryTimeContainer'>
                                            <img className='metricIcons' src={TimeSolidSVG}></img>
                                            <p className='metricValueText'>15-25min</p>
                                        </div>
                                        <div id='ratingContainer'>
                                            <img className='metricIcons' src={StarSolidSVG}></img>
                                            <p className='metricValueText'>4.8</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div id='basketButton'>
                            <img src={BasketSolidSVG}></img>
                        </div>
                    </div>
                    <div id='restrauntMenuContainer'>
                        <div id='restrauntMenuSliderContainer'>
                            <CuisineSlider title={"Menu"}/>
                        </div>
                        <RestrauntMenuGrid clickHandler={this.onShowItemInfo}/>
                    </div>
                </div>
                {this.state.isViewingItem ? <RestrauntItemView/> : ''}
            </div>
        )
    }
}

export default ViewRestraunt;