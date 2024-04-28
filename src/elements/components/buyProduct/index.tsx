import "./style.css";
import ProductView from "../../fragments/productView";
import ProductCart from "../../fragments/productCart";

export default function BuyProduct(_props: any) {
    return(
        <div>
            <div id="buy-product">
                <ProductView
                    foto1={_props.img}
                    foto2={_props.other_images[0]}
                    foto3={_props.other_images[1]}
                    foto4={_props.other_images[2]}
                    foto5={_props.other_images[3]}
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