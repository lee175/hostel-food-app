import React from 'react';

const CartItem = ({ item }) => {
    return (
        <tr>
            <td className="item_name">{item.name}</td>
            <td className="item_qty">{item.quantity}</td>
            <td className="item_price">{item.price}</td>
            <td className="item_total">{item.price * item.quantity}</td>
        </tr>
    )
}
export default CartItem;