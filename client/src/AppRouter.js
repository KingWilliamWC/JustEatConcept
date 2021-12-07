import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import LocationInput from './LocationInput';
import Seach from './Search';
import Area from './Area';
import ViewRestraunt from './ViewRestraunt';

// page structure amongst all pages
import './App.css';

class AppRouter extends Component {
    componentDidMount = () => {
        // ensure height works on all devices, I hate css
        document.documentElement.style.setProperty('--vh', `${window.innerHeight * 0.01}px`);
    }
    render(){
        var urlBase = 'https://localhost/';
        var routes = {
            'search': `${urlBase}search`,
            'locationselect': `${urlBase}locationselect`,
            'area': `${urlBase}area`,
            'viewrestraunt': `${urlBase}viewrestraunt`
        }
        return(
            <Router>
                <Routes>
                    <Route exact path='/locationselect'element={<LocationInput routes={routes}/>} />
                    <Route exact path='/search' element={<Seach routes={routes}/>} />
                    <Route exact path='/area' element={<Area routes={routes}/>} />
                    <Route exact path='/viewRestraunt' element={<ViewRestraunt routes={routes}/>} />
                </Routes>
            </Router>
        )
    }
}

export default AppRouter;