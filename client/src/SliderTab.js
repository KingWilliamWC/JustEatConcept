import React, { Component } from "react";

class SliderTab extends Component{
    constructor(props){
        super(props);

        this.state = {
            textClass: '',
            divClass: '',
            index: this.props.index
        }
    }
    static getDerivedStateFromProps(nextProps){
        return(nextProps);
    }
    render(){
        return(
            <div onClick={() => this.props.clickHandler(this.state.index)} key={this.state.index} className={this.state.divClass}>
                <p className={this.state.textClass}>{this.props.title}</p>
            </div>
        )
    }
}

export default SliderTab;