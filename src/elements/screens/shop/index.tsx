import "./style.css";
import Footer from "../../components/footer";
import Header from "../../components/header";
import Banner from "../../components/banner";
import Filter from "../../components/filter";
import Benefits from "../../components/benefits";
import ShopProducts from "../../components/shop-products";
import { useState } from "react";

export default function Shop() {

    const [shortBy, setShortBy] = useState('none');
  
    const shortByReceiverShop = (shortByData: any) => {
        setShortBy(shortByData);
    }

    return(
        <div>
            <div id="shop">
                <Header/>
                <Banner/>
                <Filter shortByReceiverShop={shortByReceiverShop}/>
                <ShopProducts
                    short={shortBy}
                />
                <Benefits/>
                <Footer/>
            </div>
        </div>
    );
}