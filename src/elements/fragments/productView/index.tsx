import "./style.css";
import { useEffect, useState } from "react";

export default function ProductView(_props: any) {

    const [selectedImg, setSelectedImg] = useState(_props.foto1)
    const [selectedOption, setSelectedOption] = useState(1)

    useEffect(() => {
        switch (selectedOption) {
            case 1:
                setSelectedImg(_props.foto1)
                break;
            case 2:
                setSelectedImg(_props.foto2)
                break;
            case 3:
                setSelectedImg(_props.foto3)
                break;
            case 4:
                setSelectedImg(_props.foto4)
                break;
            case 5:
                setSelectedImg(_props.foto5)
                break;
            default:
                break;
        }
    })
    
    return(
        <div>
            <div id="product-view">
                <div id="product-view-buttons">
                    <button className={`view-button ${!_props.foto1 ? "hidden" : ""}`}  onClick={() => {
                        setSelectedOption(1)
                    }}><img src={_props.foto1} alt="" /></button>
                    <button className={`view-button ${!_props.foto2 ? "hidden" : ""}`}  onClick={() => {
                        setSelectedOption(2)
                    }}><img src={_props.foto2} alt="" /></button>
                    <button className={`view-button ${!_props.foto3 ? "hidden" : ""}`} onClick={() => {
                        setSelectedOption(3)
                    }}><img src={_props.foto3} alt="" /></button>
                    <button className={`view-button ${!_props.foto4 ? "hidden" : ""}`}  onClick={() => {
                        setSelectedOption(4)
                    }}><img src={_props.foto4} alt="" /></button>
                    <button className={`view-button ${!_props.foto5 ? "hidden" : ""}`} onClick={() => {
                        setSelectedOption(5)
                    }}><img src={_props.foto5} alt="" /></button>
                </div>
                <div id="product-view-img">
                    <img src={selectedImg} alt="" />
                </div>
            </div>
        </div>
    );
}