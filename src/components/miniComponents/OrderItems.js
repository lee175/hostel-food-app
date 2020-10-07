import React from 'react'


// get the oredr summary, as item image, item name, whether its in favourite, price, quantity,
const OrderItems = () => {
    return (
        <div className="order_content">
            <Order />
        </div>
    )
}

const Order = () => {
    return (
        <div className="orderItem">
            <div className="order_item_desc">
                <p><b>Omlet</b></p>
                <p>Price: $16</p>
                <p>H</p>
            </div>
            <div className="order_item_quantity">
                $5
            </div>
            <div className="order_item_sub_total">
                $90
            </div>
        </div>
    )
}

export default OrderItems