import "./style.css";
import Certified from './assets/certified.svg';
import Shipping from './assets/shipping.svg';
import Support from './assets/support.svg';
import Trophy from './assets/trophy.svg';

export default function Benefits() {
    return(
        <div>
            <div id="benefits-container">
                <div className="benefit">
                    <img src={Trophy} alt="" />
                    <div className="text-benefit">
                        <h2>High Quality</h2>
                        <span>Crafted from top materials</span>
                    </div>
                </div>
                <div className="benefit">
                    <img src={Certified} alt="" />
                    <div className="text-benefit">
                        <h2>Warranty Protection</h2>
                        <span>Over 2 years</span>
                    </div>
                </div>
                <div className="benefit">
                    <img src={Shipping} alt="" />
                    <div className="text-benefit">
                        <h2>Free Shipping</h2>
                        <span>Order over 150 $</span>
                    </div>
                </div>
                <div className="benefit">
                    <img src={Support} alt="" />
                    <div className="text-benefit">
                        <h2>24 / 7 Support</h2>
                        <span>Dedicated support</span>
                    </div>
                </div>
            </div>
        </div>
    );
}