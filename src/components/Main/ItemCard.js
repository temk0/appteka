import React from 'react';

function ItemCard(props) {

    return(


        <div className="card  m-1 col-3 float-left m-0">
            <img src={props.item.imageUrl}
                 className="card-img-top mt-3" alt="Item Image "/>

            <div className="card-body m-0">

                <h5 className="card-title">{props.item.name}</h5>
                <p className="card-text">{props.item.description} </p>

                <p className="text-right m-0 font-weight-light">On recpie: {props.item.recipePrice}</p>
                <p className="text-right m-0 mb-1 font-weight-bold">Private: {props.item.price}</p>
                <button className="btn btn-primary ">Add to cart</button><span>On Stock: {props.item.stock}</span>
            </div>

        </div>


    );

}
export default ItemCard;