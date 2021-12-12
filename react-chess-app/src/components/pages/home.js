import React, {Component} from "react";
import {PlayRandomMoveEngine} from "../sections/chessLogic"
export default class Home extends Component {
    // constructor(props)
    // {
    //     super(props)
    // }

    render() {
        return (
            <div className="page-wrapper">
                <PlayRandomMoveEngine />
            </div>
        );
        
    }
}