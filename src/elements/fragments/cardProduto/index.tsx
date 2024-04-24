import "./style.css";
import CardProdutoOverlay from "../cardProdutoOverlay";

export default function CardProduto(_props: any) {
    return(
        <div>
            <div id="cardproduto-container">
                <img src={_props.img} alt="" />
                <div id="descricao">
                    <h2>{_props.name}</h2>
                    <p>{_props.description}</p>
                    <h3>Rp {_props.value}</h3>
                </div>
                <CardProdutoOverlay/>
            </div> 
        </div>
    );
}