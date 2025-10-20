function Card(props) {
    return (
        <div className="card" style={{ width: 18 + 'rem' }} >
            <img className="card-img-top" src={props.itemImage} alt={"Image of " + props.itemName} />
            <div className="card-body">
                <h5 className="card-title">{props.itemName}</h5>
                <p className="card-text">{props.itemDesctiprion}</p>
                <p className="card-text">{props.itemCost }</p>
                <a href="#" className="btn btn-primary">Go somewhere {props.itemId}</a>
                </div>
        </div>
    )
}

export default Card;