import React from 'react';

const NotMatched = () => {
    const divStyle = {
        color: "red",
        textAlign: "center"
    }
    return (
        <div style={divStyle}>
            <p>Your route is not found!</p>
            <h1>404 ERROR!</h1>
        </div>
    );
};

export default NotMatched;