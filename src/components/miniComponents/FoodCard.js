import React from 'react';
// import heart from '../svg/heart.svg'

const FoodCard = ({ changeCart, item, currentCategory }) => {
    if (item.category === currentCategory) {
        return (
            <div className="food_card" onClick={() => changeCart({ id: item.id, name: item.name, price: item.price, quantity: 1 })}>
                <div className="food_image">
                    <div className="food_image_deco">
                        {/* <img src={heart} alt="heart logo" /> */}
                    </div>
                </div>
                <div className="food_item">
                    {item.name}
                </div>
            </div>
        )
    } else {
        return (null)
    }
}

export default FoodCard;