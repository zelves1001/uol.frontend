import "./style.css";
import Footer from "../../components/footer";
import Header from "../../components/header";
import Banner from "../../components/banner";
import Filter from "../../components/filter";
import Benefits from "../../components/benefits";
import ShopProducts from "../../components/shop-products";

export default function Shop() {
    return(
        <div>
            <div id="shop">
                <Header/>
                <Banner/>
                <Filter/>
                <ShopProducts/>
                <Benefits/>
                <Footer/>
            </div>
        </div>
    );
}