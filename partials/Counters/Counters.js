import React from 'react';

const Counters = (props) => {
    return (
        <div className="flow-right controls counts">
            <span>Item count: <span id="item-count">{props.itemCount}</span></span>
            <span>Unchecked count: <span id="unchecked-count">{props.uncheckedCount}</span></span>
        </div>
    )
}

export default Counters;