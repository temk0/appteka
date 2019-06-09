import React from 'react';

function ItemCard(props) {

    return(


        <div className="card  m-1 col-3 float-left m-0">
            <img src={props.item.itemUrl}
                 className="card-img-top mt-3" alt="itemcard "/>

            <div className="card-body m-0">

                <h5 className="card-title">{props.item.itemName}</h5>
                <p className="card-text">{props.item.itemDisc} </p>

                <p className="text-right m-0 font-weight-light">On recpie: {props.item.itemCost}</p>
                <p className="text-right m-0 mb-1 font-weight-bold">Private: {props.item.itemPCost}</p>
                <button className="btn btn-primary ">Add to cart</button><span>On Stock: {props.item.onStock}</span>
            </div>

        </div>


    );

}
export default ItemCard;