import "./style.css";
import CardProduto from "../../fragments/cardProduto";
import CardProdutoDesconto from "../../fragments/cardProdutoDesconto";
import CardProdutoNovo from "../../fragments/cardProdutoNovo";
import ShopMenu from "../../fragments/shopMenu";
import Product1 from './assets/product1.png';

export default function ShopProducts(_props: any) {
    return(
        <div>
            <div id="products-title">
                <div id="shopproducts-container">
                    <div className="card-produto">
                        <CardProduto
                        img={Product1}
                        name="Syltherine"
                        description="Stylish cafe chair"
                        value="2.500.000"
                        />
                    </div>
                    <div className="card-produto">
                        <CardProdutoDesconto
                        img={Product1}
                        name="Syltherine"
                        description="Stylish cafe chair"
                        value="2.500.000"
                        full="3.500.000"
                        descount="30"
                        />
                    </div>
                    <div className="card-produto">
                        <CardProdutoNovo
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
                        />
                    </div>
                    <div className="card-produto">
                        <CardProdutoDesconto
                        img={Product1}
                        name="Syltherine"
                        description="Stylish cafe chair"
                        value="2.500.000"
                        full="3.500.000"
                        descount="30"
                        />
                    </div>
                    <div className="card-produto">
                        <CardProdutoNovo
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
                    <div className="card-produto">
                        <CardProduto
                        img={Product1}
                        name="Syltherine"
                        description="Stylish cafe chair"
                        value="2.500.000"
                        />
                    </div>
                </div>
                <ShopMenu/>
            </div>
        </div>
    );
}