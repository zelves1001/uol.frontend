import "./style.css";
import Star from "../star";
import { useState } from "react";
import Facebook from './assets/facebook.svg';
import Linkedin from './assets/linkedin.svg';
import Twitter from './assets/twitter.svg';

const items: number[] = [...(new Array(5).keys() as any)];

export default function ProductCart(_props: any) {
    const [activeIndex, setActiveIndex] = useState<number>();

    const onClickStar = (index: number) => {
        setActiveIndex((oldState) => (oldState === index ? undefined : index));
    };

    const [selectedSize, setSelectedSize] = useState(0)
    const [selectedColor, setSelectedColor] = useState(0)

    const [value, setValue] = useState(1);

    const increment = () => {
        setValue(value + 1);
    };

    const decrement = () => {
        if (value > 1) {
        setValue(value - 1);
        }
    };
    

    return(
        <div>
            <div id="menu-buy">
                <div id="product-cart">
                    <div id="product-options">
                        <h1>{_props.name}</h1>
                        <h2>Rs. {_props.value}</h2>
                        <div id="star-container">
                            <div id="star">
                                {items.map((index) => (
                                    <Star
                                    onClick={() => onClickStar(index)}
                                    key={`star_${index}`}
                                    isActive={index <= activeIndex!}
                                    />
                                ))}
                            </div>
                            <div id="vertical-line"></div>
                            <h5>5 Customer Review</h5>
                        </div>
                        <p>{_props.description}</p>
                        <h5 className="button-title">Size</h5>
                        <div id="size-buttons">
                            <button className={`${selectedSize === 1 ? 'selected' : ''}`} onClick={() => {
                                setSelectedSize(1)
                            }}>XS</button>
                            <button className={`${selectedSize === 2 ? 'selected' : ''}`} onClick={() => {
                                setSelectedSize(2)
                            }}>L</button>
                            <button className={`${selectedSize === 3 ? 'selected' : ''}`} onClick={() => {
                                setSelectedSize(3)
                            }}>XL</button>
                        </div>
                        <h5 className="button-title">Color</h5>
                        <div id="colors-buttons">
                            <button className={`purple ${selectedColor === 1 ? 'selected-color' : ''}`} onClick={() => {
                                setSelectedColor(1)
                            }}></button>
                            <button className={`black ${selectedColor === 2 ? 'selected-color' : ''}`} onClick={() => {
                                setSelectedColor(2)
                            }}></button>
                            <button className={`golden ${selectedColor === 3 ? 'selected-color' : ''}`} onClick={() => {
                                setSelectedColor(3)
                            }}></button>
                        </div>
                    </div>
                    <div>
                        <div id="product-buy">
                            <div id="quantity-button">
                                <button onClick={decrement}>-</button>
                                <input
                                    type="number"
                                    value={value}
                                    min={1}
                                    max={100}
                                />
                                <button onClick={increment}>+</button>
                            </div>
                            <button className="button-cart">Add To Cart</button>
                            <button className="button-cart">+ Compare</button>
                        </div>
                        <div className="line"></div>
                    </div>
                    <div id="grid-infos">
                        <span>SKU</span>
                        <span>: {_props.sku}</span>
                        <span>Category</span>
                        <span>: {_props.category}</span>
                        <span>Tags</span>
                        <span>: Sofa, Chair, Home, Shop</span>
                        <span>Share</span>
                        <div id="social-media">:
                            <button><img src={Facebook} alt="" /></button>
                            <button><img src={Linkedin} alt="" /></button>
                            <button><img src={Twitter} alt="" /></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}