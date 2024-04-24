import "./style.css";
import Logo from "../../fragments/logo";
import CenterHeader from "../../fragments/centerHeader";
import EndHeader from "../../fragments/endHeader";

export default function Header() {
    return(
        <div>
            <div id="header">
                <Logo/>
                <CenterHeader/>
                <EndHeader/>
            </div>
        </div>
    );
}