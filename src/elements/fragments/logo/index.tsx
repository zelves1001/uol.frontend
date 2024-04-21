import "./style.css";
import LogoPng from './assets/logo.svg';

export default function Logo() {
    return(
        <div>
            <button id='logo-container'>
                <img src={LogoPng} alt="" />
                <span>Furniro</span>
            </button>
        </div>
    );
}