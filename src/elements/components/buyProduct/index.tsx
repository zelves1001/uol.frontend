import "./style.css";
import ProductView from "../../fragments/productView";
import ProductCart from "../../fragments/productCart";

export default function BuyProduct(_props: any) {
    return(
        <div>
            <div id="buy-product">
                <ProductView
                    foto1={_props.img}
                />
                <ProductCart
                    name={_props.name}
                    value={_props.value}
                    description={_props.description}
                    sku={_props.sku}
                    category={_props.category}
                />
            </div>
        </div>
    );
}