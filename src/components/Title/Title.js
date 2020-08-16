import React from "react";
import "./Title.css";

function Title(props) {
    return (
        <div>
            <nav className="navbar title homeButton">
                <a href="/"><h1 className="brand homeButton">Mario Clicky Game</h1></a>
                <h1 className="brand mr-3">{props.msg || "Click a character to begin!"}</h1>
                <h2 className="brand mr-3">Score: {props.score}<br></br> High Score: {props.highScore}</h2>
            </nav>
        </div>
    );
}

export default Title;