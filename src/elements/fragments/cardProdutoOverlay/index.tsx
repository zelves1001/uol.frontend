import "./style.css";
import Compare from './assets/compare.svg';
import Share from './assets/share.svg';
import Like from './assets/like.svg';

export default function CardProdutoOverlay(_props: any) {
    return(
        <div>
            <div id="product-overlay">
                <div>
                    <button id="see-details">See Details</button>
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
    );
}