import React, { Component } from "react";

import SliderTab from "./SliderTab";

import './CuisineSlider.css';

class CuisineSlider extends Component{
    constructor(props){
        super(props);

        this.state = {
            sliderTabs: [],
            sliderClasses: [],
            sliderState: 0,
            CuisineSliderContainerClass: ["cuisineSlideContainer", "cuisineSlideContainerMobile"],
            CuisineSliderContainerState: 0,
        }
    }
    componentDidMount(){
        const slider = document.getElementById("cuisineSlideContainer");
        const isTouchDevice = (('ontouchstart' in window) || (navigator.maxTouchPoints > 0) || (navigator.msMaxTouchPoints > 0));
        console.log(isTouchDevice);
        let isDown = false;
        let startX;
        let scrollLeft;
        if(slider && !isTouchDevice){
            slider.addEventListener('mousedown', (e) => {
                isDown = true;
                startX = e.pageX - slider.offsetLeft;
                scrollLeft = slider.scrollLeft;
                console.log("mousdowne")
            });
            slider.addEventListener('mouseleave', () => {
                isDown = false;
            });
            slider.addEventListener('mouseup', () => {
                isDown = false;
            });
            slider.addEventListener('mousemove', (e) => {
                if(!isDown) return;
                e.preventDefault();
                const x = e.pageX - slider.offsetLeft;
                const walk = (x - startX) * 1; //scroll-fast
                slider.scrollLeft = scrollLeft - walk;
            });
        }
        else if(isTouchDevice){
            this.state.CuisineSliderContainerState = 1;
        }
    }

    onSliderClick = (index) => {
        var currentSliderClasses = this.state.sliderClasses;
        currentSliderClasses[this.state.sliderState] = {"divClass": "slideItem", "textClass": "slideItemText"}
        currentSliderClasses[index] = {"divClass": "slideItem slideItemActive", "textClass": "slideItemTextActive"}
        //console.log(currentSliderClasses);
        this.setState({sliderClasses: currentSliderClasses, sliderState: index});
    }
    render(){
        
        if(this.state.sliderClasses.length === 0){
            var sliderClassesToAdd = [{"divClass": "slideItem slideItemActive", "textClass": "slideItemTextActive"}] // initialise array with current active tab, add more later
            for(var i = 0; i < 8; i++){
                sliderClassesToAdd.push({"divClass": "slideItem", "textClass": "slideItemText"})
            }
            this.state.sliderClasses = sliderClassesToAdd
        }

        this.state.sliderTabs = []
        this.state.sliderTabs.push(
            <SliderTab title={"burgers"} clickHandler={this.onSliderClick} textClass={this.state.sliderClasses[0].textClass} divClass={this.state.sliderClasses[0].divClass} index={0}/>
        )
        for(var i = 0; i < 8; i++){
            this.state.sliderTabs.push(
                // add 1 because we've already added one tab before
                <SliderTab title={"burgers"} clickHandler={this.onSliderClick} textClass={this.state.sliderClasses[i+1].textClass} divClass={this.state.sliderClasses[i+1].divClass} index={i+1}/>
            )
        }
        return(
            <div id='cuisineContainer'>
                <div id='cuisineWrapper'>
                    <p className='sectionTitle'>{this.props.title}</p>
                    <div id={this.state.CuisineSliderContainerClass[this.state.CuisineSliderContainerState]}>
                        {this.state.sliderTabs}
                    </div>
                </div>
            </div>
        )
    }
}

export default CuisineSlider;