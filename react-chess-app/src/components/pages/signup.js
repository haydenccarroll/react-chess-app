import React, {Component} from "react";
import {SignUpContainer as SignUpContainer} from "../sections/signup/SignUpContainer"
export default class Signup extends Component {
    constructor(props)
    {
        super(props)
    }

    render() {
        return (
            <div className="page-wrapper">
                <SignUpContainer />
            </div>

        );
        
    }
}
