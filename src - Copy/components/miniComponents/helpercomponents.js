import React from 'react';

export const CategortList = ({ name, active, fun }) => {
    if (name === active) {
        return <li className="active" onClick={() => { fun(name) }}>{name}<div className="food_cat_deco"></div></li>
    } else {
        return <li onClick={() => { fun(name) }}>{name}</li>
    }
}

export const CartItems = ({ item }) => {
    // this items has following properties
    // name:food_name , id: "item_id", price:"menu_price" quantity: 2
    return (
        <tr>
            <td className="item_name">{item.name}</td>
            <td className="item_qty">{item.quantity}</td>
            <td className="item_price">{item.price}</td>
            <td className="item_total">{item.price * item.quantity}</td>
        </tr>
    )
}