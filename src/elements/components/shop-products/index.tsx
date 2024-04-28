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
    has_discount: boolean;
    is_new: boolean;
    discount_percent: number;
    other_images_link: string;
    discount_price: number;
}

export default function ShopProducts(_props: any) {
    const { id } = useParams();
    const novaId = id ? id.replace(/:/g, '') : '';
    const [info, setInfo] = useState(1);

    const childToParent = (childdata: any) => {
        setInfo(childdata);
    }

    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        var pageUrl = "";
        const url = () =>{
            if((novaId == "0" || undefined) && (_props.filter == 0)){
                pageUrl = `http://localhost:3888/products?page=${info}&pageSize=16&sort=${_props.short}`;
            }
            else if((novaId == "0" || undefined) && (_props.filter == 1)){
                pageUrl = `http://localhost:3888/products/hasDiscount/true?page=${info}&pageSize=16&sort=${_props.short}`;
            }
            else if((novaId == "0" || undefined) && (_props.filter == 2)){
                pageUrl = `http://localhost:3888/products/isNew/true?page=${info}&pageSize=16&sort=${_props.short}`;
            }
            else if((novaId == "0" || undefined) && (_props.filter == 3)){
                pageUrl = `http://localhost:3888/products/isNewOrHasDiscount/true/true?page=${info}&pageSize=16&sort=${_props.short}`;
            }
            else if((novaId == "1" || novaId == "2" || novaId == "3") && (_props.filter == 0)){
                pageUrl = `http://localhost:3888/products/category/${novaId}?page=${info}&pageSize=16&sort=${_props.short}`;
            }
            else if((novaId == "1" || novaId == "2" || novaId == "3") && (_props.filter == 1)){
                pageUrl = `http://localhost:3888/products/category/${novaId}/hasDiscount/true?page=${info}&pageSize=16&sort=${_props.short}`;
            }
            else if((novaId == "1" || novaId == "2" || novaId == "3") && (_props.filter == 2)){
                pageUrl = `http://localhost:3888/products/category/${novaId}/isNew/true?page=${info}&pageSize=16&sort=${_props.short}`;
            }
            else if((novaId == "1" || novaId == "2" || novaId == "3") && (_props.filter == 3)){
                pageUrl = `http://localhost:3888/products/categoryOr/${novaId}/isNew/true/hasDiscount/true?page=${info}&pageSize=16&sort=${_props.short}`;
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
    }, [info, novaId, _props.short, _props.filter]);

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
                                hasDiscount={product.has_discount}
                                isNew={product.is_new}
                                discountPercent={product.discount_percent}
                                discountPrice={product.discount_price}
                            />
                        </div>
                    ))}
                </div>
                <ShopMenu childToParent={childToParent}/>
            </div>
        </div>
    );
}
