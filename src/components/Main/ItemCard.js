import React, {useState} from 'react';

function ItemCard(props) {


    const [showMore, setShowMore] = useState(false);

    const addToCart=(id) => {
        props.itemsInCart(id);
    };

    // if (showmore ==  true){
    //     limit = props.item.description.length;
    // } else
    //     limit = 5;
    //
    const limit = showMore ? props.item.description.length : 10;
    const handleReadMore = () => setShowMore(!showMore);

    return (


        <div className="card  m-1 col-3 float-left m-0">
            <img src={props.item.imageUrl}
                 className="card-img-top mt-3" alt="Item Image "/>

            <div className="card-body m-0">

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
                <button className="btn btn-primary " onClick={()=> addToCart(props.item)}>Add to cart</button>
                <span>On Stock: {props.item.stock}</span>
            </div>

        </div>


    );

}

export default ItemCard;