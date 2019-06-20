import React from 'react';
import ItemCard from './ItemCard';

//this is the main container for the website where the items are shown in cards comp...


function Main(props) {

    return (

        <div className="row mt-2">

            {props.Items && props.Items.length === 0 && <span>No items matching the search query.</span>}
            {props.Items && props.Items.sort((a,b) => b.id > a.id ).map(item =>
                <div className="col-lg-4 mt-3">
                    <ItemCard key={item.id} item={item} itemsInCart={props.itemsInCart}/>
                </div>)}

        </div>

    );
}

export default Main