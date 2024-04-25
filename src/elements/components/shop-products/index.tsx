import "./style.css";
import CardProduto from "../../fragments/cardProduto";
import ShopMenu from "../../fragments/shopMenu";
import { useEffect, useState } from "react";

interface Product {
    id: number;
    name: string;
    description: string;
    price: number;
    image_link: string;
}

export default function ShopProducts(_props: any) {
    const [info, setInfo] = useState(1);

    const childToParent = (childdata: any) => {
        setInfo(childdata);
    }
    
    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch(`http://localhost:3888/products?page=${info}&pageSize=16&sort=none`);
                const data = await response.json();
                setProducts(data.slice(0, 300000));
                console.log(data);
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };

        fetchProducts();
    }, [info]);

    return (
        <div>
            <div id="products-title">
                <div id="shopproducts-container">
                    {products.map((product) => (
                        <div key={product.id} className="card-produto">
                            <CardProduto
                                img={product.image_link}
                                name={product.name}
                                description={product.description}
                                value={product.price}
                                hasDescount={false}
                                isNew={false}
                            />
                        </div>
                    ))}
                </div>
                <ShopMenu childToParent={childToParent}/>
            </div>
        </div>
    );
}
