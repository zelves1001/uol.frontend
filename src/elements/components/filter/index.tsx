import "./style.css";
import RightFilter from "../../fragments/rightFilter";
import LeftFilter from "../../fragments/leftFilter";
import { useState } from "react";

interface FilterProps {
    shortByReceiverShop: (arg: any) => void;
    filterFunctionShop: (arg: any) => void;
}

const Filter: React.FC<FilterProps> = ({ shortByReceiverShop, filterFunctionShop}) => {

    const [shortBy, setShortBy] = useState('none');
    const [filter, setFilter] = useState(0);
  
    const shortByReceiver = (shortByData: any) => {
        setShortBy(shortByData);
    }
  
    const filterFunction = (filterData: any) => {
        setFilter(filterData);
    }

    filterFunctionShop(filter);
    shortByReceiverShop(shortBy);

    return(
        <div>
            <div id="filter">
                <LeftFilter filterFunction={filterFunction}/>
                <RightFilter shortByReceiver={shortByReceiver}/>
            </div>
        </div>
    );
}

export default Filter;