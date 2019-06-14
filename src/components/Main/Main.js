import React from 'react';
import ItemCard from './ItemCard';

//this is the main container for the website where the items are shown in cards comp...


function Main(props) {

    return(

        <div className="container">
            <div className="d-inline-block bg-light col-10 p-0">
                {props.Items && props.Items.length === 0 && <span>No items matching the search query.</span>}
                <ul className="list-inline list-group-horizontal ">
                    <li className="">
                        {props.Items && props.Items.map(item=> <ItemCard key={item.id} item={item} itemsInCart={props.itemsInCart}/> )}
                    </li>
                </ul>

            </div>
        </div>

    );
}

export default Main