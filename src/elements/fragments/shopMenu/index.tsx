import { useState } from "react";
import "./style.css";

export default function ShopMenu() {

    const [selectedButton, setSelectedButton] = useState(1)

    
    return(
        <div>
            <div id="shop-menu">
                <div id="menu-numbers">
                    <button className={`${selectedButton === 1 ? 'selected' : ''}`} onClick={() => {
                        setSelectedButton(1)
                    }}>1</button>
                    <button className={`${selectedButton === 2 ? 'selected' : ''}`} onClick={() => {
                        setSelectedButton(2)
                    }}>2</button>
                    <button className={`${selectedButton === 3 ? 'selected' : ''}`} onClick={() => {
                        setSelectedButton(3)
                    }}>3</button>
                </div>
                <button id="menu-next" onClick={() => {
                        setSelectedButton(selectedButton + 1)
                        if(selectedButton > 2){
                            setSelectedButton(1)
                        }
                    }}>Next</button>
            </div>
        </div>
    );
}