import { Link } from "react-router-dom";

const CardV3 = ({ itemId, itemName, itemDescription, itemCost, itemImage }) => (
        <div className="card" style={{ width: 18 + 'rem' }} >
            <img className="card-img-top" src={itemImage} alt={"Image of " + itemName} />
            <div className="card-body">
                <h5 className="card-title">{itemName}</h5>
                <p className="card-text">{itemDescription}</p>
                <p className="card-text">${itemCost}</p>
                <Link to={`/Products/${itemId}`} className="btn btn-primary">Details</Link>
            </div>
        </div>
)

export default CardV3;