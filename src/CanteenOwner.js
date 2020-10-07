import React from 'react';
import { windowDimensions } from './components/helperComponents'
import MainMenu from './CanteenOwner/mainMenu'

const CanteenOwner = () => {
    let [w, h] = windowDimensions();
    return (
        <div className="canteen" style={{ height: h }}>
            <MainMenu />
        </div>
    )
}

export default CanteenOwner