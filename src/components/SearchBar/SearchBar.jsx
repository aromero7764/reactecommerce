import React from 'react';

const SearchBar = () => {
    return (
        <div className="field has-addons">
            <div className="control is-expanded">
                <input className="input" type="text" placeholder="What are you looking for?"/>
            </div>
            <div className="control">
                <a className="button is-info">
                   <i className="fa-solid fa-magnifying-glass"></i>
                </a>
            </div>
        </div>
    );
};

export default SearchBar;