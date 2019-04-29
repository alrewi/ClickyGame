import React from "react";

const IconCard = props => (
    <div id={props.id} value={props.id} onClick={() => props.clickedIcon(props.id)
    }>
        <img src={props.image} alt="camping-icon" />
    </div>
);

export default IconCard;
