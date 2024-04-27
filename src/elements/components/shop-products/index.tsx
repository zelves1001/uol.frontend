import "./style.css";
import CardProduto from "../../fragments/cardProduto";
import ShopMenu from "../../fragments/shopMenu";
import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';

interface Product {
    id: number;
    name: string;
    description: string;
    price: number;
    image_link: string;
}

export default function ShopProducts(_props: any) {
    const { id } = useParams();
    const novaId = id ? id.replace(/:/g, '') : '';
    const [info, setInfo] = useState(1);

    console.log(novaId)

    const childToParent = (childdata: any) => {
        setInfo(childdata);
    }

    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        var pageUrl = "";
        const url = () =>{
            if(novaId == "0" || undefined){
                pageUrl = `http://localhost:3888/products?page=${info}&pageSize=16&sort=${_props.short}`;
            }
            else if(novaId == "1" || novaId == "2" || novaId == "3"){
                pageUrl = `http://localhost:3888/products/category/${novaId}?page=${info}&pageSize=16&sort=${_props.short}`;
            }
        };
        const fetchProducts = async () => {
            try {
                const response = await fetch(pageUrl);
                const data = await response.json();
                setProducts(data.slice(0, 300000));
                console.log(data);
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };

        url();
        fetchProducts();
    }, [info, novaId, _props.short]);

    return (
        <div>
            <div id="products-title">
                <div id="shopproducts-container">
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
                <ShopMenu childToParent={childToParent}/>
            </div>
        </div>
    );
}
