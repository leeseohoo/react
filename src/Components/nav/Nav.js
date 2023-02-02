import React from "react";
import logo from './logo.png';

const Nav = () => {
    return (
        <nav className = "menu-bar">
            <div className = "index">
                <div className = "img">
                    <img className="porfile-img" src ={logo} alt="profile"/>
                </div>
                <br/>
                <h3 className="click">ABOUT</h3>
                <h3 className="click">MEMBER</h3>
                <h3 className="click">CONTACT</h3>
                <h3 className="click">INFORMATION</h3>
            </div>
        </nav>
    )
}

export default Nav