import "./style.css";
import Filter from './assets/filter.svg';
import Dots from './assets/dots.svg';
import Icon from './assets/icon.svg';

export default function LeftFilter() {
    return(
        <div>
            <div id="left-filter">
                <div id="filter-button">
                    <button><img src={Filter} alt="" /></button>
                    <span>Filter</span>
                </div>
                <button><img src={Dots} alt="" /></button>
                <button><img src={Icon} alt="" /></button>
                <div id="vertical-line"></div>
                <span id="showing-results">Showing 1–16 of 32 results</span>
            </div>
        </div>
    );
}