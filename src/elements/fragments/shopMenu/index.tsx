import { useEffect, useState } from "react";
import "./style.css";

interface ShopMenuProps {
    childToParent: (arg: any) => void;
}

const ShopMenu: React.FC<ShopMenuProps> = ({ childToParent }) => {

    const [selectedButton, setSelectedButton] = useState(1)
    
    return(
        <div>
            <div id="shop-menu">
                <div id="menu-numbers">
                    <button className={`${selectedButton === 1 ? 'selected' : ''}`} onClick={() => {setSelectedButton(1); childToParent(1);}}>1</button>
                    <button className={`${selectedButton === 2 ? 'selected' : ''}`} onClick={() => {setSelectedButton(2); childToParent(2);}}>2</button>
                    <button className={`${selectedButton === 3 ? 'selected' : ''}`} onClick={() => {setSelectedButton(3); childToParent(3);}}>3</button>
                </div>
                <button id="menu-next" onClick={() => {setSelectedButton(selectedButton + 1); childToParent(selectedButton + 1);
                     if(selectedButton > 2){
                        setSelectedButton(1);
                        childToParent(1);
                    }
                }}>Next</button>
            </div>
        </div>
    );
}

export default ShopMenu;