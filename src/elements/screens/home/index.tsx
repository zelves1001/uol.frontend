import "./style.css";
import Footer from "../../components/footer";
import Header from "../../components/header";
import Browse from "../../components/browse";
import Products from "../../components/products";
import Benefits from "../../components/benefits";
import Foto1 from './assets/Foto1.png';

export default function Home() {
    return(
        <div>
            <div id="home">
                <Header/>
                <img id="home-banner" src={Foto1} alt="" />
                <Browse/>
                <Products/>
                <Benefits/>
                <Footer/>
            </div>
        </div>
    );
}