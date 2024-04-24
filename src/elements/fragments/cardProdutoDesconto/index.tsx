import "./style.css";
import CardProdutoOverlay from "../cardProdutoOverlay";

export default function CardProdutoDesconto(_props: any) {
    return(
        <div>
            <div id="cardproduto-container">
                <div id="img-produto">
                    <img src={_props.img} alt="" />
                    <div id="bolinha2">-{_props.descount}%</div>
                </div>
                <div id="descricao">
                    <h2>{_props.name}</h2>
                    <p>{_props.description}</p>
                    <div id="container-value">
                        <h3>Rp {_props.value}</h3>
                        <h4>Rp {_props.full}</h4>
                    </div>
                </div>
                <CardProdutoOverlay/>
            </div> 
        </div>
    );
}