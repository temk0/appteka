import React, { useState, useEffect } from 'react';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from'../Footer/Footer';
import {getAllItems} from "../../Services/ItemService";
import {LocationProvider, Router} from "@reach/router";
import CartPage from "../../pages/CartPage";

function App() {

    const [items,setItems] = useState(null);

    const [cartItems, setCartItems] = useState(new Set());

    const addToCart = (item) => {
        const nova = new Set(cartItems);
        nova.add(item);
        setCartItems(nova);
    };


    useEffect(()=>{
        getAllItems().then(res=> setItems(res));
    }, []);


  return (
      <div className="container-fluid bg-light">
        <Header cartItems={cartItems} />
          <LocationProvider>
              <Router>
                  <Main Items={items} itemsInCart={addToCart} path="/" />
                  <CartPage cartItems={cartItems} path="/cart"/>
              </Router>
          </LocationProvider>
        <Footer />
      </div>
  );
}

export default App;
