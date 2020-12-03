import React from "react";
import { Link } from "react-router-dom";

const FlightsPerMonth = () => {
    return (
        <div className="page page1">
            <div className="flagTop" />
            <div className="flagCenter">
                <h1 className="country">Argentina (PAGE 1)</h1>
                <div className="otherLinks">
                    <Link to="/">Homeeee</Link>
                </div>
            </div>
            <div className="flagBottom" />
        </div>
    );
};

export default FlightsPerMonth;