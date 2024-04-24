import "./style.css";
import Foto1 from './assets/foto1.png';
import Arrow from './assets/arrow.svg';

export default function Banner() {
    return(
        <div>
            <div id="banner">
                <img src={Foto1} alt="" />
                <div id="banner-text">
                    <h1>Shop</h1>
                    <div id="banner-buttons">
                        <a href="/">Home</a>
                        <img src={Arrow} alt="" />
                        <span>Shop</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
