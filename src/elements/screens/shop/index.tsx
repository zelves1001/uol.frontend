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
    const [filter, setFilter] = useState(0);
  
    const shortByReceiverShop = (shortByData: any) => {
        setShortBy(shortByData);
    }

    const filterFunctionShop = (filterData: any) => {
        setFilter(filterData);
    }

    return(
        <div>
            <div id="shop">
                <Header/>
                <Banner/>
                <Filter shortByReceiverShop={shortByReceiverShop} filterFunctionShop={filterFunctionShop}/>
                <ShopProducts
                    short={shortBy}
                    filter={filter}
                />
                <Benefits/>
                <Footer/>
            </div>
        </div>
    );
}