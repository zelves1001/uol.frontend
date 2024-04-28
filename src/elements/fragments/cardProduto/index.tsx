import "./style.css";
import Compare from './assets/compare.svg';
import Share from './assets/share.svg';
import Like from './assets/like.svg';

export default function CardProduto(_props: any) {

    const handleClick = () => {
        window.location.href = `/productDetail/:${_props.id}`;
    };

    return(
        <div>
            <div id="cardproduto-container">
                <div id="img-produto">
                    <img src={_props.img} alt={_props.name} />
                    <div className={`${!_props.hasDiscount ? "hidden" : ""}`} id="bolinha2">-{_props.discountPercentage}%</div>
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
                <div>
                    <div id="product-overlay">
                        <div>
                            <button id="see-details" onClick={handleClick} >See Details</button>
                        </div>
                        <div id="product-icons">
                            <button>
                                <img src={Share} alt="" />
                                Share
                            </button>
                            <button>
                                <img src={Compare} alt="" />
                                Compare
                            </button>
                            <button>
                                <img src={Like} alt="" />
                                Like
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    );
}