import React, { useState } from 'react';
import './style.css';

interface RightFilterProps {
    shortByReceiver: (arg: any) => void;
}

const RightFilter: React.FC<RightFilterProps> = ({ shortByReceiver }) => {
    const [sortBy, setSortBy] = useState('Default');
    const [showOptions, setShowOptions] = useState(false);

    const handleOptionClick = (option: any) => {
        setSortBy(option);
        setShowOptions(false);
    };

    return (
        <div>
            <div id="right-filter">
                <div className="right-form">
                    <h3>Show</h3>
                    <form>
                        <input type="number" placeholder="16" id="form-number"></input>
                    </form>
                </div>
                <div className="right-form">
                    <h3>Short by</h3>
                    <div className="dropdown">
                        <button onClick={() => setShowOptions(!showOptions)}>{sortBy}</button>
                        <div className={`dropdown-content ${showOptions ? 'show' : ''}`}>
                            <button onClick={() => {handleOptionClick('Descending'); shortByReceiver('desc')}}>Descending</button>
                            <button onClick={() => {handleOptionClick('Ascending'); shortByReceiver('asc')}}>Ascending</button>
                            <button onClick={() => {handleOptionClick('Default'); shortByReceiver('none')}}>Default</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default RightFilter;
