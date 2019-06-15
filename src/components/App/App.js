import React, { useState, useEffect } from 'react';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from'../Footer/Footer';
import {getAllItems, searchItems} from "../../Services/ItemService";
import {LocationProvider, Router} from "@reach/router";
import CartPage from "../../pages/CartPage";
import SideBar from "../Main/SideBar";
import AddItem from "../../pages/AddItem";

function App() {

    const [items,setItems] = useState(null);

    const [cartItems, setCartItems] = useState(new Set());

    const addToCart = (item) => {
        const nova = new Set(cartItems);
        nova.add(item);
        setCartItems(nova);
    };

    const deleteFromCart = id => {
        const nova = new Set(cartItems);

        nova.forEach(item => {
            if (id === item.id){
                nova.delete(item);
            }
        });
        setCartItems(nova);
    };

    const search = search => {
        searchItems(search).then(res => setItems(res));
    };

    useEffect(()=>{
        getAllItems().then(res=> setItems(res));
    }, []);

  return (
      <div className="container-fluid bg-light p-lg-0 align-content-center">
          <Header search={search} cartItems={cartItems} />
          <SideBar/>
          <LocationProvider>
              <Router>
                  <Main Items={items} itemsInCart={addToCart} path="/" />
                  <CartPage cartItems={cartItems} deleteFromCart={deleteFromCart} path="/cart"/>
                  <AddItem path="/add-item"/>
              </Router>
          </LocationProvider>
          <Footer />
      </div>
  );
}

export default App;
