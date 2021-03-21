import React from 'react';
import './search.styles.css';

export const SearchBox = props => {
        return (
                <div className="search">
                        <input type="search" placeholder={props.hint} onChange={props.onChange}/>
                </div>
        );
}