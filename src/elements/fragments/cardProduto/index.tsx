import "./style.css";
import CardProdutoOverlay from "../cardProdutoOverlay";

export default function CardProduto(_props: any) {
    return(
        <div>
            <div id="cardproduto-container">
                <div id="img-produto">
                    <img src={_props.img} alt="" />
                    <div className={`${!_props.hasDescount ? "hidden" : ""}`} id="bolinha2">-{_props.descount}%</div>
                    <div className={`${!_props.isNew ? "hidden" : ""}`} id="bolinha">New</div>
                </div>
                <div id="descricao">
                    <h2>{_props.name}</h2>
                    <p>{_props.description}</p>
                    <div id="container-value">
                        <h3>Rp {_props.value}</h3>
                        <h4 className={`${!_props.full ? "hidden" : ""}`}>Rp {_props.full}</h4>
                    </div>
                </div>
                <CardProdutoOverlay/>
            </div> 
        </div>
    );
}