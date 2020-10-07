import React from 'react';
import CanteenCard from './miniComponents/CanteenCard';

// gte the canteen data and show it in the box
import hcanteen from "./apiData/canteen";

const CanteenBox = ({ canteen, changeCanteen }) => {
    const showCanteen = hcanteen.map(item => <CanteenCard info={item} key={item.id} canteen={canteen} changeCanteen={changeCanteen} />);
    return (
        <div>
            {showCanteen}
        </div>
    )
}
export default CanteenBox;