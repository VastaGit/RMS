import React from "react";
import {Tilt} from 'react-tilt';
import "./Logo.css";
import logo from './brai.png';

const Logo = () => {
    return (
        <div>
            <Tilt className="Tilt shadow-4 bw2 center" options={{ max: 55 }} style={{ height: 70, width: 80 }} >
                <div className="Tilt-inner pa3">
                    <img  src={logo} alt="no"></img> 
                </div>
            </Tilt>
        </div>
    )
}

export default Logo
