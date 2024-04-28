import React, { useEffect, useState } from 'react';
import './style.css';
import Filter from './assets/filter.svg';
import Dots from './assets/dots.svg';
import Icon from './assets/icon.svg';

interface LeftFilterProps {
    filterFunction: (arg: any) => void;
}

const LeftFilter: React.FC<LeftFilterProps> = ({filterFunction}) => {
    const [showFilters, setShowFilters] = useState(false);
    const [filterSeted, setFilterSeted] = useState(0); // Estado para armazenar o número de filtros definidos

    const toggleFilters = () => {
        setShowFilters(!showFilters);
    };

    const handleDiscountsChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const isCheckedDiscount = event.target.checked;
        if (isCheckedDiscount) {
            setFilterSeted(prev => prev + 1);
        } else {
            setFilterSeted(prev => prev - 1);
        }
    };

    const handleNewChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const isCheckedNew = event.target.checked;
        if (isCheckedNew) {
            setFilterSeted(prev => prev + 2);
        } else {
            setFilterSeted(prev => prev - 2);
        }
    };

    useEffect(() => {
        filterFunction(filterSeted);
    }, [filterSeted, filterFunction]);

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
                            <input type="checkbox" onChange={handleNewChange} /> Novos
                        </label>
                        <label>
                            <input type="checkbox" onChange={handleDiscountsChange} /> Descontos
                        </label>
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

export default LeftFilter;