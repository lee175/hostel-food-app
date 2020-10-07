import React from 'react';


const CategortList = ({ name, active, fun }) => {
    if (name === active) {
        return <li className="active" onClick={() => { fun(name) }}>{name}<div className="food_cat_deco"></div></li>
    } else {
        return <li onClick={() => { fun(name) }}>{name}</li>
    }
}
export default CategortList;