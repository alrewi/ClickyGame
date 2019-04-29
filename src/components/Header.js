import React from "react";

const style = {
    title: {
        textAlign: "center",
        color: "white"
    }
};

const Header = props => (
    <div style={style.title} className="container">
        <h1>Mountain Memory Match</h1>
        <p>Collect all your supplies one at a time, but don't overpack!</p>
        <p>If you pick an item twice, your pack will be too heavy and you lose.</p>
        <h3>Let's Camp!</h3>
    </div>
);

export default Header;