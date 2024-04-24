import "./style.css";
import Footer1 from "../../fragments/footer1";
import Footer2 from "../../fragments/footer2";
import Footer3 from "../../fragments/footer3";
import Footer4 from "../../fragments/footer4";

export default function Footer() {
    return(
        <div id="final-footer">
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)' }} id="container">
                <Footer1/>
                <Footer2/>
                <Footer3/>
                <Footer4/>
            </div>
            <div id="line"></div>
            <div id="rights">
                <div>2023 furino. All rights reverved</div>
            </div>
        </div>
    );
}