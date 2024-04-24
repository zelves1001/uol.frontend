import "./style.css";
import User from './assets/user.svg';
import Search from './assets/search.svg';
import Favorite from './assets/favorite.svg';
import Cart from './assets/cart.svg';

export default function EndHeader() {
    return(
        <div>
            <ul id="icon-bar">
                <li><a href=""><img src={User} alt="" /></a></li>
                <li><a href=""><img src={Search} alt="" /></a></li>
                <li><a href=""><img src={Favorite} alt="" /></a></li>
                <li><a href=""><img src={Cart} alt="" /></a></li>
            </ul>
        </div>
    );
}