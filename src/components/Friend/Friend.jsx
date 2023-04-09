import React from 'react';
import './Friend.css';

const Friend = ({ring}) => {

    return (
        <div>
            <h3>Friend</h3>
            {ring && <p><small>Ring: {ring}</small></p>}
        </div>
    );
};

export default Friend;