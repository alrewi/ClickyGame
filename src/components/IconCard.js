import React from "react";

const style={
    iconImage: {
        width: 150,
        height: 150
    }
}

const IconCard = props => (
    <div id={props.id} style={style.iconImage} value={props.id} onClick={() => props.clickedIcon(props.id)
    }>
        <img src={props.image} alt="camping-icon" />
    </div>
);

export default IconCard;
