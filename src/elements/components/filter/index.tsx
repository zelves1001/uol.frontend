import "./style.css";
import RightFilter from "../../fragments/rightFilter";
import LeftFilter from "../../fragments/leftFilter";

export default function Filter() {
    return(
        <div>
            <div id="filter">
                <LeftFilter/>
                <RightFilter/>
            </div>
        </div>
    );
}