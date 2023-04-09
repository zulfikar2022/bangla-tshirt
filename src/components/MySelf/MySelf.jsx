import React from 'react';
import './MySelf.css';
import Special from '../Special/Special';

const MySelf = ({ring}) => {
    return (
        <div>
            <h3>My self</h3>
            <Special ring={ring}></Special>
        </div>
    );
};

export default MySelf;