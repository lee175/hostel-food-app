import React, { useState } from 'react';
import { BrowserRouter as Switch, Route, } from "react-router-dom";
import { LayoutALeft, LayoutARight, LoadingScreen, LoginSignupForm, OrderLayoutL, OrderLayoutR, Profile } from './components/layout';
import { windowDimensions } from './components/helperComponents'
import MainMenu from './components/MainMenu'
import canteen from './components/apiData/canteen';


function Student() {
    let [w, h] = windowDimensions();
    // height of menu 50 + padding + 30
    let finalH = h - 50;
    const [canteen, setCanteen] = useState(0);
    const [cart, setCart] = useState([]);

    const changeCanteen = (id) => {
        setCanteen(() => { return id });
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
    const UpdateCart = () => {
        console.log("good");
    }

    return (
        <div className="index">
            <MainMenu windowDimensions={windowDimensions} />
            <Switch>
                <Route path="/canteen">
                    <div className="layout" style={{ height: finalH }}>
                        <LayoutALeft canteen={canteen} changeCanteen={changeCanteen} cart={cart} UpdateCart={UpdateCart} />
                        <LayoutARight canteen={canteen} changeCart={changeCart} />
                    </div>
                </Route>
                <Route path="/profile">
                    <div className="layout" style={{ height: finalH }}>
                        <Profile />
                    </div>
                </Route>
                <Route path="/orders">
                    <div className="layout" style={{ height: finalH }}>
                        <OrderLayoutL />
                        <OrderLayoutR />
                    </div>
                </Route>
                <Route path="/">
                    <div id="login_signup_form" style={{ height: finalH }}>
                        <LoginSignupForm />
                    </div>
                </Route>
            </Switch>
        </div>
    );
}


export default Student;
