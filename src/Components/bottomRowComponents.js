import React from 'react';


const bottomRowComponents = (props) => {
    const {title, value} = props;
    return (
        <div className="down">
            <h3 className="down__title">{title}</h3>
            <div className="down__value">{value}</div>
        </div>
    )
};

export default bottomRowComponents;