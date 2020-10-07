import React, { useState } from 'react';
import './css/layout.css';
import { CategortList } from './miniComponents/helpercomponents';
import FoodCard from './miniComponents/FoodCard';

//get canteen menu based on the category selected and hostel number
import canteenMenu from './apidata/canteenMenu';
// get menucategory to render seperately
const menuCat = ["burger", "juice", "maggi", "fruits", "veg", "non-veg"];

const MenuBox = ({ canteen, changeCart }) => {
    const [cat, setCat] = useState(menuCat[0]);
    const changeCategory = (c) => {
        setCat(() => c);
    };

    const showCat = menuCat.map(categ => <CategortList name={categ} key={categ} active={cat} fun={changeCategory} />);
    const showMenu = canteenMenu.map(item => <FoodCard key={item.id} item={item} currentCategory={cat} changeCart={changeCart} />);


    return (
        <div id="show_menu">
            <div id="food_category">
                <ul>
                    {showCat}
                </ul>
            </div>
            <div className="show_menu_food" >
                {showMenu}
            </div>
        </div>
    );
}



export default MenuBox;