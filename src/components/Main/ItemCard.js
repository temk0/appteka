import React, {useState} from 'react';
import {faShoppingCart} from "@fortawesome/free-solid-svg-icons/faShoppingCart";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import ItemModal from "./ItemModal";
import image1 from "../../assets/GettyImages-508498022-600x414.jpg";


function ItemCard(props) {

    const [showMore, setShowMore] = useState(false);

    const [disableBtn, setDisableBtn] = useState(false);

    const [openModal, setOpenModal] = useState(false);


    const closeModal = () => {
        setOpenModal(false);
    };

    const handleDisableBtn = () => setDisableBtn(!disableBtn);

    const addToCart = (id) => {
        handleDisableBtn();
        props.itemsInCart(id);

    };

    const limit = showMore ? props.item.description.length : 50;
    const handleReadMore = () => setShowMore(!showMore);

    return (


        <div className="card">
            {!<img src={props.item.imageUrl}
                   className="card-img-top mt-3" alt="text "/> ? null :
                <img className="card-img-top w-30 h-20" src={image1} alt="drug"/>}

            <div className="card-body">

                <h5 className="card-title">{props.item.name}</h5>
                {
                    !showMore ?
                        (props.item.description.length > limit ? <div> {props.item.description.substring(0, limit)}
                            <small>...</small><small onClick={handleReadMore} className="btn-link" > Read More</small>
                        </div> : props.item.description) :
                        (props.item.description.length > limit ? props.item.description.substring(0, limit) :
                            <div> {props.item.description}
                                <small className="btn-link"  onClick={handleReadMore}>  Read Less</small>
                            </div>)
                }

                <p className="text-right m-0">{props.item.recipe ? <b>On recipe: {props.item.recipePrice}</b> : <span>On recpie: {props.item.recipePrice}</span>  }</p>
                <p className="text-right m-0 mb-1">{!props.item.recipe ? <b>Private: {props.item.price}</b> : <span>Private: {props.item.price}</span>  }</p>
                <p className="text-right">
                    On Stock:
                    {!props.item.stock ? <b className="text-danger"> Empty </b> : <span className="text-success pl-lg-4">{props.item.stock}</span>}
                </p>
                <div className="row">
                    <div className="col-lg-6 offset-1">
                        {!props.item.stock ? <button className="btn btn-success " disabled={true}
                                                      onClick={() => addToCart(props.item)}>Add to: <FontAwesomeIcon icon={faShoppingCart}/>
                        </button> : <button className="btn btn-success " disabled={disableBtn}
                                            onClick={() => addToCart(props.item)}>Add to: <FontAwesomeIcon icon={faShoppingCart}/>
                        </button> }
                    </div>
                    <div className="col-lg-4 text-right">
                        <ItemModal show={openModal} onHide={closeModal}  Item={props.item}/>
                    </div>




                </div>
            </div>

        </div>


    );

}

export default ItemCard;