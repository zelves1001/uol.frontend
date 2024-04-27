import "./style.css";
import CardProduto from "../../fragments/cardProduto";
import Product1 from './assets/product1.png';
import { useEffect, useState } from "react";

interface Product {
    id: number;
    name: string;
    description: string;
    price: number;
    image_link: string;
}

export default function Products(_props: any) {

    const handleClick = () => {
        window.location.href = '/shop/:0';
    };

    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch(`http://localhost:3888/products?page=1&pageSize=8&sort=none`);
                const data = await response.json();
                setProducts(data.slice(0, 300000));
                console.log(data);
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };

        fetchProducts();
    }, []);

    return(
        <div>
            <div id="products-title">
                <h1>Our Products</h1>
                <div id="products-container">
                    {products.map((product) => (
                        <div key={product.id} className="card-produto">
                            <CardProduto
                                id={product.id}
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
                <button onClick={handleClick} id="show-more">Show More</button>
            </div>
        </div>
    );
}