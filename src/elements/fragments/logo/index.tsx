import "./style.css";
import LogoPng from './assets/logo.svg';

export default function Logo() {

    const handleClick = () => {
        window.location.href = '/';
    };

    return(
        <div>
            <button onClick={handleClick} id='logo-container'>
                <img src={LogoPng} alt="" />
                <span>Furniro</span>
            </button>
        </div>
    );
}
