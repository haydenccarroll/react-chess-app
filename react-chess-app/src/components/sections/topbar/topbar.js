import React from "react";
import SignupButton from "../signup/signup-button"
import LoginButton from "../login/login-button"

export default function TopBar() {
    return (
        <div className="topbar-container">
            <div className="topbar-button-container">
                <SignupButton />

            </div>
            <div className="topbar-button-container">
                <LoginButton />
            </div>
        </div>
    );
}
