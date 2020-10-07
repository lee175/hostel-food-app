import React from 'react';
import { CartItems } from "./miniComponents/helpercomponents";
const CartBox = ({ cart, changeCart }) => {
    //cart is array of items in the cart. 
    const showCart = cart.map(item => <CartItems item={item} key={item.id} />)

    return (
        <div>
            <div className="cart_items_cont">
                <table className="cart_items_table">
                    <tr>
                        <th className="item_name">Name</th>
                        <th className="item_qty">Qty</th>
                        <th className="item_price">Price</th>
                        <th className="item_total">Sub Total</th>
                    </tr>
                    {showCart}
                </table>

            </div>
        </div>
    )
}

export default CartBox;