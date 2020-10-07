import React from 'react';
import CanteenCard from './miniComponents/CanteenCard';


// gte the canteen data and show it in the box
import canteen from "./apidata/canteen";

const CanteenBox = ({ changeCanteen }) => {
    const showCanteen = canteen.map(item => <CanteenCard fun={changeCanteen} info={item} key={item.id} />);

    return (
        <div>
            {showCanteen}
        </div>
    )
}
export default CanteenBox;