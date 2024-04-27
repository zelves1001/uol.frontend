import "./style.css";
import ProductDescription from "../../fragments/productDescription";

export default function Description(_props: any) {
    return(
        <div>
            <div id="description">
                <div id="description-titles">
                    <h2>Description</h2>
                    <h2 id="additional-information">Additional Information</h2>
                </div>
                <ProductDescription
                    bigDescription={_props.bigDescription}
                />
            </div>
        </div>
    );
}