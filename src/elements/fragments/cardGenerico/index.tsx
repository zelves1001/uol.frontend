import "./style.css";

export default function CardGenerico(_props: any) {

    const handleClick = () => {
        window.location.href = `/shop/:${_props.category}`;
    };

    return(
        <div>
            <div onClick={handleClick} id="card-generico">
                <img src={_props.img} alt="" />
                <h4>{_props.title}</h4>
            </div>
        </div>
    );
}