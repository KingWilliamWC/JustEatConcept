import React, { Component } from "react";

import './Area.css';

import CuisineSlider from "./CuisineSlider";
import RestrauntRow from "./RestrauntRow";

import LocationSolidSVG from './SVG/Location-Solid.svg';
import EditOutlineSVG from './SVG/Edit-Outline.svg';
import EditSolidSVG from './SVG/Edit-Solid.svg';
import SearchSolidSVG from './SVG/Search-Solid.svg';


class Area extends Component{
    constructor(props){
        super(props);

        this.state = {
            postcode: '',
            editState: 0,
            editImages: [EditOutlineSVG, EditSolidSVG],
            sliderTabs: [],
        }
    }
    componentDidMount(){
        var url = new URL(window.location.href);
        var area = url.searchParams.get("location");
        if(area){
            this.setState({postcode: area});
        }
    }

    onMouseEnterEdit = () => {
        this.setState({editState: 1});
    }

    onMouseExitEdit = () => {
        this.setState({editState: 0})
    }

    onEditClick = () => {
        window.location.href = `${this.props.routes.locationselect}?ref=${this.state.postcode}`
    }

    render(){
        return(
            
            <div id='area'>
                <div id='areaWrapper'>
                    <div id='areaPreviewContainer'>
                        <img id='locationIconArea' src={LocationSolidSVG}></img>
                        <p id='postcodeText'>{this.state.postcode.toUpperCase()}</p>
                        <img onClick={() => this.onEditClick()} onMouseEnter={() => this.onMouseEnterEdit()} onMouseLeave={() => this.onMouseExitEdit()} id='editIcon' src={this.state.editImages[this.state.editState]}></img>
                    </div>
                    <div id='questionContainer'>
                        <p id='questionText'>What Do You Want?</p>
                    </div>
                    <div id='foodSearchContainer'>
                        <img id='searchIcon' src={SearchSolidSVG}></img>
                        <input placeholder='Search for all your favourite food' id='searchInput'></input>
                    </div>
                    <div id='mainContentContainer'>
                        <CuisineSlider title={"Cuisines"}/>
                        <div className='categoryContainer'>
                            <RestrauntRow routes={this.props.routes} index={0} rowTitle={"Popular in the area"}/>
                            <RestrauntRow routes={this.props.routes} index={1} rowTitle={"Top-Rated in the area"}/>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default Area;