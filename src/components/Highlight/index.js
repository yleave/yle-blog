import React from "react";

function Highlight({children, color}) {
    return (<span
        style={{
            backgroundColor: color || '#0099CC',
            borderRadius: '4px',
            color: 'white',
            padding: '0.2rem',
        }}>
        {children}
    </span>)
};

export default Highlight;