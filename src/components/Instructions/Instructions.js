import React from "react";
import "./Instructions.css";

function Instructions() {
    return (
        <div className="instructions">
            <p className="text-center">
                <span role="img" aria-label="">&#11088;</span>
                Click on an image to earn points, but don't click on any more than once!
                <span role="img" aria-label="">&#11088;</span>
            </p>
        </div>
    );
}

export default Instructions;