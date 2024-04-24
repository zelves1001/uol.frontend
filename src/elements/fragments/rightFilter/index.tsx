import "./style.css";

export default function RightFilter() {
    return(
        <div>
            <div id="right-filter">
                <div className="right-form">
                    <h3>Show</h3>
                    <form>
                        <input type="number" placeholder="16" id="form-number"></input>
                    </form>
                </div>
                <div className="right-form">
                    <h3>Short by</h3>
                    <form>
                        <input type="text" placeholder="Default" id="form-text"></input>
                    </form>
                </div>
            </div>
        </div>
    );
}