import React from 'react';
import ItemCard from './ItemCard';

//this is the main container for the website where the items are shown in cards comp...


function Main(props) {

    return(

        <div className="container d-inline-block m-0 p-0 col-lg-10">

                {props.Items && props.Items.length === 0 && <span>No items matching the search query.</span>}

                        {props.Items && props.Items.map(item=> <ItemCard key={item.id} item={item} itemsInCart={props.itemsInCart}/> )}

        </div>

    );
}

export default Main