import React from 'react'

const CanteenCard = ({ fun, info }) => {
    return (
        <div className="canteen_card" onClick={() => fun(info.h)}>
            <div>Hostel: {info.h}</div>
            <div>Phone: {info.phone}</div>
            <div>{info.nickName}</div>
            <div>Timing: {info.time}</div>
            <div className="canteen_card_deco">
                {info.h}
                <div className="canteen_card_deco_cut"></div>
            </div>
        </div>
    )
}

export default CanteenCard;