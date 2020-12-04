import React from "react";
import { Link } from "react-router-dom";

const Weather = () => {
    return (
        <div className="page page1">
            <div className="flagTop" />
            <div className="flagCenter">
                <h1 className="country">Argentina (PAGE 1)</h1>
                <div className="otherLinks">
                    <Link to="/">Homeeeemjn</Link>
                </div>
            </div>
            <div className="flagBottom" />
        </div>
    );
};

export default Weather;