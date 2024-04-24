import "./style.css";

export default function Footer4() {
    return(
        <div>
            <div id="newsletter-container">
                <ul>
                    <li className="with-margin"><span>Newsletter</span></li>
                    <li>
                        <div className="subscribe-form">
                            <form>
                                <input type="text" placeholder="Enter Your Email Address"></input>
                                <button type="submit">SUBSCRIBE</button>
                            </form>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
}