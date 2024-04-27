import React, { useState } from 'react';
import './style.css';
import Filter from './assets/filter.svg';
import Dots from './assets/dots.svg';
import Icon from './assets/icon.svg';

export default function LeftFilter() {
    const [showFilters, setShowFilters] = useState(false);

    const toggleFilters = () => {
        setShowFilters(!showFilters);
    };

    return (
        <div>
            <div id="left-filter">
                <div id="filter-button">
                    <button onClick={toggleFilters}><img src={Filter} alt="" /></button>
                    <span>Filter</span>
                </div>
                {showFilters && (
                    <div id="filter-list">
                        <label>
                            <input type="checkbox" /> Filter 1
                        </label>
                        <label>
                            <input type="checkbox" /> Filter 2
                        </label>
                        <label>
                            <input type="checkbox" /> Filter 3
                        </label>
                        {/* Add more filters here */}
                    </div>
                )}
                <button><img src={Dots} alt="" /></button>
                <button><img src={Icon} alt="" /></button>
                <div id="vertical-line"></div>
                <span id="showing-results">Showing 1–16 of 32 results</span>
            </div>
        </div>
    );
}
