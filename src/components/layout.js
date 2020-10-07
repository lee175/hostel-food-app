import React from 'react';
import CanteenBox from './CanteenBox';
import OrderCont from './miniComponents/OrderCard'
import OrderItems from './miniComponents/OrderItems'
import { WhiteLoadingAnim } from './miniComponents/Animation'
import CanteenMenuBox from './canteenMenuBox';
import { windowDimensions } from './helperComponents';
import CartBox from './miniComponents/CartBox'
// window.addEventListener('resize', updateSize);

let [w, h] = windowDimensions();
let hfinal = h - 110;
export const LayoutALeft = ({ canteen, changeCanteen, cart, UpdateCart }) => {
    if (!canteen) {
        return (
            <div className="left_cont" style={{ height: hfinal }}>
                <h2>App Name</h2>
                <div id="cont_head">
                    <p>Select Canteen</p>
                </div>
                <div id="left_content">
                    <CanteenBox canteen={canteen} changeCanteen={changeCanteen} />
                </div>
            </div>
        )
    } else {
        return (
            <div className="left_cont" style={{ height: hfinal }}>
                <h2>App Name</h2>
                <div id="cont_head">
                    <p>Cart</p>
                </div>
                <div id="left_content">
                    <CartBox cart={cart} UpdateCart={UpdateCart} />
                </div>
                <div className="cart_summary">
                    <div className="buy_button">Send The Order</div>
                    <div><span>Total:</span> $545</div>
                    <div><span>Name:</span> Anurag Fogawat</div>
                    <div><span>Order Type:</span> Single</div>
                </div>
            </div>
        )
    }
}

export const LayoutARight = ({ canteen, changeCart }) => {
    if (canteen) {
        return (
            <div className="right_cont" style={{ height: hfinal }}>
                <CanteenMenuBox canteen={canteen} changeCart={changeCart} />
            </div>
        )
    } else {
        return (
            <div className="right_cont" style={{ height: hfinal }}>
                <WhiteLoadingAnim h={hfinal} />
            </div>
        )
    }
}

export const LoadingScreen = ({ h }) => {
    return (
        <div id="loading_screen" style={{ height: h }}>
        </div>
    )
};

export const LoginSignupForm = () => {
    return (
        <div id="login_signup_form_cont">
            <div id="signup_form">
                <h2>Hello</h2>
                <p>Sign into your account</p>
                <form>
                    <input type="number" placeholder="roll number" />
                    <input type="password" placeholder="password" />
                    <input type="submit" value="Sign In" className="form_button" />
                </form>
            </div>

            <div id="login_form">
                <h2>Welcome Back</h2>
                <p>Student Login</p>
                <p>Canteen Login</p>
            </div>
        </div>
    )
}

export const OrderLayoutL = () => {
    return (
        <div className="left_cont" style={{ height: hfinal }}>
            <h2>App Name</h2>
            <div id="cont_head">
                <p>Your Orders</p>
            </div>
            <div id="left_content">
                <OrderCont />
            </div>
        </div>
    )
}

export const OrderLayoutR = () => {
    return (
        <div className="right_cont" style={{ height: hfinal }}>
            <h2>Menu</h2>
            <div className="summary_line"></div>
            <OrderItems />
        </div>
    )
}

export const Profile = () => {
    return (
        <div className="right_cont" style={{ height: hfinal }}>
        </div>
    )
}