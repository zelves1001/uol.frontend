import "./style.css";

export default function ProductDescription(_props: any) {
    return(
        <div>
            <div id="product-big-description">
                <p>{_props.bigDescription}</p>
            </div>
        </div>
    );
}