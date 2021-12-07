import React, { Component } from "react";

import LocationSolidSVG from './SVG/Location-Solid.svg';
import ArrowSolidSVG from './SVG/Arrow-Solid.svg';

import './LocationInput.css'

class LocationInput extends Component{
    constructor(props){
        super(props);

        this.state = {
            errorMessageClasses: ['hide', 'errorMessageText'],
            errorState: 0,
        }
    }

    componentDidMount(){
        var url = new URL(window.location.href);
        if(url.searchParams.get('ref')) {
            document.getElementById('userPostCodeInput').value = url.searchParams.get('ref')
        }
    }

    onUserPressKeyInput = (e) => {
        if(e.key === 'Enter'){
            this.userSubmitPostcode();
        }
    }

    onValidLocation = (newPostcode) => {
        window.location.href = `${this.props.routes.area}?location=${newPostcode}`
    }

    isValidPostCode = (postcode) => {
        postcode = postcode.replace(/\s/g, "");
        const regex = /^[A-Z]{1,2}[0-9]{1,2}[A-Z]{0,1} ?[0-9][A-Z]{2}$/i;
        return regex.test(postcode);
    }
    userSubmitPostcode = () =>{
        var submittedPostcode = document.getElementById("userPostCodeInput").value;
        if(submittedPostcode.length > 0){
            //console.log(this.isValidPostCode(submittedPostcode));
            if(this.isValidPostCode(submittedPostcode)){
                this.onValidLocation(submittedPostcode);
            }else{
                this.setState({errorState: 1})
            }
        }
    }
    render(){
        return(
            <div id='locationInput'>
                <div id='locationInputContainer'>
                    <p id='beforeWeStartText'>Before We Start</p>
                    <p id='beforeWeStartSubText'>Where Are You?</p>
                    <img alt="locationIcon" id='locationIcon' src={LocationSolidSVG}></img>
                    <div id='inputContainer'>
                        <p className={this.state.errorMessageClasses[this.state.errorState]}>please enter a valid postcode</p>
                        <input onKeyDown={(e) => this.onUserPressKeyInput(e)} placeholder='Postcode' id='userPostCodeInput'></input>
                    </div>
                    <div onClick={() => this.userSubmitPostcode()} id='btnGo'>
                            <img alt="arrowIcon" id='arrowIcon' src={ArrowSolidSVG}></img>
                    </div>
                </div>
            </div>
        )
    }
}

export default LocationInput;