import "./style.css";

export default function CardGenerico(_props: any) {
    return(
        <div>
            <div id="card-generico">
                <img src={_props.img} alt="" />
                <h4>{_props.title}</h4>
            </div>
        </div>
    );
}