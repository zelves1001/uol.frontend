import "./style.css";

export default function CenterHeader() {
    return(
        <div>
            <ul id="nav-bar">
                <li><a href="/">Home</a></li>
                <li><a href="/shop/:0">Shop</a></li>
                <li><a href="">About</a></li>
                <li><a href="">Contact</a></li>
            </ul>
        </div>
    );
}
