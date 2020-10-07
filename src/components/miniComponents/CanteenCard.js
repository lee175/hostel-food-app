import React from 'react'

const CanteenCard = ({ info, canteen, changeCanteen }) => {
    let s = false;
    canteen === info.h ? s = true : s = false;
    if (s) {
        return (
            <div className="canteen_card active" onClick={() => changeCanteen(info.h)}>
                <div>Hostel: {info.h}</div>
                <div>{info.phone}</div>
                <div>{info.nickName}</div>
                <div>Timing: {info.time}</div>
                {/* <div className="canteen_card_deco">
                {info.h}
                <div className="canteen_card_deco_cut"></div>
            </div> */}
            </div>
        )
    } else {
        return (
            <div className="canteen_card " onClick={() => changeCanteen(info.h)}>
                <div>Hostel: {info.h}</div>
                <div>{info.phone}</div>
                <div>{info.nickName}</div>
                <div>Timing: {info.time}</div>
                {/* <div className="canteen_card_deco">
                {info.h}
                <div className="canteen_card_deco_cut"></div>
            </div> */}
            </div>
        )
    }
}
export default CanteenCard;
