import React, {Component} from "react";
import {PlayRandomMoveEngine} from "../sections/chessLogic"
import TopBar from "../sections/topbar/topbar"
export default class Home extends Component {
    // constructor(props)
    // {
    //     super(props)
    // }

    render() {
        return (
            <div className="page-container">
                <TopBar />
                <div className="header">
                    <h1>Let's play some chess!</h1>
                </div>
                <div className="chess-board-container">
                    <PlayRandomMoveEngine />
                </div>
            </div>
        );
        
    }
}