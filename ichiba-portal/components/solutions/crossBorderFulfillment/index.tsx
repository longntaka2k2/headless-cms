import React from 'react';
import BannerCBFulfill from './banner';
import Benefit from './how-you-benefit';
import OneStop from './one-stop';
import GetCustomized from './get-customized';
import ThePower from './the-power';
import OurWarehouse from './our-warehouse';
import WhatMakes from './what-makes';
import NoteSure from './note-sure-which-product';
const CBFulfillOverview = () => { 
    return (
        <React.Fragment>
            <BannerCBFulfill/>
            <Benefit />
            <OneStop />
            <GetCustomized/>
            <ThePower/>
            <OurWarehouse />
            <WhatMakes/>
            <NoteSure/>
        </React.Fragment>
    )
}

export default CBFulfillOverview;
