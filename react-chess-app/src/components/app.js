import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";

import Home from "./pages/home";
import NoMatch from "./pages/no-match";
import Signup from "./pages/signup"

const packageJson = require("../../package.json");

export default class App extends Component {
    render() {
        return (
            <div className='container'>
                <Router basename={packageJson.homepage}>
                    <div>
                        <Routes>
                            <Route exact path="/" element={<Home />}/>
                            <Route exact path="/sign-up" element={<Signup />}/>
                            <Route exact path="*" element={ <NoMatch /> }/>
                        </Routes>
                    </div>
                </Router>
          </div>
      );
    }
}