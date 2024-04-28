import "./style.css";
import Footer from "../../components/footer";
import RelatedProducts from "../../components/relatedProducts";
import PageGuider from "../../components/pageGuider";
import Description from "../../components/description";
import BuyProduct from "../../components/buyProduct";
import Header from "../../components/header";
import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';

interface Product {
    id: number;
    name: string;
    description: string;
    sku: string;
    price: number;
    image_link: string;
    categoryId: number;
    large_description:string
    other_images_link: string
}


export default function ProductDetail() {
    const { id } = useParams();
    const novaId = id ? id.replace(/:/g, '') : '';

    const [product, setProduct] = useState<Product | null>(null);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await fetch(`http://localhost:3888/products/${novaId}`);
                const data = await response.json();
                setProduct(data);
                console.log(data);
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };

        fetchProduct();
    }, [id]);

    return(
        <div>
            {product && (
            <div id="product-detail">
                <Header/>
                <PageGuider
                    name={product.name}
                />
                <BuyProduct
                    img={product.image_link}
                    name={product.name}
                    value={product.price}
                    description={product.description}
                    sku={product.sku}
                    category={product.categoryId}
                    other_images={product.other_images_link}
                />
                <div className="line"></div>
                <Description
                    bigDescription={product.large_description}
                />
                <RelatedProducts
                    category={(product.categoryId)}
                />
                <div className="line"></div>
                <Footer/>
            </div>
            )}
        </div>
    );
}