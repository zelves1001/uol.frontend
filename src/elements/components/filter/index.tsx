import "./style.css";
import RightFilter from "../../fragments/rightFilter";
import LeftFilter from "../../fragments/leftFilter";
import { useState } from "react";

interface FilterProps {
    shortByReceiverShop: (arg: any) => void;
}

const Filter: React.FC<FilterProps> = ({ shortByReceiverShop }) => {

    const [shortBy, setShortBy] = useState('none');
  
    const shortByReceiver = (shortByData: any) => {
        setShortBy(shortByData);
    }

    shortByReceiverShop(shortBy);

    return(
        <div>
            <div id="filter">
                <LeftFilter/>
                <RightFilter shortByReceiver={shortByReceiver}/>
            </div>
        </div>
    );
}

export default Filter;