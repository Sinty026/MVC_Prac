import React, { useState } from 'react'
import Card from "./CardV3"
//import cardData from "../assets/itemData.json"


const CardList = ({ }) => {
    //let cardData = [

    //    { itemId: 1, itemName: "record 1", itemDescription: "record 1 description", itemCost: 15.00, itemImage: "https://upload.wikimedia.org/wikipedia/commons/0/04/So_happy_smiling_cat.jpg" },

    //    { itemId: 2, itemName: "record 2", itemDescription: "record 2 description", itemCost: 10.00, itemImage: "https://upload.wikimedia.org/wikipedia/commons/0/04/So_happy_smiling_cat.jpg" },

    //    { itemId: 3, itemName: "record 3", itemDescription: "record 3 description", itemCost: 5.00, itemImage: "https://upload.wikimedia.org/wikipedia/commons/0/04/So_happy_smiling_cat.jpg" },

    //]

    const [cardData, setState] = useState([]);

    React.useEffect(() => {

        fetch("http://localhost:5042/api/ItemsWebAPI")
            .then(response => response.json())
            .then(data => setState(data))
            .catch(err => {
                console.log(err);
            });


    }, [])


    return (
        <div className="row">
            {cardData.map((obj) => (
                <Card
                    key={obj.itemId}
                    itemId={obj.itemId}
                    itemName={obj.itemName}
                    itemDescription={obj.itemDescription}
                    itemCost={obj.itemCost}
                    itemImage={obj.itemImage}
                 />
            )            
            )
            }



        </div>
    )



}


export default CardList;