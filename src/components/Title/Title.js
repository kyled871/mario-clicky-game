import React from "react";
import "./Title.css";

function Title() {
    return (
        <nav className="navbar title">
                <a href="/"><h1 className="brand">Mario Clicky Game</h1></a>
                <h1 className="brand">Click an image to begin!</h1>
                <h1 className="brand">Score: </h1>
        </nav>

    );
}

export default Title;