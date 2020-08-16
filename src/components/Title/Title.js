import React from "react";
import "./Title.css";

function Title(props) {
    return (
        <div>
            <nav className="navbar title">
                <a href="/"><h1 className="brand homeButton">Mario Clicky Game</h1></a>
                <h1 className="brand">Click an image to begin!</h1>
                <h1 className="brand">Score: {props.score}</h1>
            </nav>
        </div>
    );
}

export default Title;