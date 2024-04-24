import "./style.css";
import Footer from "../../components/footer";
import RelatedProducts from "../../components/relatedProducts";
import PageGuider from "../../components/pageGuider";
import Description from "../../components/description";
import BuyProduct from "../../components/buyProduct";
import Header from "../../components/header";


export default function ProductDetail() {
    return(
        <div>
            <div id="product-detail">
                <Header/>
                <PageGuider
                    name="Asgaard sofa"
                />
                <BuyProduct/>
                <div className="line"></div>
                <Description/>
                <RelatedProducts/>
                <div className="line"></div>
                <Footer/>
            </div>
        </div>
    );
}