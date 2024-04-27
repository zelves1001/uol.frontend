import "./style.css";
import Arrow from './assets/arrow.svg';

export default function PageGuider(_props: any) {
    
    return(
        <div>
            <div id="page-guider">
                <div id="guider-links">
                    <a id="afastar" href="/">Home</a>
                    <img src={Arrow} alt="" />
                    <a href="/shop/:0">Shop</a>
                    <img src={Arrow} alt="" />
                </div>
                <div id="guider-product">
                    <div id="vertical-line"></div>
                    <span>{_props.name}</span>
                </div>
            </div>
        </div>
    );
}
