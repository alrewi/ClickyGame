import React from "react";

const style = {
    scoreDiv: {
        textAlign: "center"
    },
    scores: {
        color: "white",
        padding: 10
    }
};

const Score = props => (
    <div style={style.scoreDiv} className="container">
        <p style={style.scores}>Current Score: {props.currentScore}</p>
        <p style={style.scores}>High Score: {props.highScore}</p>
        <p style={style.scores}>{props.status}</p>
    </div>
);

export default Score;