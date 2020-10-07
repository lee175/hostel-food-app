import React, { useState } from 'react';
import CategortList from './miniComponents/CategoryList'
import FoodCard from './miniComponents/FoodCard';

//get canteen menu based on the selected canteen //and category
import canteenMenu from './apiData/canteenMenu';
const menuCat = ["burger", "juice", "maggi", "fruits", "veg", "non-veg"];
//default selected category is 1st one


const CanteenMenuBox = ({ canteen, changeCart }) => {

    const [cat, setCat] = useState(menuCat[0]);
    const changeCategory = (c) => {
        setCat(() => c);
    };

    const showCat = menuCat.map(categ => <CategortList name={categ} key={categ} active={cat} fun={changeCategory} />);
    const showMenu = canteenMenu.map(item => <FoodCard key={item.id} item={item} currentCategory={cat} changeCart={changeCart} />);

    return (
        <div className="canteen_menu_cont">
            <div id="canteen_menu_head"><h2>Menu</h2></div>
            <div id="canteen_menu_category">
                <ul>
                    {showCat}
                </ul>
            </div>
            <div id="canteen_menu_food" >
                {showMenu}
            </div>
        </div>
    )
}
export default CanteenMenuBox