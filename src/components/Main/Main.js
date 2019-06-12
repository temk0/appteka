import React from 'react';
import ItemCard from './ItemCard';

//this is the main container for the website where the items are shown in cards comp...


function Main(props) {

    return(

        <div className="container col-12 mt-3 p-0">
            <div className="d-inline-block col-2 pt-5 float-left text-info  text-center p-0">
                <ul className="list-group bg-light ">
                    <li className="list-inline-item">
                        <a href="#" className="nav-link border-top text-uppercase text-primary">Home</a>
                    </li>
                    <li className="list-inline-item">
                        <a href="#" className="nav-link border-top text-uppercase text-primary">On Recipe</a>
                    </li>
                    <li className="list-inline-item">
                        <a href="#" className="nav-link border-top text-uppercase text-primary">On Stock</a>
                    </li>
                    <li className="list-inline-item">
                        <a href="#" className="nav-link border-top border-bottom text-uppercase text-primary">All Items</a>
                    </li>


                </ul>
            </div>

            <div className="d-inline-block bg-light col-10 p-0">
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