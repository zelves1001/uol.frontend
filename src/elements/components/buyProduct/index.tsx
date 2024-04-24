import "./style.css";
import ProductView from "../../fragments/productView";
import ProductCart from "../../fragments/productCart";
import Foto1 from './assets/foto1.png';
import Foto2 from './assets/foto2.png';
import Foto3 from './assets/foto3.png';
import Foto4 from './assets/foto4.png';
import Foto5 from './assets/foto5.png';

export default function BuyProduct() {
    return(
        <div>
            <div id="buy-product">
                <ProductView
                    foto1={Foto1}
                    foto2={Foto2}
                    foto3={Foto3}
                    foto4={Foto4}
                    foto5={Foto5}
                />
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