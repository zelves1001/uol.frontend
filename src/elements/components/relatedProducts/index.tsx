import "./style.css";
import CardProduto from "../../fragments/cardProduto";
import Product1 from './assets/product1.png';

export default function RelatedProducts(_props: any) {
    return(
        <div>
            <div id="products-title">
                <h1>Related Products</h1>
                <div id="products-container">
                    <div className="card-produto">
                        <CardProduto
                        img={Product1}
                        name="Syltherine"
                        description="Stylish cafe chair"
                        value="2.500.000"
                        />
                    </div>
                    <div className="card-produto">
                        <CardProduto
                        img={Product1}
                        name="Syltherine"
                        description="Stylish cafe chair"
                        value="2.500.000"
                        full="3.500.000"
                        descount="30"
                        />
                    </div>
                    <div className="card-produto">
                        <CardProduto
                        img={Product1}
                        name="Syltherine"
                        description="Stylish cafe chair"
                        value="500.000"
                        />
                    </div>
                    <div className="card-produto">
                        <CardProduto
                        img={Product1}
                        name="Syltherine"
                        description="Stylish cafe chair"
                        value="2.500.000"
                        />
                    </div>
                </div>
                <button id="show-more">Show More</button>
            </div>
        </div>
    );
}