import React, {useState} from 'react';
import {deleteItem} from "../../Services/ItemService";

function ItemCard(props) {


    const [showMore, setShowMore] = useState(false);

    const [disableBtn, setDisableBtn] = useState(false);

    const handleDisableBtn = () => setDisableBtn(!disableBtn);

    const addToCart=(id) => {
        handleDisableBtn();
        props.itemsInCart(id);

    };

    // if (showmore ==  true){
    //     limit = props.item.description.length;
    // } else
    //     limit = 5;
    //
    const limit = showMore ? props.item.description.length : 50;
    const handleReadMore = () => setShowMore(!showMore);

    const  handleDelete = id => {
        deleteItem(id).then(window.location.reload());
    };

    return (


        <div className="card">
            {!<img src={props.item.imageUrl}
                 className="card-img-top mt-3" alt="text "/> ? null :
            <img className="card-img-top w-60 h-40" src="http://placehold.it/120x80" alt="prewiew"/>}

            <div className="card-body">

                <h5 className="card-title">{props.item.name}</h5>
                {
                    !showMore ?
                        (props.item.description.length > limit ? <div> {props.item.description.substring(0, limit)}
                            <button onClick={handleReadMore} className="btn btn-link">Read More</button>
                        </div> : props.item.description) :
                        (props.item.description.length > limit ? props.item.description.substring(0, limit) :
                            <div> {props.item.description}
                                <button className="btn btn-link" onClick={handleReadMore}> Read Less</button>
                            </div>)
                }


                <p className="text-right m-0 font-weight-light">On recpie: {props.item.recipePrice}</p>
                <p className="text-right m-0 mb-1 font-weight-bold">Private: {props.item.price}</p>
                <p className="text-right">
                    On Stock:
                    {!props.item.stock ? 0 : <span className="text-success pl-lg-4">yes</span>}

                </p>
                <div className="row">
                <div className="col-lg-6 offset-1"><button className="btn btn-primary " disabled={disableBtn} onClick={()=> addToCart(props.item)}>Add to cart</button></div>
                <div className="col-lg-4 text-right"><button className="btn btn-danger" onClick={()=> handleDelete(props.item.id)}>Delete</button></div>
                </div>
            </div>

        </div>


    );

}

export default ItemCard;