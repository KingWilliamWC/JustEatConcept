import React, { Component } from "react";

import './RestrauntRow.css';

import RestrauntCard from "./RestrauntCard";
import ButtonRightSVG from './SVG/ButtonRight-Solid.svg';

class RestrauntRow extends Component{
    constructor(props){
        super(props);

        this.state = {
            scrollAmount: 400,
            sliderButtonRightClasses: ["sliderButton sliderButton-right", "hide"],
            sliderButtonLeftClasses: ["sliderButton sliderButton-left", "hide"],
            sliderButtonLeftState: 1,
            sliderButtonRightState: 0,
            restrauntCards: [],
            restrauntCardsClasses: ['restrauntCards restrauntCardsFull', 'restrauntCards restrauntCardsMobile'],
            restrauntCardsState: 0,
        }
    }
    componentDidMount(){
        var restrauntCardsToAdd = [];
        for(var i = 0; i < 10; i++){
            restrauntCardsToAdd.push(
                <RestrauntCard restrauntName={'Chillox Burger'} clickHandler={this.onRestrauntCardClick}/>
            )
        }
        this.setState({restrauntCards: restrauntCardsToAdd});
    }

    onRestrauntCardClick = (name) => {
        window.location.href = `${this.props.routes.viewrestraunt}?name=${name}`
    }

    onSliderButtonClick = (direction) => {
        var restrauntCards = document.getElementsByClassName("restrauntCards")[this.props.index]
        if(direction === 'right'){
            restrauntCards.scrollLeft += this.state.scrollAmount;
            if(restrauntCards.scrollLeft + this.state.scrollAmount + restrauntCards.offsetWidth >= restrauntCards.scrollWidth){
                this.setState({sliderButtonRightState: 1, sliderButtonLeftState: 0})
            }else{
                this.setState({sliderButtonLeftState: 0});
            }
        }else if (direction === 'left'){
            restrauntCards.scrollLeft -= this.state.scrollAmount;
            if(restrauntCards.scrollLeft - this.state.scrollAmount <= 0){
                this.setState({sliderButtonRightState: 0, sliderButtonLeftState: 1})
            }else{
                this.setState({sliderButtonLeftState: 0})
            }
        }

    }
    render(){
        const isTouchDevice = (('ontouchstart' in window) || (navigator.maxTouchPoints > 0) || (navigator.msMaxTouchPoints > 0));
        if(isTouchDevice){
            this.state.restrauntCardsState = 1;
        }
        return(
            <div className='restrauntRow'>
                <p className='sectionTitle'>{this.props.rowTitle}</p>
                <div className='restrauntSlideContainer'>
                    <div onClick={() => this.onSliderButtonClick('left')} className={this.state.sliderButtonLeftClasses[this.state.sliderButtonLeftState]}>
                        <img className='sliderButtonImage' src={ButtonRightSVG}></img>
                    </div>
                    <div className={this.state.restrauntCardsClasses[this.state.restrauntCardsState]}>
                        {this.state.restrauntCards}
                    </div>
                    <div onClick={() => this.onSliderButtonClick('right')} className={this.state.sliderButtonRightClasses[this.state.sliderButtonRightState]}>
                        <img className='sliderButtonImage' src={ButtonRightSVG}></img>
                    </div>
                </div>
            </div>
        )
    }
}

export default RestrauntRow;