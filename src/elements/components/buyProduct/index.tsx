import "./style.css";
import ProductView from "../../fragments/productView";
import ProductCart from "../../fragments/productCart";

export default function BuyProduct() {
    return(
        <div>
            <div id="buy-product">
                <ProductView/>
                <ProductCart
                    name="Asgaard sofa"
                    value="Rs. 250,000.00"
                    description="Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound."
                    sku="SS001"
                    category="Sofas"
                />
            </div>
        </div>
    );
}