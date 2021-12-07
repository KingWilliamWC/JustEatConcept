import React, { Component } from "react";

//self components
import LocationInput from './LocationInput';
import HomePage from './HomePage';

class App extends Component{
    constructor(props){
        super(props);

        this.state = {
            isLocation: false,
        }
    }

    componentDidMount(){
        console.log("Mounted")
    }

    onValidLocation = () => {
        this.setState({isLocation: true})
    }

    render(){
        return(
            <div id='app'>
                {this.state.isLocation ? <HomePage /> : <LocationInput onValidLocation={this.onValidLocation}/>}
            </div>
        )
    }
}

export default App;