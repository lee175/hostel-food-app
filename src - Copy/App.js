import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import './app.css';
import './color.css';

import MainMenu from './components/MainMenu';
import ChartBox from './components/ChartBox';

import CanteenBox from './components/CanteenBox';
import MenuBox from './components/MenuBox';
import CartBox from './components/CartBox';


function App() {

  const [Canteen, setCanteen] = useState(0);
  const [cart, setCart] = useState([]);

  const changeCanteen = (id) => {
    setCanteen(l => id);
  }
  const changeCart = (item) => {
    // cart item looks like name:food_name , id: "item_id", price:"menu_price" quantity: 2
    const itemId = item.id;
    let newItem = true;
    const updatecart = cart.map((i) => {
      if (i.id === itemId) {
        newItem = false;
        let q = i.quantity + 1;
        return ({ name: i.name, id: i.id, price: i.price, quantity: q });
      } else {
        return (i);
      }
    })
    newItem ? setCart(cart => [...cart, item]) : setCart(() => updatecart);
  }


  return (
    <div className="index_page">
      <MainMenu />
      <div className="page_content">

        <Switch>
          {/* ================================canteen page render=============================== */}
          <Route path="/canteen">
            <div id="left_bar">
              <h2 id="app_name">App Name</h2>
              <div id="left_bar_head">
                Select Canteen
              </div>
              <LeftBar canSelected={Canteen} fun={changeCanteen} cart={cart} changeCart={changeCart} />
            </div>

            <div id="right_bar">
              <h2>Menu</h2>
              <RightBar canSelected={Canteen} changeCart={changeCart} />
            </div>
          </Route>
          {/* ================================Profile page render=============================== */}

          <Route path="/profile"></Route>
          <Route path="/orders"></Route>
          <Route path="/">
            <div id="left_bar">
              <h2 id="app_name">App Name</h2>
              <div id="left_bar_head">
                Select Canteen
              </div>
              <LeftBar canSelected={Canteen} fun={changeCanteen} cart={cart} changeCart={changeCart} />
            </div>

            <div id="mapping">
            </div>
          </Route>
        </Switch>
      </div>
    </div>
  );

}

const LeftBar = ({ canSelected, fun, cart, changeCart }) => {
  return (
    !canSelected ? <CanteenBox changeCanteen={fun} /> : <CartBox cart={cart} changeCart={changeCart} />
  )
}

const RightBar = ({ canSelected, changeCart }) => {
  return (
    canSelected ? <MenuBox canteen={canSelected} changeCart={changeCart} /> : <p>animation is visible here</p>
  )
}


export default App;
