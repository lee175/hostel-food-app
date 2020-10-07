import React from 'react';

// gte the canteen data and show it in the box

const OrderCont = ({ canteen, changeCanteen }) => {
    return (
        <div>
            <OrderCard />
        </div>
    )
}
export default OrderCont;

const OrderCard = () => {
    return (
        <div className="order_card">
            <div>
                <p><b>Name</b>: Anurag Fogawat</p>
                <p><b>Ticket</b>: #2458795</p>
                <p><b>Hostel</b>: 9</p>
                <p><b>Total</b>: $546</p>
                <p><b>Order Staust</b>: Not Accepted</p>
            </div>
        </div>
    )
}