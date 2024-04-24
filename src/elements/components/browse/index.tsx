import "./style.css";
import CardGenerico from "../../fragments/cardGenerico";
import Foto1 from './assets/Foto1.png';
import Foto2 from './assets/Foto2.png';
import Foto3 from './assets/Foto3.png';


export default function Browse() {
    return(
        <div>
            <div id="browse-title">
                <h2>Browse The Range</h2>
                <div id="browse-container">
                    <div className="card-generico">
                        <CardGenerico
                        title="Dining"
                        img={Foto1}
                        />
                    </div>
                    <div className="card-generico">
                        <CardGenerico 
                        title="Living"
                        img={Foto2}
                        />
                    </div>
                    <div>
                        <CardGenerico 
                        title="Bedroom"
                        img={Foto3}
                        />
                    </div>   
                </div>  
            </div>
        </div>
    );
}